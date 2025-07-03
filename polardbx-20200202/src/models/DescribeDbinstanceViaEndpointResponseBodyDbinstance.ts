// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceViaEndpointResponseBodyDBInstanceConnAddrs } from "./DescribeDbinstanceViaEndpointResponseBodyDbinstanceConnAddrs";
import { DescribeDBInstanceViaEndpointResponseBodyDBInstanceDBNodes } from "./DescribeDbinstanceViaEndpointResponseBodyDbinstanceDbnodes";
import { DescribeDBInstanceViaEndpointResponseBodyDBInstanceTagSet } from "./DescribeDbinstanceViaEndpointResponseBodyDbinstanceTagSet";


export class DescribeDBInstanceViaEndpointResponseBodyDBInstance extends $dara.Model {
  /**
   * @example
   * polarx.x4.xlarge.2e
   */
  cnNodeClassCode?: string;
  /**
   * @example
   * 2
   */
  cnNodeCount?: number;
  /**
   * @example
   * drds_polarxpost_public_cn
   */
  commodityCode?: string;
  connAddrs?: DescribeDBInstanceViaEndpointResponseBodyDBInstanceConnAddrs[];
  /**
   * @example
   * pxc-sprpx766vo****.polarx.singapore.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @example
   * 2021-08-31T08:56:25.000+0000
   */
  createTime?: string;
  /**
   * @example
   * ReadWrite
   */
  DBInstanceType?: string;
  /**
   * @example
   * polarx.x4.large.2e
   */
  DBNodeClass?: string;
  /**
   * @example
   * 2
   */
  DBNodeCount?: number;
  DBNodes?: DescribeDBInstanceViaEndpointResponseBodyDBInstanceDBNodes[];
  /**
   * @example
   * polarx
   */
  DBType?: string;
  /**
   * @example
   * 5.5
   */
  DBVersion?: string;
  /**
   * @example
   * test instance
   */
  description?: string;
  /**
   * @example
   * mysql.x8.large.25
   */
  dnNodeClassCode?: string;
  /**
   * @example
   * 2
   */
  dnNodeCount?: number;
  /**
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @example
   * 2022-08-31T16:00:00.000+0000
   */
  expireDate?: string;
  /**
   * @example
   * false
   */
  expired?: string;
  /**
   * @example
   * pxc-zkralxpc5d****
   */
  id?: string;
  /**
   * @example
   * 18
   */
  kindCode?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  LTSVersions?: string[];
  /**
   * @example
   * polarx-kernel_5.4.11-16301083_xcluster-20210805
   */
  latestMinorVersion?: string;
  /**
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @example
   * 06:00
   */
  maintainEndTime?: string;
  /**
   * @example
   * 06:00
   */
  maintainStartTime?: string;
  /**
   * @example
   * polarx-kernel_5.4.11-16301083_xcluster-20210805
   */
  minorVersion?: string;
  /**
   * @example
   * VPC
   */
  network?: string;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * 3306
   */
  port?: string;
  readDBInstances?: string[];
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * false
   */
  rightsSeparationEnabled?: boolean;
  /**
   * @example
   * disabled
   */
  rightsSeparationStatus?: string;
  /**
   * @example
   * enterprise
   */
  series?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * 17042505728
   */
  storageUsed?: number;
  tagSet?: DescribeDBInstanceViaEndpointResponseBodyDBInstanceTagSet[];
  /**
   * @example
   * ReadWrite
   */
  type?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-xxxxx
   */
  VPCId?: string;
  /**
   * @example
   * vsw-********
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cnNodeClassCode: 'CnNodeClassCode',
      cnNodeCount: 'CnNodeCount',
      commodityCode: 'CommodityCode',
      connAddrs: 'ConnAddrs',
      connectionString: 'ConnectionString',
      createTime: 'CreateTime',
      DBInstanceType: 'DBInstanceType',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DBNodes: 'DBNodes',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      description: 'Description',
      dnNodeClassCode: 'DnNodeClassCode',
      dnNodeCount: 'DnNodeCount',
      engine: 'Engine',
      expireDate: 'ExpireDate',
      expired: 'Expired',
      id: 'Id',
      kindCode: 'KindCode',
      LTSVersions: 'LTSVersions',
      latestMinorVersion: 'LatestMinorVersion',
      lockMode: 'LockMode',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      minorVersion: 'MinorVersion',
      network: 'Network',
      payType: 'PayType',
      port: 'Port',
      readDBInstances: 'ReadDBInstances',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      rightsSeparationEnabled: 'RightsSeparationEnabled',
      rightsSeparationStatus: 'RightsSeparationStatus',
      series: 'Series',
      status: 'Status',
      storageUsed: 'StorageUsed',
      tagSet: 'TagSet',
      type: 'Type',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnNodeClassCode: 'string',
      cnNodeCount: 'number',
      commodityCode: 'string',
      connAddrs: { 'type': 'array', 'itemType': DescribeDBInstanceViaEndpointResponseBodyDBInstanceConnAddrs },
      connectionString: 'string',
      createTime: 'string',
      DBInstanceType: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DBNodes: { 'type': 'array', 'itemType': DescribeDBInstanceViaEndpointResponseBodyDBInstanceDBNodes },
      DBType: 'string',
      DBVersion: 'string',
      description: 'string',
      dnNodeClassCode: 'string',
      dnNodeCount: 'number',
      engine: 'string',
      expireDate: 'string',
      expired: 'string',
      id: 'string',
      kindCode: 'number',
      LTSVersions: { 'type': 'array', 'itemType': 'string' },
      latestMinorVersion: 'string',
      lockMode: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      minorVersion: 'string',
      network: 'string',
      payType: 'string',
      port: 'string',
      readDBInstances: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      rightsSeparationEnabled: 'boolean',
      rightsSeparationStatus: 'string',
      series: 'string',
      status: 'string',
      storageUsed: 'number',
      tagSet: { 'type': 'array', 'itemType': DescribeDBInstanceViaEndpointResponseBodyDBInstanceTagSet },
      type: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connAddrs)) {
      $dara.Model.validateArray(this.connAddrs);
    }
    if(Array.isArray(this.DBNodes)) {
      $dara.Model.validateArray(this.DBNodes);
    }
    if(Array.isArray(this.LTSVersions)) {
      $dara.Model.validateArray(this.LTSVersions);
    }
    if(Array.isArray(this.readDBInstances)) {
      $dara.Model.validateArray(this.readDBInstances);
    }
    if(Array.isArray(this.tagSet)) {
      $dara.Model.validateArray(this.tagSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

