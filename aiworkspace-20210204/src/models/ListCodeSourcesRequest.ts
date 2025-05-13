// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCodeSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the code source. Fuzzy match is supported.
   * 
   * @example
   * MyDataSource
   */
  displayName?: string;
  /**
   * @remarks
   * The order in which the entries are sorted by the specific field on the returned page. Valid values:
   * 
   * *   ASC (default)
   * *   DESC
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field used for sorting. Valid values:
   * 
   * *   GmtModifyTime: the time when the code source was modified.
   * *   DisplayName: the display name.
   * *   CodeSourceId: the code source ID.
   * *   GmtCreateTime: the time when the code source was created. This is the default value.
   * 
   * @example
   * GmtModifyTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
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

