// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCodeSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the code source configuration. Fuzzy match is supported.
   * 
   * @example
   * MyDataSource
   */
  displayName?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - ASC (default): Ascending order.
   * 
   * - DESC: Descending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. The value starts from 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field to use for sorting. Valid values:
   * 
   * - GmtModifyTime: The time when the code source was last modified.
   * 
   * - DisplayName: The display name.
   * 
   * - CodeSourceId: The code source ID.
   * 
   * - GmtCreateTime (default): The time when the code source was created.
   * 
   * @example
   * GmtModifyTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The workspace ID. For more information, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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

