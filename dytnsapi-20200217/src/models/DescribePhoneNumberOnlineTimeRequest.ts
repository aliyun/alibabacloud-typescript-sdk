// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberOnlineTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the **My Applications** page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), you can obtain the authorization code (also known as authorization ID).
   * 
   * This parameter is required.
   * 
   * @example
   * QASDW@#**
   */
  authCode?: string;
  /**
   * @remarks
   * The carrier. Valid values:
   * 
   * *   **MOBILE**: China Mobile
   * *   **UNICOM**: China Unicom
   * *   **TELECOM**: China Telecom
   * 
   * >  Alibaba Cloud automatically determines the carrier based on the carrier who assigns the phone number. Therefore, the value of this field does not affect the query result.
   * 
   * @example
   * UNICOM
   */
  carrier?: string;
  /**
   * @remarks
   * The phone number to be queried.
   * 
   * *   If the value of Mask is NORMAL, specify an 11-digit phone number in plaintext.
   * *   If the value of Mask is MD5, specify a 32-bit string that is encrypted by using MD5.
   * *   If the value of Mask is SHA256, specify a 64-bit string that is encrypted by using SHA256.
   * 
   * >  Letters in the encrypted strings are not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method of the phone number. Valid values:
   * 
   * *   **NORMAL**: The phone number is not encrypted.
   * *   **MD5**
   * *   **SHA256**
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
      carrier: 'Carrier',
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
      carrier: 'string',
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

