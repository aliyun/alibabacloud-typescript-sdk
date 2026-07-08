// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PhoneNumberEncryptRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * > On the **My Applications** page of the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), obtain the authorization ID, which is the authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * QASDW@#**
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to be queried.
   * 
   * > Currently, only single phone number queries are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method of the phone number. Valid value: **NORMAL**.
   * 
   * 
   * >Notice: Currently, only the NORMAL encryption method is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
  mask?: string;
  /**
   * @remarks
   * The user-defined outId. This parameter is optional. The format is not limited, and the length must be less than or equal to 64 characters.
   * 
   * @example
   * 213e367117422635749191493eea68
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      outId: 'OutId',
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
      outId: 'string',
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

