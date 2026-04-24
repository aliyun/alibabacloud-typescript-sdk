// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClustersResponseBodyDBClustersDBClusterScaleOutStatus extends $dara.Model {
  progress?: string;
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

export class DescribeDBClustersResponseBodyDBClustersDBClusterTagsTag extends $dara.Model {
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

export class DescribeDBClustersResponseBodyDBClustersDBClusterTags extends $dara.Model {
  tag?: DescribeDBClustersResponseBodyDBClustersDBClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyDBClustersDBClusterTagsTag },
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

export class DescribeDBClustersResponseBodyDBClustersDBCluster extends $dara.Model {
  aliUid?: string;
  bid?: string;
  category?: string;
  commodityCode?: string;
  connectionString?: string;
  controlVersion?: string;
  createTime?: string;
  DBClusterDescription?: string;
  DBClusterId?: string;
  DBClusterNetworkType?: string;
  DBClusterStatus?: string;
  DBNodeClass?: string;
  DBNodeCount?: number;
  DBNodeStorage?: number;
  dbVersion?: string;
  expireTime?: string;
  extStorageSize?: number;
  extStorageType?: string;
  isExpired?: string;
  lockMode?: string;
  lockReason?: string;
  payType?: string;
  port?: number;
  regionId?: string;
  resourceGroupId?: string;
  scaleOutDisableWriteWindows?: string;
  scaleOutStatus?: DescribeDBClustersResponseBodyDBClustersDBClusterScaleOutStatus;
  storageType?: string;
  tags?: DescribeDBClustersResponseBodyDBClustersDBClusterTags;
  vSwitchId?: string;
  vpcCloudInstanceId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
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
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DBNodeStorage: 'DBNodeStorage',
      dbVersion: 'DbVersion',
      expireTime: 'ExpireTime',
      extStorageSize: 'ExtStorageSize',
      extStorageType: 'ExtStorageType',
      isExpired: 'IsExpired',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      payType: 'PayType',
      port: 'Port',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scaleOutDisableWriteWindows: 'ScaleOutDisableWriteWindows',
      scaleOutStatus: 'ScaleOutStatus',
      storageType: 'StorageType',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
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
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DBNodeStorage: 'number',
      dbVersion: 'string',
      expireTime: 'string',
      extStorageSize: 'number',
      extStorageType: 'string',
      isExpired: 'string',
      lockMode: 'string',
      lockReason: 'string',
      payType: 'string',
      port: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      scaleOutDisableWriteWindows: 'string',
      scaleOutStatus: DescribeDBClustersResponseBodyDBClustersDBClusterScaleOutStatus,
      storageType: 'string',
      tags: DescribeDBClustersResponseBodyDBClustersDBClusterTags,
      vSwitchId: 'string',
      vpcCloudInstanceId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.scaleOutStatus && typeof (this.scaleOutStatus as any).validate === 'function') {
      (this.scaleOutStatus as any).validate();
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

export class DescribeDBClustersResponseBodyDBClusters extends $dara.Model {
  DBCluster?: DescribeDBClustersResponseBodyDBClustersDBCluster[];
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyDBClustersDBCluster },
    };
  }

  validate() {
    if(Array.isArray(this.DBCluster)) {
      $dara.Model.validateArray(this.DBCluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBody extends $dara.Model {
  DBClusters?: DescribeDBClustersResponseBodyDBClusters;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
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
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusters: 'DBClusters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusters: DescribeDBClustersResponseBodyDBClusters,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.DBClusters && typeof (this.DBClusters as any).validate === 'function') {
      (this.DBClusters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

