/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2021-02-20T16:02:52+01:00
 * @Copyright: Technology Studio
**/

import type { EmailOptions } from 'email-templates'

export type TemplateEmailOptions<TEMPLATE, LOCALS> = Omit<EmailOptions<LOCALS>, 'template'> & {
  template: TEMPLATE,
}
