// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAckClustersResponseBodyClusters extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACK cluster.
   * 
   * @example
   * cb0f5640b1b2d404cad6ba21509d7847b
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the ACK cluster.
   * 
   * @example
   * ack-cluster-name
   */
  clusterName?: string;
  /**
   * @remarks
   * The specification of the ACK cluster.
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The type of the ACK cluster. For more information about the valid values, see [DescribeClustersV1](~~DescribeClustersV1~~).
   * 
   * - [DescribeClustersV1](~~DescribeClustersV1~~): Returns a list of ACK clusters in your account that meet specific criteria, such as the cluster type and specifications.
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The Alibaba Cloud UID of the account to which the ACK cluster resources belong.
   * 
   * @example
   * 135809047715****
   */
  memberUid?: string;
  /**
   * @remarks
   * The network plugin of the ACK cluster. For more information about the valid values, see [DescribeClustersV1](~~DescribeClustersV1~~).
   * 
   * - [DescribeClustersV1](~~DescribeClustersV1~~): Lists the ACK clusters in your account that meet specified conditions, such as cluster type and specifications.
   * 
   * @example
   * terway-eniip
   */
  network?: string;
  /**
   * @remarks
   * The subtype of the cluster. This parameter is available only when `ClusterType` is set to `ManagedKubernetes`. For more information about the valid values, see [DescribeClustersV1](~~DescribeClustersV1~~).
   * 
   * - [DescribeClustersV1](~~DescribeClustersV1~~): Lists ACK clusters in your account that meet specified conditions, such as cluster type and specifications.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * The region ID of the ACK cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The running status of the ACK cluster. For more information about the valid values, see [DescribeClustersV1](~~DescribeClustersV1~~).
   * 
   * - [DescribeClustersV1](~~DescribeClustersV1~~): Retrieves a list of ACK clusters in your account that meet specified conditions, such as cluster type and specifications.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The ID of the VPC where the ACK cluster is deployed.
   * 
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
  /**
   * @remarks
   * A list of ACK clusters.
   */
  clusters?: DescribeAckClustersResponseBodyClusters[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C5DDD596-1191-5F36-A504-8733045A****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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

