// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterAttributeResponseBodyDBClusterScaleOutStatus extends $dara.Model {
  /**
   * @remarks
   * The data migration progress, as a percentage.
   * 
   * > This parameter is returned only when the cluster is in the `SCALING_OUT` state.
   * 
   * @example
   * 0
   */
  progress?: string;
  /**
   * @remarks
   * The data migration progress, displayed as `Amount of data migrated/Total data amount`.
   * 
   * > This parameter is returned only when the cluster is in the `SCALING_OUT` state.
   * 
   * @example
   * 0MB/60469MB
   */
  ratio?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      ratio: 'Ratio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'string',
      ratio: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyDBClusterTagsTag extends $dara.Model {
  key?: string;
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

export class DescribeDBClusterAttributeResponseBodyDBClusterTags extends $dara.Model {
  tag?: DescribeDBClusterAttributeResponseBodyDBClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyDBClusterTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyDBCluster extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 140692647406****
   */
  aliUid?: string;
  /**
   * @remarks
   * Specifies whether to stop write operations during a primary/secondary switchover. Valid values:
   * 
   * - `true`: Write operations are stopped for the instance during the switchover.
   * 
   * - `false`: Write operations are not stopped for the instance during the switchover.
   * 
   * @example
   * true
   */
  appointmentElectZookeeperDisableWrite?: boolean;
  /**
   * @remarks
   * The scheduled time for a primary/secondary switchover. The time is in the `YYYY-MM-DDThh:mm:ssZ` format and is in UTC.
   * 
   * @example
   * 2023-11-06T12:00:00Z
   */
  appointmentElectZookeeperTime?: string;
  /**
   * @remarks
   * A list of nodes that are scheduled for a restart.
   * 
   * @example
   * ck-k1a976p3n********-****-clickhouse-s-0-r-0,ck-k1a976p3n********-****-clickhouse-s-0-r-1
   */
  appointmentRestartNodeList?: string;
  /**
   * @remarks
   * The scheduled time to restart specific nodes. The time is in the `YYYY-MM-DDThh:mm:ssZ` format and is in UTC.
   * 
   * @example
   * 2023-11-06T12:00:00Z
   */
  appointmentRestartNodeTime?: string;
  /**
   * @remarks
   * The scheduled restart time. The time is in the `YYYY-MM-DDThh:mm:ssZ` format and is in UTC.
   * 
   * @example
   * 2023-11-06T12:00:00Z
   */
  appointmentRestartTime?: string;
  /**
   * @remarks
   * The available major versions to which the cluster can be upgraded, and their latest minor versions.
   * 
   * @example
   * {"MajorVersion":"MinorVersion"}
   */
  availableUpgradeMajorVersion?: { [key: string]: any };
  /**
   * @remarks
   * The site ID. Valid values:
   * 
   * - `26842`: China site (aliyun.com).
   * 
   * - `26888`: international site (alibabacloud.com).
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * - `Basic`: single-replica edition.
   * 
   * - `HighAvailability`: dual-replica edition.
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * clickhouse_go_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The VPC endpoint.
   * 
   * @example
   * cc-bp1qx68m06981****.ads.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The version of the backend management system. Valid values:
   * 
   * - `v1`
   * 
   * - `v2`
   * 
   * @example
   * v1
   */
  controlVersion?: string;
  /**
   * @remarks
   * The creation time of the cluster, in `yyyy-MM-ddTHH:mm:ssZ` format (UTC).
   * 
   * @example
   * 2021-12-13T11:33:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The network type. Only VPC is supported.
   * 
   * @example
   * vpc
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The cluster status. Valid values:
   * 
   * - `Preparing`: The cluster is being prepared.
   * 
   * - `Creating`: The cluster is being created.
   * 
   * - `Running`: The cluster is running.
   * 
   * - `Deleting`: The cluster is being deleted.
   * 
   * - `SCALING_OUT`: The cluster is being scaled out.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * - `Common`: a standard cluster.
   * 
   * - `Readonly`: a read-only cluster.
   * 
   * - `Guard`: a disaster recovery cluster.
   * 
   * @example
   * Common
   */
  DBClusterType?: string;
  /**
   * @remarks
   * The instance type of the cluster nodes.
   * 
   * - Valid values for a single-replica edition:
   * 
   *   - `S4-NEW`
   * 
   *   - `S8`
   * 
   *   - `S16`
   * 
   *   - `S32`
   * 
   *   - `S64`
   * 
   *   - `S104`
   * 
   * - Valid values for a dual-replica edition:
   * 
   *   - `C4-NEW`
   * 
   *   - `C8`
   * 
   *   - `C16`
   * 
   *   - `C32`
   * 
   *   - `C64`
   * 
   *   - `C104`
   * 
   * @example
   * C8
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The number of nodes in the cluster.
   * 
   * - For a single-replica edition, the value range is 1 to 48.
   * 
   * - For a dual-replica edition, the value range is 1 to 24.
   * 
   * @example
   * 1
   */
  DBNodeCount?: number;
  /**
   * @remarks
   * The storage capacity per node, in GB.
   * 
   * The value can range from 100 to 32000.
   * 
   * > The value must be a multiple of 100.
   * 
   * @example
   * 100
   */
  DBNodeStorage?: number;
  /**
   * @remarks
   * The Key Management Service (KMS) key ID.
   * 
   * > This parameter is empty if `EncryptionType` is set to `off`.
   * 
   * @example
   * 685f416f-87c9-4554-8d3a-75b6ce25****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption type. Valid values:
   * 
   * - `CloudDisk`: disk encryption.
   * 
   * - `off`: Encryption is disabled.
   * 
   * @example
   * CloudDisk
   */
  encryptionType?: string;
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * ClickHouse
   */
  engine?: string;
  /**
   * @remarks
   * The latest minor version to which the cluster can be upgraded.
   * 
   * @example
   * 1.34.0
   */
  engineLatestMinorVersion?: string;
  /**
   * @remarks
   * The engine\\"s current minor version.
   * 
   * @example
   * 1.6.0
   */
  engineMinorVersion?: string;
  /**
   * @remarks
   * The engine version.
   * 
   * @example
   * 21.8.10.19
   */
  engineVersion?: string;
  /**
   * @remarks
   * The expiration time of the cluster, in `yyyy-MM-ddTHH:mm:ssZ` format (UTC).
   * 
   * > This parameter is empty for pay-as-you-go clusters.
   * 
   * @example
   * 2022-11-11T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The extended storage capacity, in GB.
   * 
   * @example
   * 500
   */
  extStorageSize?: number;
  /**
   * @remarks
   * The extended storage type. Valid values:
   * 
   * <props="china">
   * 
   * - `CloudESSD_PL0`: ESSD PL0 disk.
   * 
   * 
   * 
   * 
   * - `CloudESSD`: ESSD PL1 disk.
   * 
   * - `CloudESSD_PL2`: ESSD PL2 disk.
   * 
   * - `CloudESSD_PL3`: ESSD PL3 disk.
   * 
   * - `CloudEfficiency`: Ultra disk.
   * 
   * @example
   * CloudESSD
   */
  extStorageType?: string;
  /**
   * @remarks
   * Whether the cluster has expired. Valid values:
   * 
   * - `true`: The cluster has expired.
   * 
   * - `false`: The cluster has not expired.
   * 
   * @example
   * false
   */
  isExpired?: string;
  /**
   * @remarks
   * The type of the load balancer.
   * 
   * @example
   * clb
   */
  lbKind?: string;
  /**
   * @remarks
   * The lock mode of the cluster. Valid values:
   * 
   * - `Unlock`: The cluster is not locked.
   * 
   * - `ManualLock`: The cluster is manually locked.
   * 
   * - `LockByExpiration`: The cluster is automatically locked upon expiration.
   * 
   * - `LockByRestoration`: The cluster is automatically locked before a rollback.
   * 
   * - `LockByDiskQuota`: The cluster is automatically locked because the storage is full.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The reason the cluster was locked.
   * 
   * > This parameter is empty if `LockMode` is set to `Unlock`.
   * 
   * @example
   * DISK_FULL
   */
  lockReason?: string;
  /**
   * @remarks
   * The upgrade method. A value of `false` indicates that upgrades must be performed manually.
   * 
   * @example
   * false
   */
  maintainAutoType?: boolean;
  /**
   * @remarks
   * The maintenance window of the cluster. The time is in the `HH:mmZ-HH:mmZ` format and is in UTC.
   * 
   * For example, `00:00Z-01:00Z` indicates that the maintenance window is from 00:00 to 01:00 (UTC), which corresponds to 08:00 to 09:00 in Beijing time (UTC+8).
   * 
   * @example
   * 00:00Z-01:00Z
   */
  maintainTime?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - `Postpaid`: pay-as-you-go.
   * 
   * - `Prepaid`: subscription.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The HTTP port.
   * 
   * @example
   * 8123
   */
  port?: number;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * cc-bp1199ya710s7****.public.clickhouse.ads.aliyuncs.com
   */
  publicConnectionString?: string;
  /**
   * @remarks
   * The IP address of the public endpoint.
   * 
   * @example
   * 121.40.xx.xx
   */
  publicIpAddr?: string;
  /**
   * @remarks
   * The public TCP port.
   * 
   * @example
   * 3306
   */
  publicPort?: string;
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
   * rg-acfmyf65je6****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The data migration status.
   */
  scaleOutStatus?: DescribeDBClusterAttributeResponseBodyDBClusterScaleOutStatus;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * <props="china">
   * 
   * - `CloudESSD_PL0`: ESSD PL0 disk.
   * 
   * 
   * 
   * 
   * - `CloudESSD`: ESSD PL1 disk.
   * 
   * - `CloudESSD_PL2`: ESSD PL2 disk.
   * 
   * - `CloudESSD_PL3`: ESSD PL3 disk.
   * 
   * - `CloudEfficiency`: Ultra disk.
   * 
   * @example
   * CloudESSD
   */
  storageType?: string;
  /**
   * @remarks
   * Whether the cluster supports data backup. Valid values:
   * 
   * - `1`: Supported.
   * 
   * - `2`: Not supported.
   * 
   * @example
   * 1
   */
  supportBackup?: number;
  /**
   * @remarks
   * Whether the HTTPS port is supported. Valid values:
   * 
   * - `true`: Supported.
   * 
   * - `false`: Not supported.
   * 
   * @example
   * false
   */
  supportHttpsPort?: boolean;
  /**
   * @remarks
   * Whether the MySQL port is supported. Valid values:
   * 
   * - `true`: Supported.
   * 
   * - `false`: Not supported.
   * 
   * @example
   * false
   */
  supportMysqlPort?: boolean;
  /**
   * @remarks
   * Whether the cluster supports tiered storage for hot and cold data. Valid values:
   * 
   * - `1`: Supported.
   * 
   * - `2`: Not supported.
   * 
   * @example
   * 1
   */
  supportOss?: number;
  /**
   * @remarks
   * The tags of the cluster.
   */
  tags?: DescribeDBClusterAttributeResponseBodyDBClusterTags;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1n874li1t5y57wi****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp10tr8k9qasioaty****
   */
  vpcCloudInstanceId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp10tr8k9qasioaty****
   */
  vpcId?: string;
  /**
   * @remarks
   * The IP address of the VPC endpoint.
   * 
   * @example
   * 192.168.xx.xx
   */
  vpcIpAddr?: string;
  /**
   * @example
   * active
   */
  webUISnatStatus?: string;
  /**
   * @example
   * active
   */
  webUIStatus?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  /**
   * @remarks
   * A map of zone IDs to vSwitch IDs for a multi-zone cluster.
   * 
   * @example
   * cn-shanghai-f: vsw-zm0n42d5vvuo****
   */
  zoneIdVswitchMap?: { [key: string]: any };
  /**
   * @remarks
   * The specifications of the ZooKeeper nodes.
   * 
   * @example
   * 4 Core 8 GB
   */
  zookeeperClass?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      appointmentElectZookeeperDisableWrite: 'AppointmentElectZookeeperDisableWrite',
      appointmentElectZookeeperTime: 'AppointmentElectZookeeperTime',
      appointmentRestartNodeList: 'AppointmentRestartNodeList',
      appointmentRestartNodeTime: 'AppointmentRestartNodeTime',
      appointmentRestartTime: 'AppointmentRestartTime',
      availableUpgradeMajorVersion: 'AvailableUpgradeMajorVersion',
      bid: 'Bid',
      category: 'Category',
      commodityCode: 'CommodityCode',
      connectionString: 'ConnectionString',
      controlVersion: 'ControlVersion',
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBClusterType: 'DBClusterType',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DBNodeStorage: 'DBNodeStorage',
      encryptionKey: 'EncryptionKey',
      encryptionType: 'EncryptionType',
      engine: 'Engine',
      engineLatestMinorVersion: 'EngineLatestMinorVersion',
      engineMinorVersion: 'EngineMinorVersion',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      extStorageSize: 'ExtStorageSize',
      extStorageType: 'ExtStorageType',
      isExpired: 'IsExpired',
      lbKind: 'LbKind',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainAutoType: 'MaintainAutoType',
      maintainTime: 'MaintainTime',
      payType: 'PayType',
      port: 'Port',
      publicConnectionString: 'PublicConnectionString',
      publicIpAddr: 'PublicIpAddr',
      publicPort: 'PublicPort',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scaleOutStatus: 'ScaleOutStatus',
      storageType: 'StorageType',
      supportBackup: 'SupportBackup',
      supportHttpsPort: 'SupportHttpsPort',
      supportMysqlPort: 'SupportMysqlPort',
      supportOss: 'SupportOss',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vpcId: 'VpcId',
      vpcIpAddr: 'VpcIpAddr',
      webUISnatStatus: 'WebUISnatStatus',
      webUIStatus: 'WebUIStatus',
      zoneId: 'ZoneId',
      zoneIdVswitchMap: 'ZoneIdVswitchMap',
      zookeeperClass: 'ZookeeperClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      appointmentElectZookeeperDisableWrite: 'boolean',
      appointmentElectZookeeperTime: 'string',
      appointmentRestartNodeList: 'string',
      appointmentRestartNodeTime: 'string',
      appointmentRestartTime: 'string',
      availableUpgradeMajorVersion: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      bid: 'string',
      category: 'string',
      commodityCode: 'string',
      connectionString: 'string',
      controlVersion: 'string',
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBClusterType: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DBNodeStorage: 'number',
      encryptionKey: 'string',
      encryptionType: 'string',
      engine: 'string',
      engineLatestMinorVersion: 'string',
      engineMinorVersion: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      extStorageSize: 'number',
      extStorageType: 'string',
      isExpired: 'string',
      lbKind: 'string',
      lockMode: 'string',
      lockReason: 'string',
      maintainAutoType: 'boolean',
      maintainTime: 'string',
      payType: 'string',
      port: 'number',
      publicConnectionString: 'string',
      publicIpAddr: 'string',
      publicPort: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      scaleOutStatus: DescribeDBClusterAttributeResponseBodyDBClusterScaleOutStatus,
      storageType: 'string',
      supportBackup: 'number',
      supportHttpsPort: 'boolean',
      supportMysqlPort: 'boolean',
      supportOss: 'number',
      tags: DescribeDBClusterAttributeResponseBodyDBClusterTags,
      vSwitchId: 'string',
      vpcCloudInstanceId: 'string',
      vpcId: 'string',
      vpcIpAddr: 'string',
      webUISnatStatus: 'string',
      webUIStatus: 'string',
      zoneId: 'string',
      zoneIdVswitchMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      zookeeperClass: 'string',
    };
  }

  validate() {
    if(this.availableUpgradeMajorVersion) {
      $dara.Model.validateMap(this.availableUpgradeMajorVersion);
    }
    if(this.scaleOutStatus && typeof (this.scaleOutStatus as any).validate === 'function') {
      (this.scaleOutStatus as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.zoneIdVswitchMap) {
      $dara.Model.validateMap(this.zoneIdVswitchMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the cluster.
   */
  DBCluster?: DescribeDBClusterAttributeResponseBodyDBCluster;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: DescribeDBClusterAttributeResponseBodyDBCluster,
      requestId: 'string',
    };
  }

  validate() {
    if(this.DBCluster && typeof (this.DBCluster as any).validate === 'function') {
      (this.DBCluster as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

