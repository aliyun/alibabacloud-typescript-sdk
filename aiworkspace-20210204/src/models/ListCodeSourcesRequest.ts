// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCodeSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the code configuration. Fuzzy match is supported.
   * 
   * @example
   * MyDataSource
   */
  displayName?: string;
  /**
   * @remarks
   * The sort order for the specified field in a paged query. Valid values:
   * - ASC (default): ascending order.
   * - DESC: descending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number of the code configuration list. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field used for sorting. Valid values:
   * - GmtModifyTime: the time when the code source was last modified.
   * - DisplayName: the display name.
   * - CodeSourceId: the code source ID.
   * - GmtCreateTime (default): the time when the code source was created.
   * 
   * @example
   * GmtModifyTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The workspace ID. This parameter is required. For information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
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

