// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSubmitPreBillShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A system parameter. You do not need to manually specify this parameter.
   * 
   * @example
   * 100.66.54.114
   */
  appIp?: string;
  /**
   * @remarks
   * The bill batch date in the format of yyyy-MM-dd, such as 2026-06-21.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-06-21
   */
  billBatch?: string;
  /**
   * @remarks
   * The customer decision. Valid values:
   * - 1: bill in the current period.
   * - 2: deferred billing.
   * - null: bill based on the current billing decision of the record.
   * 
   * @example
   * 1
   */
  customerDecision?: number;
  /**
   * @remarks
   * The dimension type. Valid values:
   * - 1: bill ID.
   * - 2: order number.
   * - 3: approval form.
   * - 4: invoice title.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dimension?: number;
  /**
   * @remarks
   * The values determined by the dimension parameter. For example, if dimension is set to 1, the values should be bill IDs.
   * 
   * This parameter is required.
   */
  valuesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appIp: 'app_ip',
      billBatch: 'bill_batch',
      customerDecision: 'customer_decision',
      dimension: 'dimension',
      valuesShrink: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIp: 'string',
      billBatch: 'string',
      customerDecision: 'number',
      dimension: 'number',
      valuesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

