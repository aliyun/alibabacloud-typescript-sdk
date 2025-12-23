// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 0
   */
  delayTime?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 1
   */
  failRetryInterval?: number;
  /**
   * @example
   * 0
   */
  failRetryTimes?: number;
  /**
   * @example
   * YES
   */
  flag?: string;
  /**
   * @example
   * p-3q9jo749ne5****
   */
  projectId?: string;
  /**
   * @example
   * r-3q9jo749ne5****
   */
  resourceIds?: string;
  /**
   * @example
   * t-3q9jo749ne5****
   */
  taskId?: string;
  /**
   * @example
   * test
   */
  taskName?: string;
  /**
   * @example
   * {
   *     "yarnUser": "",
   *     "conditionResult": "null",
   *     "rawScript": "sleep 300",
   *     "submitOnYarnFlag": false,
   *     "emrClusterId": "",
   *     "yarnPriority": "",
   *     "dependence": "null",
   *     "yarnMemory": "",
   *     "localParams": [],
   *     "switchResult": "null",
   *     "resourceList": [],
   *     "yarnQueue": "",
   *     "yarnVCores": "",
   *     "associateManualTaskFlag": false
   * }
   */
  taskParams?: string;
  /**
   * @example
   * MEDIUM
   */
  taskPriority?: string;
  /**
   * @example
   * SHELL
   */
  taskType?: string;
  /**
   * @example
   * 0
   */
  timeout?: number;
  /**
   * @example
   * CLOSE
   */
  timeoutFlag?: string;
  /**
   * @example
   * WARN
   */
  timeoutNotifyStrategy?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  updateTime?: string;
  /**
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      delayTime: 'DelayTime',
      description: 'Description',
      failRetryInterval: 'FailRetryInterval',
      failRetryTimes: 'FailRetryTimes',
      flag: 'Flag',
      projectId: 'ProjectId',
      resourceIds: 'ResourceIds',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskParams: 'TaskParams',
      taskPriority: 'TaskPriority',
      taskType: 'TaskType',
      timeout: 'Timeout',
      timeoutFlag: 'TimeoutFlag',
      timeoutNotifyStrategy: 'TimeoutNotifyStrategy',
      updateTime: 'UpdateTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      delayTime: 'number',
      description: 'string',
      failRetryInterval: 'number',
      failRetryTimes: 'number',
      flag: 'string',
      projectId: 'string',
      resourceIds: 'string',
      taskId: 'string',
      taskName: 'string',
      taskParams: 'string',
      taskPriority: 'string',
      taskType: 'string',
      timeout: 'number',
      timeoutFlag: 'string',
      timeoutNotifyStrategy: 'string',
      updateTime: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $dara.Model {
  data?: ListTasksResponseBodyData[];
  /**
   * @example
   * 123abc***
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListTasksResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

