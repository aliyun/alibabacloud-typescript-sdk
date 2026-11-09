// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInfiniteCanvasesRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword used to query site monitoring tasks. Note: Fuzzy match is supported based on the task name or task address.
   * 
   * @example
   * v2_
   */
  keyword?: string;
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 16
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * pd_abc1234567
   */
  productionId?: string;
  /**
   * @remarks
   * The sort field and sort order. Separate multiple values with commas (,).
   * 
   * @example
   * utcCreate:Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort direction. Valid values:
   * - Asc: ascending order
   * - Desc: descending order
   * 
   * Default value: Desc.
   * 
   * @example
   * Ascending
   */
  sortOrder?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws_abc1234567
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      productionId: 'ProductionId',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      productionId: 'string',
      sortBy: 'string',
      sortOrder: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

