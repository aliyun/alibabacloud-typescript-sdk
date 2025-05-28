// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFundAccountPayRelationRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12323123
   */
  fundAccountId?: string;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
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

