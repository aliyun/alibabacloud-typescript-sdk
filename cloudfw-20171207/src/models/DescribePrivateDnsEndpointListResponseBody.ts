// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrivateDnsEndpointListResponseBodyAccessInstanceList extends $dara.Model {
  /**
   * @example
   * 123
   */
  accessInstanceId?: string;
  /**
   * @example
   * test
   */
  accessInstanceName?: string;
  /**
   * @example
   * 1379490574415****
   */
  aliUid?: number;
  /**
   * @example
   * 3
   */
  domainNameCount?: number;
  firewallType?: string[];
  /**
   * @example
   * 1715075765
   */
  gmtCreate?: number;
  /**
   * @example
   * tcp
   */
  ipProtocol?: number;
  /**
   * @example
   * 1844802493****
   */
  memberUid?: number;
  /**
   * @example
   * 443
   */
  port?: number;
  /**
   * @example
   * 1.1.1.1
   */
  primaryDns?: string;
  /**
   * @example
   * Custom
   */
  privateDnsType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @example
   * 1.1.1.2
   */
  standbyDns?: string;
  /**
   * @example
   * normal
   */
  status?: number;
  /**
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @example
   * vpc-2zelphbaourpun****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessInstanceId: 'AccessInstanceId',
      accessInstanceName: 'AccessInstanceName',
      aliUid: 'AliUid',
      domainNameCount: 'DomainNameCount',
      firewallType: 'FirewallType',
      gmtCreate: 'GmtCreate',
      ipProtocol: 'IpProtocol',
      memberUid: 'MemberUid',
      port: 'Port',
      primaryDns: 'PrimaryDns',
      privateDnsType: 'PrivateDnsType',
      regionNo: 'RegionNo',
      standbyDns: 'StandbyDns',
      status: 'Status',
      taskId: 'TaskId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInstanceId: 'string',
      accessInstanceName: 'string',
      aliUid: 'number',
      domainNameCount: 'number',
      firewallType: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'number',
      ipProtocol: 'number',
      memberUid: 'number',
      port: 'number',
      primaryDns: 'string',
      privateDnsType: 'string',
      regionNo: 'string',
      standbyDns: 'string',
      status: 'number',
      taskId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallType)) {
      $dara.Model.validateArray(this.firewallType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrivateDnsEndpointListResponseBody extends $dara.Model {
  accessInstanceList?: DescribePrivateDnsEndpointListResponseBodyAccessInstanceList[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090****
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessInstanceList: 'AccessInstanceList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInstanceList: { 'type': 'array', 'itemType': DescribePrivateDnsEndpointListResponseBodyAccessInstanceList },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessInstanceList)) {
      $dara.Model.validateArray(this.accessInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

