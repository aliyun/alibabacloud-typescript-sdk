// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesResponseBodyDBInstancesNodes extends $dara.Model {
  /**
   * @remarks
   * The instance specifications.
   * 
   * @example
   * polarx.x4.large.2e
   */
  classCode?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * pxi-zd89wrzqh******
   */
  id?: string;
  /**
   * **if can be null:**
   * true
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou-g-aliyun
   */
  regionId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
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
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
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
   * @remarks
   * The name of the log node.
   * 
   * @example
   * pxc-c-dmlgit****
   */
  cdcInstanceName?: string;
  /**
   * @remarks
   * The CN node specifications.
   * 
   * @example
   * polarx.x4.large.2e
   */
  cnNodeClassCode?: string;
  /**
   * @remarks
   * The number of CN nodes.
   * 
   * @example
   * 2
   */
  cnNodeCount?: number;
  /**
   * @remarks
   * The name of the column store engine instance.
   * 
   * @example
   * xxxxxxxx
   */
  columnarInstanceName?: string;
  /**
   * @remarks
   * The column store read-only instance information.
   */
  columnarReadDBInstances?: string[];
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * drds_polarxpre_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * Specifies whether the instance contains the multi-stream log service. Valid values:
   * 
   * @example
   * true
   */
  containBinlogX?: boolean;
  cpuType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-11-01T03:49:50.000+0000
   */
  createTime?: string;
  /**
   * @remarks
   * The database instance name.
   * 
   * @example
   * pxc-xxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The database type.
   * 
   * @example
   * polarx
   */
  DBType?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 5.7
   */
  DBVersion?: string;
  /**
   * @remarks
   * The database description.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The DN node specifications.
   * 
   * @example
   * mysql.n4.medium.25
   */
  dnNodeClassCode?: string;
  /**
   * @remarks
   * The number of DN nodes.
   * 
   * @example
   * 2
   */
  dnNodeCount?: number;
  /**
   * @remarks
   * The engine type.
   * 
   * @example
   * polarx
   */
  engine?: string;
  engineVersion?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2021-12-01T16:00:00.000+0000
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the instance has expired.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pxc-hzr2yeov******
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the instance is locked.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The lock reason.
   * 
   * @example
   * Overdue
   */
  lockReason?: string;
  /**
   * @remarks
   * The current Milvus version.
   * 
   * @example
   * polarx-kernel_5.4.12-16349923_xcluster-20210926
   */
  minorVersion?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * VPC
   */
  network?: string;
  /**
   * @remarks
   * The node specifications.
   * 
   * @example
   * polarx.x4.large.2e
   */
  nodeClass?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 5
   */
  nodeCount?: number;
  /**
   * @remarks
   * The list of nodes.
   */
  nodes?: DescribeDBInstancesResponseBodyDBInstancesNodes[];
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  primaryInstanceId?: string;
  /**
   * @remarks
   * The primary zone.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-j
   */
  primaryZone?: string;
  /**
   * @remarks
   * The list of read-only instances.
   */
  readDBInstances?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-xxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The secondary zone.
   * 
   * @example
   * cn-hangzhou-l
   */
  secondaryZone?: string;
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * @example
   * enterprise
   */
  series?: string;
  /**
   * @remarks
   * The instance status. For more information, see [Instance status table](https://help.aliyun.com/document_detail/339826.html).
   * 
   * @example
   * Running
   */
  status?: string;
  storageType?: string;
  /**
   * @remarks
   * The storage usage.
   * 
   * @example
   * 40658534400
   */
  storageUsed?: number;
  /**
   * @remarks
   * Indicates whether the instance supports multi-stream. Valid values:
   * 
   * @example
   * true
   */
  supportBinlogX?: boolean;
  /**
   * @remarks
   * The set of tags.
   */
  tagSet?: DescribeDBInstancesResponseBodyDBInstancesTagSet[];
  /**
   * @remarks
   * The tertiary active zone for three-zone deployment.
   * 
   * @example
   * cn-hangzhou-k
   */
  tertiaryZone?: string;
  /**
   * @remarks
   * The topology type.
   * 
   * This parameter is required.
   * 
   * @example
   * 3azones
   */
  topologyType?: string;
  /**
   * @remarks
   * The instance type.
   * 
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
   * @remarks
   * The zone ID.
   * 
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
  /**
   * @remarks
   * The list of instances.
   */
  DBInstances?: DescribeDBInstancesResponseBodyDBInstances[];
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
   * The page size.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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

