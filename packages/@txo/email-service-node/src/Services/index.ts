/**
 * @Author: Ondrej Mikulas <ondrej.mikulas@technologystudio.sk>
 * @Date: 2020-03-30T16:03:34+02:00
 * @Copyright: Technology Studio
**/

import { Service } from './Types'
import { createService as createEmailService } from './EmailService'

export const createService: Service = {
  email: createEmailService(),
}
