// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoScalingHistoryResponseBodyDataSpecHistory extends $dara.Model {
  /**
   * @remarks
   * The error code returned by the scaling task. Valid values:
   * 
   * *   **Insufficient_Balance**: The account has insufficient balance or an unpaid order.
   * *   **REACH_SPEC_UPPERBOUND**: The instance type reaches the upper limit.
   * *   **Control_Error_Timeout_Msg**: The management task timed out.
   * *   **Invoke_Rds_Api_Error_Msg**: Failed to call the ApsaraDB RDS API.
   * 
   * @example
   * Insufficient_Balance
   */
  errorCode?: string;
  /**
   * @remarks
   * The original number of CPU cores of the instance.
   * 
   * @example
   * 4
   */
  originCore?: number;
  /**
   * @remarks
   * The original instance type.
   * 
   * @example
   * mysql.n2.large.2c
   */
  originInstanceClass?: string;
  /**
   * @remarks
   * The original memory size of the instance. Unit: GB.
   * 
   * @example
   * 8
   */
  originMemory?: number;
  /**
   * @remarks
   * The type of the automatic performance scaling task. Valid values:
   * 
   * *   **SCALE_UP**: automatic instance type scale-up task.
   * *   **SCALE_DOWN**: automatic instance type scale-down task.
   * 
   * @example
   * SCALE_UP
   */
  scaleType?: string;
  /**
   * @remarks
   * The destination number of CPU cores of the instance.
   * 
   * @example
   * 8
   */
  targetCore?: number;
  /**
   * @remarks
   * The destination instance type.
   * 
   * @example
   * mysql.n2.xlarge.2c
   */
  targetInstanceClass?: string;
  /**
   * @remarks
   * The destination memory size of the instance. Unit: GB.
   * 
   * @example
   * 16
   */
  targetMemory?: number;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **true**: The task was successful.
   * *   **false**: The task failed.
   * 
   * @example
   * true
   */
  taskExcuteStatus?: boolean;
  /**
   * @remarks
   * The time when the task was run. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1684830763000
   */
  taskTime?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      originCore: 'OriginCore',
      originInstanceClass: 'OriginInstanceClass',
      originMemory: 'OriginMemory',
      scaleType: 'ScaleType',
      targetCore: 'TargetCore',
      targetInstanceClass: 'TargetInstanceClass',
      targetMemory: 'TargetMemory',
      taskExcuteStatus: 'TaskExcuteStatus',
      taskTime: 'TaskTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      originCore: 'number',
      originInstanceClass: 'string',
      originMemory: 'number',
      scaleType: 'string',
      targetCore: 'number',
      targetInstanceClass: 'string',
      targetMemory: 'number',
      taskExcuteStatus: 'boolean',
      taskTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

