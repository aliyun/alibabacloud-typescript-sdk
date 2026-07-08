// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * > Log on to the [Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), go to the **My Applications** page, and obtain the authorization ID, which is the authorization code.
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
   * This parameter is required.
   * 
   * @example
   * 187****5620
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method of the phone number. Valid values:
   * 
   * - **NORMAL**: no encryption
   * 
   * - **MD5**
   * 
   * - **SHA256**
   * 
   * @example
   * NORMAL
   */
  mask?: string;
  /**
   * @remarks
   * The type of the phone number. Valid values:
   * 
   * - **0**: mobile phone number
   * 
   * - **1**: mobile IMEI number
   * 
   * @example
   * 0
   */
  numberType?: number;
  ownerId?: number;
  /**
   * @remarks
   * The score threshold of the phone number. Valid values: **0 to 100**.
   * 
   * >Notice: Whether the specified score threshold is accepted is determined by the server. When the specified score threshold is not accepted, the data entered in this field is invalid.
   * 
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

