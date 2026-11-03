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
   * The time when the instance was created. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ss.sssZ format.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The labels of the task for exact matching. Supported formats:
   * - Single-label query: "is_evaluation:true"
   * - Multi-label scenario (not recommended for common scenarios due to potential performance issues): "is_evaluation:true,LLM_evaluation:true". Use commas (,) to separate multiple labels, which means all specified label key-value pairs must be matched at the same time.
   * 
   * @example
   * is_evaluation:true
   */
  labels?: string;
  /**
   * @remarks
   * The maximum number of results to return for the request. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the run.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * Specifies the sorting of the specified field during a paged query. This parameter is used together with SortBy for paging. Valid values:
   * - ASC: ascending order.
   * - DESC (default): descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The list of strings that specify the sort order. Supported fields for sorting include GmtCreateTime and Name. The sort orders include DESC and ASC. Default value: ASC. You can specify multiple fields and separate them with commas (,).
   * 
   * @example
   * GmtCreateTime DESC,Name ASC
   */
  orderBy?: string;
  /**
   * @remarks
   * The current page number. Valid values: integers greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The pagination token. The value starts from 0. Default value: 0.
   * 
   * @example
   * 0
   */
  pageToken?: number;
  /**
   * @remarks
   * The name of the field used for sorting. Valid values:
   * - Name: the name of the run.
   * - GmtCreateTime (default): the time when the run was created.
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
   * - true: Displays detailed information.
   * - false (default): Does not display detailed information.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The ID of the workspace to which the experiment belongs. For more information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html). If you do not specify the workspace ID, the system returns the runs in the default workspace.
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

