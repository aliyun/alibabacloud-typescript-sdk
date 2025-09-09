// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceTestTasksResponseBodyServiceTestTasks extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2024-02-26T02:16:35Z
   */
  createTime?: string;
  /**
   * @remarks
   * the status of service task.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * sttt-000h5nd4yrg59ucurzy1
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * dadadad
   */
  taskName?: string;
  /**
   * @remarks
   * The task region id.
   * 
   * @example
   * cn-beijing
   */
  taskRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskRegionId: 'TaskRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      taskRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceTestTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 9
   */
  count?: number;
  /**
   * @remarks
   * The number of items to return per page when paginating results. The maximum is 100, and the default is 20.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51945B04-6AA6-410D-93BA-236E0248B104
   */
  requestId?: string;
  /**
   * @remarks
   * The service test tasks.
   */
  serviceTestTasks?: ListServiceTestTasksResponseBodyServiceTestTasks[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serviceTestTasks: 'ServiceTestTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceTestTasks: { 'type': 'array', 'itemType': ListServiceTestTasksResponseBodyServiceTestTasks },
    };
  }

  validate() {
    if(Array.isArray(this.serviceTestTasks)) {
      $dara.Model.validateArray(this.serviceTestTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

