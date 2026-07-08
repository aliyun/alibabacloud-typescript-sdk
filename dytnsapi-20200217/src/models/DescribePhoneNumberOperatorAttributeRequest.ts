// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberOperatorAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * > On the **My Applications** page of the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), obtain the authorization ID, which is the authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @remarks
   * A system parameter. You do not need to specify this parameter.
   * 
   * @example
   * -
   */
  flowName?: string;
  /**
   * @remarks
   * The phone number that you want to query.
   * 
   * - If Mask is set to NORMAL, this field is an 11-digit phone number.
   * - If Mask is set to MD5, this field is a 32-character encrypted string.
   * - If Mask is set to SHA256, this field is a 64-character encrypted string.
   * - If Mask is set to SM3, this field is a 64-character encrypted string.
   * 
   * >Notice: The letters in the encrypted string are not case-sensitive.</notice>
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
   * - **NORMAL**: no encryption
   * - **MD5**: MD5 encryption
   * - **SHA256**: SHA256 encryption
   * - **SM3**: SM3 encryption
   * 
   * >Notice: All letters in the string must be uppercase.</notice>
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
   * @remarks
   * A system parameter. You do not need to specify this parameter.
   * 
   * @example
   * -
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

