// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TwoElementsVerificationRequest extends $dara.Model {
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
   * The phone number to be verified.
   * 
   * - If Mask is set to NORMAL, this field is in plaintext.
   * - If Mask is set to MD5, encrypt this field with MD5.
   * - If Mask is set to SHA256, encrypt this field with SHA256.
   * 
   * >Notice: Letters in the encrypted string are not case-sensitive.
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
   * - If Mask is set to MD5, encrypt this field with MD5.
   * - If Mask is set to SHA256, encrypt this field with SHA256.
   * 
   * >Notice: Letters in the encrypted string are not case-sensitive.
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

