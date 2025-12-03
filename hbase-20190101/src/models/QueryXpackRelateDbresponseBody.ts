// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryXpackRelateDBResponseBodyClusterListCluster extends $dara.Model {
  /**
   * @example
   * hb-bp16o0pd52e3y582s
   */
  clusterId?: string;
  /**
   * @example
   * hbase_test
   */
  clusterName?: string;
  /**
   * @example
   * hbase
   */
  DBType?: string;
  /**
   * @example
   * 2.0
   */
  DBVersion?: string;
  /**
   * @example
   * false
   */
  isRelated?: boolean;
  /**
   * @example
   * ..
   */
  lockMode?: string;
  /**
   * @example
   * ACTIVATION
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      isRelated: 'IsRelated',
      lockMode: 'LockMode',
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
      lockMode: 'string',
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

export class QueryXpackRelateDBResponseBodyClusterList extends $dara.Model {
  cluster?: QueryXpackRelateDBResponseBodyClusterListCluster[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'array', 'itemType': QueryXpackRelateDBResponseBodyClusterListCluster },
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

export class QueryXpackRelateDBResponseBody extends $dara.Model {
  clusterList?: QueryXpackRelateDBResponseBodyClusterList;
  /**
   * @example
   * 288E9010-36DD-499C-B4DA-61E4362DA4CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterList: 'ClusterList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterList: QueryXpackRelateDBResponseBodyClusterList,
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

