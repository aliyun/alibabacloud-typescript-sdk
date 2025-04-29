// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberOperatorAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the **My Applications** page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), you can obtain the authorization code (also known as authorization ID).
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @example
   * 示例值
   */
  flowName?: string;
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
   * 139****1234
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method of the phone number. Valid values:
   * 
   * *   **NORMAL**: The phone number is not encrypted.
   * *   **MD5**: The phone number is MD5-encrypted.
   * *   **SHA256**: The phone number is SHA256-encrypted.
   * 
   * > Letters in the string must be uppercase.
   * 
   * This parameter is required.
   * 
   * @example
   * MD5
   */
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  resultCount?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      flowName: 'FlowName',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resultCount: 'ResultCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      flowName: 'string',
      inputNumber: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resultCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

