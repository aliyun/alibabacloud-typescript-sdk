// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PriceEstimateOutputItemsSteps } from "./PriceEstimateOutputItemsSteps";


export class PriceEstimateOutputItems extends $dara.Model {
  /**
   * @example
   * 3600.00
   */
  amount?: number;
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * p_micro_service_cpu
   */
  id?: string;
  /**
   * @example
   * 1.00
   */
  price?: number;
  steps?: PriceEstimateOutputItemsSteps[];
  /**
   * @example
   * pack/post
   */
  type?: string;
  /**
   * @example
   * 核*秒
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      count: 'Count',
      id: 'Id',
      price: 'Price',
      steps: 'Steps',
      type: 'Type',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      count: 'number',
      id: 'string',
      price: 'number',
      steps: { 'type': 'array', 'itemType': PriceEstimateOutputItemsSteps },
      type: 'string',
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

