// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberAnalysisAIRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the ****[**Labels**](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click Activate Now, enter the required information, and then submit your application. After your application is approved, you can obtain an authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * HwD***nG
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
   * The model parameter configuration. This field is required by some labels.
   * 
   * @example
   * {"trainingJobId": "17**********48"}
   */
  modelConfig?: string;
  ownerId?: number;
  /**
   * @remarks
   * The score threshold for the phone number. Valid values: **0 to 100**.
   * 
   * >  The system provided by Alibaba Cloud determines whether to accept the specified score threshold. When the system does not accept the specified score threshold, the value of this field is invalid.
   * 
   * @example
   * 96
   */
  rate?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      modelConfig: 'ModelConfig',
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
      modelConfig: 'string',
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

