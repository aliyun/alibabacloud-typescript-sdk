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
   * The specifications of the ACK cluster.
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The type of the ACK cluster. Valid values:
   * - **ManagedKubernetes**: managed ACK clusters, including ACK managed clusters (Pro Edition and Basic Edition), ACK Serverless clusters (Pro Edition and Basic Edition), ACK Edge clusters (Pro Edition and Basic Edition), and ACK Lingjun clusters (Pro Edition)
   * - **ExternalKubernetes**: registered clusters
   * - **Kubernetes**: dedicated ACK clusters
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the ACK cluster resources belong.
   * 
   * @example
   * 135809047715****
   */
  memberUid?: string;
  /**
   * @remarks
   * The network plug-in of the ACK cluster. Valid values:
   * - **terway-eniip**: the Terway-eniip network plug-in
   * - **Flannel**: the Flannel network plug-in
   * 
   * @example
   * terway-eniip
   */
  network?: string;
  /**
   * @remarks
   * When `ClusterType` is set to `ManagedKubernetes` (managed ACK clusters), this parameter indicates the subtype of the cluster. Valid values:
   * - **Default**: ACK managed clusters, including ACK managed clusters Pro Edition and Basic Edition
   * - **Serverless**: ACK Serverless clusters, including ACK Serverless clusters Pro Edition and Basic Edition
   * - **Edge**: ACK Edge clusters, including ACK Edge clusters Pro Edition and Basic Edition
   * - **Lingjun**: ACK Lingjun clusters, available only in Pro Edition
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
   * The running status of the ACK cluster. Valid values:
   * - **initial**: The cluster is being created.
   * - **running**: The cluster is running.
   * - **scaling**: The cluster is being scaled.
   * - **stopped**: The cluster is stopped.
   * - **upgrading**: The cluster is being upgraded.
   * - **updating**: The cluster configurations are being updated.
   * - **deleting**: The cluster is being deleted.
   * - **deleted**: The cluster is deleted.
   * - **draining**: Nodes are being drained.
   * - **removing**: Nodes are being removed.
   * - **failed**: The cluster failed to be created.
   * - **delete_failed**: The cluster failed to be deleted.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The ID of the VPC to which the ACK cluster belongs.
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
   * The list of ACK clusters.
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
   * The number of entries to return on each page.
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

