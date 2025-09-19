// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridProxyLinkedClientListResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The name of the server group.
   * 
   * @example
   * default
   */
  groupName?: string;
  /**
   * @remarks
   * The instance ID of the server.
   * 
   * @example
   * i-bp1a69mvjujbakxu****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * sql-test-0****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 8.210.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 172.25.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The name of the operating system.
   * 
   * @example
   * centos-xxx
   */
  os?: string;
  /**
   * @remarks
   * The name of the operating system for your asset.
   * 
   * @example
   * centos
   */
  osName?: string;
  /**
   * @remarks
   * The ID of the region in which the server resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region in which the server resides.
   * 
   * @example
   * cn-qingdao
   */
  regionName?: string;
  /**
   * @remarks
   * The status of the Security Center agent.
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The name of the tag added to the server.
   * 
   * @example
   * latest
   */
  tag?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 49e25e0f-bb51-4a5a-a1b3-13a4ddaa****
   */
  uuid?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * ALIYUN
   */
  vendorName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      os: 'Os',
      osName: 'OsName',
      regionId: 'RegionId',
      regionName: 'RegionName',
      status: 'Status',
      tag: 'Tag',
      uuid: 'Uuid',
      vendorName: 'VendorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      os: 'string',
      osName: 'string',
      regionId: 'string',
      regionName: 'string',
      status: 'string',
      tag: 'string',
      uuid: 'string',
      vendorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridProxyLinkedClientListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 10
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
   * 149
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

export class DescribeHybridProxyLinkedClientListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  list?: DescribeHybridProxyLinkedClientListResponseBodyList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeHybridProxyLinkedClientListResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B01B804F-947C-5623-B050-1C8FDFA796CF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeHybridProxyLinkedClientListResponseBodyList },
      pageInfo: DescribeHybridProxyLinkedClientListResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
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

