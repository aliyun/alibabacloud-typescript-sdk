// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeManualTaskResponseBody extends $dara.Model {
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
      description: 'Description',
      manualTaskId: 'ManualTaskId',
      manualTaskName: 'ManualTaskName',
      parentDirectoryId: 'ParentDirectoryId',
      projectId: 'ProjectId',
      resourceIds: 'ResourceIds',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
      requestId: 'requestId',
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

