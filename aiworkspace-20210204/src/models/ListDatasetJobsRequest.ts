// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset version name.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The task action.
   * 
   * @example
   * SemanticIndex
   */
  jobAction?: string;
  /**
   * @remarks
   * The sorting order for the specified sorting field in a paged query. Used together with SortBy. Default value: DESC. Valid values:
   * - ASC: ascending order.
   * - DESC: descending order.
   * 
   * @example
   * DESC
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
   * The page size.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort field. By default, results are sorted by creation time in descending order.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether to return task logs.
   */
  withLogs?: boolean;
  /**
   * @remarks
   * The workspace ID. For information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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

