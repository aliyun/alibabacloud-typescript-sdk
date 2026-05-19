// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostByCostCenterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 202506
   */
  billingMonth?: number;
  /**
   * @example
   * false
   */
  displayZeroAmountBills?: boolean;
  /**
   * @example
   * false
   */
  groupByCostCenterLevel?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * REQUIRE_AMOUNT
   */
  metrics?: string;
  /**
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

