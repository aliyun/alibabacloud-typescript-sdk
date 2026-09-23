// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterResponseBodyCostCenterDtoList extends $dara.Model {
  /**
   * @remarks
   * The code of the cost center.
   * 
   * @example
   * 15945703968#
   */
  costCenterCode?: string;
  /**
   * @remarks
   * The ID of the cost center.
   * 
   * @example
   * 485938
   */
  costCenterId?: number;
  /**
   * @remarks
   * The name of the cost center. The name must be unique within the same account.
   * 
   * @example
   * ResourceGroup
   */
  costCenterName?: string;
  /**
   * @remarks
   * The level of the cost center node.
   * 
   * @example
   * loose
   */
  level?: number;
  /**
   * @remarks
   * The ID of the user who owns the cost center.
   * 
   * @example
   * 1314839403940987
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * The ID of the parent cost center.
   * 
   * @example
   * -1
   */
  parentCostCenterId?: number;
  /**
   * @remarks
   * The ID of the previous cost center.
   * 
   * @example
   * 485996
   */
  prevCostCenterId?: number;
  /**
   * @remarks
   * The priority of the cost center.
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterCode: 'CostCenterCode',
      costCenterId: 'CostCenterId',
      costCenterName: 'CostCenterName',
      level: 'Level',
      ownerAccountId: 'OwnerAccountId',
      parentCostCenterId: 'ParentCostCenterId',
      prevCostCenterId: 'PrevCostCenterId',
      priority: 'Priority',
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
      priority: 'number',
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
  /**
   * @remarks
   * The list of cost center data.
   */
  costCenterDtoList?: QueryCostCenterResponseBodyCostCenterDtoList[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The metadata of the response struct.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * The number of entries per page.
   * 
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
   * @remarks
   * The total number of records.
   * 
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

