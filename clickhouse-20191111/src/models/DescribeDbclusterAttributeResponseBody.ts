// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterAttributeResponseBodyDBClusterScaleOutStatus extends $dara.Model {
  /**
   * @remarks
   * The progress of the data migration task in percentage.
   * 
   * >  This parameter is returned only when the cluster is in the SCALING_OUT state.
   * 
   * @example
   * 0
   */
  progress?: string;
  /**
   * @remarks
   * The progress of the data migration task. This value is displayed in the following format: Data volume that has been migrated/Total data volume.
   * 
   * >  This parameter is returned only when the cluster is in the SCALING_OUT state.
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
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * department
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * it
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
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 140692647406****
   */
  aliUid?: string;
  appointmentElectZookeeperDisableWrite?: boolean;
  appointmentElectZookeeperTime?: string;
  appointmentRestartNodeList?: string;
  appointmentRestartNodeTime?: string;
  /**
   * @remarks
   * The scheduled restart time. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
   * 
   * @example
   * 2023-11-06T12:00:00Z
   */
  appointmentRestartTime?: string;
  /**
   * @remarks
   * The major engine versions available for upgrades.
   * 
   * @example
   * {"MajorVersion":"MinorVersion"}
   */
  availableUpgradeMajorVersion?: { [key: string]: any };
  /**
   * @remarks
   * The site ID. Valid values:
   * 
   * *   **26842**: the China site (aliyun.com)
   * *   **26888**: the international site (alibabacloud.com)
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **Basic**: Single-replica Edition
   * *   **HighAvailability**: Double-replica Edition
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  /**
   * @remarks
   * The commodity code of the cluster.
   * 
   * @example
   * clickhouse_go_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The VPC endpoint of the cluster.
   * 
   * @example
   * cc-bp1qx68m06981****.ads.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The version of the ApsaraDB for ClickHouse console that is used to manage the cluster. Valid values:
   * 
   * *   **v1**
   * *   **v2**
   * 
   * @example
   * v1
   */
  controlVersion?: string;
  /**
   * @remarks
   * The time when the cluster was created. The value is in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-13T11:33:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the cluster.
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
   * The network type of the cluster. Only VPC is supported.
   * 
   * @example
   * vpc
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The cluster state. Valid values:
   * 
   * *   **Preparing**: The cluster is being prepared.
   * *   **Creating**: The cluster is being created.
   * *   **Running**: The cluster is running.
   * *   **Deleting**: The cluster is being deleted.
   * *   **SCALING_OUT**: The storage capacity of the cluster is being expanded.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * *   **Common**: a common cluster
   * *   **Readonly**: a read-only cluster
   * *   **Guard**: a disaster recovery cluster
   * 
   * @example
   * Common
   */
  DBClusterType?: string;
  /**
   * @remarks
   * The specifications of the cluster.
   * 
   * *   Valid values when the cluster is of Single-replica Edition:
   * 
   *     *   **S4-NEW**
   *     *   **S8**
   *     *   **S16**
   *     *   **S32**
   *     *   **S64**
   *     *   **S104**
   * 
   * *   Valid values when the cluster is of Double-replica Edition:
   * 
   *     *   **C4-NEW**
   *     *   **C8**
   *     *   **C16**
   *     *   **C32**
   *     *   **C64**
   *     *   **C104**
   * 
   * @example
   * C8
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * *   Valid values when the cluster is of Single-replica Edition: 1 to 48.
   * *   Valid values when the cluster is of Double-replica Edition: 1 to 24.
   * 
   * @example
   * 1
   */
  DBNodeCount?: number;
  /**
   * @remarks
   * The storage capacity of a single node of the cluster. Unit: GB.
   * 
   * Valid values: 100 to 32000.
   * 
   * >  This value is a multiple of 100.
   * 
   * @example
   * 100
   */
  DBNodeStorage?: number;
  /**
   * @remarks
   * The Key Management Service (KMS) key that is used to encrypt data.
   * 
   * >  If the value of the EncryptionType parameter is off, an empty string is returned for this parameter.
   * 
   * @example
   * 685f416f-87c9-4554-8d3a-75b6ce25****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption type. Valid values:
   * 
   * *   **CloudDisk**: Disk encryption is enabled.
   * *   **off**: Data is not encrypted.
   * 
   * @example
   * CloudDisk
   */
  encryptionType?: string;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * ClickHouse
   */
  engine?: string;
  /**
   * @remarks
   * The latest minor version to which the cluster can be updated.
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
   * The engine version.
   * 
   * @example
   * 21.8.10.19
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the cluster expired. The time is in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * >  Pay-as-you-go clusters never expire. If the cluster is a pay-as-you-go cluster, an empty string is returned for this parameter.
   * 
   * @example
   * 2022-11-11T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The extended storage space. Unit: GB.
   * 
   * @example
   * 500
   */
  extStorageSize?: number;
  /**
   * @remarks
   * The extended storage type. Valid values:
   * 
   * *   **CloudESSD**: The cluster uses an enhanced SSD (ESSD) of performance level (PL) 1.
   * *   **CloudESSD_PL2**: The cluster uses an ESSD of PL 2.
   * *   **CloudESSD_PL3**: The cluster uses an ESSD of PL 3.
   * *   **CloudEfficiency**: The cluster uses an ultra disk.
   * 
   * @example
   * CloudESSD
   */
  extStorageType?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  isExpired?: string;
  lbKind?: string;
  /**
   * @remarks
   * The lock mode of the cluster. Valid values:
   * 
   * *   **Unlock**: The cluster is not locked.
   * *   **ManualLock**: The cluster is manually locked.
   * *   **LockByExpiration**: The cluster is automatically locked due to cluster expiration.
   * *   **LockByRestoration**: The cluster is automatically locked because the cluster is about to be rolled back.
   * *   **LockByDiskQuota**: The cluster is automatically locked because the disk space is exhausted.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The cause why the cluster was locked.
   * 
   * >  If the value of the LockMode parameter is Unlock, an empty string is returned for this parameter.
   * 
   * @example
   * DISK_FULL
   */
  lockReason?: string;
  /**
   * @remarks
   * The update type. If the value of the parameter is **false**, it indicates a manual update.
   * 
   * @example
   * false
   */
  maintainAutoType?: boolean;
  /**
   * @remarks
   * The maintenance window of the cluster. The value is in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
   * 
   * For example, if you set the maintenance window to 00:00Z-01:00Z, the cluster can be maintained from 08:00 (UTC+8) to 09:00 (UTC+8).
   * 
   * @example
   * 00:00Z-01:00Z
   */
  maintainTime?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **Postpaid**: indicates the pay-as-you-go billing method.
   * *   **Prepaid**: indicates the subscription billing method.
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
   * The IP address that is used to connect to the cluster over the Internet.
   * 
   * @example
   * 121.40.xx.xx
   */
  publicIpAddr?: string;
  /**
   * @remarks
   * The TCP port number in the public endpoint.
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
   * The status of the data migration task.
   */
  scaleOutStatus?: DescribeDBClusterAttributeResponseBodyDBClusterScaleOutStatus;
  /**
   * @remarks
   * The storage type of the cluster. Valid values:
   * 
   * *   **CloudESSD**: The cluster uses an enhanced SSD (ESSD) of performance level (PL) 1.
   * *   **CloudESSD_PL2**: The cluster uses an ESSD of PL 2.
   * *   **CloudESSD_PL3**: The cluster uses an ESSD of PL 3.
   * *   **CloudEfficiency**: The cluster uses an ultra disk.
   * 
   * @example
   * CloudESSD
   */
  storageType?: string;
  /**
   * @remarks
   * Indicates whether data backup is supported. Valid values:
   * 
   * *   **1**: Data backup is supported.
   * *   **2**: Data backup is not supported.
   * 
   * @example
   * 1
   */
  supportBackup?: number;
  /**
   * @remarks
   * Indicates whether HTTPS ports are supported. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  supportHttpsPort?: boolean;
  /**
   * @remarks
   * Indicates whether the cluster supports a MySQL port. Valid values:
   * 
   * *   **true**: A MySQL port is supported.
   * *   **false**: A MySQL port is not supported.
   * 
   * @example
   * false
   */
  supportMysqlPort?: boolean;
  /**
   * @remarks
   * Indicates whether tiered storage of hot data and cold data is supported. Valid values:
   * 
   * *   **1**: Tiered storage of hot data and cold data is supported.
   * *   **2**: Tiered storage of hot data and cold data is not supported.
   * 
   * @example
   * 1
   */
  supportOss?: number;
  /**
   * @remarks
   * The tags.
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
   * The ID of the VPC in which the cluster is deployed.
   * 
   * @example
   * vpc-bp10tr8k9qasioaty****
   */
  vpcCloudInstanceId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-bp10tr8k9qasioaty****
   */
  vpcId?: string;
  /**
   * @remarks
   * The IP address that is used to connect to the cluster over the VPC.
   * 
   * @example
   * 192.168.xx.xx
   */
  vpcIpAddr?: string;
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
   * The list of vSwitch IDs in multi-zone clusters.
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
   * The information about the cluster.
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

