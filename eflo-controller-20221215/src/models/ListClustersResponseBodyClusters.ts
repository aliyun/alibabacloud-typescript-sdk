// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClustersResponseBodyClustersTags } from "./ListClustersResponseBodyClustersTags";


export class ListClustersResponseBodyClusters extends $dara.Model {
  /**
   * @remarks
   * Cluster description
   * 
   * @example
   * PPU-cluster2 bz
   */
  clusterDescription?: string;
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i137590131672134915401
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster name
   * 
   * @example
   * cnp_test_cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * Cluster type
   * 
   * @example
   * AckEdgePro
   */
  clusterType?: string;
  /**
   * @remarks
   * Component information
   * 
   * @example
   * {}
   */
  components?: any;
  /**
   * @remarks
   * IP version of the computing network
   * 
   * @example
   * IPv4
   */
  computingIpVersion?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1672134938
   */
  createTime?: string;
  /**
   * @remarks
   * Cluster number
   * 
   * @example
   * B1
   */
  hpnZone?: string;
  /**
   * @remarks
   * Number of nodes
   * 
   * @example
   * 12
   */
  nodeCount?: number;
  /**
   * @remarks
   * Number of node groups
   * 
   * @example
   * 2
   */
  nodeGroupCount?: number;
  /**
   * @remarks
   * Cluster status
   * 
   * @example
   * initializing
   */
  operatingState?: string;
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-aek2ajbjoloa23q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * tag information
   */
  tags?: ListClustersResponseBodyClustersTags[];
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * i156365121663149566024
   */
  taskId?: string;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 1672134968
   */
  updateTime?: string;
  /**
   * @remarks
   * VPC ID
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

