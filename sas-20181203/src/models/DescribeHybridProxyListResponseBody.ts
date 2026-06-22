// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridProxyListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page in a paged query.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The number of the page to return in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries returned on each page in a paged query.
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
   * The number of Security Center agents connected to the proxy instance.
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
   * The instance ID of the asset.
   * 
   * @example
   * i-uf61q03boqhhmeai1XXX
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the asset instance.
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
   * The unique key that identifies the proxy node.
   * 
   * @example
   * inet-proxy-3bb11fad-37d6-4aee-9c37-b0ad1612a18e
   */
  proxyUuid?: string;
  /**
   * @remarks
   * The running status of the proxy machine. Valid values:
   * 
   * - **online**: online
   * - **offline**: offline.
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The UUID of the Security Center agent deployed on the proxy instance.
   * 
   * @example
   * 59a9d158-b2f0-4766-a893-ae67b9432721
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
   * The proxy cluster list.
   */
  proxyList?: DescribeHybridProxyListResponseBodyProxyList[];
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
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

