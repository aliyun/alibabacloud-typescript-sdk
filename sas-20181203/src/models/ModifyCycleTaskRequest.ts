// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCycleTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration.
   * >Call the [DescribeCycleTaskList](~~DescribeCycleTaskList~~) operation to obtain this parameter.
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
   * - **1**: enabled.
   * - **0**: disabled.
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The first execution time.
   * 
   * @example
   * 1664380800000
   */
  firstDateStr?: number;
  /**
   * @remarks
   * The interval period.
   * 
   * @example
   * 14
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
   * The unit of the scan cycle. Valid values:
   * - **day**: day.
   * - **hour**: hour.
   * 
   * @example
   * day
   */
  periodUnit?: string;
  /**
   * @remarks
   * The task end time, in hours.
   * 
   * @example
   * 6
   */
  targetEndTime?: number;
  /**
   * @remarks
   * The task start time, in hours.
   * 
   * @example
   * 0
   */
  targetStartTime?: number;
  /**
   * @remarks
   * The node name. Valid values:
   * - **VIRUS_VUL_SCHEDULE_SCAN**: virus scan.
   * - **IMAGE_SCAN**: image scan.
   * - **EMG_VUL_SCHEDULE_SCAN**: emergency vulnerability scanning.
   * 
   * @example
   * EMG_VUL_SCHEDULE_SCAN
   */
  taskName?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * - **VIRUS_VUL_SCHEDULE_SCAN**: virus scan.
   * - **IMAGE_SCAN**: image scan.
   * - **EMG_VUL_SCHEDULE_SCAN**: emergency vulnerability scanning.
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

