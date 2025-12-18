// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesResponseBodyDBInstancesNodes extends $dara.Model {
  /**
   * @example
   * polarx.x4.large.2e
   */
  classCode?: string;
  id?: string;
  /**
   * **if can be null:**
   * true
   */
  name?: string;
  /**
   * @example
   * cn-hangzhou-g-aliyun
   */
  regionId?: string;
  /**
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      id: 'Id',
      name: 'Name',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      id: 'string',
      name: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesTagSet extends $dara.Model {
  /**
   * @example
   * key1
   */
  key?: string;
  /**
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstances extends $dara.Model {
  /**
   * @example
   * pxc-c-dmlgit****
   */
  cdcInstanceName?: string;
  /**
   * @example
   * polarx.x4.large.2e
   */
  cnNodeClassCode?: string;
  /**
   * @example
   * 2
   */
  cnNodeCount?: number;
  columnarInstanceName?: string;
  columnarReadDBInstances?: string[];
  /**
   * @example
   * drds_polarxpre_public_cn
   */
  commodityCode?: string;
  /**
   * @example
   * true
   */
  containBinlogX?: boolean;
  cpuType?: string;
  /**
   * @example
   * 2021-11-01T03:49:50.000+0000
   */
  createTime?: string;
  /**
   * @example
   * pxc-xxxxx
   */
  DBInstanceName?: string;
  /**
   * @example
   * polarx
   */
  DBType?: string;
  /**
   * @example
   * 5.7
   */
  DBVersion?: string;
  description?: string;
  /**
   * @example
   * mysql.n4.medium.25
   */
  dnNodeClassCode?: string;
  /**
   * @example
   * 2
   */
  dnNodeCount?: number;
  /**
   * @example
   * polarx
   */
  engine?: string;
  engineVersion?: string;
  /**
   * @example
   * 2021-12-01T16:00:00.000+0000
   */
  expireTime?: string;
  /**
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @example
   * pxc-hzr2yeov9jmg3z
   */
  id?: string;
  /**
   * @example
   * Unlock
   */
  lockMode?: string;
  lockReason?: string;
  /**
   * @example
   * polarx-kernel_5.4.12-16349923_xcluster-20210926
   */
  minorVersion?: string;
  /**
   * @example
   * VPC
   */
  network?: string;
  /**
   * @example
   * polarx.x4.large.2e
   */
  nodeClass?: string;
  /**
   * @example
   * 5
   */
  nodeCount?: number;
  nodes?: DescribeDBInstancesResponseBodyDBInstancesNodes[];
  /**
   * @example
   * Prepaid
   */
  payType?: string;
  primaryInstanceId?: string;
  /**
   * @remarks
   * 主可用区。
   * 
   * This parameter is required.
   */
  primaryZone?: string;
  readDBInstances?: string[];
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-xxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * 次可用区。
   */
  secondaryZone?: string;
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
  storageType?: string;
  /**
   * @example
   * 40658534400
   */
  storageUsed?: number;
  /**
   * @example
   * true
   */
  supportBinlogX?: boolean;
  tagSet?: DescribeDBInstancesResponseBodyDBInstancesTagSet[];
  /**
   * @remarks
   * 第三可用区。
   */
  tertiaryZone?: string;
  /**
   * @remarks
   * 拓扑类型：
   * 
   * - **3azones**：三可用区；
   * - **1azone**：单可用区。
   * 
   * This parameter is required.
   */
  topologyType?: string;
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
   * VPCID
   */
  VPCId?: string;
  /**
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  gdnRole?: string;
  isInGdn?: boolean;
  static names(): { [key: string]: string } {
    return {
      cdcInstanceName: 'CdcInstanceName',
      cnNodeClassCode: 'CnNodeClassCode',
      cnNodeCount: 'CnNodeCount',
      columnarInstanceName: 'ColumnarInstanceName',
      columnarReadDBInstances: 'ColumnarReadDBInstances',
      commodityCode: 'CommodityCode',
      containBinlogX: 'ContainBinlogX',
      cpuType: 'CpuType',
      createTime: 'CreateTime',
      DBInstanceName: 'DBInstanceName',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      description: 'Description',
      dnNodeClassCode: 'DnNodeClassCode',
      dnNodeCount: 'DnNodeCount',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      id: 'Id',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      minorVersion: 'MinorVersion',
      network: 'Network',
      nodeClass: 'NodeClass',
      nodeCount: 'NodeCount',
      nodes: 'Nodes',
      payType: 'PayType',
      primaryInstanceId: 'PrimaryInstanceId',
      primaryZone: 'PrimaryZone',
      readDBInstances: 'ReadDBInstances',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      secondaryZone: 'SecondaryZone',
      series: 'Series',
      status: 'Status',
      storageType: 'StorageType',
      storageUsed: 'StorageUsed',
      supportBinlogX: 'SupportBinlogX',
      tagSet: 'TagSet',
      tertiaryZone: 'TertiaryZone',
      topologyType: 'TopologyType',
      type: 'Type',
      VPCId: 'VPCId',
      zoneId: 'ZoneId',
      gdnRole: 'gdnRole',
      isInGdn: 'isInGdn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdcInstanceName: 'string',
      cnNodeClassCode: 'string',
      cnNodeCount: 'number',
      columnarInstanceName: 'string',
      columnarReadDBInstances: { 'type': 'array', 'itemType': 'string' },
      commodityCode: 'string',
      containBinlogX: 'boolean',
      cpuType: 'string',
      createTime: 'string',
      DBInstanceName: 'string',
      DBType: 'string',
      DBVersion: 'string',
      description: 'string',
      dnNodeClassCode: 'string',
      dnNodeCount: 'number',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      expired: 'boolean',
      id: 'string',
      lockMode: 'string',
      lockReason: 'string',
      minorVersion: 'string',
      network: 'string',
      nodeClass: 'string',
      nodeCount: 'number',
      nodes: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesNodes },
      payType: 'string',
      primaryInstanceId: 'string',
      primaryZone: 'string',
      readDBInstances: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      secondaryZone: 'string',
      series: 'string',
      status: 'string',
      storageType: 'string',
      storageUsed: 'number',
      supportBinlogX: 'boolean',
      tagSet: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesTagSet },
      tertiaryZone: 'string',
      topologyType: 'string',
      type: 'string',
      VPCId: 'string',
      zoneId: 'string',
      gdnRole: 'string',
      isInGdn: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.columnarReadDBInstances)) {
      $dara.Model.validateArray(this.columnarReadDBInstances);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
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

export class DescribeDBInstancesResponseBody extends $dara.Model {
  DBInstances?: DescribeDBInstancesResponseBodyDBInstances[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
   */
  requestId?: string;
  /**
   * @example
   * 30
   */
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalNumber: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.DBInstances)) {
      $dara.Model.validateArray(this.DBInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

