/**
 * @Author: Ondrej Mikulas <ondrej.mikulas@technologystudio.sk>
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2020-03-30T16:03:98+02:00
 * @Copyright: Technology Studio
**/

import type {
  EmailTemplate, GetEmailTemplateOptions,
} from '@txo-peer-dep/email-service-node'
export type Service = {
  sendEmail: <EMAIL_TEMPLATE extends EmailTemplate>(template: EMAIL_TEMPLATE, emailOptions: GetEmailTemplateOptions<EMAIL_TEMPLATE>) => Promise<void>,
}
