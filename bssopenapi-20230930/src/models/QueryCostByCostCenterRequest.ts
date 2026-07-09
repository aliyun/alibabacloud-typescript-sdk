// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostByCostCenterRequest extends $dara.Model {
  /**
   * @remarks
   * Billing month (format: YYYYMM)
   * 
   * This parameter is required.
   * 
   * @example
   * 202506
   */
  billingMonth?: number;
  /**
   * @remarks
   * Whether to display data rows with zero payable amount
   * 
   * @example
   * false
   */
  displayZeroAmountBills?: boolean;
  /**
   * @remarks
   * Whether to aggregate and display by cost center level
   * 
   * @example
   * false
   */
  groupByCostCenterLevel?: boolean;
  /**
   * @remarks
   * Cost type
   * 
   * This parameter is required.
   * 
   * @example
   * REQUIRE_AMOUNT
   */
  metrics?: string;
  /**
   * @remarks
   * Account ID that owns the resource
   * 
   * @example
   * 1374729705039203
   */
  ownerAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      billingMonth: 'BillingMonth',
      displayZeroAmountBills: 'DisplayZeroAmountBills',
      groupByCostCenterLevel: 'GroupByCostCenterLevel',
      metrics: 'Metrics',
      ownerAccountId: 'OwnerAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMonth: 'number',
      displayZeroAmountBills: 'boolean',
      groupByCostCenterLevel: 'boolean',
      metrics: 'string',
      ownerAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

