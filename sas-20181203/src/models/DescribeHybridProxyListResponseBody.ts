// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridProxyListResponseBodyPageInfo extends $dara.Model {
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
   * 69
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

export class DescribeHybridProxyListResponseBodyProxyList extends $dara.Model {
  /**
   * @remarks
   * The number of servers that are connected to the proxy instance.
   * 
   * @example
   * 10
   */
  clientCount?: number;
  /**
   * @remarks
   * The version of the proxy instance.
   * 
   * @example
   * proxy_01_05
   */
  currentVersion?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-uf61q03boqhhmeai1XXX
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * dev
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 47.76.XXX.XXX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 172.23.XXX.XXX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The UUID of the proxy node.
   * 
   * @example
   * inet-proxy-3bb11fad-37d6-4aee-9c37-b0ad1612a18e
   */
  proxyUuid?: string;
  /**
   * @remarks
   * The status of the proxy server. Valid values:
   * 
   * *   **online**
   * *   **offline**
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The UUID of the server that is connected to the proxy instance.
   * 
   * @example
   * 59a9d158-b2f0-4766-a893-ae67b943XXXX
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clientCount: 'ClientCount',
      currentVersion: 'CurrentVersion',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      proxyUuid: 'ProxyUuid',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientCount: 'number',
      currentVersion: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      proxyUuid: 'string',
      status: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridProxyListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeHybridProxyListResponseBodyPageInfo;
  /**
   * @remarks
   * The information about the proxy clusters.
   */
  proxyList?: DescribeHybridProxyListResponseBodyProxyList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75801E5D-E2EB-5C1D-B65D-2F7D2B00EF93
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      proxyList: 'ProxyList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeHybridProxyListResponseBodyPageInfo,
      proxyList: { 'type': 'array', 'itemType': DescribeHybridProxyListResponseBodyProxyList },
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.proxyList)) {
      $dara.Model.validateArray(this.proxyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

