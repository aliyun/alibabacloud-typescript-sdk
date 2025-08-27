// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersResponseBodyClustersTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * aa_key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * aa_value
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

export class ListClustersResponseBodyClusters extends $dara.Model {
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * PPU-cluster2 bz
   */
  clusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i137590131672134915401
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * cnp_test_cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster type.
   * 
   * Valid values:
   * 
   * *   AckEdgePro
   * *   ExclusiveBareCluster
   * *   Lite
   * 
   * @example
   * AckEdgePro
   */
  clusterType?: string;
  /**
   * @remarks
   * The component information.
   * 
   * @example
   * {}
   */
  components?: any;
  /**
   * @remarks
   * The IP type of the computing network.
   * 
   * @example
   * IPv4
   */
  computingIpVersion?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1672134938
   */
  createTime?: string;
  /**
   * @remarks
   * The cluster number.
   * 
   * @example
   * B1
   */
  hpnZone?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 12
   */
  nodeCount?: number;
  /**
   * @remarks
   * The number of node groups.
   * 
   * @example
   * 2
   */
  nodeGroupCount?: number;
  /**
   * @remarks
   * The cluster status.
   * 
   * Valid values:
   * 
   * *   running
   * *   expanding
   * *   shrinking
   * *   initializing
   * 
   * @example
   * initializing
   */
  operatingState?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2ajbjoloa23q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListClustersResponseBodyClustersTags[];
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * i156365121663149566024
   */
  taskId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1672134968
   */
  updateTime?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-0jlx4hol2bjboafzmffvd
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterDescription: 'ClusterDescription',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      components: 'Components',
      computingIpVersion: 'ComputingIpVersion',
      createTime: 'CreateTime',
      hpnZone: 'HpnZone',
      nodeCount: 'NodeCount',
      nodeGroupCount: 'NodeGroupCount',
      operatingState: 'OperatingState',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      taskId: 'TaskId',
      updateTime: 'UpdateTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDescription: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      components: 'any',
      computingIpVersion: 'string',
      createTime: 'string',
      hpnZone: 'string',
      nodeCount: 'number',
      nodeGroupCount: 'number',
      operatingState: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersTags },
      taskId: 'string',
      updateTime: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The clusters.
   */
  clusters?: ListClustersResponseBodyClusters[];
  /**
   * @remarks
   * The returned pagination token which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * f4f9a292c17072a2
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FE2B22C-CF9D-59DE-BF63-DC9B9B33A9D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': ListClustersResponseBodyClusters },
      nextToken: 'string',
      requestId: 'string',
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

