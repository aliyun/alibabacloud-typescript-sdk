// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostByCostCenterResponseBodyConsumeAmountList extends $dara.Model {
  /**
   * @remarks
   * The apportioned amount.
   * 
   * @example
   * 20
   */
  allocatedAmount?: string;
  /**
   * @remarks
   * The financial unit code.
   * 
   * @example
   * 15945703968#
   */
  costCenterCode?: string;
  /**
   * @remarks
   * The financial unit ID.
   * 
   * @example
   * 530658
   */
  costCenterId?: number;
  /**
   * @remarks
   * The financial unit name.
   * 
   * @example
   * Project Team A
   */
  costCenterName?: string;
  /**
   * @remarks
   * The cost type amount.
   * 
   * @example
   * 80
   */
  directAmount?: string;
  /**
   * @remarks
   * The level.
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * The account ID of the resource ownership.
   * 
   * @example
   * 1857464601594004
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * The account name of the resource ownership.
   * 
   * @example
   * R&D Team Test Account
   */
  ownerAccountName?: string;
  /**
   * @remarks
   * The parent financial unit ID.
   * 
   * @example
   * 637537
   */
  parentCostCenterId?: number;
  /**
   * @remarks
   * The preceding financial unit ID.
   * 
   * @example
   * 6375371
   */
  preCostCenterId?: number;
  /**
   * @remarks
   * The total amount (the sum of the cost type amount and the apportioned amount).
   * 
   * @example
   * 100
   */
  totalAllocatedAmount?: string;
  /**
   * @remarks
   * The percentage of the cost type amount.
   * 
   * @example
   * 0.01
   */
  totalAllocatedAmountPercent?: string;
  static names(): { [key: string]: string } {
    return {
      allocatedAmount: 'AllocatedAmount',
      costCenterCode: 'CostCenterCode',
      costCenterId: 'CostCenterId',
      costCenterName: 'CostCenterName',
      directAmount: 'DirectAmount',
      level: 'Level',
      ownerAccountId: 'OwnerAccountId',
      ownerAccountName: 'OwnerAccountName',
      parentCostCenterId: 'ParentCostCenterId',
      preCostCenterId: 'PreCostCenterId',
      totalAllocatedAmount: 'TotalAllocatedAmount',
      totalAllocatedAmountPercent: 'TotalAllocatedAmountPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatedAmount: 'string',
      costCenterCode: 'string',
      costCenterId: 'number',
      costCenterName: 'string',
      directAmount: 'string',
      level: 'number',
      ownerAccountId: 'number',
      ownerAccountName: 'string',
      parentCostCenterId: 'number',
      preCostCenterId: 'number',
      totalAllocatedAmount: 'string',
      totalAllocatedAmountPercent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostByCostCenterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of cost center consumption amount details.
   */
  consumeAmountList?: QueryCostByCostCenterResponseBodyConsumeAmountList[];
  /**
   * @remarks
   * The response structure metadata.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * The sum of totalAllocatedAmount across all cost centers.
   * 
   * @example
   * 130296.64
   */
  totalAmount?: string;
  static names(): { [key: string]: string } {
    return {
      consumeAmountList: 'ConsumeAmountList',
      metadata: 'Metadata',
      requestId: 'RequestId',
      totalAmount: 'TotalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeAmountList: { 'type': 'array', 'itemType': QueryCostByCostCenterResponseBodyConsumeAmountList },
      metadata: 'any',
      requestId: 'string',
      totalAmount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.consumeAmountList)) {
      $dara.Model.validateArray(this.consumeAmountList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

