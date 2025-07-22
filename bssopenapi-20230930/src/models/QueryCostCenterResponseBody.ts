// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterResponseBodyCostCenterDtoList extends $dara.Model {
  /**
   * @example
   * 15945703968#
   */
  costCenterCode?: string;
  /**
   * @example
   * 485938
   */
  costCenterId?: number;
  costCenterName?: string;
  /**
   * @example
   * loose
   */
  level?: number;
  /**
   * @example
   * 1314839403940987
   */
  ownerAccountId?: number;
  /**
   * @example
   * -1
   */
  parentCostCenterId?: number;
  /**
   * @example
   * 485996
   */
  prevCostCenterId?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterCode: 'CostCenterCode',
      costCenterId: 'CostCenterId',
      costCenterName: 'CostCenterName',
      level: 'Level',
      ownerAccountId: 'OwnerAccountId',
      parentCostCenterId: 'ParentCostCenterId',
      prevCostCenterId: 'PrevCostCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterCode: 'string',
      costCenterId: 'number',
      costCenterName: 'string',
      level: 'number',
      ownerAccountId: 'number',
      parentCostCenterId: 'number',
      prevCostCenterId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostCenterResponseBody extends $dara.Model {
  costCenterDtoList?: QueryCostCenterResponseBodyCostCenterDtoList[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterDtoList: 'CostCenterDtoList',
      currentPage: 'CurrentPage',
      metadata: 'Metadata',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterDtoList: { 'type': 'array', 'itemType': QueryCostCenterResponseBodyCostCenterDtoList },
      currentPage: 'number',
      metadata: 'any',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.costCenterDtoList)) {
      $dara.Model.validateArray(this.costCenterDtoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

