// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeGroupRefreshTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i118191731740041623425
   */
  clusterId?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paging query. Valid values: 1 to 500. Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous call. You do not need to set this parameter for the first request.
   * 
   * @example
   * 563d42ae0b17572449ec8c97f7f66069
   */
  nextToken?: string;
  /**
   * @remarks
   * The node group ID.
   * 
   * @example
   * ng-3525
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The list of task statuses. Valid values:
   * - Pending: The refresh task is created and waiting to be executed.
   * - InProgress: The refresh task is being processed.
   * - Success: The refresh task is executed.
   * - Failed: The refresh task failed.
   */
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupId: 'NodeGroupId',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupId: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

