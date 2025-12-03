// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryXpackRelatedDBResponseBodyClusterListCluster extends $dara.Model {
  clusterId?: string;
  clusterName?: string;
  DBType?: string;
  DBVersion?: string;
  isRelated?: boolean;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      isRelated: 'IsRelated',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      DBType: 'string',
      DBVersion: 'string',
      isRelated: 'boolean',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryXpackRelatedDBResponseBodyClusterList extends $dara.Model {
  cluster?: QueryXpackRelatedDBResponseBodyClusterListCluster[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'array', 'itemType': QueryXpackRelatedDBResponseBodyClusterListCluster },
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

export class QueryXpackRelatedDBResponseBody extends $dara.Model {
  clusterList?: QueryXpackRelatedDBResponseBodyClusterList;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterList: 'ClusterList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterList: QueryXpackRelatedDBResponseBodyClusterList,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

