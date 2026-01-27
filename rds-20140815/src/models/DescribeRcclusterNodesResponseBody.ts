// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCClusterNodesResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * The time when the node was created.
   * 
   * @example
   * 2024-10-21T07:20:09Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The container version.
   * 
   * @example
   * 1.0
   */
  dockerVersion?: string;
  /**
   * @remarks
   * The image ID of the node.
   * 
   * @example
   * m-2oqiu973jwcxe****
   */
  imageId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * rc-u79597n5f54s5bnz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node role. Valid values:
   * 
   * *   **Master**: master node
   * *   **Worker**: worker node
   * 
   * @example
   * Master
   */
  instanceRole?: string;
  /**
   * @remarks
   * The IP address.
   */
  ipAddresses?: string[];
  /**
   * @remarks
   * Indicates whether the node is provided by Alibaba Cloud. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isAliyunNode?: boolean;
  /**
   * @remarks
   * The node name, which is the identifier of the RDS Custom node in the cluster.
   * 
   * @example
   * cn-hangzhou.192.168.XXX.XXX
   */
  nodeName?: string;
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * None
   */
  nodePoolId?: string;
  /**
   * @remarks
   * Indicates whether the node is ready. Valid values:
   * 
   * *   **Ready**: The node is ready.
   * *   **NotReady**: The node is not ready.
   * *   **Unknown**: The status of the node is unknown.
   * *   **Offline**: The node is offline.
   * 
   * @example
   * Ready
   */
  nodeStatus?: string;
  /**
   * @example
   * 1
   */
  podCount?: number;
  /**
   * @remarks
   * The runtime of the ACK cluster.
   * 
   * @example
   * 2024-10-21T07:20:09Z
   */
  runtimeVersion?: string;
  /**
   * @remarks
   * The node status. Valid values:
   * 
   * *   **pending**
   * *   **running**
   * *   **starting**
   * *   **stopping**
   * *   **stopped**
   * 
   * @example
   * running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      dockerVersion: 'DockerVersion',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      instanceRole: 'InstanceRole',
      ipAddresses: 'IpAddresses',
      isAliyunNode: 'IsAliyunNode',
      nodeName: 'NodeName',
      nodePoolId: 'NodePoolId',
      nodeStatus: 'NodeStatus',
      podCount: 'PodCount',
      runtimeVersion: 'RuntimeVersion',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      dockerVersion: 'string',
      imageId: 'string',
      instanceId: 'string',
      instanceRole: 'string',
      ipAddresses: { 'type': 'array', 'itemType': 'string' },
      isAliyunNode: 'boolean',
      nodeName: 'string',
      nodePoolId: 'string',
      nodeStatus: 'string',
      podCount: 'number',
      runtimeVersion: 'string',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipAddresses)) {
      $dara.Model.validateArray(this.ipAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCClusterNodesResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCClusterNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the nodes.
   */
  nodes?: DescribeRCClusterNodesResponseBodyNodes[];
  /**
   * @remarks
   * The pagination information.
   */
  page?: DescribeRCClusterNodesResponseBodyPage;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16C62438-491B-5C02-9B49-BA924A1372A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      page: 'Page',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeRCClusterNodesResponseBodyNodes },
      page: DescribeRCClusterNodesResponseBodyPage,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

