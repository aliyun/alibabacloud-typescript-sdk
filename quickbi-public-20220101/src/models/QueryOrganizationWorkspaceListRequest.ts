// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrganizationWorkspaceListRequest extends $dara.Model {
  /**
   * @remarks
   * Keyword for the workspace name.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * Current page number of the workspace list:
   * 
   * - Starting value: 1
   * - Default value: 1
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of rows per page in a paginated query:
   * 
   * - Default value: 10
   * - Maximum value: 1000
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * User ID in Quick BI.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

