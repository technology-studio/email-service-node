/**
 * @Author: Ondrej Mikulas <ondrej.mikulas@technologystudio.sk>
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2020-03-30T16:03:98+02:00
 * @Copyright: Technology Studio
**/

import type { EmailOptions } from 'email-templates'

export type Service = {
  sendEmail: <EMAIL_OPTIONS extends EmailOptions>(emailOptions: EMAIL_OPTIONS) => Promise<void>,
}
