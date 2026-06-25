// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud phone instance.
   * 
   * @example
   * acp-2zecay9ponatdc4m****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the cloud phone instance.
   * 
   * @example
   * defaultInstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The ID of the command execution. You can set the value to the last returned request ID.
   * 
   * @example
   * B8ED2BA9-0C6A-5643-818F-B5D60A64****
   */
  invokeId?: string;
  /**
   * @remarks
   * The level of the task. A value of 1 specifies a batch task. A value of 2 specifies an instance-level task.
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If the parameter is left empty, the data is queried from the first entry.
   * 
   * @example
   * FFbc8N4E1iOlcSxC+8boa0HHH2LKWbggYUinyrZWvtS1oTrMYCg1HuMLGuftj0****
   */
  nextToken?: string;
  /**
   * @remarks
   * The extension field.
   * 
   * @example
   * param
   */
  param?: string;
  /**
   * @remarks
   * The ID of the parent task.
   * 
   * @example
   * t-iaej5dkbnmivx****
   */
  parentTaskId?: string;
  /**
   * @remarks
   * The IDs of the resources.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The IDs of the tasks.
   */
  taskIds?: string[];
  /**
   * @remarks
   * The state of the task.
   * 
   * @example
   * Processing
   */
  taskStatus?: string;
  /**
   * @remarks
   * The status of the tasks.
   */
  taskStatuses?: string[];
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * StartInstance
   */
  taskType?: string;
  /**
   * @remarks
   * The types of the tasks.
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

