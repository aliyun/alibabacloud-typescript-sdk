// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * The list of accounts to access. If this parameter is left empty, all accounts under the current enterprise entity ID are selected.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The ID of the enterprise entity.
   * 
   * This parameter is required.
   * 
   * @example
   * 1004064243473974
   */
  ecId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      ecId: 'EcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      ecId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostCenterRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of enterprise entities and accounts. If this parameter is left empty, the current account is queried.
   */
  ecIdAccountIds?: QueryCostCenterRequestEcIdAccountIds[];
  /**
   * @remarks
   * The ID of the level-1 marketplace. If this parameter is left empty, the ID of the marketplace to which the current user belongs is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * The ID of the owner account of the cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * 1314839403940987
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the parent cost center. A value of -1 indicates the root cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * -1
   */
  parentCostCenterId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ecIdAccountIds: 'EcIdAccountIds',
      nbid: 'Nbid',
      ownerAccountId: 'OwnerAccountId',
      pageSize: 'PageSize',
      parentCostCenterId: 'ParentCostCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      ecIdAccountIds: { 'type': 'array', 'itemType': QueryCostCenterRequestEcIdAccountIds },
      nbid: 'string',
      ownerAccountId: 'number',
      pageSize: 'number',
      parentCostCenterId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

