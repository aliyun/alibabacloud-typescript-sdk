// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostByCostCenterResponseBodyConsumeAmountList extends $dara.Model {
  /**
   * @example
   * 20
   */
  allocatedAmount?: string;
  /**
   * @example
   * 15945703968#
   */
  costCenterCode?: string;
  /**
   * @example
   * 530658
   */
  costCenterId?: number;
  costCenterName?: string;
  /**
   * @example
   * 80
   */
  directAmount?: string;
  /**
   * @example
   * 1
   */
  level?: number;
  /**
   * @example
   * 1857464601594004
   */
  ownerAccountId?: number;
  ownerAccountName?: string;
  /**
   * @example
   * 637537
   */
  parentCostCenterId?: number;
  /**
   * @example
   * 6375371
   */
  preCostCenterId?: number;
  /**
   * @example
   * 100
   */
  totalAllocatedAmount?: string;
  /**
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
  consumeAmountList?: QueryCostByCostCenterResponseBodyConsumeAmountList[];
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
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

