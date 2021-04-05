/**
 * @Author: Ondrej Mikulas <ondrej.mikulas@technologystudio.sk>
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2020-03-30T16:03:85+02:00
 * @Copyright: Technology Studio
**/

import Email, { EmailOptions } from 'email-templates'
import nodemailer from 'nodemailer'
import AWS from 'aws-sdk'

import {
  Service as EmailService,
} from './Types/EmailServiceTypes'

import { configManager } from '@txo-peer-dep/email-service-node'

export const createService = (): EmailService => {
  const sendEmail = async <EMAIL_OPTIONS extends EmailOptions>(emailOptions: EMAIL_OPTIONS): Promise<void> => {
    // TODO: do we need this anymore ?
    AWS.config.update({ region: configManager.config.awsSesRegion })
    // const ses = new AWS.SES({ apiVersion: emailConfig.AWS_SES_API_VERSION })

    const transport = nodemailer.createTransport({
      host: `email-smtp.${configManager.config.awsSesRegion}.amazonaws.com`,
      port: 465,
      secure: true,
      auth: {
        user: configManager.config.awsSmtpUsername,
        pass: configManager.config.awsSmtpPassword,
      },
      debug: true,
    })

    const email = new Email({
      message: {
        from: configManager.config.defaultEmailAddressFrom,
      },
      send: true,
      transport,
    })

    return email
      .send(emailOptions)
      .then(() => console.log(`email sent to: ${emailOptions.message?.to?.toString() ?? 'missing recipient email address'}`))
      .catch(console.error)
  }
  return {
    sendEmail,
  }
}
