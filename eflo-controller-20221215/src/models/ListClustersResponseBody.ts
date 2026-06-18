// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersResponseBodyClustersTags extends $dara.Model {
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * daily
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
   * Cluster description.
   * 
   * @example
   * Test cluster
   */
  clusterDescription?: string;
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * i137590131672134915401
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster name.
   * 
   * @example
   * cnp_test_cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * Cluster type.
   * 
   * @example
   * AckEdgePro
   */
  clusterType?: string;
  /**
   * @remarks
   * Component information.
   * 
   * @example
   * {}
   */
  components?: any;
  /**
   * @remarks
   * IP version of computing network.
   * 
   * @example
   * IPv4
   */
  computingIpVersion?: string;
  /**
   * @remarks
   * Cluster creation time.
   * 
   * @example
   * 2026-01-27T14:54:02.360
   */
  createTime?: string;
  /**
   * @remarks
   * Cluster zone identifier.
   * 
   * @example
   * B1
   */
  hpnZone?: string;
  /**
   * @remarks
   * Number of nodes.
   * 
   * @example
   * 12
   */
  nodeCount?: number;
  /**
   * @remarks
   * Number of node groups.
   * 
   * @example
   * 2
   */
  nodeGroupCount?: number;
  /**
   * @remarks
   * Cluster status.
   * 
   * @example
   * initializing
   */
  operatingState?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-aek2ajbjoloa23q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Tag information.
   */
  tags?: ListClustersResponseBodyClustersTags[];
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * i156365121663149566024
   */
  taskId?: string;
  /**
   * @remarks
   * Last update time.
   * 
   * @example
   * 2026-01-28T20:56:32.585
   */
  updateTime?: string;
  /**
   * @remarks
   * VPC ID.
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
   * Cluster information.
   */
  clusters?: ListClustersResponseBodyClusters[];
  /**
   * @remarks
   * Token returned by this call for retrieving next page.
   * 
   * @example
   * f4f9a292c17072a2
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
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

