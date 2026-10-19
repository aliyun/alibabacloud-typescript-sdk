// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpgradeReportResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The DDL statement for object synchronization.
   * 
   * @example
   * CREATE XXXX
   */
  DDL?: string;
  /**
   * @remarks
   * The name of the assessed object.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The schema to which the assessed object belongs.
   * 
   * @example
   * ny_openapi
   */
  schema?: string;
  /**
   * @remarks
   * The compatibility assessment result. Valid values:
   * - **0**: Failed.
   * - **1**: Succeeded.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The object type of the assessed object.
   * 
   * @example
   * orca
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DDL: 'DDL',
      name: 'Name',
      schema: 'Schema',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDL: 'string',
      name: 'string',
      schema: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpgradeReportResponseBodyUpgradeReportList extends $dara.Model {
  /**
   * @remarks
   * The check time.
   * 
   * The time is in the ISO 8601 standard in the UTC time zone (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2024-03-15T06:48:44Z
   */
  checkTime?: string;
  /**
   * @remarks
   * The version of the target instance.
   * 
   * @example
   * 8.0
   */
  dstVersion?: string;
  /**
   * @remarks
   * The effective period of the assessment.
   * 
   * The time is in the ISO 8601 standard in the UTC time zone (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2024-03-08T06:48:44Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The end time of the assessment.
   * 
   * The time is in the ISO 8601 standard in the UTC time zone (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2024-03-08T06:48:44Z
   */
  endTime?: string;
  /**
   * @remarks
   * The status of the assessment task.
   * 
   * @example
   * running
   */
  result?: string;
  /**
   * @remarks
   * The name of the source instance.
   * 
   * @example
   * pc-2ze54671qoz830za9
   */
  srcInsName?: string;
  /**
   * @remarks
   * The version of the source instance.
   * 
   * @example
   * 5.7
   */
  srcVersion?: string;
  /**
   * @remarks
   * The start time of the assessment.
   * 
   * The time is in the ISO 8601 standard in the UTC time zone (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2025-07-05T01:56:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the target task.
   * 
   * @example
   * 275948
   */
  taskId?: string;
  /**
   * @remarks
   * The upgrade mode.
   * 
   * @example
   * rds2polar_pengine_with_dts
   */
  upgradeMode?: string;
  static names(): { [key: string]: string } {
    return {
      checkTime: 'CheckTime',
      dstVersion: 'DstVersion',
      effectiveTime: 'EffectiveTime',
      endTime: 'EndTime',
      result: 'Result',
      srcInsName: 'SrcInsName',
      srcVersion: 'SrcVersion',
      startTime: 'StartTime',
      taskId: 'TaskId',
      upgradeMode: 'UpgradeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkTime: 'string',
      dstVersion: 'string',
      effectiveTime: 'string',
      endTime: 'string',
      result: 'string',
      srcInsName: 'string',
      srcVersion: 'string',
      startTime: 'string',
      taskId: 'string',
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

export class DescribeUpgradeReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details.
   * 
   * @example
   * []
   */
  details?: string;
  /**
   * @remarks
   * The database type of the target instance. Valid values:
   * 
   * - **MySQL**.
   * - **Oracle**.
   * 
   * @example
   * MySQL
   */
  dstDBType?: string;
  /**
   * @remarks
   * The Oracle compatibility assessment details list.
   * > Only **Oracle** instances are supported.
   */
  items?: DescribeUpgradeReportResponseBodyItems[];
  /**
   * @remarks
   * The length of the Oracle compatibility assessment details list.
   * 
   * @example
   * 10
   */
  itemsSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627******
   */
  requestId?: string;
  /**
   * @remarks
   * The source instance ID.
   * 
   * @example
   * rm-2zen5pe5vi56447d0
   */
  sourceDBClusterId?: string;
  /**
   * @remarks
   * The database type of the source instance. Valid values:
   * 
   * - **MySQL**.
   * - **Oracle**.
   * 
   * @example
   * MySQL
   */
  srcDBType?: string;
  /**
   * @remarks
   * The deletion status of the source instance. Valid values:
   * 
   * - **0**: Not deleted.
   * - **1**: Deleted.
   * 
   * @example
   * 1
   */
  srcDeleted?: string;
  /**
   * @remarks
   * The total number of entries in the query result.
   * 
   * @example
   * 137
   */
  totalSize?: number;
  /**
   * @remarks
   * The special metric. Currently, only tair (PolarTair architecture) is supported.
   * 
   * @example
   * tair
   */
  type?: string;
  /**
   * @remarks
   * The list of assessment reports.
   */
  upgradeReportList?: DescribeUpgradeReportResponseBodyUpgradeReportList[];
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      dstDBType: 'DstDBType',
      items: 'Items',
      itemsSize: 'ItemsSize',
      requestId: 'RequestId',
      sourceDBClusterId: 'SourceDBClusterId',
      srcDBType: 'SrcDBType',
      srcDeleted: 'SrcDeleted',
      totalSize: 'TotalSize',
      type: 'Type',
      upgradeReportList: 'UpgradeReportList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: 'string',
      dstDBType: 'string',
      items: { 'type': 'array', 'itemType': DescribeUpgradeReportResponseBodyItems },
      itemsSize: 'number',
      requestId: 'string',
      sourceDBClusterId: 'string',
      srcDBType: 'string',
      srcDeleted: 'string',
      totalSize: 'number',
      type: 'string',
      upgradeReportList: { 'type': 'array', 'itemType': DescribeUpgradeReportResponseBodyUpgradeReportList },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(Array.isArray(this.upgradeReportList)) {
      $dara.Model.validateArray(this.upgradeReportList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

