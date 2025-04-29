// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvalidPhoneNumberFilterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The returned filter results.
   * 
   * *   **YES**: the valid phone number. The mappings are returned.
   * *   **NO**: the invalid phone number. No mappings are returned.
   * 
   * @example
   * YES
   */
  code?: string;
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
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      encryptedNumber: 'EncryptedNumber',
      expireTime: 'ExpireTime',
      originalNumber: 'OriginalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      encryptedNumber: 'string',
      expireTime: 'string',
      originalNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

