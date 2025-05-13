// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRunsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the experiment that the run belongs.
   * 
   * @example
   * exp-1zpfthdx******
   */
  experimentId?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The label. Exact match is supported. Valid values:
   * 
   * *   Single-label query: Set the value to is_evaluation.
   * *   Multi-label query (not recommended in non-special scenarios and may have performance issues): Set the value to is_evaluation:true,LLM_evaluation:true. Multiple labels are separated with commas (,), indicating that the key-value pairs of multiple labels must be matched at the same time.
   * 
   * @example
   * is_evaluation:true
   */
  labels?: string;
  /**
   * @remarks
   * The maximum number of entries in the request. Default value: 10.
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
   * The order in which the entries are sorted by the specific field on the returned page. This parameter must be used together with SortBy.
   * 
   * *   ASC
   * *   DESC (default)
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The strings by which the results are sorted. The following parameters can be used to sort the results: GmtCreateTime and Name. The sorting order can be ASC (default) and DESC. Separate multiple strings with commas (,).
   * 
   * @example
   * GmtCreateTime DESC,Name ASC
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0. Default value: 1.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The pagination token, which starts from 0. Default value: 0.
   * 
   * @example
   * 0
   */
  pageToken?: number;
  /**
   * @remarks
   * The field used for sorting. Valid values:
   * 
   * *   Name: the name of the run.
   * *   GmtCreateTime: the time when the run is created.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The ID of the workload associated with the run.
   * 
   * @example
   * job-rbvg5wzlj****
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the workload associated with the run.
   * 
   * @example
   * TrainingService
   */
  sourceType?: string;
  /**
   * @remarks
   * Specifies whether to show detailed information, including Metrics, Params, and Labels. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The ID of the workspace to which the experiment belongs. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * >  If you do not specify a workspace ID, the system returns the runs of the default workspace.
   * 
   * @example
   * 22840
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

