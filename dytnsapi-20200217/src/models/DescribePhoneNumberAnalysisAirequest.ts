// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberAnalysisAIRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * > In **Cell Phone Number Service** -> [**Tag Square**](https://dytns.console.aliyun.com/analysis/square), select a tag and submit a usage application. After the application is approved, you will receive the authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * HwD***nG
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 187****5620
   */
  inputNumber?: string;
  /**
   * @remarks
   * The model parameter configuration (required by some tag capabilities).
   * 
   * @example
   * {"trainingJobId": "17**********48"}
   */
  modelConfig?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number score threshold. Valid values: **0 to 100**.
   * 
   * > Whether to accept the specified score threshold is determined by the server. When the specified score threshold is not accepted, the data entered in this field is invalid.
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

