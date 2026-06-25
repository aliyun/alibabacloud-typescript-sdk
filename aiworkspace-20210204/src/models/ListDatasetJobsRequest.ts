// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset version.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The job action.
   * 
   * @example
   * SemanticIndex
   */
  jobAction?: string;
  /**
   * @remarks
   * The order in which to sort the results. This parameter is used with `SortBy`. Default: DESC.
   * 
   * - ASC: ascending order.
   * 
   * - DESC: descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages are 1-indexed. Default: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The field by which to sort the results. By default, the results are sorted by `CreateTime` in descending order.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The job status.
   * 
   * @example
   * Running
   */
  status?: string;
  withLogs?: boolean;
  /**
   * @remarks
   * The ID of the workspace. To obtain this ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetVersion: 'DatasetVersion',
      jobAction: 'JobAction',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      status: 'Status',
      withLogs: 'WithLogs',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetVersion: 'string',
      jobAction: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      status: 'string',
      withLogs: 'boolean',
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

