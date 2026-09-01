// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCycleTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Different requests must use different tokens. The token supports only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable the task. Valid values:
   * - **1**: enabled.
   * - **0**: disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The first execution time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1650556800000
   */
  firstDateStr?: number;
  /**
   * @remarks
   * The interval period.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  intervalPeriod?: number;
  /**
   * @remarks
   * The extended information field.
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
   * - **day**: day.
   * - **hour**: hour.
   * 
   * This parameter is required.
   * 
   * @example
   * day
   */
  periodUnit?: string;
  /**
   * @remarks
   * The source from which the task is added.
   * 
   * @example
   * console_batch
   */
  source?: string;
  /**
   * @remarks
   * The task end time, in hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  targetEndTime?: number;
  /**
   * @remarks
   * The task start time, in hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  targetStartTime?: number;
  /**
   * @remarks
   * The task name. Valid values:
   * - **VIRUS_VUL_SCHEDULE_SCAN**: virus scan.
   * - **IMAGE_SCAN**: image scan.
   * - **EMG_VUL_SCHEDULE_SCAN**: emergency vulnerability scanning.
   * 
   * This parameter is required.
   * 
   * @example
   * EMG_VUL_SCHEDULE_SCAN
   */
  taskName?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - **VIRUS_VUL_SCHEDULE_SCAN**: virus scan.
   * - **IMAGE_SCAN**: image scan.
   * - **EMG_VUL_SCHEDULE_SCAN**: emergency vulnerability scanning.
   * 
   * This parameter is required.
   * 
   * @example
   * VIRUS_VUL_SCHEDULE_SCAN
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
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
      clientToken: 'string',
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

