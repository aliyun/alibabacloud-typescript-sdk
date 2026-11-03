// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The label filter conditions. Separate multiple conditions with commas (,).
   * The format of a single filter condition is `Key=Value`.
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
   * The name of the experiment.
   * 
   * @example
   * exp-test
   */
  name?: string;
  /**
   * @remarks
   * The optional parameters.
   */
  optionsShrink?: string;
  /**
   * @remarks
   * The sort order of the specified field in a paged query. Valid values:
   * - ASC: ascending order.
   * - DESC: descending order.
   * Default value: DESC.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The list of sort order strings. Supported fields for sorting include GmtCreateTime, Name, GmtModifiedTime, and ExperimentId. The sort order can be DESC or ASC. Default value: ASC.
   * 
   * @example
   * GmtCreateTime DESC,Name ASC
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
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
   * The pagination token. Pages start from 0. Default value: 0.
   * 
   * @example
   * 0
   */
  pageToken?: number;
  /**
   * @remarks
   * The field by which to sort the results of a paged query. Currently, only the GmtCreateTime field is supported for sorting.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Specifies whether to retrieve the LatestRun information associated with the experiment.
   * 
   * @example
   * false
   */
  verbose?: boolean;
  /**
   * @remarks
   * The ID of the workspace to which the experiment belongs. For more information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * > If you do not specify the workspace ID, the system returns the list of experiments in the default workspace.
   * >
   * 
   * @example
   * 1517**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      maxResults: 'MaxResults',
      name: 'Name',
      optionsShrink: 'Options',
      order: 'Order',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pageToken: 'PageToken',
      sortBy: 'SortBy',
      verbose: 'Verbose',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: 'string',
      maxResults: 'number',
      name: 'string',
      optionsShrink: 'string',
      order: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pageToken: 'number',
      sortBy: 'string',
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

