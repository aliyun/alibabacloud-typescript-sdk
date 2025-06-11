// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhoneEncryptionPublicKeyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The public key.
   * 
   * @example
   * -----BEGIN PUBLIC KEY-----
   * AAA
   * BBB
   * CCC
   * DDD
   * EEE
   * FFF
   * GGG
   * -----END PUBLIC KEY-----
   */
  encryptionPublicKey?: string;
  /**
   * @remarks
   * The validity state of the public key. Valid values:
   * 
   * *   MISMATCH: The public key is invalid.
   * *   VALID: The public key is valid.
   * 
   * @example
   * VALID
   */
  encryptionPublicKeyStatus?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 86138000**
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionPublicKey: 'EncryptionPublicKey',
      encryptionPublicKeyStatus: 'EncryptionPublicKeyStatus',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionPublicKey: 'string',
      encryptionPublicKeyStatus: 'string',
      phoneNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

