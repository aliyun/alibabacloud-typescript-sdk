// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpgradeMajorVersionPrecheckTaskResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the check is performed. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1635143903000
   */
  checkTime?: string;
  /**
   * @remarks
   * The content of the check report for the major engine version upgrade.
   * 
   * @example
   * [user_check_report]User check success\\n[pg_upgrade_internal.log]Performing...
   */
  detail?: string;
  /**
   * @remarks
   * The expiration time of the check report. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1635748703000
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The recommended minimum disk capacity for the upgrade. Unit: GB.
   * 
   * > This parameter is returned only for ApsaraDB RDS for PostgreSQL instances.
   * 
   * @example
   * 100
   */
  recommendDiskSize?: number;
  /**
   * @remarks
   * The recommended minimum memory size for the upgrade. Unit: GB.
   * 
   * > This parameter is returned only for ApsaraDB RDS for PostgreSQL instances.
   * 
   * @example
   * 8
   */
  recommendLeastMemSize?: number;
  /**
   * @remarks
   * The recommended memory size for the upgrade. Unit: GB.
   * 
   * If the memory size of the instance is greater than or equal to the recommended memory size, the upgrade is performed at the maximum speed to minimize the read-only duration of the instance.
   * 
   * > This parameter is returned only for ApsaraDB RDS for PostgreSQL instances.
   * 
   * @example
   * 32
   */
  recommendMemSize?: number;
  /**
   * @remarks
   * The result of the check for the major engine version upgrade. Valid values:
   * - Success: The check is successful.
   * - Fail: The check fails.
   * - warning: A warning is returned. You must check the report to determine whether to continue the upgrade.
   * 
   * > If the check result is **Fail**, check the value of the **Detail** parameter, troubleshoot the error, and try again. For more information about common errors and solutions, see [Interpret check reports for major engine version upgrades of ApsaraDB RDS for PostgreSQL instances](https://help.aliyun.com/document_detail/218391.html).
   * 
   * @example
   * Success
   */
  result?: string;
  /**
   * @remarks
   * The current major engine version of the instance.
   * 
   * @example
   * 11.0
   */
  sourceMajorVersion?: string;
  /**
   * @remarks
   * The major engine version of the target instance.
   * 
   * @example
   * 12.0
   */
  targetMajorVersion?: string;
  /**
   * @remarks
   * The ID of the check task before the major engine version upgrade.
   * 
   * @example
   * 416980000
   */
  taskId?: number;
  /**
   * @remarks
   * The mode of the major engine version upgrade.
   * 
   * @example
   * zeroDownTimeUpgrade
   */
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

export class DescribeUpgradeMajorVersionPrecheckTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of attributes in the check reports for major engine version upgrades.
   */
  items?: DescribeUpgradeMajorVersionPrecheckTaskResponseBodyItems[];
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
   * The number of entries returned per page.
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
   * D1586777-41B5-5F9E-81E8-93DFDD379024
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the upgrade check report.
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
      items: { 'type': 'array', 'itemType': DescribeUpgradeMajorVersionPrecheckTaskResponseBodyItems },
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

