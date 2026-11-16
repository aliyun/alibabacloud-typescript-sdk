// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFundAccountPayRelationRequest extends $dara.Model {
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
   * The fund account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12323123
   */
  fundAccountId?: string;
  /**
   * @remarks
   * The level-1 marketplace ID. If this parameter is left empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
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
   * The relationship status. Valid values:
   * - valid: Valid.
   * - expired: Invalid.
   * 
   * @example
   * valid
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      fundAccountId: 'FundAccountId',
      nbid: 'Nbid',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      fundAccountId: 'string',
      nbid: 'string',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

