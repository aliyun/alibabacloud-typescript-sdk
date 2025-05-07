// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpgradeMajorVersionPrecheckTaskResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time at which the upgrade check was performed.
   * 
   * The value of this parameter is a timestamp that follows the UNIX time format. Unit: milliseconds.
   * 
   * @example
   * 1635143903000
   */
  checkTime?: string;
  /**
   * @remarks
   * The content of the upgrade check report.
   * 
   * @example
   * [user_check_report]User check success\\n[pg_upgrade_internal.log]Performing...
   */
  detail?: string;
  /**
   * @remarks
   * The expiration time of the upgrade check report.
   * 
   * The value of this parameter is a timestamp that follows the UNIX time format. Unit: milliseconds.
   * 
   * @example
   * 1635748703000
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The minimum recommended disk capacity for upgrading. Unit: GB.
   * 
   * > This parameter is returned only for RDS PostgreSQL instances.
   * 
   * @example
   * 100
   */
  recommendDiskSize?: number;
  /**
   * @remarks
   * The minimum recommended memory for upgrading. Unit: GB.
   * 
   * > This parameter is returned only for RDS PostgreSQL instances.
   * 
   * @example
   * 8
   */
  recommendLeastMemSize?: number;
  /**
   * @remarks
   * Recommended memory when upgrading. Unit: GB.
   * 
   * When the memory of the instance is greater than or equal to the recommended memory, it will be upgraded at the fastest speed to minimize the read-only time of the instance.
   * 
   * > This parameter is returned only for RDS PostgreSQL instances.
   * 
   * @example
   * 32
   */
  recommendMemSize?: number;
  /**
   * @remarks
   * The result of the upgrade check.
   * 
   * Valid values:
   * 
   * *   Success
   * *   Fail
   * 
   * >  If the check result is **Fail**, you must check the value of the **Detail** parameter to obtain the information about the errors that occurred, resolve the errors, and then try again. For more information about how to resolve common errors, see [Introduction to the check report for a major engine version upgrade to an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/218391.html).
   * 
   * @example
   * Success
   */
  result?: string;
  /**
   * @remarks
   * The original major engine version of the instance.
   * 
   * @example
   * 11.0
   */
  sourceMajorVersion?: string;
  /**
   * @remarks
   * The new major engine version of the instance.
   * 
   * @example
   * 12.0
   */
  targetMajorVersion?: string;
  /**
   * @remarks
   * The ID of the upgrade check task.
   * 
   * @example
   * 416980000
   */
  taskId?: number;
  upgradeMode?: string;
  static names(): { [key: string]: string } {
    return {
      checkTime: 'CheckTime',
      detail: 'Detail',
      effectiveTime: 'EffectiveTime',
      recommendDiskSize: 'RecommendDiskSize',
      recommendLeastMemSize: 'RecommendLeastMemSize',
      recommendMemSize: 'RecommendMemSize',
      result: 'Result',
      sourceMajorVersion: 'SourceMajorVersion',
      targetMajorVersion: 'TargetMajorVersion',
      taskId: 'TaskId',
      upgradeMode: 'UpgradeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkTime: 'string',
      detail: 'string',
      effectiveTime: 'string',
      recommendDiskSize: 'number',
      recommendLeastMemSize: 'number',
      recommendMemSize: 'number',
      result: 'string',
      sourceMajorVersion: 'string',
      targetMajorVersion: 'string',
      taskId: 'number',
      upgradeMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

