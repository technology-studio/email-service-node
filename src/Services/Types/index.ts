/**
 * @Author: Ondrej Mikulas <ondrej.mikulas@technologystudio.sk>
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2020-03-30T16:03:26+02:00
 * @Copyright: Technology Studio
**/

import type { Service as EmailService } from './EmailServiceTypes'

export type Service = {
  email: EmailService,
}
