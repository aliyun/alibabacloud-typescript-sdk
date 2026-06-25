// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions for labels. Separate multiple conditions with commas (,). A single filter condition must be in the `Key=Value` format.
   * 
   * @example
   * is_evaluation:true
   */
  labels?: string;
  /**
   * @remarks
   * The maximum number of results to return. The default is 10.
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
   * Optional parameters.
   */
  optionsShrink?: string;
  /**
   * @remarks
   * The order in which to sort the results of a paged query. Valid values:
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
   * A list of sorting methods as strings. You can sort by the following fields: GmtCreateTime, Name, GmtModifiedTime, or ExperimentId. The sorting methods are DESC and ASC. The default is ASC.
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
   * The paging token. It starts from 0. The default is 0.
   * 
   * @example
   * 0
   */
  pageToken?: number;
  /**
   * @remarks
   * The field to use for sorting in a paged query. Currently, only the GmtCreateTime field is supported for sorting.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Specifies whether to retrieve the LatestRun information related to the experiment.
   * 
   * @example
   * false
   */
  verbose?: boolean;
  /**
   * @remarks
   * The ID of the workspace where the experiment resides. For more information about how to obtain a workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * > If you do not specify a workspace ID, the system returns the list of experiments in the default workspace.
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

