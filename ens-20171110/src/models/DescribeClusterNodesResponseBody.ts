// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNodesResponseBodyNodesNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The container runtime version.
   * 
   * @example
   * containerd://1.6.28
   */
  containerRuntimeVersion?: string;
  /**
   * @remarks
   * The kubelet version of the node.
   * 
   * @example
   * v1.30.7-aliyun.1
   */
  kubeletVersion?: string;
  /**
   * @remarks
   * The operating system image of the node.
   * 
   * @example
   * CentOS Linux 7 (Core)
   */
  osImage?: string;
  static names(): { [key: string]: string } {
    return {
      containerRuntimeVersion: 'ContainerRuntimeVersion',
      kubeletVersion: 'KubeletVersion',
      osImage: 'OsImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerRuntimeVersion: 'string',
      kubeletVersion: 'string',
      osImage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodesResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The ENS edge zone ID.
   * 
   * @example
   * cn-fuzhou-23
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The instance image ID.
   * 
   * @example
   * m-680cki2ruj1q2bm0mz1k9tnbz
   */
  imageId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-51mctytg7tv4yw4amu3oczxsx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the ENS instance.
   */
  ipAddress?: string[];
  /**
   * @remarks
   * The node information.
   */
  nodeInfo?: DescribeClusterNodesResponseBodyNodesNodeInfo;
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * np861febb748f84f5f9f1c76819eff7f56
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * - PostPaid: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The status of the node pool. Valid values:
   * - initial: The node pool is being created.
   * - running: The node pool is created.
   * - removing: The node pool is being removed.
   * 
   * @example
   * initial
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ensRegionId: 'EnsRegionId',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      ipAddress: 'IpAddress',
      nodeInfo: 'NodeInfo',
      nodepoolId: 'NodepoolId',
      payType: 'PayType',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ensRegionId: 'string',
      imageId: 'string',
      instanceId: 'string',
      ipAddress: { 'type': 'array', 'itemType': 'string' },
      nodeInfo: DescribeClusterNodesResponseBodyNodesNodeInfo,
      nodepoolId: 'string',
      payType: 'string',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipAddress)) {
      $dara.Model.validateArray(this.ipAddress);
    }
    if(this.nodeInfo && typeof (this.nodeInfo as any).validate === 'function') {
      (this.nodeInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodesResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * The total number of entries.
   * 
   * @example
   * 30
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

export class DescribeClusterNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The node information.
   */
  nodes?: DescribeClusterNodesResponseBodyNodes[];
  /**
   * @remarks
   * The pagination information.
   */
  page?: DescribeClusterNodesResponseBodyPage;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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
      nodes: { 'type': 'array', 'itemType': DescribeClusterNodesResponseBodyNodes },
      page: DescribeClusterNodesResponseBodyPage,
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

