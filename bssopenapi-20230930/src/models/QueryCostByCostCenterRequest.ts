// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostByCostCenterRequest extends $dara.Model {
  /**
   * @remarks
   * The billing cycle month in the format of YYYYMM.
   * 
   * This parameter is required.
   * 
   * @example
   * 202506
   */
  billingMonth?: number;
  /**
   * @remarks
   * Specifies whether to display data rows with a payable amount of 0.
   * 
   * @example
   * false
   */
  displayZeroAmountBills?: boolean;
  /**
   * @remarks
   * Specifies whether to display results grouped by financial unit level.
   * 
   * @example
   * false
   */
  groupByCostCenterLevel?: boolean;
  /**
   * @remarks
   * The cost type.
   * 
   * This parameter is required.
   * 
   * @example
   * REQUIRE_AMOUNT
   */
  metrics?: string;
  /**
   * @remarks
   * The account ID of the resource ownership.
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

