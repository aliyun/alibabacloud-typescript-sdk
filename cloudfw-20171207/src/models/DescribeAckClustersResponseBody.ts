// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAckClustersResponseBodyClusters extends $dara.Model {
  /**
   * @example
   * cb0f5640b1b2d404cad6ba21509d7847b
   */
  clusterId?: string;
  /**
   * @example
   * ack-cluster-name
   */
  clusterName?: string;
  /**
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @example
   * 135809047715****
   */
  memberUid?: string;
  /**
   * @example
   * terway-eniip
   */
  network?: string;
  /**
   * @example
   * Default
   */
  profile?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * running
   */
  state?: string;
  /**
   * @example
   * vpc-2vcg932hsxsxuqbgl****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterSpec: 'ClusterSpec',
      clusterType: 'ClusterType',
      memberUid: 'MemberUid',
      network: 'Network',
      profile: 'Profile',
      regionId: 'RegionId',
      state: 'State',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterSpec: 'string',
      clusterType: 'string',
      memberUid: 'string',
      network: 'string',
      profile: 'string',
      regionId: 'string',
      state: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAckClustersResponseBody extends $dara.Model {
  clusters?: DescribeAckClustersResponseBodyClusters[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * C5DDD596-1191-5F36-A504-8733045A****
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeAckClustersResponseBodyClusters },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

