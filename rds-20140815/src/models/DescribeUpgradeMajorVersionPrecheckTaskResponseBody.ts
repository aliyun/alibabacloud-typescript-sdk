// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpgradeMajorVersionPrecheckTaskResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The check time.
   * 
   * The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1635143903000
   */
  checkTime?: string;
  /**
   * @remarks
   * The content of the major engine version upgrade check report.
   * 
   * @example
   * [user_check_report]User check success\\n[pg_upgrade_internal.log]Performing...
   */
  detail?: string;
  /**
   * @remarks
   * The expiration time of the check report.
   * 
   * The value is a UNIX timestamp. Unit: milliseconds.
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
   * The recommended minimum memory for the upgrade. Unit: GB.
   * 
   * > This parameter is returned only for ApsaraDB RDS for PostgreSQL instances.
   * 
   * @example
   * 8
   */
  recommendLeastMemSize?: number;
  /**
   * @remarks
   * The recommended memory for the upgrade. Unit: GB.
   * 
   * If the memory of the instance is greater than or equal to the recommended memory, the upgrade is performed at the fastest speed to minimize the read-only duration of the instance.
   * 
   * > This parameter is returned only for ApsaraDB RDS for PostgreSQL instances.
   * 
   * @example
   * 32
   */
  recommendMemSize?: number;
  /**
   * @remarks
   * The result of major engine version upgrade check.
   * 
   * Valid values:
   * - Success: The check is passed.
   * - Fail: The check failed.
   * - warning: The check returned warnings. Review the report to determine whether to proceed with the upgrade.
   * 
   * > If the check result is **Fail**, check the value of the **Detail** parameter, resolve the errors, and try again. For common errors and solutions, see [Understand major engine version upgrade check report for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/218391.html).
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
   * The target instance version.
   * 
   * @example
   * 12.0
   */
  targetMajorVersion?: string;
  /**
   * @remarks
   * The node ID of the major engine version upgrade pre-check task.
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

export class DescribeUpgradeMajorVersionPrecheckTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The property list of the major engine version upgrade check report. Each attribute column contains the details of a check report entry.
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

