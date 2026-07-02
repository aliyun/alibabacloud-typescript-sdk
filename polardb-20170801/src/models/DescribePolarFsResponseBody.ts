// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarFsResponseBodyItemsPolarFsPathsMountInfo extends $dara.Model {
  polarDbProxy?: string;
  polarFsCluster?: string;
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

export class DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClustersMountedAIDBClusters extends $dara.Model {
  DBClusterId?: string;
  mountDir?: string;
  mountStatus?: string;
  mountedTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      mountDir: 'MountDir',
      mountStatus: 'MountStatus',
      mountedTime: 'MountedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      mountDir: 'string',
      mountStatus: 'string',
      mountedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClusters extends $dara.Model {
  mountedAIDBClusters?: DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClustersMountedAIDBClusters[];
  static names(): { [key: string]: string } {
    return {
      mountedAIDBClusters: 'MountedAIDBClusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountedAIDBClusters: { 'type': 'array', 'itemType': DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClustersMountedAIDBClusters },
    };
  }

  validate() {
    if(Array.isArray(this.mountedAIDBClusters)) {
      $dara.Model.validateArray(this.mountedAIDBClusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarFsResponseBodyItemsPolarFsPathsTagsTag extends $dara.Model {
  /**
   * @example
   * testKey
   */
  key?: string;
  /**
   * @example
   * testValue
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

export class DescribePolarFsResponseBodyItemsPolarFsPathsTags extends $dara.Model {
  tag?: DescribePolarFsResponseBodyItemsPolarFsPathsTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribePolarFsResponseBodyItemsPolarFsPathsTagsTag },
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

export class DescribePolarFsResponseBodyItemsPolarFsPaths extends $dara.Model {
  accelerateType?: string;
  acceleratedStorageSpace?: string;
  acceleratingEnable?: string;
  bandwidth?: number;
  category?: string;
  createTime?: string;
  expireTime?: string;
  expired?: string;
  mountInfo?: DescribePolarFsResponseBodyItemsPolarFsPathsMountInfo;
  mountedAIDBClusters?: DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClusters;
  payType?: string;
  polarFsInstanceDescription?: string;
  polarFsInstanceId?: string;
  polarFsPath?: string;
  polarFsStatus?: string;
  polarFsType?: string;
  regionId?: string;
  relativeDbClusterId?: string;
  securityGroupId?: string;
  storageSpace?: number;
  storageType?: string;
  tags?: DescribePolarFsResponseBodyItemsPolarFsPathsTags;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateType: 'AccelerateType',
      acceleratedStorageSpace: 'AcceleratedStorageSpace',
      acceleratingEnable: 'AcceleratingEnable',
      bandwidth: 'Bandwidth',
      category: 'Category',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      mountInfo: 'MountInfo',
      mountedAIDBClusters: 'MountedAIDBClusters',
      payType: 'PayType',
      polarFsInstanceDescription: 'PolarFsInstanceDescription',
      polarFsInstanceId: 'PolarFsInstanceId',
      polarFsPath: 'PolarFsPath',
      polarFsStatus: 'PolarFsStatus',
      polarFsType: 'PolarFsType',
      regionId: 'RegionId',
      relativeDbClusterId: 'RelativeDbClusterId',
      securityGroupId: 'SecurityGroupId',
      storageSpace: 'StorageSpace',
      storageType: 'StorageType',
      tags: 'Tags',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateType: 'string',
      acceleratedStorageSpace: 'string',
      acceleratingEnable: 'string',
      bandwidth: 'number',
      category: 'string',
      createTime: 'string',
      expireTime: 'string',
      expired: 'string',
      mountInfo: DescribePolarFsResponseBodyItemsPolarFsPathsMountInfo,
      mountedAIDBClusters: DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClusters,
      payType: 'string',
      polarFsInstanceDescription: 'string',
      polarFsInstanceId: 'string',
      polarFsPath: 'string',
      polarFsStatus: 'string',
      polarFsType: 'string',
      regionId: 'string',
      relativeDbClusterId: 'string',
      securityGroupId: 'string',
      storageSpace: 'number',
      storageType: 'string',
      tags: DescribePolarFsResponseBodyItemsPolarFsPathsTags,
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.mountInfo && typeof (this.mountInfo as any).validate === 'function') {
      (this.mountInfo as any).validate();
    }
    if(this.mountedAIDBClusters && typeof (this.mountedAIDBClusters as any).validate === 'function') {
      (this.mountedAIDBClusters as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarFsResponseBodyItems extends $dara.Model {
  polarFsPaths?: DescribePolarFsResponseBodyItemsPolarFsPaths[];
  static names(): { [key: string]: string } {
    return {
      polarFsPaths: 'PolarFsPaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polarFsPaths: { 'type': 'array', 'itemType': DescribePolarFsResponseBodyItemsPolarFsPaths },
    };
  }

  validate() {
    if(Array.isArray(this.polarFsPaths)) {
      $dara.Model.validateArray(this.polarFsPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarFsResponseBody extends $dara.Model {
  items?: DescribePolarFsResponseBodyItems;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 13
   */
  pageRecordCount?: number;
  /**
   * @example
   * 8CD1852F-8176-55E4-891C-4478DC00CC7A
   */
  requestId?: string;
  /**
   * @example
   * 16
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribePolarFsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

