// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommitContainerTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the elastic container instance on which the CommitContainer task is executed.\\
   * You must enter the instance ID, the task ID, or both for the request.
   * 
   * @example
   * eci-2zelg8vwnlzdhf8hv****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The number of entries to return on each page.\\
   * Maximum value: 50.\\
   * Default value: 10.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the query. Set the value to the value of NextToken that is returned from the last request.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the task.
   */
  taskId?: string[];
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   Running
   * *   Succeeded
   * *   Failed
   * 
   * @example
   * Running
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: { 'type': 'array', 'itemType': 'string' },
      taskStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.taskId)) {
      $dara.Model.validateArray(this.taskId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

