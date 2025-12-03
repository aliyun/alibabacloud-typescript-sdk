// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterListResponseBodyClusterListClusterTagsTag extends $dara.Model {
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

export class DescribeClusterListResponseBodyClusterListClusterTags extends $dara.Model {
  tag?: DescribeClusterListResponseBodyClusterListClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeClusterListResponseBodyClusterListClusterTagsTag },
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

export class DescribeClusterListResponseBodyClusterListCluster extends $dara.Model {
  clusterId?: string;
  clusterName?: string;
  clusterType?: string;
  coreDiskSize?: string;
  coreDiskType?: string;
  coreInstanceQuantity?: number;
  createTime?: string;
  dbType?: string;
  expireTime?: string;
  lockMode?: string;
  mainVersion?: string;
  netType?: string;
  payType?: string;
  reason?: string;
  regionId?: string;
  status?: string;
  tags?: DescribeClusterListResponseBodyClusterListClusterTags;
  userId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      coreDiskSize: 'CoreDiskSize',
      coreDiskType: 'CoreDiskType',
      coreInstanceQuantity: 'CoreInstanceQuantity',
      createTime: 'CreateTime',
      dbType: 'DbType',
      expireTime: 'ExpireTime',
      lockMode: 'LockMode',
      mainVersion: 'MainVersion',
      netType: 'NetType',
      payType: 'PayType',
      reason: 'Reason',
      regionId: 'RegionId',
      status: 'Status',
      tags: 'Tags',
      userId: 'UserId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      coreDiskSize: 'string',
      coreDiskType: 'string',
      coreInstanceQuantity: 'number',
      createTime: 'string',
      dbType: 'string',
      expireTime: 'string',
      lockMode: 'string',
      mainVersion: 'string',
      netType: 'string',
      payType: 'string',
      reason: 'string',
      regionId: 'string',
      status: 'string',
      tags: DescribeClusterListResponseBodyClusterListClusterTags,
      userId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterListResponseBodyClusterList extends $dara.Model {
  cluster?: DescribeClusterListResponseBodyClusterListCluster[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'array', 'itemType': DescribeClusterListResponseBodyClusterListCluster },
    };
  }

  validate() {
    if(Array.isArray(this.cluster)) {
      $dara.Model.validateArray(this.cluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterListResponseBody extends $dara.Model {
  clusterList?: DescribeClusterListResponseBodyClusterList;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterList: 'ClusterList',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterList: DescribeClusterListResponseBodyClusterList,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.clusterList && typeof (this.clusterList as any).validate === 'function') {
      (this.clusterList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

