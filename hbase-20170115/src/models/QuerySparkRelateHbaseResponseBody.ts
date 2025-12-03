// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySparkRelateHBaseResponseBodyClusterListCluster extends $dara.Model {
  clusterId?: string;
  clusterName?: string;
  clusterType?: string;
  coreDiskType?: string;
  coreInstanceQuantity?: number;
  createTime?: string;
  dbType?: string;
  expireTime?: string;
  isRelated?: boolean;
  lockMode?: string;
  mainVersion?: string;
  netType?: string;
  payType?: string;
  reason?: string;
  regionId?: string;
  status?: string;
  userId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      coreDiskType: 'CoreDiskType',
      coreInstanceQuantity: 'CoreInstanceQuantity',
      createTime: 'CreateTime',
      dbType: 'DbType',
      expireTime: 'ExpireTime',
      isRelated: 'IsRelated',
      lockMode: 'LockMode',
      mainVersion: 'MainVersion',
      netType: 'NetType',
      payType: 'PayType',
      reason: 'Reason',
      regionId: 'RegionId',
      status: 'Status',
      userId: 'UserId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      coreDiskType: 'string',
      coreInstanceQuantity: 'number',
      createTime: 'string',
      dbType: 'string',
      expireTime: 'string',
      isRelated: 'boolean',
      lockMode: 'string',
      mainVersion: 'string',
      netType: 'string',
      payType: 'string',
      reason: 'string',
      regionId: 'string',
      status: 'string',
      userId: 'string',
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

export class QuerySparkRelateHBaseResponseBodyClusterList extends $dara.Model {
  cluster?: QuerySparkRelateHBaseResponseBodyClusterListCluster[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'array', 'itemType': QuerySparkRelateHBaseResponseBodyClusterListCluster },
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

export class QuerySparkRelateHBaseResponseBody extends $dara.Model {
  clusterList?: QuerySparkRelateHBaseResponseBodyClusterList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterList: 'ClusterList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterList: QuerySparkRelateHBaseResponseBodyClusterList,
      requestId: 'string',
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

