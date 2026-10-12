// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRunsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the experiment to which the run belongs.
   * 
   * @example
   * exp-1zpfthdx******
   */
  experimentId?: string;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in UTC. Format: YYYY-MM-DDTHH:mm:ss.sssZ.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The labels of the task for exact match. Supported formats:
   * - Single-label query: "is_evaluation:true"
   * - Multi-label scenario (not recommended except in special cases due to potential performance issues): "is_evaluation:true,LLM_evaluation:true" separated by commas (,), indicating that multiple label key-value pairs must all match.
   * 
   * @example
   * is_evaluation:true
   */
  labels?: string;
  /**
   * @remarks
   * The maximum number of results to return. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The run name.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * The sorting order for the specified field in a paging query. Used together with SortBy. Valid values:
   * - ASC: Ascending order.
   * - DESC (default): Descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * A comma-separated list of sorting strings. Supported fields: GmtCreateTime and Name. Supported sorting orders: DESC and ASC. Default: ASC. Separate multiple fields with commas (,).
   * 
   * @example
   * GmtCreateTime DESC,Name ASC
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. Valid values: greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The pagination token. Starts from 0. Default value: 0.
   * 
   * @example
   * 0
   */
  pageToken?: number;
  /**
   * @remarks
   * The field used for sorting. Valid values:
   * - Name: The run name.
   * - GmtCreateTime (default): The run creation time.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The ID of the PAI workload associated with the run.
   * 
   * @example
   * job-rbvg5wzlj****
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the PAI workload associated with the run.
   * 
   * @example
   * TrainingService
   */
  sourceType?: string;
  /**
   * @remarks
   * Specifies whether to display detailed information, including Metrics, Params, and Labels. Valid values:
   * - true: Detailed information is displayed.
   * - false (default): Detailed information is not displayed.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The ID of the workspace where the experiment resides. For information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * > If you do not specify a workspace ID, the system returns the run list of the default workspace.
   * >
   * 
   * @example
   * 228**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      labels: 'Labels',
      maxResults: 'MaxResults',
      name: 'Name',
      order: 'Order',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pageToken: 'PageToken',
      sortBy: 'SortBy',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      verbose: 'Verbose',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      gmtCreateTime: 'string',
      labels: 'string',
      maxResults: 'number',
      name: 'string',
      order: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pageToken: 'number',
      sortBy: 'string',
      sourceId: 'string',
      sourceType: 'string',
      verbose: 'boolean',
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

