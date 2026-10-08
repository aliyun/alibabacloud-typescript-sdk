// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCClusterNodesResponseBodyNodes extends $dara.Model {
  /**
   * @example
   * 2026-01-06T22:22:16.00+08:00
   */
  creationTime?: string;
  dockerVersion?: string;
  imageId?: string;
  /**
   * @example
   * vn-uoeaq5a51g0vk473****
   */
  instanceId?: string;
  instanceRole?: string;
  ipAddresses?: string[];
  isAliyunNode?: boolean;
  /**
   * @example
   * vn-uoeaq5a51g0vk473****
   */
  nodeName?: string;
  /**
   * @example
   * rcnpf5e3ee4a65104cf0801f94850d37****
   */
  nodePoolId?: string;
  nodeStatus?: string;
  /**
   * @example
   * 1
   */
  podCount?: number;
  runtimeVersion?: string;
  /**
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 5
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
  nodes?: DescribeRCClusterNodesResponseBodyNodes[];
  page?: DescribeRCClusterNodesResponseBodyPage;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
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

