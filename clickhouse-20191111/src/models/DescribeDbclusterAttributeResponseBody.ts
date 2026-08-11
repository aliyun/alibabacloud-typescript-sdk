// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterAttributeResponseBodyDBClusterLangfuseInstanceIds extends $dara.Model {
  langfuseInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      langfuseInstanceId: 'LangfuseInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      langfuseInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.langfuseInstanceId)) {
      $dara.Model.validateArray(this.langfuseInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyDBClusterScaleOutStatus extends $dara.Model {
  /**
   * @remarks
   * The data migration progress in percentage.
   * >This parameter is returned only when the cluster is in the SCALING_OUT state.
   * 
   * @example
   * 0
   */
  progress?: string;
  /**
   * @remarks
   * The data migration progress in the format of migrated data volume/total data volume.
   * >This parameter is returned only when the cluster is in the SCALING_OUT state.
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
   * The write-stop configuration during a leader election. Valid values:
   * 
   * - true: Write operations are stopped on the instance during the leader election.
   * - false: Write operations are not stopped on the instance during the leader election.
   * 
   * @example
   * true
   */
  appointmentElectZookeeperDisableWrite?: boolean;
  /**
   * @remarks
   * The scheduled time for a leader election. The time is in the YYYY-MM-DDThh:mm:ssZ format (UTC).
   * 
   * @example
   * 2023-11-06T12:00:00Z
   */
  appointmentElectZookeeperTime?: string;
  /**
   * @remarks
   * The list of nodes scheduled for restart.
   * 
   * @example
   * ck-k1a976p3n********-****-clickhouse-s-0-r-0,ck-k1a976p3n********-****-clickhouse-s-0-r-1
   */
  appointmentRestartNodeList?: string;
  /**
   * @remarks
   * The scheduled time for restarting specific nodes. The time is in the YYYY-MM-DDThh:mm:ssZ format (UTC).
   * 
   * @example
   * 2023-11-06T12:00:00Z
   */
  appointmentRestartNodeTime?: string;
  /**
   * @remarks
   * The scheduled restart time. The time is in the YYYY-MM-DDThh:mm:ssZ format (UTC).
   * 
   * @example
   * 2023-11-06T12:00:00Z
   */
  appointmentRestartTime?: string;
  /**
   * @remarks
   * The target major version available for upgrade.
   * 
   * @example
   * {"MajorVersion":"MinorVersion"}
   */
  availableUpgradeMajorVersion?: { [key: string]: any };
  /**
   * @remarks
   * The site ID. Valid values:
   * 
   * - **26842**: China site.
   * - **26888**: international site.
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * The replica configuration. Valid values:
   * 
   * - **Basic**: single-replica edition.
   * - **HighAvailability**: master-replica cluster.
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
   * - **v1**
   * - **v2**
   * 
   * @example
   * v1
   */
  controlVersion?: string;
  /**
   * @remarks
   * The time when the cluster was created. The time is in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
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
   * - **Preparing**: being prepared.
   * - **Creating**: being created.
   * - **Running**: running.
   * - **Deleting**: being deleted.
   * - **SCALING_OUT**: being scaled out.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * - **Common**: normal cluster.
   * - **Readonly**: read-only cluster.
   * - **Guard**: disaster recovery cluster.
   * 
   * @example
   * Common
   */
  DBClusterType?: string;
  /**
   * @remarks
   * The cluster specifications. Valid values:
   * - Single-replica edition:
   *     - **S4-NEW**
   *     - **S8**
   *     - **S16**
   *     - **S32**
   *     - **S64**
   *     - **S104**
   * - Master-replica cluster: 
   *     - **C4-NEW**
   *     - **C8**
   *     - **C16**
   *     - **C32**
   *     - **C64**
   *     - **C104**
   * 
   * @example
   * C8
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The number of nodes.
   * - Single-replica edition: valid values: 1 to 48.
   * - Master-replica cluster: valid values: 1 to 24.
   * 
   * @example
   * 1
   */
  DBNodeCount?: number;
  /**
   * @remarks
   * The storage capacity per node. Unit: GB.
   * 
   * Valid values: 100 to 32000.
   * 
   * >The step size is 100 GB.
   * 
   * @example
   * 100
   */
  DBNodeStorage?: number;
  /**
   * @remarks
   * The Key Management Service (KMS) key.
   * >If the encryption type is off, an empty value is returned.
   * 
   * @example
   * 685f416f-87c9-4554-8d3a-75b6ce25****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption type. Valid values:
   * 
   * - **CloudDisk**: cloud disk encryption.
   * - **off**: no encryption.
   * 
   * @example
   * CloudDisk
   */
  encryptionType?: string;
  /**
   * @remarks
   * The engine type.
   * 
   * @example
   * ClickHouse
   */
  engine?: string;
  /**
   * @remarks
   * The latest minor version available for upgrade.
   * 
   * @example
   * 1.34.0
   */
  engineLatestMinorVersion?: string;
  /**
   * @remarks
   * The current minor version.
   * 
   * @example
   * 1.6.0
   */
  engineMinorVersion?: string;
  /**
   * @remarks
   * The DPI engine version.
   * 
   * @example
   * 21.8.10.19
   */
  engineVersion?: string;
  /**
   * @remarks
   * The expiration time of the cluster. The time is in the yyyy-MM-ddTHH:mm:ssZ format.
   * >Pay-as-you-go clusters do not have an expiration time, and an empty value is returned.
   * 
   * @example
   * 2022-11-11T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The extended storage capacity. Unit: GB.
   * 
   * @example
   * 500
   */
  extStorageSize?: number;
  /**
   * @remarks
   * The extended storage type. Valid values:
   * <props="china">- **CloudESSD_PL0**: PL0 ESSD.
   * - **CloudESSD**: PL1 ESSD.
   * - **CloudESSD_PL2**: PL2 ESSD.
   * - **CloudESSD_PL3**: PL3 ESSD.
   * - **CloudEfficiency**: ultra cloud disk.
   * 
   * @example
   * CloudESSD
   */
  extStorageType?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired. Valid values:
   * - **true**: The cluster has expired.
   * - **false**: The cluster has not expired.
   * 
   * @example
   * false
   */
  isExpired?: string;
  langfuseInstanceIds?: DescribeDBClusterAttributeResponseBodyDBClusterLangfuseInstanceIds;
  /**
   * @remarks
   * The load balancing type.
   * 
   * @example
   * clb
   */
  lbKind?: string;
  /**
   * @remarks
   * The lock mode of the cluster. Valid values:
   * - **Unlock**: Normal.
   * - **ManualLock**: The cluster is manually locked.
   * - **LockByExpiration**: The cluster is automatically locked because it has expired.
   * - **LockByRestoration**: The cluster is automatically locked before a rollback.
   * - **LockByDiskQuota**: The cluster is automatically locked because the storage is full.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The reason why the cluster is locked.
   * >If the lock mode is Unlock, an empty value is returned.
   * 
   * @example
   * DISK_FULL
   */
  lockReason?: string;
  /**
   * @remarks
   * The upgrade type. **false** indicates manual upgrade.
   * 
   * @example
   * false
   */
  maintainAutoType?: boolean;
  /**
   * @remarks
   * The maintenance window of the cluster. The time is in the HH:mmZ-HH:mmZ format (UTC).
   * 
   * Example: 00:00Z-01:00Z, which indicates that routine maintenance can be performed from 00:00 to 01:00 (UTC), that is, from 08:00 to 09:00 (UTC+8).
   * 
   * @example
   * 00:00Z-01:00Z
   */
  maintainTime?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The HTTP port number.
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
   * The public TCP port number.
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
   * <props="china">- **CloudESSD_PL0**: PL0 ESSD.
   * - **CloudESSD**: PL1 ESSD.
   * - **CloudESSD_PL2**: PL2 ESSD.
   * - **CloudESSD_PL3**: PL3 ESSD.
   * - **CloudEfficiency**: ultra cloud disk.
   * 
   * @example
   * CloudESSD
   */
  storageType?: string;
  /**
   * @remarks
   * Indicates whether data backup is supported. Valid values:
   * 
   * - **1**: Data backup is supported.
   * - **2**: Data backup is not supported.
   * 
   * @example
   * 1
   */
  supportBackup?: number;
  /**
   * @remarks
   * Indicates whether the HTTPS port is supported. Valid values:
   * - **true**: The HTTPS port is supported.
   * - **false**: The HTTPS port is not supported.
   * 
   * @example
   * false
   */
  supportHttpsPort?: boolean;
  /**
   * @remarks
   * Indicates whether the MySQL port is supported. Valid values:
   * - **true**: The MySQL port is supported.
   * - **false**: The MySQL port is not supported.
   * 
   * @example
   * false
   */
  supportMysqlPort?: boolean;
  /**
   * @remarks
   * Indicates whether hybrid storage of hot and cold data is supported. Valid values:
   * 
   * - **1**: Hybrid storage of hot and cold data is supported.
   * - **2**: Hybrid storage of hot and cold data is not supported.
   * 
   * @example
   * 1
   */
  supportOss?: number;
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
   * The VPC resource ID.
   * 
   * @example
   * vpc-bp10tr8k9qasioaty****
   */
  vpcCloudInstanceId?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-bp10tr8k9qasioaty****
   */
  vpcId?: string;
  /**
   * @remarks
   * The IP address of the VPC network connectivity string.
   * 
   * @example
   * 192.168.xx.xx
   */
  vpcIpAddr?: string;
  /**
   * @remarks
   * The WebUI public network gateway status.
   * 
   * @example
   * active
   */
  webUISnatStatus?: string;
  /**
   * @remarks
   * The WebUI status.
   * 
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
   * The list of vSwitch IDs for multi-zone instances.
   * 
   * @example
   * cn-shanghai-f: vsw-zm0n42d5vvuo****
   */
  zoneIdVswitchMap?: { [key: string]: any };
  /**
   * @remarks
   * The ZooKeeper specifications.
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
      langfuseInstanceIds: 'LangfuseInstanceIds',
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
      langfuseInstanceIds: DescribeDBClusterAttributeResponseBodyDBClusterLangfuseInstanceIds,
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
    if(this.langfuseInstanceIds && typeof (this.langfuseInstanceIds as any).validate === 'function') {
      (this.langfuseInstanceIds as any).validate();
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
   * The cluster information.
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

