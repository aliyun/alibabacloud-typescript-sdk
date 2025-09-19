// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCycleTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the task. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The first time when the task is performed.
   * 
   * This parameter is required.
   * 
   * @example
   * 1650556800000
   */
  firstDateStr?: number;
  /**
   * @remarks
   * The interval of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
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
   * *   **day**: days
   * *   **hour**: hours
   * 
   * This parameter is required.
   * 
   * @example
   * day
   */
  periodUnit?: string;
  /**
   * @remarks
   * The additional source for the task.
   * 
   * @example
   * console_batch
   */
  source?: string;
  /**
   * @remarks
   * The time when the task ends. Unit: hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  targetEndTime?: number;
  /**
   * @remarks
   * The time when the task is started. Unit: hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  targetStartTime?: number;
  /**
   * @remarks
   * The name of the task. Valid values:
   * 
   * *   **VIRUS_VUL_SCHEDULE_SCAN**: virus scan task
   * *   **IMAGE_SCAN**: image scan task
   * *   **EMG_VUL_SCHEDULE_SCAN**: urgent vulnerability scan task
   * 
   * This parameter is required.
   * 
   * @example
   * EMG_VUL_SCHEDULE_SCAN
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **VIRUS_VUL_SCHEDULE_SCAN**: virus scan task
   * *   **IMAGE_SCAN**: image scan task
   * *   **EMG_VUL_SCHEDULE_SCAN**: urgent vulnerability scan task
   * 
   * This parameter is required.
   * 
   * @example
   * VIRUS_VUL_SCHEDULE_SCAN
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      firstDateStr: 'FirstDateStr',
      intervalPeriod: 'IntervalPeriod',
      param: 'Param',
      periodUnit: 'PeriodUnit',
      source: 'Source',
      targetEndTime: 'TargetEndTime',
      targetStartTime: 'TargetStartTime',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'number',
      firstDateStr: 'number',
      intervalPeriod: 'number',
      param: 'string',
      periodUnit: 'string',
      source: 'string',
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

