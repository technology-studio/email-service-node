/**
 * @Author: Ondrej Mikulas <ondrej.mikulas@technologystudio.sk>
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2020-03-30T16:03:85+02:00
 * @Copyright: Technology Studio
**/

import type { EmailOptions } from 'email-templates'
import Email from 'email-templates'
import { createTransport } from 'nodemailer'
import { configManager } from '@txo-peer-dep/email-service-node'

import type {
  Service as EmailService,
} from './Types/EmailServiceTypes'

export const createService = (): EmailService => {
  const sendEmail = async <EMAIL_OPTIONS extends EmailOptions>(emailOptions: EMAIL_OPTIONS): Promise<void> => {
    const transport = createTransport({
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

    await email
      .send(emailOptions)
      // eslint-disable-next-line no-console
      .then(() => { console.log(`email sent to: ${emailOptions.message?.to?.toString() ?? 'missing recipient email address'}`) })
      // eslint-disable-next-line no-console
      .catch(console.error)
  }
  return {
    sendEmail,
  }
}
