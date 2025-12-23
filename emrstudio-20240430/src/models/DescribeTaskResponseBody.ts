// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskResponseBody extends $dara.Model {
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
   * r-oy98v7n43el****
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
   * 10
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
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
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
      requestId: 'requestId',
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
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

