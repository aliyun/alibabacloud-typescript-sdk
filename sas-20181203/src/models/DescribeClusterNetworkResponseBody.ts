// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNetworkResponseBodyClusterNetworkEdge extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination node.
   * 
   * @example
   * cfb41a869c71e4678a97021582dd8****
   */
  dstNodeId?: string;
  /**
   * @remarks
   * The type of the destination node. Valid values:
   * 
   * *   Set the value to **cluster**.
   * 
   * @example
   * cluster
   */
  dstNodeType?: string;
  /**
   * @remarks
   * The ID of the topology edge.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The port number of the topology edge.
   * 
   * @example
   * 6164
   */
  port?: string;
  /**
   * @remarks
   * The ID of the source node.
   * 
   * @example
   * cfb41a869c71e4678a97021582dd8****
   */
  srcNodeId?: string;
  /**
   * @remarks
   * The type of the source node. Valid values:
   * 
   * *   **cluster**: a cluster.
   * *   **internet**: a network node outside the cluster
   * 
   * @example
   * cluster
   */
  srcNodeType?: string;
  static names(): { [key: string]: string } {
    return {
      dstNodeId: 'DstNodeId',
      dstNodeType: 'DstNodeType',
      id: 'Id',
      port: 'Port',
      srcNodeId: 'SrcNodeId',
      srcNodeType: 'SrcNodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstNodeId: 'string',
      dstNodeType: 'string',
      id: 'string',
      port: 'string',
      srcNodeId: 'string',
      srcNodeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNetworkResponseBodyClusterNetworkNode extends $dara.Model {
  /**
   * @remarks
   * The status of the microsegmentation switch. Valid values:
   * 
   * *   **0**: off.
   * *   **1**: on.
   * 
   * @example
   * 1
   */
  cnnfSwitch?: number;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cfeb7a9f99ce740e98c5595d0fe37****
   */
  id?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **0**: classic network.
   * *   **1**: virtual private cloud (VPC).
   * 
   * @example
   * 1
   */
  interceptionType?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * testwww
   */
  name?: string;
  /**
   * @remarks
   * The status of the network topology switch. Valid values:
   * 
   * *   **ON**
   * *   **OFF**
   * 
   * @example
   * ON
   */
  netTopoSwitch?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **3**: high.
   * *   **2**: medium.
   * *   **1**: low.
   * *   **0**: secure.
   * *   **-1**: unknown.
   * 
   * @example
   * 3
   */
  riskLevel?: string;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   **cluster**: a cluster.
   * *   **internet**: a network node outside the cluster.
   * 
   * @example
   * cluster
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cnnfSwitch: 'CnnfSwitch',
      id: 'Id',
      interceptionType: 'InterceptionType',
      name: 'Name',
      netTopoSwitch: 'NetTopoSwitch',
      riskLevel: 'RiskLevel',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnnfSwitch: 'number',
      id: 'string',
      interceptionType: 'number',
      name: 'string',
      netTopoSwitch: 'string',
      riskLevel: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNetworkResponseBodyClusterNetwork extends $dara.Model {
  /**
   * @remarks
   * An array that consists of information about the topology edge.
   */
  edge?: DescribeClusterNetworkResponseBodyClusterNetworkEdge[];
  /**
   * @remarks
   * An array that consists of information about the node.
   */
  node?: DescribeClusterNetworkResponseBodyClusterNetworkNode[];
  static names(): { [key: string]: string } {
    return {
      edge: 'Edge',
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edge: { 'type': 'array', 'itemType': DescribeClusterNetworkResponseBodyClusterNetworkEdge },
      node: { 'type': 'array', 'itemType': DescribeClusterNetworkResponseBodyClusterNetworkNode },
    };
  }

  validate() {
    if(Array.isArray(this.edge)) {
      $dara.Model.validateArray(this.edge);
    }
    if(Array.isArray(this.node)) {
      $dara.Model.validateArray(this.node);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNetworkResponseBody extends $dara.Model {
  /**
   * @remarks
   * Information about the network topology edge in the cluster.
   */
  clusterNetwork?: DescribeClusterNetworkResponseBodyClusterNetwork;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * C286491D-4A2F-589A-B63B-D2AD3DA9BD71
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterNetwork: 'ClusterNetwork',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNetwork: DescribeClusterNetworkResponseBodyClusterNetwork,
      requestId: 'string',
    };
  }

  validate() {
    if(this.clusterNetwork && typeof (this.clusterNetwork as any).validate === 'function') {
      (this.clusterNetwork as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

