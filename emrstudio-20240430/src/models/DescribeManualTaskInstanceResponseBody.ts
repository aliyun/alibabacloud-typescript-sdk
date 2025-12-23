// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeManualTaskInstanceResponseBody extends $dara.Model {
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
   * mti-0k5vype05xm****
   */
  manualTaskInstanceId?: string;
  /**
   * @example
   * test
   */
  manualTaskInstanceName?: string;
  /**
   * @example
   * wg-123abc***
   */
  resourceGroupId?: string;
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
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      emrClusterId: 'EmrClusterId',
      endTime: 'EndTime',
      externalAppId: 'ExternalAppId',
      manualTaskInstanceId: 'ManualTaskInstanceId',
      manualTaskInstanceName: 'ManualTaskInstanceName',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      status: 'Status',
      submitTime: 'SubmitTime',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emrClusterId: 'string',
      endTime: 'string',
      externalAppId: 'string',
      manualTaskInstanceId: 'string',
      manualTaskInstanceName: 'string',
      resourceGroupId: 'string',
      startTime: 'string',
      status: 'string',
      submitTime: 'string',
      taskParams: 'string',
      taskType: 'string',
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

