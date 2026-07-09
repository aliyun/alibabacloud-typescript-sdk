// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostByCostCenterResponseBodyConsumeAmountList extends $dara.Model {
  /**
   * @remarks
   * Shared allocation amount
   * 
   * @example
   * 20
   */
  allocatedAmount?: string;
  /**
   * @remarks
   * Cost center code
   * 
   * @example
   * 15945703968#
   */
  costCenterCode?: string;
  /**
   * @remarks
   * Cost center ID
   * 
   * @example
   * 530658
   */
  costCenterId?: number;
  /**
   * @remarks
   * Cost center name
   * 
   * @example
   * 项目组A
   */
  costCenterName?: string;
  /**
   * @remarks
   * Cost type amount
   * 
   * @example
   * 80
   */
  directAmount?: string;
  /**
   * @remarks
   * Level
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * Account ID that owns the resource
   * 
   * @example
   * 1857464601594004
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * Account name that owns the resource
   * 
   * @example
   * 研发团队测试账号
   */
  ownerAccountName?: string;
  /**
   * @remarks
   * Parent cost center ID
   * 
   * @example
   * 637537
   */
  parentCostCenterId?: number;
  /**
   * @remarks
   * Previous cost center ID
   * 
   * @example
   * 6375371
   */
  preCostCenterId?: number;
  /**
   * @remarks
   * Total (sum of cost type amount and shared allocation amount)
   * 
   * @example
   * 100
   */
  totalAllocatedAmount?: string;
  /**
   * @remarks
   * Cost type amount percentage
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
   * Cost center consumption amount details list
   */
  consumeAmountList?: QueryCostByCostCenterResponseBodyConsumeAmountList[];
  /**
   * @remarks
   * Response structure metadata
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Sum of totalAllocatedAmount across all cost centers
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

