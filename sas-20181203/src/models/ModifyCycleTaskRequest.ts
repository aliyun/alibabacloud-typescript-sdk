// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCycleTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task configuration.
   * 
   * >  You can call the [DescribeCycleTaskList](~~DescribeCycleTaskList~~) operation to query the IDs of task configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * 00cfa8161da093089e6804ba6a33****
   */
  configId?: string;
  /**
   * @remarks
   * Specifies whether to enable the task. Valid values:
   * 
   * *   **1**: enables the task.
   * *   **0**: disables the task.
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The time when the task first started.
   * 
   * @example
   * 1664380800000
   */
  firstDateStr?: number;
  /**
   * @remarks
   * The interval at which the task is run.
   * 
   * @example
   * 14
   */
  intervalPeriod?: number;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * {
   *       "targetInfo": [
   *             {
   *                   "type": "groupId",
   *                   "name": "TI HOST",
   *                   "target": 10597***
   *             },
   *             {
   *                   "type": "groupId",
   *                   "name": "expense HOST",
   *                   "target": 10597***
   *             }
   *       ]
   * }
   */
  param?: string;
  /**
   * @remarks
   * The unit of the scan interval. Valid values:
   * 
   * *   **day**
   * *   **hour**
   * 
   * @example
   * day
   */
  periodUnit?: string;
  /**
   * @remarks
   * The end time of the task. The time must be a time frame.
   * 
   * @example
   * 6
   */
  targetEndTime?: number;
  /**
   * @remarks
   * The start time of the task. The start time must be a time frame.
   * 
   * @example
   * 0
   */
  targetStartTime?: number;
  /**
   * @remarks
   * The name of the task. Valid values:
   * 
   * *   **VIRUS_VUL_SCHEDULE_SCAN**: virus detection task
   * *   **IMAGE_SCAN**: image scan task
   * *   **EMG_VUL_SCHEDULE_SCAN**: urgent vulnerability scan task
   * 
   * Valid values:
   * 
   * *   VIRUS_VUL_SCHEDULE_SCAN
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     virus detection task
   * 
   *     <!-- -->
   * 
   * *   IMAGE_SCAN
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     image scan task
   * 
   *     <!-- -->
   * 
   * *   EMG_VUL_SCHEDULE_SCAN
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     urgent vulnerability scan task
   * 
   *     <!-- -->
   * 
   * @example
   * EMG_VUL_SCHEDULE_SCAN
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **VIRUS_VUL_SCHEDULE_SCAN**: virus detection task
   * *   **IMAGE_SCAN**: image scan task
   * *   **EMG_VUL_SCHEDULE_SCAN**: urgent vulnerability scan task
   * 
   * Valid values:
   * 
   * *   VIRUS_VUL_SCHEDULE_SCAN
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     virus detection task
   * 
   *     <!-- -->
   * 
   * *   IMAGE_SCAN
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     image scan task
   * 
   *     <!-- -->
   * 
   * *   EMG_VUL_SCHEDULE_SCAN
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     urgent vulnerability scan task
   * 
   *     <!-- -->
   * 
   * @example
   * VIRUS_VUL_SCHEDULE_SCAN
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      enable: 'Enable',
      firstDateStr: 'FirstDateStr',
      intervalPeriod: 'IntervalPeriod',
      param: 'Param',
      periodUnit: 'PeriodUnit',
      targetEndTime: 'TargetEndTime',
      targetStartTime: 'TargetStartTime',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      enable: 'number',
      firstDateStr: 'number',
      intervalPeriod: 'number',
      param: 'string',
      periodUnit: 'string',
      targetEndTime: 'number',
      targetStartTime: 'number',
      taskName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

