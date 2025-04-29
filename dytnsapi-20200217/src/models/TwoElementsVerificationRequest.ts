// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TwoElementsVerificationRequest extends $dara.Model {
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
   * The phone number to be verified.
   * 
   * *   If the value of Mask is NORMAL, specify a value in plaintext for this field.
   * *   If the value of Mask is MD5, specify a MD5-encrypted value for this field.
   * *   If the value of Mask is SHA256, specify a SHA256-encrypted value for this field.
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
   * The encryption method. Valid values:
   * 
   * *   **NORMAL**: plaintext
   * *   **MD5**
   * *   **SHA256**
   * 
   * This parameter is required.
   * 
   * @example
   * MD5
   */
  mask?: string;
  /**
   * @remarks
   * The name to be verified.
   * 
   * *   If the value of Mask is NORMAL, specify a value in plaintext for this field.
   * *   If the value of Mask is MD5, specify a MD5-encrypted value for this field.
   * *   If the value of Mask is SHA256, specify a SHA256-encrypted value for this field.
   * 
   * >  Letters in the encrypted strings are not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      name: 'Name',
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
      name: 'string',
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

