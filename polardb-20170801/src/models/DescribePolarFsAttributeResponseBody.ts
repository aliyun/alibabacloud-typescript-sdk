// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarFsAttributeResponseBodyCustomBucketPathList extends $dara.Model {
  /**
   * @remarks
   * The custom storage bucket.
   * 
   * @example
   * pfs-xxx.oss-[regionId]-internal.aliyuncs.com
   */
  bucket?: string;
  /**
   * @remarks
   * The custom storage path.
   * 
   * @example
   * /data
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarFsAttributeResponseBodyEndpointItemsAddressItems extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the protocol connection.
   * 
   * @example
   * aclsh-prd-pdb12-rw.rwlb.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 47.116.9.224
   */
  IPAddress?: string;
  /**
   * @remarks
   * The network type of the connection string. Valid values:
   * * **Public**: public endpoint.
   * * **Private**: private endpoint.
   * * **Inner**: private endpoint (classic network).
   * 
   * @example
   * Public
   */
  netType?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-**********
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-**************
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      port: 'Port',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      IPAddress: 'string',
      netType: 'string',
      port: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarFsAttributeResponseBodyEndpointItems extends $dara.Model {
  /**
   * @remarks
   * The list of addresses.
   */
  addressItems?: DescribePolarFsAttributeResponseBodyEndpointItemsAddressItems[];
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * ep-xxxxxxxxx
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The endpoint type. Valid values: Nas, S3Gateway, and others.
   * 
   * @example
   * S3Gateway
   */
  endpointType?: string;
  static names(): { [key: string]: string } {
    return {
      addressItems: 'AddressItems',
      DBEndpointId: 'DBEndpointId',
      endpointType: 'EndpointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressItems: { 'type': 'array', 'itemType': DescribePolarFsAttributeResponseBodyEndpointItemsAddressItems },
      DBEndpointId: 'string',
      endpointType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addressItems)) {
      $dara.Model.validateArray(this.addressItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarFsAttributeResponseBodyMountInfo extends $dara.Model {
  /**
   * @remarks
   * The cluster management endpoint.
   * 
   * @example
   * TCP://**.**.**.**:3000,TCP://**.**.**.**:3000,TCP://**.**.**.**:3000
   */
  polarDbProxy?: string;
  /**
   * @remarks
   * The file system name.
   * 
   * @example
   * pfs-**********
   */
  polarFsCluster?: string;
  /**
   * @remarks
   * The token value.
   * 
   * @example
   * a734298c391cb9ebd05e2ee85feb624
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      polarDbProxy: 'PolarDbProxy',
      polarFsCluster: 'PolarFsCluster',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polarDbProxy: 'string',
      polarFsCluster: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarFsAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The acceleration type.
   * 
   * @example
   * alluxio
   */
  accelerateType?: string;
  /**
   * @remarks
   * The acceleration storage space, in GB.
   * 
   * @example
   * 1000
   */
  acceleratedStorageSpace?: number;
  /**
   * @remarks
   * Indicates whether the acceleration cache is enabled. Valid values:
   * - **ON**: Enabled.
   * - **OFF**: Disabled.
   * 
   * @example
   * ON
   */
  acceleratingEnable?: string;
  /**
   * @remarks
   * The list of authorized RAM role ARNs, separated by commas.
   * 
   * @example
   * arn:sts::123456:assumed-role/myrole/*
   */
  authorizedUserArnIds?: string;
  /**
   * @remarks
   * The list of authorized UIDs, separated by commas.
   * 
   * @example
   * 1234567890,9876543210
   */
  authorizedUserIds?: string;
  /**
   * @remarks
   * The bandwidth, in MB/s.
   * 
   * @example
   * 100
   */
  bandwidth?: number;
  /**
   * @remarks
   * The bandwidth baseline, in MB/s/TiB.
   * 
   * @example
   * 100
   */
  bandwidthBaseLine?: number;
  /**
   * @remarks
   * The bucket ID.
   * 
   * @example
   * xxx
   */
  bucketId?: string;
  /**
   * @remarks
   * The Polarlakebase edition. Valid values:
   * 
   * - **high_performance**: High-performance Edition.
   * 
   * - **basic**: Basic Edition.
   * 
   * - **cold**: Cold Storage Edition.
   * 
   * @example
   * high_performance
   */
  category?: string;
  /**
   * @remarks
   * The client download URL.
   * 
   * @example
   * oss://*
   */
  clientDownloadPath?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-08-02T05:57:10Z
   */
  createTime?: string;
  /**
   * @remarks
   * The custom bucket path.
   * 
   * @example
   * xxxxxx-%d.oss-cn-beijing-internal.aliyuncs.com
   */
  customBucketPath?: string;
  /**
   * @remarks
   * The list of custom storage paths.
   */
  customBucketPathList?: DescribePolarFsAttributeResponseBodyCustomBucketPathList[];
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * pe-zo1z5qw5nb39s699n
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The database ecosystem type. Valid values: 
   * * **MySQL**
   * * **PostgreSQL**
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The list of endpoints, including endpoint information for NAS, S3Gateway, and other types.
   */
  endpointItems?: DescribePolarFsAttributeResponseBodyEndpointItems[];
  /**
   * @remarks
   * The expiration time of the cluster.
   * 
   * > This parameter is returned only for clusters whose billing method is **Prepaid** (subscription). An empty value is returned for **Postpaid** (pay-as-you-go) clusters.
   * 
   * @example
   * 2025-10-10T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired.
   * > This parameter is returned only for clusters whose billing method is **Prepaid** (subscription).
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * @example
   * xxx
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The lock mode. Valid values: 
   * 
   * - **Unlock**: Not locked.
   * - **ManualLock**: Manually locked. 
   * - **LockByExpiration**: Automatically locked due to cluster expiration.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The proxy endpoint ID.
   * 
   * @example
   * pe-cz9inwqec7ifd98c3
   */
  maxscaleEndpointId?: string;
  /**
   * @remarks
   * The metadata service cluster endpoint.
   * 
   * @example
   * pc-x67w12d2d5t13mt88.pg.polardb.rds.aliyuncs.com
   */
  metaConnString?: string;
  /**
   * @remarks
   * The metadata instance name.
   * 
   * @example
   * pc-xxxxxxxxxxxxxxxxx
   */
  metaInstanceName?: string;
  /**
   * @remarks
   * The metadata proxy service cluster endpoint.
   * 
   * @example
   * pc-y3610mp168p3bb740.rwlb.rds.aliyuncs.com
   */
  metaMxsConnString?: string;
  /**
   * @remarks
   * The metadata address for Fuse mount (encrypted).
   * 
   * @example
   * e6cc1d2e2a6fa292038d999fda6501*****
   */
  metaUrl?: string;
  /**
   * @remarks
   * The minor version of the instance.
   * 
   * @example
   * v1.3.0-v1.1.1
   */
  minorVersion?: string;
  /**
   * @remarks
   * The mount configuration.
   */
  mountInfo?: DescribePolarFsAttributeResponseBodyMountInfo;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The description of the Polarlakebase instance.
   * 
   * @example
   * pfs-xxx
   */
  polarFsInstanceDescription?: string;
  /**
   * @remarks
   * The Polarlakebase instance ID.
   * 
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * The Polarlakebase instance status.
   * 
   * @example
   * Running
   */
  polarFsStatus?: string;
  /**
   * @remarks
   * The instance version. Valid values:
   * - **PolarFS 2.0**: 2.0
   * - **PolarFS 1.0**: 1.0
   * 
   * @example
   * PolarFS 2.0
   */
  polarFsType?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * 1.0.1-1.0.3
   */
  polarFsVersion?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the associated PolarDB cluster.
   * 
   * @example
   * pc-2zejpr41d9xk3uk34
   */
  relativeDbClusterId?: string;
  /**
   * @remarks
   * The instance ID of the associated Polarlakebase instance.
   * 
   * @example
   * pfs-**********
   */
  relativePfsClusterId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3F9E6A3B-C13E-4064-A010-18582A******
   */
  requestId?: string;
  /**
   * @remarks
   * The managed security group ID.
   * 
   * @example
   * sg-bp**************
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The storage space, in GB.
   * 
   * @example
   * 1000
   */
  storageSpace?: number;
  /**
   * @remarks
   * The storage type for the High-performance Edition. Valid values:
   * * **ESSDPL1**
   * * **ESSDPL0**
   * 
   * The storage type for the Basic Edition. Valid values:
   * * **city_redundancy**: cross-zone redundancy.
   * 
   * @example
   * essdpl1
   */
  storageType?: string;
  /**
   * @remarks
   * The storage usage, in bytes.
   * 
   * @example
   * 3012558848
   */
  storageUsed?: number;
  /**
   * @remarks
   * The default user account name for S3 Gateway.
   * 
   * @example
   * lakebase_acc
   */
  userDefaultAccName?: string;
  /**
   * @remarks
   * The default user account key for S3 Gateway (encrypted ciphertext).
   * 
   * @example
   * EncryptedSecretKey==
   */
  userDefaultAccSk?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-**********
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-**************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the vSwitch.
   * 
   * @example
   * cn-beijing-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateType: 'AccelerateType',
      acceleratedStorageSpace: 'AcceleratedStorageSpace',
      acceleratingEnable: 'AcceleratingEnable',
      authorizedUserArnIds: 'AuthorizedUserArnIds',
      authorizedUserIds: 'AuthorizedUserIds',
      bandwidth: 'Bandwidth',
      bandwidthBaseLine: 'BandwidthBaseLine',
      bucketId: 'BucketId',
      category: 'Category',
      clientDownloadPath: 'ClientDownloadPath',
      createTime: 'CreateTime',
      customBucketPath: 'CustomBucketPath',
      customBucketPathList: 'CustomBucketPathList',
      DBEndpointId: 'DBEndpointId',
      DBType: 'DBType',
      endpointItems: 'EndpointItems',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      fileSystemId: 'FileSystemId',
      lockMode: 'LockMode',
      maxscaleEndpointId: 'MaxscaleEndpointId',
      metaConnString: 'MetaConnString',
      metaInstanceName: 'MetaInstanceName',
      metaMxsConnString: 'MetaMxsConnString',
      metaUrl: 'MetaUrl',
      minorVersion: 'MinorVersion',
      mountInfo: 'MountInfo',
      payType: 'PayType',
      polarFsInstanceDescription: 'PolarFsInstanceDescription',
      polarFsInstanceId: 'PolarFsInstanceId',
      polarFsStatus: 'PolarFsStatus',
      polarFsType: 'PolarFsType',
      polarFsVersion: 'PolarFsVersion',
      regionId: 'RegionId',
      relativeDbClusterId: 'RelativeDbClusterId',
      relativePfsClusterId: 'RelativePfsClusterId',
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
      storageSpace: 'StorageSpace',
      storageType: 'StorageType',
      storageUsed: 'StorageUsed',
      userDefaultAccName: 'UserDefaultAccName',
      userDefaultAccSk: 'UserDefaultAccSk',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateType: 'string',
      acceleratedStorageSpace: 'number',
      acceleratingEnable: 'string',
      authorizedUserArnIds: 'string',
      authorizedUserIds: 'string',
      bandwidth: 'number',
      bandwidthBaseLine: 'number',
      bucketId: 'string',
      category: 'string',
      clientDownloadPath: 'string',
      createTime: 'string',
      customBucketPath: 'string',
      customBucketPathList: { 'type': 'array', 'itemType': DescribePolarFsAttributeResponseBodyCustomBucketPathList },
      DBEndpointId: 'string',
      DBType: 'string',
      endpointItems: { 'type': 'array', 'itemType': DescribePolarFsAttributeResponseBodyEndpointItems },
      expireTime: 'string',
      expired: 'string',
      fileSystemId: 'string',
      lockMode: 'string',
      maxscaleEndpointId: 'string',
      metaConnString: 'string',
      metaInstanceName: 'string',
      metaMxsConnString: 'string',
      metaUrl: 'string',
      minorVersion: 'string',
      mountInfo: DescribePolarFsAttributeResponseBodyMountInfo,
      payType: 'string',
      polarFsInstanceDescription: 'string',
      polarFsInstanceId: 'string',
      polarFsStatus: 'string',
      polarFsType: 'string',
      polarFsVersion: 'string',
      regionId: 'string',
      relativeDbClusterId: 'string',
      relativePfsClusterId: 'string',
      requestId: 'string',
      securityGroupId: 'string',
      storageSpace: 'number',
      storageType: 'string',
      storageUsed: 'number',
      userDefaultAccName: 'string',
      userDefaultAccSk: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customBucketPathList)) {
      $dara.Model.validateArray(this.customBucketPathList);
    }
    if(Array.isArray(this.endpointItems)) {
      $dara.Model.validateArray(this.endpointItems);
    }
    if(this.mountInfo && typeof (this.mountInfo as any).validate === 'function') {
      (this.mountInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

