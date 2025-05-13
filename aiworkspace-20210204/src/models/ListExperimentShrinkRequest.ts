// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The tag filter conditions. Multiple conditions are separated by commas (,). The format of a single condition filter is `key=value`.
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
   * The experiment name.
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
   * The order of specific fields of results in a paged query (ascending or descending).
   * 
   * *   ASC: ascending order
   * *   DESC: descending order. This is the default value.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The strings used for sorting. The following fields can be used for sorting: GmtCreateTime, Name, GmtModifiedTime, and ExperimentId. The sorting order can be ASC (default) and DESC.
   * 
   * @example
   * GmtCreateTime DESC,Name ASC
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. The value starts from 1.
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
   * The field used for sorting. The GmtCreateTime field is used.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Specifies whether to obtain the LatestRun value that is related to the experiment.
   * 
   * @example
   * false
   */
  verbose?: boolean;
  /**
   * @remarks
   * The ID of the workspace to which the experiment belongs. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * >  If you do not specify a workspace ID, the system returns the experiments in the default workspace.
   * 
   * @example
   * 151739
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

