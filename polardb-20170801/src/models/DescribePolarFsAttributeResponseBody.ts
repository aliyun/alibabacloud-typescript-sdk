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
   * - **ON**: enabled.
   * - **OFF**: disabled.
   * 
   * @example
   * ON
   */
  acceleratingEnable?: string;
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
   * The storage bucket ID.
   * 
   * @example
   * xxx
   */
  bucketId?: string;
  /**
   * @remarks
   * The PolarLakebase edition. Valid values:
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
   * The database ecosystem type. Valid values: 
   * * **MySQL**
   * * **PostgreSQL**.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
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
   * - **Unlock**: not locked.
   * - **ManualLock**: manually locked. 
   * - **LockByExpiration**: automatically locked due to cluster expiration.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @example
   * pc-xxxxxxxxxxxxxxxxx
   */
  metaInstanceName?: string;
  /**
   * @remarks
   * The metadata URL for Fuse mounting (encrypted).
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
   * The description of the PolarLakebase instance.
   * 
   * @example
   * pfs-xxx
   */
  polarFsInstanceDescription?: string;
  /**
   * @remarks
   * The PolarLakebase instance ID.
   * 
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * The PolarLakebase instance status.
   * 
   * @example
   * Running
   */
  polarFsStatus?: string;
  /**
   * @remarks
   * The instance version. Valid values:
   * - **PolarFS 2.0**: 2.0
   * - **PolarFS 1.0**: 1.0.
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
   * The instance ID of the associated PolarLakebase instance.
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
   * Valid values for the High-performance Edition storage type:
   * * **ESSDPL1**
   * * **ESSDPL0**
   * 
   * Valid values for the Basic Edition storage type:
   * * **city_redundancy**: zone-redundant storage.
   * 
   * @example
   * essdpl1
   */
  storageType?: string;
  /**
   * @remarks
   * The used storage space, in bytes.
   * 
   * @example
   * 3012558848
   */
  storageUsed?: number;
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
      bandwidth: 'Bandwidth',
      bandwidthBaseLine: 'BandwidthBaseLine',
      bucketId: 'BucketId',
      category: 'Category',
      clientDownloadPath: 'ClientDownloadPath',
      createTime: 'CreateTime',
      customBucketPath: 'CustomBucketPath',
      customBucketPathList: 'CustomBucketPathList',
      DBType: 'DBType',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      fileSystemId: 'FileSystemId',
      lockMode: 'LockMode',
      metaInstanceName: 'MetaInstanceName',
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
      bandwidth: 'number',
      bandwidthBaseLine: 'number',
      bucketId: 'string',
      category: 'string',
      clientDownloadPath: 'string',
      createTime: 'string',
      customBucketPath: 'string',
      customBucketPathList: { 'type': 'array', 'itemType': DescribePolarFsAttributeResponseBodyCustomBucketPathList },
      DBType: 'string',
      expireTime: 'string',
      expired: 'string',
      fileSystemId: 'string',
      lockMode: 'string',
      metaInstanceName: 'string',
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
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customBucketPathList)) {
      $dara.Model.validateArray(this.customBucketPathList);
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

