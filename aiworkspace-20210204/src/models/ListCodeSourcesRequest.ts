// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCodeSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the code configuration. Fuzzy matching is supported.
   * 
   * @example
   * MyDataSource
   */
  displayName?: string;
  /**
   * @remarks
   * The sorting order of the specified field for paging in a paged query. Valid values:
   * - ASC: ascending order.
   * - DESC: descending order.
   * Default value: ASC.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number of the code configuration list. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page set in the paging Settings for a paged query. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field used for sorting. Valid values:
   * - GmtModifyTime: the modification time of the code source
   * - DisplayName: the display name
   * - CodeSourceId: the ID of the code source
   * - GmtCreateTime: the creation time of the code source
   * Default value: GmtCreateTime.
   * 
   * @example
   * GmtModifyTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The ID of the workspace. This parameter is required. For information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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

