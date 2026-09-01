// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserListRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword for the username or nickname of the organization member.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The page number of the organization member list.
   * 
   * - Minimum value: 1
   * - Default value: 1
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of rows per page in a paged query.
   * 
   * - Default value: 10
   * - Maximum value: 1000
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

