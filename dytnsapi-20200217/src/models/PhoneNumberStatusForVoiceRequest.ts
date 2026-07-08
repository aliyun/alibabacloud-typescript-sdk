// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PhoneNumberStatusForVoiceRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * > The authorization code is the authorization ID that you can find on the **My Applications** page of the [Phone Number Encyclopedia console](https://dytns.console.aliyun.com/analysis/apply).
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to query.
   * 
   * - If you set `Mask` to `NORMAL`, specify an 11-digit mobile number.
   * 
   * - If you set `Mask` to `MD5`, specify a 32-bit encrypted string.
   * 
   * - If you set `Mask` to `SHA256`, specify a 64-bit encrypted string.
   * 
   * - If you set `Mask` to `SM3`, specify a 64-bit encrypted string.
   * 
   * >Notice: 
   * 
   * The letters in the encrypted string are not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * 139****1234
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * 
   * - **NORMAL**: The number is in plaintext.
   * 
   * - **MD5**
   * 
   * - **SHA256**
   * 
   * - **SM3**
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

