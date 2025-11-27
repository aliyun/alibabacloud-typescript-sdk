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
   * The minimum recommended disk capacity during the upgrade. Unit: GB.
   * 
   * >  This parameter is returned only for RDS for PostgreSQL instances.
   * 
   * @example
   * 100
   */
  recommendDiskSize?: number;
  /**
   * @remarks
   * The minimum recommended memory size during the upgrade. Unit: GB.
   * 
   * >  This parameter is returned only for RDS for PostgreSQL instances.
   * 
   * @example
   * 8
   */
  recommendLeastMemSize?: number;
  /**
   * @remarks
   * The recommended memory size during the upgrade. Unit: GB.
   * 
   * If the memory size of an RDS instance is greater than or equal to the recommended memory size, the RDS instance is immediately upgraded to reduce the read-only time of the instance.
   * 
   * >  This parameter is returned only for RDS for PostgreSQL instances.
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

export class DescribeUpgradeMajorVersionPrecheckTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the upgrade check reports.
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
   * The ID of the request.
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

