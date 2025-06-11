// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePhoneEncryptionPublicKeyRequest extends $dara.Model {
  /**
   * @remarks
   * SpaceId/instanceId of ISV sub clients.
   * 
   * @example
   * 399382882
   */
  custSpaceId?: string;
  /**
   * @remarks
   * Encrypt the public key.
   * 
   * This parameter is required.
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
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 86138000
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      encryptionPublicKey: 'EncryptionPublicKey',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      encryptionPublicKey: 'string',
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

