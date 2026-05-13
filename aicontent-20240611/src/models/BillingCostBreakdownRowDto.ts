// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BillingBillTierDTO } from "./BillingBillTierDto";


export class BillingCostBreakdownRowDTO extends $dara.Model {
  /**
   * @example
   * total_amount
   */
  billingType?: string;
  /**
   * @example
   * 0
   */
  clientId?: number;
  clientName?: string;
  /**
   * @example
   * {"billing_version": "v1"}
   */
  dimValues?: string;
  /**
   * @example
   * qwen-plus
   */
  modelCode?: string;
  /**
   * @example
   * 1
   */
  modelId?: number;
  modelName?: string;
  /**
   * @example
   * llm
   */
  modelType?: string;
  /**
   * @example
   * 0.00012800
   */
  payableAmount?: number;
  /**
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
      billingType: 'billingType',
      clientId: 'clientId',
      clientName: 'clientName',
      dimValues: 'dimValues',
      modelCode: 'modelCode',
      modelId: 'modelId',
      modelName: 'modelName',
      modelType: 'modelType',
      payableAmount: 'payableAmount',
      summaryTime: 'summaryTime',
      tiers: 'tiers',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingType: 'string',
      clientId: 'number',
      clientName: 'string',
      dimValues: 'string',
      modelCode: 'string',
      modelId: 'number',
      modelName: 'string',
      modelType: 'string',
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

