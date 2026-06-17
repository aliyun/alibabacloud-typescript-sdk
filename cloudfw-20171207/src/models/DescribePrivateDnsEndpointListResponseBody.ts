// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrivateDnsEndpointListResponseBodyAccessInstanceList extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 123
   */
  accessInstanceId?: string;
  /**
   * @remarks
   * The name of the private instance.
   * 
   * @example
   * test
   */
  accessInstanceName?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that owns the Cloud Firewall.
   * 
   * @example
   * 1379490574415****
   */
  aliUid?: number;
  /**
   * @remarks
   * The number of domain names.
   * 
   * @example
   * 3
   */
  domainNameCount?: number;
  /**
   * @remarks
   * The type of Cloud Firewall. Valid values:
   * 
   * - **internet**
   * 
   * - **vpc**
   * 
   * - **nat**
   */
  firewallType?: string[];
  /**
   * @remarks
   * The time when the instance was created. The value is a UNIX timestamp measured in seconds.
   * 
   * @example
   * 1715075765
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The IP protocol. Valid values:
   * 
   * - **TCP**
   * 
   * - **UDP**
   * 
   * @example
   * tcp
   */
  ipProtocol?: number;
  /**
   * @remarks
   * The UID of the Cloud Firewall member account.
   * 
   * @example
   * 1844802493****
   */
  memberUid?: number;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The primary DNS server.
   * 
   * @example
   * 1.1.1.1
   */
  primaryDns?: string;
  /**
   * @remarks
   * The type of private DNS. Valid values:
   * 
   * - **PrivateZone**
   * 
   * - **Custom** (default)
   * 
   * @example
   * Custom
   */
  privateDnsType?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The standby DNS server.
   * 
   * @example
   * 1.1.1.2
   */
  standbyDns?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * - **creating**: The instance is being created.
   * 
   * - **deleting**: The instance is being deleted.
   * 
   * - **normal**: The instance is running as expected.
   * 
   * - **updating**: The instance is being updated.
   * 
   * - **abnormal**: The instance is in an abnormal state.
   * 
   * @example
   * normal
   */
  status?: number;
  /**
   * @remarks
   * The unique ID of the task.
   * 
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
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
  /**
   * @remarks
   * A list of private instances.
   */
  accessInstanceList?: DescribePrivateDnsEndpointListResponseBodyAccessInstanceList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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

