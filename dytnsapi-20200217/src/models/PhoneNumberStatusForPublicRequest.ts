// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PhoneNumberStatusForPublicRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * > On the **My Applications** page of the [Phone Number Intelligence console](https://dytns.console.aliyun.com/analysis/apply), you can obtain the authorization ID and use it as the authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to be queried.
   * 
   * - If `Mask` is set to `NORMAL`, this parameter must be an 11-digit mobile phone number.
   * 
   * - If `Mask` is set to `MD5`, this parameter must be a 32-character encrypted string.
   * 
   * - If `Mask` is set to `SHA256`, this parameter must be a 64-character encrypted string.
   * 
   * - If `Mask` is set to `SM3`, this parameter must be a 64-character encrypted string.
   * 
   * > The encrypted strings are case-insensitive.
   * 
   * @example
   * 139****1234
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * 
   * - **NORMAL**: The phone number is not encrypted.
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

