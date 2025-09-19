// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridProxyClusterListResponseBodyClusterList extends $dara.Model {
  /**
   * @remarks
   * The ID of the credential that is used for cluster authentication.
   * 
   * @example
   * test
   */
  authKey?: string;
  /**
   * @remarks
   * The key of the credential that is used for cluster authentication.
   * 
   * @example
   * test
   */
  authKeySecret?: string;
  /**
   * @remarks
   * The number of servers that are connected to the proxy cluster.
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
   * The installation command for the node of the proxy cluster.
   * 
   * @example
   * test
   */
  installCommand?: string;
  /**
   * @remarks
   * The endpoint of the cluster. An IP address or a domain name is specified.
   * 
   * @example
   * 114.115.XXX.XXX
   */
  ip?: string;
  /**
   * @remarks
   * The timestamp when the cluster last sent a heartbeat message. Unit: milliseconds.
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
   * The description of the proxy cluster.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The status of the cluster.
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
   * The number of entries on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * The proxy clusters.
   */
  clusterList?: DescribeHybridProxyClusterListResponseBodyClusterList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeHybridProxyClusterListResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
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

