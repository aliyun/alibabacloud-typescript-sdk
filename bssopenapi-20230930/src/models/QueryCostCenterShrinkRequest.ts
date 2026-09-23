// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterShrinkRequest extends $dara.Model {
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
   * The list of enterprises and accounts. If this parameter is left empty, the current account is queried.
   */
  ecIdAccountIdsShrink?: string;
  /**
   * @remarks
   * The ID of the primary marketplace. If this parameter is left empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * The ID of the user who owns the cost center.
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
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      nbid: 'Nbid',
      ownerAccountId: 'OwnerAccountId',
      pageSize: 'PageSize',
      parentCostCenterId: 'ParentCostCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      ecIdAccountIdsShrink: 'string',
      nbid: 'string',
      ownerAccountId: 'number',
      pageSize: 'number',
      parentCostCenterId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

