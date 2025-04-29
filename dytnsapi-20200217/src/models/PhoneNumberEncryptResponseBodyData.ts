// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PhoneNumberEncryptResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The encrypted phone number.
   * 
   * @example
   * 1400513****
   */
  encryptedNumber?: string;
  /**
   * @remarks
   * The time when the phone number expires.
   * 
   * @example
   * 2022-05-27 16:05:23
   */
  expireTime?: string;
  /**
   * @remarks
   * The original phone number.
   * 
   * @example
   * 1390000****
   */
  originalNumber?: string;
  outId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedNumber: 'EncryptedNumber',
      expireTime: 'ExpireTime',
      originalNumber: 'OriginalNumber',
      outId: 'OutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedNumber: 'string',
      expireTime: 'string',
      originalNumber: 'string',
      outId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

