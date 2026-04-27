// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
  static names(): { [key: string]: string } {
    return {
      billingType: 'billingType',
      clientId: 'clientId',
      clientName: 'clientName',
      modelCode: 'modelCode',
      modelId: 'modelId',
      modelName: 'modelName',
      modelType: 'modelType',
      payableAmount: 'payableAmount',
      summaryTime: 'summaryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingType: 'string',
      clientId: 'number',
      clientName: 'string',
      modelCode: 'string',
      modelId: 'number',
      modelName: 'string',
      modelType: 'string',
      payableAmount: 'number',
      summaryTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

