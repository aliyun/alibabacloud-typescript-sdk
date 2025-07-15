// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceClusterInfoResponseBodyInstanceClusterAttribute extends $dara.Model {
  /**
   * @remarks
   * The internal CIDR block of the user VPC that can be accessed by the cluster if the cluster consists of VPC integration instances.
   * 
   * @example
   * ["192.168.1.0/24","192.168.0.0/24"]
   */
  connectCidrBlocks?: string;
  /**
   * @remarks
   * The ID of the user VPC that is connected to the cluster if the cluster consists of VPC integration instances.
   * 
   * @example
   * vpc-p0w3kxxxxxxxxxxxxxxxx
   */
  connectVpcId?: string;
  /**
   * @remarks
   * Indicates whether outbound IPv6 traffic is supported.
   * 
   * @example
   * true
   */
  egressIpv6Enable?: boolean;
  /**
   * @remarks
   * The HTTPS security policy.
   * 
   * @example
   * HTTPS2_TLS1_0
   */
  httpsPolicies?: string;
  /**
   * @remarks
   * The ID of the IPv4 access control list (ACL).
   * 
   * @example
   * acl-t4n8i4rvvp70kcyuoXXXX
   */
  IPV4AclId?: string;
  /**
   * @remarks
   * The name of the IPv4 ACL.
   * 
   * @example
   * test-black
   */
  IPV4AclName?: string;
  /**
   * @remarks
   * Indicates whether IPv4 access control is enabled. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  IPV4AclStatus?: string;
  /**
   * @remarks
   * The type of the IPv4 ACL.
   * 
   * *   black: blacklist
   * *   white: whitelist
   * 
   * @example
   * black
   */
  IPV4AclType?: string;
  /**
   * @remarks
   * The ID of the IPv6 ACL.
   * 
   * @example
   * acl-t4nevzhwbpe7cup18XXXX
   */
  IPV6AclId?: string;
  /**
   * @remarks
   * The name of the IPv6 ACL.
   * 
   * @example
   * test
   */
  IPV6AclName?: string;
  /**
   * @remarks
   * Indicates whether IPv6 access control is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  IPV6AclStatus?: string;
  /**
   * @remarks
   * The type of the IPv6 ACL. Valid values:
   * 
   * *   black: blacklist
   * *   white: whitelist
   * 
   * @example
   * white
   */
  IPV6AclType?: string;
  /**
   * @remarks
   * The outbound public IP address.
   * 
   * @example
   * 39.106.XX.XX
   */
  internetEgressAddress?: string;
  /**
   * @remarks
   * The outbound private IP address.
   * 
   * @example
   * 100.104.XX.XX/26
   */
  intranetEgressAddress?: string;
  /**
   * @remarks
   * The custom CIDR block. The configured CIDR block is considered as a private block.
   * 
   * @example
   * 123.0.0.1
   */
  intranetSegments?: string;
  /**
   * @remarks
   * Indicates whether IPv6 traffic is supported.
   * 
   * @example
   * true
   */
  supportIpv6?: boolean;
  /**
   * @remarks
   * The ID of the client VPC.
   * 
   * @example
   * vpc-2zew2v4vcg78mXXXX
   */
  userVpcId?: string;
  /**
   * @remarks
   * The vSwitch of the client VPC.
   * 
   * @example
   * vsw-2zecr5r7ao44tslsXXXX
   */
  userVswitchId?: string;
  /**
   * @remarks
   * The VIPs of the cluster.
   * 
   * @example
   * VPC_INTERNET_IPV6
   */
  vipTypeList?: string;
  /**
   * @remarks
   * Indicates whether a virtual private cloud (VPC) domain name is enabled.
   */
  vpcIntranetEnable?: boolean;
  /**
   * @remarks
   * The ID of the account to which the VPC belongs.
   * 
   * @example
   * 165438596694XXXX
   */
  vpcOwnerId?: number;
  /**
   * @remarks
   * Indicates whether self-calling is enabled.
   * 
   * @example
   * false
   */
  vpcSlbIntranetEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      connectCidrBlocks: 'ConnectCidrBlocks',
      connectVpcId: 'ConnectVpcId',
      egressIpv6Enable: 'EgressIpv6Enable',
      httpsPolicies: 'HttpsPolicies',
      IPV4AclId: 'IPV4AclId',
      IPV4AclName: 'IPV4AclName',
      IPV4AclStatus: 'IPV4AclStatus',
      IPV4AclType: 'IPV4AclType',
      IPV6AclId: 'IPV6AclId',
      IPV6AclName: 'IPV6AclName',
      IPV6AclStatus: 'IPV6AclStatus',
      IPV6AclType: 'IPV6AclType',
      internetEgressAddress: 'InternetEgressAddress',
      intranetEgressAddress: 'IntranetEgressAddress',
      intranetSegments: 'IntranetSegments',
      supportIpv6: 'SupportIpv6',
      userVpcId: 'UserVpcId',
      userVswitchId: 'UserVswitchId',
      vipTypeList: 'VipTypeList',
      vpcIntranetEnable: 'VpcIntranetEnable',
      vpcOwnerId: 'VpcOwnerId',
      vpcSlbIntranetEnable: 'VpcSlbIntranetEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectCidrBlocks: 'string',
      connectVpcId: 'string',
      egressIpv6Enable: 'boolean',
      httpsPolicies: 'string',
      IPV4AclId: 'string',
      IPV4AclName: 'string',
      IPV4AclStatus: 'string',
      IPV4AclType: 'string',
      IPV6AclId: 'string',
      IPV6AclName: 'string',
      IPV6AclStatus: 'string',
      IPV6AclType: 'string',
      internetEgressAddress: 'string',
      intranetEgressAddress: 'string',
      intranetSegments: 'string',
      supportIpv6: 'boolean',
      userVpcId: 'string',
      userVswitchId: 'string',
      vipTypeList: 'string',
      vpcIntranetEnable: 'boolean',
      vpcOwnerId: 'number',
      vpcSlbIntranetEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceClusterInfoResponseBodyInstanceListInstance extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * Instance not found.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * apigateway-ht-04e41d95e9c1
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * tf-testacceu-central-1apigatewayinstance8752
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      instanceId: 'string',
      instanceName: 'string',
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

export class DescribeInstanceClusterInfoResponseBodyInstanceList extends $dara.Model {
  instance?: DescribeInstanceClusterInfoResponseBodyInstanceListInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeInstanceClusterInfoResponseBodyInstanceListInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceClusterInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2022-10-10T18:29:27
   */
  createdTime?: string;
  /**
   * @remarks
   * The cluster description, which can be up to 200 characters in length.
   * 
   * @example
   * v0.0.4
   */
  description?: string;
  /**
   * @remarks
   * The cluster details.
   */
  instanceClusterAttribute?: DescribeInstanceClusterInfoResponseBodyInstanceClusterAttribute;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * apigateway-ht-04e41d95e9c1
   */
  instanceClusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * test
   */
  instanceClusterName?: string;
  /**
   * @remarks
   * The cluster status.
   * 
   * @example
   * RUNNING
   */
  instanceClusterStatus?: string;
  /**
   * @remarks
   * The cluster type.
   * 
   * @example
   * normal
   */
  instanceClusterType?: string;
  /**
   * @remarks
   * The cluster version.
   * 
   * @example
   * 3.5.3.856
   */
  instanceClusterVersion?: string;
  /**
   * @remarks
   * The dedicated instances contained in the cluster.
   */
  instanceList?: DescribeInstanceClusterInfoResponseBodyInstanceList;
  /**
   * @remarks
   * The time when the cluster was last modified.
   * 
   * @example
   * 2023-06-19 10:40:29 +0800
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ015
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      instanceClusterAttribute: 'InstanceClusterAttribute',
      instanceClusterId: 'InstanceClusterId',
      instanceClusterName: 'InstanceClusterName',
      instanceClusterStatus: 'InstanceClusterStatus',
      instanceClusterType: 'InstanceClusterType',
      instanceClusterVersion: 'InstanceClusterVersion',
      instanceList: 'InstanceList',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      instanceClusterAttribute: DescribeInstanceClusterInfoResponseBodyInstanceClusterAttribute,
      instanceClusterId: 'string',
      instanceClusterName: 'string',
      instanceClusterStatus: 'string',
      instanceClusterType: 'string',
      instanceClusterVersion: 'string',
      instanceList: DescribeInstanceClusterInfoResponseBodyInstanceList,
      modifiedTime: 'string',
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceClusterAttribute && typeof (this.instanceClusterAttribute as any).validate === 'function') {
      (this.instanceClusterAttribute as any).validate();
    }
    if(this.instanceList && typeof (this.instanceList as any).validate === 'function') {
      (this.instanceList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

