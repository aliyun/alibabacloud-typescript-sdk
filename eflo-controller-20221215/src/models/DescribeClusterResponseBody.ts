// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterResponseBodyComponents extends $dara.Model {
  /**
   * @remarks
   * The component ID.
   * 
   * @example
   * i149549021660892626529
   */
  componentId?: string;
  /**
   * @remarks
   * The component type.
   * 
   * Valid values:
   * 
   * *   ARMS
   * *   ACKEdge
   * 
   * @example
   * ACKEdge
   */
  componentType?: string;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      componentType: 'ComponentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      componentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyNetworks extends $dara.Model {
  /**
   * @remarks
   * The ID of the CIDR block for the cluster.
   * 
   * @example
   * vpd-iqd7xunc
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * Test cluster
   */
  clusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i116913051662373010974
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * Eflo-YJ-Test-Cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster type.
   * 
   * @example
   * AckEdgePro
   */
  clusterType?: string;
  /**
   * @remarks
   * The component information.
   */
  components?: DescribeClusterResponseBodyComponents[];
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
   * 2022-06-08T07:05:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The cluster number.
   * 
   * @example
   * A2
   */
  hpnZone?: string;
  /**
   * @remarks
   * The network information.
   */
  networks?: DescribeClusterResponseBodyNetworks;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 2
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
   * The status of Jumbo Frames for the elastic network interface (ENI).
   * 
   * @example
   * unsupported
   */
  openEniJumboFrame?: string;
  /**
   * @remarks
   * The cluster status.
   * 
   * @example
   * running
   */
  operatingState?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 887FA855-89F4-5DB3-B305-C5879EC480E6
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2k3rqlvv6ytq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * i152609221670466904596
   */
  taskId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2022-08-23T06:36:17.000Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-0jlkqysom5dmcviymep3f
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
      networks: 'Networks',
      nodeCount: 'NodeCount',
      nodeGroupCount: 'NodeGroupCount',
      openEniJumboFrame: 'OpenEniJumboFrame',
      operatingState: 'OperatingState',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
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
      components: { 'type': 'array', 'itemType': DescribeClusterResponseBodyComponents },
      computingIpVersion: 'string',
      createTime: 'string',
      hpnZone: 'string',
      networks: DescribeClusterResponseBodyNetworks,
      nodeCount: 'number',
      nodeGroupCount: 'number',
      openEniJumboFrame: 'string',
      operatingState: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      taskId: 'string',
      updateTime: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(this.networks && typeof (this.networks as any).validate === 'function') {
      (this.networks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

