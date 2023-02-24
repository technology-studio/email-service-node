/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2022-11-07T21:11:64+01:00
 * @Copyright: Technology Studio
**/

import type { Address } from 'nodemailer/lib/mailer'

export class EmailAddressBuilder {
  list: (string | Address)[]

  static normalise = (value: string | Address | (string | Address)[] | undefined): (string | Address)[] => (
    value != null
      ? typeof value === 'object' && Array.isArray(value)
        ? value
        : value !== ''
          ? [value]
          : []
      : []
  )

  static equals = (left: string | Address, right: string | Address): boolean => (
    (typeof left === 'string' ? left : left.address) === (typeof right === 'string' ? right : right.address)
  )

  constructor (initial: string | Address | (string | Address)[] | undefined) {
    this.list = EmailAddressBuilder.normalise(initial)
  }

  add (value: string | Address | (string | Address)[] | undefined): EmailAddressBuilder {
    const normalisedValue = EmailAddressBuilder.normalise(value)

    normalisedValue.forEach(newEmailAddress => {
      const existingEmailAddress = this.list.find(existingEmailAddress => EmailAddressBuilder.equals(existingEmailAddress, newEmailAddress))
      if (existingEmailAddress == null || existingEmailAddress === '') {
        this.list.push(newEmailAddress)
      }
    })

    return this
  }

  get (): string | Address | (string | Address)[] | undefined {
    return this.list.length > 1 ? this.list : this.list.length === 1 ? this.list[0] : undefined
  }
}
