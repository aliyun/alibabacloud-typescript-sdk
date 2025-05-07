// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpgradeMajorVersionTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the system collects the statistics.
   * 
   * Valid values:
   * 
   * *   **After**: The system collects the statistics after a switchover.
   * *   **Before**: The system collects the statistics before a switchover.
   * 
   * @example
   * After
   */
  collectStatMode?: string;
  /**
   * @remarks
   * The details of the task.
   * 
   * @example
   * 2021-10-27 15:03:05 --- do upgrade precheck on slave succcess.\\n2021-10-27 15:03:11 --- begin to upgrade major version, source instance will locked in readonly mode.\\n2021-10-27 15:03:21 --- upgrade master success.\\n2021-10-27 15:06:10 --- exchange source and target instance dns success.\\n
   */
  detail?: string;
  /**
   * @remarks
   * The end time of the task.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC. Unit: milliseconds.
   * 
   * @example
   * 1614237779000
   */
  endTime?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * *   **Success**: The task is successful.
   * *   **Failed**: The task failed.
   * *   **Running**: The task is in the phase in which data is being migrated to a new instance.
   * 
   * @example
   * Success
   */
  result?: string;
  /**
   * @remarks
   * The ID of the original instance.
   * 
   * @example
   * pgm-bp1i3kkq7321****
   */
  sourceInsName?: string;
  /**
   * @remarks
   * The major engine version of the original instance.
   * 
   * @example
   * 11.0
   */
  sourceMajorVersion?: string;
  /**
   * @remarks
   * The start time of the task.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC. Unit: milliseconds.
   * 
   * @example
   * 1614236007000
   */
  startTime?: string;
  /**
   * @remarks
   * The end time of the switching from the original instance to the new instance.
   * 
   * Expressed in Unix timestamp. Unit: milliseconds.
   * 
   * @example
   * 1714237539000
   */
  switchEndTime?: string;
  /**
   * @remarks
   * The time at which your workloads are switched over from the original instance to the new instance.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC. Unit: milliseconds.
   * 
   * @example
   * 1614237539000
   */
  switchTime?: string;
  /**
   * @remarks
   * The ID of the new instance.
   * 
   * @example
   * pgm-bp1c0v6d8092****
   */
  targetInsName?: string;
  /**
   * @remarks
   * The major engine version of the new instance. Valid values:
   * 
   * *   **10.0**
   * *   **11.0**
   * *   **12.0**
   * *   **13.0**
   * *   **14.0**
   * *   **15.0**
   * 
   * @example
   * 12.0
   */
  targetMajorVersion?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 342900000
   */
  taskId?: number;
  /**
   * @remarks
   * The upgrade mode.
   * 
   * Valid values:
   * 
   * *   **clone**: The system does not migrate data to the new instance and does not switch your workloads over to the new instance.
   * *   **switch**: The system migrates data to the new instance and switches your workloads over to the new instance.
   * 
   * @example
   * switch
   */
  upgradeMode?: string;
  cutOver?: boolean;
  totalLogicRepDelayTime?: number;
  totalLogicRepLatencyMB?: number;
  zeroDownTimeConnectionString?: string;
  zeroDownTimePort?: number;
  static names(): { [key: string]: string } {
    return {
      collectStatMode: 'CollectStatMode',
      detail: 'Detail',
      endTime: 'EndTime',
      result: 'Result',
      sourceInsName: 'SourceInsName',
      sourceMajorVersion: 'SourceMajorVersion',
      startTime: 'StartTime',
      switchEndTime: 'SwitchEndTime',
      switchTime: 'SwitchTime',
      targetInsName: 'TargetInsName',
      targetMajorVersion: 'TargetMajorVersion',
      taskId: 'TaskId',
      upgradeMode: 'UpgradeMode',
      cutOver: 'cutOver',
      totalLogicRepDelayTime: 'totalLogicRepDelayTime',
      totalLogicRepLatencyMB: 'totalLogicRepLatencyMB',
      zeroDownTimeConnectionString: 'zeroDownTimeConnectionString',
      zeroDownTimePort: 'zeroDownTimePort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectStatMode: 'string',
      detail: 'string',
      endTime: 'string',
      result: 'string',
      sourceInsName: 'string',
      sourceMajorVersion: 'string',
      startTime: 'string',
      switchEndTime: 'string',
      switchTime: 'string',
      targetInsName: 'string',
      targetMajorVersion: 'string',
      taskId: 'number',
      upgradeMode: 'string',
      cutOver: 'boolean',
      totalLogicRepDelayTime: 'number',
      totalLogicRepLatencyMB: 'number',
      zeroDownTimeConnectionString: 'string',
      zeroDownTimePort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

