// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserListRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword to search for organization members by username or nickname.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The page number to return.
   * 
   * - Starting value: 1
   * 
   * - Default value: 1
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of organization members to return per page.
   * 
   * - Default value: 10
   * 
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

