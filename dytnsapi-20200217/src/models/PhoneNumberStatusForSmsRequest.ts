// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PhoneNumberStatusForSmsRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * > On the **My Applications** page in the [Phone Number Pedia console](https://dytns.console.aliyun.com/analysis/apply), obtain the authorization ID and use it as the value for this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * zf08***pi6
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to query.
   * 
   * - If `Mask` is set to `NORMAL`, specify an 11-digit phone number.
   * 
   * - If `Mask` is set to `MD5`, specify a 32-character encrypted string.
   * 
   * - If `Mask` is set to `SHA256`, specify a 64-character encrypted string.
   * 
   * - If `Mask` is set to `SM3`, specify a 64-character encrypted string.
   * 
   * >Notice: 
   * 
   * The encrypted string is not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * 181****1234
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method for the phone number. Valid values:
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

