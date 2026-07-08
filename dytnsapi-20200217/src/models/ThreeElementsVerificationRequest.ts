// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ThreeElementsVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * > On the **My Applications** page of the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), the authorization ID is the authorization code.
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
   * - If Mask is set to NORMAL, this field is in plaintext.
   * - If Mask is set to MD5, encrypt this field by using MD5.
   * - If Mask is set to SHA256, encrypt this field by using SHA256.
   * 
   * >Notice: Letters in the encrypted string are case-insensitive.
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
   * - If Mask is set to NORMAL, this field is in plaintext.
   * - If Mask is set to MD5, encrypt this field by using MD5.
   * - If Mask is set to SHA256, encrypt this field by using SHA256.
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
   * The encryption method. Valid values:
   * 
   * - **NORMAL**: No encryption.
   * 
   * - **MD5**
   * 
   * - **SHA256**
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
   * - If Mask is set to NORMAL, this field is in plaintext.
   * - If Mask is set to MD5, encrypt this field by using MD5.
   * - If Mask is set to SHA256, encrypt this field by using SHA256.
   * 
   * >Notice: Letters in the encrypted string are case-insensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云
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

