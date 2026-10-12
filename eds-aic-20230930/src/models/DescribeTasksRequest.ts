// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-2zecay9ponatdc4m****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * defaultInstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The command execution ID. You can enter the requestId returned by the previous operation.
   * 
   * @example
   * B8ED2BA9-0C6A-5643-818F-B5D60A64****
   */
  invokeId?: string;
  /**
   * @remarks
   * The task level. A value of 1 indicates a batch task. A value of 2 indicates an instance-level task.
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that specifies the starting position for reading. If this parameter is left empty, the reading starts from the beginning.
   * 
   * @example
   * FFbc8N4E1iOlcSxC+8boa0HHH2LKWbggYUinyrZWvtS1oTrMYCg1HuMLGuftj0****
   */
  nextToken?: string;
  /**
   * @remarks
   * The extended field.
   * 
   * @example
   * param
   */
  param?: string;
  /**
   * @remarks
   * The parent task ID.
   * 
   * @example
   * t-iaej5dkbnmivx****
   */
  parentTaskId?: string;
  /**
   * @remarks
   * The list of resource IDs.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The list of task IDs.
   */
  taskIds?: string[];
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Processing
   */
  taskStatus?: string;
  /**
   * @remarks
   * The list of task statuses.
   */
  taskStatuses?: string[];
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * StartInstance
   */
  taskType?: string;
  /**
   * @remarks
   * The list of task types.
   */
  taskTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      invokeId: 'InvokeId',
      level: 'Level',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      param: 'Param',
      parentTaskId: 'ParentTaskId',
      resourceIds: 'ResourceIds',
      taskIds: 'TaskIds',
      taskStatus: 'TaskStatus',
      taskStatuses: 'TaskStatuses',
      taskType: 'TaskType',
      taskTypes: 'TaskTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      invokeId: 'string',
      level: 'number',
      maxResults: 'number',
      nextToken: 'string',
      param: 'string',
      parentTaskId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      taskIds: { 'type': 'array', 'itemType': 'string' },
      taskStatus: 'string',
      taskStatuses: { 'type': 'array', 'itemType': 'string' },
      taskType: 'string',
      taskTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    if(Array.isArray(this.taskStatuses)) {
      $dara.Model.validateArray(this.taskStatuses);
    }
    if(Array.isArray(this.taskTypes)) {
      $dara.Model.validateArray(this.taskTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

