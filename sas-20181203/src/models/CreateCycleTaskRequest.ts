// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCycleTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable the task. Valid values:
   * - **1**: Enable.
   * - **0**: Disable.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The time of the first execution.
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
   * Note: This parameter is actually required. If this parameter is not specified, the API returns an error. The value is a JSON-formatted string that must contain at least the targetInfo array.
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
   * The unit of the scan period. Valid values:
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
   * The task name. This is a custom string used to identify the periodic scan task.
   * 
   * This parameter is required.
   * 
   * @example
   * test_virus_scan
   */
  taskName?: string;
  /**
   * @remarks
   * The node type. Valid values:
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

