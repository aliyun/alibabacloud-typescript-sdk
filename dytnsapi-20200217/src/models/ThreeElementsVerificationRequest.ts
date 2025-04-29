// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ThreeElementsVerificationRequest extends $dara.Model {
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
   * The ID card number to be verified.
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
   * 83d8040d3cb2181e04****dc6ff5566d4493876a4a5da782887446356b0a787e
   */
  certCode?: string;
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
   * *   **NORMAL**: The phone number is not encrypted.
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
      certCode: 'CertCode',
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
      certCode: 'string',
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

