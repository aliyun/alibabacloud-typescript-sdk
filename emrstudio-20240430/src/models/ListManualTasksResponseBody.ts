// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListManualTasksResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * mt-3q9jo749ne5****
   */
  manualTaskId?: string;
  /**
   * @example
   * test
   */
  manualTaskName?: string;
  /**
   * @example
   * mtd-oy98v7n43el****
   */
  parentDirectoryId?: string;
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
   * 2024-03-27 00:00:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      manualTaskId: 'ManualTaskId',
      manualTaskName: 'ManualTaskName',
      parentDirectoryId: 'ParentDirectoryId',
      projectId: 'ProjectId',
      resourceIds: 'ResourceIds',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      manualTaskId: 'string',
      manualTaskName: 'string',
      parentDirectoryId: 'string',
      projectId: 'string',
      resourceIds: 'string',
      taskParams: 'string',
      taskType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManualTasksResponseBody extends $dara.Model {
  data?: ListManualTasksResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListManualTasksResponseBodyData },
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

