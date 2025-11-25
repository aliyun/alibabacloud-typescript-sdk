// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarFsAttributeResponseBodyMountInfo extends $dara.Model {
  /**
   * @example
   * TCP://**.**.**.**:3000,TCP://**.**.**.**:3000,TCP://**.**.**.**:3000
   */
  polarDbProxy?: string;
  /**
   * @example
   * pfs-**********
   */
  polarFsCluster?: string;
  /**
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
   * @example
   * 1000
   */
  acceleratedStorageSpace?: number;
  /**
   * @example
   * ON
   */
  acceleratingEnable?: string;
  /**
   * @example
   * 100
   */
  bandwidth?: number;
  /**
   * @example
   * 100
   */
  bandwidthBaseLine?: number;
  bucketId?: string;
  /**
   * @example
   * high_performance
   */
  category?: string;
  clientDownloadPath?: string;
  /**
   * @example
   * 2021-08-02T05:57:10Z
   */
  createTime?: string;
  /**
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @example
   * 2025-10-10T16:00:00Z
   */
  expireTime?: string;
  /**
   * @example
   * false
   */
  expired?: string;
  fileSystemId?: string;
  /**
   * @example
   * Unlock
   */
  lockMode?: string;
  metaUrl?: string;
  minorVersion?: string;
  mountInfo?: DescribePolarFsAttributeResponseBodyMountInfo;
  /**
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @example
   * pfs-xxx
   */
  polarFsInstanceDescription?: string;
  /**
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  /**
   * @example
   * Running
   */
  polarFsStatus?: string;
  /**
   * @example
   * PolarFS 2.0
   */
  polarFsType?: string;
  /**
   * @example
   * 1.0.1-1.0.3
   */
  polarFsVersion?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * pc-2zejpr41d9xk3uk34
   */
  relativeDbClusterId?: string;
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
   * @example
   * sg-bp**************
   */
  securityGroupId?: string;
  /**
   * @example
   * 1000
   */
  storageSpace?: number;
  /**
   * @example
   * essdpl1
   */
  storageType?: string;
  /**
   * @example
   * 3012558848
   */
  storageUsed?: number;
  /**
   * @example
   * vpc-**********
   */
  VPCId?: string;
  /**
   * @example
   * vsw-**************
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-beijing-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratedStorageSpace: 'AcceleratedStorageSpace',
      acceleratingEnable: 'AcceleratingEnable',
      bandwidth: 'Bandwidth',
      bandwidthBaseLine: 'BandwidthBaseLine',
      bucketId: 'BucketId',
      category: 'Category',
      clientDownloadPath: 'ClientDownloadPath',
      createTime: 'CreateTime',
      DBType: 'DBType',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      fileSystemId: 'FileSystemId',
      lockMode: 'LockMode',
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
      acceleratedStorageSpace: 'number',
      acceleratingEnable: 'string',
      bandwidth: 'number',
      bandwidthBaseLine: 'number',
      bucketId: 'string',
      category: 'string',
      clientDownloadPath: 'string',
      createTime: 'string',
      DBType: 'string',
      expireTime: 'string',
      expired: 'string',
      fileSystemId: 'string',
      lockMode: 'string',
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
    if(this.mountInfo && typeof (this.mountInfo as any).validate === 'function') {
      (this.mountInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

