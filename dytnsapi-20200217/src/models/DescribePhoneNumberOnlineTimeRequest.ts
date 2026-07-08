// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberOnlineTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * > Log on to the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), go to the **My Applications** page, and obtain the authorization ID, which is the authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * QASDW@#**
   */
  authCode?: string;
  /**
   * @remarks
   * The external carrier. Valid values:
   * 
   * - **MOBILE**: China Mobile.
   * - **UNICOM**: China Unicom.
   * - **TELECOM**: China Telecom.
   * 
   * >Notice: This parameter is optional. Alibaba Cloud automatically determines the carrier type based on the phone number. The value of this field has no impact on the query result.
   * 
   * @example
   * UNICOM
   */
  carrier?: string;
  /**
   * @remarks
   * The phone number to be queried.
   * 
   * - If Mask is set to NORMAL, this field is an 11-digit phone number.
   * - If Mask is set to MD5, this field is a 32-character encrypted string.
   * - If Mask is set to SHA256, this field is a 64-character encrypted string.
   * 
   * >Notice: Letters in the encrypted string are case-insensitive.
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
   * - **NORMAL**: no encryption
   * - **MD5**
   * - **SHA256**
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

