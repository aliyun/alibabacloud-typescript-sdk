// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridProxyClusterListResponseBodyClusterList extends $dara.Model {
  /**
   * @remarks
   * The credential ID for cluster authentication.
   * 
   * @example
   * test
   */
  authKey?: string;
  /**
   * @remarks
   * The credential key for cluster authentication.
   * 
   * @example
   * test
   */
  authKeySecret?: string;
  /**
   * @remarks
   * The number of Security Center clients connected to the current cluster.
   * 
   * @example
   * 10
   */
  clientCount?: number;
  /**
   * @remarks
   * The name of the proxy cluster.
   * 
   * @example
   * idc-sas-proxy
   */
  clusterName?: string;
  /**
   * @remarks
   * The installation command for the current proxy cluster node.
   * 
   * @example
   * test
   */
  installCommand?: string;
  /**
   * @remarks
   * The access address of the cluster, which can be an IP address or a domain name.
   * 
   * @example
   * 114.115.XXX.XXX
   */
  ip?: string;
  /**
   * @remarks
   * The timestamp of the last heartbeat from the cluster. Unit: milliseconds.
   * 
   * @example
   * 1608304654000
   */
  lastHeartTime?: number;
  /**
   * @remarks
   * The number of proxy nodes.
   * 
   * @example
   * 3
   */
  proxyCount?: number;
  /**
   * @remarks
   * The remarks of the proxy cluster.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The running status of the cluster.
   * 
   * @example
   * offline
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authKeySecret: 'AuthKeySecret',
      clientCount: 'ClientCount',
      clusterName: 'ClusterName',
      installCommand: 'InstallCommand',
      ip: 'Ip',
      lastHeartTime: 'LastHeartTime',
      proxyCount: 'ProxyCount',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authKeySecret: 'string',
      clientCount: 'number',
      clusterName: 'string',
      installCommand: 'string',
      ip: 'string',
      lastHeartTime: 'number',
      proxyCount: 'number',
      remark: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridProxyClusterListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries displayed on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries displayed on each page in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 45
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
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

export class DescribeHybridProxyClusterListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of clusters.
   */
  clusterList?: DescribeHybridProxyClusterListResponseBodyClusterList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeHybridProxyClusterListResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * C1A36413-50B2-5B2F-843F-EB14C582713F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterList: 'ClusterList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterList: { 'type': 'array', 'itemType': DescribeHybridProxyClusterListResponseBodyClusterList },
      pageInfo: DescribeHybridProxyClusterListResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusterList)) {
      $dara.Model.validateArray(this.clusterList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

