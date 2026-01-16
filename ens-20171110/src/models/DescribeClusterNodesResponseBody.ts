// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNodesResponseBodyNodes extends $dara.Model {
  /**
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @example
   * cn-fuzhou-23
   */
  ensRegionId?: string;
  /**
   * @example
   * m-680cki2ruj1q2bm0mz1k9tnbz
   */
  imageId?: string;
  /**
   * @example
   * i-51mctytg7tv4yw4amu3oczxsx
   */
  instanceId?: string;
  ipAddress?: string[];
  /**
   * @example
   * np861febb748f84f5f9f1c76819eff7f56
   */
  nodepoolId?: string;
  /**
   * @example
   * PrePaid
   */
  payType?: string;
  /**
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
      nodepoolId: 'string',
      payType: 'string',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipAddress)) {
      $dara.Model.validateArray(this.ipAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNodesResponseBodyPage extends $dara.Model {
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
  nodes?: DescribeClusterNodesResponseBodyNodes[];
  page?: DescribeClusterNodesResponseBodyPage;
  /**
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

