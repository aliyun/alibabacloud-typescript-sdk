// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BillingBillTierDTO } from "./BillingBillTierDto";


export class BillingCostBreakdownRowDTO extends $dara.Model {
  /**
   * @example
   * 0
   */
  apiKeyId?: number;
  /**
   * @example
   * 默认密钥
   */
  apiKeyName?: string;
  /**
   * @remarks
   * Billing type; currently fixed as total_amount
   * 
   * @example
   * total_amount
   */
  billingType?: string;
  /**
   * @remarks
   * Department ID; 0 indicates no associated department
   * 
   * @example
   * 0
   */
  clientId?: number;
  /**
   * @remarks
   * Department name
   * 
   * @example
   * 研发部
   */
  clientName?: string;
  /**
   * @example
   * {"billing_version": "v1"}
   */
  dimValues?: string;
  /**
   * @example
   * 30001
   */
  memberUserId?: number;
  /**
   * @example
   * 张三
   */
  memberUserName?: string;
  /**
   * @remarks
   * Model identifier
   * 
   * @example
   * qwen-plus
   */
  modelCode?: string;
  /**
   * @remarks
   * Model ID
   * 
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @remarks
   * Model name
   * 
   * @example
   * 通义千问-Plus
   */
  modelName?: string;
  /**
   * @example
   * qwen
   */
  modelSymbol?: string;
  /**
   * @remarks
   * Statistics category
   * 
   * @example
   * llm
   */
  modelType?: string;
  /**
   * @example
   * 1
   */
  modelVersion?: number;
  /**
   * @remarks
   * Payable amount, rounded to 8 decimal places
   * 
   * @example
   * 0.00012800
   */
  payableAmount?: number;
  /**
   * @remarks
   * Statistics time point, Unix timestamp (seconds)
   * 
   * @example
   * 1700000000
   */
  summaryTime?: number;
  /**
   * @example
   * []
   */
  tiers?: BillingBillTierDTO[];
  /**
   * @example
   * {"input_tokens": 512000, "output_tokens": 256000}
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      apiKeyName: 'apiKeyName',
      billingType: 'billingType',
      clientId: 'clientId',
      clientName: 'clientName',
      dimValues: 'dimValues',
      memberUserId: 'memberUserId',
      memberUserName: 'memberUserName',
      modelCode: 'modelCode',
      modelId: 'modelId',
      modelName: 'modelName',
      modelSymbol: 'modelSymbol',
      modelType: 'modelType',
      modelVersion: 'modelVersion',
      payableAmount: 'payableAmount',
      summaryTime: 'summaryTime',
      tiers: 'tiers',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      apiKeyName: 'string',
      billingType: 'string',
      clientId: 'number',
      clientName: 'string',
      dimValues: 'string',
      memberUserId: 'number',
      memberUserName: 'string',
      modelCode: 'string',
      modelId: 'number',
      modelName: 'string',
      modelSymbol: 'string',
      modelType: 'string',
      modelVersion: 'number',
      payableAmount: 'number',
      summaryTime: 'number',
      tiers: { 'type': 'array', 'itemType': BillingBillTierDTO },
      values: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tiers)) {
      $dara.Model.validateArray(this.tiers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

