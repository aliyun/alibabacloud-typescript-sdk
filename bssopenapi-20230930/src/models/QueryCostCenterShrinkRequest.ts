// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  ecIdAccountIdsShrink?: string;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1314839403940987
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
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

