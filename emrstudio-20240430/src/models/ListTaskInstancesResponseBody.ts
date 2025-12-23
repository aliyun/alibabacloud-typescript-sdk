// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskInstancesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0
   */
  dryRun?: string;
  /**
   * @example
   * c-b933c5aac7f7***
   */
  emrClusterId?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * application_123_***
   */
  externalAppId?: string;
  /**
   * @example
   * wg-3q9jo749ne5****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 0
   */
  retryTimes?: number;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  submitTime?: string;
  /**
   * @example
   * t-3q9jo749ne5****
   */
  taskId?: string;
  /**
   * @example
   * ti-3q9jo749ne5****
   */
  taskInstanceId?: string;
  /**
   * @example
   * test
   */
  taskInstanceName?: string;
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
   * SHELL
   */
  taskType?: string;
  /**
   * @example
   * 1
   */
  taskVersion?: string;
  /**
   * @example
   * wi-3q9jo749ne5****
   */
  workflowInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      emrClusterId: 'EmrClusterId',
      endTime: 'EndTime',
      externalAppId: 'ExternalAppId',
      resourceGroupId: 'ResourceGroupId',
      retryTimes: 'RetryTimes',
      startTime: 'StartTime',
      status: 'Status',
      submitTime: 'SubmitTime',
      taskId: 'TaskId',
      taskInstanceId: 'TaskInstanceId',
      taskInstanceName: 'TaskInstanceName',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
      taskVersion: 'TaskVersion',
      workflowInstanceId: 'WorkflowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      emrClusterId: 'string',
      endTime: 'string',
      externalAppId: 'string',
      resourceGroupId: 'string',
      retryTimes: 'number',
      startTime: 'string',
      status: 'string',
      submitTime: 'string',
      taskId: 'string',
      taskInstanceId: 'string',
      taskInstanceName: 'string',
      taskParams: 'string',
      taskType: 'string',
      taskVersion: 'string',
      workflowInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskInstancesResponseBody extends $dara.Model {
  data?: ListTaskInstancesResponseBodyData[];
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
   * 9E3A7161-EB7B-172B-8D18-FFB06BA38***
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
      data: { 'type': 'array', 'itemType': ListTaskInstancesResponseBodyData },
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

