// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * QASDW@#**
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1310000****
   */
  inputNumber?: string;
  /**
   * @example
   * MD5
   */
  mask?: string;
  /**
   * @example
   * 0
   */
  numberType?: number;
  ownerId?: number;
  /**
   * @example
   * 10
   */
  rate?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      numberType: 'NumberType',
      ownerId: 'OwnerId',
      rate: 'Rate',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      numberType: 'number',
      ownerId: 'number',
      rate: 'number',
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

