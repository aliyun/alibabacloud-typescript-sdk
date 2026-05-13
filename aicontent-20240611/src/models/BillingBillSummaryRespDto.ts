// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BillingBillSummaryPointDTO } from "./BillingBillSummaryPointDto";


export class BillingBillSummaryRespDTO extends $dara.Model {
  points?: BillingBillSummaryPointDTO[];
  /**
   * @example
   * 123.45
   */
  totalAmount?: number;
  static names(): { [key: string]: string } {
    return {
      points: 'points',
      totalAmount: 'totalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      points: { 'type': 'array', 'itemType': BillingBillSummaryPointDTO },
      totalAmount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.points)) {
      $dara.Model.validateArray(this.points);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

