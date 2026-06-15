// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * datasource1
   */
  name?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - Asc: ascending order.
   * 
   * - Desc: descending order.
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of data sources per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field to sort by.
   * 
   * @example
   * GmtModifiedTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * - Hologres
   * 
   * - Redis
   * 
   * - MaxCompute
   * 
   * @example
   * MaxCompute
   */
  type?: string;
  /**
   * @remarks
   * The ID of the workspace. Call the [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) operation to get the workspace ID.
   * 
   * @example
   * 234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      type: 'string',
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

