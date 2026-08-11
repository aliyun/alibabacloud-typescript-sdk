// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeGroupRefreshTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. Valid values: 1 to 500. Default value: 100. For more information about paging, set this parameter together with NextToken.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous call. You do not need to set this parameter for the first request. This parameter is used to paginate through the node list in the current refresh task.
   * 
   * @example
   * 563d42ae0b17572449ec8c97f7f66069
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the refresh task.
   * 
   * This parameter is required.
   * 
   * @example
   * task-159136551662516768776
   */
  nodeGroupRefreshTaskId?: string;
  /**
   * @remarks
   * The node refresh statuses to filter by. Valid values:
   * - Pending: the node is waiting to be refreshed.
   * - InProgress: the node is being refreshed.
   * - Success: the node is refreshed.
   * - Failed: the node failed to be refreshed.
   * - Skipped: all properties to be refreshed on the node exceeded the MaxDisruptiveAction constraint and were skipped.
   */
  nodeStatusesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupRefreshTaskId: 'NodeGroupRefreshTaskId',
      nodeStatusesShrink: 'NodeStatuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupRefreshTaskId: 'string',
      nodeStatusesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

