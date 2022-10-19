/**
 * @Author: Ondrej Mikulas <ondrej.mikulas@technologystudio.sk>
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2020-03-30T16:03:98+02:00
 * @Copyright: Technology Studio
**/

import type { EmailOptions } from 'email-templates'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AllEmailTemplates {

}

type EmailTemplate = keyof AllEmailTemplates

type GetEmailTemplateOptions<EMAIL_TEMPLATE extends EmailTemplate> = AllEmailTemplates[EMAIL_TEMPLATE] extends EmailOptions ? AllEmailTemplates[EMAIL_TEMPLATE] : never

export type Service = {
  sendEmail: <EMAIL_TEMPLATE extends EmailTemplate>(template: EMAIL_TEMPLATE, emailOptions: GetEmailTemplateOptions<EMAIL_TEMPLATE>) => Promise<void>,
}
