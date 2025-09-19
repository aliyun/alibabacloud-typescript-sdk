// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindContainerNetworkConnectRequestDstNode extends $dara.Model {
  /**
   * @remarks
   * The name of the container application.
   * 
   * @example
   * nginx-ingress-controller
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of container clusters.
   * 
   * @example
   * f5x833820xx
   */
  clusterId?: string;
  /**
   * @remarks
   * The namespace of the cluster.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The node IDs.
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   **app**: application, which indicates that the node type is application.
   * 
   * @example
   * app
   */
  nodeType?: string;
  /**
   * @remarks
   * The name of the pod.
   * 
   * @example
   * abc-deployment-yacs-31144-39265-1384966-7f8c8cd578-h6mhb
   */
  podName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      namespace: 'Namespace',
      nodeIds: 'NodeIds',
      nodeType: 'NodeType',
      podName: 'PodName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      namespace: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      nodeType: 'string',
      podName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindContainerNetworkConnectRequestSrcNode extends $dara.Model {
  /**
   * @remarks
   * The name of the container application.
   * 
   * @example
   * arms-prometheus-ack-arms-prometheus
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of container clusters.
   * 
   * @example
   * c56xxx1775dea0
   */
  clusterId?: string;
  /**
   * @remarks
   * The namespace of the cluster.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The node IDs.
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   **app**: application, which indicates that the node type is application.
   * 
   * @example
   * app
   */
  nodeType?: string;
  /**
   * @remarks
   * The name of the pod.
   * 
   * @example
   * abc-deployment-yacs-31144-39265-1384966-7f8c8cd578-h6mhb
   */
  podName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      namespace: 'Namespace',
      nodeIds: 'NodeIds',
      nodeType: 'NodeType',
      podName: 'PodName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      namespace: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      nodeType: 'string',
      podName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindContainerNetworkConnectRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the information that you want to query. Valid values:
   * 
   * *   **EDGE**: connection information
   * 
   * @example
   * EDGE
   */
  criteriaType?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The information about the destination node.
   */
  dstNode?: FindContainerNetworkConnectRequestDstNode;
  /**
   * @remarks
   * The end time of the network connection.
   * 
   * @example
   * 1649260799999
   */
  endTime?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * > We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The information about the source node.
   */
  srcNode?: FindContainerNetworkConnectRequestSrcNode;
  /**
   * @remarks
   * The start time of the network connection.
   * 
   * @example
   * 1666886400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      criteriaType: 'CriteriaType',
      currentPage: 'CurrentPage',
      dstNode: 'DstNode',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      srcNode: 'SrcNode',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteriaType: 'string',
      currentPage: 'number',
      dstNode: FindContainerNetworkConnectRequestDstNode,
      endTime: 'number',
      pageSize: 'number',
      srcNode: FindContainerNetworkConnectRequestSrcNode,
      startTime: 'number',
    };
  }

  validate() {
    if(this.dstNode && typeof (this.dstNode as any).validate === 'function') {
      (this.dstNode as any).validate();
    }
    if(this.srcNode && typeof (this.srcNode as any).validate === 'function') {
      (this.srcNode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

