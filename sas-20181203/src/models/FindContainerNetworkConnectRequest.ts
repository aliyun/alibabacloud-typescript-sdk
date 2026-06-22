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
   * The ID of the container cluster to query.
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
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
   * The list of node IDs.
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The node type. Valid values:
   * - **app**: application. The node type is application.
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
   * The ID of the container cluster to query.
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
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
   * The list of node IDs.
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The node type. Valid values:
   * - **app**: application. The node type is application.
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
   * The query type of the element to query. Valid values:
   * 
   * - **EDGE**: connection information.
   * 
   * @example
   * EDGE
   */
  criteriaType?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The destination node information, which is used to filter destination nodes.
   */
  dstNode?: FindContainerNetworkConnectRequestDstNode;
  /**
   * @remarks
   * The end time of the network connectivity.
   * 
   * @example
   * 1649260799999
   */
  endTime?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Default value: 20. If the PageSize parameter is left empty, 20 entries are returned by default.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The source node information, which is used to filter source nodes.
   */
  srcNode?: FindContainerNetworkConnectRequestSrcNode;
  /**
   * @remarks
   * The start time of the network connectivity.
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

