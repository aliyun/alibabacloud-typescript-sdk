// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpgradeMajorVersionTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The statistics information collection pattern.
   * 
   * Valid values:
   * - **After**: Upgrade after the cutover.
   * - **Before**: Upgrade before the cutover.
   * 
   * @example
   * After
   */
  collectStatMode?: string;
  /**
   * @remarks
   * The detailed information about the task.
   * 
   * @example
   * 2021-10-27 15:03:05 --- do upgrade precheck on slave succcess.\\n2021-10-27 15:03:11 --- begin to upgrade major version, source instance will locked in readonly mode.\\n2021-10-27 15:03:21 --- upgrade master success.\\n2021-10-27 15:06:10 --- exchange source and target instance dns success.\\n
   */
  detail?: string;
  /**
   * @remarks
   * The end time of the major engine version upgrade.
   * 
   * The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1614237779000
   */
  endTime?: string;
  /**
   * @remarks
   * The final result of the task. Valid values:
   * * **Success**: The task is successful.
   * * **Failed**: The task failed.
   * * **Running**: The migration is in progress.
   * 
   * @example
   * Success
   */
  result?: string;
  /**
   * @remarks
   * The ID of the original instance before the upgrade.
   * 
   * @example
   * pgm-bp1i3kkq7321****
   */
  sourceInsName?: string;
  /**
   * @remarks
   * The version of the original instance before the upgrade.
   * 
   * @example
   * 11.0
   */
  sourceMajorVersion?: string;
  /**
   * @remarks
   * The start time of the major engine version upgrade.
   * 
   * The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1614236007000
   */
  startTime?: string;
  /**
   * @remarks
   * The end time of the instance switchover from the original instance to the new instance.
   * 
   * The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1714237539000
   */
  switchEndTime?: string;
  /**
   * @remarks
   * The time of the instance switchover from the original instance to the new instance.
   * 
   * The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1614237539000
   */
  switchTime?: string;
  /**
   * @remarks
   * The ID of the new instance after the upgrade.
   * 
   * @example
   * pgm-bp1c0v6d8092****
   */
  targetInsName?: string;
  /**
   * @remarks
   * The major engine version after the upgrade. Valid values:
   * * **10.0**
   * * **11.0**
   * * **12.0**
   * * **13.0**
   * * **14.0**
   * * **15.0**
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
   * - **clone**: no cutover
   * - **switch**: cutover
   * 
   * @example
   * switch
   */
  upgradeMode?: string;
  /**
   * @remarks
   * Indicates whether a cutover is performed.
   * 
   * - **true**: A cutover is performed.
   * - **false**: No cutover is performed.
   * 
   * @example
   * true
   */
  cutOver?: boolean;
  /**
   * @remarks
   * The estimated synchronization time for the logical replication lag. Unit: seconds.
   * > This parameter is used only for **zero-downtime** major engine version upgrades.
   * 
   * @example
   * 10
   */
  totalLogicRepDelayTime?: number;
  /**
   * @remarks
   * The size of the logical replication lag. Unit: MB.
   * 
   * > This parameter is used only for **zero-downtime** major engine version upgrades.
   * 
   * @example
   * 1
   */
  totalLogicRepLatencyMB?: number;
  /**
   * @remarks
   * The temporary internal endpoint of the higher-version instance for the zero-downtime major engine version upgrade. The format is `****.pg.rds.aliyuncs.com`.
   * > This parameter is used only for **zero-downtime** major engine version upgrades.
   * 
   * @example
   * ****.pg.rds.aliyuncs.com
   */
  zeroDownTimeConnectionString?: string;
  /**
   * @remarks
   * The port of the higher-version instance, which is the same as the port of the source instance.
   * > This parameter is used only for **zero-downtime** major engine version upgrades.
   * 
   * @example
   * 5432
   */
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

export class DescribeUpgradeMajorVersionTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of major engine version upgrade tasks.
   */
  items?: DescribeUpgradeMajorVersionTasksResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 152E0C6D-B9C3-4468-9F2C-FEF9D9E8417B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeUpgradeMajorVersionTasksResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

