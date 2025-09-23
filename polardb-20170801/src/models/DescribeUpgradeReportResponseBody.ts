// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpgradeReportResponseBodyItems extends $dara.Model {
  /**
   * @example
   * CREATE XXXX
   */
  DDL?: string;
  /**
   * @example
   * testName
   */
  name?: string;
  /**
   * @example
   * ny_openapi
   */
  schema?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  /**
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
   * @example
   * 2024-03-15T06:48:44Z
   */
  checkTime?: string;
  /**
   * @example
   * 8.0
   */
  dstVersion?: string;
  /**
   * @example
   * 2024-03-08T06:48:44Z
   */
  effectiveTime?: string;
  /**
   * @example
   * 2024-03-08T06:48:44Z
   */
  endTime?: string;
  /**
   * @example
   * running
   */
  result?: string;
  /**
   * @example
   * pc-2ze54671qoz830za9
   */
  srcInsName?: string;
  /**
   * @example
   * 5.7
   */
  srcVersion?: string;
  /**
   * @example
   * 2025-07-05T01:56:00Z
   */
  startTime?: string;
  /**
   * @example
   * 275948
   */
  taskId?: string;
  /**
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
   * @example
   * []
   */
  details?: string;
  /**
   * @example
   * MySQL
   */
  dstDBType?: string;
  items?: DescribeUpgradeReportResponseBodyItems[];
  /**
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
   * @example
   * rm-2zen5pe5vi56447d0
   */
  sourceDBClusterId?: string;
  /**
   * @example
   * MySQL
   */
  srcDBType?: string;
  /**
   * @example
   * 1
   */
  srcDeleted?: string;
  /**
   * @example
   * 137
   */
  totalSize?: number;
  /**
   * @example
   * tair
   */
  type?: string;
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

