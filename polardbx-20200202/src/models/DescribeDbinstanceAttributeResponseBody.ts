// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeResponseBodyDBInstanceConnAddrs extends $dara.Model {
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * polardbx-xxx.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The connection port number.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The connection type. **VPC** indicates an internal network connection. **PUBLIC** indicates a public network connection.
   * 
   * @example
   * VPC
   */
  type?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-xxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-*********
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The internal CloudInstanceId within the VPC. You can ignore this parameter.
   * 
   * @example
   * pxc-zkralxpc5d****
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      port: 'Port',
      type: 'Type',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      port: 'number',
      type: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstanceDBNodes extends $dara.Model {
  /**
   * @remarks
   * The name of the compute node.
   * 
   * @example
   * pxc-i-********
   */
  computeNodeId?: string;
  /**
   * @remarks
   * The name of the storage node.
   * 
   * @example
   * pxc-xdb-xxxxxx
   */
  dataNodeId?: string;
  /**
   * @remarks
   * The logical node ID.
   * 
   * @example
   * pxi-*********
   */
  id?: string;
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
   * The region ID of the node.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The zone in which the node resides.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      computeNodeId: 'ComputeNodeId',
      dataNodeId: 'DataNodeId',
      id: 'Id',
      nodeClass: 'NodeClass',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeNodeId: 'string',
      dataNodeId: 'string',
      id: 'string',
      nodeClass: 'string',
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

export class DescribeDBInstanceAttributeResponseBodyDBInstanceGdnMemberList extends $dara.Model {
  memberName?: string;
  role?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
      role: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstanceTagSet extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key2
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value2
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

export class DescribeDBInstanceAttributeResponseBodyDBInstance extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the In-Memory Column Index feature is supported.
   * 
   * @example
   * true
   */
  canNotCreateColumnar?: boolean;
  /**
   * @remarks
   * The CN node specifications. Valid values:
   * - **polarx.x4.medium.2e**: 2 cores, 8 GB
   * - **polarx.x4.large.2e**: 4 cores, 16 GB
   * - **polarx.x8.large.2e**: 4 cores, 32 GB
   * - **polarx.x4.xlarge.2e**: 8 cores, 32 GB
   * - **polarx.x8.xlarge.2e**: 8 cores, 64 GB
   * - **polarx.x4.2xlarge.2e**: 16 cores, 64 GB
   * - **polarx.x8.2xlarge.2e**: 16 cores, 128 GB
   * - **polarx.x4.4xlarge.2e**: 32 cores, 128 GB
   * - **polarx.x8.4xlarge.2e**: 32 cores, 256 GB
   * - **polarx.st.8xlarge.2e**: 60 cores, 470 GB
   * - **polarx.st.12xlarge.2e**: 90 cores, 720 GB.
   * 
   * @example
   * polarx.x4.xlarge.2e
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
   * xxxx
   */
  columnarInstanceName?: string;
  /**
   * @remarks
   * The column store read-only instance information.
   */
  columnarReadDBInstances?: string[];
  /**
   * @remarks
   * The commodity code of the instance. The value is fixed as drds_polarxpost_public_cn.
   * 
   * @example
   * drds_polarxpost_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The endpoint information.
   */
  connAddrs?: DescribeDBInstanceAttributeResponseBodyDBInstanceConnAddrs[];
  /**
   * @remarks
   * The internal network connection string.
   * 
   * @example
   * pxc-sprpx766vo****.polarx.singapore.rds.aliyuncs.com
   */
  connectionString?: string;
  cpuType?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2021-08-31T08:56:25.000+0000
   */
  createTime?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - **ReadWrite**: primary instance.
   * - **ReadOnly**: read-only instance.
   * 
   * @example
   * ReadWrite
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The node specifications of the instance.
   * 
   * @example
   * polarx.x4.large.2e
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The number of instance nodes.
   * 
   * @example
   * 2
   */
  DBNodeCount?: number;
  /**
   * @remarks
   * The database node information.
   */
  DBNodes?: DescribeDBInstanceAttributeResponseBodyDBInstanceDBNodes[];
  /**
   * @remarks
   * The database type. The value is fixed as polarx.
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
   * 5.5
   */
  DBVersion?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * test instance
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the DN nodes of the instance have different specifications. Valid values:
   * 
   * - true: The specifications are different.
   * - false: The specifications are the same.
   * 
   * @example
   * false
   */
  differentDNSpec?: boolean;
  /**
   * @remarks
   * The DN node specifications. Valid values:
   * - **mysql.n2.medium.25**: 2 cores, 4 GB
   * - **mysql.n4.medium.25**: 2 cores, 8 GB
   * - **mysql.x8.medium.25**: 2 cores, 16 GB
   * - **mysql.n2.large.25**: 4 cores, 8 GB
   * - **mysql.n4.large.25**: 4 cores, 16 GB
   * - **mysql.x8.large.25**: 4 cores, 32 GB
   * - **mysql.n2.xlarge.25**: 8 cores, 16 GB
   * - **mysql.n4.xlarge.25**: 8 cores, 32 GB
   * - **mysql.x8.xlarge.25**: 8 cores, 64 GB
   * - **mysql.n4.2xlarge.25**: 16 cores, 64 GB
   * - **mysql.x8.2xlarge.25**: 16 cores, 128 GB
   * - **mysql.x4.4xlarge.25**: 32 cores, 128 GB
   * - **mysql.x8.4xlarge.25**: 32 cores, 256 GB
   * - **mysql.st.8xlarge.25**: 60 cores, 470 GB
   * - **mysql.st.12xlarge.25**: 90 cores, 720 GB.
   * 
   * @example
   * mysql.x8.large.25
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
   * The disk space of the DN data nodes, in GB.
   */
  dnStorageSpace?: string;
  /**
   * @remarks
   * The database type. The value is fixed as polarx.
   * 
   * @example
   * polarx
   */
  engine?: string;
  engineVersion?: string;
  /**
   * @remarks
   * The expiration time. The time is in the yyyy-MM-ddTHH:mm:ss.sss+0000 format (UTC).
   * 
   * @example
   * 2022-08-31T16:00:00.000+0000
   */
  expireDate?: string;
  /**
   * @remarks
   * Indicates whether the instance has expired. Valid values:
   * 
   * - **true**: The instance has expired.
   * - **false**: The instance is running normally.
   * 
   * @example
   * false
   */
  expired?: string;
  gdnInstanceName?: string;
  gdnMemberList?: DescribeDBInstanceAttributeResponseBodyDBInstanceGdnMemberList[];
  gdnRole?: string;
  /**
   * @remarks
   * The ID of the primary instance. If this parameter is not returned, the instance is a primary instance.
   * 
   * @example
   * pxc-zkralxpc5d****
   */
  id?: string;
  /**
   * @remarks
   * The instance DPI engine version code. This is an internal parameter.
   * 
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
   * @remarks
   * The latest kernel version supported by the instance.
   * 
   * @example
   * polarx-kernel_5.4.11-16301083_xcluster-20210805
   */
  latestMinorVersion?: string;
  /**
   * @remarks
   * The lock mode of the instance. Valid values:
   * 
   * - **Unlock**: The instance is running normally.
   * - **ManualLock**: The instance is manually locked.
   * - **LockByExpiration**: The instance is automatically locked due to expiration.
   * - **LockByRestoration**: The instance is automatically locked before a rollback.
   * - **LockByDiskQuota**: The instance is automatically locked because the storage is full.
   * - **LockReadInstanceByDiskQuota**: The read-only instance is automatically locked because the storage is full.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The end time of the maintenance window. The time is in UTC. Add 8 hours to obtain the maintenance window displayed in the console.
   * 
   * @example
   * 06:00
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window. The time is in UTC. Add 8 hours to obtain the maintenance window displayed in the console.
   * 
   * @example
   * 06:00
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The current kernel version.
   * 
   * @example
   * polarx-kernel_5.4.11-16301083_xcluster-20210805
   */
  minorVersion?: string;
  /**
   * @remarks
   * The network type of the instance. Only VPC is supported, which indicates a virtual private cloud (VPC).
   * 
   * @example
   * VPC
   */
  network?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The internal network connection port.
   * 
   * @example
   * 3306
   */
  port?: string;
  primaryInstanceId?: string;
  /**
   * @remarks
   * The primary zone.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen-e
   */
  primaryZone?: string;
  /**
   * @remarks
   * The list of read-only instance names.
   */
  readDBInstances?: string[];
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-*********
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The three-role mode status. Valid values:
   * 
   * - **false**: Disabled.
   * - **true**: Enabled.
   * 
   * @example
   * false
   */
  rightsSeparationEnabled?: boolean;
  /**
   * @remarks
   * The three-role mode status. Valid values:
   * 
   * - **disabled**: Disabled.
   * - **enabled**: Enabled.
   * - **processing**: Being processed.
   * - **unknown**: Unknown. The instance may be disconnected.
   * 
   * @example
   * disabled
   */
  rightsSeparationStatus?: string;
  /**
   * @remarks
   * The secondary zone.
   * 
   * @example
   * cn-shenzhen-a
   */
  secondaryZone?: string;
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * - **enterprise**: Enterprise Edition.
   * - **standard**: Standard Edition.
   * 
   * @example
   * enterprise
   */
  series?: string;
  specCategory?: string;
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
   * The used storage space, in bytes.
   * 
   * @example
   * 17042505728
   */
  storageUsed?: number;
  /**
   * @remarks
   * The tag set.
   */
  tagSet?: DescribeDBInstanceAttributeResponseBodyDBInstanceTagSet[];
  /**
   * @remarks
   * The third zone.
   * 
   * @example
   * cn-shenzhen-e
   */
  tertiaryZone?: string;
  /**
   * @remarks
   * The topology type. Valid values:
   * 
   * - **3azones**: three-zone deployment.
   * - **1azone**: single-zone deployment.
   * 
   * This parameter is required.
   * 
   * @example
   * 3azones
   */
  topologyType?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - **ReadWrite**: primary instance.
   * - **ReadOnly**: read-only instance.
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
   * vpc-xxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-********
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone in which the instance resides.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      canNotCreateColumnar: 'CanNotCreateColumnar',
      cnNodeClassCode: 'CnNodeClassCode',
      cnNodeCount: 'CnNodeCount',
      columnarInstanceName: 'ColumnarInstanceName',
      columnarReadDBInstances: 'ColumnarReadDBInstances',
      commodityCode: 'CommodityCode',
      connAddrs: 'ConnAddrs',
      connectionString: 'ConnectionString',
      cpuType: 'CpuType',
      createTime: 'CreateTime',
      DBInstanceType: 'DBInstanceType',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DBNodes: 'DBNodes',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      description: 'Description',
      differentDNSpec: 'DifferentDNSpec',
      dnNodeClassCode: 'DnNodeClassCode',
      dnNodeCount: 'DnNodeCount',
      dnStorageSpace: 'DnStorageSpace',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireDate: 'ExpireDate',
      expired: 'Expired',
      gdnInstanceName: 'GdnInstanceName',
      gdnMemberList: 'GdnMemberList',
      gdnRole: 'GdnRole',
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
      primaryInstanceId: 'PrimaryInstanceId',
      primaryZone: 'PrimaryZone',
      readDBInstances: 'ReadDBInstances',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      rightsSeparationEnabled: 'RightsSeparationEnabled',
      rightsSeparationStatus: 'RightsSeparationStatus',
      secondaryZone: 'SecondaryZone',
      series: 'Series',
      specCategory: 'SpecCategory',
      status: 'Status',
      storageType: 'StorageType',
      storageUsed: 'StorageUsed',
      tagSet: 'TagSet',
      tertiaryZone: 'TertiaryZone',
      topologyType: 'TopologyType',
      type: 'Type',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canNotCreateColumnar: 'boolean',
      cnNodeClassCode: 'string',
      cnNodeCount: 'number',
      columnarInstanceName: 'string',
      columnarReadDBInstances: { 'type': 'array', 'itemType': 'string' },
      commodityCode: 'string',
      connAddrs: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstanceConnAddrs },
      connectionString: 'string',
      cpuType: 'string',
      createTime: 'string',
      DBInstanceType: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DBNodes: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstanceDBNodes },
      DBType: 'string',
      DBVersion: 'string',
      description: 'string',
      differentDNSpec: 'boolean',
      dnNodeClassCode: 'string',
      dnNodeCount: 'number',
      dnStorageSpace: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireDate: 'string',
      expired: 'string',
      gdnInstanceName: 'string',
      gdnMemberList: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstanceGdnMemberList },
      gdnRole: 'string',
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
      primaryInstanceId: 'string',
      primaryZone: 'string',
      readDBInstances: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      rightsSeparationEnabled: 'boolean',
      rightsSeparationStatus: 'string',
      secondaryZone: 'string',
      series: 'string',
      specCategory: 'string',
      status: 'string',
      storageType: 'string',
      storageUsed: 'number',
      tagSet: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstanceTagSet },
      tertiaryZone: 'string',
      topologyType: 'string',
      type: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columnarReadDBInstances)) {
      $dara.Model.validateArray(this.columnarReadDBInstances);
    }
    if(Array.isArray(this.connAddrs)) {
      $dara.Model.validateArray(this.connAddrs);
    }
    if(Array.isArray(this.DBNodes)) {
      $dara.Model.validateArray(this.DBNodes);
    }
    if(Array.isArray(this.gdnMemberList)) {
      $dara.Model.validateArray(this.gdnMemberList);
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

export class DescribeDBInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database instance information.
   */
  DBInstance?: DescribeDBInstanceAttributeResponseBodyDBInstance;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B2F3840-5C98-475C-B269-2D5C3A31797C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: DescribeDBInstanceAttributeResponseBodyDBInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.DBInstance && typeof (this.DBInstance as any).validate === 'function') {
      (this.DBInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

