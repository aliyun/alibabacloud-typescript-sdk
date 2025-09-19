// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVirusScanConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Extended scan types.
   */
  additionType?: string[];
  /**
   * @remarks
   * The ID of the task configuration.
   * 
   * > You can call the [DescribeCycleTaskList](~~DescribeCycleTaskList~~) operation to query the IDs of task configurations.
   * 
   * @example
   * 97a1fed216908e417407344e1505xxxx
   */
  configId?: string;
  /**
   * @remarks
   * Indicates whether the periodic scan feature is enabled. Valid value:
   * 
   * *   **1**: The feature is enabled
   * *   **0**: The feature is disabled.
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The interval at which virus scan tasks are run.
   * 
   * @example
   * 7
   */
  intervalPeriod?: number;
  /**
   * @remarks
   * The unit of the interval at which virus scan tasks are run.
   * 
   * *   The value is fixed as **day**.
   * 
   * @example
   * day
   */
  periodUnit?: string;
  /**
   * @remarks
   * The file paths.
   */
  scanPath?: string[];
  /**
   * @remarks
   * The type of the virus scan task. Valid values:
   * 
   * *   **system**: automatic scan.
   * *   **user**: custom scan.
   * 
   * @example
   * user
   */
  scanType?: string;
  /**
   * @remarks
   * The key that stores the asset information.
   * 
   * > You can call the [GetAssetSelectionConfig](~~GetAssetSelectionConfig~~) operation to obtain the key value.
   * 
   * @example
   * 345ddbea-a57f-437e-832f-fb7a1202xxxx
   */
  selectionKey?: string;
  /**
   * @remarks
   * The end time of the virus scan task. The time is a time frame.
   * 
   * @example
   * 6
   */
  targetEndTime?: number;
  /**
   * @remarks
   * The start time of the virus scan task. The time is a time frame.
   * 
   * @example
   * 0
   */
  targetStartTime?: number;
  /**
   * @remarks
   * The type of the task. Valid value:
   * 
   * *   **VIRUS_VUL_SCHEDULE_SCAN**: a virus scan task.
   * 
   * @example
   * VIRUS_VUL_SCHEDULE_SCAN
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      additionType: 'AdditionType',
      configId: 'ConfigId',
      enable: 'Enable',
      intervalPeriod: 'IntervalPeriod',
      periodUnit: 'PeriodUnit',
      scanPath: 'ScanPath',
      scanType: 'ScanType',
      selectionKey: 'SelectionKey',
      targetEndTime: 'TargetEndTime',
      targetStartTime: 'TargetStartTime',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionType: { 'type': 'array', 'itemType': 'string' },
      configId: 'string',
      enable: 'number',
      intervalPeriod: 'number',
      periodUnit: 'string',
      scanPath: { 'type': 'array', 'itemType': 'string' },
      scanType: 'string',
      selectionKey: 'string',
      targetEndTime: 'number',
      targetStartTime: 'number',
      taskType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionType)) {
      $dara.Model.validateArray(this.additionType);
    }
    if(Array.isArray(this.scanPath)) {
      $dara.Model.validateArray(this.scanPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVirusScanConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned if the request was successful.
   */
  data?: GetVirusScanConfigResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 028CF634-5268-5660-9575-48C9ED6BDEFC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetVirusScanConfigResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

