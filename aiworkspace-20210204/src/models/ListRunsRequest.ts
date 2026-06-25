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
   * The time when the instance was created.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The labels of the run for an exact match. The following formats are supported:
   * 
   * - Single-label query: "is_evaluation:true"
   * 
   * - Multi-label query: "is_evaluation:true,LLM_evaluation:true". This method is not recommended for common scenarios because it may degrade performance. Use commas (,) to separate multiple labels. The system matches all specified key-value pairs.
   * 
   * @example
   * is_evaluation:true
   */
  labels?: string;
  /**
   * @remarks
   * The maximum number of results to return. The default value is 10.
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
   * The sort order for the paged query. Use this parameter with SortBy.
   * 
   * - ASC: ascending order.
   * 
   * - DESC (default): descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The fields to sort by and the sort order. You can sort by GmtCreateTime and Name. Valid sort orders are DESC and ASC. The default is ASC. To sort by multiple fields, separate them with a comma (,).
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
   * The number of records to display on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The paging token. The value starts from 0. The default value is 0.
   * 
   * @example
   * 0
   */
  pageToken?: number;
  /**
   * @remarks
   * The field to use for sorting. Valid values:
   * 
   * - Name: the name of the run.
   * 
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
   * Specifies whether to display details, including Metrics, Params, and Labels. Valid values:
   * 
   * - true: displays details.
   * 
   * - false (default): does not display details.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The ID of the workspace where the experiment resides. For more information about how to obtain a workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * > If you do not specify a workspace ID, the system returns the list of runs in the default workspace.
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

