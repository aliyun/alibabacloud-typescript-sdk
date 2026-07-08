// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PhoneNumberStatusForAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * > On the **My Applications** page in the [Phone Number Intelligence console](https://dytns.console.aliyun.com/analysis/apply), obtain the authorization ID. This ID is the authorization code.
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
   * - If `Mask` is set to `NORMAL`, this parameter is an 11-digit mobile phone number.
   * 
   * - If `Mask` is set to `MD5`, this parameter is a 32-character hashed string.
   * 
   * - If `Mask` is set to `SHA256`, this parameter is a 64-character hashed string.
   * 
   * - If `Mask` is set to `SM3`, this parameter is a 64-character hashed string.
   * 
   * >Notice: 
   * 
   * The letters in the hashed string are case-insensitive.
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
   * - **NORMAL**: The number is not encrypted.
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

