// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAddressBookRequest extends $tea.Model {
  /**
   * @remarks
   * The addresses that you want to add to the address book. Separate multiple addresses with commas (,).
   * 
   * >  If you set GroupType to `ip`, `port`, or `domain`, you must specify the AddressList parameter.
   * 
   * *   If you set GroupType to `ip`, you must add IP addresses to the address book. Example: 192.0.XX.XX/32, 192.0.XX.XX/24.
   * *   If you set GroupType to `port`, you must add port numbers or port ranges to the address book. Example: 80, 100/200.
   * *   If you set GroupType to `domain`, you must add domain names to the address book. Example: example.com, aliyundoc.com.
   * 
   * @example
   * 192.0.XX.XX/32, 192.0.XX.XX/24
   */
  addressList?: string;
  /**
   * @remarks
   * Specifies whether to automatically add public IP addresses of ECS instances to the address book if the instances match the specified tags. Valid values:
   * 
   * *   **1**: yes
   * *   **0** (default): no
   * 
   * @example
   * 1
   */
  autoAddTagEcs?: string;
  /**
   * @remarks
   * The description of the address book.
   * 
   * This parameter is required.
   * 
   * @example
   * sz-001
   */
  description?: string;
  /**
   * @remarks
   * The name of the address book.
   * 
   * This parameter is required.
   * 
   * @example
   * sz-001
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the address book. Valid values:
   * 
   * *   **ip**: IP address book
   * *   **domain**: domain address book
   * *   **port**: port address book
   * *   **tag**: ECS tag-based address book
   * 
   * This parameter is required.
   * 
   * @example
   * ip
   */
  groupType?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ECS tags that you want to match.
   */
  tagList?: AddAddressBookRequestTagList[];
  /**
   * @remarks
   * The logical relation among the ECS tags that you want to match. Valid values:
   * 
   * *   **and** (default): Only the public IP addresses of ECS instances that match all the specified tags can be added to the address book.
   * *   **or**: The public IP addresses of ECS instances that match one of the specified tags can be added to the address book.
   * 
   * @example
   * and
   */
  tagRelation?: string;
  static names(): { [key: string]: string } {
    return {
      addressList: 'AddressList',
      autoAddTagEcs: 'AutoAddTagEcs',
      description: 'Description',
      groupName: 'GroupName',
      groupType: 'GroupType',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      tagList: 'TagList',
      tagRelation: 'TagRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressList: 'string',
      autoAddTagEcs: 'string',
      description: 'string',
      groupName: 'string',
      groupType: 'string',
      lang: 'string',
      sourceIp: 'string',
      tagList: { 'type': 'array', 'itemType': AddAddressBookRequestTagList },
      tagRelation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAddressBookResponseBody extends $tea.Model {
  /**
   * @remarks
   * The UUID of the returned address book.
   * 
   * @example
   * f04ac7ce-628b-4cb7-be61-310222b7****
   */
  groupUuid?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupUuid: 'GroupUuid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupUuid: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAddressBookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddAddressBookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddAddressBookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddControlPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic. Valid values:
   * 
   * *   **accept**: allows the traffic.
   * *   **drop**: denies the traffic.
   * *   **log**: monitors the traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The application type supported by the access control policy. Valid values:
   * 
   * *   **FTP**
   * *   **HTTP**
   * *   **HTTPS**
   * *   **Memcache**
   * *   **MongoDB**
   * *   **MQTT**
   * *   **MySQL**
   * *   **RDP**
   * *   **Redis**
   * *   **SMTP**
   * *   **SMTPS**
   * *   **SSH**
   * *   **SSL_No_Cert**
   * *   **SSL**
   * *   **VNC**
   * *   **ANY**
   * 
   * > The value of this parameter is based on the value of Proto. If Proto is set to TCP, you can set ApplicationName to any valid value. If Proto is set to UDP, ICMP, or ANY, you can set ApplicationName only to ANY. You must specify at least one of the ApplicationNameList and ApplicationName parameters.
   * 
   * @example
   * ANY
   */
  applicationName?: string;
  /**
   * @remarks
   * The application types supported by the access control policy.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * Allows traffic
   */
  description?: string;
  /**
   * @remarks
   * The destination port in the access control policy. Valid values:
   * 
   * *   If Proto is set to ICMP, DestPort is automatically left empty.
   * 
   * > If Proto is set to ICMP, access control does not take effect on the destination port.
   * 
   * *   If Proto is set to TCP, UDP, or ANY and DestPortType is set to group, DestPort is empty.
   * 
   * > If DestPortType is set to group, you do not need to specify the destination port number. All ports on which the access control policy takes effect are included in the destination port address book.
   * 
   * *   If Proto is set to TCP, UDP, or ANY and DestPortType is set to port, the value of DestPort is the destination port number.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book in the access control policy.
   * 
   * > If DestPortType is set to group, you must specify the name of the destination port address book.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The type of the destination port in the access control policy.
   * 
   * Valid values:
   * 
   * *   **port**: port
   * *   **group**: port address book
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy.
   * 
   * Valid values:
   * 
   * *   If DestinationType is set to net, the value of this parameter is a CIDR block.
   * 
   *     Example: 1.2.XX.XX/24
   * 
   * *   If DestinationType is set to group, the value of this parameter is an address book name.
   * 
   *     Example: db_group
   * 
   * *   If DestinationType is set to domain, the value of this parameter is a domain name.
   * 
   *     Example: \\*.aliyuncs.com
   * 
   * *   If DestinationType is set to location, the value of this parameter is a location.
   * 
   *     Example: ["BJ11", "ZB"]
   * 
   * This parameter is required.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
   * 
   * *   **net**: CIDR block
   * *   **group**: address book
   * *   **domain**: domain name
   * *   **location**: location
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies. Valid values:
   * 
   * *   **in**: inbound traffic
   * *   **out**: outbound traffic
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The domain name resolution method of the access control policy. Valid values:
   * 
   * * **FQDN**: fully qualified domain name (FQDN)-based resolution
   * * **DNS**: DNS-based dynamic resolution
   * * **FQDN_AND_DNS**: FQDN and DNS-based dynamic resolution
   * 
   * @example
   * FQDN
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the start time.
   * 
   * >  If you set RepeatType to Permanent, leave this parameter empty. If you set RepeatType to None, Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The IP version supported by the access control policy.
   * 
   * Valid values:
   * 
   * *   **4**: IPv4
   * *   **6**: IPv6
   * 
   * @example
   * 6
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The priority of the access control policy. The priority value starts from 1. A smaller priority value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  newOrder?: string;
  /**
   * @remarks
   * The protocol type supported by the access control policy. Valid values:
   * 
   * *   **ANY**
   * *   **TCP**
   * *   **UDP**
   * *   **ICMP**
   * 
   * This parameter is required.
   * 
   * @example
   * ANY
   */
  proto?: string;
  /**
   * @remarks
   * Specifies whether to enable the access control policy. By default, an access control policy is enabled after the policy is created. Valid values:
   * 
   * *   **true**: enables the access control policy.
   * *   **false**: disables the access control policy.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of a week or of a month on which the access control policy takes effect.
   * 
   * *   If you set RepeatType to `Permanent`, `None`, or `Daily`, leave this parameter empty. Example: [].
   * *   If you set RepeatType to Weekly, you must specify this parameter. Example: [0, 6].
   * 
   * >  If you set RepeatType to Weekly, the fields in the value of this parameter cannot be repeated.
   * 
   * *   If you set RepeatType to `Monthly`, you must specify this parameter. Example: [1, 31].
   * 
   * >  If you set RepeatType to Monthly, the fields in the value of this parameter cannot be repeated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The point in time when the recurrence ends. Example: 23:30. The end time must be on the hour or on the half hour, and at least 30 minutes later than the start time.
   * 
   * >  If you set RepeatType to Permanent or None, leave this parameter empty. If you set RepeatType to Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The point in time when the recurrence starts. Example: 08:00. The start time must be on the hour or on the half hour, and at least 30 minutes earlier than the end time.
   * 
   * >  If you set RepeatType to Permanent or None, leave this parameter empty. If you set RepeatType to Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the access control policy to take effect. Valid values:
   * 
   * *   **Permanent** (default): The policy always takes effect.
   * *   **None**: The policy takes effect for only once.
   * *   **Daily**: The policy takes effect on a daily basis.
   * *   **Weekly**: The policy takes effect on a weekly basis.
   * *   **Monthly**: The policy takes effect on a monthly basis.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Valid values:
   * 
   * *   If SourceType is set to net, the value of this parameter is a CIDR block.
   * 
   *     Example: 1.1.XX.XX/24
   * 
   * *   If SourceType is set to group, the value of this parameter is an address book name.
   * 
   *     Example: db_group
   * 
   * *   If SourceType is set to location, the value of this parameter is a location.
   * 
   *     Example: ["BJ11", "ZB"]
   * 
   * This parameter is required.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * *   **net**: CIDR block
   * *   **group**: address book
   * *   **location**: location
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the end time.
   * 
   * >  If you set RepeatType to Permanent, leave this parameter empty. If you set RepeatType to None, Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 1694761200
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      applicationName: 'ApplicationName',
      applicationNameList: 'ApplicationNameList',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationType: 'DestinationType',
      direction: 'Direction',
      domainResolveType: 'DomainResolveType',
      endTime: 'EndTime',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      newOrder: 'NewOrder',
      proto: 'Proto',
      release: 'Release',
      repeatDays: 'RepeatDays',
      repeatEndTime: 'RepeatEndTime',
      repeatStartTime: 'RepeatStartTime',
      repeatType: 'RepeatType',
      source: 'Source',
      sourceIp: 'SourceIp',
      sourceType: 'SourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      applicationName: 'string',
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortType: 'string',
      destination: 'string',
      destinationType: 'string',
      direction: 'string',
      domainResolveType: 'string',
      endTime: 'number',
      ipVersion: 'string',
      lang: 'string',
      newOrder: 'string',
      proto: 'string',
      release: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'number' },
      repeatEndTime: 'string',
      repeatStartTime: 'string',
      repeatType: 'string',
      source: 'string',
      sourceIp: 'string',
      sourceType: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddControlPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the access control policy that is created on the Internet firewall.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221ad84c
   */
  aclUuid?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddControlPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddInstanceMembersRequest extends $tea.Model {
  /**
   * @remarks
   * The members that you want to add to Cloud Firewall.
   * 
   * This parameter is required.
   */
  members?: AddInstanceMembersRequestMembers[];
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': AddInstanceMembersRequestMembers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddInstanceMembersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B40A54DF-C142-44F7-8441-B31C1EADB36E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddInstanceMembersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddInstanceMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddInstanceMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCopyVpcFirewallControlPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the policy group of the source VPC firewall. Valid values:
   * 
   * *   If the VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a Cloud Enterprise Network (CEN) instance, the value of this parameter is the ID of the CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance.
   * *   If the VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit, the value of this parameter is the instance ID of the VPC firewall.
   * 
   * >  You can call the [DescribeVpcFirewallAclGroupList](https://help.aliyun.com/document_detail/159760.html) operation to query the IDs of policy groups.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-a42bbb7b887148c9****
   */
  sourceVpcFirewallId?: string;
  /**
   * @remarks
   * The ID of the policy group of the destination VPC firewall. Valid values:
   * 
   * *   If the VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a CEN instance, the value of this parameter is the ID of the CEN instance. The network instance can be a VPC, a VBR, or a CCN instance.
   * *   If the VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit, the value of this parameter is the instance ID of the VPC firewall.
   * 
   * >  You can call the [DescribeVpcFirewallAclGroupList](https://help.aliyun.com/document_detail/159760.html) operation to query the IDs of policy groups.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-e37d3a04cf79446a****
   */
  targetVpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      sourceVpcFirewallId: 'SourceVpcFirewallId',
      targetVpcFirewallId: 'TargetVpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      sourceVpcFirewallId: 'string',
      targetVpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCopyVpcFirewallControlPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125k6j3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCopyVpcFirewallControlPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchCopyVpcFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchCopyVpcFirewallControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteVpcFirewallControlPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The UUIDs of access control policies.
   * 
   * This parameter is required.
   */
  aclUuidList?: string[];
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuidList: 'AclUuidList',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuidList: { 'type': 'array', 'itemType': 'string' },
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteVpcFirewallControlPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B2841452-CB8D-4F7D-B247-38E1CF7334F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteVpcFirewallControlPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeleteVpcFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchDeleteVpcFirewallControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDownloadTaskRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the content within the response.
   * 
   * Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The query condition of the download task.
   * 
   * @example
   * {\\"SearchItem\\":\\"\\",\\"UserType\\":\\"buy\\",\\"IpVersion\\":\\"4\\"}
   */
  taskData?: string;
  /**
   * @remarks
   * The time zone of the time information in the downloaded file. The value must be an identifier of a time zone in the Internet Assigned Numbers Authority (IANA) database. The default value is Asia/Shanghai, which indicates UTC+8.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      taskData: 'TaskData',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      taskData: 'string',
      timeZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDownloadTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E7F333E0-7B70-54DA-A307-4B2B49DEE923
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * finish: The task finished. You can query the task to obtain the download link of the file.
   * 
   * start: The task start.
   * 
   * error: An error occurred.
   * 
   * expire: The task file is invalid and cannot be downloaded.
   * 
   * @example
   * start
   */
  status?: string;
  /**
   * @remarks
   * The unique ID of the task.
   * 
   * @example
   * 132
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the file download task.
   * 
   * @example
   * Internet Boundary Firewall Assets - IPv4
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
      taskId: 'number',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDownloadTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDownloadTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDownloadTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatFirewallControlPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic.
   * 
   * Valid values:
   * 
   * *   **accept**: allows the traffic.
   * *   **drop**: denies the traffic.
   * *   **log**: monitors the traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * log
   */
  aclAction?: string;
  /**
   * @remarks
   * The application types supported by the access control policy.
   * 
   * This parameter is required.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * allow
   */
  description?: string;
  /**
   * @remarks
   * The destination port in the access control policy. Valid values:
   * 
   * *   If Proto is set to ICMP, DestPort is automatically left empty.
   * 
   * > If Proto is set to ICMP, access control does not take effect on the destination port.
   * 
   * *   If Proto is set to TCP, UDP, or ANY and DestPortType is set to group, DestPort is empty.
   * 
   * > If DestPortType is set to group, you do not need to specify the destination port number. All ports on which the access control policy takes effect are included in the destination port address book.
   * 
   * *   If Proto is set to TCP, UDP, or ANY and DestPortType is set to port, the value of DestPort is the destination port number.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book in the access control policy.
   * 
   * > If DestPortType is set to group, you must specify the name of the destination port address book.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The type of the destination port in the access control policy. Valid values:
   * 
   * *   **port**: port
   * *   **group**: port address book
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy.
   * 
   * Valid values:
   * 
   * *   If DestinationType is set to net, the value of this parameter is a CIDR block.
   * 
   *     Example: 1.2.XX.XX/24
   * 
   * *   If DestinationType is set to group, the value of this parameter is an address book.
   * 
   *     Example: db_group
   * 
   * *   If DestinationType is set to domain, the value of this parameter is a domain name.
   * 
   *     Example: \\*.aliyuncs.com
   * 
   * *   If DestinationType is set to location, the value of this parameter is a location.
   * 
   *     Example: ["BJ11", "ZB"]
   * 
   * This parameter is required.
   * 
   * @example
   * XX.XX.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy.
   * 
   * Valid values:
   * 
   * *   **net**: CIDR block
   * *   **group**: address book
   * *   **domain**: domain name
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies. Valid values:
   * 
   * *   **out**: outbound traffic
   * 
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The domain name resolution method of the access control policy. Valid values:
   * 
   * *   **0**: fully qualified domain name (FQDN)-based resolution
   * *   **1**: Domain Name System (DNS)-based dynamic resolution
   * *   **2**: FQDN and DNS-based dynamic resolution
   * 
   * @example
   * 0
   */
  domainResolveType?: number;
  /**
   * @remarks
   * The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
   * 
   * >  If RepeatType is set to Permanent, EndTime is left empty. If RepeatType is set to None, Daily, Weekly, or Monthly, this parameter must be specified.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The IP version supported by the access control policy. Valid values:
   * 
   * *   **4**: IPv4 (default)
   * 
   * @example
   * 4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the content within the response.
   * 
   * Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngx-xxxxxxx
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The priority of the access control policy. The priority value starts from 1. A small priority value indicates a high priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  newOrder?: string;
  /**
   * @remarks
   * The protocol type in the access control policy.
   * 
   * Valid values:
   * 
   * *   ANY: all types of protocols
   * *   TCP
   * *   UDP
   * *   ICMP
   * 
   * This parameter is required.
   * 
   * @example
   * ANY
   */
  proto?: string;
  /**
   * @remarks
   * Specifies whether to enable the access control policy. By default, an access control policy is enabled after it is created. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of a week or of a month on which the access control policy takes effect.
   * 
   * *   If RepeatType is set to `Permanent`, `None`, or `Daily`, RepeatDays is left empty. Example: [].
   * *   If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6].
   * 
   * >  If RepeatType is set to Weekly, the fields in the value of RepeatDays cannot be repeated.
   * 
   * *   If RepeatType is set to `Monthly`, RepeatDays must be specified. Example: [1, 31].
   * 
   * >  If RepeatType is set to Monthly, the fields in the value of RepeatDays cannot be repeated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
   * 
   * >  If RepeatType is set to Permanent or None, RepeatEndTime is left empty. If RepeatType is set to Daily, Weekly, or Monthly, this parameter must be specified.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
   * 
   * >  If RepeatType is set to Permanent or None, RepeatStartTime is left empty. If RepeatType is set to Daily, Weekly, or Monthly, this parameter must be specified.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the access control policy to take effect. Valid values:
   * 
   * *   **Permanent** (default): The policy always takes effect.
   * *   **None**: The policy takes effect for only once.
   * *   **Daily**: The policy takes effect on a daily basis.
   * *   **Weekly**: The policy takes effect on a weekly basis.
   * *   **Monthly**: The policy takes effect on a monthly basis.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy.
   * 
   * Valid values:
   * 
   * *   If **SourceType** is set to `net`, the value of Source is a CIDR block.
   * 
   *     Example: 10.2.4.0/24
   * 
   * *   If **SourceType** is set to `group`, the value of this parameter must be an address book name.
   * 
   *     Example: db_group
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.25/32
   */
  source?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy.
   * 
   * Valid values:
   * 
   * *   **net**: source CIDR block
   * *   **group**: source address book
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
   * 
   * >  If RepeatType is set to Permanent, StartTime is left empty. If RepeatType is set to None, Daily, Weekly, or Monthly, this parameter must be specified.
   * 
   * @example
   * 1694761200
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      applicationNameList: 'ApplicationNameList',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationType: 'DestinationType',
      direction: 'Direction',
      domainResolveType: 'DomainResolveType',
      endTime: 'EndTime',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
      newOrder: 'NewOrder',
      proto: 'Proto',
      release: 'Release',
      repeatDays: 'RepeatDays',
      repeatEndTime: 'RepeatEndTime',
      repeatStartTime: 'RepeatStartTime',
      repeatType: 'RepeatType',
      source: 'Source',
      sourceType: 'SourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortType: 'string',
      destination: 'string',
      destinationType: 'string',
      direction: 'string',
      domainResolveType: 'number',
      endTime: 'number',
      ipVersion: 'string',
      lang: 'string',
      natGatewayId: 'string',
      newOrder: 'string',
      proto: 'string',
      release: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'number' },
      repeatEndTime: 'string',
      repeatStartTime: 'string',
      repeatType: 'string',
      source: 'string',
      sourceType: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatFirewallControlPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The unique ID of the access control policy.
   * 
   * >  To modify an access control policy, you must specify the unique ID of the policy. You can call the DescribeNatFirewallControlPolicy operation to obtain the ID.
   * 
   * @example
   * 6504d2fb-ab36-49c3-92a6-822a56549783
   */
  aclUuid?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0DC783F1-B3A7-578D-8A63-687CC9B82C0A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatFirewallControlPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNatFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNatFirewallControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityProxyRequest extends $tea.Model {
  /**
   * @example
   * close
   */
  firewallSwitch?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ngw-bp1okz6k7s4n4mnk5f1g3
   */
  natGatewayId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  natRouteEntryList?: CreateSecurityProxyRequestNatRouteEntryList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nat-idmp-fir
   */
  proxyName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @example
   * 0
   */
  strictMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-uf6b5lyul0xfgv74i01ph
   */
  vpcId?: string;
  /**
   * @example
   * true
   */
  vswitchAuto?: string;
  /**
   * @example
   * 0.0.0.0/0
   */
  vswitchCidr?: string;
  /**
   * @example
   * vsw-bp1sqg9wms9w9y1uxcs1x
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallSwitch: 'FirewallSwitch',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
      natRouteEntryList: 'NatRouteEntryList',
      proxyName: 'ProxyName',
      regionNo: 'RegionNo',
      strictMode: 'StrictMode',
      vpcId: 'VpcId',
      vswitchAuto: 'VswitchAuto',
      vswitchCidr: 'VswitchCidr',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallSwitch: 'string',
      lang: 'string',
      natGatewayId: 'string',
      natRouteEntryList: { 'type': 'array', 'itemType': CreateSecurityProxyRequestNatRouteEntryList },
      proxyName: 'string',
      regionNo: 'string',
      strictMode: 'number',
      vpcId: 'string',
      vswitchAuto: 'string',
      vswitchCidr: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityProxyResponseBody extends $tea.Model {
  /**
   * @example
   * proxy-nat97ac4d7cc3834a5daf40
   */
  proxyId?: string;
  /**
   * @example
   * 15FCCC52-1E23-57AE-B5EF-3E00A3DC3CAB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      proxyId: 'ProxyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityProxyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSecurityProxyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSecurityProxyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlsLogDispatchRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID of the Simple Log Service project.
   * 
   * @example
   * ap-southeast-1
   */
  slsRegionId?: string;
  /**
   * @remarks
   * The log retention period. Unit: days.
   * 
   * @example
   * 20
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      slsRegionId: 'SlsRegionId',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsRegionId: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlsLogDispatchResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 850A84D6************00090125EEB1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlsLogDispatchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSlsLogDispatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSlsLogDispatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrFirewallV2Request extends $tea.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * @example
   * cen-4xbjup276au29r****
   */
  cenId?: string;
  /**
   * @remarks
   * The description of the firewall.
   * 
   * @example
   * vfw-sz
   */
  firewallDescription?: string;
  /**
   * @remarks
   * The name of the firewall.
   * 
   * @example
   * cfw_test2
   */
  firewallName?: string;
  /**
   * @remarks
   * The subnet CIDR block of the VPC in which the ENI of the firewall is stored in automatic mode.
   * 
   * @example
   * 10.0.1.0/24
   */
  firewallSubnetCidr?: string;
  /**
   * @remarks
   * The CIDR block that is allocated to the VPC created for the VPC firewall in automatic mode.
   * 
   * @example
   * 10.0.0.0/16
   */
  firewallVpcCidr?: string;
  /**
   * @remarks
   * The ID of the VPC in which the ENI associated with the VPC firewall is created in manual mode.
   * 
   * @example
   * vpc-wz9r5qvryn0lg3atb****
   */
  firewallVpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch that is used to create the ENI in manual mode.
   * 
   * @example
   * vsw-uf6ydz3vqj77mr5l6****
   */
  firewallVswitchId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region ID of the route router.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The routing mode of the VPC firewall. Valid values:
   * 
   * *   **managed**: automatic mode
   * *   **manual**: manual mode
   * 
   * @example
   * managed
   */
  routeMode?: string;
  /**
   * @remarks
   * The primary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
   * 
   * @example
   * 10.0.3.0/24
   */
  trAttachmentMasterCidr?: string;
  /**
   * @remarks
   * The primary zone for the vSwitch.
   * 
   * @example
   * cn-chengdu-a
   */
  trAttachmentMasterZone?: string;
  /**
   * @remarks
   * The secondary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
   * 
   * @example
   * 10.0.0.16/28
   */
  trAttachmentSlaveCidr?: string;
  /**
   * @remarks
   * The secondary zone for the vSwitch.
   * 
   * @example
   * cn-chengdu-b
   */
  trAttachmentSlaveZone?: string;
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-m5etmb2q7e0mxcur****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      firewallDescription: 'FirewallDescription',
      firewallName: 'FirewallName',
      firewallSubnetCidr: 'FirewallSubnetCidr',
      firewallVpcCidr: 'FirewallVpcCidr',
      firewallVpcId: 'FirewallVpcId',
      firewallVswitchId: 'FirewallVswitchId',
      lang: 'Lang',
      regionNo: 'RegionNo',
      routeMode: 'RouteMode',
      trAttachmentMasterCidr: 'TrAttachmentMasterCidr',
      trAttachmentMasterZone: 'TrAttachmentMasterZone',
      trAttachmentSlaveCidr: 'TrAttachmentSlaveCidr',
      trAttachmentSlaveZone: 'TrAttachmentSlaveZone',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      firewallDescription: 'string',
      firewallName: 'string',
      firewallSubnetCidr: 'string',
      firewallVpcCidr: 'string',
      firewallVpcId: 'string',
      firewallVswitchId: 'string',
      lang: 'string',
      regionNo: 'string',
      routeMode: 'string',
      trAttachmentMasterCidr: 'string',
      trAttachmentMasterZone: 'string',
      trAttachmentSlaveCidr: 'string',
      trAttachmentSlaveZone: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrFirewallV2ResponseBody extends $tea.Model {
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-37e22bf0d9b34870****
   */
  firewallId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 822B9125-6E1A-551C-8EAF-6E7AE7444B00
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallId: 'FirewallId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrFirewallV2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTrFirewallV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTrFirewallV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrFirewallV2RoutePolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The secondary traffic redirection instances.
   */
  destCandidateList?: CreateTrFirewallV2RoutePolicyRequestDestCandidateList[];
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-f8ce36689b224f77****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The description of the traffic redirection instance.
   * 
   * @example
   * test
   */
  policyDescription?: string;
  /**
   * @remarks
   * The name of the traffic redirection instance.
   * 
   * @example
   * TEST_VPC_FW
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the traffic redirection scenario of the VPC firewall. Valid values:
   * 
   * *   **fullmesh**: interconnected instances
   * *   **one_to_one**: instance to instance
   * *   **end_to_end**: instance to instances
   * 
   * @example
   * fullmesh
   */
  policyType?: string;
  /**
   * @remarks
   * The primary traffic redirection instances.
   */
  srcCandidateList?: CreateTrFirewallV2RoutePolicyRequestSrcCandidateList[];
  static names(): { [key: string]: string } {
    return {
      destCandidateList: 'DestCandidateList',
      firewallId: 'FirewallId',
      lang: 'Lang',
      policyDescription: 'PolicyDescription',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      srcCandidateList: 'SrcCandidateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCandidateList: { 'type': 'array', 'itemType': CreateTrFirewallV2RoutePolicyRequestDestCandidateList },
      firewallId: 'string',
      lang: 'string',
      policyDescription: 'string',
      policyName: 'string',
      policyType: 'string',
      srcCandidateList: { 'type': 'array', 'itemType': CreateTrFirewallV2RoutePolicyRequestSrcCandidateList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrFirewallV2RoutePolicyShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The secondary traffic redirection instances.
   */
  destCandidateListShrink?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-f8ce36689b224f77****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The description of the traffic redirection instance.
   * 
   * @example
   * test
   */
  policyDescription?: string;
  /**
   * @remarks
   * The name of the traffic redirection instance.
   * 
   * @example
   * TEST_VPC_FW
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the traffic redirection scenario of the VPC firewall. Valid values:
   * 
   * *   **fullmesh**: interconnected instances
   * *   **one_to_one**: instance to instance
   * *   **end_to_end**: instance to instances
   * 
   * @example
   * fullmesh
   */
  policyType?: string;
  /**
   * @remarks
   * The primary traffic redirection instances.
   */
  srcCandidateListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      destCandidateListShrink: 'DestCandidateList',
      firewallId: 'FirewallId',
      lang: 'Lang',
      policyDescription: 'PolicyDescription',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      srcCandidateListShrink: 'SrcCandidateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCandidateListShrink: 'string',
      firewallId: 'string',
      lang: 'string',
      policyDescription: 'string',
      policyName: 'string',
      policyType: 'string',
      srcCandidateListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrFirewallV2RoutePolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C91D68BA-A0BE-51BF-A0F1-1CB5C57FE58D
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * policy-8ebed27e13e14ce2****
   */
  trFirewallRoutePolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trFirewallRoutePolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrFirewallV2RoutePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTrFirewallV2RoutePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTrFirewallV2RoutePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallCenConfigureRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-x5jayxou71ad73****
   */
  cenId?: string;
  /**
   * @remarks
   * Specifies whether to enable the VPC firewall. Valid values:
   * 
   * *   **open**: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
   * *   **close**: After you create the VPC firewall, the VPC firewall is disabled. You can call the [ModifyVpcFirewallCenSwitchStatus](https://help.aliyun.com/document_detail/345780.html) operation to manually enable the VPC firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  firewallSwitch?: string;
  /**
   * @remarks
   * The CIDR block of the vSwitch that is automatically created for the VPC firewall. You must specify a CIDR block for the Cloud_Firewall_VSWITCH VPC that is automatically created for the VPC firewall for traffic redirection. The CIDR block does not conflict with your network plan. The subnet mask of the CIDR block must be less than or equal to 29 bits in length. The CIDR block of the vSwitch must be within the network segment of the VPC.
   * 
   * If you do not specify a value, the CIDR block 10.219.219.216/29 is automatically allocated.
   * 
   * >  This parameter takes effect only when you create a VPC firewall for the first time in the current CEN instance and region.
   */
  firewallVSwitchCidrBlock?: string;
  /**
   * @remarks
   * The CIDR block of the VPC that is automatically created for the VPC firewall. You must specify a CIDR block for the Cloud_Firewall_VPC VPC that is automatically created for the VPC firewall for traffic redirection. The subnet mask of the CIDR block must be less than or equal to 28 bits in length.
   * 
   * If you do not specify a value, the CIDR block 10.0.0.0/8 is automatically allocated.
   * 
   * >  This parameter takes effect only when you create a VPC firewall for the first time in the current CEN instance and region.
   * 
   * @example
   * 10.0.0.0/8
   */
  firewallVpcCidrBlock?: string;
  /**
   * @remarks
   * The ID of the zone to which the vSwitch belongs. If your service is latency-sensitive, you can specify the same zone for the vSwitch of the firewall and the vSwitch of your business VPC to minimize latency.
   * 
   * If you do not specify a value, a zone is automatically assigned for the vSwitch.
   * 
   * >  This parameter takes effect only when you create a VPC firewall for the first time in the current CEN instance and region. For more information about zones that are supported by each region, see [Query zones](https://help.aliyun.com/document_detail/36064.html).
   * 
   * @example
   * cn-hangzhou-a
   */
  firewallVpcZoneId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The ID of the VPC for which you want to create the VPC firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp10zlifxh6j0232w****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall.
   * 
   * @example
   * vsw-qzeaol304m***
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The instance name of the VPC firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * Test instance
   */
  vpcFirewallName?: string;
  /**
   * @remarks
   * The ID of the region to which the VPC belongs.
   * 
   * > For more information about the regions, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegion?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      firewallSwitch: 'FirewallSwitch',
      firewallVSwitchCidrBlock: 'FirewallVSwitchCidrBlock',
      firewallVpcCidrBlock: 'FirewallVpcCidrBlock',
      firewallVpcZoneId: 'FirewallVpcZoneId',
      lang: 'Lang',
      memberUid: 'MemberUid',
      networkInstanceId: 'NetworkInstanceId',
      vSwitchId: 'VSwitchId',
      vpcFirewallName: 'VpcFirewallName',
      vpcRegion: 'VpcRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      firewallSwitch: 'string',
      firewallVSwitchCidrBlock: 'string',
      firewallVpcCidrBlock: 'string',
      firewallVpcZoneId: 'string',
      lang: 'string',
      memberUid: 'string',
      networkInstanceId: 'string',
      vSwitchId: 'string',
      vpcFirewallName: 'string',
      vpcRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallCenConfigureResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125h4j6
   */
  requestId?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallCenConfigureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVpcFirewallCenConfigureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVpcFirewallCenConfigureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallConfigureRequest extends $tea.Model {
  /**
   * @remarks
   * The status of the VPC firewall after you create the firewall. Valid values:
   * 
   * *   **open**: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
   * *   **close**: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the [ModifyVpcFirewallSwitchStatus](https://help.aliyun.com/document_detail/342935.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  firewallSwitch?: string;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The CIDR blocks of the local VPC. The value is a JSON string that contains the following parameters:
   * 
   * *   **RouteTableId**: the ID of the route table for the local VPC.
   * *   **RouteEntryList**: The value is a JSON string that contains the DestinationCidr and NextHopInstanceId parameters. The DestinationCidr parameter indicates the destination CIDR block of the local VPC. The NextHopInstanceId parameter indicates the instance ID of the next hop for the local VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"RouteTableId":"vtb-1234","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]},{"RouteTableId":"vtb-1235","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]}]
   */
  localVpcCidrTableList?: string;
  /**
   * @remarks
   * The ID of the local VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  localVpcId?: string;
  /**
   * @remarks
   * The region ID of the local VPC.
   * 
   * >  For more information about the regions in which Cloud Firewall is available, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  localVpcRegion?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The CIDR blocks of the peer VPC. The value is a JSON string that contains the following parameters:
   * 
   * *   **RouteTableId**: the ID of the route table for the peer VPC.
   * *   **RouteEntryList**: The value is a JSON string that contains the DestinationCidr and NextHopInstanceId parameters. The DestinationCidr parameter indicates the destination CIDR block of the peer VPC. The NextHopInstanceId parameter indicates the instance ID of the next hop for the peer VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"RouteTableId":"vtb-1234","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]},{"RouteTableId":"vtb-1235","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]}]
   */
  peerVpcCidrTableList?: string;
  /**
   * @remarks
   * The ID of the peer VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-wb8vbo90rq0anm6t****
   */
  peerVpcId?: string;
  /**
   * @remarks
   * The region ID of the peer VPC.
   * 
   * >  For more information about Cloud Firewall supported regions, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  peerVpcRegion?: string;
  /**
   * @remarks
   * The instance name of the VPC firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * my-vpc-firewall
   */
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      firewallSwitch: 'FirewallSwitch',
      lang: 'Lang',
      localVpcCidrTableList: 'LocalVpcCidrTableList',
      localVpcId: 'LocalVpcId',
      localVpcRegion: 'LocalVpcRegion',
      memberUid: 'MemberUid',
      peerVpcCidrTableList: 'PeerVpcCidrTableList',
      peerVpcId: 'PeerVpcId',
      peerVpcRegion: 'PeerVpcRegion',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallSwitch: 'string',
      lang: 'string',
      localVpcCidrTableList: 'string',
      localVpcId: 'string',
      localVpcRegion: 'string',
      memberUid: 'string',
      peerVpcCidrTableList: 'string',
      peerVpcId: 'string',
      peerVpcRegion: 'string',
      vpcFirewallName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallConfigureResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125h4j6
   */
  requestId?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallConfigureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVpcFirewallConfigureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVpcFirewallConfigureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallControlPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic. Valid values:
   * 
   * - **accept**: allows the traffic.
   * - **drop**: blocks the traffic.
   * - **log**: monitors the traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The type of the applications that the access control policy supports. Valid values:
   * 
   * - **FTP**
   * - **HTTP**
   * - **HTTPS**
   * - **MySQL**
   * - **SMTP**
   * - **SMTPS**
   * - **RDP**
   * - **VNC**
   * - **SSH**
   * - **Redis**
   * - **MQTT**
   * - **MongoDB**
   * - **Memcache**
   * - **SSL**
   * - **ANY**: all types of applications
   * 
   * @example
   * HTTP
   */
  applicationName?: string;
  /**
   * @remarks
   * The application types supported by the access control policy.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination port in the access control policy. 
   * 
   * >  If **DestPortType** is set to `port`, you must specify this parameter.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book in the access control policy. 
   * 
   * >  If **DestPortType** is set to `group`, you must specify this parameter.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The type of the destination port in the access control policy. Valid values:
   * 
   * - **port**: port
   * - **group**: port address book
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Valid values:
   * 
   * - If **DestinationType** is set to `net`, the value of **Destination** must be a CIDR block.
   * - If **DestinationType** is set to `group`, the value of **Destination** must be an address book.
   * - If **DestinationType** is set to `domain`, the value of **Destination** must be a domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.2.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
   * 
   * - **net**: CIDR block
   * - **group**: address book
   * - **domain**: domain name
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  destinationType?: string;
  domainResolveType?: string;
  /**
   * @remarks
   * The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the start time.
   * 
   * >  If you set RepeatType to Permanent, leave this parameter empty. If you set RepeatType to None, Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * - **zh**: Chinese (default)
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The priority of the access control policy. 
   * 
   * The priority value starts from 1. A smaller priority value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  newOrder?: string;
  /**
   * @remarks
   * The type of the protocol in the access control policy. Valid values:
   * 
   * - **ANY** (If you are not sure about the protocol type, you can set this parameter to ANY.)
   * - **TCP**
   * - **UDP**
   * - **ICMP**
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * Specifies whether to enable the access control policy. By default, an access control policy is enabled after the policy is created. Valid values: 
   * 
   * - **true**: enables the access control policy.
   * - **false**: disables the access control policy.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of a week or of a month on which the access control policy takes effect.
   * 
   * *   If you set RepeatType to `Permanent`, `None`, or `Daily`, leave this parameter empty. Example: [].
   * *   If you set RepeatType to Weekly, you must specify this parameter. Example: [0, 6].
   * 
   * >  If you set RepeatType to Weekly, the fields in the value of this parameter cannot be repeated.
   * 
   * *   If you set RepeatType to `Monthly`, you must specify this parameter. Example: [1, 31].
   * 
   * >  If you set RepeatType to Monthly, the fields in the value of this parameter cannot be repeated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the start time.
   * 
   * >  If you set RepeatType to Permanent or None, leave this parameter empty. If you set RepeatType to Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the end time.
   * 
   * >  If you set RepeatType to Permanent or None, leave this parameter empty. If you set RepeatType to Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the access control policy to take effect. Valid values:
   * 
   * *   **Permanent** (default): The policy always takes effect.
   * *   **None**: The policy takes effect for only once.
   * *   **Daily**: The policy takes effect on a daily basis.
   * *   **Weekly**: The policy takes effect on a weekly basis.
   * *   **Monthly**: The policy takes effect on a monthly basis.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. 
   * 
   * - If SourceType is set to `net`, the value of Source must be a CIDR block.
   * - If SourceType is set to `group`, the value of Source must be an address book.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.2.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * - **net**: CIDR block
   * - **group**: address book
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the end time.
   * 
   * >  If you set RepeatType to Permanent, leave this parameter empty. If you set RepeatType to None, Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 1694761200
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the policy group in which you want to create the access control policy. 
   * 
   * - If a VPC firewall protects the traffic between two VPCs that are connected by using a CEN instance, the value of this parameter must be the ID of the CEN instance.
   * - If a VPC firewall protects the traffic between two VPCs that are connected by using an Express Connect circuit, the value of this parameter must be the instance ID of the VPC firewall.
   * 
   * >  You can call the [DescribeVpcFirewallAclGroupList](https://www.alibabacloud.com/help/en/cloud-firewall/latest/describevpcfirewallaclgrouplist) operation to query the IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-a42bbb7b887148c9****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      applicationName: 'ApplicationName',
      applicationNameList: 'ApplicationNameList',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationType: 'DestinationType',
      domainResolveType: 'DomainResolveType',
      endTime: 'EndTime',
      lang: 'Lang',
      memberUid: 'MemberUid',
      newOrder: 'NewOrder',
      proto: 'Proto',
      release: 'Release',
      repeatDays: 'RepeatDays',
      repeatEndTime: 'RepeatEndTime',
      repeatStartTime: 'RepeatStartTime',
      repeatType: 'RepeatType',
      source: 'Source',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      applicationName: 'string',
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortType: 'string',
      destination: 'string',
      destinationType: 'string',
      domainResolveType: 'string',
      endTime: 'number',
      lang: 'string',
      memberUid: 'string',
      newOrder: 'string',
      proto: 'string',
      release: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'number' },
      repeatEndTime: 'string',
      repeatStartTime: 'string',
      repeatType: 'string',
      source: 'string',
      sourceType: 'string',
      startTime: 'number',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallControlPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221ad84c
   */
  aclUuid?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallControlPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVpcFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVpcFirewallControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAddressBookRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the address book.
   * 
   * To delete the address book, you must provide the ID of the address book. You can call the DescribeAddressBook operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0657ab9d-fe8b-4174-b2a6-6baf358e****
   */
  groupUuid?: string;
  /**
   * @remarks
   * The natural language of the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      groupUuid: 'GroupUuid',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupUuid: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAddressBookResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125EEB1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAddressBookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAddressBookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAddressBookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteControlPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * To delete an access control policy, you must specify the UUID of the policy. You can call the [DescribeControlPolicy](https://help.aliyun.com/document_detail/138866.html) operation to query the UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221ad84c
   */
  aclUuid?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies.
   * 
   * Valid values:
   * 
   * *   **in**: inbound traffic
   * *   **out**: outbound traffic
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * Valid values:
   * 
   * *   **zh** (default)
   * *   **en**
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the traffic.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      direction: 'Direction',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      direction: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteControlPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteControlPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteControlPolicyTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 61.178.12.52
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the access control policy template.
   * 
   * This parameter is required.
   * 
   * @example
   * 719ce620-ae23-4e42-9f93-9191b4400b55
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteControlPolicyTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4E7F94C7-781F-5192-86CF-DB085013C810
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteControlPolicyTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteControlPolicyTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteControlPolicyTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDownloadTaskRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the file download task.
   * 
   * @example
   * 4376
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDownloadTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 064022A8-F415-572C-B3C1-657152833F11
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDownloadTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDownloadTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDownloadTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallV2RoutePoliciesRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-d5ba592ac6c84aff****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * policy-2d06d3568fd74d60****
   */
  trFirewallRoutePolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallId: 'FirewallId',
      lang: 'Lang',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallId: 'string',
      lang: 'string',
      trFirewallRoutePolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallV2RoutePoliciesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 22B6B889-4E9F-56B3-AF3D-53749C477D1D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallV2RoutePoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFirewallV2RoutePoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFirewallV2RoutePoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceMembersRequest extends $tea.Model {
  /**
   * @remarks
   * The unique identifiers (UID) of members that you want to remove from Cloud Firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234123412341234
   */
  memberUids?: number[];
  static names(): { [key: string]: string } {
    return {
      memberUids: 'MemberUids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberUids: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceMembersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 03E8AA70-0CC9-42EA-97AA-EA68377930B4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceMembersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNatFirewallControlPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * To delete an access control policy, you must provide the ID of the policy. You can call the DescribeNatFirewallControlPolicy operation to query the UUIDs of access control policies.
   * 
   * This parameter is required.
   * 
   * @example
   * b6c8f905-2eb6-442a-ba35-9416e9dbb2c5
   */
  aclUuid?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies.
   * 
   * Valid values:
   * 
   * *   **out**: outbound traffic
   * 
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-xxxxxx
   */
  natGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      direction: 'Direction',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      direction: 'string',
      lang: 'string',
      natGatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNatFirewallControlPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31306869-C4BC-56F3-BBE6-C377CF9C8E1C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNatFirewallControlPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNatFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNatFirewallControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNatFirewallControlPolicyBatchRequest extends $tea.Model {
  /**
   * @remarks
   * The UUIDs of access control policies.
   */
  aclUuidList?: string[];
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies. Valid values:
   * 
   * *   **out**: outbound traffic
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-uf6j0426ap74vd6vrb676
   */
  natGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuidList: 'AclUuidList',
      direction: 'Direction',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuidList: { 'type': 'array', 'itemType': 'string' },
      direction: 'string',
      lang: 'string',
      natGatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNatFirewallControlPolicyBatchResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 450D47F5-956E-543E-8502-2F71C8C54E72
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNatFirewallControlPolicyBatchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNatFirewallControlPolicyBatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNatFirewallControlPolicyBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityProxyRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * proxy-nat00ab412ef93d4275a6b5
   */
  proxyId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      proxyId: 'ProxyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      proxyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityProxyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7447795A-39AB-52CB-8F92-128DF4898F36
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityProxyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSecurityProxyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSecurityProxyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrFirewallV2Request extends $tea.Model {
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-99bc4f0fc88b4d00****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      firewallId: 'FirewallId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrFirewallV2ResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A774E66E-B170-59FC-9AAF-3068B15E991F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrFirewallV2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTrFirewallV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTrFirewallV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcFirewallCenConfigureRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The instance IDs of VPC firewalls.
   * 
   * This parameter is required.
   */
  vpcFirewallIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      memberUid: 'MemberUid',
      vpcFirewallIdList: 'VpcFirewallIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      memberUid: 'string',
      vpcFirewallIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcFirewallCenConfigureResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125k6j3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcFirewallCenConfigureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVpcFirewallCenConfigureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVpcFirewallCenConfigureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcFirewallConfigureRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The instance IDs of VPC firewalls.
   * 
   * This parameter is required.
   */
  vpcFirewallIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      memberUid: 'MemberUid',
      vpcFirewallIdList: 'VpcFirewallIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      memberUid: 'string',
      vpcFirewallIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcFirewallConfigureResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125k6j3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcFirewallConfigureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVpcFirewallConfigureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVpcFirewallConfigureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcFirewallControlPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the access control policy. 
   * 
   * To delete an access control policy, you must provide the ID of the policy. You can call the **DescribeVpcFirewallControlPolicy** operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df2214****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The natural language of the request and response. Valid values: 
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the group to which the access control policy belongs. You can call the **DescribeVpcFirewallAclGroupList** operation to query the ID.  
   * 
   * Valid values:
   * 
   * - If the VPC firewall is used to protect a CEN instance, the value of this parameter is the ID of the CEN instance.  
   * 
   * Example: cen-ervw0g12b5jbw****
   * - If the VPC firewall is used to protect an Express Connect circuit, the value of this parameter is the ID of the VPC firewall.  
   * 
   * Example: vfw-a42bbb7b887148c9****
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-a42bbb7b887148c91****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      lang: 'Lang',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      lang: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcFirewallControlPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcFirewallControlPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVpcFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVpcFirewallControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLProtectTrendRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp that is accurate to seconds.
   * 
   * @example
   * 1670397599
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 223.95.87.130
   */
  sourceIp?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp that is accurate to seconds.
   * 
   * @example
   * 1677050306
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      lang: 'string',
      sourceIp: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLProtectTrendResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of internal requests that are blocked by the ACL feature.
   * 
   * @example
   * 100
   */
  inProtectCnt?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 0
   */
  interVPCProtectCnt?: number;
  /**
   * @remarks
   * The interval for returning data. Unit: seconds.
   * 
   * @example
   * 86400
   */
  interval?: number;
  /**
   * @remarks
   * The number of external requests that are blocked by the ACL feature.
   * 
   * @example
   * 200
   */
  outProtectCnt?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9063AB86-6FFA-5B2D-A16D-697C966DECA3
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of requests that are blocked by the ACL feature.
   * 
   * @example
   * 300
   */
  totalProtectCnt?: number;
  /**
   * @remarks
   * The statistics on the requests that are blocked by the ACL feature.
   */
  trendList?: DescribeACLProtectTrendResponseBodyTrendList[];
  static names(): { [key: string]: string } {
    return {
      inProtectCnt: 'InProtectCnt',
      interVPCProtectCnt: 'InterVPCProtectCnt',
      interval: 'Interval',
      outProtectCnt: 'OutProtectCnt',
      requestId: 'RequestId',
      totalProtectCnt: 'TotalProtectCnt',
      trendList: 'TrendList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inProtectCnt: 'number',
      interVPCProtectCnt: 'number',
      interval: 'number',
      outProtectCnt: 'number',
      requestId: 'string',
      totalProtectCnt: 'number',
      trendList: { 'type': 'array', 'itemType': DescribeACLProtectTrendResponseBodyTrendList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLProtectTrendResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeACLProtectTrendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeACLProtectTrendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookRequest extends $tea.Model {
  /**
   * @remarks
   * The port that is included in the address book. This parameter takes effect only when the **GroupType** parameter is set to **port**.
   * 
   * @example
   * 80
   */
  containPort?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The type of the address book. Valid values:
   * 
   * *   **ip**: IP address book
   * *   **domain**: domain address book
   * *   **port**: port address book
   * *   **tag**: Elastic Compute Service (ECS) tag-based address book
   * *   **allCloud**: cloud service address book
   * *   **threat**: threat intelligence address book
   * 
   * >  If you do not specify a type, the domain address books and ECS tag-based address books are queried.
   * 
   * @example
   * ip
   */
  groupType?: string;
  /**
   * @remarks
   * The language of the content within the request. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The query condition that is used to search for the address book.
   * 
   * @example
   * 192.0.XX.XX
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      containPort: 'ContainPort',
      currentPage: 'CurrentPage',
      groupType: 'GroupType',
      lang: 'Lang',
      pageSize: 'PageSize',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containPort: 'string',
      currentPage: 'string',
      groupType: 'string',
      lang: 'string',
      pageSize: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the address book.
   */
  acls?: DescribeAddressBookResponseBodyAcls[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B36F150A-1E27-43AA-B72C-D2AC712F09DA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the returned address books.
   * 
   * @example
   * 100
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      acls: 'Acls',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acls: { 'type': 'array', 'itemType': DescribeAddressBookResponseBodyAcls },
      pageNo: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAddressBookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAddressBookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetListRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The IP version of the asset that is protected by Cloud Firewall. Valid values:
   * 
   * *   **4**: IPv4 (default)
   * *   **6**: IPv6
   * 
   * @example
   * 4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is added to Cloud Firewall.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: number;
  /**
   * @remarks
   * The time when the asset was added. Valid values:
   * 
   * *   **discovered in 1 hour**: within one hour.
   * *   **discovered in 1 day**: within one day.
   * *   **discovered in 7 days**: within seven days.
   * 
   * @example
   * discovered in 1 hour
   */
  newResourceTag?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of your Cloud Firewall.
   * 
   * > For more information about the regions, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **BastionHostEgressIP**: the egress IP address of a bastion host
   * *   **BastionHostIngressIP**: the ingress IP address of a bastion host
   * *   **EcsEIP**: the elastic IP address (EIP) of an Elastic Compute Service (ECS) instance
   * *   **EcsPublicIP**: the public IP address of an ECS instance
   * *   **EIP**: the EIP
   * *   **EniEIP**: the EIP of an elastic network interface (ENI)
   * *   **NatEIP**: the EIP of a NAT gateway
   * *   **SlbEIP**: the EIP of a Server Load Balancer (SLB) instance or a Classic Load Balancer (CLB) instance
   * *   **SlbPublicIP**: the public IP address of an SLB instance or a CLB instance
   * *   **NatPublicIP**: the public IP address of a NAT gateway
   * *   **HAVIP**: the high-availability virtual IP address (HAVIP)
   * 
   * @example
   * EIP
   */
  resourceType?: string;
  /**
   * @remarks
   * The instance ID or IP address of the asset.
   * 
   * @example
   * 192.0.XX.XX
   */
  searchItem?: string;
  /**
   * @remarks
   * The status of the security group policy. Valid values:
   * 
   * *   **pass**: delivered
   * *   **block**: undelivered
   * *   **unsupport**: unsupported
   * 
   * > If you do not specify this parameter, the assets on which security group policies in all states take effect are queried.
   * 
   * @example
   * pass
   */
  sgStatus?: string;
  /**
   * @remarks
   * The status of the firewall. Valid values:
   * 
   * *   **open**: The firewall is enabled.
   * *   **opening**: The firewall is being enabled.
   * *   **closed**: The firewall is disabled.
   * *   **closing**: The firewall is being disabled.
   * 
   * > If you do not specify this parameter, the assets that are configured for firewalls in all states are queried.
   * 
   * @example
   * open
   */
  status?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * eip
   */
  type?: string;
  /**
   * @remarks
   * The edition of Cloud Firewall. Valid values:
   * 
   * *   **buy**: a paid edition (default)
   * *   **free**: Free Edition
   * 
   * @example
   * buy
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      memberUid: 'MemberUid',
      newResourceTag: 'NewResourceTag',
      pageSize: 'PageSize',
      regionNo: 'RegionNo',
      resourceType: 'ResourceType',
      searchItem: 'SearchItem',
      sgStatus: 'SgStatus',
      status: 'Status',
      type: 'Type',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      ipVersion: 'string',
      lang: 'string',
      memberUid: 'number',
      newResourceTag: 'string',
      pageSize: 'string',
      regionNo: 'string',
      resourceType: 'string',
      searchItem: 'string',
      sgStatus: 'string',
      status: 'string',
      type: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the assets that are protected by Cloud Firewall.
   */
  assets?: DescribeAssetListResponseBodyAssets[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the assets that are protected by Cloud Firewall.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      assets: 'Assets',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assets: { 'type': 'array', 'itemType': DescribeAssetListResponseBodyAssets },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAssetListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAssetListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetRiskListRequest extends $tea.Model {
  /**
   * @remarks
   * The IP addresses to query. Separate the IP addresses with commas (,). You can specify up to 20 IP addresses at a time.
   * 
   * > 
   * 
   * *   Example of an IPv4 address: 47.97.XX.XX
   * 
   * *   Example of an IPv6 address: 2001:db8:ffff:ffff:ffff:XXXX:ffff
   */
  ipAddrList?: string[];
  /**
   * @remarks
   * The IP version of the asset that is protected by Cloud Firewall.
   * 
   * Valid values:
   * 
   * *   **4** (default): IPv4
   * *   **6**: IPv6
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 47.100.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddrList: 'IpAddrList',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddrList: { 'type': 'array', 'itemType': 'string' },
      ipVersion: 'number',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetRiskListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the asset.
   */
  assetList?: DescribeAssetRiskListResponseBodyAssetList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 443C5781-1C03-5FCD-8EC5-FB9C0B9AC396
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      assetList: 'AssetList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetList: { 'type': 'array', 'itemType': DescribeAssetRiskListResponseBodyAssetList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetRiskListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAssetRiskListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAssetRiskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCfwRiskLevelSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * EcsEIP
   */
  instanceType?: string;
  /**
   * @remarks
   * The language of the content within the response.
   * 
   * Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region ID of your Cloud Firewall.
   * 
   * >  For more information about Cloud Firewall supported regions, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      lang: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCfwRiskLevelSummaryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F1F30435-FA0A-52DA-A5DE-C16FD6C171DA
   */
  requestId?: string;
  /**
   * @remarks
   * The list of risks.
   */
  riskList?: DescribeCfwRiskLevelSummaryResponseBodyRiskList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskList: 'RiskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskList: { 'type': 'array', 'itemType': DescribeCfwRiskLevelSummaryResponseBodyRiskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCfwRiskLevelSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCfwRiskLevelSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCfwRiskLevelSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeControlPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic. Valid values:
   * 
   * *   **accept**: allows the traffic.
   * *   **drop**: denies the traffic.
   * *   **log**: monitors the traffic.
   * 
   * >  If you do not specify this parameter, access control policies of all action types are queried.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The unique ID of the access control policy.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221a****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The description of the access control policy. Fuzzy match is supported.
   * 
   * >  If you do not specify this parameter, access control policies that have descriptions are queried.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Fuzzy match is supported. The value of this parameter varies based on the value of the DestinationType parameter.
   * 
   * *   If you set DestinationType to `net`, the value of Destination is a CIDR block. Example: 10.0.3.0/24.
   * *   If you set DestinationType to `domain`, the value of Destination is a domain name. Example: aliyun.
   * *   If you set DestinationType to `group`, the value of Destination is the name of an address book. Example: db_group.
   * *   If you set DestinationType to `location`, the value of Destination is the name of a location. For more information about location codes, see AddControlPolicy. Example: ["BJ11", "ZB"].
   * 
   * >  If you do not specify this parameter, access control policies of all destination address types are queried.
   * 
   * @example
   * 192.0.XX.XX
   */
  destination?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies. Valid values:
   * 
   * *   **in**: inbound traffic
   * *   **out**: outbound traffic
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The IP version of the address in the access control policy. Valid values:
   * 
   * *   **4**: IPv4 (default)
   * *   **6**: IPv6
   * 
   * @example
   * 6
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The type of the protocol in the access control policy. Valid values:
   * 
   * * **TCP**
   * * **UDP**
   * * **ICMP**
   * * **ANY**: all types of protocols
   * 
   * >  If you do not specify this parameter, access control policies of all protocol types are queried.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * Specifies whether the access control policy is enabled. By default, an access control policy is enabled after it is created. Valid values:
   * 
   * *   **true**: The access control policy is enabled.
   * *   **false**: The access control policy is disabled.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The recurrence type for the access control policy to take effect. Valid values:
   * 
   * *   **Permanent** (default): The policy always takes effect.
   * *   **None**: The policy takes effect for only once.
   * *   **Daily**: The policy takes effect on a daily basis.
   * *   **Weekly**: The policy takes effect on a weekly basis.
   * *   **Monthly**: The policy takes effect on a monthly basis.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Fuzzy match is supported. The value of this parameter depends on the value of the SourceType parameter.
   * 
   * *   If SourceType is set to `net`, the value of Source must be a CIDR block. Example: 192.0.XX.XX/24.
   * *   If SourceType is set to `group`, the value of Source must be the name of an address book. Example: db_group. If the db_group address book does not contain addresses, all source addresses are queried.
   * *   If SourceType is set to `location`, the value of Source must be a location. Example: beijing.
   * 
   * >  If you do not specify this parameter, access control policies of all source address types are queried.
   * 
   * @example
   * 192.0.XX.XX
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      currentPage: 'CurrentPage',
      description: 'Description',
      destination: 'Destination',
      direction: 'Direction',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      pageSize: 'PageSize',
      proto: 'Proto',
      release: 'Release',
      repeatType: 'RepeatType',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      currentPage: 'string',
      description: 'string',
      destination: 'string',
      direction: 'string',
      ipVersion: 'string',
      lang: 'string',
      pageSize: 'string',
      proto: 'string',
      release: 'string',
      repeatType: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeControlPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The information about the access control policies.
   */
  policys?: DescribeControlPolicyResponseBodyPolicys[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the returned access control policies.
   * 
   * @example
   * 100
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      policys: 'Policys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'string',
      pageSize: 'string',
      policys: { 'type': 'array', 'itemType': DescribeControlPolicyResponseBodyPolicys },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeControlPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefaultIPSConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default)
   * *   **en**
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefaultIPSConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether basic protection is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 0
   */
  basicRules?: number;
  /**
   * @remarks
   * Indicates whether threat intelligence is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 0
   */
  ctiRules?: number;
  /**
   * @remarks
   * Indicates whether virtual patching is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 0
   */
  patchRules?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 133173B9-8010-5DF5-8B93-********
   */
  requestId?: string;
  /**
   * @remarks
   * The level of the rule group for the IPS. Valid values:
   * 
   * *   **1**: loose
   * *   **2**: medium
   * *   **3**: strict
   * 
   * @example
   * 3
   */
  ruleClass?: number;
  /**
   * @remarks
   * The mode of the IPS. Valid values:
   * 
   * *   **1**: block mode
   * *   **0**: monitor mode
   * 
   * @example
   * 0
   */
  runMode?: number;
  static names(): { [key: string]: string } {
    return {
      basicRules: 'BasicRules',
      ctiRules: 'CtiRules',
      patchRules: 'PatchRules',
      requestId: 'RequestId',
      ruleClass: 'RuleClass',
      runMode: 'RunMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicRules: 'number',
      ctiRules: 'number',
      patchRules: 'number',
      requestId: 'string',
      ruleClass: 'number',
      runMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefaultIPSConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefaultIPSConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDefaultIPSConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResolveRequest extends $tea.Model {
  /**
   * @remarks
   * The domain name whose DNS record you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The IP version of the asset that is protected by Cloud Firewall. Valid values:
   * 
   * *   **4**: IPv4 (default)
   * *   **6**: IPv6
   * 
   * @example
   * 6
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the content within the response.
   * 
   * Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ipVersion: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResolveResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the DNS record of the domain name.
   */
  resolveResult?: DescribeDomainResolveResponseBodyResolveResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resolveResult: 'ResolveResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resolveResult: DescribeDomainResolveResponseBodyResolveResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResolveResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainResolveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainResolveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadTaskRequest extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The type of the task. For more information about task types, see the descriptions in the "DescribeDownloadTaskType" topic. If you do not specify this parameter, all files are queried by default.
   * 
   * @example
   * InternetFirewallAsset
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      lang: 'string',
      pageSize: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3F2BED13-F3D0-5984-80D6-D5F298CFEA88
   */
  requestId?: string;
  /**
   * @remarks
   * The tasks.
   */
  tasks?: DescribeDownloadTaskResponseBodyTasks[];
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 132
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': DescribeDownloadTaskResponseBodyTasks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDownloadTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDownloadTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadTaskTypeRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * InternetFirewallAsset
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      lang: 'string',
      pageSize: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadTaskTypeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B835494C-D093-5524-BBDE-BD272077B40E
   */
  requestId?: string;
  /**
   * @remarks
   * The task types.
   */
  taskTypeArray?: DescribeDownloadTaskTypeResponseBodyTaskTypeArray[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskTypeArray: 'TaskTypeArray',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskTypeArray: { 'type': 'array', 'itemType': DescribeDownloadTaskTypeResponseBodyTaskTypeArray },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadTaskTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDownloadTaskTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDownloadTaskTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMembersRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The remarks of the member. The remarks must be 1 to 256 characters in length.
   * 
   * @example
   * renewal
   */
  memberDesc?: string;
  /**
   * @remarks
   * The name of the member.
   * 
   * @example
   * cloudfirewall_2
   */
  memberDisplayName?: string;
  /**
   * @remarks
   * The UID of the member.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      memberDesc: 'MemberDesc',
      memberDisplayName: 'MemberDisplayName',
      memberUid: 'MemberUid',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      memberDesc: 'string',
      memberDisplayName: 'string',
      memberUid: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMembersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the member.
   */
  members?: DescribeInstanceMembersResponseBodyMembers[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeInstanceMembersResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A531AE1A-FBA2-48B6-BAB8-84D02BD409EE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': DescribeInstanceMembersResponseBodyMembers },
      pageInfo: DescribeInstanceMembersResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMembersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRiskLevelsRequest extends $tea.Model {
  /**
   * @remarks
   * The information about the instances.
   */
  instances?: DescribeInstanceRiskLevelsRequestInstances[];
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstanceRiskLevelsRequestInstances },
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRiskLevelsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the instances.
   */
  instanceRisks?: DescribeInstanceRiskLevelsResponseBodyInstanceRisks[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9AABB1B7-C81F-5158-9EF9-B2DD5D3DA014
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceRisks: 'InstanceRisks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRisks: { 'type': 'array', 'itemType': DescribeInstanceRiskLevelsResponseBodyInstanceRisks },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRiskLevelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceRiskLevelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceRiskLevelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetOpenIpRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-uf6faknmuby7ezht****
   */
  assetsInstanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * launch-advisor-2023****
   */
  assetsInstanceName?: string;
  /**
   * @remarks
   * The asset type of the instance.
   * 
   * @example
   * EcsEIP
   */
  assetsType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1663640336
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * @example
   * 203.0.113.1
   */
  publicIp?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @remarks
   * The risk level. If you leave this parameter empty, all risk levels are queried. Valid values:
   * 
   * *   **3**: high risk
   * *   **2**: medium risk
   * *   **1**: low risk
   * *   **0**: no risk
   * 
   * @example
   * 2
   */
  riskLevel?: string;
  /**
   * @remarks
   * The application.
   * 
   * @example
   * SSH
   */
  serviceName?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1681957629
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      assetsInstanceId: 'AssetsInstanceId',
      assetsInstanceName: 'AssetsInstanceName',
      assetsType: 'AssetsType',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      port: 'Port',
      publicIp: 'PublicIp',
      regionNo: 'RegionNo',
      riskLevel: 'RiskLevel',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsInstanceId: 'string',
      assetsInstanceName: 'string',
      assetsType: 'string',
      currentPage: 'string',
      endTime: 'string',
      lang: 'string',
      pageSize: 'string',
      port: 'string',
      publicIp: 'string',
      regionNo: 'string',
      riskLevel: 'string',
      serviceName: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetOpenIpResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  dataList?: DescribeInternetOpenIpResponseBodyDataList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeInternetOpenIpResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6B780BD6-282C-51A9-A8E6-59F636BAFA54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeInternetOpenIpResponseBodyDataList },
      pageInfo: DescribeInternetOpenIpResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetOpenIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInternetOpenIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInternetOpenIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetTrafficTrendRequest extends $tea.Model {
  /**
   * @remarks
   * The direction of the internet traffic.
   * 
   * Valid values:
   * 
   * *   **in**: inbound traffic
   * *   **out**: outbound traffic
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1674958929
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the content in the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source code.
   * 
   * This parameter is required.
   * 
   * @example
   * yundun
   */
  sourceCode?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 101.80.171.196
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The private IP address of the source.
   * 
   * @example
   * 10.100.134.60
   */
  srcPrivateIP?: string;
  /**
   * @remarks
   * The public IP address of the source.
   * 
   * @example
   * 47.112.210.136
   */
  srcPublicIP?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1670307484
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the traffic that is captured. Valid values:
   * 
   * *   **max** (default): peak traffic
   * *   **avg**: average traffic
   * 
   * @example
   * max
   */
  trafficType?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      endTime: 'EndTime',
      lang: 'Lang',
      sourceCode: 'SourceCode',
      sourceIp: 'SourceIp',
      srcPrivateIP: 'SrcPrivateIP',
      srcPublicIP: 'SrcPublicIP',
      startTime: 'StartTime',
      trafficType: 'TrafficType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      endTime: 'string',
      lang: 'string',
      sourceCode: 'string',
      sourceIp: 'string',
      srcPrivateIP: 'string',
      srcPublicIP: 'string',
      startTime: 'string',
      trafficType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetTrafficTrendResponseBody extends $tea.Model {
  /**
   * @remarks
   * The average inbound network throughput, which indicates the average number of bits that are sent inbound per second. Unit: bit/s.
   * 
   * @example
   * 6114152
   */
  avgInBps?: number;
  /**
   * @remarks
   * The average outbound network throughput, which indicates the average number of bits that are sent outbound per second. Unit: bit/s.
   * 
   * @example
   * 70148993
   */
  avgOutBps?: number;
  /**
   * @remarks
   * The average number of requests.
   * 
   * @example
   * 79013
   */
  avgSession?: number;
  /**
   * @remarks
   * The total average inbound and outbound network throughput, which indicates the average number of bits that are sent inbound and outbound per second. Unit: bit/s.
   * 
   * @example
   * 2306
   */
  avgTotalBps?: number;
  /**
   * @remarks
   * The statistics on traffic.
   */
  dataList?: DescribeInternetTrafficTrendResponseBodyDataList[];
  /**
   * @remarks
   * The timestamp generated when the bandwidth reaches the peak value. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1672736400
   */
  maxBandwidthTime?: number;
  /**
   * @remarks
   * The maximum volume of excess traffic allowed per day.
   * 
   * @example
   * 873
   */
  maxDayExceedBytes?: number;
  /**
   * @remarks
   * The maximum inbound network throughput, which indicates the maximum number of bits that are sent inbound per second. Unit: bit/s.
   * 
   * @example
   * 10275643
   */
  maxInBps?: number;
  /**
   * @remarks
   * The maximum outbound network throughput, which indicates the maximum number of bits that are sent outbound per second. Unit: bit/s.
   * 
   * @example
   * 395188
   */
  maxOutBps?: number;
  /**
   * @remarks
   * The number of requests during the peak hour of the network throughout.
   * 
   * @example
   * 931641
   */
  maxSession?: number;
  /**
   * @remarks
   * The total maximum inbound and outbound network throughput, which indicates the maximum number of bits that are sent inbound and outbound per second. Unit: bit/s.
   * 
   * @example
   * 89783147
   */
  maxTotalBps?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7E837BE-0379-565E-B7B4-DE595C8D337C
   */
  requestId?: string;
  /**
   * @remarks
   * The total inbound and outbound network throughput, which indicates the total number of bytes that are sent inbound and outbound. Unit: bytes.
   * 
   * @example
   * 963227674958
   */
  totalBytes?: number;
  /**
   * @remarks
   * The total volume of excess traffic.
   * 
   * @example
   * 4243873
   */
  totalExceedBytes?: number;
  /**
   * @remarks
   * The inbound network throughput, which indicates the total number of bytes that are sent inbound. Unit: bytes.
   * 
   * @example
   * 41536824243873
   */
  totalInBytes?: number;
  /**
   * @remarks
   * The outbound network throughput, which indicates the total number of bytes that are sent outbound. Unit: bytes.
   * 
   * @example
   * 2660894567178
   */
  totalOutBytes?: number;
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 1061449
   */
  totalSession?: number;
  static names(): { [key: string]: string } {
    return {
      avgInBps: 'AvgInBps',
      avgOutBps: 'AvgOutBps',
      avgSession: 'AvgSession',
      avgTotalBps: 'AvgTotalBps',
      dataList: 'DataList',
      maxBandwidthTime: 'MaxBandwidthTime',
      maxDayExceedBytes: 'MaxDayExceedBytes',
      maxInBps: 'MaxInBps',
      maxOutBps: 'MaxOutBps',
      maxSession: 'MaxSession',
      maxTotalBps: 'MaxTotalBps',
      requestId: 'RequestId',
      totalBytes: 'TotalBytes',
      totalExceedBytes: 'TotalExceedBytes',
      totalInBytes: 'TotalInBytes',
      totalOutBytes: 'TotalOutBytes',
      totalSession: 'TotalSession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgInBps: 'number',
      avgOutBps: 'number',
      avgSession: 'number',
      avgTotalBps: 'number',
      dataList: { 'type': 'array', 'itemType': DescribeInternetTrafficTrendResponseBodyDataList },
      maxBandwidthTime: 'number',
      maxDayExceedBytes: 'number',
      maxInBps: 'number',
      maxOutBps: 'number',
      maxSession: 'number',
      maxTotalBps: 'number',
      requestId: 'string',
      totalBytes: 'number',
      totalExceedBytes: 'number',
      totalInBytes: 'number',
      totalOutBytes: 'number',
      totalSession: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetTrafficTrendResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInternetTrafficTrendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInternetTrafficTrendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvadeEventListRequest extends $tea.Model {
  /**
   * @remarks
   * The IP address of the affected asset.
   * 
   * @example
   * 10.0.XX.XX
   */
  assetsIP?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ins_1321_asedb_****
   */
  assetsInstanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ECS_test
   */
  assetsInstanceName?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds. If you do not specify this parameter, the query ends at the current time.
   * 
   * @example
   * 1656837360
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the breach awareness event.
   * 
   * @example
   * 69d189e2-ec17-4676-a2fe-02969234****
   */
  eventKey?: string;
  /**
   * @remarks
   * The name of the breach awareness event.
   * 
   * @example
   * event_test
   */
  eventName?: string;
  /**
   * @remarks
   * The UUID of the breach awareness event.
   * 
   * @example
   * fadd-dfdd-****
   */
  eventUuid?: string;
  /**
   * @remarks
   * Specifies whether the breach awareness event is ignored. Valid values:
   * 
   * *   **true**: The breach awareness event is ignored.
   * *   **false**: The breach awareness event is not ignored.
   * 
   * @example
   * true
   */
  isIgnore?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * 135809047715****
   */
  memberUid?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 6. Maximum value: 10.
   * 
   * @example
   * 1
   */
  pageSize?: string;
  /**
   * @remarks
   * The handling status of breach awareness events.
   */
  processStatusList?: number[];
  /**
   * @remarks
   * The risk levels.
   */
  riskLevel?: number[];
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds. If you do not specify this parameter, the query starts from 30 days before the current time.
   * 
   * @example
   * 1656750960
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      assetsIP: 'AssetsIP',
      assetsInstanceId: 'AssetsInstanceId',
      assetsInstanceName: 'AssetsInstanceName',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      eventKey: 'EventKey',
      eventName: 'EventName',
      eventUuid: 'EventUuid',
      isIgnore: 'IsIgnore',
      lang: 'Lang',
      memberUid: 'MemberUid',
      pageSize: 'PageSize',
      processStatusList: 'ProcessStatusList',
      riskLevel: 'RiskLevel',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsIP: 'string',
      assetsInstanceId: 'string',
      assetsInstanceName: 'string',
      currentPage: 'string',
      endTime: 'string',
      eventKey: 'string',
      eventName: 'string',
      eventUuid: 'string',
      isIgnore: 'string',
      lang: 'string',
      memberUid: 'number',
      pageSize: 'string',
      processStatusList: { 'type': 'array', 'itemType': 'number' },
      riskLevel: { 'type': 'array', 'itemType': 'number' },
      sourceIp: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvadeEventListResponseBody extends $tea.Model {
  /**
   * @remarks
   * An array that consists of breach awareness events.
   */
  eventList?: DescribeInvadeEventListResponseBodyEventList[];
  /**
   * @remarks
   * The percentage of high-risk events.
   * 
   * @example
   * 40
   */
  highLevelPercent?: number;
  /**
   * @remarks
   * The percentage of low-risk events.
   * 
   * @example
   * 20
   */
  lowLevelPercent?: number;
  /**
   * @remarks
   * The percentage of medium-risk events.
   * 
   * @example
   * 40
   */
  middleLevelPercent?: number;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeInvadeEventListResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      highLevelPercent: 'HighLevelPercent',
      lowLevelPercent: 'LowLevelPercent',
      middleLevelPercent: 'MiddleLevelPercent',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': DescribeInvadeEventListResponseBodyEventList },
      highLevelPercent: 'number',
      lowLevelPercent: 'number',
      middleLevelPercent: 'number',
      pageInfo: DescribeInvadeEventListResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvadeEventListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInvadeEventListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInvadeEventListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatAclPageStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatAclPageStatusResponseBody extends $tea.Model {
  detail?: string;
  /**
   * @remarks
   * Indicates whether pagination for access control policies for NAT firewalls is supported.
   * 
   * @example
   * True
   */
  natAclPageEnable?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B97F9AD7-A2DB-5F8F-9206-DF89DE0AC9E8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      natAclPageEnable: 'NatAclPageEnable',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      natAclPageEnable: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatAclPageStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNatAclPageStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNatAclPageStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatFirewallControlPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic.
   * 
   * Valid values:
   * 
   * *   **accept**: allows the traffic.
   * *   **drop**: denies the traffic.
   * *   **log**: monitors the traffic.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * @example
   * 303f0697-2a21-4e43-b142-4a77adf7b358
   */
  aclUuid?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The description of the access control policy. Fuzzy match is supported.
   * 
   * > If you do not specify this parameter, the descriptions of all policies are queried.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Fuzzy match is supported. The value of this parameter varies based on the value of the DestinationType parameter.
   * 
   * *   If DestinationType is set to `net`, the value of Destination must be a CIDR block. Example: 10.0.3.0/24.
   * *   If DestinationType is set to `domain`, the value of Destination must be a domain name. Example: aliyun.
   * *   If DestinationType is set to `group`, the value of Destination must be the name of an address book. Example: db_group.
   * *   If DestinationType is set to `location`, the value of Destination is a location. For more information about location codes, see [AddControlPolicy](https://help.aliyun.com/document_detail/474128.html). Example: ["BJ11", "ZB"].
   * 
   * > If you do not specify this parameter, all types of destination addresses are queried.
   * 
   * @example
   * x.x.x.x/32
   */
  destination?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies. Valid values:
   * 
   * *   **out**: outbound traffic
   * 
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-xxxxxx
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The type of the protocol in the access control policy. Valid values:
   * 
   * *   **TCP**
   * *   **UDP**
   * *   **ICMP**
   * *   **ANY**: all types of protocols
   * 
   * > If you do not specify this parameter, access control policies of all protocol types are queried.
   * 
   * @example
   * ANY
   */
  proto?: string;
  /**
   * @remarks
   * Specifies whether the access control policy is enabled. By default, an access control policy is enabled after it is created. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The recurrence type for the access control policy to take effect. Valid values:
   * 
   * *   **Permanent** (default): The policy always takes effect.
   * *   **None**: The policy takes effect only once.
   * *   **Daily**: The policy takes effect on a daily basis.
   * *   **Weekly**: The policy takes effect on a weekly basis.
   * *   **Monthly**: The policy takes effect on a monthly basis.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Fuzzy match is supported. The value of this parameter varies based on the value of the SourceType parameter.
   * 
   * *   If SourceType is set to `net`, the value of Source must be a CIDR block. Example: 192.0.XX.XX/24.
   * *   If SourceType is set to `group`, the value of Source must be the name of an address book. Example: db_group. If the db_group address book does not contain addresses, all source addresses are queried.
   * *   If SourceType is set to `location`, the value of Source must be a location. Example: beijing.
   * 
   * > If you do not specify this parameter, all types of source addresses are queried.
   * 
   * @example
   * 1.1.1.1/32
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      currentPage: 'CurrentPage',
      description: 'Description',
      destination: 'Destination',
      direction: 'Direction',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
      pageSize: 'PageSize',
      proto: 'Proto',
      release: 'Release',
      repeatType: 'RepeatType',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      currentPage: 'string',
      description: 'string',
      destination: 'string',
      direction: 'string',
      lang: 'string',
      natGatewayId: 'string',
      pageSize: 'string',
      proto: 'string',
      release: 'string',
      repeatType: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatFirewallControlPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the access control policies.
   */
  policys?: DescribeNatFirewallControlPolicyResponseBodyPolicys[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F183567D-8A52-5BAE-9472-F1C427378C28
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 28
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      policys: 'Policys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policys: { 'type': 'array', 'itemType': DescribeNatFirewallControlPolicyResponseBodyPolicys },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatFirewallControlPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNatFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNatFirewallControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatFirewallListRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * *   **zh** (default)
   * *   **en**
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 147783******
   */
  memberUid?: number;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * nat-bp123456g******
   */
  natGatewayId?: string;
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
   * The number of entries per page.
   * 
   * Default value: 10. 
   * 
   *  Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the NAT firewall.
   * 
   * @example
   * proxy-nat97a******
   */
  proxyId?: string;
  /**
   * @remarks
   * The name of the NAT firewall. The name must be 4 to 50 characters in length, and can contain letters, digits, and underscores (_). The name cannot start with an underscore.
   * 
   * @example
   * proxy-******
   */
  proxyName?: string;
  /**
   * @remarks
   * The region ID of the virtual private cloud (VPC).
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The status of the NAT firewall. Valid values:
   * 
   * *   configuring
   * *   deleting
   * *   normal
   * *   abnormal
   * *   opening
   * *   closing
   * *   closed
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      memberUid: 'MemberUid',
      natGatewayId: 'NatGatewayId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      proxyId: 'ProxyId',
      proxyName: 'ProxyName',
      regionNo: 'RegionNo',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      memberUid: 'number',
      natGatewayId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      proxyId: 'string',
      proxyName: 'string',
      regionNo: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatFirewallListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The NAT firewalls.
   */
  natFirewallList?: DescribeNatFirewallListResponseBodyNatFirewallList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15FCCC52-1E23-57AE-B5EF-3E00A3******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of NAT firewalls.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      natFirewallList: 'NatFirewallList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natFirewallList: { 'type': 'array', 'itemType': DescribeNatFirewallListResponseBodyNatFirewallList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatFirewallListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNatFirewallListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNatFirewallListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatFirewallPolicyPriorUsedRequest extends $tea.Model {
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies.
   * 
   * Valid values:
   * 
   * *   **out**: outbound traffic
   * 
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The IP version supported by the access control policy. Valid values:
   * 
   * *   **4**: IPv4 (default)
   * 
   * @example
   * 4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-xxxxxx
   */
  natGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      ipVersion: 'string',
      lang: 'string',
      natGatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatFirewallPolicyPriorUsedResponseBody extends $tea.Model {
  /**
   * @remarks
   * The lowest priority for the access control policy.
   * 
   * @example
   * 28
   */
  end?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BCDF3907-1011-5504-B015-CC7603C0E6B6
   */
  requestId?: string;
  /**
   * @remarks
   * The highest priority for the access control policy.
   * 
   * @example
   * 1
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      requestId: 'RequestId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      requestId: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatFirewallPolicyPriorUsedResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNatFirewallPolicyPriorUsedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNatFirewallPolicyPriorUsedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationIPRequest extends $tea.Model {
  /**
   * @remarks
   * The application type in the access control policy. Valid values:
   * 
   * *   **FTP**
   * *   **HTTP**
   * *   **HTTPS**
   * *   **Memcache**
   * *   **MongoDB**
   * *   **MQTT**
   * *   **MySQL**
   * *   **RDP**
   * *   **Redis**
   * *   **SMTP**
   * *   **SMTPS**
   * *   **SSH**
   * *   **SSL_No_Cert**
   * *   **SSL**
   * *   **VNC**
   * 
   * >  The value of this parameter depends on the value of Proto. If you set Proto to TCP, you can set ApplicationNameList to any valid value. If you specify both ApplicationNameList and ApplicationName, only the value of ApplicationNameList is used.
   * 
   * @example
   * FTP
   */
  applicationName?: string;
  /**
   * @remarks
   * The ID of the service to which the destination IP address belongs. This parameter is left empty by default. Valid values:
   * 
   * *   **All**: all services
   * *   **RiskDomain**: risky domain names
   * *   **RiskIP**: risky IP addresses
   * *   **AliYun**: Alibaba Cloud services
   * *   **NotAliYun**: third-party services
   * 
   * @example
   * All
   */
  categoryId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The destination IP address in the outbound connection that is initiated to access a domain name.
   * 
   * @example
   * 10.0.XX.XX
   */
  dstIP?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656923760
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The method that is used to sort the results. Valid values:
   * 
   * *   **asc**: the ascending order.
   * *   **desc** (default): the descending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 6. Maximum value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The private IP address of the ECS instance that initiates the outbound connection.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIP?: string;
  /**
   * @remarks
   * The public IP address of the Elastic Compute Service (ECS) instance that initiates the outbound connection.
   * 
   * @example
   * 192.0.XX.XX
   */
  publicIP?: string;
  /**
   * @remarks
   * The field based on which you want to sort the query results. Valid values:
   * 
   * *   **SessionCount** (default): the number of requests.
   * *   **TotalBytes**: the total volume of traffic.
   * 
   * @example
   * SessionCount
   */
  sort?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656837360
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the tag. Valid values:
   * 
   * *   **AliYun**: Alibaba Cloud service
   * *   **RiskDomain**: risky domain name
   * *   **RiskIP**: risky IP address
   * *   **TrustedDomain**: trusted website
   * *   **AliPay**: Alipay
   * *   **DingDing**: DingTalk
   * *   **WeChat**: WeChat
   * *   **QQ**: Tencent QQ
   * *   **SecurityService**: security service
   * *   **Microsoft**: Microsoft
   * *   **Amazon**: Amazon Web Services (AWS)
   * *   **Pan**: cloud disk
   * *   **Map**: map
   * *   **Code**: code hosting
   * *   **SystemService**: system service
   * *   **Taobao**: Taobao
   * *   **Google**: Google
   * *   **ThirdPartyService**: third-party service
   * *   **FirstFlow**: the first time
   * *   **Downloader**: malicious download
   * *   **Alexa Top1M**: popular website
   * *   **Miner**: mining pool
   * *   **Intelligence**: threat intelligence
   * *   **DDoS**: DDoS trojan
   * *   **Ransomware**: ransomware
   * *   **Spyware**: spyware
   * *   **Rogue**: rogue software
   * *   **Botnet**: botnet
   * *   **Suspicious**: suspicious website
   * *   **C\\&C**: command and control (C\\&C)
   * *   **Gang**: gang
   * *   **CVE**: Common Vulnerabilities and Exposures (CVE)
   * *   **Backdoor**: webshell
   * *   **Phishing**: phishing website
   * *   **APT**: advanced persistent threat (APT) attack
   * *   **Supply Chain Attack**: supply chain attack
   * *   **Malicious software**: malware
   * 
   * @example
   * AliYun
   */
  tagIdNew?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      categoryId: 'CategoryId',
      currentPage: 'CurrentPage',
      dstIP: 'DstIP',
      endTime: 'EndTime',
      lang: 'Lang',
      order: 'Order',
      pageSize: 'PageSize',
      port: 'Port',
      privateIP: 'PrivateIP',
      publicIP: 'PublicIP',
      sort: 'Sort',
      startTime: 'StartTime',
      tagIdNew: 'TagIdNew',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      categoryId: 'string',
      currentPage: 'string',
      dstIP: 'string',
      endTime: 'string',
      lang: 'string',
      order: 'string',
      pageSize: 'string',
      port: 'string',
      privateIP: 'string',
      publicIP: 'string',
      sort: 'string',
      startTime: 'string',
      tagIdNew: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationIPResponseBody extends $tea.Model {
  /**
   * @remarks
   * The IP addresses in outbound connections.
   */
  dstIPList?: DescribeOutgoingDestinationIPResponseBodyDstIPList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of destination IP addresses in outbound connections.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dstIPList: 'DstIPList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstIPList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationIPResponseBodyDstIPList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationIPResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOutgoingDestinationIPResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOutgoingDestinationIPResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDomainRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the service. This parameter is empty by default. Valid values:
   * 
   * *   **All**: all services
   * *   **RiskDomain**: risky domain names
   * *   **RiskIP**: risky IP addresses
   * *   **AliYun**: Alibaba Cloud services
   * *   **NotAliYun**: third-party services
   * 
   * @example
   * All
   */
  categoryId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The domain name in outbound connections.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656750960
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the content within the request. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The method that is used to sort the results. Valid values:
   * 
   * *   **asc**: the ascending order.
   * *   **desc** (default): the descending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 6. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The public IP address of the Elastic Compute Service (ECS) instance that initiates outbound connections.
   * 
   * @example
   * 192.0.XX.XX
   */
  publicIP?: string;
  /**
   * @remarks
   * The field based on which you want to sort the query results. Valid values:
   * 
   * *   **SessionCount** (default): the number of requests.
   * *   **TotalBytes**: the total volume of traffic.
   * 
   * @example
   * SessionCount
   */
  sort?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656664560
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the tag. Valid values:
   * 
   * *   **AliYun**: Alibaba Cloud service
   * *   **RiskDomain**: risky domain name
   * *   **RiskIP**: risky IP address
   * *   **TrustedDomain**: trusted website
   * *   **AliPay**: Alipay
   * *   **DingDing**: DingTalk
   * *   **WeChat**: WeChat
   * *   **QQ**: Tencent QQ
   * *   **SecurityService**: security service
   * *   **Microsoft**: Microsoft
   * *   **Amazon**: Amazon Web Services (AWS)
   * *   **Pan**: cloud disk
   * *   **Map**: map
   * *   **Code**: code hosting
   * *   **SystemService**: system service
   * *   **Taobao**: Taobao
   * *   **Google**: Google
   * *   **ThirdPartyService**: third-party service
   * *   **FirstFlow**: the first time when an outbound connection is initiated
   * *   **Downloader**: malicious download
   * *   **Alexa Top1M**: popular website
   * *   **Miner**: mining pool
   * *   **Intelligence**: threat intelligence
   * *   **DDoS**: DDoS trojan
   * *   **Ransomware**: ransomware
   * *   **Spyware**: spyware
   * *   **Rogue**: rogue software
   * *   **Botnet**: botnet
   * *   **Suspicious**: suspicious website
   * *   **C\\&C**: command and control (C\\&C)
   * *   **Gang**: gang
   * *   **CVE**: Common Vulnerabilities and Exposures (CVE)
   * *   **Backdoor**: webshell
   * *   **Phishing**: phishing website
   * *   **APT**: advanced persistent threat (APT) attack
   * *   **Supply Chain Attack**: supply chain attack
   * *   **Malicious software**: malware
   * 
   * @example
   * AliYun
   */
  tagIdNew?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      currentPage: 'CurrentPage',
      domain: 'Domain',
      endTime: 'EndTime',
      lang: 'Lang',
      order: 'Order',
      pageSize: 'PageSize',
      publicIP: 'PublicIP',
      sort: 'Sort',
      startTime: 'StartTime',
      tagIdNew: 'TagIdNew',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      currentPage: 'string',
      domain: 'string',
      endTime: 'string',
      lang: 'string',
      order: 'string',
      pageSize: 'string',
      publicIP: 'string',
      sort: 'string',
      startTime: 'string',
      tagIdNew: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDomainResponseBody extends $tea.Model {
  /**
   * @remarks
   * An array that consists of the domain names in outbound connections.
   */
  domainList?: DescribeOutgoingDomainResponseBodyDomainList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the domain names in outbound connections.
   * 
   * @example
   * 132
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainList: 'DomainList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainList: { 'type': 'array', 'itemType': DescribeOutgoingDomainResponseBodyDomainList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOutgoingDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOutgoingDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyAdvancedConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The natural language of the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyAdvancedConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the strict mode is enabled for the access control policy. Valid values:
   * 
   * *   **on**: The strict mode is enabled.
   * *   **off**: The strict mode is disabled.
   * 
   * @example
   * off
   */
  internetSwitch?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125EEB1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      internetSwitch: 'InternetSwitch',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetSwitch: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyAdvancedConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePolicyAdvancedConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePolicyAdvancedConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyPriorUsedRequest extends $tea.Model {
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies.
   * 
   * Valid values:
   * 
   * *   **in**: inbound traffic
   * *   **out**: outbound traffic
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The IP version of the asset that is protected by Cloud Firewall.
   * 
   * Valid values:
   * 
   * *   **4**: IPv4 (default)
   * *   **6**: IPv6
   * 
   * @example
   * 6
   */
  ipVersion?: string;
  /**
   * @remarks
   * The natural language of the request and response.
   * 
   * Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      ipVersion: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyPriorUsedResponseBody extends $tea.Model {
  /**
   * @remarks
   * The lowest priority of existing access control policies.
   * 
   * >  The value -1 indicates the lowest priority.
   * 
   * @example
   * 150
   */
  end?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The highest priority of existing access control policies.
   * 
   * >  The value 0 indicates the highest priority.
   * 
   * @example
   * -1
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      requestId: 'RequestId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      requestId: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyPriorUsedResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePolicyPriorUsedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePolicyPriorUsedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePostpayTrafficDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. Specify a value in the YYYYMMDD format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20230130
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The field based on which you want to sort the query results. Valid values:
   * 
   * *   **resourceId**
   * *   **trafficDay**
   * 
   * @example
   * resourceId
   */
  order?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The instance ID or the IP address of the asset.
   * 
   * @example
   * 192.0.XX.XX
   */
  searchItem?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify a value in the YYYYMMDD format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20230101
   */
  startTime?: string;
  /**
   * @remarks
   * The traffic type. This parameter is required. Valid values:
   * 
   * *   **EIP_TRAFFIC**: traffic for the Internet firewall
   * *   **NatGateway_TRAFFIC**: traffic for NAT firewalls
   * *   **VPC_TRAFFIC**: traffic for virtual private cloud (VPC) firewalls
   * 
   * This parameter is required.
   * 
   * @example
   * EIP_TRAFFIC
   */
  trafficType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lang: 'Lang',
      order: 'Order',
      pageSize: 'PageSize',
      searchItem: 'SearchItem',
      startTime: 'StartTime',
      trafficType: 'TrafficType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'string',
      lang: 'string',
      order: 'string',
      pageSize: 'number',
      searchItem: 'string',
      startTime: 'string',
      trafficType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePostpayTrafficDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0525EADE-C112-5702-A5BC-0E2F6F94DB23
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 132
   */
  totalCount?: number;
  /**
   * @remarks
   * The statistics on traffic.
   */
  trafficList?: DescribePostpayTrafficDetailResponseBodyTrafficList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficList: 'TrafficList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      trafficList: { 'type': 'array', 'itemType': DescribePostpayTrafficDetailResponseBodyTrafficList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePostpayTrafficDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePostpayTrafficDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePostpayTrafficDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePostpayTrafficTotalRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePostpayTrafficTotalResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 826B6280-9704-5643-97B1-6B47AC3F027A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of assets protected all types of firewalls.
   * 
   * @example
   * 132
   */
  totalAssets?: number;
  /**
   * @remarks
   * The volume of burstable protected traffic for which fees are generated. Unit: bytes.
   * 
   * @example
   * 2320274874426
   */
  totalBillTraffic?: number;
  /**
   * @remarks
   * The total number of assets protected by the Internet firewall.
   * 
   * @example
   * 128
   */
  totalInternetAssets?: number;
  /**
   * @remarks
   * The total traffic for the Internet firewall. If you use Cloud Firewall that uses the subscription billing method, this parameter indicates the total volume of burstable protected traffic on the Internet boundary. Unit: bytes.
   * 
   * @example
   * 2320274874426
   */
  totalInternetTraffic?: number;
  /**
   * @remarks
   * The total number of assets protected by NAT firewalls.
   * 
   * @example
   * 1
   */
  totalNatAssets?: number;
  /**
   * @remarks
   * The total traffic for NAT firewalls. If you use Cloud Firewall that uses the subscription billing method, this parameter indicates the total volume of burstable protected traffic on the NAT boundary. Unit: bytes.
   * 
   * @example
   * 560646279
   */
  totalNatTraffic?: number;
  /**
   * @remarks
   * The total volume of traffic. If you use Cloud Firewall that uses the subscription billing method, this parameter indicates the total volume of burstable protected traffic. Unit: bytes.
   * 
   * @example
   * 2320274874426
   */
  totalTraffic?: number;
  /**
   * @remarks
   * The total number of assets protected by virtual private cloud (VPC) firewalls.
   * 
   * @example
   * 3
   */
  totalVpcAssets?: number;
  /**
   * @remarks
   * The total traffic for VPC firewalls. If you use Cloud Firewall that uses the subscription billing method, this parameter indicates the total volume of burstable protected traffic on the VPC boundary. Unit: bytes.
   * 
   * @example
   * 2320274874426
   */
  totalVpcTraffic?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalAssets: 'TotalAssets',
      totalBillTraffic: 'TotalBillTraffic',
      totalInternetAssets: 'TotalInternetAssets',
      totalInternetTraffic: 'TotalInternetTraffic',
      totalNatAssets: 'TotalNatAssets',
      totalNatTraffic: 'TotalNatTraffic',
      totalTraffic: 'TotalTraffic',
      totalVpcAssets: 'TotalVpcAssets',
      totalVpcTraffic: 'TotalVpcTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalAssets: 'number',
      totalBillTraffic: 'number',
      totalInternetAssets: 'number',
      totalInternetTraffic: 'number',
      totalNatAssets: 'number',
      totalNatTraffic: 'number',
      totalTraffic: 'number',
      totalVpcAssets: 'number',
      totalVpcTraffic: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePostpayTrafficTotalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePostpayTrafficTotalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePostpayTrafficTotalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrefixListsRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 47.100.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      regionNo: 'RegionNo',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionNo: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrefixListsResponseBody extends $tea.Model {
  /**
   * @remarks
   * Details about the prefix lists.
   */
  prefixList?: DescribePrefixListsResponseBodyPrefixList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 67FD76C2-C493-5815-8107-643FD7AB77C7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prefixList: 'PrefixList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefixList: { 'type': 'array', 'itemType': DescribePrefixListsResponseBodyPrefixList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrefixListsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePrefixListsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePrefixListsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The names of attacked applications. Set the value in the `["AttackApp1","AttackApp2"]` format.
   * 
   * @example
   * ["MySql","DNS"]
   */
  attackApp?: string[];
  /**
   * @remarks
   * The attack type of the intrusion events. Valid values:
   * 
   * *   **1**: suspicious connection
   * *   **2**: command execution
   * *   **3**: brute-force attack
   * *   **4**: scanning
   * *   **5**: others
   * *   **6**: information leak
   * *   **7**: DoS attack
   * *   **8**: buffer overflow attack
   * *   **9**: web attack
   * *   **10**: trojan backdoor
   * *   **11**: computer worm
   * *   **12**: mining
   * *   **13**: reverse shell
   * 
   * > If you do not specify this parameter, the intrusion events of all attack types are queried.
   * 
   * @example
   * 1
   */
  attackType?: string;
  /**
   * @remarks
   * The edition of Cloud Firewall that you purchase. Valid values:
   * 
   * *   **2**: Premium Edition
   * *   **3**: Enterprise Edition
   * *   **4**: Ultimate Edition
   * *   **10**: Cloud Firewall that uses the pay-as-you-go billing method
   * 
   * @example
   * 10
   */
  buyVersion?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The type of the risk events.\\
   * Set the value to **session**, which indicates intrusion events.
   * 
   * This parameter is required.
   * 
   * @example
   * session
   */
  dataType?: string;
  /**
   * @remarks
   * The direction of the traffic for the intrusion events. Valid values:
   * 
   * *   **in**: inbound
   * *   **out**: outbound
   * 
   * > If you do not specify this parameter, the intrusion events that are recorded for both inbound and outbound traffic are queried.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The destination IP address to query. If you specify this parameter, all intrusion events with the specified destination IP address are queried.
   * 
   * @example
   * 192.0.XX.XX
   */
  dstIP?: string;
  /**
   * @remarks
   * The ID of the destination VPC.
   * 
   * > If the FirewallType parameter is set to VpcFirewall, you must specify this parameter.
   * 
   * @example
   * vpc-uf6e9a9zyokj2ywuo****
   */
  dstNetworkInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1534408267
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the intrusion event.
   * 
   * @example
   * Webshell communication
   */
  eventName?: string;
  /**
   * @remarks
   * The type of the firewall. Valid values:
   * 
   * *   **VpcFirewall**: virtual private cloud (VPC) firewall
   * *   **InternetFirewall**: Internet firewall (default)
   * 
   * @example
   * InternetFirewall
   */
  firewallType?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to query the information about the geographical locations of IP addresses.
   * 
   * *   **true**: does not query the information about the geographical locations of IP addresses.
   * *   **false**: queries the information about the geographical locations of IP addresses. This is the default value.
   * 
   * @example
   * false
   */
  noLocation?: string;
  /**
   * @remarks
   * The order in which you want to sort the results. Valid values:
   * 
   * *   **asc**: the ascending order.
   * *   **desc**: the descending order. This is the default value.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: **6**. Maximum value: **10**.
   * 
   * @example
   * 6
   */
  pageSize?: string;
  /**
   * @remarks
   * The status of the firewall. Valid values:
   * 
   * *   **1**: alerting
   * *   **2**: blocking
   * 
   * > If you do not specify this parameter, all intrusion events that are detected by the firewall are queried, regardless of the firewall status.
   * 
   * @example
   * 1
   */
  ruleResult?: string;
  /**
   * @remarks
   * The module of the rule that is used to detect the intrusion events. Valid values:
   * 
   * *   **1**: basic protection
   * *   **2**: virtual patching
   * *   **4**: threat intelligence
   * 
   * > If you do not specify this parameter, the intrusion events that are detected by all rules are queried.
   * 
   * @example
   * 1
   */
  ruleSource?: string;
  /**
   * @remarks
   * The field based on which you want to sort the results. Valid values:
   * 
   * *   **VulLevel**: The results are sorted based on the risk level field. This is the default value.
   * *   **LastTime**: The results are sorted based on the most recent occurrence time.
   * 
   * @example
   * LastTime
   */
  sort?: string;
  /**
   * @remarks
   * The source IP address to query. If you specify this parameter, all intrusion events with the specified source IP address are queried.
   * 
   * @example
   * 192.0.XX.XX
   */
  srcIP?: string;
  /**
   * @remarks
   * The ID of the source VPC.
   * 
   * > If the FirewallType parameter is set to VpcFirewall, you must specify this parameter.
   * 
   * @example
   * vpc-uf6e9a9zyokj2ywuo****
   */
  srcNetworkInstanceId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1534408189
   */
  startTime?: string;
  /**
   * @remarks
   * The risk level of the intrusion events. Valid values:
   * 
   * *   **1**: low
   * *   **2**: medium
   * *   **3**: high
   * 
   * > If you do not specify this parameter, the intrusion events that are at all risk levels are queried.
   * 
   * @example
   * 1
   */
  vulLevel?: string;
  static names(): { [key: string]: string } {
    return {
      attackApp: 'AttackApp',
      attackType: 'AttackType',
      buyVersion: 'BuyVersion',
      currentPage: 'CurrentPage',
      dataType: 'DataType',
      direction: 'Direction',
      dstIP: 'DstIP',
      dstNetworkInstanceId: 'DstNetworkInstanceId',
      endTime: 'EndTime',
      eventName: 'EventName',
      firewallType: 'FirewallType',
      lang: 'Lang',
      noLocation: 'NoLocation',
      order: 'Order',
      pageSize: 'PageSize',
      ruleResult: 'RuleResult',
      ruleSource: 'RuleSource',
      sort: 'Sort',
      srcIP: 'SrcIP',
      srcNetworkInstanceId: 'SrcNetworkInstanceId',
      startTime: 'StartTime',
      vulLevel: 'VulLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackApp: { 'type': 'array', 'itemType': 'string' },
      attackType: 'string',
      buyVersion: 'number',
      currentPage: 'string',
      dataType: 'string',
      direction: 'string',
      dstIP: 'string',
      dstNetworkInstanceId: 'string',
      endTime: 'string',
      eventName: 'string',
      firewallType: 'string',
      lang: 'string',
      noLocation: 'string',
      order: 'string',
      pageSize: 'string',
      ruleResult: 'string',
      ruleSource: 'string',
      sort: 'string',
      srcIP: 'string',
      srcNetworkInstanceId: 'string',
      startTime: 'string',
      vulLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * An array that consists of the details of the intrusion events.
   */
  dataList?: DescribeRiskEventGroupResponseBodyDataList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B14757D0-4640-4B44-AC67-7F558FE7E6EF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of risk events.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeRiskEventGroupResponseBodyDataList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRiskEventGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRiskEventGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventPayloadRequest extends $tea.Model {
  /**
   * @remarks
   * The destination IP address to query. If you specify this parameter, all intrusion events with the specified destination IP address are queried.
   * 
   * @example
   * 203.0.113.2
   */
  dstIP?: string;
  /**
   * @remarks
   * The ID of the destination VPC to query. If you specify this parameter, all intrusion events that contain the specified ID of the destination VPC are queried.
   * 
   * @example
   * vpc-uf6jr1klwqb60dyn2****
   */
  dstVpcId?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1681288980
   */
  endTime?: string;
  /**
   * @remarks
   * The type of the firewall. Valid values:
   * 
   * *   **VpcFirewall**: virtual private cloud (VPC) firewall
   * *   **InternetFirewall** (default): Internet firewall
   * 
   * @example
   * InternetFirewall
   */
  firewallType?: string;
  /**
   * @remarks
   * The public IP address. If you specify this parameter, all intrusion events that contain the specified public IP address are queried.
   * 
   * @example
   * 203.0.113.3
   */
  publicIP?: string;
  /**
   * @remarks
   * The source IP address to query. If you specify this parameter, all intrusion events from the specified source IP address are queried.
   * 
   * @example
   * 203.0.113.1
   */
  srcIP?: string;
  /**
   * @remarks
   * The ID of the source VPC to query. If you specify this parameter, all intrusion events that contain the specified ID of the source VPC are queried.
   * 
   * @example
   * vpc-wz9j2lqyo15udw5nt****
   */
  srcVpcId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1669533617
   */
  startTime?: string;
  /**
   * @remarks
   * The UUID of the intrusion event.
   * 
   * This parameter is required.
   * 
   * @example
   * e62c25e0-1073-46bd-9567-b8f12b3d****
   */
  UUID?: string;
  static names(): { [key: string]: string } {
    return {
      dstIP: 'DstIP',
      dstVpcId: 'DstVpcId',
      endTime: 'EndTime',
      firewallType: 'FirewallType',
      publicIP: 'PublicIP',
      srcIP: 'SrcIP',
      srcVpcId: 'SrcVpcId',
      startTime: 'StartTime',
      UUID: 'UUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstIP: 'string',
      dstVpcId: 'string',
      endTime: 'string',
      firewallType: 'string',
      publicIP: 'string',
      srcIP: 'string',
      srcVpcId: 'string',
      startTime: 'string',
      UUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventPayloadResponseBody extends $tea.Model {
  /**
   * @remarks
   * The destination IP address of the intrusion event.
   * 
   * @example
   * 203.0.113.1
   */
  dstIP?: string;
  /**
   * @remarks
   * The destination port of the intrusion event.
   * 
   * @example
   * 8080
   */
  dstPort?: number;
  /**
   * @remarks
   * The destination VPC ID of the intrusion event.
   * 
   * @example
   * vpc-bp10w5nb30r4jzfyc****
   */
  dstVpcId?: string;
  /**
   * @remarks
   * The attack payload of the intrusion event.
   * 
   * @example
   * 302902010004067075626c6963a01c0204036a5f43020100020100300e300c06082b060102010101000500
   */
  payload?: string;
  /**
   * @remarks
   * The length of the attack payload of the intrusion event.
   * 
   * @example
   * 457
   */
  payloadLen?: number;
  /**
   * @remarks
   * The protocol type of intrusion event. Valid values:
   * 
   * *   **TCP**
   * *   **UDP**
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The HTTP X-Real-IP field.
   * 
   * @example
   * 203.0.113.3
   */
  realIp?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 68055BA4-D8BD-5611-AC49-C651E619A12E
   */
  requestId?: string;
  /**
   * @remarks
   * The source IP address of the intrusion event.
   * 
   * @example
   * 203.0.113.2
   */
  srcIP?: string;
  /**
   * @remarks
   * The source port of the intrusion event.
   * 
   * @example
   * 54360
   */
  srcPort?: number;
  /**
   * @remarks
   * The source VPC ID of the intrusion event.
   * 
   * @example
   * vpc-t4nlt09olhpazpoeg****
   */
  srcVpcId?: string;
  /**
   * @remarks
   * The HTTP X-Forwarded-For field.
   * 
   * @example
   * 203.0.113.4
   */
  XForwardFor?: string;
  static names(): { [key: string]: string } {
    return {
      dstIP: 'DstIP',
      dstPort: 'DstPort',
      dstVpcId: 'DstVpcId',
      payload: 'Payload',
      payloadLen: 'PayloadLen',
      proto: 'Proto',
      realIp: 'RealIp',
      requestId: 'RequestId',
      srcIP: 'SrcIP',
      srcPort: 'SrcPort',
      srcVpcId: 'SrcVpcId',
      XForwardFor: 'XForwardFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstIP: 'string',
      dstPort: 'number',
      dstVpcId: 'string',
      payload: 'string',
      payloadLen: 'number',
      proto: 'string',
      realIp: 'string',
      requestId: 'string',
      srcIP: 'string',
      srcPort: 'number',
      srcVpcId: 'string',
      XForwardFor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventPayloadResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRiskEventPayloadResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRiskEventPayloadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignatureLibVersionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9C50C2A9-4BBB-5504-8ADA-C41A79B8C946
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 132
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the versions.
   */
  version?: DescribeSignatureLibVersionResponseBodyVersion[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      version: { 'type': 'array', 'itemType': DescribeSignatureLibVersionResponseBodyVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignatureLibVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSignatureLibVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSignatureLibVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallPolicyBackUpAssociationListRequest extends $tea.Model {
  /**
   * @remarks
   * The traffic redirection instances.
   */
  candidateList?: DescribeTrFirewallPolicyBackUpAssociationListRequestCandidateList[];
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-8b268ce1b26e4c68****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * policy-5dcafb12ff794a56****
   */
  trFirewallRoutePolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      candidateList: 'CandidateList',
      firewallId: 'FirewallId',
      lang: 'Lang',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateList: { 'type': 'array', 'itemType': DescribeTrFirewallPolicyBackUpAssociationListRequestCandidateList },
      firewallId: 'string',
      lang: 'string',
      trFirewallRoutePolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallPolicyBackUpAssociationListShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The traffic redirection instances.
   */
  candidateListShrink?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-8b268ce1b26e4c68****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * policy-5dcafb12ff794a56****
   */
  trFirewallRoutePolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      candidateListShrink: 'CandidateList',
      firewallId: 'FirewallId',
      lang: 'Lang',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateListShrink: 'string',
      firewallId: 'string',
      lang: 'string',
      trFirewallRoutePolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallPolicyBackUpAssociationListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The route tables.
   */
  policyAssociationBackupConfigs?: DescribeTrFirewallPolicyBackUpAssociationListResponseBodyPolicyAssociationBackupConfigs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C264A756-9B48-57E3-B312-716941E146C6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyAssociationBackupConfigs: 'PolicyAssociationBackupConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyAssociationBackupConfigs: { 'type': 'array', 'itemType': DescribeTrFirewallPolicyBackUpAssociationListResponseBodyPolicyAssociationBackupConfigs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallPolicyBackUpAssociationListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTrFirewallPolicyBackUpAssociationListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTrFirewallPolicyBackUpAssociationListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallV2RoutePolicyListRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-d5ba592ac6c84aff****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * policy-7b66257c14e141fb****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      firewallId: 'FirewallId',
      lang: 'Lang',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      firewallId: 'string',
      lang: 'string',
      pageSize: 'number',
      policyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallV2RoutePolicyListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95EB5F3A-67FE-5780-92BD-5ECBA772AB7E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  /**
   * @remarks
   * The routing policies.
   */
  trFirewallRoutePolicies?: DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePolicies[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trFirewallRoutePolicies: 'TrFirewallRoutePolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'string',
      trFirewallRoutePolicies: { 'type': 'array', 'itemType': DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePolicies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallV2RoutePolicyListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTrFirewallV2RoutePolicyListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTrFirewallV2RoutePolicyListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallsV2DetailRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-a5a6b89f46764928****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      firewallId: 'FirewallId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallsV2DetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * @example
   * cen-37nddhri7jf0d2****
   */
  cenId?: string;
  /**
   * @remarks
   * The description of the VPC firewall.
   * 
   * @example
   * VPC Firewall
   */
  firewallDescription?: string;
  /**
   * @remarks
   * The ID of the Elastic Network Interface (ENI) with which the VPC firewall is associated.
   * 
   * @example
   * eni-uf621u00nafypeex****
   */
  firewallEniId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the ENI is attached.
   * 
   * @example
   * vpc-2zeppcci782zeh2bk****
   */
  firewallEniVpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the ENI is associated.
   * 
   * @example
   * vsw-uf6ptq1kl1c1d9pw9****
   */
  firewallEniVswitchId?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-9c7c711abdfa4d80****
   */
  firewallId?: string;
  /**
   * @remarks
   * The name of the VPC firewall.
   * 
   * @example
   * cloudfirewall-manual
   */
  firewallName?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * *   Creating
   * *   Deleting
   * *   Ready
   * 
   * @example
   * Ready
   */
  firewallStatus?: string;
  /**
   * @remarks
   * The subnet CIDR block of the VPC in which the ENI of the firewall is stored in automatic mode.
   * 
   * @example
   * 10.0.1.0/24
   */
  firewallSubnetCidr?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * *   **opened**: The VPC firewall is enabled.
   * *   **closed**: The VPC firewall is disabled.
   * *   **notconfigured**: The VPC firewall is not created.
   * *   **configured**: The VPC firewall is created but is not enabled.
   * *   **creating**: The VPC firewall is being created.
   * *   **opening**: The VPC firewall is being enabled.
   * *   **deleting**: The VPC firewall is being deleted.
   * 
   * > If you do not specify this parameter, VPC firewalls in all states are queried.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The CIDR block that is allocated to the VPC created for the VPC firewall in automatic mode.
   * 
   * @example
   * 10.0.0.0/16
   */
  firewallVpcCidr?: string;
  /**
   * @remarks
   * The region ID of the transit router.
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E53A7FB-3EB9-5E33-8E50-B8F417D1E02B
   */
  requestId?: string;
  /**
   * @remarks
   * The routing mode of the VPC firewall. Valid values:
   * 
   * *   **managed**: automatic mode
   * *   **manual**: manual mode
   * 
   * @example
   * managed
   */
  routeMode?: string;
  /**
   * @remarks
   * The primary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
   * 
   * @example
   * 10.0.2.0/24
   */
  trAttachmentMasterCidr?: string;
  /**
   * @remarks
   * The secondary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
   * 
   * @example
   * 10.0.3.0/24
   */
  trAttachmentSlaveCidr?: string;
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-wz9y8sgug8b1xb416****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      firewallDescription: 'FirewallDescription',
      firewallEniId: 'FirewallEniId',
      firewallEniVpcId: 'FirewallEniVpcId',
      firewallEniVswitchId: 'FirewallEniVswitchId',
      firewallId: 'FirewallId',
      firewallName: 'FirewallName',
      firewallStatus: 'FirewallStatus',
      firewallSubnetCidr: 'FirewallSubnetCidr',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      firewallVpcCidr: 'FirewallVpcCidr',
      regionNo: 'RegionNo',
      requestId: 'RequestId',
      routeMode: 'RouteMode',
      trAttachmentMasterCidr: 'TrAttachmentMasterCidr',
      trAttachmentSlaveCidr: 'TrAttachmentSlaveCidr',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      firewallDescription: 'string',
      firewallEniId: 'string',
      firewallEniVpcId: 'string',
      firewallEniVswitchId: 'string',
      firewallId: 'string',
      firewallName: 'string',
      firewallStatus: 'string',
      firewallSubnetCidr: 'string',
      firewallSwitchStatus: 'string',
      firewallVpcCidr: 'string',
      regionNo: 'string',
      requestId: 'string',
      routeMode: 'string',
      trAttachmentMasterCidr: 'string',
      trAttachmentSlaveCidr: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallsV2DetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTrFirewallsV2DetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTrFirewallsV2DetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallsV2ListRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * @example
   * cen-rig0t5zi96crkl****
   */
  cenId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-f1799baa9e254651****
   */
  firewallId?: string;
  /**
   * @remarks
   * The name of the VPC firewall.
   * 
   * @example
   * test
   */
  firewallName?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * *   **opened**: The VPC firewall is enabled.
   * *   **closed**: The VPC firewall is disabled.
   * *   **notconfigured**: The VPC firewall is not created.
   * *   **configured**: The VPC firewall is created but is not enabled.
   * *   **creating**: The VPC firewall is being created.
   * *   **opening**: The VPC firewall is being enabled.
   * *   **deleting**: The VPC firewall is being deleted.
   * 
   * >  If you do not specify this parameter, VPC firewalls in all states are queried.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  ownerId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the transit router.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The routing mode of the VPC firewall. Valid values:
   * 
   * *   **managed**: automatic mode
   * *   **manual**: manual mode
   * 
   * >  If you do not specify this parameter, VPC firewalls in all routing modes are queried.
   * 
   * @example
   * managed
   */
  routeMode?: string;
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-uf6egtvyaedvt20xl****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      currentPage: 'CurrentPage',
      firewallId: 'FirewallId',
      firewallName: 'FirewallName',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      lang: 'Lang',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      regionNo: 'RegionNo',
      routeMode: 'RouteMode',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      currentPage: 'number',
      firewallId: 'string',
      firewallName: 'string',
      firewallSwitchStatus: 'string',
      lang: 'string',
      ownerId: 'string',
      pageSize: 'number',
      regionNo: 'string',
      routeMode: 'string',
      transitRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallsV2ListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1471E2EC-F706-5F11-A79B-BD583ACB8297
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 6
   */
  totalCount?: string;
  /**
   * @remarks
   * The VPC firewalls.
   */
  vpcTrFirewalls?: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewalls[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcTrFirewalls: 'VpcTrFirewalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'string',
      vpcTrFirewalls: { 'type': 'array', 'itemType': DescribeTrFirewallsV2ListResponseBodyVpcTrFirewalls },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallsV2ListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTrFirewallsV2ListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTrFirewallsV2ListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallsV2RouteListRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewall.
   * 
   * @example
   * vfw-tr-8bcfa0f2f12d411e****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * policy-7d5c672e37ee4175****
   */
  trFirewallRoutePolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      firewallId: 'FirewallId',
      lang: 'Lang',
      pageSize: 'PageSize',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      firewallId: 'string',
      lang: 'string',
      pageSize: 'string',
      trFirewallRoutePolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallsV2RouteListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The route tables of Cloud Firewall.
   */
  firewallRouteDetailList?: DescribeTrFirewallsV2RouteListResponseBodyFirewallRouteDetailList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABF190A2-B4D0-53F6-995A-5690A721F91C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallRouteDetailList: 'FirewallRouteDetailList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallRouteDetailList: { 'type': 'array', 'itemType': DescribeTrFirewallsV2RouteListResponseBodyFirewallRouteDetailList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallsV2RouteListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTrFirewallsV2RouteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTrFirewallsV2RouteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserAssetIPTrafficInfoRequest extends $tea.Model {
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.0.XX.XX
   */
  assetIP?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656923760
   */
  trafficTime?: string;
  static names(): { [key: string]: string } {
    return {
      assetIP: 'AssetIP',
      lang: 'Lang',
      trafficTime: 'TrafficTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetIP: 'string',
      lang: 'string',
      trafficTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserAssetIPTrafficInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1656923760
   */
  endTime?: number;
  /**
   * @remarks
   * The network throughput, which indicates the inbound traffic rate. Unit: bit/s.
   * 
   * @example
   * 4520
   */
  inBps?: number;
  /**
   * @remarks
   * The inbound network throughput, which indicates the number of packets that are sent inbound per second. Unit: packets per second (pps).
   * 
   * @example
   * 233
   */
  inPps?: number;
  /**
   * @remarks
   * The new connection creation rate.
   * 
   * @example
   * 43
   */
  newConn?: number;
  /**
   * @remarks
   * The network throughput, which indicates the outbound traffic rate. Unit: bit/s.
   * 
   * @example
   * 4180
   */
  outBps?: number;
  /**
   * @remarks
   * The outbound network throughput, which indicates the number of packets that are sent outbound per second. Unit: pps.
   * 
   * @example
   * 224
   */
  outPps?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of requests.
   * 
   * @example
   * 50
   */
  sessionCount?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1656837360
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      inBps: 'InBps',
      inPps: 'InPps',
      newConn: 'NewConn',
      outBps: 'OutBps',
      outPps: 'OutPps',
      requestId: 'RequestId',
      sessionCount: 'SessionCount',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      inBps: 'number',
      inPps: 'number',
      newConn: 'number',
      outBps: 'number',
      outPps: 'number',
      requestId: 'string',
      sessionCount: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserAssetIPTrafficInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserAssetIPTrafficInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserAssetIPTrafficInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserIPSWhitelistRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserIPSWhitelistResponseBody extends $tea.Model {
  ipv6Whitelists?: DescribeUserIPSWhitelistResponseBodyIpv6Whitelists[];
  requestId?: string;
  whitelists?: DescribeUserIPSWhitelistResponseBodyWhitelists[];
  static names(): { [key: string]: string } {
    return {
      ipv6Whitelists: 'Ipv6Whitelists',
      requestId: 'RequestId',
      whitelists: 'Whitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Whitelists: { 'type': 'array', 'itemType': DescribeUserIPSWhitelistResponseBodyIpv6Whitelists },
      requestId: 'string',
      whitelists: { 'type': 'array', 'itemType': DescribeUserIPSWhitelistResponseBodyWhitelists },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserIPSWhitelistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserIPSWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserIPSWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallAclGroupListRequest extends $tea.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Specifies whether VPC firewalls are configured. Valid values:
   * 
   * *   **notconfigured**: VPC firewalls are not configured.
   * *   **configured**: VPC firewalls are configured.
   * *   If you do not specify this parameter, the access control policies of all VPC firewalls are queried.
   * 
   * @example
   * configured
   */
  firewallConfigureStatus?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      firewallConfigureStatus: 'FirewallConfigureStatus',
      lang: 'Lang',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      firewallConfigureStatus: 'string',
      lang: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallAclGroupListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the policy groups.
   */
  aclGroupList?: DescribeVpcFirewallAclGroupListResponseBodyAclGroupList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the policy groups that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aclGroupList: 'AclGroupList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclGroupList: { 'type': 'array', 'itemType': DescribeVpcFirewallAclGroupListResponseBodyAclGroupList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallAclGroupListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVpcFirewallAclGroupListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcFirewallAclGroupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the VPC for which the VPC firewall is created.
   * 
   * @example
   * vpc-2zefk9fbn8j7v585g****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * > You can call the [DescribeVpcFirewallCenList](https://help.aliyun.com/document_detail/345777.html) operation to query the instance IDs of VPC firewalls.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      networkInstanceId: 'NetworkInstanceId',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      networkInstanceId: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The connection type of the VPC firewall. The value is fixed as **cen**, which indicates CEN instances.
   * 
   * @example
   * cen
   */
  connectType?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * *   **opened**: enabled
   * *   **closed**: disabled
   * *   **notconfigured**: not configured
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The VPC that is automatically created for the firewall.
   */
  firewallVpc?: DescribeVpcFirewallCenDetailResponseBodyFirewallVpc;
  /**
   * @remarks
   * The details about the VPC.
   */
  localVpc?: DescribeVpcFirewallCenDetailResponseBodyLocalVpc;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125g4d2
   */
  requestId?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The instance name of the VPC firewall.
   * 
   * @example
   * Test firewall
   */
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      connectType: 'ConnectType',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      firewallVpc: 'FirewallVpc',
      localVpc: 'LocalVpc',
      requestId: 'RequestId',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectType: 'string',
      firewallSwitchStatus: 'string',
      firewallVpc: DescribeVpcFirewallCenDetailResponseBodyFirewallVpc,
      localVpc: DescribeVpcFirewallCenDetailResponseBodyLocalVpc,
      requestId: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVpcFirewallCenDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcFirewallCenDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenListRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-x5jayxou71ad73****
   */
  cenId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * *   **opened**: The VPC firewall is enabled.
   * *   **closed**: The VPC firewall is disabled.
   * *   **notconfigured**: The VPC firewall is not configured.
   * *   **configured**: The VPC firewall is configured but is not enabled.
   * 
   * > If you do not specify this parameter, VPC firewalls in all states are queried.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account. The member is also an Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  networkInstanceId?: string;
  ownerId?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * > For more information about the regions, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The routing mode of the VPC firewall. Valid values:
   * 
   * *   **auto**: automatic mode
   * *   **manual**: manual mode
   * 
   * > If you do not specify this parameter, VPC firewalls in all routing modes are queried.
   * 
   * @example
   * auto
   */
  routeMode?: string;
  /**
   * @remarks
   * The type of the transit router. Valid values:
   * 
   * *   **Basic**: Basic Edition transit router
   * *   **Enterprise**: Enterprise Edition transit router
   * 
   * @example
   * Basic
   */
  transitRouterType?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The instance name of the VPC firewall.
   * 
   * @example
   * Test firewall
   */
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      currentPage: 'CurrentPage',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      lang: 'Lang',
      memberUid: 'MemberUid',
      networkInstanceId: 'NetworkInstanceId',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      regionNo: 'RegionNo',
      routeMode: 'RouteMode',
      transitRouterType: 'TransitRouterType',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      currentPage: 'string',
      firewallSwitchStatus: 'string',
      lang: 'string',
      memberUid: 'string',
      networkInstanceId: 'string',
      ownerId: 'string',
      pageSize: 'string',
      regionNo: 'string',
      routeMode: 'string',
      transitRouterType: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125k8g2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of VPC firewalls.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * An array that consists of the details about the VPC firewall.
   */
  vpcFirewalls?: DescribeVpcFirewallCenListResponseBodyVpcFirewalls[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcFirewalls: 'VpcFirewalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      vpcFirewalls: { 'type': 'array', 'itemType': DescribeVpcFirewallCenListResponseBodyVpcFirewalls },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVpcFirewallCenListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcFirewallCenListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallControlPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic. Valid values:
   * 
   * *   **accept**: allows the traffic.
   * *   **drop**: blocks the traffic.
   * *   **log**: monitors the traffic.
   * 
   * > If you do not specify this parameter, access control policies are queried based on all actions.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The unique ID of the access control policy.
   * 
   * @example
   * 4037fbf7-3e39-4634-92a4-d0155247****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The description of the access control policy. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Fuzzy match is supported.
   * 
   * > The value of this parameter can be a CIDR block or an address book name.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Maximum value: 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The protocol type in the access control policy. Valid values:
   * 
   * *   **TCP**
   * *   **UDP**
   * *   **ICMP**
   * *   **ANY**: all protocol types
   * 
   * > If you do not specify this parameter, access control policies of all protocol types are queried.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The status of the access control policy. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The recurrence type for the access control policy to take effect. Valid values:
   * 
   * *   **Permanent** (default): The policy always takes effect.
   * *   **None**: The policy takes effect for only once.
   * *   **Daily**: The policy takes effect on a daily basis.
   * *   **Weekly**: The policy takes effect on a weekly basis.
   * *   **Monthly**: The policy takes effect on a monthly basis.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Fuzzy match is supported.
   * 
   * > The value of this parameter can be a CIDR block or an address book name.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall. Valid values:
   * 
   * *   If the VPC firewall protects the traffic between two VPCs that are connected by using a CEN instance, the value of this parameter must be the ID of the CEN instance.
   * *   If the VPC firewall protects the traffic between two VPCs that are connected by using an Express Connect circuit, the value of this parameter must be the instance ID of the VPC firewall.
   * 
   * > You can call the [DescribeVpcFirewallAclGroupList](https://help.aliyun.com/document_detail/159760.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-a42bbb7b887148c9****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      currentPage: 'CurrentPage',
      description: 'Description',
      destination: 'Destination',
      lang: 'Lang',
      memberUid: 'MemberUid',
      pageSize: 'PageSize',
      proto: 'Proto',
      release: 'Release',
      repeatType: 'RepeatType',
      source: 'Source',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      currentPage: 'string',
      description: 'string',
      destination: 'string',
      lang: 'string',
      memberUid: 'string',
      pageSize: 'string',
      proto: 'string',
      release: 'string',
      repeatType: 'string',
      source: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallControlPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The access control policies.
   */
  policys?: DescribeVpcFirewallControlPolicyResponseBodyPolicys[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of access control policies returned.
   * 
   * @example
   * 20
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      policys: 'Policys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policys: { 'type': 'array', 'itemType': DescribeVpcFirewallControlPolicyResponseBodyPolicys },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallControlPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVpcFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcFirewallControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDefaultIPSConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall. Valid values:
   * 
   * *   If the VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a Cloud Enterprise Network (CEN) instance, the value of this parameter is the ID of the CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. You can call the [DescribeVpcFirewallCenList](https://help.aliyun.com/document_detail/345777.html) operation to query the IDs of CEN instances.
   * *   If the VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit, the value of this parameter is the instance ID of the VPC firewall. You can call the [DescribeVpcFirewallList](https://help.aliyun.com/document_detail/342932.html) operation to query the instance IDs of VPC firewalls.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      memberUid: 'MemberUid',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberUid: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDefaultIPSConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether basic policies are enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  basicRules?: number;
  /**
   * @remarks
   * Indicates whether virtual patching is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  enableAllPatch?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125adf1
   */
  requestId?: string;
  ruleClass?: number;
  /**
   * @remarks
   * The mode of the intrusion prevention system (IPS). Valid values:
   * 
   * *   **1**: block mode
   * *   **0**: monitor mode
   * 
   * @example
   * 0
   */
  runMode?: number;
  static names(): { [key: string]: string } {
    return {
      basicRules: 'BasicRules',
      enableAllPatch: 'EnableAllPatch',
      requestId: 'RequestId',
      ruleClass: 'RuleClass',
      runMode: 'RunMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicRules: 'number',
      enableAllPatch: 'number',
      requestId: 'string',
      ruleClass: 'number',
      runMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDefaultIPSConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVpcFirewallDefaultIPSConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcFirewallDefaultIPSConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The natural language of the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the local VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  localVpcId?: string;
  /**
   * @remarks
   * The ID of the peer VPC.
   * 
   * @example
   * vpc-90rq0anm6t8vbwbo****
   */
  peerVpcId?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * >  You can call the [DescribeVpcFirewallList](https://help.aliyun.com/document_detail/342932.html) operation to query the instance IDs of VPC firewalls.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      localVpcId: 'LocalVpcId',
      peerVpcId: 'PeerVpcId',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      localVpcId: 'string',
      peerVpcId: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The bandwidth of the Express Connect circuit. Unit: Mbit/s.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The connection type of the VPC firewall. The value is fixed as **expressconnect**, which indicates Express Connect circuits.
   * 
   * @example
   * expressconnect
   */
  connectType?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * *   **opened**: The VPC firewall is enabled.
   * *   **closed**: The VPC firewall is disabled.
   * *   **notconfigured**: The VPC firewall is not configured.
   * *   **configured**: The VPC firewall is configured.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The details about the local VPC.
   */
  localVpc?: DescribeVpcFirewallDetailResponseBodyLocalVpc;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The details about the peer VPC.
   */
  peerVpc?: DescribeVpcFirewallDetailResponseBodyPeerVpc;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125g4d2
   */
  requestId?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The instance name of the VPC firewall.
   * 
   * @example
   * tf-test
   */
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      connectType: 'ConnectType',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      localVpc: 'LocalVpc',
      memberUid: 'MemberUid',
      peerVpc: 'PeerVpc',
      requestId: 'RequestId',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      connectType: 'string',
      firewallSwitchStatus: 'string',
      localVpc: DescribeVpcFirewallDetailResponseBodyLocalVpc,
      memberUid: 'string',
      peerVpc: DescribeVpcFirewallDetailResponseBodyPeerVpc,
      requestId: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVpcFirewallDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcFirewallDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallIPSWhitelistRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member in Cloud Firewall.
   * 
   * @example
   * 1766185894104675
   */
  memberUid?: number;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-3547deab1c9b4190a53f
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      memberUid: 'MemberUid',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      memberUid: 'number',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallIPSWhitelistResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B5EE02F9-4F21-56CA-AA49-F9F8D69483C1
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the IPS whitelist of the VPC firewall.
   */
  whitelists?: DescribeVpcFirewallIPSWhitelistResponseBodyWhitelists[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      whitelists: 'Whitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      whitelists: { 'type': 'array', 'itemType': DescribeVpcFirewallIPSWhitelistResponseBodyWhitelists },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallIPSWhitelistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVpcFirewallIPSWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcFirewallIPSWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListRequest extends $tea.Model {
  /**
   * @remarks
   * The sub-type of the connection. Valid values:
   * 
   * *   **vpc2vpc**: Express Connect connection
   * *   **vpcpeer**: peer connection
   * 
   * @example
   * vpcpeer
   */
  connectSubType?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * *   **opened**: The VPC firewall is enabled.
   * *   **closed**: The VPC firewall is disabled.
   * *   **notconfigured**: The VPC firewall is not configured.
   * *   **configured**: The VPC firewall is configured.
   * 
   * > If you do not specify this parameter, VPC firewalls in all states are queried.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: **10**. Maximum value: **50**.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account to which the peer VPC belongs.
   * 
   * @example
   * 258039427902****
   */
  peerUid?: string;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * > For more information about the regions, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The instance name of the VPC firewall.
   * 
   * @example
   * Test firewall
   */
  vpcFirewallName?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectSubType: 'ConnectSubType',
      currentPage: 'CurrentPage',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      lang: 'Lang',
      memberUid: 'MemberUid',
      pageSize: 'PageSize',
      peerUid: 'PeerUid',
      regionNo: 'RegionNo',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectSubType: 'string',
      currentPage: 'string',
      firewallSwitchStatus: 'string',
      lang: 'string',
      memberUid: 'string',
      pageSize: 'string',
      peerUid: 'string',
      regionNo: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125k8g2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of VPC firewalls.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * An array that consists of the details about the VPC firewall.
   */
  vpcFirewalls?: DescribeVpcFirewallListResponseBodyVpcFirewalls[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcFirewalls: 'VpcFirewalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      vpcFirewalls: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewalls },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVpcFirewallListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcFirewallListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallPolicyPriorUsedRequest extends $tea.Model {
  /**
   * @remarks
   * The natural language of the request and response. 
   * 
   * Valid values:
   * 
   * - **zh**: Chinese (default)
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the policy group to which the access control policy belongs. You can call the DescribeVpcFirewallAclGroupList operation to query the ID.  
   * 
   * Valid values:
   * 
   * - If the VPC firewall is used to protect a Cloud Enterprise Network (CEN) instance, the value of this parameter is the ID of the CEN instance.  
   * 
   * Example: cen-ervw0g12b5jbw****
   * - If the VPC firewall is used to protect an Express Connect circuit, the value of this parameter is the ID of the VPC firewall instance.  
   * 
   * Example: vfw-a42bbb7b887148c9****
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-a42bbb7b887148c9****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallPolicyPriorUsedResponseBody extends $tea.Model {
  /**
   * @remarks
   * The lowest priority for the access control policy.
   * 
   * @example
   * 150
   */
  end?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The highest priority for the access control policy.
   * 
   * @example
   * 1
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      requestId: 'RequestId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      requestId: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallPolicyPriorUsedResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVpcFirewallPolicyPriorUsedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcFirewallPolicyPriorUsedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcListLiteRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * >  For more information about Cloud Firewall supported regions, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 58.34.174.194
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * vpc-shanghai
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regionNo: 'RegionNo',
      sourceIp: 'SourceIp',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regionNo: 'string',
      sourceIp: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcListLiteResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 55E56A55-D93A-5614-AE00-BE2F8077F891
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the VPCs.
   */
  vpcList?: DescribeVpcListLiteResponseBodyVpcList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcList: 'VpcList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcList: { 'type': 'array', 'itemType': DescribeVpcListLiteResponseBodyVpcList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcListLiteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVpcListLiteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcListLiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcZoneRequest extends $tea.Model {
  /**
   * @remarks
   * The environment. Valid values:
   * 
   * *   **VPC**
   * *   **TransitRouter**
   * 
   * @example
   * VPC
   */
  environment?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member in Cloud Firewall.
   * 
   * @example
   * 1415189284827022
   */
  memberUid?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      lang: 'Lang',
      memberUid: 'MemberUid',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      lang: 'string',
      memberUid: 'string',
      regionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcZoneResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 694DFBF3-C060-529F-92D0-7FC7E0DA1E21
   */
  requestId?: string;
  /**
   * @remarks
   * The zones.
   */
  zoneList?: DescribeVpcZoneResponseBodyZoneList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneList: 'ZoneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneList: { 'type': 'array', 'itemType': DescribeVpcZoneResponseBodyZoneList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcZoneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVpcZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulnerabilityProtectedListRequest extends $tea.Model {
  /**
   * @remarks
   * The attack type of the vulnerability prevention event. Valid values:
   * 
   * *   **1**: suspicious connection
   * *   **2**: command execution
   * *   **3**: brute-force attack
   * *   **4**: scanning
   * *   **5**: others
   * *   **6**: information leakage
   * *   **7**: DoS attack
   * *   **8**: buffer overflow attack
   * *   **9**: web attack
   * *   **10**: webshell
   * *   **11**: computer worm
   * *   **12**: mining
   * *   **13**: reverse shell
   * 
   * >  If you do not specify this parameter, the intrusion events of all attack types are queried.
   * 
   * @example
   * 13
   */
  attackType?: string;
  /**
   * @remarks
   * The edition of Cloud Firewall. If you use Cloud Firewall that uses the pay-as-you-go billing method, set the value to 10. You do not need to specify this parameter for other editions.
   * 
   * @example
   * 10
   */
  buyVersion?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1646063922
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The order in which you want to sort the queried information. Valid values:
   * 
   * *   **asc**: the ascending order.
   * *   **desc**: the descending order. This is the default value.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The sorting basis. Set the value to **attackCnt**, which indicates the number of attacks.
   * 
   * @example
   * attackCnt
   */
  sortKey?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 112.239.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1655778046
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the user. Set the value to **buy**, which indicates user of a paid edition of Cloud Firewall.
   * 
   * @example
   * buy
   */
  userType?: string;
  /**
   * @remarks
   * The Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.
   * 
   * @example
   * CVE-2022-2992
   */
  vulnCveName?: string;
  /**
   * @remarks
   * The risk level of the vulnerability. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * medium
   */
  vulnLevel?: string;
  /**
   * @remarks
   * The number of assets that are affected by the vulnerability.
   * 
   * @example
   * 1
   */
  vulnResource?: string;
  /**
   * @remarks
   * The status of vulnerability protection. Valid values:
   * 
   * *   **partProtected**: partially protected
   * *   **protected**: protected
   * *   **unProtected**: unprotected
   * 
   * @example
   * protected
   */
  vulnStatus?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **App**: application vulnerability
   * *   **emg**: urgent vulnerability
   * *   **cms**: Web-CMS vulnerability
   * 
   * @example
   * emg
   */
  vulnType?: string;
  static names(): { [key: string]: string } {
    return {
      attackType: 'AttackType',
      buyVersion: 'BuyVersion',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lang: 'Lang',
      memberUid: 'MemberUid',
      order: 'Order',
      pageSize: 'PageSize',
      sortKey: 'SortKey',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
      userType: 'UserType',
      vulnCveName: 'VulnCveName',
      vulnLevel: 'VulnLevel',
      vulnResource: 'VulnResource',
      vulnStatus: 'VulnStatus',
      vulnType: 'VulnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackType: 'string',
      buyVersion: 'number',
      currentPage: 'string',
      endTime: 'string',
      lang: 'string',
      memberUid: 'string',
      order: 'string',
      pageSize: 'string',
      sortKey: 'string',
      sourceIp: 'string',
      startTime: 'string',
      userType: 'string',
      vulnCveName: 'string',
      vulnLevel: 'string',
      vulnResource: 'string',
      vulnStatus: 'string',
      vulnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulnerabilityProtectedListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D355C631-1537-59C5-A56E-F6C5037B99E5
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of vulnerabilities that are detected by Cloud Firewall.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * The vulnerabilities.
   */
  vulnList?: DescribeVulnerabilityProtectedListResponseBodyVulnList[];
  /**
   * @remarks
   * The number of assets on which no vulnerabilities are detected.
   * 
   * @example
   * 1
   */
  zeroResourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vulnList: 'VulnList',
      zeroResourceCount: 'ZeroResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      vulnList: { 'type': 'array', 'itemType': DescribeVulnerabilityProtectedListResponseBodyVulnList },
      zeroResourceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulnerabilityProtectedListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVulnerabilityProtectedListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVulnerabilityProtectedListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAddressBookRequest extends $tea.Model {
  /**
   * @remarks
   * The addresses in the address book. Separate multiple addresses with commas (,). If you set GroupType to **ip**, **port**, or **domain**, you must specify this parameter.
   * 
   * *   If you set GroupType to **ip**, you must specify IP addresses for the address book. Example: 1.2.XX.XX/32,1.2.XX.XX/24.
   * *   If you set GroupType to **port**, you must specify port numbers or port ranges for the address book. Example: 80/80,100/200.
   * *   If you set GroupType to **domain**, you must specify domain names for the address book. Example: demo1.aliyun.com,demo2.aliyun.com.
   * 
   * @example
   * 192.0.XX.XX/32, 192.0.XX.XX/24
   */
  addressList?: string;
  /**
   * @remarks
   * Specifies whether to automatically add public IP addresses of Elastic Compute Service (ECS) instances to the address book if the instances match the specified tags. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  autoAddTagEcs?: string;
  /**
   * @remarks
   * The description of the address book.
   * 
   * This parameter is required.
   * 
   * @example
   * bj-001
   */
  description?: string;
  /**
   * @remarks
   * The name of the address book.
   * 
   * This parameter is required.
   * 
   * @example
   * bj-001
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the address book.
   * 
   * >  To modify the address book, you must provide the ID of the address book. You can call the [DescribeAddressBook](https://help.aliyun.com/document_detail/138869.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0657ab9d-fe8b-4174-b2a6-6baf358e****
   */
  groupUuid?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  modifyMode?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ECS tags that you want to match.
   */
  tagList?: ModifyAddressBookRequestTagList[];
  /**
   * @remarks
   * The logical relationship among ECS tags. Valid values:
   * 
   * *   **and**: Only the public IP addresses of ECS instances that match all the specified tags can be added to the address book.
   * *   **or**: The public IP addresses of ECS instances that match one of the specified tags can be added to the address book.
   * 
   * @example
   * and
   */
  tagRelation?: string;
  static names(): { [key: string]: string } {
    return {
      addressList: 'AddressList',
      autoAddTagEcs: 'AutoAddTagEcs',
      description: 'Description',
      groupName: 'GroupName',
      groupUuid: 'GroupUuid',
      lang: 'Lang',
      modifyMode: 'ModifyMode',
      sourceIp: 'SourceIp',
      tagList: 'TagList',
      tagRelation: 'TagRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressList: 'string',
      autoAddTagEcs: 'string',
      description: 'string',
      groupName: 'string',
      groupUuid: 'string',
      lang: 'string',
      modifyMode: 'string',
      sourceIp: 'string',
      tagList: { 'type': 'array', 'itemType': ModifyAddressBookRequestTagList },
      tagRelation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAddressBookResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAddressBookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAddressBookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAddressBookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyControlPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic. Valid values:
   * 
   * *   **accept**: allows the traffic.
   * *   **drop**: denies the traffic.
   * *   **log**: monitors the traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * >  To modify an access control policy, you must specify the UUID of the policy. You can call the [DescribeControlPolicy](https://help.aliyun.com/document_detail/138866.html) interface to query the UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221ad84c
   */
  aclUuid?: string;
  /**
   * @remarks
   * The type of the application that the access control policy supports. Valid values:
   * 
   * *   **ANY**
   * *   **HTTP**
   * *   **HTTPS**
   * *   **MySQL**
   * *   **SMTP**
   * *   **SMTPS**
   * *   **RDP**
   * *   **VNC**
   * *   **SSH**
   * *   **Redis**
   * *   **MQTT**
   * *   **MongoDB**
   * *   **Memcache**
   * *   **SSL**
   * 
   * >  The value **ANY** indicates all types of applications.
   * 
   * >  You must specify one of the ApplicationNameList and ApplicationName parameters. If you configure both ApplicationNameList and ApplicationName, only the value of ApplicationNameList is used.
   * 
   * @example
   * HTTP
   */
  applicationName?: string;
  /**
   * @remarks
   * The application names.
   * 
   * >  You must specify one of the ApplicationNameList and ApplicationName parameters. If you configure both ApplicationNameList and ApplicationName, only the value of ApplicationNameList is used.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination port in the access control policy.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book in the access control policy.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The type of the destination port in the access control policy. Valid values:
   * 
   * *   **port**: port
   * *   **group**: port address book
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy.
   * 
   * *   If **DestinationType** is set to net, the value of **Destination** is a CIDR block. Example: 1.2.XX.XX/24.
   * *   If **DestinationType** is set to group, the value of **Destination** is an address book. Example: db_group.
   * *   If **DestinationType** is set to domain, the value of **Destination** is a domain name. Example: \\*.aliyuncs.com.
   * *   If **DestinationType** is set to location, the value of **Destination** is a location. For more information about the location codes, see the "AddControlPolicy" topic. Example: ["BJ11", "ZB"].
   * 
   * This parameter is required.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
   * 
   * *   **net**: CIDR block
   * *   **group**: address book
   * *   **domain**: domain name
   * *   **location**: location
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies. Valid values:
   * 
   * *   **in**: inbound traffic
   * *   **out**: outbound traffic
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The domain name resolution method of the access control policy. By default, an access control policy is enabled after the policy is created. Valid values:
   * 
   * * **FQDN**: fully qualified domain name (FQDN)-based resolution
   * * **DNS**: DNS-based dynamic resolution
   * * **FQDN_AND_DNS**: FQDN and DNS-based dynamic resolution
   * 
   * @example
   * FQDN
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
   * 
   * >  If you set RepeatType to Permanent, leave this parameter empty. If you set RepeatType to None, Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The protocol type that the access control policy supports. Valid values:
   * 
   * *   **ANY**
   * *   **TCP**
   * *   **UDP**
   * *   **ICMP**
   * 
   * >  The value **ANY** indicates all types of applications.
   * 
   * >  If the traffic direction is outbound and the destination address is a threat intelligence address book of the domain name type or a cloud service address book, you can set Proto to TCP or ANY. If you set Proto to TCP, you can set ApplicationName to HTTP, HTTPS, SMTP, SMTPS, and SSL. If you set Proto to ANY, you can set ApplicationName to ANY.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The status of the access control policy. Valid values:
   * 
   * *   true: enabled
   * *   false: disabled
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of a week or of a month on which the access control policy takes effect.
   * 
   * *   If you set RepeatType to `Permanent`, `None`, or `Daily`, the value of this parameter is an empty array. Example: []
   * *   If you set RepeatType to Weekly, you must specify this parameter. Example: [0, 6]
   * 
   * >  If you set RepeatType to Weekly, the fields in the value of this parameter cannot be repeated.
   * 
   * *   If you set RepeatType to `Monthly`, you must specify this parameter. Example: [1, 31]
   * 
   * >  If you set RepeatType to Monthly, the fields in the value of this parameter cannot be repeated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
   * 
   * >  If you set RepeatType to Permanent or None, leave this parameter empty. If you set RepeatType to Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
   * 
   * >  If you set RepeatType to Permanent or None, leave this parameter empty. If you set RepeatType to Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the access control policy to take effect. Valid values:
   * 
   * *   **Permanent** (default): The policy always takes effect.
   * *   **None**: The policy takes effect for only once.
   * *   **Daily**: The policy takes effect on a daily basis.
   * *   **Weekly**: The policy takes effect on a weekly basis.
   * *   **Monthly**: The policy takes effect on a monthly basis.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy.
   * 
   * *   If **SourceType** is set to net, the value of **Source** is a CIDR block. Example: 1.2.XX.XX/24.
   * *   If **SourceType** is set to group, the value of **Source** is an address book. Example: db_group.
   * *   If **SourceType** is set to location, the value of **Source** is a location. For more information about the location codes, see the "AddControlPolicy" topic. Example: ["BJ11", "ZB"]
   * 
   * This parameter is required.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * *   **net**: CIDR block
   * *   **group**: address book
   * *   **location**: location
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
   * 
   * >  If you set RepeatType to Permanent, leave this parameter empty. If you set RepeatType to None, Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 1694761200
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      applicationName: 'ApplicationName',
      applicationNameList: 'ApplicationNameList',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationType: 'DestinationType',
      direction: 'Direction',
      domainResolveType: 'DomainResolveType',
      endTime: 'EndTime',
      lang: 'Lang',
      proto: 'Proto',
      release: 'Release',
      repeatDays: 'RepeatDays',
      repeatEndTime: 'RepeatEndTime',
      repeatStartTime: 'RepeatStartTime',
      repeatType: 'RepeatType',
      source: 'Source',
      sourceType: 'SourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      applicationName: 'string',
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortType: 'string',
      destination: 'string',
      destinationType: 'string',
      direction: 'string',
      domainResolveType: 'string',
      endTime: 'number',
      lang: 'string',
      proto: 'string',
      release: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'number' },
      repeatEndTime: 'string',
      repeatStartTime: 'string',
      repeatType: 'string',
      source: 'string',
      sourceType: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyControlPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyControlPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyControlPolicyPositionRequest extends $tea.Model {
  /**
   * @remarks
   * The direction of the traffic to which the IPv4 access control policy applies. Valid values:
   * 
   * *   in: inbound traffic
   * *   out: outbound traffic
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   zh: Chinese (default)
   * *   en: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The new priority of the IPv4 access control policy. You must specify a numeric value for this parameter. The value 1 indicates the highest priority. A larger value indicates a lower priority.
   * 
   * >  The new priority cannot exceed the priority range of the IPv4 access control policy. Otherwise, an error occurs when you call this operation. Before you call this operation, we recommend that you use the [DescribePolicyPriorUsed](https://help.aliyun.com/document_detail/138862.html) operation to query the priority range of the IPv4 access control policy in the specified direction.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  newOrder?: string;
  /**
   * @remarks
   * The original priority of the IPv4 access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  oldOrder?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      lang: 'Lang',
      newOrder: 'NewOrder',
      oldOrder: 'OldOrder',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      lang: 'string',
      newOrder: 'string',
      oldOrder: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyControlPolicyPositionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125EEB1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyControlPolicyPositionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyControlPolicyPositionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyControlPolicyPositionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefaultIPSConfigRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable basic protection. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  basicRules?: string;
  /**
   * @remarks
   * Specifies whether to enable threat intelligence. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  ctiRules?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default)
   * *   **en**
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to enable virtual patching. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  patchRules?: string;
  /**
   * @remarks
   * The level of the rule group for the IPS. Valid values:
   * 
   * *   **1**: loose
   * *   **2**: medium
   * *   **3**: strict
   * 
   * @example
   * 1
   */
  ruleClass?: string;
  /**
   * @remarks
   * The mode of the IPS. Valid values:
   * 
   * *   **1**: block mode
   * *   **0**: monitor mode
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  runMode?: string;
  static names(): { [key: string]: string } {
    return {
      basicRules: 'BasicRules',
      ctiRules: 'CtiRules',
      lang: 'Lang',
      patchRules: 'PatchRules',
      ruleClass: 'RuleClass',
      runMode: 'RunMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicRules: 'string',
      ctiRules: 'string',
      lang: 'string',
      patchRules: 'string',
      ruleClass: 'string',
      runMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefaultIPSConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 65885B52-00EC-5728-96******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefaultIPSConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDefaultIPSConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDefaultIPSConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirewallV2RoutePolicySwitchRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewall.
   * 
   * @example
   * vfw-tr-5b202e7f0be64611****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to restore the traffic redirection configurations. Valid values:
   * 
   * *   true: roll back
   * *   false: withdraw
   * 
   * @example
   * false
   */
  shouldRecover?: string;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * policy-93684cc5caa44b2e****
   */
  trFirewallRoutePolicyId?: string;
  /**
   * @remarks
   * The status of the routing policy. Valid values:
   * 
   * *   open: enabled
   * *   close: disabled
   * 
   * @example
   * open
   */
  trFirewallRoutePolicySwitchStatus?: string;
  static names(): { [key: string]: string } {
    return {
      firewallId: 'FirewallId',
      lang: 'Lang',
      shouldRecover: 'ShouldRecover',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
      trFirewallRoutePolicySwitchStatus: 'TrFirewallRoutePolicySwitchStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallId: 'string',
      lang: 'string',
      shouldRecover: 'string',
      trFirewallRoutePolicyId: 'string',
      trFirewallRoutePolicySwitchStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirewallV2RoutePolicySwitchResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1F6D4A8D-EC01-5996-A61A-AA3B56490C00
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirewallV2RoutePolicySwitchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyFirewallV2RoutePolicySwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyFirewallV2RoutePolicySwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMemberAttributesRequest extends $tea.Model {
  /**
   * @remarks
   * The members that to be modified.
   * 
   * This parameter is required.
   */
  members?: ModifyInstanceMemberAttributesRequestMembers[];
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': ModifyInstanceMemberAttributesRequestMembers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMemberAttributesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AB74E747-BA5C-492C-87DD-CEA67FCFFFE5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMemberAttributesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceMemberAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceMemberAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNatFirewallControlPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic. Valid values:
   * 
   * *   **accept**: allows the traffic.
   * *   **drop**: denies the traffic.
   * *   **log**: monitors the traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * log
   */
  aclAction?: string;
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * To modify the configurations of an access control policy, you must provide the UUID of the policy. You can call the DescribeNatFirewallControlPolicy operation to query the UUIDs of access control policies.
   * 
   * This parameter is required.
   * 
   * @example
   * 61ab1c02-926a-4d1b-9ef7-595eed8c4226
   */
  aclUuid?: string;
  /**
   * @remarks
   * The name of the application.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The description of the access control policy. Fuzzy match is supported.
   * 
   * > If you do not specify this parameter, the descriptions of all policies are queried.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination port in the access control policy.
   * 
   * > If **DestPortType** is set to `port`, you must specify this parameter.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book in the access control policy.
   * 
   * @example
   * my_dest_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The type of the destination port in the access control policy. Valid values:
   * 
   * *   **port**: port
   * *   **group**: port address book
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy.
   * 
   * *   If **DestinationType** is set to net, the value of **Destination** is a CIDR block. Example: 1.2.3.4/24
   * *   If **DestinationType** is set to group, the value of **Destination** is an address book. Example: db_group
   * *   If **DestinationType** is set to domain, the value of **Destination** is a domain name. Example: \\*.aliyuncs.com
   * *   If **DestinationType** is set to location, the value of **Destination** is a location. For more information about the location codes, see the "AddControlPolicy" topic. Example: ["BJ11", "ZB"]
   * 
   * This parameter is required.
   * 
   * @example
   * x.x.x.x/32
   */
  destination?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
   * 
   * *   **net**: CIDR block
   * *   **group**: address book
   * *   **domain**: domain name
   * *   **location**: destination location
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies.
   * 
   * *   Set the value to **out**.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The domain name resolution method of the access control policy. Valid values:
   * 
   * *   **0**: Fully qualified domain name (FQDN)-based resolution
   * *   **1**: Domain Name System (DNS)-based dynamic resolution
   * *   **2**: FQDN and DNS-based dynamic resolution
   * 
   * @example
   * 0
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
   * 
   * >  If RepeatType is set to Permanent, EndTime is left empty. If RepeatType is set to None, Daily, Weekly, or Monthly, EndTime must be specified.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-xxxxxx
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The protocol type in the access control policy. Valid values:
   * 
   * *   **ANY**
   * *   **TCP**
   * *   **UDP**
   * *   **ICMP**
   * 
   * >  The value **ANY** indicates all types of applications.
   * 
   * >  If the destination address type is a threat intelligence address book of the domain name type or a cloud service address book, you can set Proto to TCP. If you set Proto to TCP, you can set application types to HTTP, HTTPS, SMTP, SMTPS, and SSL.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The status of the access control policy. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of a week or of a month on which the access control policy takes effect.
   * 
   * *   If RepeatType is set to `Permanent`, `None`, or `Daily`, RepeatDays is left empty. Example: [].
   * *   If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6].
   * 
   * >  If RepeatType is set to Weekly, the fields in the value of RepeatDays cannot be repeated.
   * 
   * *   If RepeatType is set to `Monthly`, RepeatDays must be specified. Example: [1, 31].
   * 
   * >  If RepeatType is set to Monthly, the fields in the value of RepeatDays cannot be repeated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
   * 
   * >  If RepeatType is set to Permanent or None, RepeatEndTime is left empty. If RepeatType is set to Daily, Weekly, or Monthly, RepeatEndTime must be specified.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
   * 
   * >  If RepeatType is set to Permanent or None, RepeatStartTime is left empty. If RepeatType is set to Daily, Weekly, or Monthly, this parameter must be specified.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the access control policy to take effect. Valid values:
   * 
   * *   **Permanent** (default): The policy always takes effect.
   * *   **None**: The policy takes effect for only once.
   * *   **Daily**: The policy takes effect on a daily basis.
   * *   **Weekly**: The policy takes effect on a weekly basis.
   * *   **Monthly**: The policy takes effect on a monthly basis.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Valid values:
   * 
   * *   If **SourceType** is set to `net`, the value of this parameter is a CIDR block. Example: 10.2.XX.XX/24.
   * *   If **SourceType** is set to `group`, the value of this parameter is an address book name. Example: db_group.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.25/32
   */
  source?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * *   **net**: CIDR block
   * *   **group**: address book
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
   * 
   * >  If RepeatType is set to Permanent, StartTime is left empty. If RepeatType is set to None, Daily, Weekly, or Monthly, StartTime must be specified.
   * 
   * @example
   * 1694761200
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      applicationNameList: 'ApplicationNameList',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationType: 'DestinationType',
      direction: 'Direction',
      domainResolveType: 'DomainResolveType',
      endTime: 'EndTime',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
      proto: 'Proto',
      release: 'Release',
      repeatDays: 'RepeatDays',
      repeatEndTime: 'RepeatEndTime',
      repeatStartTime: 'RepeatStartTime',
      repeatType: 'RepeatType',
      source: 'Source',
      sourceType: 'SourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortType: 'string',
      destination: 'string',
      destinationType: 'string',
      direction: 'string',
      domainResolveType: 'string',
      endTime: 'number',
      lang: 'string',
      natGatewayId: 'string',
      proto: 'string',
      release: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'number' },
      repeatEndTime: 'string',
      repeatStartTime: 'string',
      repeatType: 'string',
      source: 'string',
      sourceType: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNatFirewallControlPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3868197C-E6E8-52CD-8358-05E3308430E2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNatFirewallControlPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyNatFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyNatFirewallControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNatFirewallControlPolicyPositionRequest extends $tea.Model {
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 66961eea-e659-4225-84c9-9b6da76ec401
   */
  aclUuid?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies.
   * 
   * *   Set the value to **out**.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-xxxxxx
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The new priority of the IPv4 access control policy. You must specify a numeric value for this parameter. The value 1 indicates the highest priority. A larger value indicates a lower priority.
   * 
   * > Make sure that the value of this parameter is within the priority range of existing IPv4 access control policies. Otherwise, an error occurs when you call this operation.
   * 
   * Before you call this operation, we recommend that you call the DescribeNatFirewallPolicyPriorUsed operation to query the priority range of the IPv4 access control policies in the specified traffic direction.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  newOrder?: number;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      direction: 'Direction',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
      newOrder: 'NewOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      direction: 'string',
      lang: 'string',
      natGatewayId: 'string',
      newOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNatFirewallControlPolicyPositionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60617208-F5F7-5B44-BB1E-3AC1B6FCD627
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNatFirewallControlPolicyPositionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyNatFirewallControlPolicyPositionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyNatFirewallControlPolicyPositionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyObjectGroupOperationRequest extends $tea.Model {
  /**
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  objectList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ignore
   */
  objectOperation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * destinationDomain
   */
  objectType?: string;
  /**
   * @example
   * 123.xxx.251.60
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      direction: 'Direction',
      lang: 'Lang',
      objectList: 'ObjectList',
      objectOperation: 'ObjectOperation',
      objectType: 'ObjectType',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      direction: 'string',
      lang: 'string',
      objectList: { 'type': 'array', 'itemType': 'string' },
      objectOperation: 'string',
      objectType: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyObjectGroupOperationResponseBody extends $tea.Model {
  /**
   * @example
   * CB32593D************775F41D6ED84
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyObjectGroupOperationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyObjectGroupOperationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyObjectGroupOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyAdvancedConfigRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable the strict mode for the access control policy. Valid values:
   * 
   * *   **on**: enables the strict mode.
   * *   **off**: disables the strict mode.
   * 
   * This parameter is required.
   * 
   * @example
   * off
   */
  internetSwitch?: string;
  /**
   * @remarks
   * The natural language of the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      internetSwitch: 'InternetSwitch',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetSwitch: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyAdvancedConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B2841452-CB8D-4F7D-B247-38E1CF7334F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyAdvancedConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPolicyAdvancedConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPolicyAdvancedConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTrFirewallV2ConfigurationRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-bcdf89d405ce4bd2****
   */
  firewallId?: string;
  /**
   * @remarks
   * The instance name of the VPC firewall.
   * 
   * @example
   * Test instance
   */
  firewallName?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      firewallId: 'FirewallId',
      firewallName: 'FirewallName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallId: 'string',
      firewallName: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTrFirewallV2ConfigurationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A74C8FDD-2BEF-52D5-8B01-EB6FD94606F9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTrFirewallV2ConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTrFirewallV2ConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTrFirewallV2ConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTrFirewallV2RoutePolicyScopeRequest extends $tea.Model {
  /**
   * @remarks
   * The secondary traffic redirection instances.
   */
  destCandidateList?: ModifyTrFirewallV2RoutePolicyScopeRequestDestCandidateList[];
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-tr-6520de0253bc4669bbd9
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *  **zh** (default): Chinese
   * *  **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to restore the traffic redirection configurations. Valid values:
   * 
   * *   true: roll back
   * *   false: withdraw
   * 
   * @example
   * false
   */
  shouldRecover?: string;
  /**
   * @remarks
   * The primary traffic redirection instances.
   */
  srcCandidateList?: ModifyTrFirewallV2RoutePolicyScopeRequestSrcCandidateList[];
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * This parameter is required.
   * 
   * @example
   * policy-4d724d0139df48f18091
   */
  trFirewallRoutePolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      destCandidateList: 'DestCandidateList',
      firewallId: 'FirewallId',
      lang: 'Lang',
      shouldRecover: 'ShouldRecover',
      srcCandidateList: 'SrcCandidateList',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCandidateList: { 'type': 'array', 'itemType': ModifyTrFirewallV2RoutePolicyScopeRequestDestCandidateList },
      firewallId: 'string',
      lang: 'string',
      shouldRecover: 'string',
      srcCandidateList: { 'type': 'array', 'itemType': ModifyTrFirewallV2RoutePolicyScopeRequestSrcCandidateList },
      trFirewallRoutePolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTrFirewallV2RoutePolicyScopeShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The secondary traffic redirection instances.
   */
  destCandidateListShrink?: string;
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-tr-6520de0253bc4669bbd9
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *  **zh** (default): Chinese
   * *  **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to restore the traffic redirection configurations. Valid values:
   * 
   * *   true: roll back
   * *   false: withdraw
   * 
   * @example
   * false
   */
  shouldRecover?: string;
  /**
   * @remarks
   * The primary traffic redirection instances.
   */
  srcCandidateListShrink?: string;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * This parameter is required.
   * 
   * @example
   * policy-4d724d0139df48f18091
   */
  trFirewallRoutePolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      destCandidateListShrink: 'DestCandidateList',
      firewallId: 'FirewallId',
      lang: 'Lang',
      shouldRecover: 'ShouldRecover',
      srcCandidateListShrink: 'SrcCandidateList',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCandidateListShrink: 'string',
      firewallId: 'string',
      lang: 'string',
      shouldRecover: 'string',
      srcCandidateListShrink: 'string',
      trFirewallRoutePolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTrFirewallV2RoutePolicyScopeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E7D4D635-0C70-5CEB-A609-851E94D51FBB
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * policy-4d724d0139df48f18091
   */
  trFirewallRoutePolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trFirewallRoutePolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTrFirewallV2RoutePolicyScopeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTrFirewallV2RoutePolicyScopeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTrFirewallV2RoutePolicyScopeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserIPSWhitelistRequest extends $tea.Model {
  direction?: number;
  ipVersion?: string;
  lang?: string;
  listType?: number;
  listValue?: string;
  sourceIp?: string;
  whiteType?: number;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      listType: 'ListType',
      listValue: 'ListValue',
      sourceIp: 'SourceIp',
      whiteType: 'WhiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'number',
      ipVersion: 'string',
      lang: 'string',
      listType: 'number',
      listValue: 'string',
      sourceIp: 'string',
      whiteType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserIPSWhitelistResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserIPSWhitelistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyUserIPSWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyUserIPSWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallCenConfigureRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * > You can call the [DescribeVpcFirewallCenList](https://help.aliyun.com/document_detail/345777.html) operation to query the instance IDs of VPC firewalls.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The instance name of the VPC firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * Test instance
   */
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      memberUid: 'MemberUid',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      memberUid: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallCenConfigureResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125k6f8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallCenConfigureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyVpcFirewallCenConfigureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVpcFirewallCenConfigureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallCenSwitchStatusRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable the VPC firewall. Valid values:
   * 
   * *   **open**: yes
   * *   **close**: no
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  firewallSwitch?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * > You can call the [DescribeVpcFirewallCenList](https://help.aliyun.com/document_detail/345777.html) operation to query the instance IDs of VPC firewalls.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallSwitch: 'FirewallSwitch',
      lang: 'Lang',
      memberUid: 'MemberUid',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallSwitch: 'string',
      lang: 'string',
      memberUid: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallCenSwitchStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125afj2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallCenSwitchStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyVpcFirewallCenSwitchStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVpcFirewallCenSwitchStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallConfigureRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The CIDR blocks of the local VPC. The value is a JSON string that contains the following parameters:
   * 
   * *   **RouteTableId**: the ID of the route table for the local VPC.
   * *   **RouteEntryList**: The value is a JSON string that contains the DestinationCidr and NextHopInstanceId parameters. The DestinationCidr parameter indicates the destination CIDR block of the local VPC. The NextHopInstanceId parameter indicates the instance ID of the next hop for the local VPC.
   * 
   * > You can call the [DescribeVpcFirewallDetail](https://help.aliyun.com/document_detail/342892.html) operation to query the CIDR blocks of local VPCs for VPC firewalls.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"RouteTableId":"vtb-1234","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]},{"RouteTableId":"vtb-1235","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]}]
   */
  localVpcCidrTableList?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The CIDR blocks of the peer VPC. The value is a JSON string that contains the following parameters:
   * 
   * *   **RouteTableId**: the ID of the route table for the peer VPC.
   * *   **RouteEntryList**: The value is a JSON string that contains the DestinationCidr and NextHopInstanceId parameters. The DestinationCidr parameter indicates the destination CIDR block of the peer VPC. The NextHopInstanceId parameter indicates the instance ID of the next hop for the peer VPC.
   * 
   * > You can call the [DescribeVpcFirewallDetail](https://help.aliyun.com/document_detail/342892.html) operation to query the CIDR blocks of peer VPCs for VPC firewalls.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"RouteTableId":"vtb-1234","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]},{"RouteTableId":"vtb-1235","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]}]
   */
  peerVpcCidrTableList?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * > You can call the [DescribeVpcFirewallList](https://help.aliyun.com/document_detail/342932.html) operation to query the instance IDs of VPC firewalls.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The instance name of the VPC firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * Test firewall
   */
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      localVpcCidrTableList: 'LocalVpcCidrTableList',
      memberUid: 'MemberUid',
      peerVpcCidrTableList: 'PeerVpcCidrTableList',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      localVpcCidrTableList: 'string',
      memberUid: 'string',
      peerVpcCidrTableList: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallConfigureResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125k6f8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallConfigureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyVpcFirewallConfigureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVpcFirewallConfigureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallControlPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic.
   * 
   * Valid values:
   * 
   * *   **accept**: allows the traffic.
   * *   **drop**: blocks the traffic.
   * *   **log**: monitors the traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The unique ID of the access control policy.
   * 
   * If you want to modify the configurations of an access control policy, you must provide the unique ID of the policy. You can call the [DescribeVpcFirewallControlPolicy](https://help.aliyun.com/document_detail/159758.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221a****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The type of the application that the access control policy supports.
   * 
   * Valid values:
   * 
   * *   ANY: all application types
   * *   FTP
   * *   HTTP
   * *   HTTPS
   * *   MySQL
   * *   SMTP
   * *   SMTPS
   * *   RDP
   * *   VNC
   * *   SSH
   * *   Redis
   * *   MQTT
   * *   MongoDB
   * *   Memcache
   * *   SSL
   * 
   * @example
   * HTTP
   */
  applicationName?: string;
  /**
   * @remarks
   * The application names.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination port in the access control policy.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book in the access control policy.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The type of the destination port in the access control policy.
   * 
   * *   **port**: port
   * *   **group**: port address book
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy.
   * 
   * *   If **DestinationType** is set to `net`, the value of this parameter must be a CIDR block.
   * 
   *     Example: 10.2.3.0/24
   * 
   * *   If **DestinationType** is set to `group`, the value of this parameter must be an address book name.
   * 
   *     Example: db_group
   * 
   * *   If **DestinationType** is set to `domain`, the value of this parameter must be a domain name.
   * 
   *     Example: \\*.aliyuncs.com
   * 
   * This parameter is required.
   * 
   * @example
   * 10.2.X.X/XX
   */
  destination?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy.
   * 
   * Valid values:
   * 
   * *   **net**: CIDR block
   * *   **group**: address book
   * *   **domain**: domain name
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  destinationType?: string;
  domainResolveType?: string;
  /**
   * @remarks
   * The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
   * 
   * >  If you set RepeatType to Permanent, leave this parameter empty. If you set RepeatType to None, Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the content within the response.
   * 
   * Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The protocol type in the access control policy.
   * 
   * Valid values:
   * 
   * *   ANY: all protocol types
   * *   TCP
   * *   UDP
   * *   ICMP
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * Specifies whether to enable the access control policy. By default, an access control policy is enabled after the policy is created. Valid values:
   * 
   * *   **true**: enables the access control policy.
   * *   **false**: disables the access control policy.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of a week or of a month on which the access control policy takes effect.
   * 
   * *   If you set RepeatType to `Permanent`, `None`, or `Daily`, the value of this parameter is an empty array. Example: [].
   * *   If you set RepeatType to Weekly, you must specify this parameter. Example: [0, 6].
   * 
   * >  If you set RepeatType to Weekly, the fields in the value of this parameter cannot be repeated.
   * 
   * *   If you set RepeatType to `Monthly`, you must specify this parameter. Example: [1, 31].
   * 
   * >  If you set RepeatType to Monthly, the fields in the value of this parameter cannot be repeated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
   * 
   * >  If you set RepeatType to Permanent or None, leave this parameter empty. If you set RepeatType to Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
   * 
   * >  If you set RepeatType to Permanent or None, leave this parameter empty. If you set RepeatType to Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the access control policy to take effect. Valid values:
   * 
   * *   **Permanent** (default): The policy always takes effect.
   * *   **None**: The policy takes effect for only once.
   * *   **Daily**: The policy takes effect on a daily basis.
   * *   **Weekly**: The policy takes effect on a weekly basis.
   * *   **Monthly**: The policy takes effect on a monthly basis.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy.
   * 
   * Valid values:
   * 
   * *   If **SourceType** is set to `net`, the value of this parameter must be a CIDR block.
   * 
   *     Example: 10.2.4.0/24
   * 
   * *   If **SourceType** is set to `group`, the value of this parameter must be an address book name.
   * 
   *     Example: db_group
   * 
   * This parameter is required.
   * 
   * @example
   * 10.2.X.X/XX
   */
  source?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy.
   * 
   * Valid values:
   * 
   * *   **net**: CIDR block
   * *   **group**: address book
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
   * 
   * >  If you set RepeatType to Permanent, leave this parameter empty. If you set RepeatType to None, Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 1694761200
   */
  startTime?: number;
  /**
   * @remarks
   * The instance ID of the VPC firewall. You can call the [DescribeVpcFirewallAclGroupList](https://help.aliyun.com/document_detail/159760.html) operation to query the ID.
   * 
   * *   If the VPC firewall is used to protect a CEN instance, the value of this parameter must be the ID of the CEN instance.
   * 
   *     Example: cen-ervw0g12b5jbw\\*\\*\\*\\*
   * 
   * *   If the VPC firewall is used to protect an Express Connect circuit, the value of this parameter must be the instance ID of the VPC firewall.
   * 
   *     Example: vfw-a42bbb7b887148c9\\*\\*\\*\\*
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-a42bbb7b887148c9****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      applicationName: 'ApplicationName',
      applicationNameList: 'ApplicationNameList',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationType: 'DestinationType',
      domainResolveType: 'DomainResolveType',
      endTime: 'EndTime',
      lang: 'Lang',
      proto: 'Proto',
      release: 'Release',
      repeatDays: 'RepeatDays',
      repeatEndTime: 'RepeatEndTime',
      repeatStartTime: 'RepeatStartTime',
      repeatType: 'RepeatType',
      source: 'Source',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      applicationName: 'string',
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortType: 'string',
      destination: 'string',
      destinationType: 'string',
      domainResolveType: 'string',
      endTime: 'number',
      lang: 'string',
      proto: 'string',
      release: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'number' },
      repeatEndTime: 'string',
      repeatStartTime: 'string',
      repeatType: 'string',
      source: 'string',
      sourceType: 'string',
      startTime: 'number',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallControlPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallControlPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyVpcFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVpcFirewallControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallControlPolicyPositionRequest extends $tea.Model {
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * If you want to modify the configurations of an access control policy, you must provide the UUID of the policy. You can call the [DescribeVpcFirewallControlPolicy](https://help.aliyun.com/document_detail/159758.html) operation to query the UUID.
   * 
   * @example
   * 2746d9ff-5d7c-449d-a2a9-ccaa15fe****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The language of the content within the request and the response.
   * 
   * Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The new priority of the access control policy.
   * 
   * >  For more information about the valid values of the new priority, see [DescribeVpcFirewallPolicyPriorUsed](https://help.aliyun.com/document_detail/474145.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  newOrder?: string;
  /**
   * @remarks
   * The original priority of the access control policy.
   * 
   * > This parameter is not recommended. We recommend that you use the AclUuid parameter to specify the policy that you want to modify.
   * 
   * @example
   * 5
   */
  oldOrder?: string;
  /**
   * @remarks
   * The ID of the group to which the access control policy belongs. You can call the [DescribeVpcFirewallAclGroupList](https://help.aliyun.com/document_detail/159760.html) operation to query the ID.
   * 
   * Valid values:
   * 
   * *   If the VPC firewall is used to protect a CEN instance, the value of this parameter must be the ID of the CEN instance.
   * 
   *     Example: cen-ervw0g12b5jbw\\*\\*\\*\\*
   * 
   * *   If the VPC firewall is used to protect an Express Connect circuit, the value of this parameter must be the instance ID of the VPC firewall.
   * 
   *     Example: vfw-a42bbb7b887148c9\\*\\*\\*\\*
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-a42bbb7b887148c9****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      lang: 'Lang',
      newOrder: 'NewOrder',
      oldOrder: 'OldOrder',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      lang: 'string',
      newOrder: 'string',
      oldOrder: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallControlPolicyPositionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125EEB1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallControlPolicyPositionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyVpcFirewallControlPolicyPositionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVpcFirewallControlPolicyPositionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallDefaultIPSConfigRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable basic protection. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  basicRules?: string;
  /**
   * @remarks
   * Specifies whether to enable virtual patching. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  enableAllPatch?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  ruleClass?: string;
  /**
   * @remarks
   * The mode of the intrusion prevention system (IPS). Valid values:
   * 
   * *   **1**: block mode
   * *   **0**: monitor mode
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  runMode?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall. Valid values:
   * 
   * *   If the VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a Cloud Enterprise Network (CEN) instance, the value of this parameter is the ID of the CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. You can call the [DescribeVpcFirewallCenList](https://help.aliyun.com/document_detail/345777.html) operation to query the IDs of CEN instances.
   * *   If the VPC firewall protects mutual access traffic between two VPCs that are connected by using an Express Connect circuit, the value of this parameter is the ID of the VPC firewall. You can call the [DescribeVpcFirewallList](https://help.aliyun.com/document_detail/342932.html) operation to query the instance IDs of VPC firewalls.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      basicRules: 'BasicRules',
      enableAllPatch: 'EnableAllPatch',
      lang: 'Lang',
      memberUid: 'MemberUid',
      ruleClass: 'RuleClass',
      runMode: 'RunMode',
      sourceIp: 'SourceIp',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicRules: 'string',
      enableAllPatch: 'string',
      lang: 'string',
      memberUid: 'string',
      ruleClass: 'string',
      runMode: 'string',
      sourceIp: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallDefaultIPSConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3B51B5BF-3C26-5009-ADAB-190E58DE4D6E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallDefaultIPSConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyVpcFirewallDefaultIPSConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVpcFirewallDefaultIPSConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallIPSWhitelistRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The type of the list. Valid values:
   * 
   * *   **1**: user-defined
   * *   **2**: address book
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  listType?: number;
  /**
   * @remarks
   * The entry in the list.
   * 
   * @example
   * 10.130.0.0/20,10.130.17.11/32
   */
  listValue?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 1415189284827022
   */
  memberUid?: number;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-d7b8ce273791475b9b0b
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The type of the whitelist. Valid values:
   * 
   * *   **1**: destination
   * *   **2**: source
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  whiteType?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      listType: 'ListType',
      listValue: 'ListValue',
      memberUid: 'MemberUid',
      vpcFirewallId: 'VpcFirewallId',
      whiteType: 'WhiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      listType: 'number',
      listValue: 'string',
      memberUid: 'number',
      vpcFirewallId: 'string',
      whiteType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallIPSWhitelistResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F2E8D49A-E5AA-5FF8-8822-25282DCF4BE8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallIPSWhitelistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyVpcFirewallIPSWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVpcFirewallIPSWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallSwitchStatusRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable the VPC firewall. Valid values:
   * 
   * *   **open**: yes
   * *   **close**: no
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  firewallSwitch?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * > You can call the [DescribeVpcFirewallList](https://help.aliyun.com/document_detail/342932.html) operation to query the instance IDs of VPC firewalls.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallSwitch: 'FirewallSwitch',
      lang: 'Lang',
      memberUid: 'MemberUid',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallSwitch: 'string',
      lang: 'string',
      memberUid: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallSwitchStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125afj2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallSwitchStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyVpcFirewallSwitchStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVpcFirewallSwitchStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDisableAllFwSwitchRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID of your Cloud Firewall.
   * 
   * @example
   * i-2ze8v2x5kd9qyvp2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values: Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDisableAllFwSwitchResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B2841452-CB8D-4F7D-B247-38E1CF7334F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDisableAllFwSwitchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutDisableAllFwSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PutDisableAllFwSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDisableFwSwitchRequest extends $tea.Model {
  /**
   * @remarks
   * The IP addresses.
   * 
   * >  You must specify at least one of the IpaddrList, RegionList, and ResourceTypeList parameters.
   * 
   * @example
   * ["192.0.XX.XX","192.0.XX.XX"]
   */
  ipaddrList?: string[];
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The regions.
   * 
   * >  You must specify at least one of the IpaddrList, RegionList, and ResourceTypeList parameters.
   * 
   * @example
   * ["cn-hangzhou","cn-shanghai"]
   */
  regionList?: string[];
  /**
   * @remarks
   * The types of the assets.
   * 
   * > You must specify at least one of the IpaddrList, RegionList, and ResourceTypeList parameters.
   * 
   * @example
   * ["EcsPublicIp","NatEip"]
   */
  resourceTypeList?: string[];
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ipaddrList: 'IpaddrList',
      lang: 'Lang',
      regionList: 'RegionList',
      resourceTypeList: 'ResourceTypeList',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipaddrList: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      regionList: { 'type': 'array', 'itemType': 'string' },
      resourceTypeList: { 'type': 'array', 'itemType': 'string' },
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDisableFwSwitchResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B2841452-CB8D-4F7D-B247-38E1CF7334F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDisableFwSwitchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutDisableFwSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PutDisableFwSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnableAllFwSwitchRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID of your Cloud Firewall.
   * 
   * @example
   * i-2ze8v2x5kd9qyvp2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnableAllFwSwitchResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B2841452-CB8D-4F7D-B247-38E1CF7334F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnableAllFwSwitchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutEnableAllFwSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PutEnableAllFwSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnableFwSwitchRequest extends $tea.Model {
  /**
   * @remarks
   * The IP addresses.
   * 
   * > You must specify at least one of the IpaddrList, RegionList, and ResourceTypeList parameters.
   * 
   * @example
   * ["192.0.X.X","192.0.X.X"]
   */
  ipaddrList?: string[];
  /**
   * @remarks
   * The language of the content within the response.
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The regions.
   * 
   * > You must specify at least one of the IpaddrList, RegionList, and ResourceTypeList parameters.
   * 
   * @example
   * ["cn-hangzhou","cn-shanghai"]
   */
  regionList?: string[];
  /**
   * @remarks
   * The types of the assets.
   * 
   * Valid values:
   * 
   * *   BastionHostIP: the egress IP address of a bastion host
   * *   BastionHostIngressIP: the ingress IP address of a bastion host
   * *   EcsEIP: the elastic IP address (EIP) of an Elastic Compute Service (ECS) instance
   * *   EcsPublicIP: the public IP address of an ECS instance
   * *   EIP: the EIP
   * *   EniEIP: the EIP of an elastic network interface (ENI)
   * *   NatEIP: the EIP of a NAT gateway
   * *   SlbEIP: the EIP of a Server Load Balancer (SLB) instance
   * *   SlbPublicIP: the public IP address of an SLB instance
   * *   NatPublicIP: the public IP address of a NAT gateway
   * *   HAVIP: the high-availability virtual IP address (HAVIP)
   * 
   * > You must specify at least one of the IpaddrList, RegionList, and ResourceTypeList parameters.
   * 
   * @example
   * ["EcsPublicIp","NatEip"]
   */
  resourceTypeList?: string[];
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.X.X
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ipaddrList: 'IpaddrList',
      lang: 'Lang',
      regionList: 'RegionList',
      resourceTypeList: 'ResourceTypeList',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipaddrList: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      regionList: { 'type': 'array', 'itemType': 'string' },
      resourceTypeList: { 'type': 'array', 'itemType': 'string' },
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnableFwSwitchResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status information of the asset when it is not synchronized to Cloud Firewall.
   */
  abnormalResourceStatusList?: PutEnableFwSwitchResponseBodyAbnormalResourceStatusList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B2841452-CB8D-4F7D-B247-38E1CF7334F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalResourceStatusList: 'AbnormalResourceStatusList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalResourceStatusList: { 'type': 'array', 'itemType': PutEnableFwSwitchResponseBodyAbnormalResourceStatusList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnableFwSwitchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutEnableFwSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PutEnableFwSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePostInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Cloud Firewall instance.
   * 
   * @example
   * cfw_elasticity_public_cn-xxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePostInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Indicates whether the release was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  releaseStatus?: boolean;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * EE316A19-xxxx-5043-9DF1-C04458ABC570
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      releaseStatus: 'ReleaseStatus',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      releaseStatus: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePostInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleasePostInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleasePostInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNatFirewallRuleHitCountRequest extends $tea.Model {
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 3de3aed5-6de7-4ecd-9106-cfe994b9c49f
   */
  aclUuid?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * ngw-zm0h3c1exm5bifuorg8c5
   */
  natGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      lang: 'string',
      natGatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNatFirewallRuleHitCountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5CAA0FFD-4B94-5BB9-8B0A-ECFC86A0E666
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNatFirewallRuleHitCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetNatFirewallRuleHitCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetNatFirewallRuleHitCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetVpcFirewallRuleHitCountRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221a****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The natural language of the request and response. 
   * 
   * Valid values:
   * 
   * - **zh**: Chinese (default)
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetVpcFirewallRuleHitCountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A918B4F6-482F-5A91-8F65-AFFFF1FC04EA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetVpcFirewallRuleHitCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetVpcFirewallRuleHitCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetVpcFirewallRuleHitCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchSecurityProxyRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh** (default)
   * *   **en**
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * proxy-natbfd2fafbb77042308d1b
   */
  proxyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the NAT firewall. Valid values:
   * 
   * *   open: yes
   * *   close: no
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  switch?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      proxyId: 'ProxyId',
      switch: 'Switch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      proxyId: 'string',
      switch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchSecurityProxyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F1E55690-3ABA-58FA-90E3-593EF05B73ED
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchSecurityProxyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchSecurityProxyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SwitchSecurityProxyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAddressBookRequestTagList extends $tea.Model {
  /**
   * @remarks
   * The key of the ECS tag.
   * 
   * @example
   * TXY
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the ECS tag.
   * 
   * @example
   * 1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddInstanceMembersRequestMembers extends $tea.Model {
  /**
   * @remarks
   * The remarks of member that you want to add to Cloud Firewall. The remarks must be 1 to 256 characters in length.
   * 
   * @example
   * renewal
   */
  memberDesc?: string;
  /**
   * @remarks
   * The UID of member that you want to add to Cloud Firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: number;
  static names(): { [key: string]: string } {
    return {
      memberDesc: 'MemberDesc',
      memberUid: 'MemberUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberDesc: 'string',
      memberUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityProxyRequestNatRouteEntryList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidr?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ngw-bp1okz6k7s4n4mnk5f1g3
   */
  nextHopId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NatGateway
   */
  nextHopType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vtb-2ze13wrgz7wsu9yiqeffg
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrFirewallV2RoutePolicyRequestDestCandidateList extends $tea.Model {
  /**
   * @remarks
   * The ID of the traffic redirection instance.
   * 
   * @example
   * vpc-2ze9epancaw8t4sha****
   */
  candidateId?: string;
  /**
   * @remarks
   * The type of the traffic redirection instance.
   * 
   * @example
   * VPC
   */
  candidateType?: string;
  static names(): { [key: string]: string } {
    return {
      candidateId: 'CandidateId',
      candidateType: 'CandidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateId: 'string',
      candidateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrFirewallV2RoutePolicyRequestSrcCandidateList extends $tea.Model {
  /**
   * @remarks
   * The ID of the traffic redirection instance.
   * 
   * @example
   * vpc-2ze9epancaw8t4sha****
   */
  candidateId?: string;
  /**
   * @remarks
   * The type of the traffic redirection instance.
   * 
   * @example
   * VPC
   */
  candidateType?: string;
  static names(): { [key: string]: string } {
    return {
      candidateId: 'CandidateId',
      candidateType: 'CandidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateId: 'string',
      candidateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLProtectTrendResponseBodyTrendList extends $tea.Model {
  /**
   * @remarks
   * The number of requests that are blocked by ACL on the current day.
   * 
   * @example
   * 100
   */
  protectCnt?: number;
  /**
   * @remarks
   * The UNIX timestamp at midnight (00:00:00) of each day, which indicates the date of the current day. Unit: seconds.
   * 
   * @example
   * 1697299200
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      protectCnt: 'ProtectCnt',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectCnt: 'number',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponseBodyAclsTagList extends $tea.Model {
  /**
   * @remarks
   * The key of the ECS tag.
   * 
   * @example
   * company
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the ECS tag.
   * 
   * @example
   * admin
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponseBodyAcls extends $tea.Model {
  /**
   * @remarks
   * The addresses in the address book.
   */
  addressList?: string[];
  /**
   * @remarks
   * The number of addresses in the address book.
   * 
   * @example
   * 2
   */
  addressListCount?: number;
  /**
   * @remarks
   * Indicates whether the public IP addresses of ECS instances are automatically added to the address book if the instances match the specified tags. The setting takes effect on both newly purchased ECS instances whose tag settings are complete and ECS instances whose tag settings are modified. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  autoAddTagEcs?: number;
  /**
   * @remarks
   * The description of the address book.
   * 
   * @example
   * my address book
   */
  description?: string;
  /**
   * @remarks
   * The name of the address book.
   * 
   * @example
   * demo_address_book
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the address book. Valid values:
   * 
   * *   **ip**: IP address book
   * *   **domain**: domain address book
   * *   **port**: port address book
   * *   **tag**: ECS tag-based address book
   * *   **allCloud**: cloud service address book
   * *   **threat**: threat intelligence address book
   * 
   * @example
   * ip
   */
  groupType?: string;
  /**
   * @remarks
   * The UUID of the address book.
   * 
   * @example
   * f04ac7ce-628b-4cb7-be61-310222b7****
   */
  groupUuid?: string;
  /**
   * @remarks
   * The number of times that the address book is referenced.
   * 
   * @example
   * 3
   */
  referenceCount?: number;
  /**
   * @remarks
   * The details about the ECS tags that can be automatically added to the address book.
   */
  tagList?: DescribeAddressBookResponseBodyAclsTagList[];
  /**
   * @remarks
   * The logical relationship among ECS tags. Valid values:
   * 
   * *   **and**: Only the public IP addresses of ECS instances that match all the specified tags can be added to the address book.
   * *   **or**: The public IP addresses of ECS instances that match any of the specified tags can be added to the address book.
   * 
   * @example
   * and
   */
  tagRelation?: string;
  static names(): { [key: string]: string } {
    return {
      addressList: 'AddressList',
      addressListCount: 'AddressListCount',
      autoAddTagEcs: 'AutoAddTagEcs',
      description: 'Description',
      groupName: 'GroupName',
      groupType: 'GroupType',
      groupUuid: 'GroupUuid',
      referenceCount: 'ReferenceCount',
      tagList: 'TagList',
      tagRelation: 'TagRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressList: { 'type': 'array', 'itemType': 'string' },
      addressListCount: 'number',
      autoAddTagEcs: 'number',
      description: 'string',
      groupName: 'string',
      groupType: 'string',
      groupUuid: 'string',
      referenceCount: 'number',
      tagList: { 'type': 'array', 'itemType': DescribeAddressBookResponseBodyAclsTagList },
      tagRelation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetListResponseBodyAssets extends $tea.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * >  The value of this parameter indicates the management account to which the member is added.
   * 
   * @example
   * 158039427902****
   */
  aliUid?: number;
  /**
   * @remarks
   * The ID of the cloud resource with which the asset is associated.
   * 
   * @example
   * i-8vbdrjrxzt78****
   */
  bindInstanceId?: string;
  /**
   * @remarks
   * The instance name of the asset.
   * 
   * @example
   * instance01
   */
  bindInstanceName?: string;
  /**
   * @remarks
   * The timestamp when the asset is added to Cloud Firewall.
   * 
   * @example
   * 2023-02-28 10:29:58
   */
  createTimeStamp?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 192.0.XX.XX
   */
  internetAddress?: string;
  /**
   * @remarks
   * The internal IP address of the server.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetAddress?: string;
  /**
   * @remarks
   * The IP version of the asset that is protected by Cloud Firewall.
   * 
   * Valid values:
   * 
   * *   **4**: IPv4
   * *   **6**: IPv6
   * 
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @remarks
   * The UID of the member.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: number;
  /**
   * @remarks
   * The instance name of the asset that is protected by Cloud Firewall.
   * 
   * @example
   * instance01
   */
  name?: string;
  /**
   * @remarks
   * The time when the asset was added. Valid values:
   * 
   * *   **discovered in 1 hour**: within one hour.
   * *   **discovered in 1 day**: within one day.
   * *   **discovered in 7 days**: within seven days.
   * 
   * @example
   * discovered in 1 hour
   */
  newResourceTag?: string;
  /**
   * @remarks
   * The remarks of the asset. Valid values:
   * 
   * *   **REGION_NOT_SUPPORT**: The region is not supported.
   * *   **NETWORK_NOT_SUPPORT**: The network is not supported.
   * 
   * @example
   * REGION_NOT_SUPPORT
   */
  note?: string;
  /**
   * @remarks
   * The status of the firewall. Valid values:
   * 
   * *   **open**: enabled.
   * *   **opening**: being enabled.
   * *   **closed**: disabled.
   * *   **closing**: being disabled.
   * 
   * @example
   * open
   */
  protectStatus?: string;
  /**
   * @remarks
   * The ID of the region in which the asset resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionID?: string;
  /**
   * @remarks
   * Indicates whether the firewall is supported in the region in which the asset resides. Valid values:
   * 
   * *   **enable**: yes
   * *   **disable**: no
   * 
   * @example
   * enable
   */
  regionStatus?: string;
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * i-8vbdrjrxzt78****
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **BastionHostEgressIP**: the egress IP address of a bastion host
   * *   **BastionHostIngressIP**: the ingress IP address of a bastion host
   * *   **EcsEIP**: the elastic IP address (EIP) of an Elastic Compute Service (ECS) instance
   * *   **EcsPublicIP**: the public IP address of an ECS instance
   * *   **EIP**: the EIP
   * *   **EniEIP**: the EIP of an elastic network interface (ENI)
   * *   **NatEIP**: the EIP of a NAT gateway
   * *   **SlbEIP**: the EIP of a Server Load Balancer (SLB) instance
   * *   **SlbPublicIP**: the public IP address of an SLB instance
   * *   **NatPublicIP**: the public IP address of a NAT gateway
   * *   **HAVIP**: the high-availability virtual IP address (HAVIP)
   * 
   * @example
   * EIP
   */
  resourceType?: string;
  /**
   * @remarks
   * The risk level of the asset. Valid values:
   * 
   * *   **low**: low
   * *   **middle**: medium
   * *   **hight**: high
   * 
   * >  The value of this parameter is returned only when the UserType parameter is set to free.
   * 
   * @example
   * low
   */
  riskLevel?: string;
  /**
   * @remarks
   * The status of the security group policy. Valid values:
   * 
   * *   **pass**: applied
   * *   **block**: not applied
   * *   **unsupport**: unsupported
   * 
   * @example
   * block
   */
  sgStatus?: string;
  /**
   * @remarks
   * The time when the status of the security group was last checked. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1615082937
   */
  sgStatusTime?: number;
  /**
   * @remarks
   * Indicates whether traffic redirection is supported for the asset. Valid values:
   * 
   * *   **enable**: yes
   * *   **disable**: no
   * 
   * @example
   * enable
   */
  syncStatus?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * eip
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bindInstanceId: 'BindInstanceId',
      bindInstanceName: 'BindInstanceName',
      createTimeStamp: 'CreateTimeStamp',
      internetAddress: 'InternetAddress',
      intranetAddress: 'IntranetAddress',
      ipVersion: 'IpVersion',
      memberUid: 'MemberUid',
      name: 'Name',
      newResourceTag: 'NewResourceTag',
      note: 'Note',
      protectStatus: 'ProtectStatus',
      regionID: 'RegionID',
      regionStatus: 'RegionStatus',
      resourceInstanceId: 'ResourceInstanceId',
      resourceType: 'ResourceType',
      riskLevel: 'RiskLevel',
      sgStatus: 'SgStatus',
      sgStatusTime: 'SgStatusTime',
      syncStatus: 'SyncStatus',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      bindInstanceId: 'string',
      bindInstanceName: 'string',
      createTimeStamp: 'string',
      internetAddress: 'string',
      intranetAddress: 'string',
      ipVersion: 'number',
      memberUid: 'number',
      name: 'string',
      newResourceTag: 'string',
      note: 'string',
      protectStatus: 'string',
      regionID: 'string',
      regionStatus: 'string',
      resourceInstanceId: 'string',
      resourceType: 'string',
      riskLevel: 'string',
      sgStatus: 'string',
      sgStatusTime: 'number',
      syncStatus: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetRiskListResponseBodyAssetList extends $tea.Model {
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * 39.108.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The IP version of the asset that is protected by Cloud Firewall.
   * 
   * Valid values:
   * 
   * *   **4**: IPv4
   * *   **6**: IPv6
   * 
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @remarks
   * The reason for the risk.
   * 
   * @example
   * other
   */
  reason?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **low**
   * *   **middle**
   * *   **high**
   * 
   * @example
   * low
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      ipVersion: 'IpVersion',
      reason: 'Reason',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      ipVersion: 'number',
      reason: 'string',
      riskLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCfwRiskLevelSummaryResponseBodyRiskList extends $tea.Model {
  /**
   * @remarks
   * The risk levels. Valid values:
   * 
   * *   **medium**
   * 
   * @example
   * medium
   */
  level?: string;
  /**
   * @remarks
   * The number of at-risk Elastic Compute Service (ECS) instances.
   * 
   * @example
   * 50
   */
  num?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * ResourceNotProtected
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      num: 'Num',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      num: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeControlPolicyResponseBodyPolicys extends $tea.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic. Valid values:
   * 
   * *   **accept**: allows the traffic.
   * *   **drop**: denies the traffic.
   * *   **log**: monitors the traffic.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221a****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The application ID in the access control policy.
   * 
   * @example
   * 10***
   */
  applicationId?: string;
  /**
   * @remarks
   * The application type supported by the access control policy. We recommend that you specify ApplicationNameList. Valid values:
   * 
   * *   **FTP**
   * *   **HTTP**
   * *   **HTTPS**
   * *   **Memcache**
   * *   **MongoDB**
   * *   **MQTT**
   * *   **MySQL**
   * *   **RDP**
   * *   **Redis**
   * *   **SMTP**
   * *   **SMTPS**
   * *   **SSH**
   * *   **SSL**
   * *   **VNC**
   * *   **ANY**: all types of applications
   * 
   * @example
   * HTTP
   */
  applicationName?: string;
  /**
   * @remarks
   * The application names.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The time when the access control policy was created.
   * 
   * @example
   * 1761062400
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination port in the access control policy.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book in the access control policy.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The ports in the destination port address book.
   */
  destPortGroupPorts?: string[];
  /**
   * @remarks
   * The type of the destination port in the access control policy. Valid values:
   * 
   * *   **port**: port
   * *   **group**: port address book
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy. The value of this parameter varies based on the value of DestinationType. Valid values:
   * 
   * *   If **DestinationType** is set to **net**, the value of Destination is a CIDR block. Example: 192.0.XX.XX/24.
   * *   If **DestinationType** is set to **domain**, the value of Destination is a domain name. Example: aliyuncs.com.
   * *   If **DestinationType** is set to **group**, the value of Destination is the name of an address book. Example: db_group.
   * *   If **DestinationType** is set to **location**, the value of Destination is a location. For more information about location codes, see [AddControlPolicy](https://help.aliyun.com/document_detail/138867.html). Example: ["BJ11", "ZB"].
   * 
   * @example
   * 192.0.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The CIDR blocks in the destination address book.
   */
  destinationGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the destination address book in the access control policy. Valid values:
   * 
   * *   **ip**: an address book that includes one or more IP addresses
   * *   **tag**: an ECS tag-based address book that includes the IP addresses of the ECS instances with one or more specific tags
   * *   **domain**: an address book that includes one or more domain names
   * *   **threat**: an address book that includes one or more malicious IP addresses or domain names
   * *   **backsrc**: an address book that includes one or more back-to-origin addresses of Anti-DDoS Pro or Anti-DDoS Premium instances or WAF instances
   * 
   * @example
   * ip
   */
  destinationGroupType?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
   * 
   * *   **net**: CIDR block
   * *   **group**: address book
   * *   **domain**: domain name
   * *   **location**: location
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies. Valid values:
   * 
   * *   **in**: inbound traffic
   * *   **out**: outbound traffic
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The DNS resolution result.
   * 
   * @example
   * 192.0.XX.XX,192.0.XX.XX
   * 
   * @deprecated
   */
  dnsResult?: string;
  /**
   * @remarks
   * The time when the Domain Name System (DNS) resolution was performed. The value is a timestamp. Unit: seconds.
   * 
   * @example
   * 1579261141
   */
  dnsResultTime?: number;
  /**
   * @remarks
   * The domain name resolution method of the access control policy. By default, an access control policy is enabled after the policy is created. Valid values:
   * 
   * * **FQDN**: fully qualified domain name (FQDN)-based resolution
   * * **DNS**: DNS-based dynamic resolution
   * * **FQDN_AND_DNS**: FQDN and DNS-based dynamic resolution
   * 
   * @example
   * FQDN
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The time when the access control policy stops taking effect. The value is a timestamp. Unit: seconds. The end time must be on the hour or on the half hour, and at least 30 minutes later than the start time.
   * 
   * >  If RepeatType is set to Permanent, this parameter is left empty. If RepeatType is set to None, Daily, Weekly, or Monthly, this parameter must be specified.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The time when the access control policy was last hit. The value is a timestamp. Unit: seconds.
   * 
   * @example
   * 1579261141
   */
  hitLastTime?: number;
  /**
   * @remarks
   * The number of hits for the access control policy.
   * 
   * @example
   * 100
   */
  hitTimes?: number;
  /**
   * @remarks
   * The IP version used in the access control policy. Valid values:
   * 
   * *   **4**: IPv4
   * *   **6**: IPv6
   * 
   * @example
   * 6
   */
  ipVersion?: number;
  /**
   * @remarks
   * The time when the access control policy was modified.
   * 
   * @example
   * 1761062400
   */
  modifyTime?: number;
  /**
   * @remarks
   * The priority of the access control policy.
   * 
   * The priority value starts from 1. A smaller priority value indicates a higher priority.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The protocol type in the access control policy. Valid values:
   * 
   * *   **ANY**
   * *   **TCP**
   * *   **UDP**
   * *   **ICMP**
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The status of the access control policy. By default, an access control policy is enabled after it is created. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of a week or of a month on which the access control policy takes effect.
   * 
   * *   If RepeatType is set to `Permanent`, `None`, or `Daily`, this parameter is left empty. Example: [].
   * *   If RepeatType is set to Weekly, this parameter must be specified. Example: [0, 6].
   * 
   * >  If RepeatType is set to Weekly, the fields in the value of RepeatDays cannot be repeated.
   * 
   * *   If RepeatType is set to `Monthly`, this parameter must be specified. Example: [1, 31].
   * 
   * >  If RepeatType is set to Monthly, the fields in the value of RepeatDays cannot be repeated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the start time.
   * 
   * >  If RepeatType is set to Permanent or None, this parameter is left empty. If RepeatType is set to Daily, Weekly, or Monthly, this parameter must be specified.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the end time.
   * 
   * >  If RepeatType is set to Permanent or None, this parameter is left empty. If RepeatType is set to Daily, Weekly, or Monthly, this parameter must be specified.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type based on which the access control policy takes effect. Valid values:
   * 
   * *   **Permanent** (default): The policy always takes effect.
   * *   **None**: The policy takes effect for only once.
   * *   **Daily**: The policy takes effect on a daily basis.
   * *   **Weekly**: The policy takes effect on a weekly basis.
   * *   **Monthly**: The policy takes effect on a monthly basis.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Valid values:
   * 
   * *   If **SourceType** is set to `net`, the value of Source is a CIDR block. Example: 192.0.XX.XX/24.
   * *   If **SourceType** is set to `group`, the value of Source is the name of an address book. Example: db_group.
   * *   If **SourceType** is set to `location`, the value of Source is a location. For more information about location codes, see [AddControlPolicy](https://help.aliyun.com/document_detail/138867.html). Example: ["BJ11", "ZB"].
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The CIDR blocks in the source address book.
   */
  sourceGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the source address book in the access control policy. Valid values:
   * 
   * *   **ip**: an address book that includes one or more IP addresses
   * *   **tag**: an Elastic Compute Service (ECS) tag-based address book that includes the IP addresses of the ECS instances with one or more specific tags
   * *   **domain**: an address book that includes one or more domain names
   * *   **threat**: an address book that includes one or more malicious IP addresses or domain names
   * *   **backsrc**: an address book that includes one or more back-to-origin addresses of Anti-DDoS Pro or Anti-DDoS Premium instances or Web Application Firewall (WAF) instances
   * 
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * *   **net**: CIDR block
   * *   **group**: address book
   * *   **location**: location
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The total quota consumed by the returned access control policies, which is the sum of the quota consumed by each policy. The quota that is consumed by an access control policy is calculated by using the following formula: Quota that is consumed by an access control policy = Number of source addresses (number of CIDR blocks or regions) × Number of destination addresses (number of CIDR blocks, regions, or domain names) × Number of port ranges × Number of applications.
   * 
   * @example
   * 10,000
   */
  spreadCnt?: number;
  /**
   * @remarks
   * The time when the access control policy starts to take effect. The value is a timestamp. Unit: seconds. The start time must be on the hour or on the half hour, and at least 30 minutes earlier than the end time.
   * 
   * >  If RepeatType is set to Permanent, this parameter is left empty. If RepeatType is set to None, Daily, Weekly, or Monthly, this parameter must be specified.
   * 
   * @example
   * 1694761200
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      applicationNameList: 'ApplicationNameList',
      createTime: 'CreateTime',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortGroupPorts: 'DestPortGroupPorts',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationGroupCidrs: 'DestinationGroupCidrs',
      destinationGroupType: 'DestinationGroupType',
      destinationType: 'DestinationType',
      direction: 'Direction',
      dnsResult: 'DnsResult',
      dnsResultTime: 'DnsResultTime',
      domainResolveType: 'DomainResolveType',
      endTime: 'EndTime',
      hitLastTime: 'HitLastTime',
      hitTimes: 'HitTimes',
      ipVersion: 'IpVersion',
      modifyTime: 'ModifyTime',
      order: 'Order',
      proto: 'Proto',
      release: 'Release',
      repeatDays: 'RepeatDays',
      repeatEndTime: 'RepeatEndTime',
      repeatStartTime: 'RepeatStartTime',
      repeatType: 'RepeatType',
      source: 'Source',
      sourceGroupCidrs: 'SourceGroupCidrs',
      sourceGroupType: 'SourceGroupType',
      sourceType: 'SourceType',
      spreadCnt: 'SpreadCnt',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      applicationId: 'string',
      applicationName: 'string',
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'number',
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortGroupPorts: { 'type': 'array', 'itemType': 'string' },
      destPortType: 'string',
      destination: 'string',
      destinationGroupCidrs: { 'type': 'array', 'itemType': 'string' },
      destinationGroupType: 'string',
      destinationType: 'string',
      direction: 'string',
      dnsResult: 'string',
      dnsResultTime: 'number',
      domainResolveType: 'string',
      endTime: 'number',
      hitLastTime: 'number',
      hitTimes: 'number',
      ipVersion: 'number',
      modifyTime: 'number',
      order: 'number',
      proto: 'string',
      release: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'number' },
      repeatEndTime: 'string',
      repeatStartTime: 'string',
      repeatType: 'string',
      source: 'string',
      sourceGroupCidrs: { 'type': 'array', 'itemType': 'string' },
      sourceGroupType: 'string',
      sourceType: 'string',
      spreadCnt: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResolveResponseBodyResolveResult extends $tea.Model {
  /**
   * @remarks
   * The IP address to which the domain name is resolved. Multiple IP addresses are separated by commas (,).
   * 
   * @example
   * 11.1.X.X,12.1.X.X
   */
  ipAddrs?: string;
  /**
   * @remarks
   * The time when the domain name was resolved. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1579091739
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      ipAddrs: 'IpAddrs',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddrs: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadTaskResponseBodyTasks extends $tea.Model {
  /**
   * @remarks
   * The time when the task was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1706595827
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the task expires. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1714371828
   */
  expireTime?: number;
  /**
   * @remarks
   * The size of the file.
   * 
   * @example
   * 24.04KB
   */
  fileSize?: string;
  /**
   * @remarks
   * The URL of the OSS file.
   * 
   * @example
   * https://cfw-table-download-cn.oss-cn-hangzhou.aliyuncs.com/%E4%BA%92%E8%81%94%E7%BD%91%E8%BE%B9%E7%95%8C%E9%98%B2%E7%81%AB%E5%A2%99%E8%B5%84%E4%BA%A7-IPv4_1069.csv?Expires=1708583913&OSSAccessKeyId=****&Signature=******%3D
   */
  fileURL?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **finish**
   * *   **start**
   * *   **error**
   * *   **expire**: The task file is invalid and cannot be downloaded.
   * 
   * @example
   * finish
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1111
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * Internet Boundary Firewall Assets - IPv4
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * InternetFirewallAsset
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      fileSize: 'FileSize',
      fileURL: 'FileURL',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      expireTime: 'number',
      fileSize: 'string',
      fileURL: 'string',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadTaskTypeResponseBodyTaskTypeArray extends $tea.Model {
  /**
   * @remarks
   * The name of the task type.
   * 
   * @example
   * Internet Boundary Firewall Assets
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * InternetFirewallAsset
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMembersResponseBodyMembers extends $tea.Model {
  /**
   * @remarks
   * The time when the member was added to Cloud Firewall. The value is a timestamp. Unit: seconds.
   * 
   * @example
   * 1615189819
   */
  createTime?: number;
  /**
   * @remarks
   * The remarks of the member.
   * 
   * @example
   * renewal
   */
  memberDesc?: string;
  /**
   * @remarks
   * The name of the member.
   * 
   * @example
   * cloudfirewall_2
   */
  memberDisplayName?: string;
  /**
   * @remarks
   * The status of the member. Valid values:
   * 
   * *   **normal**
   * *   **deleting**
   * 
   * @example
   * normal
   */
  memberStatus?: string;
  /**
   * @remarks
   * The UID of the member.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: number;
  /**
   * @remarks
   * The time when the member was last modified. The value is a timestamp. Unit: seconds.
   * 
   * @example
   * 1615189819
   */
  modifyTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      memberDesc: 'MemberDesc',
      memberDisplayName: 'MemberDisplayName',
      memberStatus: 'MemberStatus',
      memberUid: 'MemberUid',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      memberDesc: 'string',
      memberDisplayName: 'string',
      memberStatus: 'string',
      memberUid: 'number',
      modifyTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMembersResponseBodyPageInfo extends $tea.Model {
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
   * The total number of the members.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRiskLevelsRequestInstances extends $tea.Model {
  /**
   * @remarks
   * The instance ID of your Cloud Firewall.
   * 
   * @example
   * vipcloudfw-cn-7mz2fj8nm0u
   */
  instanceId?: string;
  /**
   * @remarks
   * The public IP addresses of instances.
   */
  internetIp?: string[];
  /**
   * @remarks
   * The private IP address of the instance.
   * 
   * @example
   * 172.17.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The UUID of the instance.
   * 
   * @example
   * 181ad081-e4f2-4e3e-b925-03b67f648397
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      internetIp: { 'type': 'array', 'itemType': 'string' },
      intranetIp: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRiskLevelsResponseBodyInstanceRisksDetails extends $tea.Model {
  /**
   * @remarks
   * The IP addresses of servers.
   * 
   * @example
   * 203.107.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The risk levels. Valid values:
   * 
   * *   **medium**
   * 
   * @example
   * medium
   */
  level?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * ResourceNotProtected
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      level: 'Level',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      level: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRiskLevelsResponseBodyInstanceRisks extends $tea.Model {
  /**
   * @remarks
   * The risk levels of the Elastic Compute Service (ECS) instance.
   */
  details?: DescribeInstanceRiskLevelsResponseBodyInstanceRisksDetails[];
  /**
   * @remarks
   * The instance ID of your Cloud Firewall.
   * 
   * @example
   * vipcloudfw-cn-7mz2fj8nm0u
   */
  instanceId?: string;
  /**
   * @remarks
   * The risk levels. Valid values:
   * 
   * *   **medium**
   * 
   * @example
   * medium
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      instanceId: 'InstanceId',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': DescribeInstanceRiskLevelsResponseBodyInstanceRisksDetails },
      instanceId: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetOpenIpResponseBodyDataList extends $tea.Model {
  /**
   * @remarks
   * The reason why recommended intelligent policies are unavailable. Valid values:
   * 
   * *   No recommended intelligent policies are available.
   * *   This feature is available only to some users.
   * *   The policy configuration has been modified. No recommended intelligent policies are available.
   * *   The recommended intelligent policies have been configured. No new recommended intelligent policies are available.
   * 
   * @example
   * No recommended intelligent policies are available.
   */
  aclRecommendDetail?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1ix9w22kv6aew9****
   */
  assetsInstanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * launch-advisor-2023****
   */
  assetsName?: string;
  /**
   * @remarks
   * The asset type of the instance.
   * 
   * @example
   * EcsEIP
   */
  assetsType?: string;
  /**
   * @remarks
   * The total number of ports.
   * 
   * @example
   * 5
   */
  detailNum?: number;
  /**
   * @remarks
   * Specifies whether an access control policy is recommended. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  hasAclRecommend?: boolean;
  /**
   * @remarks
   * The list of ports.
   */
  portList?: string[];
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * @example
   * 203.0.113.1
   */
  publicIp?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **3**: high risk
   * *   **2**: medium risk
   * *   **1**: low risk
   * *   **0**: no risk
   * 
   * @example
   * 3
   */
  riskLevel?: number;
  /**
   * @remarks
   * The reason for the risk.
   * 
   * @example
   * Previous traffic is all malicious traffic.
   */
  riskReason?: string;
  /**
   * @remarks
   * The list of applications.
   */
  serviceNameList?: string[];
  /**
   * @remarks
   * The percentage of traffic of a day. Unit: percent (%).
   * 
   * @example
   * 11.1
   */
  trafficPercent1Day?: string;
  /**
   * @remarks
   * The percentage of traffic of 30 days. Unit: percent (%).
   * 
   * @example
   * 99.9
   */
  trafficPercent30Day?: string;
  /**
   * @remarks
   * The percentage of traffic of seven days. Unit: percent (%).
   * 
   * @example
   * 77.7
   */
  trafficPercent7Day?: string;
  static names(): { [key: string]: string } {
    return {
      aclRecommendDetail: 'AclRecommendDetail',
      assetsInstanceId: 'AssetsInstanceId',
      assetsName: 'AssetsName',
      assetsType: 'AssetsType',
      detailNum: 'DetailNum',
      hasAclRecommend: 'HasAclRecommend',
      portList: 'PortList',
      publicIp: 'PublicIp',
      regionNo: 'RegionNo',
      riskLevel: 'RiskLevel',
      riskReason: 'RiskReason',
      serviceNameList: 'ServiceNameList',
      trafficPercent1Day: 'TrafficPercent1Day',
      trafficPercent30Day: 'TrafficPercent30Day',
      trafficPercent7Day: 'TrafficPercent7Day',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclRecommendDetail: 'string',
      assetsInstanceId: 'string',
      assetsName: 'string',
      assetsType: 'string',
      detailNum: 'number',
      hasAclRecommend: 'boolean',
      portList: { 'type': 'array', 'itemType': 'string' },
      publicIp: 'string',
      regionNo: 'string',
      riskLevel: 'number',
      riskReason: 'string',
      serviceNameList: { 'type': 'array', 'itemType': 'string' },
      trafficPercent1Day: 'string',
      trafficPercent30Day: 'string',
      trafficPercent7Day: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetOpenIpResponseBodyPageInfo extends $tea.Model {
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 40
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetTrafficTrendResponseBodyDataList extends $tea.Model {
  /**
   * @remarks
   * The inbound network throughput, which indicates the number of bits that are sent inbound per second. Unit: bit/s.
   * 
   * @example
   * 187
   */
  inBps?: number;
  /**
   * @remarks
   * The inbound network throughput, which indicates the total number of bytes that are sent inbound. Unit: bytes.
   * 
   * @example
   * 235
   */
  inBytes?: number;
  /**
   * @remarks
   * The inbound network throughput, which indicates the number of packets that are sent inbound per second. Unit: packets per second (pps).
   * 
   * @example
   * 2
   */
  inPps?: number;
  /**
   * @remarks
   * The number of new connections.
   * 
   * @example
   * 27
   */
  newConn?: number;
  /**
   * @remarks
   * The outbound network throughput, which indicates the number of bits that are sent outbound per second. Unit: bit/s.
   * 
   * @example
   * 45
   */
  outBps?: number;
  /**
   * @remarks
   * The outbound network throughput, which indicates the total number of bytes that are sent outbound. Unit: bytes.
   * 
   * @example
   * 1123
   */
  outBytes?: number;
  /**
   * @remarks
   * The outbound network throughput, which indicates the number of packets that are sent outbound per second. Unit: pps.
   * 
   * @example
   * 2
   */
  outPps?: number;
  /**
   * @remarks
   * The number of requests.
   * 
   * @example
   * 27
   */
  sessionCount?: number;
  /**
   * @remarks
   * The time when traffic is generated. The value is a UNIX timestamp. Unit: seconds.
   * 
   * If processing is not complete at this point in time, -1 is returned for all other fields.
   * 
   * @example
   * 1659405600
   */
  time?: number;
  /**
   * @remarks
   * The total outbound and inbound network throughput, which indicates the total number of bits that are sent inbound and outbound per second. Unit: bit/s.
   * 
   * @example
   * 323
   */
  totalBps?: number;
  static names(): { [key: string]: string } {
    return {
      inBps: 'InBps',
      inBytes: 'InBytes',
      inPps: 'InPps',
      newConn: 'NewConn',
      outBps: 'OutBps',
      outBytes: 'OutBytes',
      outPps: 'OutPps',
      sessionCount: 'SessionCount',
      time: 'Time',
      totalBps: 'TotalBps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inBps: 'number',
      inBytes: 'number',
      inPps: 'number',
      newConn: 'number',
      outBps: 'number',
      outBytes: 'number',
      outPps: 'number',
      sessionCount: 'number',
      time: 'number',
      totalBps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvadeEventListResponseBodyEventList extends $tea.Model {
  /**
   * @remarks
   * The ID of the affected asset.
   * 
   * @example
   * i-ECS****
   */
  assetsInstanceId?: string;
  /**
   * @remarks
   * The name of the affected asset.
   * 
   * @example
   * ECS_test
   */
  assetsInstanceName?: string;
  /**
   * @remarks
   * The type of the affected asset. Valid values:
   * 
   * *   **BastionHostIP**: the egress IP address of a bastion host
   * *   **BastionHostIngressIP**: the ingress IP address of a bastion host
   * *   **EcsEIP**: the elastic IP address (EIP) of an Elastic Compute Service (ECS) instance
   * *   **EcsPublicIP**: the public IP address of an ECS instance
   * *   **EIP**: the EIP
   * *   **EniEIP**: the EIP of an elastic network interface (ENI)
   * *   **NatEIP**: the EIP of a NAT gateway
   * *   **SlbEIP**: the EIP of a Server Load Balancer (SLB) instance
   * *   **SlbPublicIP**: the public IP address of an SLB instance
   * *   **NatPublicIP**: the public IP address of a NAT gateway
   * *   **HAVIP**: the high-availability virtual IP address (HAVIP)
   * 
   * @example
   * EcsPublicIp
   */
  assetsType?: string;
  /**
   * @remarks
   * The ID of the breach awareness event.
   * 
   * @example
   * 69d189e2-ec17-4676-a2fe-02969234****
   */
  eventKey?: string;
  /**
   * @remarks
   * The name of the breach awareness event.
   * 
   * @example
   * event_test
   */
  eventName?: string;
  /**
   * @remarks
   * The type of the breach awareness event. Valid values:
   * 
   * *   **IPS**: intrusion prevention event
   * *   **offline**: disconnection event
   * 
   * @example
   * IPS
   */
  eventSrc?: string;
  /**
   * @remarks
   * The UUID of the breach awareness event.
   * 
   * @example
   * fadd-dfdd-****
   */
  eventUuid?: string;
  /**
   * @remarks
   * The time when the breach awareness event first occurred. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1656750960
   */
  firstTime?: number;
  /**
   * @remarks
   * Indicates whether the breach awareness event is ignored. Valid values:
   * 
   * *   **true**: The breach awareness event is ignored.
   * *   **false**: The breach awareness event is not ignored.
   * 
   * @example
   * true
   */
  isIgnore?: boolean;
  /**
   * @remarks
   * The time when the breach awareness event last occurred. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1656837360
   */
  lastTime?: number;
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * 135809047715****
   */
  memberUid?: string;
  /**
   * @remarks
   * The private IP address of the affected asset.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIP?: string;
  /**
   * @remarks
   * The handling status of the breach awareness event. Valid values:
   * 
   * *   **0**: unhandled
   * *   **20**: handled
   * 
   * @example
   * 20
   */
  processStatus?: number;
  /**
   * @remarks
   * The public IP address of the affected asset.
   * 
   * @example
   * 198.51.XX.XX
   */
  publicIP?: string;
  /**
   * @remarks
   * The type of the affected asset. Valid values:
   * 
   * *   **BastionHostIP**: the egress IP address of a bastion host
   * *   **BastionHostIngressIP**: the ingress IP address of a bastion host
   * *   **EcsEIP**: the EIP of an ECS instance
   * *   **EcsPublicIP**: the public IP address of an ECS instance
   * *   **EIP**: the EIP
   * *   **EniEIP**: the EIP of an ENI
   * *   **NatEIP**: the EIP of a NAT gateway
   * *   **SlbEIP**: the EIP of an SLB instance
   * *   **SlbPublicIP**: the public IP address of an SLB instance
   * *   **NatPublicIP**: the public IP address of a NAT gateway
   * *   **HAVIP**: the HAVIP
   * 
   * @example
   * EcsPublicIp
   */
  publicIpType?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **1**: low
   * *   **2**: medium
   * *   **3**: high
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      assetsInstanceId: 'AssetsInstanceId',
      assetsInstanceName: 'AssetsInstanceName',
      assetsType: 'AssetsType',
      eventKey: 'EventKey',
      eventName: 'EventName',
      eventSrc: 'EventSrc',
      eventUuid: 'EventUuid',
      firstTime: 'FirstTime',
      isIgnore: 'IsIgnore',
      lastTime: 'LastTime',
      memberUid: 'MemberUid',
      privateIP: 'PrivateIP',
      processStatus: 'ProcessStatus',
      publicIP: 'PublicIP',
      publicIpType: 'PublicIpType',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsInstanceId: 'string',
      assetsInstanceName: 'string',
      assetsType: 'string',
      eventKey: 'string',
      eventName: 'string',
      eventSrc: 'string',
      eventUuid: 'string',
      firstTime: 'number',
      isIgnore: 'boolean',
      lastTime: 'number',
      memberUid: 'string',
      privateIP: 'string',
      processStatus: 'number',
      publicIP: 'string',
      publicIpType: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvadeEventListResponseBodyPageInfo extends $tea.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of breach awareness events.
   * 
   * @example
   * 40
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatFirewallControlPolicyResponseBodyPolicys extends $tea.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic. Valid values:
   * 
   * *   **accept**: allows the traffic.
   * *   **drop**: denies the traffic.
   * *   **log**: monitors the traffic.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221a****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The application names.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The time when the access control policy was created.
   * 
   * @example
   * 1761062400
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination port in the access control policy.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book in the access control policy.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The ports in the destination port address book.
   */
  destPortGroupPorts?: string[];
  /**
   * @remarks
   * The type of the destination port in the access control policy. Valid values:
   * 
   * *   **port**: port
   * *   **group**: port address book
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy. The value of this parameter varies based on the value of DestinationType. Valid values:
   * 
   * *   If the value of **DestinationType** is **net**, the value of this parameter is a CIDR block. Example: 192.0.XX.XX/24.
   * *   If the value of **DestinationType** is **domain**, the value of this parameter is a domain name. Example: aliyuncs.com.
   * *   If the value of **DestinationType** is **group**, the value of this parameter is the name of an address book. Example: db_group.
   * *   If the value of **DestinationType** is **location**, the value of this parameter is a location. For more information about location codes, see [AddControlPolicy](https://help.aliyun.com/document_detail/138867.html). Example: ["BJ11", "ZB"].
   * 
   * @example
   * x.x.x.x/32
   */
  destination?: string;
  /**
   * @remarks
   * The CIDR blocks in the destination address book.
   */
  destinationGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the destination address book in the access control policy. Valid values:
   * 
   * *   **ip**: an address book that includes one or more CIDR blocks
   * *   **domain**: an address book that includes one or more domain names
   * 
   * @example
   * ip
   */
  destinationGroupType?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
   * 
   * *   **net**: CIDR block
   * *   **group**: address book
   * *   **domain**: domain name
   * *   **location**: location
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The DNS resolution result.
   * 
   * @example
   * 111.0.XX.XX,112.0.XX.XX
   */
  dnsResult?: string;
  /**
   * @remarks
   * The time when the Domain Name System (DNS) resolution was performed. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1579261141
   */
  dnsResultTime?: number;
  /**
   * @remarks
   * The domain name resolution method of the access control policy. By default, an access control policy is enabled after the policy is created. Valid values:
   * 
   * *   **0**: fully qualified domain name (FQDN)-based resolution
   * *   **1**: DNS-based dynamic resolution
   * *   **2**: FQDN and DNS-based dynamic resolution
   * 
   * @example
   * 1
   */
  domainResolveType?: number;
  /**
   * @remarks
   * The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The end time must be on the hour or on the half hour, and at least 30 minutes later than the start time.
   * 
   * >  If RepeatType is set to Permanent, this parameter is left empty. If RepeatType is set to None, Daily, Weekly, or Monthly, this parameter must be specified.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The time when the access control policy was last hit. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1579261141
   */
  hitLastTime?: number;
  /**
   * @remarks
   * The number of hits for the access control policy.
   * 
   * @example
   * 100
   */
  hitTimes?: number;
  /**
   * @remarks
   * The time when the access control policy was modified.
   * 
   * @example
   * 1761062400
   */
  modifyTime?: number;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * ngw-xxxxxx
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The priority of the access control policy.
   * 
   * The priority value starts from 1. A smaller priority value indicates a higher priority.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The protocol type in the access control policy. Valid values:
   * 
   * *   **ANY**
   * *   **TCP**
   * *   **UDP**
   * *   **ICMP**
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The status of the access control policy. By default, an access control policy is enabled after it is created. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of a week or of a month on which the access control policy takes effect.
   * 
   * *   If RepeatType is set to `Permanent`, `None`, or `Daily`, the value of this parameter is an empty array. Example: [].
   * *   If RepeatType is set to Weekly, this parameter must be specified. Example: [0, 6].
   * 
   * >  If RepeatType is set to Weekly, the fields in the value of this parameter cannot be repeated.
   * 
   * *   If RepeatType is set to `Monthly`, this parameter must be specified. Example: [1, 31].
   * 
   * >  If RepeatType is set to Monthly, the fields in the value of this parameter cannot be repeated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The point in time when the recurrence ends. Example: 23:30. The end time must be on the hour or on the half hour, and at least 30 minutes later than the start time.
   * 
   * >  If RepeatType is set to Permanent or None, this parameter is left empty. If RepeatType is set to Daily, Weekly, or Monthly, this parameter must be specified.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The point in time when the recurrence starts. Example: 08:00. The start time must be on the hour or on the half hour, and at least 30 minutes earlier than the end time.
   * 
   * >  If RepeatType is set to Permanent or None, this parameter is left empty. If RepeatType is set to Daily, Weekly, or Monthly, this parameter must be specified.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the access control policy to take effect. Valid values:
   * 
   * *   **Permanent** (default): The policy always takes effect.
   * *   **None**: The policy takes effect for only once.
   * *   **Daily**: The policy takes effect on a daily basis.
   * *   **Weekly**: The policy takes effect on a weekly basis.
   * *   **Monthly**: The policy takes effect on a monthly basis.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Valid values:
   * 
   * *   If the value of **SourceType** is `net`, the value of this parameter is a CIDR block. Example: 192.0.XX.XX/24.
   * *   If the value of **SourceType** is `group`, the value of this parameter is the name of an address book. Example: db_group.
   * *   If the value of **SourceType** is `location`, the value of this parameter is a location. For more information about location codes, see [AddControlPolicy](https://help.aliyun.com/document_detail/138867.html). Example: ["BJ11", "ZB"].
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The CIDR blocks in the source address book.
   */
  sourceGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the source address book in the access control policy. The value is fixed as **ip**. The value indicates an address book that includes one or more CIDR blocks.
   * 
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * *   **net**: CIDR block
   * *   **group**: address book
   * *   **location**: location
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The total quota consumed by the returned access control policies, which is the sum of the quota consumed by each policy. The quota that is consumed by an access control policy is calculated by using the following formula: Quota that is consumed by an access control policy = Number of source addresses (number of CIDR blocks or regions) × Number of destination addresses (number of CIDR blocks, regions, or domain names) × Number of port ranges × Number of applications.
   * 
   * @example
   * 10,000
   */
  spreadCnt?: string;
  /**
   * @remarks
   * The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The start time must be on the hour or on the half hour, and at least 30 minutes earlier than the end time.
   * 
   * >  If RepeatType is set to Permanent, this parameter is left empty. If RepeatType is set to None, Daily, Weekly, or Monthly, this parameter must be specified.
   * 
   * @example
   * 1694761200
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      applicationNameList: 'ApplicationNameList',
      createTime: 'CreateTime',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortGroupPorts: 'DestPortGroupPorts',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationGroupCidrs: 'DestinationGroupCidrs',
      destinationGroupType: 'DestinationGroupType',
      destinationType: 'DestinationType',
      dnsResult: 'DnsResult',
      dnsResultTime: 'DnsResultTime',
      domainResolveType: 'DomainResolveType',
      endTime: 'EndTime',
      hitLastTime: 'HitLastTime',
      hitTimes: 'HitTimes',
      modifyTime: 'ModifyTime',
      natGatewayId: 'NatGatewayId',
      order: 'Order',
      proto: 'Proto',
      release: 'Release',
      repeatDays: 'RepeatDays',
      repeatEndTime: 'RepeatEndTime',
      repeatStartTime: 'RepeatStartTime',
      repeatType: 'RepeatType',
      source: 'Source',
      sourceGroupCidrs: 'SourceGroupCidrs',
      sourceGroupType: 'SourceGroupType',
      sourceType: 'SourceType',
      spreadCnt: 'SpreadCnt',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'number',
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortGroupPorts: { 'type': 'array', 'itemType': 'string' },
      destPortType: 'string',
      destination: 'string',
      destinationGroupCidrs: { 'type': 'array', 'itemType': 'string' },
      destinationGroupType: 'string',
      destinationType: 'string',
      dnsResult: 'string',
      dnsResultTime: 'number',
      domainResolveType: 'number',
      endTime: 'number',
      hitLastTime: 'number',
      hitTimes: 'number',
      modifyTime: 'number',
      natGatewayId: 'string',
      order: 'number',
      proto: 'string',
      release: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'number' },
      repeatEndTime: 'string',
      repeatStartTime: 'string',
      repeatType: 'string',
      source: 'string',
      sourceGroupCidrs: { 'type': 'array', 'itemType': 'string' },
      sourceGroupType: 'string',
      sourceType: 'string',
      spreadCnt: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatFirewallListResponseBodyNatFirewallListNatRouteEntryList extends $tea.Model {
  /**
   * @remarks
   * The destination CIDR block of the default route.
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The next hop of the original NAT gateway.
   * 
   * @example
   * ngw-2ze0s284r9atg5******
   */
  nextHopId?: string;
  /**
   * @remarks
   * The network type of the next hop. The value is fixed as NatGateway.
   * 
   * @example
   * NatGateway
   */
  nextHopType?: string;
  /**
   * @remarks
   * The route table to which the default route of the NAT gateway belongs.
   * 
   * @example
   * vtb-bp18o0gb******
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatFirewallListResponseBodyNatFirewallList extends $tea.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * >  The value of this parameter indicates the management account to which the member is added.
   * 
   * @example
   * 19106481******
   */
  aliUid?: number;
  /**
   * @remarks
   * The cause of the error.
   * 
   * @example
   * Create Failed.
   */
  errorDetail?: string;
  /**
   * @remarks
   * The UID of the member in Cloud Firewall.
   * 
   * @example
   * 19106481******
   */
  memberUid?: number;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * ngw-uf6tnblxip4qcxg******
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The name of the NAT gateway.
   * 
   * @example
   * nat-******
   */
  natGatewayName?: string;
  /**
   * @remarks
   * The default route entries of the NAT gateway.
   */
  natRouteEntryList?: DescribeNatFirewallListResponseBodyNatFirewallListNatRouteEntryList[];
  /**
   * @remarks
   * The ID of the NAT firewall.
   * 
   * @example
   * proxy-nat30******
   */
  proxyId?: string;
  /**
   * @remarks
   * The name of the NAT firewall.
   * 
   * @example
   * proxy-******
   */
  proxyName?: string;
  /**
   * @remarks
   * The status of the NAT firewall. Valid values:
   * 
   * *   configuring
   * *   deleting
   * *   normal
   * *   abnormal
   * *   opening
   * *   closing
   * *   closed
   * 
   * @example
   * normal
   */
  proxyStatus?: string;
  /**
   * @remarks
   * The region ID of your Cloud Firewall.
   * 
   * >  For more information about the supported regions of Cloud Firewall, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether the strict mode is enabled. Valid values: 1, which specifies yes, and 0, which specifies no.
   * 
   * @example
   * 0
   */
  strictMode?: number;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-2ze26ya******
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * vpc-******
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      errorDetail: 'ErrorDetail',
      memberUid: 'MemberUid',
      natGatewayId: 'NatGatewayId',
      natGatewayName: 'NatGatewayName',
      natRouteEntryList: 'NatRouteEntryList',
      proxyId: 'ProxyId',
      proxyName: 'ProxyName',
      proxyStatus: 'ProxyStatus',
      regionId: 'RegionId',
      strictMode: 'StrictMode',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      errorDetail: 'string',
      memberUid: 'number',
      natGatewayId: 'string',
      natGatewayName: 'string',
      natRouteEntryList: { 'type': 'array', 'itemType': DescribeNatFirewallListResponseBodyNatFirewallListNatRouteEntryList },
      proxyId: 'string',
      proxyName: 'string',
      proxyStatus: 'string',
      regionId: 'string',
      strictMode: 'number',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationIPResponseBodyDstIPListAddressGroupList extends $tea.Model {
  /**
   * @remarks
   * The name of the address book.
   * 
   * @example
   * IP address book
   */
  addressGroupName?: string;
  /**
   * @remarks
   * The UUID of the address book.
   * 
   * @example
   * f04ac7ce-628b-4cb7-be61-310222b7****
   */
  addressGroupUUID?: string;
  static names(): { [key: string]: string } {
    return {
      addressGroupName: 'AddressGroupName',
      addressGroupUUID: 'AddressGroupUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressGroupName: 'string',
      addressGroupUUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationIPResponseBodyDstIPListApplicationPortList extends $tea.Model {
  /**
   * @remarks
   * The application type used in the access control policy. Valid values:
   * 
   * *   **FTP**
   * *   **HTTP**
   * *   **HTTPS**
   * *   **Memcache**
   * *   **MongoDB**
   * *   **MQTT**
   * *   **MySQL**
   * *   **RDP**
   * *   **Redis**
   * *   **SMTP**
   * *   **SMTPS**
   * *   **SSH**
   * *   **SSL_No_Cert**
   * *   **SSL**
   * *   **VNC**
   * 
   * >  The value of this parameter depends on the value of the Proto parameter. If you set Proto to TCP, you can set ApplicationNameList to any valid value. If you configure both ApplicationNameList and ApplicationName, only the value of ApplicationNameList is used.
   * 
   * @example
   * HTTP
   */
  applicationName?: string;
  /**
   * @remarks
   * The application port.
   * 
   * @example
   * 80
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationIPResponseBodyDstIPListTagList extends $tea.Model {
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   **Suspicious**
   * *   **Malicious**
   * *   **Trusted**
   * 
   * @example
   * Trusted
   */
  classId?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **1**: low
   * *   **2**: medium
   * *   **3**: high
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The description of the tag.
   * 
   * @example
   * Tag that indicates traffic is allowed
   */
  tagDescribe?: string;
  /**
   * @remarks
   * The ID of the tag.
   * 
   * @example
   * AliYun
   */
  tagId?: string;
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * Tag that indicates traffic is allowed
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      classId: 'ClassId',
      riskLevel: 'RiskLevel',
      tagDescribe: 'TagDescribe',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classId: 'string',
      riskLevel: 'number',
      tagDescribe: 'string',
      tagId: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationIPResponseBodyDstIPList extends $tea.Model {
  /**
   * @remarks
   * Indicates whether an access control policy is configured. Valid values:
   * 
   * *   **Uncovered**: no
   * *   **FullCoverage**: yes
   * 
   * @example
   * Uncovered
   */
  aclCoverage?: string;
  /**
   * @remarks
   * The suggestion to configure an access control policy.
   * 
   * @example
   * Allows the traffic.
   */
  aclRecommendDetail?: string;
  /**
   * @remarks
   * The status of the access control policy. Valid values:
   * 
   * *   **normal**: healthy
   * *   **Abnormal**: unhealthy
   * 
   * @example
   * Normal
   */
  aclStatus?: string;
  /**
   * @remarks
   * The information about the address book.
   */
  addressGroupList?: DescribeOutgoingDestinationIPResponseBodyDstIPListAddressGroupList[];
  /**
   * @remarks
   * The application ports.
   */
  applicationPortList?: DescribeOutgoingDestinationIPResponseBodyDstIPListApplicationPortList[];
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   **Suspicious**
   * *   **Malicious**
   * *   **Trusted**
   * 
   * @example
   * Trusted
   */
  categoryClassId?: string;
  /**
   * @remarks
   * The ID of the service type. Valid values:
   * 
   * *   **Aliyun**: Alibaba Cloud services
   * *   **NotAliyun**: third-party services
   * 
   * @example
   * Aliyun
   */
  categoryId?: string;
  /**
   * @remarks
   * The type of the service to which the destination IP address belongs. Valid values:
   * 
   * *   **Alibaba Cloud services**
   * *   **Third-party services**
   * 
   * @example
   * Alibaba Cloud services
   */
  categoryName?: string;
  /**
   * @remarks
   * The destination IP addresses in outbound connections.
   * 
   * @example
   * 10.0.XX.XX
   */
  dstIP?: string;
  /**
   * @remarks
   * The name of the group to which the access control policy belongs.
   * 
   * @example
   * Rule_test
   */
  groupName?: string;
  /**
   * @remarks
   * Indicates whether an access control policy is configured. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  hasAcl?: string;
  /**
   * @remarks
   * Indicates whether an access control policy is recommended. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  hasAclRecommend?: boolean;
  /**
   * @remarks
   * The inbound traffic. Unit: bytes.
   * 
   * @example
   * 472
   */
  inBytes?: number;
  /**
   * @remarks
   * Indicates whether the destination IP address is added to a whitelist. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isMarkNormal?: boolean;
  /**
   * @remarks
   * The outbound traffic. Unit: bytes.
   * 
   * @example
   * 965
   */
  outBytes?: number;
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * @example
   * fadsfd-dfadf-df****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the access control policy.
   * 
   * @example
   * Default rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The reason why the domain name is secure.
   * 
   * @example
   * Intelligent policy: The destination domain name belongs to Alibaba Cloud Computing Co., Ltd. The domain name mainly provides services for Alibaba Cloud. No security risks are found, and you can add the domain name to the whitelist.
   */
  securityReason?: string;
  /**
   * @remarks
   * The suggestion to handle the traffic of the domain name in outbound connections. Valid values:
   * 
   * *   **pass**: allow
   * *   **alert**: deny
   * *   **drop**: monitor
   * 
   * @example
   * pass
   */
  securitySuggest?: string;
  /**
   * @remarks
   * The number of requests.
   * 
   * @example
   * 4
   */
  sessionCount?: number;
  /**
   * @remarks
   * The tags.
   */
  tagList?: DescribeOutgoingDestinationIPResponseBodyDstIPListTagList[];
  /**
   * @remarks
   * The total traffic. Unit: bytes
   * 
   * @example
   * 800
   */
  totalBytes?: string;
  static names(): { [key: string]: string } {
    return {
      aclCoverage: 'AclCoverage',
      aclRecommendDetail: 'AclRecommendDetail',
      aclStatus: 'AclStatus',
      addressGroupList: 'AddressGroupList',
      applicationPortList: 'ApplicationPortList',
      categoryClassId: 'CategoryClassId',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      dstIP: 'DstIP',
      groupName: 'GroupName',
      hasAcl: 'HasAcl',
      hasAclRecommend: 'HasAclRecommend',
      inBytes: 'InBytes',
      isMarkNormal: 'IsMarkNormal',
      outBytes: 'OutBytes',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      securityReason: 'SecurityReason',
      securitySuggest: 'SecuritySuggest',
      sessionCount: 'SessionCount',
      tagList: 'TagList',
      totalBytes: 'TotalBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclCoverage: 'string',
      aclRecommendDetail: 'string',
      aclStatus: 'string',
      addressGroupList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationIPResponseBodyDstIPListAddressGroupList },
      applicationPortList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationIPResponseBodyDstIPListApplicationPortList },
      categoryClassId: 'string',
      categoryId: 'string',
      categoryName: 'string',
      dstIP: 'string',
      groupName: 'string',
      hasAcl: 'string',
      hasAclRecommend: 'boolean',
      inBytes: 'number',
      isMarkNormal: 'boolean',
      outBytes: 'number',
      ruleId: 'string',
      ruleName: 'string',
      securityReason: 'string',
      securitySuggest: 'string',
      sessionCount: 'number',
      tagList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationIPResponseBodyDstIPListTagList },
      totalBytes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDomainResponseBodyDomainListTagList extends $tea.Model {
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   **Suspicious**
   * *   **Malicious**
   * *   **Trusted**
   * 
   * @example
   * Trusted
   */
  classId?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **1**: low
   * *   **2**: medium
   * *   **3**: high
   * 
   * @example
   * 3
   */
  riskLevel?: number;
  /**
   * @remarks
   * The description of the tag.
   * 
   * @example
   * Tag indicating that the domain name is added to the whitelist
   */
  tagDescribe?: string;
  /**
   * @remarks
   * The ID of the tag.
   * 
   * @example
   * AliYun
   */
  tagId?: string;
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * Tag indicating that the domain name is added to the whitelist
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      classId: 'ClassId',
      riskLevel: 'RiskLevel',
      tagDescribe: 'TagDescribe',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classId: 'string',
      riskLevel: 'number',
      tagDescribe: 'string',
      tagId: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDomainResponseBodyDomainList extends $tea.Model {
  /**
   * @remarks
   * Indicates whether an access control policy is configured. Valid values:
   * 
   * *   **Uncovered**: no
   * *   **FullCoverage**: yes
   * 
   * @example
   * Uncovered
   */
  aclCoverage?: string;
  /**
   * @remarks
   * The suggestion in an access control policy.
   * 
   * @example
   * Allows the traffic.
   */
  aclRecommendDetail?: string;
  /**
   * @remarks
   * The state of the access control policy. Valid values:
   * 
   * *   **normal**: healthy
   * *   **abnormal**: unhealthy
   * 
   * @example
   * Normal
   */
  aclStatus?: string;
  /**
   * @remarks
   * The name of the address book.
   * 
   * @example
   * The address book for outbound connections
   */
  addressGroupName?: string;
  /**
   * @remarks
   * The UUID of the address book.
   * 
   * @example
   * fdad-fdafa-dafa-dfa****
   */
  addressGroupUUID?: string;
  /**
   * @remarks
   * The website service.
   * 
   * @example
   * Alibaba Cloud
   */
  business?: string;
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   **Suspicious**
   * *   **Malicious**
   * *   **Trusted**
   * 
   * @example
   * Trusted
   */
  categoryClassId?: string;
  /**
   * @remarks
   * The type ID of the service to which the domain name belongs. Valid values:
   * 
   * *   **Aliyun**: Alibaba Cloud services
   * *   **NotAliyun**: third-party services
   * 
   * @example
   * Aliyun
   */
  categoryId?: string;
  /**
   * @remarks
   * The type of the service to which the domain name belongs. Valid values:
   * 
   * *   **Alibaba Cloud services**
   * *   **Third-party services**
   * 
   * @example
   * Alibaba Cloud services
   */
  categoryName?: string;
  /**
   * @remarks
   * The domain name in outbound connections.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The name of the group to which the access control policy belongs.
   * 
   * @example
   * Group of addresses in outbound connections
   */
  groupName?: string;
  /**
   * @remarks
   * Indicates whether an `access control policy` is configured for the domain name. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  hasAcl?: string;
  /**
   * @remarks
   * Indicates whether an access control policy is recommended. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  hasAclRecommend?: boolean;
  /**
   * @remarks
   * The volume of inbound traffic.
   * 
   * @example
   * 3214
   */
  inBytes?: number;
  /**
   * @remarks
   * Indicates whether the domain name is marked as normal. Valid values:
   * 
   * *   **true**: normal
   * *   **false**: abnormal
   * 
   * @example
   * true
   */
  isMarkNormal?: boolean;
  /**
   * @remarks
   * The name of the organization.
   * 
   * @example
   * Alibaba Cloud Computing Co., Ltd.
   */
  organization?: string;
  /**
   * @remarks
   * The volume of outbound traffic.
   * 
   * @example
   * 4582
   */
  outBytes?: number;
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * @example
   * add-dfadf-f****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the access control policy.
   * 
   * @example
   * Default rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The reason why the domain name is secure.
   * 
   * @example
   * Intelligent policy: The destination domain name belongs to Alibaba Cloud Computing Co., Ltd. The domain name mainly provides services for Alibaba Cloud. No security risks are found, and you can add the domain name to the whitelist.
   */
  securityReason?: string;
  /**
   * @remarks
   * The suggestion to handle the traffic of the domain name in outbound connections. Valid values:
   * 
   * *   **pass**: allow
   * *   **alert**: monitor
   * *   **drop**: deny
   * 
   * @example
   * pass
   */
  securitySuggest?: string;
  /**
   * @remarks
   * The number of requests.
   * 
   * @example
   * 12
   */
  sessionCount?: number;
  /**
   * @remarks
   * An array that consists of tags.
   */
  tagList?: DescribeOutgoingDomainResponseBodyDomainListTagList[];
  /**
   * @remarks
   * The total volume of traffic. Unit: bytes.
   * 
   * @example
   * 800
   */
  totalBytes?: string;
  static names(): { [key: string]: string } {
    return {
      aclCoverage: 'AclCoverage',
      aclRecommendDetail: 'AclRecommendDetail',
      aclStatus: 'AclStatus',
      addressGroupName: 'AddressGroupName',
      addressGroupUUID: 'AddressGroupUUID',
      business: 'Business',
      categoryClassId: 'CategoryClassId',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      domain: 'Domain',
      groupName: 'GroupName',
      hasAcl: 'HasAcl',
      hasAclRecommend: 'HasAclRecommend',
      inBytes: 'InBytes',
      isMarkNormal: 'IsMarkNormal',
      organization: 'Organization',
      outBytes: 'OutBytes',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      securityReason: 'SecurityReason',
      securitySuggest: 'SecuritySuggest',
      sessionCount: 'SessionCount',
      tagList: 'TagList',
      totalBytes: 'TotalBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclCoverage: 'string',
      aclRecommendDetail: 'string',
      aclStatus: 'string',
      addressGroupName: 'string',
      addressGroupUUID: 'string',
      business: 'string',
      categoryClassId: 'string',
      categoryId: 'string',
      categoryName: 'string',
      domain: 'string',
      groupName: 'string',
      hasAcl: 'string',
      hasAclRecommend: 'boolean',
      inBytes: 'number',
      isMarkNormal: 'boolean',
      organization: 'string',
      outBytes: 'number',
      ruleId: 'string',
      ruleName: 'string',
      securityReason: 'string',
      securitySuggest: 'string',
      sessionCount: 'number',
      tagList: { 'type': 'array', 'itemType': DescribeOutgoingDomainResponseBodyDomainListTagList },
      totalBytes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePostpayTrafficDetailResponseBodyTrafficList extends $tea.Model {
  /**
   * @remarks
   * The inbound network throughput, which indicates the total number of bytes that are received Unit: bytes.
   * 
   * @example
   * 1115096939
   */
  inBytes?: number;
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * i-8vb2d7c9mtn0bo9qcraq
   */
  instanceId?: string;
  /**
   * @remarks
   * The asset type. This value takes effect only for the Internet firewall.
   * 
   * @example
   * EcsPublicIP
   */
  instanceType?: string;
  /**
   * @remarks
   * The outbound network throughput, which indicates the total number of bytes that are sent. Unit: bytes.
   * 
   * @example
   * 100000000
   */
  outBytes?: number;
  protectionDuration?: number;
  /**
   * @remarks
   * The resource ID. The resource ID for the Internet firewall is the public IP address that is protected the Internet firewall, and the resource ID for a NAT firewall is the instance ID of the NAT firewall.
   * 
   * @example
   * 39.106.146.214
   */
  resourceId?: string;
  /**
   * @remarks
   * The total inbound and outbound network throughput, which indicates the total number of bytes that are received and sent. Unit: bytes.
   * 
   * @example
   * 1215096939
   */
  totalBytes?: number;
  /**
   * @remarks
   * The date on which the statistics are collected.
   * 
   * @example
   * 20231001
   */
  trafficDay?: string;
  /**
   * @remarks
   * The traffic type. Valid values:
   * 
   * *   **EIP_TRAFFIC**: traffic for the Internet firewall
   * *   **NatGateway_TRAFFIC**: traffic for NAT firewalls
   * *   **VPC_TRAFFIC**: traffic for VPC firewalls
   * 
   * @example
   * EIP_TRAFFIC
   */
  trafficType?: string;
  static names(): { [key: string]: string } {
    return {
      inBytes: 'InBytes',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      outBytes: 'OutBytes',
      protectionDuration: 'ProtectionDuration',
      resourceId: 'ResourceId',
      totalBytes: 'TotalBytes',
      trafficDay: 'TrafficDay',
      trafficType: 'TrafficType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inBytes: 'number',
      instanceId: 'string',
      instanceType: 'string',
      outBytes: 'number',
      protectionDuration: 'number',
      resourceId: 'string',
      totalBytes: 'number',
      trafficDay: 'string',
      trafficType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrefixListsResponseBodyPrefixList extends $tea.Model {
  /**
   * @remarks
   * The IP address family of the prefix list. Valid values:
   * 
   * *   IPv4
   * *   IPv6
   * 
   * @example
   * IPv4
   */
  addressFamily?: string;
  /**
   * @remarks
   * The number of associated resources.
   * 
   * @example
   * 2
   */
  associationCount?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-10-16T08:31:06Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * TCP_14900-14911
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of entries in the prefix list.
   * 
   * @example
   * 20
   */
  maxEntries?: number;
  /**
   * @remarks
   * The ID of the prefix list.
   * 
   * @example
   * pl-uf64nco3ujjqchx6aaji
   */
  prefixListId?: string;
  /**
   * @remarks
   * The name of the prefix list.
   * 
   * @example
   * participant-name
   */
  prefixListName?: string;
  static names(): { [key: string]: string } {
    return {
      addressFamily: 'AddressFamily',
      associationCount: 'AssociationCount',
      creationTime: 'CreationTime',
      description: 'Description',
      maxEntries: 'MaxEntries',
      prefixListId: 'PrefixListId',
      prefixListName: 'PrefixListName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressFamily: 'string',
      associationCount: 'number',
      creationTime: 'string',
      description: 'string',
      maxEntries: 'number',
      prefixListId: 'string',
      prefixListName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBodyDataListIPLocationInfo extends $tea.Model {
  /**
   * @remarks
   * The ID of the city to which the IP address belongs.
   * 
   * @example
   * 510100
   */
  cityId?: string;
  /**
   * @remarks
   * The name of the city to which the IP address belongs.
   * 
   * @example
   * Chengdu, Sichuan Province
   */
  cityName?: string;
  /**
   * @remarks
   * The ID of the country to which the IP address belongs.
   * 
   * @example
   * CN
   */
  countryId?: string;
  /**
   * @remarks
   * The name of the country to which the IP address belongs.
   * 
   * @example
   * China
   */
  countryName?: string;
  static names(): { [key: string]: string } {
    return {
      cityId: 'CityId',
      cityName: 'CityName',
      countryId: 'CountryId',
      countryName: 'CountryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityId: 'string',
      cityName: 'string',
      countryId: 'string',
      countryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBodyDataListResourcePrivateIPList extends $tea.Model {
  /**
   * @remarks
   * The ID of the region to which the private IP address belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the instance that uses the private IP address.
   * 
   * @example
   * i-wz92jf4scg2zb74p****
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The name of the instance that uses the private IP address.
   * 
   * @example
   * LD-shenzhen-zy****
   */
  resourceInstanceName?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.255.XX.XX
   */
  resourcePrivateIP?: string;
  static names(): { [key: string]: string } {
    return {
      regionNo: 'RegionNo',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceName: 'ResourceInstanceName',
      resourcePrivateIP: 'ResourcePrivateIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionNo: 'string',
      resourceInstanceId: 'string',
      resourceInstanceName: 'string',
      resourcePrivateIP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBodyDataListVpcDstInfo extends $tea.Model {
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-wz92jf4scg2zb74p****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * LD-shenzhen-zy****
   */
  ecsInstanceName?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-uf6e9a9zyokj2ywuo****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * VPC-SH-TX****
   */
  networkInstanceName?: string;
  /**
   * @remarks
   * The ID of the region in which the destination VPC resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceId: 'EcsInstanceId',
      ecsInstanceName: 'EcsInstanceName',
      networkInstanceId: 'NetworkInstanceId',
      networkInstanceName: 'NetworkInstanceName',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceId: 'string',
      ecsInstanceName: 'string',
      networkInstanceId: 'string',
      networkInstanceName: 'string',
      regionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBodyDataListVpcSrcInfo extends $tea.Model {
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-wz92jf4scg2zb74p****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * LD-shenzhen-zy****
   */
  ecsInstanceName?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-uf6e9a9zyokj2ywuo****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * VPC-SH-TX****
   */
  networkInstanceName?: string;
  /**
   * @remarks
   * The ID of the region in which the source VPC resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceId: 'EcsInstanceId',
      ecsInstanceName: 'EcsInstanceName',
      networkInstanceId: 'NetworkInstanceId',
      networkInstanceName: 'NetworkInstanceName',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceId: 'string',
      ecsInstanceName: 'string',
      networkInstanceId: 'string',
      networkInstanceName: 'string',
      regionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBodyDataList extends $tea.Model {
  /**
   * @remarks
   * The name of the attacked application.
   * 
   * @example
   * MySql
   */
  attackApp?: string;
  /**
   * @remarks
   * The attack type of the intrusion event. Valid values:
   * 
   * *   **1**: suspicious connection
   * *   **2**: command execution
   * *   **3**: brute-force attack
   * *   **4**: scanning
   * *   **5**: others
   * *   **6**: information leak
   * *   **7**: DoS attack
   * *   **8**: buffer overflow attack
   * *   **9**: web attack
   * *   **10**: trojan backdoor
   * *   **11**: computer worm
   * *   **12**: mining
   * *   **13**: reverse shell
   * 
   * @example
   * 1
   */
  attackType?: number;
  /**
   * @remarks
   * The description of the intrusion event.
   * 
   * @example
   * Path traversal attacks are detected in the web access requests over HTTP.
   */
  description?: string;
  /**
   * @remarks
   * The direction of the traffic for the intrusion event. Valid values:
   * 
   * *   **in**: inbound
   * *   **out**: outbound
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The destination IP address that is included in the intrusion event.
   * 
   * @example
   * 192.0.XX.XX
   */
  dstIP?: string;
  /**
   * @remarks
   * The number of intrusion events.
   * 
   * @example
   * 100
   */
  eventCount?: number;
  /**
   * @remarks
   * The ID of the intrusion event.
   * 
   * @example
   * 2b58efae-4c4b-4d96-9544-a586fb1f****
   */
  eventId?: string;
  /**
   * @remarks
   * The name of the intrusion event.
   * 
   * @example
   * Path traversal attack
   */
  eventName?: string;
  /**
   * @remarks
   * The time when the intrusion event was first detected. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1534408189
   */
  firstEventTime?: number;
  /**
   * @remarks
   * The geographical information about the IP address. The value is a struct that contains the following parameters: **CityId**, **CityName**, **CountryId**, and **CountryName**.\\
   * ****************
   */
  IPLocationInfo?: DescribeRiskEventGroupResponseBodyDataListIPLocationInfo;
  /**
   * @remarks
   * The time when the intrusion event was last detected. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1534408267
   */
  lastEventTime?: number;
  /**
   * @remarks
   * The information about the private IP address in the intrusion event. The value is an array that contains the following parameters: **RegionNo**, **ResourceInstanceId**, **ResourceInstanceName**, and **ResourcePrivateIP**.\\
   * ****************
   */
  resourcePrivateIPList?: DescribeRiskEventGroupResponseBodyDataListResourcePrivateIPList[];
  /**
   * @remarks
   * The type of the public IP address in the intrusion event. Valid values:
   * 
   * *   **EIP**: the elastic IP address (EIP)
   * *   **EcsPublicIP**: the public IP address of an Elastic Compute Service (ECS) instance
   * *   **EcsEIP**: the EIP of an ECS instance
   * *   **NatPublicIP**: the public IP address of a NAT gateway
   * *   **NatEIP**: the EIP of a NAT gateway
   * 
   * @example
   * EcsPublicIP
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the rule that is used to detect the intrusion event.
   * 
   * @example
   * 1000****
   */
  ruleId?: string;
  /**
   * @remarks
   * The status of the firewall. Valid values:
   * 
   * *   **1**: alerting
   * *   **2**: blocking
   * 
   * @example
   * 2
   */
  ruleResult?: number;
  /**
   * @remarks
   * The module of the rule that is used to detect the intrusion event. Valid values:
   * 
   * *   **1**: basic protection
   * *   **2**: virtual patching
   * *   **4**: threat intelligence
   * 
   * @example
   * 1
   */
  ruleSource?: number;
  /**
   * @remarks
   * The source IP address that is included in the intrusion event.
   * 
   * @example
   * 192.0.XX.XX
   */
  srcIP?: string;
  /**
   * @remarks
   * The tag added to the source IP address. The tag helps identify whether the source IP address is a back-to-origin IP address for a cloud service.
   * 
   * @example
   * WAF Back-to-origin Address
   */
  srcIPTag?: string;
  /**
   * @remarks
   * An array that consists of the source private IP addresses in the intrusion event.
   */
  srcPrivateIPList?: string[];
  /**
   * @remarks
   * The tag added to the threat intelligence that is provided for major events.
   * 
   * @example
   * Threat intelligence provided for major events
   */
  tag?: string;
  /**
   * @remarks
   * The information about the destination VPC of the intrusion event. The value is a struct that contains the following parameters: **EcsInstanceId**, **EcsInstanceName**, **NetworkInstanceId**, **NetworkInstanceName**, and **RegionNo**.\\
   * ********************
   */
  vpcDstInfo?: DescribeRiskEventGroupResponseBodyDataListVpcDstInfo;
  /**
   * @remarks
   * The information about the source VPC of the intrusion event. The value is a struct that contains the following parameters: **EcsInstanceId**, **EcsInstanceName**, **NetworkInstanceId**, **NetworkInstanceName**, and **RegionNo**.\\
   * ********************
   */
  vpcSrcInfo?: DescribeRiskEventGroupResponseBodyDataListVpcSrcInfo;
  /**
   * @remarks
   * The risk level of the intrusion event. Valid values:
   * 
   * *   **1**: low
   * *   **2**: medium
   * *   **3**: high
   * 
   * @example
   * 1
   */
  vulLevel?: number;
  static names(): { [key: string]: string } {
    return {
      attackApp: 'AttackApp',
      attackType: 'AttackType',
      description: 'Description',
      direction: 'Direction',
      dstIP: 'DstIP',
      eventCount: 'EventCount',
      eventId: 'EventId',
      eventName: 'EventName',
      firstEventTime: 'FirstEventTime',
      IPLocationInfo: 'IPLocationInfo',
      lastEventTime: 'LastEventTime',
      resourcePrivateIPList: 'ResourcePrivateIPList',
      resourceType: 'ResourceType',
      ruleId: 'RuleId',
      ruleResult: 'RuleResult',
      ruleSource: 'RuleSource',
      srcIP: 'SrcIP',
      srcIPTag: 'SrcIPTag',
      srcPrivateIPList: 'SrcPrivateIPList',
      tag: 'Tag',
      vpcDstInfo: 'VpcDstInfo',
      vpcSrcInfo: 'VpcSrcInfo',
      vulLevel: 'VulLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackApp: 'string',
      attackType: 'number',
      description: 'string',
      direction: 'string',
      dstIP: 'string',
      eventCount: 'number',
      eventId: 'string',
      eventName: 'string',
      firstEventTime: 'number',
      IPLocationInfo: DescribeRiskEventGroupResponseBodyDataListIPLocationInfo,
      lastEventTime: 'number',
      resourcePrivateIPList: { 'type': 'array', 'itemType': DescribeRiskEventGroupResponseBodyDataListResourcePrivateIPList },
      resourceType: 'string',
      ruleId: 'string',
      ruleResult: 'number',
      ruleSource: 'number',
      srcIP: 'string',
      srcIPTag: 'string',
      srcPrivateIPList: { 'type': 'array', 'itemType': 'string' },
      tag: 'string',
      vpcDstInfo: DescribeRiskEventGroupResponseBodyDataListVpcDstInfo,
      vpcSrcInfo: DescribeRiskEventGroupResponseBodyDataListVpcSrcInfo,
      vulLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignatureLibVersionResponseBodyVersion extends $tea.Model {
  /**
   * @remarks
   * The type.
   * 
   * Valid values:
   * 
   * *   ips
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     Basic Rules and Virtual Patching
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   intelligence
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     Threat Intelligence
   * 
   *     <!-- -->
   * 
   * @example
   * ips
   */
  type?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * IPS-2307-02
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallPolicyBackUpAssociationListRequestCandidateList extends $tea.Model {
  /**
   * @remarks
   * The ID of the traffic redirection instance.
   * 
   * @example
   * vpc-wz9grb8ng3y7h7lf2****
   */
  candidateId?: string;
  /**
   * @remarks
   * The type of the traffic redirection instance.
   * 
   * @example
   * VPC
   */
  candidateType?: string;
  static names(): { [key: string]: string } {
    return {
      candidateId: 'CandidateId',
      candidateType: 'CandidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateId: 'string',
      candidateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallPolicyBackUpAssociationListResponseBodyPolicyAssociationBackupConfigs extends $tea.Model {
  /**
   * @remarks
   * The ID of the traffic redirection instance.
   * 
   * @example
   * vpc-wz9grb8ng3y7h7lf2****
   */
  candidateId?: string;
  /**
   * @remarks
   * The name of the traffic redirection instance.
   * 
   * @example
   * test
   */
  candidateName?: string;
  /**
   * @remarks
   * The type of the traffic redirection instance.
   * 
   * @example
   * VPC
   */
  candidateType?: string;
  /**
   * @remarks
   * The route table that is used after traffic redirection.
   * 
   * @example
   * vtb-wz9898grickmh5j09****
   */
  currentRouteTableId?: string;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * vtb-wz9slp3s7m4qrzvnq****
   */
  originalRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      candidateId: 'CandidateId',
      candidateName: 'CandidateName',
      candidateType: 'CandidateType',
      currentRouteTableId: 'CurrentRouteTableId',
      originalRouteTableId: 'OriginalRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateId: 'string',
      candidateName: 'string',
      candidateType: 'string',
      currentRouteTableId: 'string',
      originalRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePoliciesDestCandidateList extends $tea.Model {
  /**
   * @remarks
   * The ID of the secondary traffic redirection instance.
   * 
   * @example
   * vpc-2ze9epancaw8t4sha****
   */
  candidateId?: string;
  /**
   * @remarks
   * The type of the secondary traffic redirection instance.
   * 
   * @example
   * VPC
   */
  candidateType?: string;
  static names(): { [key: string]: string } {
    return {
      candidateId: 'CandidateId',
      candidateType: 'CandidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateId: 'string',
      candidateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePoliciesSrcCandidateList extends $tea.Model {
  /**
   * @remarks
   * The ID of the primary traffic redirection instance.
   * 
   * @example
   * vpc-2ze9epancaw8t4sha****
   */
  candidateId?: string;
  /**
   * @remarks
   * The type of the primary traffic redirection instance.
   * 
   * @example
   * VPC
   */
  candidateType?: string;
  static names(): { [key: string]: string } {
    return {
      candidateId: 'CandidateId',
      candidateType: 'CandidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateId: 'string',
      candidateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePolicies extends $tea.Model {
  /**
   * @remarks
   * The secondary traffic redirection instances.
   */
  destCandidateList?: DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePoliciesDestCandidateList[];
  /**
   * @remarks
   * The description of the routing policy.
   * 
   * @example
   * test
   */
  policyDescription?: string;
  /**
   * @remarks
   * The name of the routing policy.
   * 
   * @example
   * TEST_VPC_FW
   */
  policyName?: string;
  /**
   * @remarks
   * The status of the routing policy. Valid values:
   * 
   * *   creating: The policy is being created.
   * *   deleting: The policy is being deleted.
   * *   opening: The policy is being enabled.
   * *   opened: The policy is enabled.
   * *   closing: The policy is being disabled.
   * *   closed: The policy is disabled.
   * 
   * @example
   * opened
   */
  policyStatus?: string;
  /**
   * @remarks
   * The type of the traffic redirection scenario of the VPC firewall. Valid values:
   * 
   * *   **fullmesh**: interconnected instances
   * *   **one_to_one**: instance to instance
   * *   **end_to_end**: instance to instances
   * 
   * @example
   * fullmesh
   */
  policyType?: string;
  /**
   * @remarks
   * The primary traffic redirection instances.
   */
  srcCandidateList?: DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePoliciesSrcCandidateList[];
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * policy-7b66257c14e141fb****
   */
  trFirewallRoutePolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      destCandidateList: 'DestCandidateList',
      policyDescription: 'PolicyDescription',
      policyName: 'PolicyName',
      policyStatus: 'PolicyStatus',
      policyType: 'PolicyType',
      srcCandidateList: 'SrcCandidateList',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCandidateList: { 'type': 'array', 'itemType': DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePoliciesDestCandidateList },
      policyDescription: 'string',
      policyName: 'string',
      policyStatus: 'string',
      policyType: 'string',
      srcCandidateList: { 'type': 'array', 'itemType': DescribeTrFirewallV2RoutePolicyListResponseBodyTrFirewallRoutePoliciesSrcCandidateList },
      trFirewallRoutePolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsIpsConfig extends $tea.Model {
  /**
   * @remarks
   * Indicates whether basic protection is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  basicRules?: number;
  /**
   * @remarks
   * Indicates whether virtual patching is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  enableAllPatch?: number;
  ruleClass?: number;
  /**
   * @remarks
   * The mode of the IPS. Valid values:
   * 
   * *   **1**: block mode
   * *   **0**: monitor mode
   * 
   * @example
   * 1
   */
  runMode?: number;
  static names(): { [key: string]: string } {
    return {
      basicRules: 'BasicRules',
      enableAllPatch: 'EnableAllPatch',
      ruleClass: 'RuleClass',
      runMode: 'RunMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicRules: 'number',
      enableAllPatch: 'number',
      ruleClass: 'number',
      runMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsProtectedResource extends $tea.Model {
  /**
   * @remarks
   * The number of protected resources.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The protected peer transit routers.
   */
  peerTrList?: string[];
  /**
   * @remarks
   * The protected virtual border routers (VBRs).
   */
  vbrList?: string[];
  /**
   * @remarks
   * The protected VPCs.
   */
  vpcList?: string[];
  /**
   * @remarks
   * The protected VPN gateways.
   */
  vpnList?: string[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      peerTrList: 'PeerTrList',
      vbrList: 'VbrList',
      vpcList: 'VpcList',
      vpnList: 'VpnList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      peerTrList: { 'type': 'array', 'itemType': 'string' },
      vbrList: { 'type': 'array', 'itemType': 'string' },
      vpcList: { 'type': 'array', 'itemType': 'string' },
      vpnList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsUnprotectedResource extends $tea.Model {
  /**
   * @remarks
   * The number of unprotected resources.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The unprotected peer transit routers.
   */
  peerTrList?: string[];
  /**
   * @remarks
   * The unprotected VBRs.
   */
  vbrList?: string[];
  /**
   * @remarks
   * The unprotected VPCs.
   */
  vpcList?: string[];
  /**
   * @remarks
   * The unprotected VPN gateways.
   */
  vpnList?: string[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      peerTrList: 'PeerTrList',
      vbrList: 'VbrList',
      vpcList: 'VpcList',
      vpnList: 'VpnList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      peerTrList: { 'type': 'array', 'itemType': 'string' },
      vbrList: { 'type': 'array', 'itemType': 'string' },
      vpcList: { 'type': 'array', 'itemType': 'string' },
      vpnList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallsV2ListResponseBodyVpcTrFirewalls extends $tea.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-03f8s0z052ka3v****
   */
  cenId?: string;
  /**
   * @remarks
   * The name of the CEN instance.
   * 
   * @example
   * cen_swas
   */
  cenName?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-99bc4f0fc88b4d00****
   */
  firewallId?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * *   **opened**: The VPC firewall is enabled.
   * *   **closed**: The VPC firewall is disabled.
   * *   **notconfigured**: The VPC firewall is not created.
   * *   **configured**: The VPC firewall is created but is not enabled.
   * *   **creating**: The VPC firewall is being created.
   * *   **opening**: The VPC firewall is being enabled.
   * *   **deleting**: The VPC firewall is being deleted.
   * 
   * >  If you do not specify this parameter, VPC firewalls in all states are queried.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The information about the intrusion prevention system (IPS) configuration.
   */
  ipsConfig?: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsIpsConfig;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 171761785151****
   */
  ownerId?: number;
  /**
   * @remarks
   * Indicates whether the VPC firewall can be automatically enabled. Valid values:
   * 
   * *   **passed**: yes
   * *   **failed**: no
   * *   **unknown**
   * 
   * @example
   * passed
   */
  precheckStatus?: string;
  /**
   * @remarks
   * The protected resources.
   */
  protectedResource?: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsProtectedResource;
  /**
   * @remarks
   * The region ID of the transit router.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * Indicates whether you can create a VPC firewall in a specified region. Valid values:
   * 
   * *   **enable**: yes
   * *   **disable**: no
   * 
   * @example
   * enable
   */
  regionStatus?: string;
  /**
   * @remarks
   * The result code of the operation that creates the VPC firewall. Valid values:
   * 
   * *   **RegionDisable**: VPC Firewall is not supported in the region of the network instance. You cannot create a VPC firewall for the network instance.
   * *   **Empty string**: You can create a VPC firewall for the network instance.
   * 
   * @example
   * RegionDisable
   */
  resultCode?: string;
  /**
   * @remarks
   * The routing mode of the VPC firewall. Valid values:
   * 
   * *   **managed**: automatic mode
   * *   **manual**: manual mode
   * 
   * @example
   * managed
   */
  routeMode?: string;
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-2vcmhjs88nil55fvu****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The unprotected resources.
   */
  unprotectedResource?: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsUnprotectedResource;
  /**
   * @remarks
   * The instance name of the VPC firewall.
   * 
   * @example
   * test
   */
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenName: 'CenName',
      firewallId: 'FirewallId',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      ipsConfig: 'IpsConfig',
      ownerId: 'OwnerId',
      precheckStatus: 'PrecheckStatus',
      protectedResource: 'ProtectedResource',
      regionNo: 'RegionNo',
      regionStatus: 'RegionStatus',
      resultCode: 'ResultCode',
      routeMode: 'RouteMode',
      transitRouterId: 'TransitRouterId',
      unprotectedResource: 'UnprotectedResource',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenName: 'string',
      firewallId: 'string',
      firewallSwitchStatus: 'string',
      ipsConfig: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsIpsConfig,
      ownerId: 'number',
      precheckStatus: 'string',
      protectedResource: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsProtectedResource,
      regionNo: 'string',
      regionStatus: 'string',
      resultCode: 'string',
      routeMode: 'string',
      transitRouterId: 'string',
      unprotectedResource: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsUnprotectedResource,
      vpcFirewallName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallsV2RouteListResponseBodyFirewallRouteDetailList extends $tea.Model {
  /**
   * @remarks
   * The destination address of the route.
   * 
   * @example
   * 192.168.10.0/25
   */
  trFirewallRouteDestination?: string;
  /**
   * @remarks
   * The ID of the next hop for the route.
   * 
   * @example
   * tr-attach-hnxab1y0pxn16p****
   */
  trFirewallRouteNexthop?: string;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * policy-04ecbbc6720d4f90****
   */
  trFirewallRoutePolicyId?: string;
  /**
   * @remarks
   * The ID of the route table to which the route entry belongs.
   * 
   * @example
   * vtb-2zeockxxxorv0mnhz****
   */
  trFirewallRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      trFirewallRouteDestination: 'TrFirewallRouteDestination',
      trFirewallRouteNexthop: 'TrFirewallRouteNexthop',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
      trFirewallRouteTableId: 'TrFirewallRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trFirewallRouteDestination: 'string',
      trFirewallRouteNexthop: 'string',
      trFirewallRoutePolicyId: 'string',
      trFirewallRouteTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserIPSWhitelistResponseBodyIpv6Whitelists extends $tea.Model {
  direction?: number;
  listType?: number;
  listValue?: string;
  whiteListValue?: string[];
  whiteType?: number;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      listType: 'ListType',
      listValue: 'ListValue',
      whiteListValue: 'WhiteListValue',
      whiteType: 'WhiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'number',
      listType: 'number',
      listValue: 'string',
      whiteListValue: { 'type': 'array', 'itemType': 'string' },
      whiteType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserIPSWhitelistResponseBodyWhitelists extends $tea.Model {
  direction?: number;
  listType?: number;
  listValue?: string;
  whiteListValue?: string[];
  whiteType?: number;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      listType: 'ListType',
      listValue: 'ListValue',
      whiteListValue: 'WhiteListValue',
      whiteType: 'WhiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'number',
      listType: 'number',
      listValue: 'string',
      whiteListValue: { 'type': 'array', 'itemType': 'string' },
      whiteType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallAclGroupListResponseBodyAclGroupList extends $tea.Model {
  /**
   * @remarks
   * The ID of the policy group.
   * 
   * Valid values:
   * 
   * *   If the VPC firewall is used to protect a Cloud Enterprise Network (CEN) instance, the value of this parameter is the ID of the CEN instance.
   * 
   *     Example: cen-ervw0g12b5jbw\\*\\*\\*\\*
   * 
   * *   If the VPC firewall is used to protect an Express Connect circuit, the value of this parameter is the instance ID of the VPC firewall.
   * 
   *     Example: vfw-a42bbb7b887148c9\\*\\*\\*\\*
   * 
   * @example
   * vfw-a42bbb7b887148c9****
   */
  aclGroupId?: string;
  /**
   * @remarks
   * The name of the policy group. Valid values:
   * 
   * *   If the VPC firewall is used to protect a CEN instance, the value of this parameter is the name of the CEN instance.
   * *   If the VPC firewall is used to protect an Express Connect circuit, the value of this parameter is the instance name of the VPC firewall.
   * 
   * @example
   * group_test
   */
  aclGroupName?: string;
  /**
   * @remarks
   * The number of access control policies in the policy group.
   * 
   * @example
   * 9
   */
  aclRuleCount?: number;
  /**
   * @remarks
   * 是否是默认防火墙。取值：
   * - **true**：是默认防火墙。
   * - **false**：不是默认防火墙。
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  static names(): { [key: string]: string } {
    return {
      aclGroupId: 'AclGroupId',
      aclGroupName: 'AclGroupName',
      aclRuleCount: 'AclRuleCount',
      isDefault: 'IsDefault',
      memberUid: 'MemberUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclGroupId: 'string',
      aclGroupName: 'string',
      aclRuleCount: 'number',
      isDefault: 'boolean',
      memberUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailResponseBodyFirewallVpc extends $tea.Model {
  /**
   * @remarks
   * Indicates whether you can specify a CIDR block when you create a VPC firewall for a Basic Edition transit router of a CEN instance. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 0
   */
  allowConfiguration?: number;
  /**
   * @remarks
   * The CIDR block of the VPC.
   * 
   * @example
   * 10.0.0.0/8
   */
  vpcCidr?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1245k5oagy2bp74****
   */
  vpcId?: string;
  /**
   * @remarks
   * The CIDR block of the vSwitch.
   * 
   * @example
   * 10.0.0.1/24
   */
  vswitchCidr?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1sqg9wms9wxcs1****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allowConfiguration: 'AllowConfiguration',
      vpcCidr: 'VpcCidr',
      vpcId: 'VpcId',
      vswitchCidr: 'VswitchCidr',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowConfiguration: 'number',
      vpcCidr: 'string',
      vpcId: 'string',
      vswitchCidr: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailResponseBodyLocalVpcEniList extends $tea.Model {
  /**
   * @remarks
   * The ID of the ENI that belongs to the VPC.
   * 
   * @example
   * eni-8vbhfosfqv2rff42****
   */
  eniId?: string;
  /**
   * @remarks
   * The private IP address of the ENI that belongs to the VPC.
   * 
   * @example
   * 192.168.XX.XX
   */
  eniPrivateIpAddress?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the ENI is connected.
   * 
   * @example
   * vsw-wz9viido7j436b0n1****
   */
  eniVSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      eniPrivateIpAddress: 'EniPrivateIpAddress',
      eniVSwitchId: 'EniVSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
      eniPrivateIpAddress: 'string',
      eniVSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList extends $tea.Model {
  /**
   * @remarks
   * The destination CIDR block of the VPC.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The instance ID of the next hop for the VPC.
   * 
   * @example
   * vrt-m5eb5me6c3l5sezae****
   */
  nextHopInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopInstanceId: 'NextHopInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableList extends $tea.Model {
  /**
   * @remarks
   * The route entries for the VPC.
   */
  routeEntryList?: DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList[];
  /**
   * @remarks
   * The route table ID of the VPC.
   * 
   * @example
   * vtb-1234
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      routeEntryList: 'RouteEntryList',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList },
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailResponseBodyLocalVpc extends $tea.Model {
  /**
   * @remarks
   * The ID of the connection between two network instances.
   * 
   * @example
   * tr-attach-sxig7bye51fid5****
   */
  attachmentId?: string;
  /**
   * @remarks
   * The name of the connection between two network instances.
   * 
   * @example
   * Local test
   */
  attachmentName?: string;
  /**
   * @remarks
   * An array consisting of the CIDR blocks that are protected by the VPC firewall.
   */
  defendCidrList?: string[];
  /**
   * @remarks
   * The Elastic Network Interfaces (ENIs).
   */
  eniList?: DescribeVpcFirewallCenDetailResponseBodyLocalVpcEniList[];
  /**
   * @remarks
   * The ID of the specified vSwitch when the routing mode is manual.
   * 
   * @example
   * vsw-zeq4o875u****
   */
  manualVSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC for which the VPC firewall is created.
   * 
   * @example
   * vpc-2zefk9fbn8j7v585g****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The name of the network instance.
   * 
   * @example
   * Test VPC
   */
  networkInstanceName?: string;
  /**
   * @remarks
   * The type of the network instance. The value is fixed as **VPC**.
   * 
   * @example
   * VPC
   */
  networkInstanceType?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 158039427902****
   */
  ownerId?: string;
  /**
   * @remarks
   * The ID of the region in which the VPC resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The routing mode. Valid values:
   * 
   * *   auto: automatic mode
   * *   manual: manual mode
   * 
   * @example
   * auto
   */
  routeMode?: string;
  /**
   * @remarks
   * Indicates whether the manual routing mode is supported. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 0
   */
  supportManualMode?: string;
  /**
   * @remarks
   * The instance ID of the CEN transit router.
   * 
   * @example
   * tr-2zetwxskej633l3u1****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The edition of the CEN transit router. Valid values:
   * 
   * *   **Basic**: Basic Edition
   * *   **Enterprise**: Enterprise Edition
   * 
   * @example
   * Basic
   */
  transitRouterType?: string;
  /**
   * @remarks
   * An array that consists of the CIDR blocks of the VPC.
   */
  vpcCidrTableList?: DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableList[];
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * Test instance
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentId: 'AttachmentId',
      attachmentName: 'AttachmentName',
      defendCidrList: 'DefendCidrList',
      eniList: 'EniList',
      manualVSwitchId: 'ManualVSwitchId',
      networkInstanceId: 'NetworkInstanceId',
      networkInstanceName: 'NetworkInstanceName',
      networkInstanceType: 'NetworkInstanceType',
      ownerId: 'OwnerId',
      regionNo: 'RegionNo',
      routeMode: 'RouteMode',
      supportManualMode: 'SupportManualMode',
      transitRouterId: 'TransitRouterId',
      transitRouterType: 'TransitRouterType',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentId: 'string',
      attachmentName: 'string',
      defendCidrList: { 'type': 'array', 'itemType': 'string' },
      eniList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenDetailResponseBodyLocalVpcEniList },
      manualVSwitchId: 'string',
      networkInstanceId: 'string',
      networkInstanceName: 'string',
      networkInstanceType: 'string',
      ownerId: 'string',
      regionNo: 'string',
      routeMode: 'string',
      supportManualMode: 'string',
      transitRouterId: 'string',
      transitRouterType: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenListResponseBodyVpcFirewallsIpsConfig extends $tea.Model {
  /**
   * @remarks
   * Indicates whether basic protection is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  basicRules?: number;
  /**
   * @remarks
   * Indicates whether virtual patching is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  enableAllPatch?: number;
  ruleClass?: number;
  /**
   * @remarks
   * The mode of the IPS. Valid values:
   * 
   * *   **1**: block mode
   * *   **0**: monitor mode
   * 
   * @example
   * 0
   */
  runMode?: number;
  static names(): { [key: string]: string } {
    return {
      basicRules: 'BasicRules',
      enableAllPatch: 'EnableAllPatch',
      ruleClass: 'RuleClass',
      runMode: 'RunMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicRules: 'number',
      enableAllPatch: 'number',
      ruleClass: 'number',
      runMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList extends $tea.Model {
  /**
   * @remarks
   * The destination CIDR block of the VPC.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The instance ID of the next hop for the VPC.
   * 
   * @example
   * vrt-m5eb5me6c3l5sezae****
   */
  nextHopInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopInstanceId: 'NextHopInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList extends $tea.Model {
  /**
   * @remarks
   * An array that consists of the route entries for the VPC.
   */
  routeEntryList?: DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList[];
  /**
   * @remarks
   * The route table ID of the VPC.
   * 
   * @example
   * vtb-1234
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      routeEntryList: 'RouteEntryList',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList },
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpc extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the VPC is granted the required permissions. The value is fixed as **authorized**, which indicates that the VPC is granted the required permissions.
   * 
   * @example
   * authorized
   */
  authorizationStatus?: string;
  /**
   * @remarks
   * An array consisting of the CIDR blocks that are protected by the VPC firewall.
   */
  defendCidrList?: string[];
  /**
   * @remarks
   * The ID of the specified vSwitch when the routing mode is manual.
   * 
   * @example
   * vsw-zeq4o875u****
   */
  manualVSwitchId?: string;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vpc-2zefk9fbn8j7v585g****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The name of the network instance.
   * 
   * @example
   * Test VPC
   */
  networkInstanceName?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * *   **VPC**
   * *   **VBR**
   * *   **CCN**
   * 
   * @example
   * VPC
   */
  networkInstanceType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 158039427902****
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The routing mode of the VPC firewall. Valid values:
   * 
   * *   **auto**: automatic mode
   * *   **manual**: manual mode
   * 
   * @example
   * auto
   */
  routeMode?: string;
  /**
   * @remarks
   * Indicates whether the manual routing mode is supported. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 0
   */
  supportManualMode?: string;
  /**
   * @remarks
   * The edition of the CEN transit router. Valid values:
   * 
   * *   **Basic**: Basic Edition transit router
   * *   **Enterprise**: Enterprise Edition transit router
   * 
   * @example
   * Basic
   */
  transitRouterType?: string;
  /**
   * @remarks
   * An array that consists of the CIDR blocks of the VPC.
   */
  vpcCidrTableList?: DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList[];
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * Test instance
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationStatus: 'AuthorizationStatus',
      defendCidrList: 'DefendCidrList',
      manualVSwitchId: 'ManualVSwitchId',
      networkInstanceId: 'NetworkInstanceId',
      networkInstanceName: 'NetworkInstanceName',
      networkInstanceType: 'NetworkInstanceType',
      ownerId: 'OwnerId',
      regionNo: 'RegionNo',
      routeMode: 'RouteMode',
      supportManualMode: 'SupportManualMode',
      transitRouterType: 'TransitRouterType',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationStatus: 'string',
      defendCidrList: { 'type': 'array', 'itemType': 'string' },
      manualVSwitchId: 'string',
      networkInstanceId: 'string',
      networkInstanceName: 'string',
      networkInstanceType: 'string',
      ownerId: 'number',
      regionNo: 'string',
      routeMode: 'string',
      supportManualMode: 'string',
      transitRouterType: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenListResponseBodyVpcFirewalls extends $tea.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-x5jayxou71ad73****
   */
  cenId?: string;
  /**
   * @remarks
   * The name of the CEN instance.
   * 
   * @example
   * Test CEN instance
   */
  cenName?: string;
  /**
   * @remarks
   * The connection type of the VPC firewall. The value is fixed as cen, which indicates a CEN instance.
   * 
   * @example
   * cen
   */
  connectType?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * *   **opened**: The VPC firewall is enabled.
   * *   **closed**: The VPC firewall is disabled.
   * *   **notconfigured**: The VPC firewall is not configured.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The information about the intrusion prevention system (IPS) configuration.
   */
  ipsConfig?: DescribeVpcFirewallCenListResponseBodyVpcFirewallsIpsConfig;
  /**
   * @remarks
   * The details about the VPC.
   */
  localVpc?: DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpc;
  /**
   * @remarks
   * The UID of the member that is manged by your Alibaba Cloud account. The member is also an Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * Indicates whether the VPC firewall can be automatically enabled to protect VPC traffic based on route learning. Valid values:
   * 
   * *   **passed**: The VPC firewall can be automatically enabled.
   * *   **failed**: The VPC firewall cannot be automatically enabled.
   * *   **unknown**: The VPC firewall is in an unknown state.
   * 
   * @example
   * failed
   */
  precheckStatus?: string;
  /**
   * @remarks
   * Indicates whether you can create a VPC firewall in a specified region. Valid values:
   * 
   * *   **enable**: yes
   * *   **disable**: no
   * 
   * @example
   * enable
   */
  regionStatus?: string;
  /**
   * @remarks
   * The result code of the operation that creates the VPC firewall. Valid values:
   * 
   * *   **Unauthorized**: Cloud Firewall is not authorized to access the VPC for which the VPC firewall is created, and the VPC firewall cannot be created.
   * *   **RegionDisable**: VPC Firewall is not supported in the region of the VPC for which the VPC firewall is created, and the VPC firewall cannot be created.
   * *   **OpsDisable**: You are not allowed to create the VPC firewall.
   * *   **VbrNotSupport**: The VPC firewall cannot be created for a VBR that is attached to the CEN instance.
   * *   Empty string: You can create a VPC firewall for the network instance.
   * 
   * @example
   * Unauthorized
   */
  resultCode?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The instance name of the VPC firewall.
   * 
   * @example
   * Test firewall
   */
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenName: 'CenName',
      connectType: 'ConnectType',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      ipsConfig: 'IpsConfig',
      localVpc: 'LocalVpc',
      memberUid: 'MemberUid',
      precheckStatus: 'PrecheckStatus',
      regionStatus: 'RegionStatus',
      resultCode: 'ResultCode',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenName: 'string',
      connectType: 'string',
      firewallSwitchStatus: 'string',
      ipsConfig: DescribeVpcFirewallCenListResponseBodyVpcFirewallsIpsConfig,
      localVpc: DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpc,
      memberUid: 'string',
      precheckStatus: 'string',
      regionStatus: 'string',
      resultCode: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallControlPolicyResponseBodyPolicys extends $tea.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic. Valid values:
   * 
   * *   **accept**: allows the traffic.
   * *   **drop**: denies the traffic.
   * *   **log**: monitors the traffic.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * @example
   * 4037fbf7-3e39-4634-92a4-d0155247****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The application ID in the access control policy.
   * 
   * @example
   * 10**
   */
  applicationId?: string;
  /**
   * @remarks
   * The application types supported by the access control policy. We recommend that you specify ApplicationNameList. Valid values:
   * 
   * *   **HTTP**
   * *   **HTTPS**
   * *   **MySQL**
   * *   **SMTP**
   * *   **SMTPS**
   * *   **RDP**
   * *   **VNC**
   * *   **SSH**
   * *   **Redis**
   * *   **MQTT**
   * *   **MongoDB**
   * *   **Memcache**
   * *   **SSL**
   * *   **ANY**: all application types
   * 
   * @example
   * HTTP
   */
  applicationName?: string;
  /**
   * @remarks
   * The application types supported by the access control policy.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The time when the access control policy was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1761062400
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination port in the access control policy.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book in the access control policy.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The ports in the destination port address book of the access control policy.
   */
  destPortGroupPorts?: string[];
  /**
   * @remarks
   * The type of the destination port in the access control policy. Valid values:
   * 
   * *   **port**: port
   * *   **group**: port address book
   * 
   * @example
   * port
   */
  destPortType?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Valid values:
   * 
   * *   If **DestinationType** is set to `net`, the value of this parameter is a CIDR block.
   * *   If **DestinationType** is set to `domain`, the value of this parameter is a domain name.
   * *   If **DestinationType** is set to `group`, the value of this parameter is an address book name.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The CIDR blocks in the destination address book of the access control policy.
   */
  destinationGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the destination address book in the access control policy. Valid values:
   * 
   * *   **ip**: an address book that includes one or more CIDR blocks
   * *   **domain**: an address book that includes one or more domain names
   * 
   * @example
   * ip
   */
  destinationGroupType?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
   * 
   * *   **net**: CIDR block
   * *   **group**: address book
   * *   **domain**: domain name
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The domain name resolution method of the access control policy. By default, an access control policy is enabled after the policy is created. Valid values:
   * 
   * * **FQDN**: fully qualified domain name (FQDN)-based resolution
   * * **DNS**: DNS-based dynamic resolution
   * * **FQDN_AND_DNS**: FQDN and DNS-based dynamic resolution
   * 
   * @example
   * FQDN
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
   * 
   * >  If RepeatType is set to Permanent, EndTime is left empty. If RepeatType is set to None, Daily, Weekly, or Monthly, EndTime must be specified.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The time when the access control policy was last hit. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1579261141
   */
  hitLastTime?: number;
  /**
   * @remarks
   * The number of hits for the access control policy.
   * 
   * @example
   * 100
   */
  hitTimes?: number;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The time when the access control policy was modified. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1761062400
   */
  modifyTime?: number;
  /**
   * @remarks
   * The priority of the access control policy.
   * 
   * The priority value starts from 1. A smaller priority value indicates a higher priority.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The protocol type in the access control policy. Valid values:
   * 
   * *   **TCP**
   * *   **UDP**
   * *   **ICMP**
   * *   **ANY**: all protocol types
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * Indicates whether the access control policy is enabled. By default, an access control policy is enabled after it is created. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of a week or of a month on which the access control policy takes effect.
   * 
   * *   If RepeatType is set to `Permanent`, `None`, or `Daily`, RepeatDays is left empty. Example: [].
   * *   If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6].
   * 
   * >  If RepeatType is set to Weekly, the fields in the value of RepeatDays cannot be repeated.
   * 
   * *   If RepeatType is set to `Monthly`, RepeatDays must be specified. Example: [1, 31].
   * 
   * >  If RepeatType is set to Monthly, the fields in the value of RepeatDays cannot be repeated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
   * 
   * >  If RepeatType is set to Permanent or None, RepeatEndTime is left empty. If RepeatType is set to Daily, Weekly, or Monthly, RepeatEndTime must be specified.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
   * 
   * >  If RepeatType is set to Permanent or None, RepeatStartTime is left empty. If RepeatType is set to Daily, Weekly, or Monthly, this parameter must be specified.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the access control policy to take effect. Valid values:
   * 
   * *   **Permanent** (default): The policy always takes effect.
   * *   **None**: The policy takes effect for only once.
   * *   **Daily**: The policy takes effect on a daily basis.
   * *   **Weekly**: The policy takes effect on a weekly basis.
   * *   **Monthly**: The policy takes effect on a monthly basis.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Valid values:
   * 
   * *   If **SourceType** is set to `net`, the value of this parameter is a CIDR block.
   * *   If **SourceType** is set to `group`, the value of this parameter is an address book name.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The CIDR blocks in the source address book of the access control policy.
   */
  sourceGroupCidrs?: string[];
  /**
   * @remarks
   * The type of the source address book in the access control policy. The value is fixed as **ip**. The value indicates an address book that includes one or more CIDR blocks.
   * 
   * @example
   * ip
   */
  sourceGroupType?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * *   **net**: CIDR block
   * *   **group**: address book
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The total quota consumed by the returned access control policies, which is the sum of the quota consumed by each policy. The quota that is consumed by an access control policy is calculated by using the following formula: Quota that is consumed by an access control policy = Number of source addresses × Number of destination addresses (number of CIDR blocks or domain names) × Number of applications × Number of port ranges.
   * 
   * @example
   * 10,000
   */
  spreadCnt?: number;
  /**
   * @remarks
   * The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
   * 
   * >  If RepeatType is set to Permanent, StartTime is left empty. If RepeatType is set to None, Daily, Weekly, or Monthly, StartTime must be specified.
   * 
   * @example
   * 1694761200
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      applicationNameList: 'ApplicationNameList',
      createTime: 'CreateTime',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortGroupPorts: 'DestPortGroupPorts',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationGroupCidrs: 'DestinationGroupCidrs',
      destinationGroupType: 'DestinationGroupType',
      destinationType: 'DestinationType',
      domainResolveType: 'DomainResolveType',
      endTime: 'EndTime',
      hitLastTime: 'HitLastTime',
      hitTimes: 'HitTimes',
      memberUid: 'MemberUid',
      modifyTime: 'ModifyTime',
      order: 'Order',
      proto: 'Proto',
      release: 'Release',
      repeatDays: 'RepeatDays',
      repeatEndTime: 'RepeatEndTime',
      repeatStartTime: 'RepeatStartTime',
      repeatType: 'RepeatType',
      source: 'Source',
      sourceGroupCidrs: 'SourceGroupCidrs',
      sourceGroupType: 'SourceGroupType',
      sourceType: 'SourceType',
      spreadCnt: 'SpreadCnt',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      applicationId: 'string',
      applicationName: 'string',
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'number',
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortGroupPorts: { 'type': 'array', 'itemType': 'string' },
      destPortType: 'string',
      destination: 'string',
      destinationGroupCidrs: { 'type': 'array', 'itemType': 'string' },
      destinationGroupType: 'string',
      destinationType: 'string',
      domainResolveType: 'string',
      endTime: 'number',
      hitLastTime: 'number',
      hitTimes: 'number',
      memberUid: 'string',
      modifyTime: 'number',
      order: 'number',
      proto: 'string',
      release: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'number' },
      repeatEndTime: 'string',
      repeatStartTime: 'string',
      repeatType: 'string',
      source: 'string',
      sourceGroupCidrs: { 'type': 'array', 'itemType': 'string' },
      sourceGroupType: 'string',
      sourceType: 'string',
      spreadCnt: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList extends $tea.Model {
  /**
   * @remarks
   * The destination CIDR block of the local VPC.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The instance ID of the next hop for the local VPC.
   * 
   * @example
   * vrt-m5eb5me6c3l5sezae****
   */
  nextHopInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopInstanceId: 'NextHopInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableList extends $tea.Model {
  /**
   * @remarks
   * The route entries of the local VPC.
   */
  routeEntryList?: DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList[];
  /**
   * @remarks
   * The ID of the route table for the local VPC.
   * 
   * @example
   * vtb-1234
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      routeEntryList: 'RouteEntryList',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList },
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDetailResponseBodyLocalVpc extends $tea.Model {
  /**
   * @remarks
   * The ID of the ENI for the local VPC.
   * 
   * @example
   * eni-8vbhfosfqv2rff42****
   */
  eniId?: string;
  /**
   * @remarks
   * The private IP address of the elastic network interface (ENI) for the local VPC.
   * 
   * @example
   * 192.168.XX.XX
   */
  eniPrivateIpAddress?: string;
  /**
   * @remarks
   * The region ID of the local VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The router interface ID of the local VPC.
   * 
   * @example
   * vrt-m5eb5me6c3l5sezae****
   */
  routerInterfaceId?: string;
  /**
   * @remarks
   * The CIDR blocks of the local VPC.
   */
  vpcCidrTableList?: DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableList[];
  /**
   * @remarks
   * The ID of the local VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the local VPC.
   * 
   * @example
   * Vitasoy
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      eniPrivateIpAddress: 'EniPrivateIpAddress',
      regionNo: 'RegionNo',
      routerInterfaceId: 'RouterInterfaceId',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
      eniPrivateIpAddress: 'string',
      regionNo: 'string',
      routerInterfaceId: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDetailResponseBodyPeerVpcVpcCidrTableListRouteEntryList extends $tea.Model {
  /**
   * @remarks
   * The destination CIDR block of the peer VPC.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The instance ID of the next hop for the peer VPC.
   * 
   * @example
   * vrt-m5eb5me6c3l5sezae****
   */
  nextHopInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopInstanceId: 'NextHopInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDetailResponseBodyPeerVpcVpcCidrTableList extends $tea.Model {
  /**
   * @remarks
   * The route entries of the peer VPC.
   */
  routeEntryList?: DescribeVpcFirewallDetailResponseBodyPeerVpcVpcCidrTableListRouteEntryList[];
  /**
   * @remarks
   * The ID of the route table for the peer VPC.
   * 
   * @example
   * vtb-1256
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      routeEntryList: 'RouteEntryList',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallDetailResponseBodyPeerVpcVpcCidrTableListRouteEntryList },
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDetailResponseBodyPeerVpc extends $tea.Model {
  /**
   * @remarks
   * The ID of the ENI for the peer VPC.
   * 
   * @example
   * eni-8vbhfosfqv2rff42****
   */
  eniId?: string;
  /**
   * @remarks
   * The private IP address of the ENI for the peer VPC.
   * 
   * @example
   * 192.168.XX.XX
   */
  eniPrivateIpAddress?: string;
  /**
   * @remarks
   * The region ID of the peer VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The router interface ID of the peer VPC.
   * 
   * @example
   * vrt-m5eb5me6c3l5sezae****
   */
  routerInterfaceId?: string;
  /**
   * @remarks
   * The CIDR blocks of the peer VPC.
   */
  vpcCidrTableList?: DescribeVpcFirewallDetailResponseBodyPeerVpcVpcCidrTableList[];
  /**
   * @remarks
   * The ID of the peer VPC.
   * 
   * @example
   * vpc-90rq0anm6t8vbwbo****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the peer VPC.
   * 
   * @example
   * zcy_prod
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      eniPrivateIpAddress: 'EniPrivateIpAddress',
      regionNo: 'RegionNo',
      routerInterfaceId: 'RouterInterfaceId',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
      eniPrivateIpAddress: 'string',
      regionNo: 'string',
      routerInterfaceId: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallDetailResponseBodyPeerVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallIPSWhitelistResponseBodyWhitelists extends $tea.Model {
  /**
   * @remarks
   * The type of the list. Valid values:
   * 
   * *   **1**: user-defined
   * *   **2**: address book
   * 
   * @example
   * 1
   */
  listType?: number;
  /**
   * @remarks
   * The entries in the list.
   * 
   * @example
   * 10.10.200.4/32,10.10.200.25/32
   */
  listValue?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-57431e9abe424852a578
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * An array of entries in the list.
   */
  whiteListValue?: string[];
  /**
   * @remarks
   * The type of the whitelist. Valid values:
   * 
   * *   **1**: destination
   * *   **2**: source
   * 
   * @example
   * 1
   */
  whiteType?: number;
  static names(): { [key: string]: string } {
    return {
      listType: 'ListType',
      listValue: 'ListValue',
      vpcFirewallId: 'VpcFirewallId',
      whiteListValue: 'WhiteListValue',
      whiteType: 'WhiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listType: 'number',
      listValue: 'string',
      vpcFirewallId: 'string',
      whiteListValue: { 'type': 'array', 'itemType': 'string' },
      whiteType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewallsIpsConfig extends $tea.Model {
  /**
   * @remarks
   * Indicates whether basic protection is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  basicRules?: number;
  /**
   * @remarks
   * Indicates whether virtual patching is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  enableAllPatch?: number;
  ruleClass?: number;
  /**
   * @remarks
   * The mode of the IPS. Valid values:
   * 
   * *   **1**: block mode
   * *   **0**: monitor mode
   * 
   * @example
   * 0
   */
  runMode?: number;
  static names(): { [key: string]: string } {
    return {
      basicRules: 'BasicRules',
      enableAllPatch: 'EnableAllPatch',
      ruleClass: 'RuleClass',
      runMode: 'RunMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicRules: 'number',
      enableAllPatch: 'number',
      ruleClass: 'number',
      runMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList extends $tea.Model {
  /**
   * @remarks
   * The destination CIDR block of the local VPC.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The instance ID of the next hop for the local VPC.
   * 
   * @example
   * vrt-m5eb5me6c3l5sezae****
   */
  nextHopInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopInstanceId: 'NextHopInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList extends $tea.Model {
  /**
   * @remarks
   * An array that consists of the route entries of the local VPC.
   */
  routeEntryList?: DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList[];
  /**
   * @remarks
   * The ID of the route table for the local VPC.
   * 
   * @example
   * vtb-1234
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      routeEntryList: 'RouteEntryList',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList },
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpc extends $tea.Model {
  /**
   * @remarks
   * Indicates whether Cloud Firewall is authorized to access the local VPC. The value is fixed as authorized, which indicates that Cloud Firewall is authorized to access the local VPC.
   * 
   * @example
   * authorized
   */
  authorizationStatus?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account to which the local VPC belongs.
   * 
   * @example
   * 158039427902****
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the local VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * An array that consists of the CIDR blocks of the local VPC.
   */
  vpcCidrTableList?: DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList[];
  /**
   * @remarks
   * The ID of the local VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the local VPC.
   * 
   * @example
   * Test instance
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationStatus: 'AuthorizationStatus',
      ownerId: 'OwnerId',
      regionNo: 'RegionNo',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationStatus: 'string',
      ownerId: 'number',
      regionNo: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableListRouteEntryList extends $tea.Model {
  /**
   * @remarks
   * The destination CIDR block of the peer VPC.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The instance ID of the next hop for the peer VPC.
   * 
   * @example
   * vrt-m5eb5me6c3l5sezae****
   */
  nextHopInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopInstanceId: 'NextHopInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableList extends $tea.Model {
  /**
   * @remarks
   * An array that consists of the route entries of the peer VPC.
   */
  routeEntryList?: DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableListRouteEntryList[];
  /**
   * @remarks
   * The ID of the route table for the peer VPC.
   * 
   * @example
   * vtb-1256
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      routeEntryList: 'RouteEntryList',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableListRouteEntryList },
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpc extends $tea.Model {
  /**
   * @remarks
   * Indicates whether Cloud Firewall is authorized to access the peer VPC. The value is fixed as **authorized**, which indicates that Cloud Firewall is authorized to access the peer VPC.
   * 
   * @example
   * authorized
   */
  authorizationStatus?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account to which the peer VPC belongs.
   * 
   * @example
   * 158039427902****
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the peer VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * An array that consists of the CIDR blocks of the peer VPC.
   */
  vpcCidrTableList?: DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableList[];
  /**
   * @remarks
   * The ID of the peer VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the peer VPC.
   * 
   * @example
   * Test VPC 2
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationStatus: 'AuthorizationStatus',
      ownerId: 'OwnerId',
      regionNo: 'RegionNo',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationStatus: 'string',
      ownerId: 'number',
      regionNo: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewalls extends $tea.Model {
  /**
   * @remarks
   * The bandwidth of the Express Connect circuit. Unit: Mbit/s.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The sub-type of the connection. Valid values:
   * 
   * *   **vpc2vpc**: Express Connect connection
   * *   **vpcpeer**: peer connection
   * 
   * @example
   * vpcpeer
   */
  connectSubType?: string;
  /**
   * @remarks
   * The connection type of the VPC firewall. The value is fixed as **expressconnect**, which indicates an Express Connect connection.
   * 
   * @example
   * expressconnect
   */
  connectType?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * *   **opened**: The VPC firewall is enabled.
   * *   **closed**: The VPC firewall is disabled.
   * *   **notconfigured**: The VPC firewall is not configured.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The information about the intrusion prevention system (IPS) configuration.
   */
  ipsConfig?: DescribeVpcFirewallListResponseBodyVpcFirewallsIpsConfig;
  /**
   * @remarks
   * The details about the local VPC.
   */
  localVpc?: DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpc;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The details about the peer VPC.
   */
  peerVpc?: DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpc;
  /**
   * @remarks
   * Indicates whether you can create a VPC firewall in a specified region. Valid values:
   * 
   * *   **enable**: yes
   * *   **disable**: no
   * 
   * @example
   * enable
   */
  regionStatus?: string;
  /**
   * @remarks
   * The result code of the operation that creates the VPC firewall. Valid values:
   * 
   * *   **Unauthorized**: Cloud Firewall is not authorized to access a VPC for which the VPC firewall is created, and the VPC firewall cannot be created.
   * *   **RegionDisable**: VPC Firewall is not supported in the region of a VPC for which the VPC firewall is created, and the VPC firewall cannot be created.
   * *   **Empty string**: You can create a VPC firewall for the network instance.
   * 
   * @example
   * Unauthorized
   */
  resultCode?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The instance name of the VPC firewall.
   * 
   * @example
   * Test firewall
   */
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      connectSubType: 'ConnectSubType',
      connectType: 'ConnectType',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      ipsConfig: 'IpsConfig',
      localVpc: 'LocalVpc',
      memberUid: 'MemberUid',
      peerVpc: 'PeerVpc',
      regionStatus: 'RegionStatus',
      resultCode: 'ResultCode',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      connectSubType: 'string',
      connectType: 'string',
      firewallSwitchStatus: 'string',
      ipsConfig: DescribeVpcFirewallListResponseBodyVpcFirewallsIpsConfig,
      localVpc: DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpc,
      memberUid: 'string',
      peerVpc: DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpc,
      regionStatus: 'string',
      resultCode: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcListLiteResponseBodyVpcList extends $tea.Model {
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-wz9dqhljd10fk0b4eh885
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * Cloud_Firewall_VPC
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      regionNo: 'RegionNo',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionNo: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcZoneResponseBodyZoneList extends $tea.Model {
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * Hangzhou Zone B
   */
  localName?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone type. Default value: AvailabilityZone. This value indicates Alibaba Cloud zones.
   * 
   * @example
   * AvailabilityZone
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      zoneId: 'ZoneId',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      zoneId: 'string',
      zoneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulnerabilityProtectedListResponseBodyVulnListResourceList extends $tea.Model {
  /**
   * @remarks
   * The elastic IP address (EIP) that is associated with the instance.
   * 
   * @example
   * 203.107.XX.XX
   */
  eip?: string;
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * @example
   * 47.96.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The region ID of your Cloud Firewall.
   * 
   * >  For more information about Cloud Firewall supported regions, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ECS
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **SLB**
   * *   **EIP**
   * *   **ECS**
   * 
   * @example
   * EIP
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the vulnerability prevention feature. Valid values:
   * 
   * *   **partProtected**: enabled for partial assets
   * *   **protected**: enabled
   * *   **unProtected**: disabled
   * 
   * @example
   * protected
   */
  vulnStatus?: string;
  static names(): { [key: string]: string } {
    return {
      eip: 'Eip',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      vulnStatus: 'VulnStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eip: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      vulnStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulnerabilityProtectedListResponseBodyVulnList extends $tea.Model {
  /**
   * @remarks
   * The number of vulnerability attacks.
   * 
   * @example
   * 0
   */
  attackCnt?: number;
  /**
   * @remarks
   * The attack type of the vulnerability prevention event. Valid values:
   * 
   * *   **1**: suspicious connection
   * *   **2**: command execution
   * *   **3**: brute-force attack
   * *   **4**: scanning
   * *   **5**: others
   * *   **6**: information leakage
   * *   **7**: DoS attack
   * *   **8**: buffer overflow attack
   * *   **9**: web attack
   * *   **10**: webshell
   * *   **11**: computer worm
   * *   **12**: mining
   * *   **13**: reverse shell
   * 
   * @example
   * 13
   */
  attackType?: number;
  /**
   * @remarks
   * The IDs of associated basic protection policies.
   * 
   * @example
   * 12,12
   */
  basicRuleIds?: string;
  /**
   * @remarks
   * The CVE IDs.
   * 
   * @example
   * 12112131123, 1231123112
   */
  cveId?: string;
  /**
   * @remarks
   * The time when the first attack was launched.
   * 
   * @example
   * 1608687364
   */
  firstTime?: number;
  /**
   * @remarks
   * Indicates whether you need to pay special attention to the vulnerability. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 0
   */
  highlightTag?: number;
  /**
   * @remarks
   * The time when the last attack was launched.
   * 
   * @example
   * 1608687364
   */
  lastTime?: number;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 119384235299****
   */
  memberUid?: string;
  /**
   * @remarks
   * Indicates whether the basic protection policy that related to the vulnerability is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  If the value of this parameter is true, you must set the action of the basic protection policy related to the vulnerability to Block.
   * 
   * @example
   * false
   */
  needOpenBasicRule?: boolean;
  /**
   * @remarks
   * The UUIDs of the basic protection policies for which the action needs to be changed to Block.
   * 
   * @example
   * UUID-1231231
   */
  needOpenBasicRuleUuids?: string;
  /**
   * @remarks
   * Indicates whether Threat Engine Mode needs to be configured when you enable protection. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  needOpenRunMode?: boolean;
  /**
   * @remarks
   * Indicates whether the virtual patching policy that related to the vulnerability is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  If the value of this parameter is true, you must set the action of the virtual patching policy that related to the vulnerability to Block.
   * 
   * @example
   * true
   */
  needOpenVirtualPatche?: boolean;
  /**
   * @remarks
   * The UUIDs of the virtual patching policies for which the action needs to be changed to Block.
   * 
   * @example
   * UUID-1231231234
   */
  needOpenVirtualPatcheUuids?: string;
  /**
   * @remarks
   * The type of the rule group. Valid values:
   * 
   * *   **1** (default): loose
   * *   **2**: medium
   * *   **3**: strict
   * 
   * @example
   * 1
   */
  needRuleClass?: number;
  /**
   * @remarks
   * The number of assets on which vulnerabilities are detected.
   * 
   * @example
   * 0
   */
  resourceCnt?: number;
  /**
   * @remarks
   * The assets on which the vulnerability is detected.
   */
  resourceList?: DescribeVulnerabilityProtectedListResponseBodyVulnListResourceList[];
  /**
   * @remarks
   * The IDs of associated virtual patching policies.
   * 
   * @example
   * 13,13
   */
  virtualPatcheIds?: string;
  /**
   * @remarks
   * The code of the vulnerability.
   * 
   * @example
   * dedecms-archive.helper.php-vul
   */
  vulnKey?: string;
  /**
   * @remarks
   * The risk level of the vulnerability. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * high
   */
  vulnLevel?: string;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * Deserialization vulnerability of arbitrary code execution in Fastjson 1.2.80 and earlier versions
   */
  vulnName?: string;
  /**
   * @remarks
   * The status of the vulnerability prevention feature. Valid values:
   * 
   * *   **partProtected**: enabled for partial assets
   * *   **protected**: enabled
   * *   **unProtected**: disabled
   * 
   * @example
   * protected
   */
  vulnStatus?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **emg**: urgent vulnerability
   * *   **webcms**: Web-CMS vulnerability
   * *   **app**: application vulnerability
   * 
   * @example
   * emg
   */
  vulnType?: string;
  static names(): { [key: string]: string } {
    return {
      attackCnt: 'AttackCnt',
      attackType: 'AttackType',
      basicRuleIds: 'BasicRuleIds',
      cveId: 'CveId',
      firstTime: 'FirstTime',
      highlightTag: 'HighlightTag',
      lastTime: 'LastTime',
      memberUid: 'MemberUid',
      needOpenBasicRule: 'NeedOpenBasicRule',
      needOpenBasicRuleUuids: 'NeedOpenBasicRuleUuids',
      needOpenRunMode: 'NeedOpenRunMode',
      needOpenVirtualPatche: 'NeedOpenVirtualPatche',
      needOpenVirtualPatcheUuids: 'NeedOpenVirtualPatcheUuids',
      needRuleClass: 'NeedRuleClass',
      resourceCnt: 'ResourceCnt',
      resourceList: 'ResourceList',
      virtualPatcheIds: 'VirtualPatcheIds',
      vulnKey: 'VulnKey',
      vulnLevel: 'VulnLevel',
      vulnName: 'VulnName',
      vulnStatus: 'VulnStatus',
      vulnType: 'VulnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackCnt: 'number',
      attackType: 'number',
      basicRuleIds: 'string',
      cveId: 'string',
      firstTime: 'number',
      highlightTag: 'number',
      lastTime: 'number',
      memberUid: 'string',
      needOpenBasicRule: 'boolean',
      needOpenBasicRuleUuids: 'string',
      needOpenRunMode: 'boolean',
      needOpenVirtualPatche: 'boolean',
      needOpenVirtualPatcheUuids: 'string',
      needRuleClass: 'number',
      resourceCnt: 'number',
      resourceList: { 'type': 'array', 'itemType': DescribeVulnerabilityProtectedListResponseBodyVulnListResourceList },
      virtualPatcheIds: 'string',
      vulnKey: 'string',
      vulnLevel: 'string',
      vulnName: 'string',
      vulnStatus: 'string',
      vulnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAddressBookRequestTagList extends $tea.Model {
  /**
   * @remarks
   * The key of ECS tag N that you want to match.
   * 
   * @example
   * TXY
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of ECS tag N that you want to match.
   * 
   * @example
   * 1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMemberAttributesRequestMembers extends $tea.Model {
  /**
   * @remarks
   * The remarks of the member in Cloud Firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * renewal
   */
  memberDesc?: string;
  /**
   * @remarks
   * The UID of the member in Cloud Firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * 123412341234****
   */
  memberUid?: number;
  static names(): { [key: string]: string } {
    return {
      memberDesc: 'MemberDesc',
      memberUid: 'MemberUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberDesc: 'string',
      memberUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTrFirewallV2RoutePolicyScopeRequestDestCandidateList extends $tea.Model {
  /**
   * @remarks
   * The ID of the traffic redirection instance.
   * 
   * @example
   * vpc-2ze9epancaw8t4shajuzi
   */
  candidateId?: string;
  /**
   * @remarks
   * The type of the traffic redirection instance.
   * 
   * @example
   * VPC
   */
  candidateType?: string;
  static names(): { [key: string]: string } {
    return {
      candidateId: 'CandidateId',
      candidateType: 'CandidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateId: 'string',
      candidateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTrFirewallV2RoutePolicyScopeRequestSrcCandidateList extends $tea.Model {
  /**
   * @remarks
   * The ID of the traffic redirection instance.
   * 
   * @example
   * vpc-2ze9epancaw8t4shajuzi
   */
  candidateId?: string;
  /**
   * @remarks
   * The type of the traffic redirection instance.
   * 
   * @example
   * VPC
   */
  candidateType?: string;
  static names(): { [key: string]: string } {
    return {
      candidateId: 'CandidateId',
      candidateType: 'CandidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateId: 'string',
      candidateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnableFwSwitchResponseBodyAbnormalResourceStatusList extends $tea.Model {
  /**
   * @remarks
   * The message displayed when the asset is not synchronized to Cloud Firewall. Valid values:
   * 
   * *   cloudfirewall do not sync this ip address: This IP address is not synchronized to Cloud Firewall.
   * 
   * @example
   * cloudfirewall do not sync this ip address
   */
  msg?: string;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 203.0.113.0
   */
  resource?: string;
  /**
   * @remarks
   * The status of the asset when it is not synchronized to Cloud Firewall. Valid values:
   * 
   * *   ip_not_sync: The asset is not synchronized.
   * 
   * @example
   * ip_not_sync
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      resource: 'Resource',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      resource: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'ap-southeast-1': "cloudfw.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou': "cloudfw.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudfw", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Creates an address book for access control. Supported address book types are IP address books, Elastic Compute Service (ECS) tag-based address books, port address books, and domain address books. An ECS tag-based address book includes the public IP addresses of the ECS instances that have specific tags.
   * 
   * @remarks
   * You can call the AddAddressBook operation to create an address book for access control. The address book can be an IP address book, an ECS tag-based address book, a port address book, or a domain address book.
   * ## [](#qps)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddAddressBookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAddressBookResponse
   */
  async addAddressBookWithOptions(request: AddAddressBookRequest, runtime: $Util.RuntimeOptions): Promise<AddAddressBookResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressList)) {
      query["AddressList"] = request.addressList;
    }

    if (!Util.isUnset(request.autoAddTagEcs)) {
      query["AutoAddTagEcs"] = request.autoAddTagEcs;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.tagList)) {
      query["TagList"] = request.tagList;
    }

    if (!Util.isUnset(request.tagRelation)) {
      query["TagRelation"] = request.tagRelation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddAddressBook",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddAddressBookResponse>(await this.callApi(params, req, runtime), new AddAddressBookResponse({}));
  }

  /**
   * Creates an address book for access control. Supported address book types are IP address books, Elastic Compute Service (ECS) tag-based address books, port address books, and domain address books. An ECS tag-based address book includes the public IP addresses of the ECS instances that have specific tags.
   * 
   * @remarks
   * You can call the AddAddressBook operation to create an address book for access control. The address book can be an IP address book, an ECS tag-based address book, a port address book, or a domain address book.
   * ## [](#qps)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddAddressBookRequest
   * @returns AddAddressBookResponse
   */
  async addAddressBook(request: AddAddressBookRequest): Promise<AddAddressBookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAddressBookWithOptions(request, runtime);
  }

  /**
   * Creates an access control policy.
   * 
   * @remarks
   * You can call the AddControlPolicy operation to create an access control policy to allow, block, or monitor traffic that reaches Cloud Firewall.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddControlPolicyResponse
   */
  async addControlPolicyWithOptions(request: AddControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<AddControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.applicationNameList)) {
      query["ApplicationNameList"] = request.applicationNameList;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destPort)) {
      query["DestPort"] = request.destPort;
    }

    if (!Util.isUnset(request.destPortGroup)) {
      query["DestPortGroup"] = request.destPortGroup;
    }

    if (!Util.isUnset(request.destPortType)) {
      query["DestPortType"] = request.destPortType;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.domainResolveType)) {
      query["DomainResolveType"] = request.domainResolveType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.newOrder)) {
      query["NewOrder"] = request.newOrder;
    }

    if (!Util.isUnset(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!Util.isUnset(request.release)) {
      query["Release"] = request.release;
    }

    if (!Util.isUnset(request.repeatDays)) {
      query["RepeatDays"] = request.repeatDays;
    }

    if (!Util.isUnset(request.repeatEndTime)) {
      query["RepeatEndTime"] = request.repeatEndTime;
    }

    if (!Util.isUnset(request.repeatStartTime)) {
      query["RepeatStartTime"] = request.repeatStartTime;
    }

    if (!Util.isUnset(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddControlPolicyResponse>(await this.callApi(params, req, runtime), new AddControlPolicyResponse({}));
  }

  /**
   * Creates an access control policy.
   * 
   * @remarks
   * You can call the AddControlPolicy operation to create an access control policy to allow, block, or monitor traffic that reaches Cloud Firewall.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddControlPolicyRequest
   * @returns AddControlPolicyResponse
   */
  async addControlPolicy(request: AddControlPolicyRequest): Promise<AddControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addControlPolicyWithOptions(request, runtime);
  }

  /**
   * Adds members to Cloud Firewall.
   * 
   * @remarks
   * You can call the AddInstanceMembers operation to add members to Cloud Firewall. 
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddInstanceMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddInstanceMembersResponse
   */
  async addInstanceMembersWithOptions(request: AddInstanceMembersRequest, runtime: $Util.RuntimeOptions): Promise<AddInstanceMembersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.members)) {
      query["Members"] = request.members;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddInstanceMembers",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddInstanceMembersResponse>(await this.callApi(params, req, runtime), new AddInstanceMembersResponse({}));
  }

  /**
   * Adds members to Cloud Firewall.
   * 
   * @remarks
   * You can call the AddInstanceMembers operation to add members to Cloud Firewall. 
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddInstanceMembersRequest
   * @returns AddInstanceMembersResponse
   */
  async addInstanceMembers(request: AddInstanceMembersRequest): Promise<AddInstanceMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addInstanceMembersWithOptions(request, runtime);
  }

  /**
   * Copies all access control policies from a policy group of a source virtual private cloud (VPC) firewall to a policy group of a destination VPC firewall.
   * 
   * @remarks
   * You can call the BatchCopyVpcFirewallControlPolicy operation to copy all access control policies from a policy group of a source VPC firewall to a policy group of a destination VPC firewall.  
   * Before you call this operation, we recommend that you back up access control policies. For more information about how to back up an access control policy, see [Back up an access control policy](https://www.alibabacloud.com/help/en/cloud-firewall/latest/back-up-and-roll-back-an-access-control-policy).  
   * After you call this operation, all the access control policies in the policy group of the destination VPC firewall are replaced.  
   * The policy groups of the source VPC firewall and the destination VPC firewall must belong to the same Alibaba Cloud account.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. When the number of calls to this operation per second exceeds the limit, throttling is triggered. Throttling may affect your business. We recommend that you take note of the limit on this operation.
   * 
   * @param request - BatchCopyVpcFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCopyVpcFirewallControlPolicyResponse
   */
  async batchCopyVpcFirewallControlPolicyWithOptions(request: BatchCopyVpcFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<BatchCopyVpcFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.sourceVpcFirewallId)) {
      query["SourceVpcFirewallId"] = request.sourceVpcFirewallId;
    }

    if (!Util.isUnset(request.targetVpcFirewallId)) {
      query["TargetVpcFirewallId"] = request.targetVpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchCopyVpcFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchCopyVpcFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new BatchCopyVpcFirewallControlPolicyResponse({}));
  }

  /**
   * Copies all access control policies from a policy group of a source virtual private cloud (VPC) firewall to a policy group of a destination VPC firewall.
   * 
   * @remarks
   * You can call the BatchCopyVpcFirewallControlPolicy operation to copy all access control policies from a policy group of a source VPC firewall to a policy group of a destination VPC firewall.  
   * Before you call this operation, we recommend that you back up access control policies. For more information about how to back up an access control policy, see [Back up an access control policy](https://www.alibabacloud.com/help/en/cloud-firewall/latest/back-up-and-roll-back-an-access-control-policy).  
   * After you call this operation, all the access control policies in the policy group of the destination VPC firewall are replaced.  
   * The policy groups of the source VPC firewall and the destination VPC firewall must belong to the same Alibaba Cloud account.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. When the number of calls to this operation per second exceeds the limit, throttling is triggered. Throttling may affect your business. We recommend that you take note of the limit on this operation.
   * 
   * @param request - BatchCopyVpcFirewallControlPolicyRequest
   * @returns BatchCopyVpcFirewallControlPolicyResponse
   */
  async batchCopyVpcFirewallControlPolicy(request: BatchCopyVpcFirewallControlPolicyRequest): Promise<BatchCopyVpcFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchCopyVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes multiple access control policies for a virtual private cloud (VPC) firewall at a time.
   * 
   * @param request - BatchDeleteVpcFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteVpcFirewallControlPolicyResponse
   */
  async batchDeleteVpcFirewallControlPolicyWithOptions(request: BatchDeleteVpcFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteVpcFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclUuidList)) {
      query["AclUuidList"] = request.aclUuidList;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteVpcFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteVpcFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new BatchDeleteVpcFirewallControlPolicyResponse({}));
  }

  /**
   * Deletes multiple access control policies for a virtual private cloud (VPC) firewall at a time.
   * 
   * @param request - BatchDeleteVpcFirewallControlPolicyRequest
   * @returns BatchDeleteVpcFirewallControlPolicyResponse
   */
  async batchDeleteVpcFirewallControlPolicy(request: BatchDeleteVpcFirewallControlPolicyRequest): Promise<BatchDeleteVpcFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a file download task.
   * 
   * @param request - CreateDownloadTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDownloadTaskResponse
   */
  async createDownloadTaskWithOptions(request: CreateDownloadTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateDownloadTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.taskData)) {
      query["TaskData"] = request.taskData;
    }

    if (!Util.isUnset(request.timeZone)) {
      query["TimeZone"] = request.timeZone;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDownloadTask",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDownloadTaskResponse>(await this.callApi(params, req, runtime), new CreateDownloadTaskResponse({}));
  }

  /**
   * Creates a file download task.
   * 
   * @param request - CreateDownloadTaskRequest
   * @returns CreateDownloadTaskResponse
   */
  async createDownloadTask(request: CreateDownloadTaskRequest): Promise<CreateDownloadTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDownloadTaskWithOptions(request, runtime);
  }

  /**
   * Creates an access control policy for a NAT firewall.
   * 
   * @remarks
   * You can call this operation to create a policy that allows, denies, or monitors the traffic that passes through the NAT firewall.
   * 
   * @param request - CreateNatFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNatFirewallControlPolicyResponse
   */
  async createNatFirewallControlPolicyWithOptions(request: CreateNatFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateNatFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!Util.isUnset(request.applicationNameList)) {
      query["ApplicationNameList"] = request.applicationNameList;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destPort)) {
      query["DestPort"] = request.destPort;
    }

    if (!Util.isUnset(request.destPortGroup)) {
      query["DestPortGroup"] = request.destPortGroup;
    }

    if (!Util.isUnset(request.destPortType)) {
      query["DestPortType"] = request.destPortType;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.domainResolveType)) {
      query["DomainResolveType"] = request.domainResolveType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!Util.isUnset(request.newOrder)) {
      query["NewOrder"] = request.newOrder;
    }

    if (!Util.isUnset(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!Util.isUnset(request.release)) {
      query["Release"] = request.release;
    }

    if (!Util.isUnset(request.repeatDays)) {
      query["RepeatDays"] = request.repeatDays;
    }

    if (!Util.isUnset(request.repeatEndTime)) {
      query["RepeatEndTime"] = request.repeatEndTime;
    }

    if (!Util.isUnset(request.repeatStartTime)) {
      query["RepeatStartTime"] = request.repeatStartTime;
    }

    if (!Util.isUnset(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNatFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNatFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new CreateNatFirewallControlPolicyResponse({}));
  }

  /**
   * Creates an access control policy for a NAT firewall.
   * 
   * @remarks
   * You can call this operation to create a policy that allows, denies, or monitors the traffic that passes through the NAT firewall.
   * 
   * @param request - CreateNatFirewallControlPolicyRequest
   * @returns CreateNatFirewallControlPolicyResponse
   */
  async createNatFirewallControlPolicy(request: CreateNatFirewallControlPolicyRequest): Promise<CreateNatFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNatFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * 创建安全正向代理
   * 
   * @param request - CreateSecurityProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecurityProxyResponse
   */
  async createSecurityProxyWithOptions(request: CreateSecurityProxyRequest, runtime: $Util.RuntimeOptions): Promise<CreateSecurityProxyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.firewallSwitch)) {
      query["FirewallSwitch"] = request.firewallSwitch;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!Util.isUnset(request.natRouteEntryList)) {
      query["NatRouteEntryList"] = request.natRouteEntryList;
    }

    if (!Util.isUnset(request.proxyName)) {
      query["ProxyName"] = request.proxyName;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.strictMode)) {
      query["StrictMode"] = request.strictMode;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vswitchAuto)) {
      query["VswitchAuto"] = request.vswitchAuto;
    }

    if (!Util.isUnset(request.vswitchCidr)) {
      query["VswitchCidr"] = request.vswitchCidr;
    }

    if (!Util.isUnset(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSecurityProxy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSecurityProxyResponse>(await this.callApi(params, req, runtime), new CreateSecurityProxyResponse({}));
  }

  /**
   * 创建安全正向代理
   * 
   * @param request - CreateSecurityProxyRequest
   * @returns CreateSecurityProxyResponse
   */
  async createSecurityProxy(request: CreateSecurityProxyRequest): Promise<CreateSecurityProxyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSecurityProxyWithOptions(request, runtime);
  }

  /**
   * 创建云防火墙SLS日志投递
   * 
   * @param request - CreateSlsLogDispatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSlsLogDispatchResponse
   */
  async createSlsLogDispatchWithOptions(request: CreateSlsLogDispatchRequest, runtime: $Util.RuntimeOptions): Promise<CreateSlsLogDispatchResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.slsRegionId)) {
      body["SlsRegionId"] = request.slsRegionId;
    }

    if (!Util.isUnset(request.ttl)) {
      body["Ttl"] = request.ttl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSlsLogDispatch",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSlsLogDispatchResponse>(await this.callApi(params, req, runtime), new CreateSlsLogDispatchResponse({}));
  }

  /**
   * 创建云防火墙SLS日志投递
   * 
   * @param request - CreateSlsLogDispatchRequest
   * @returns CreateSlsLogDispatchResponse
   */
  async createSlsLogDispatch(request: CreateSlsLogDispatchRequest): Promise<CreateSlsLogDispatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSlsLogDispatchWithOptions(request, runtime);
  }

  /**
   * Creates a virtual private cloud (VPC) firewall for a transit router.
   * 
   * @param request - CreateTrFirewallV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTrFirewallV2Response
   */
  async createTrFirewallV2WithOptions(request: CreateTrFirewallV2Request, runtime: $Util.RuntimeOptions): Promise<CreateTrFirewallV2Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.firewallDescription)) {
      query["FirewallDescription"] = request.firewallDescription;
    }

    if (!Util.isUnset(request.firewallName)) {
      query["FirewallName"] = request.firewallName;
    }

    if (!Util.isUnset(request.firewallSubnetCidr)) {
      query["FirewallSubnetCidr"] = request.firewallSubnetCidr;
    }

    if (!Util.isUnset(request.firewallVpcCidr)) {
      query["FirewallVpcCidr"] = request.firewallVpcCidr;
    }

    if (!Util.isUnset(request.firewallVpcId)) {
      query["FirewallVpcId"] = request.firewallVpcId;
    }

    if (!Util.isUnset(request.firewallVswitchId)) {
      query["FirewallVswitchId"] = request.firewallVswitchId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.routeMode)) {
      query["RouteMode"] = request.routeMode;
    }

    if (!Util.isUnset(request.trAttachmentMasterCidr)) {
      query["TrAttachmentMasterCidr"] = request.trAttachmentMasterCidr;
    }

    if (!Util.isUnset(request.trAttachmentMasterZone)) {
      query["TrAttachmentMasterZone"] = request.trAttachmentMasterZone;
    }

    if (!Util.isUnset(request.trAttachmentSlaveCidr)) {
      query["TrAttachmentSlaveCidr"] = request.trAttachmentSlaveCidr;
    }

    if (!Util.isUnset(request.trAttachmentSlaveZone)) {
      query["TrAttachmentSlaveZone"] = request.trAttachmentSlaveZone;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTrFirewallV2",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTrFirewallV2Response>(await this.callApi(params, req, runtime), new CreateTrFirewallV2Response({}));
  }

  /**
   * Creates a virtual private cloud (VPC) firewall for a transit router.
   * 
   * @param request - CreateTrFirewallV2Request
   * @returns CreateTrFirewallV2Response
   */
  async createTrFirewallV2(request: CreateTrFirewallV2Request): Promise<CreateTrFirewallV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTrFirewallV2WithOptions(request, runtime);
  }

  /**
   * Creates a routing policy for a VPC firewall of a transit router.
   * 
   * @param tmpReq - CreateTrFirewallV2RoutePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTrFirewallV2RoutePolicyResponse
   */
  async createTrFirewallV2RoutePolicyWithOptions(tmpReq: CreateTrFirewallV2RoutePolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateTrFirewallV2RoutePolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTrFirewallV2RoutePolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.destCandidateList)) {
      request.destCandidateListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destCandidateList, "DestCandidateList", "json");
    }

    if (!Util.isUnset(tmpReq.srcCandidateList)) {
      request.srcCandidateListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.srcCandidateList, "SrcCandidateList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.destCandidateListShrink)) {
      query["DestCandidateList"] = request.destCandidateListShrink;
    }

    if (!Util.isUnset(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.policyDescription)) {
      query["PolicyDescription"] = request.policyDescription;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!Util.isUnset(request.srcCandidateListShrink)) {
      query["SrcCandidateList"] = request.srcCandidateListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTrFirewallV2RoutePolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTrFirewallV2RoutePolicyResponse>(await this.callApi(params, req, runtime), new CreateTrFirewallV2RoutePolicyResponse({}));
  }

  /**
   * Creates a routing policy for a VPC firewall of a transit router.
   * 
   * @param request - CreateTrFirewallV2RoutePolicyRequest
   * @returns CreateTrFirewallV2RoutePolicyResponse
   */
  async createTrFirewallV2RoutePolicy(request: CreateTrFirewallV2RoutePolicyRequest): Promise<CreateTrFirewallV2RoutePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTrFirewallV2RoutePolicyWithOptions(request, runtime);
  }

  /**
   * Creates a virtual private cloud (VPC) firewall to protect traffic between a specified VPC and a network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the CreateVpcFirewallCenConfigure operation to create a VPC firewall. The VPC firewall protects mutual access traffic between a specified VPC and a network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. The VPC firewall cannot protect mutual access traffic between VBRs, between CCN instances, or between VBRs and CCN instances. For more information, see [VPC firewall limits](https://help.aliyun.com/document_detail/172295.html).
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateVpcFirewallCenConfigureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpcFirewallCenConfigureResponse
   */
  async createVpcFirewallCenConfigureWithOptions(request: CreateVpcFirewallCenConfigureRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpcFirewallCenConfigureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.firewallSwitch)) {
      query["FirewallSwitch"] = request.firewallSwitch;
    }

    if (!Util.isUnset(request.firewallVSwitchCidrBlock)) {
      query["FirewallVSwitchCidrBlock"] = request.firewallVSwitchCidrBlock;
    }

    if (!Util.isUnset(request.firewallVpcCidrBlock)) {
      query["FirewallVpcCidrBlock"] = request.firewallVpcCidrBlock;
    }

    if (!Util.isUnset(request.firewallVpcZoneId)) {
      query["FirewallVpcZoneId"] = request.firewallVpcZoneId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.networkInstanceId)) {
      query["NetworkInstanceId"] = request.networkInstanceId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcFirewallName)) {
      query["VpcFirewallName"] = request.vpcFirewallName;
    }

    if (!Util.isUnset(request.vpcRegion)) {
      query["VpcRegion"] = request.vpcRegion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVpcFirewallCenConfigure",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVpcFirewallCenConfigureResponse>(await this.callApi(params, req, runtime), new CreateVpcFirewallCenConfigureResponse({}));
  }

  /**
   * Creates a virtual private cloud (VPC) firewall to protect traffic between a specified VPC and a network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the CreateVpcFirewallCenConfigure operation to create a VPC firewall. The VPC firewall protects mutual access traffic between a specified VPC and a network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. The VPC firewall cannot protect mutual access traffic between VBRs, between CCN instances, or between VBRs and CCN instances. For more information, see [VPC firewall limits](https://help.aliyun.com/document_detail/172295.html).
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateVpcFirewallCenConfigureRequest
   * @returns CreateVpcFirewallCenConfigureResponse
   */
  async createVpcFirewallCenConfigure(request: CreateVpcFirewallCenConfigureRequest): Promise<CreateVpcFirewallCenConfigureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpcFirewallCenConfigureWithOptions(request, runtime);
  }

  /**
   * Creates a Virtual Private Cloud (VPC) firewall to protect traffic between two VPCs that are connected by using an Express Connect.
   * 
   * @remarks
   * You can call this operation to create a VPC firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit. The VPC firewall does not control the mutual access traffic between VPCs that reside in different regions or belong to different Alibaba Cloud accounts. The firewall also does not control the mutual access traffic between VPCs and virtual border routers (VBRs). For more information, see [VPC firewall limits](https://help.aliyun.com/document_detail/172295.html).
   * ### [](#qps)QPS limit
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateVpcFirewallConfigureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpcFirewallConfigureResponse
   */
  async createVpcFirewallConfigureWithOptions(request: CreateVpcFirewallConfigureRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpcFirewallConfigureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.firewallSwitch)) {
      query["FirewallSwitch"] = request.firewallSwitch;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.localVpcCidrTableList)) {
      query["LocalVpcCidrTableList"] = request.localVpcCidrTableList;
    }

    if (!Util.isUnset(request.localVpcId)) {
      query["LocalVpcId"] = request.localVpcId;
    }

    if (!Util.isUnset(request.localVpcRegion)) {
      query["LocalVpcRegion"] = request.localVpcRegion;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.peerVpcCidrTableList)) {
      query["PeerVpcCidrTableList"] = request.peerVpcCidrTableList;
    }

    if (!Util.isUnset(request.peerVpcId)) {
      query["PeerVpcId"] = request.peerVpcId;
    }

    if (!Util.isUnset(request.peerVpcRegion)) {
      query["PeerVpcRegion"] = request.peerVpcRegion;
    }

    if (!Util.isUnset(request.vpcFirewallName)) {
      query["VpcFirewallName"] = request.vpcFirewallName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVpcFirewallConfigure",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVpcFirewallConfigureResponse>(await this.callApi(params, req, runtime), new CreateVpcFirewallConfigureResponse({}));
  }

  /**
   * Creates a Virtual Private Cloud (VPC) firewall to protect traffic between two VPCs that are connected by using an Express Connect.
   * 
   * @remarks
   * You can call this operation to create a VPC firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit. The VPC firewall does not control the mutual access traffic between VPCs that reside in different regions or belong to different Alibaba Cloud accounts. The firewall also does not control the mutual access traffic between VPCs and virtual border routers (VBRs). For more information, see [VPC firewall limits](https://help.aliyun.com/document_detail/172295.html).
   * ### [](#qps)QPS limit
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateVpcFirewallConfigureRequest
   * @returns CreateVpcFirewallConfigureResponse
   */
  async createVpcFirewallConfigure(request: CreateVpcFirewallConfigureRequest): Promise<CreateVpcFirewallConfigureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpcFirewallConfigureWithOptions(request, runtime);
  }

  /**
   * Creates an access control policy in a specified policy group for a virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call the CreateVpcFirewallControlPolicy operation to create an access control policy in a specified policy group for a VPC firewall. Different access control policies are used when a VPC firewall is used to protect traffic between two VPCs that are connected by using a Cloud Enterprise Network (CEN) instance or an Express Connect circuit.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateVpcFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpcFirewallControlPolicyResponse
   */
  async createVpcFirewallControlPolicyWithOptions(request: CreateVpcFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpcFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.applicationNameList)) {
      query["ApplicationNameList"] = request.applicationNameList;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destPort)) {
      query["DestPort"] = request.destPort;
    }

    if (!Util.isUnset(request.destPortGroup)) {
      query["DestPortGroup"] = request.destPortGroup;
    }

    if (!Util.isUnset(request.destPortType)) {
      query["DestPortType"] = request.destPortType;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.domainResolveType)) {
      query["DomainResolveType"] = request.domainResolveType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.newOrder)) {
      query["NewOrder"] = request.newOrder;
    }

    if (!Util.isUnset(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!Util.isUnset(request.release)) {
      query["Release"] = request.release;
    }

    if (!Util.isUnset(request.repeatDays)) {
      query["RepeatDays"] = request.repeatDays;
    }

    if (!Util.isUnset(request.repeatEndTime)) {
      query["RepeatEndTime"] = request.repeatEndTime;
    }

    if (!Util.isUnset(request.repeatStartTime)) {
      query["RepeatStartTime"] = request.repeatStartTime;
    }

    if (!Util.isUnset(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVpcFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVpcFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new CreateVpcFirewallControlPolicyResponse({}));
  }

  /**
   * Creates an access control policy in a specified policy group for a virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call the CreateVpcFirewallControlPolicy operation to create an access control policy in a specified policy group for a VPC firewall. Different access control policies are used when a VPC firewall is used to protect traffic between two VPCs that are connected by using a Cloud Enterprise Network (CEN) instance or an Express Connect circuit.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateVpcFirewallControlPolicyRequest
   * @returns CreateVpcFirewallControlPolicyResponse
   */
  async createVpcFirewallControlPolicy(request: CreateVpcFirewallControlPolicyRequest): Promise<CreateVpcFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes an address book for access control.
   * 
   * @remarks
   * You can call the DeleteAddressBook operation to delete an address book for access control.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteAddressBookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAddressBookResponse
   */
  async deleteAddressBookWithOptions(request: DeleteAddressBookRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAddressBookResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupUuid)) {
      query["GroupUuid"] = request.groupUuid;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAddressBook",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAddressBookResponse>(await this.callApi(params, req, runtime), new DeleteAddressBookResponse({}));
  }

  /**
   * Deletes an address book for access control.
   * 
   * @remarks
   * You can call the DeleteAddressBook operation to delete an address book for access control.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteAddressBookRequest
   * @returns DeleteAddressBookResponse
   */
  async deleteAddressBook(request: DeleteAddressBookRequest): Promise<DeleteAddressBookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAddressBookWithOptions(request, runtime);
  }

  /**
   * Deletes an access control policy.
   * 
   * @remarks
   * You can call the DeleteControlPolicy operation to delete an access control policy that applies to inbound or outbound traffic.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteControlPolicyResponse
   */
  async deleteControlPolicyWithOptions(request: DeleteControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteControlPolicyResponse>(await this.callApi(params, req, runtime), new DeleteControlPolicyResponse({}));
  }

  /**
   * Deletes an access control policy.
   * 
   * @remarks
   * You can call the DeleteControlPolicy operation to delete an access control policy that applies to inbound or outbound traffic.
   * ## [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteControlPolicyRequest
   * @returns DeleteControlPolicyResponse
   */
  async deleteControlPolicy(request: DeleteControlPolicyRequest): Promise<DeleteControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteControlPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes an access control policy template.
   * 
   * @param request - DeleteControlPolicyTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteControlPolicyTemplateResponse
   */
  async deleteControlPolicyTemplateWithOptions(request: DeleteControlPolicyTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteControlPolicyTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteControlPolicyTemplate",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteControlPolicyTemplateResponse>(await this.callApi(params, req, runtime), new DeleteControlPolicyTemplateResponse({}));
  }

  /**
   * Deletes an access control policy template.
   * 
   * @param request - DeleteControlPolicyTemplateRequest
   * @returns DeleteControlPolicyTemplateResponse
   */
  async deleteControlPolicyTemplate(request: DeleteControlPolicyTemplateRequest): Promise<DeleteControlPolicyTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteControlPolicyTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes file download tasks.
   * 
   * @remarks
   * You can call this operation to delete file download tasks and delete the files.
   * **
   * **Warning** Both tasks and involved files are deleted. You can no longer download the involved files by using the download links. This operation is irreversible. Proceed with caution.
   * 
   * @param request - DeleteDownloadTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDownloadTaskResponse
   */
  async deleteDownloadTaskWithOptions(request: DeleteDownloadTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDownloadTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDownloadTask",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDownloadTaskResponse>(await this.callApi(params, req, runtime), new DeleteDownloadTaskResponse({}));
  }

  /**
   * Deletes file download tasks.
   * 
   * @remarks
   * You can call this operation to delete file download tasks and delete the files.
   * **
   * **Warning** Both tasks and involved files are deleted. You can no longer download the involved files by using the download links. This operation is irreversible. Proceed with caution.
   * 
   * @param request - DeleteDownloadTaskRequest
   * @returns DeleteDownloadTaskResponse
   */
  async deleteDownloadTask(request: DeleteDownloadTaskRequest): Promise<DeleteDownloadTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDownloadTaskWithOptions(request, runtime);
  }

  /**
   * Deletes routing policies for a virtual private cloud (VPC) firewall of a transit router.
   * 
   * @param request - DeleteFirewallV2RoutePoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFirewallV2RoutePoliciesResponse
   */
  async deleteFirewallV2RoutePoliciesWithOptions(request: DeleteFirewallV2RoutePoliciesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFirewallV2RoutePoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.trFirewallRoutePolicyId)) {
      query["TrFirewallRoutePolicyId"] = request.trFirewallRoutePolicyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFirewallV2RoutePolicies",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFirewallV2RoutePoliciesResponse>(await this.callApi(params, req, runtime), new DeleteFirewallV2RoutePoliciesResponse({}));
  }

  /**
   * Deletes routing policies for a virtual private cloud (VPC) firewall of a transit router.
   * 
   * @param request - DeleteFirewallV2RoutePoliciesRequest
   * @returns DeleteFirewallV2RoutePoliciesResponse
   */
  async deleteFirewallV2RoutePolicies(request: DeleteFirewallV2RoutePoliciesRequest): Promise<DeleteFirewallV2RoutePoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFirewallV2RoutePoliciesWithOptions(request, runtime);
  }

  /**
   * Removes members from Cloud Firewall.
   * 
   * @remarks
   * You can call the DeleteInstanceMembers operation to remove members from Cloud Firewall. 
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteInstanceMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceMembersResponse
   */
  async deleteInstanceMembersWithOptions(request: DeleteInstanceMembersRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceMembersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.memberUids)) {
      query["MemberUids"] = request.memberUids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstanceMembers",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceMembersResponse>(await this.callApi(params, req, runtime), new DeleteInstanceMembersResponse({}));
  }

  /**
   * Removes members from Cloud Firewall.
   * 
   * @remarks
   * You can call the DeleteInstanceMembers operation to remove members from Cloud Firewall. 
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteInstanceMembersRequest
   * @returns DeleteInstanceMembersResponse
   */
  async deleteInstanceMembers(request: DeleteInstanceMembersRequest): Promise<DeleteInstanceMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceMembersWithOptions(request, runtime);
  }

  /**
   * Deletes an access control policy that is created for a NAT firewall.
   * 
   * @remarks
   * You can use this operation to delete an outbound access control policy that is created for a NAT firewall.
   * 
   * @param request - DeleteNatFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNatFirewallControlPolicyResponse
   */
  async deleteNatFirewallControlPolicyWithOptions(request: DeleteNatFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNatFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNatFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNatFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new DeleteNatFirewallControlPolicyResponse({}));
  }

  /**
   * Deletes an access control policy that is created for a NAT firewall.
   * 
   * @remarks
   * You can use this operation to delete an outbound access control policy that is created for a NAT firewall.
   * 
   * @param request - DeleteNatFirewallControlPolicyRequest
   * @returns DeleteNatFirewallControlPolicyResponse
   */
  async deleteNatFirewallControlPolicy(request: DeleteNatFirewallControlPolicyRequest): Promise<DeleteNatFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNatFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes access control policies that are created for a NAT firewall at a time.
   * 
   * @param request - DeleteNatFirewallControlPolicyBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNatFirewallControlPolicyBatchResponse
   */
  async deleteNatFirewallControlPolicyBatchWithOptions(request: DeleteNatFirewallControlPolicyBatchRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNatFirewallControlPolicyBatchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclUuidList)) {
      query["AclUuidList"] = request.aclUuidList;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNatFirewallControlPolicyBatch",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNatFirewallControlPolicyBatchResponse>(await this.callApi(params, req, runtime), new DeleteNatFirewallControlPolicyBatchResponse({}));
  }

  /**
   * Deletes access control policies that are created for a NAT firewall at a time.
   * 
   * @param request - DeleteNatFirewallControlPolicyBatchRequest
   * @returns DeleteNatFirewallControlPolicyBatchResponse
   */
  async deleteNatFirewallControlPolicyBatch(request: DeleteNatFirewallControlPolicyBatchRequest): Promise<DeleteNatFirewallControlPolicyBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNatFirewallControlPolicyBatchWithOptions(request, runtime);
  }

  /**
   * Deletes a NAT firewall.
   * 
   * @param request - DeleteSecurityProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecurityProxyResponse
   */
  async deleteSecurityProxyWithOptions(request: DeleteSecurityProxyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecurityProxyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.proxyId)) {
      query["ProxyId"] = request.proxyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSecurityProxy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSecurityProxyResponse>(await this.callApi(params, req, runtime), new DeleteSecurityProxyResponse({}));
  }

  /**
   * Deletes a NAT firewall.
   * 
   * @param request - DeleteSecurityProxyRequest
   * @returns DeleteSecurityProxyResponse
   */
  async deleteSecurityProxy(request: DeleteSecurityProxyRequest): Promise<DeleteSecurityProxyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecurityProxyWithOptions(request, runtime);
  }

  /**
   * Deletes a virtual private cloud (VPC) firewall that is created for a transit router.
   * 
   * @param request - DeleteTrFirewallV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTrFirewallV2Response
   */
  async deleteTrFirewallV2WithOptions(request: DeleteTrFirewallV2Request, runtime: $Util.RuntimeOptions): Promise<DeleteTrFirewallV2Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTrFirewallV2",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTrFirewallV2Response>(await this.callApi(params, req, runtime), new DeleteTrFirewallV2Response({}));
  }

  /**
   * Deletes a virtual private cloud (VPC) firewall that is created for a transit router.
   * 
   * @param request - DeleteTrFirewallV2Request
   * @returns DeleteTrFirewallV2Response
   */
  async deleteTrFirewallV2(request: DeleteTrFirewallV2Request): Promise<DeleteTrFirewallV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTrFirewallV2WithOptions(request, runtime);
  }

  /**
   * Deletes a virtual private cloud (VPC) firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the DeleteVpcFirewallCenConfigure operation to delete a VPC firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. Before you call this operation, make sure that you have created a VPC firewall by calling the [CreateVpcFirewallCenConfigure](https://help.aliyun.com/document_detail/345772.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteVpcFirewallCenConfigureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpcFirewallCenConfigureResponse
   */
  async deleteVpcFirewallCenConfigureWithOptions(request: DeleteVpcFirewallCenConfigureRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpcFirewallCenConfigureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.vpcFirewallIdList)) {
      query["VpcFirewallIdList"] = request.vpcFirewallIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVpcFirewallCenConfigure",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVpcFirewallCenConfigureResponse>(await this.callApi(params, req, runtime), new DeleteVpcFirewallCenConfigureResponse({}));
  }

  /**
   * Deletes a virtual private cloud (VPC) firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the DeleteVpcFirewallCenConfigure operation to delete a VPC firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. Before you call this operation, make sure that you have created a VPC firewall by calling the [CreateVpcFirewallCenConfigure](https://help.aliyun.com/document_detail/345772.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteVpcFirewallCenConfigureRequest
   * @returns DeleteVpcFirewallCenConfigureResponse
   */
  async deleteVpcFirewallCenConfigure(request: DeleteVpcFirewallCenConfigureRequest): Promise<DeleteVpcFirewallCenConfigureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpcFirewallCenConfigureWithOptions(request, runtime);
  }

  /**
   * Deletes a virtual private cloud (VPC) firewall that controls traffic between two VPCs. The VPCs are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the DeleteVpcFirewallConfigure operation to delete a VPC firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit. Before you call the operation, make sure that you created a VPC firewall by calling the [CreateVpcFirewallConfigure](https://help.aliyun.com/document_detail/342893.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteVpcFirewallConfigureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpcFirewallConfigureResponse
   */
  async deleteVpcFirewallConfigureWithOptions(request: DeleteVpcFirewallConfigureRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpcFirewallConfigureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.vpcFirewallIdList)) {
      query["VpcFirewallIdList"] = request.vpcFirewallIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVpcFirewallConfigure",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVpcFirewallConfigureResponse>(await this.callApi(params, req, runtime), new DeleteVpcFirewallConfigureResponse({}));
  }

  /**
   * Deletes a virtual private cloud (VPC) firewall that controls traffic between two VPCs. The VPCs are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the DeleteVpcFirewallConfigure operation to delete a VPC firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit. Before you call the operation, make sure that you created a VPC firewall by calling the [CreateVpcFirewallConfigure](https://help.aliyun.com/document_detail/342893.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteVpcFirewallConfigureRequest
   * @returns DeleteVpcFirewallConfigureResponse
   */
  async deleteVpcFirewallConfigure(request: DeleteVpcFirewallConfigureRequest): Promise<DeleteVpcFirewallConfigureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpcFirewallConfigureWithOptions(request, runtime);
  }

  /**
   * Deletes an access control policy from a specific policy group for a virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call the DeleteVpcFirewallControlPolicy operation to delete an access control policy from a specific policy group for a VPC firewall. Different access control policies are used for the VPC firewall that is used to protect each Cloud Enterprise Network (CEN) instance and the VPC firewall that is used to protect each Express Connect circuit. 
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteVpcFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpcFirewallControlPolicyResponse
   */
  async deleteVpcFirewallControlPolicyWithOptions(request: DeleteVpcFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpcFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVpcFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVpcFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new DeleteVpcFirewallControlPolicyResponse({}));
  }

  /**
   * Deletes an access control policy from a specific policy group for a virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call the DeleteVpcFirewallControlPolicy operation to delete an access control policy from a specific policy group for a VPC firewall. Different access control policies are used for the VPC firewall that is used to protect each Cloud Enterprise Network (CEN) instance and the VPC firewall that is used to protect each Express Connect circuit. 
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteVpcFirewallControlPolicyRequest
   * @returns DeleteVpcFirewallControlPolicyResponse
   */
  async deleteVpcFirewallControlPolicy(request: DeleteVpcFirewallControlPolicyRequest): Promise<DeleteVpcFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on the requests that are blocked by the access control list (ACL) feature.
   * 
   * @param request - DescribeACLProtectTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeACLProtectTrendResponse
   */
  async describeACLProtectTrendWithOptions(request: DescribeACLProtectTrendRequest, runtime: $Util.RuntimeOptions): Promise<DescribeACLProtectTrendResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeACLProtectTrend",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeACLProtectTrendResponse>(await this.callApi(params, req, runtime), new DescribeACLProtectTrendResponse({}));
  }

  /**
   * Queries the statistics on the requests that are blocked by the access control list (ACL) feature.
   * 
   * @param request - DescribeACLProtectTrendRequest
   * @returns DescribeACLProtectTrendResponse
   */
  async describeACLProtectTrend(request: DescribeACLProtectTrendRequest): Promise<DescribeACLProtectTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeACLProtectTrendWithOptions(request, runtime);
  }

  /**
   * Queries the details about an address book for an access control policy.
   * 
   * @remarks
   * You can call this operation to query the details about an address book for an access control policy.
   * ## [](#qps)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeAddressBookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAddressBookResponse
   */
  async describeAddressBookWithOptions(request: DescribeAddressBookRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAddressBookResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.containPort)) {
      query["ContainPort"] = request.containPort;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAddressBook",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAddressBookResponse>(await this.callApi(params, req, runtime), new DescribeAddressBookResponse({}));
  }

  /**
   * Queries the details about an address book for an access control policy.
   * 
   * @remarks
   * You can call this operation to query the details about an address book for an access control policy.
   * ## [](#qps)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeAddressBookRequest
   * @returns DescribeAddressBookResponse
   */
  async describeAddressBook(request: DescribeAddressBookRequest): Promise<DescribeAddressBookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAddressBookWithOptions(request, runtime);
  }

  /**
   * Queries the assets that are protected by Cloud Firewall.
   * 
   * @remarks
   * You can call the DescribeAssetList operation to query the assets that are protected by Cloud Firewall.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeAssetListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAssetListResponse
   */
  async describeAssetListWithOptions(request: DescribeAssetListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAssetListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.newResourceTag)) {
      query["NewResourceTag"] = request.newResourceTag;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.searchItem)) {
      query["SearchItem"] = request.searchItem;
    }

    if (!Util.isUnset(request.sgStatus)) {
      query["SgStatus"] = request.sgStatus;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAssetList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAssetListResponse>(await this.callApi(params, req, runtime), new DescribeAssetListResponse({}));
  }

  /**
   * Queries the assets that are protected by Cloud Firewall.
   * 
   * @remarks
   * You can call the DescribeAssetList operation to query the assets that are protected by Cloud Firewall.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeAssetListRequest
   * @returns DescribeAssetListResponse
   */
  async describeAssetList(request: DescribeAssetListRequest): Promise<DescribeAssetListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssetListWithOptions(request, runtime);
  }

  /**
   * Queries the risk levels of assets.
   * 
   * @param request - DescribeAssetRiskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAssetRiskListResponse
   */
  async describeAssetRiskListWithOptions(request: DescribeAssetRiskListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAssetRiskListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipAddrList)) {
      query["IpAddrList"] = request.ipAddrList;
    }

    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAssetRiskList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAssetRiskListResponse>(await this.callApi(params, req, runtime), new DescribeAssetRiskListResponse({}));
  }

  /**
   * Queries the risk levels of assets.
   * 
   * @param request - DescribeAssetRiskListRequest
   * @returns DescribeAssetRiskListResponse
   */
  async describeAssetRiskList(request: DescribeAssetRiskListRequest): Promise<DescribeAssetRiskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssetRiskListWithOptions(request, runtime);
  }

  /**
   * Queries the firewall risk level.
   * 
   * @param request - DescribeCfwRiskLevelSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCfwRiskLevelSummaryResponse
   */
  async describeCfwRiskLevelSummaryWithOptions(request: DescribeCfwRiskLevelSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCfwRiskLevelSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCfwRiskLevelSummary",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCfwRiskLevelSummaryResponse>(await this.callApi(params, req, runtime), new DescribeCfwRiskLevelSummaryResponse({}));
  }

  /**
   * Queries the firewall risk level.
   * 
   * @param request - DescribeCfwRiskLevelSummaryRequest
   * @returns DescribeCfwRiskLevelSummaryResponse
   */
  async describeCfwRiskLevelSummary(request: DescribeCfwRiskLevelSummaryRequest): Promise<DescribeCfwRiskLevelSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCfwRiskLevelSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the details about all access control policies.
   * 
   * @remarks
   * You can call the DescribeControlPolicy operation to query the details about access control policies by page.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeControlPolicyResponse
   */
  async describeControlPolicyWithOptions(request: DescribeControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!Util.isUnset(request.release)) {
      query["Release"] = request.release;
    }

    if (!Util.isUnset(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeControlPolicyResponse>(await this.callApi(params, req, runtime), new DescribeControlPolicyResponse({}));
  }

  /**
   * Queries the details about all access control policies.
   * 
   * @remarks
   * You can call the DescribeControlPolicy operation to query the details about access control policies by page.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeControlPolicyRequest
   * @returns DescribeControlPolicyResponse
   */
  async describeControlPolicy(request: DescribeControlPolicyRequest): Promise<DescribeControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeControlPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the default configurations of the intrusion prevention system (IPS).
   * 
   * @param request - DescribeDefaultIPSConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefaultIPSConfigResponse
   */
  async describeDefaultIPSConfigWithOptions(request: DescribeDefaultIPSConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefaultIPSConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDefaultIPSConfig",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDefaultIPSConfigResponse>(await this.callApi(params, req, runtime), new DescribeDefaultIPSConfigResponse({}));
  }

  /**
   * Queries the default configurations of the intrusion prevention system (IPS).
   * 
   * @param request - DescribeDefaultIPSConfigRequest
   * @returns DescribeDefaultIPSConfigResponse
   */
  async describeDefaultIPSConfig(request: DescribeDefaultIPSConfigRequest): Promise<DescribeDefaultIPSConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefaultIPSConfigWithOptions(request, runtime);
  }

  /**
   * Queries Domain Name System (DNS) records.
   * 
   * @remarks
   * You can use this operation to query the DNS record of a domain name. This operation can retrieve DNS records only from Alibaba Cloud DNS. Before you can call this operation, make sure that your domain name is hosted on Alibaba Cloud DNS.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDomainResolveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainResolveResponse
   */
  async describeDomainResolveWithOptions(request: DescribeDomainResolveRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainResolveResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainResolve",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainResolveResponse>(await this.callApi(params, req, runtime), new DescribeDomainResolveResponse({}));
  }

  /**
   * Queries Domain Name System (DNS) records.
   * 
   * @remarks
   * You can use this operation to query the DNS record of a domain name. This operation can retrieve DNS records only from Alibaba Cloud DNS. Before you can call this operation, make sure that your domain name is hosted on Alibaba Cloud DNS.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDomainResolveRequest
   * @returns DescribeDomainResolveResponse
   */
  async describeDomainResolve(request: DescribeDomainResolveRequest): Promise<DescribeDomainResolveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainResolveWithOptions(request, runtime);
  }

  /**
   * Queries file download tasks, including the task information and download URLs.
   * 
   * @param request - DescribeDownloadTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDownloadTaskResponse
   */
  async describeDownloadTaskWithOptions(request: DescribeDownloadTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDownloadTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDownloadTask",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDownloadTaskResponse>(await this.callApi(params, req, runtime), new DescribeDownloadTaskResponse({}));
  }

  /**
   * Queries file download tasks, including the task information and download URLs.
   * 
   * @param request - DescribeDownloadTaskRequest
   * @returns DescribeDownloadTaskResponse
   */
  async describeDownloadTask(request: DescribeDownloadTaskRequest): Promise<DescribeDownloadTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDownloadTaskWithOptions(request, runtime);
  }

  /**
   * Queries the types of download tasks. The type corresponds to the TaskType fields in the download task-related operations.
   * 
   * @param request - DescribeDownloadTaskTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDownloadTaskTypeResponse
   */
  async describeDownloadTaskTypeWithOptions(request: DescribeDownloadTaskTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDownloadTaskTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDownloadTaskType",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDownloadTaskTypeResponse>(await this.callApi(params, req, runtime), new DescribeDownloadTaskTypeResponse({}));
  }

  /**
   * Queries the types of download tasks. The type corresponds to the TaskType fields in the download task-related operations.
   * 
   * @param request - DescribeDownloadTaskTypeRequest
   * @returns DescribeDownloadTaskTypeResponse
   */
  async describeDownloadTaskType(request: DescribeDownloadTaskTypeRequest): Promise<DescribeDownloadTaskTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDownloadTaskTypeWithOptions(request, runtime);
  }

  /**
   * Queries the information about members in Cloud Firewall.
   * 
   * @remarks
   * You can use this operation to query the information about members in Cloud Firewall.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstanceMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceMembersResponse
   */
  async describeInstanceMembersWithOptions(request: DescribeInstanceMembersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceMembersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.memberDesc)) {
      query["MemberDesc"] = request.memberDesc;
    }

    if (!Util.isUnset(request.memberDisplayName)) {
      query["MemberDisplayName"] = request.memberDisplayName;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceMembers",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceMembersResponse>(await this.callApi(params, req, runtime), new DescribeInstanceMembersResponse({}));
  }

  /**
   * Queries the information about members in Cloud Firewall.
   * 
   * @remarks
   * You can use this operation to query the information about members in Cloud Firewall.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstanceMembersRequest
   * @returns DescribeInstanceMembersResponse
   */
  async describeInstanceMembers(request: DescribeInstanceMembersRequest): Promise<DescribeInstanceMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceMembersWithOptions(request, runtime);
  }

  /**
   * Queries the risk levels of instances.
   * 
   * @param request - DescribeInstanceRiskLevelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceRiskLevelsResponse
   */
  async describeInstanceRiskLevelsWithOptions(request: DescribeInstanceRiskLevelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceRiskLevelsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instances)) {
      query["Instances"] = request.instances;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceRiskLevels",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceRiskLevelsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceRiskLevelsResponse({}));
  }

  /**
   * Queries the risk levels of instances.
   * 
   * @param request - DescribeInstanceRiskLevelsRequest
   * @returns DescribeInstanceRiskLevelsResponse
   */
  async describeInstanceRiskLevels(request: DescribeInstanceRiskLevelsRequest): Promise<DescribeInstanceRiskLevelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceRiskLevelsWithOptions(request, runtime);
  }

  /**
   * Queries the IP addresses that are open to the Internet.
   * 
   * @param request - DescribeInternetOpenIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInternetOpenIpResponse
   */
  async describeInternetOpenIpWithOptions(request: DescribeInternetOpenIpRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInternetOpenIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.assetsInstanceId)) {
      query["AssetsInstanceId"] = request.assetsInstanceId;
    }

    if (!Util.isUnset(request.assetsInstanceName)) {
      query["AssetsInstanceName"] = request.assetsInstanceName;
    }

    if (!Util.isUnset(request.assetsType)) {
      query["AssetsType"] = request.assetsType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.publicIp)) {
      query["PublicIp"] = request.publicIp;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInternetOpenIp",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInternetOpenIpResponse>(await this.callApi(params, req, runtime), new DescribeInternetOpenIpResponse({}));
  }

  /**
   * Queries the IP addresses that are open to the Internet.
   * 
   * @param request - DescribeInternetOpenIpRequest
   * @returns DescribeInternetOpenIpResponse
   */
  async describeInternetOpenIp(request: DescribeInternetOpenIpRequest): Promise<DescribeInternetOpenIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInternetOpenIpWithOptions(request, runtime);
  }

  /**
   * Queries the trends of Internet traffic.
   * 
   * @param request - DescribeInternetTrafficTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInternetTrafficTrendResponse
   */
  async describeInternetTrafficTrendWithOptions(request: DescribeInternetTrafficTrendRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInternetTrafficTrendResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceCode)) {
      query["SourceCode"] = request.sourceCode;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.srcPrivateIP)) {
      query["SrcPrivateIP"] = request.srcPrivateIP;
    }

    if (!Util.isUnset(request.srcPublicIP)) {
      query["SrcPublicIP"] = request.srcPublicIP;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.trafficType)) {
      query["TrafficType"] = request.trafficType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInternetTrafficTrend",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInternetTrafficTrendResponse>(await this.callApi(params, req, runtime), new DescribeInternetTrafficTrendResponse({}));
  }

  /**
   * Queries the trends of Internet traffic.
   * 
   * @param request - DescribeInternetTrafficTrendRequest
   * @returns DescribeInternetTrafficTrendResponse
   */
  async describeInternetTrafficTrend(request: DescribeInternetTrafficTrendRequest): Promise<DescribeInternetTrafficTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInternetTrafficTrendWithOptions(request, runtime);
  }

  /**
   * Queries the information about the breach awareness events of a firewall.
   * 
   * @param request - DescribeInvadeEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInvadeEventListResponse
   */
  async describeInvadeEventListWithOptions(request: DescribeInvadeEventListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInvadeEventListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.assetsIP)) {
      query["AssetsIP"] = request.assetsIP;
    }

    if (!Util.isUnset(request.assetsInstanceId)) {
      query["AssetsInstanceId"] = request.assetsInstanceId;
    }

    if (!Util.isUnset(request.assetsInstanceName)) {
      query["AssetsInstanceName"] = request.assetsInstanceName;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventKey)) {
      query["EventKey"] = request.eventKey;
    }

    if (!Util.isUnset(request.eventName)) {
      query["EventName"] = request.eventName;
    }

    if (!Util.isUnset(request.eventUuid)) {
      query["EventUuid"] = request.eventUuid;
    }

    if (!Util.isUnset(request.isIgnore)) {
      query["IsIgnore"] = request.isIgnore;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.processStatusList)) {
      query["ProcessStatusList"] = request.processStatusList;
    }

    if (!Util.isUnset(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInvadeEventList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInvadeEventListResponse>(await this.callApi(params, req, runtime), new DescribeInvadeEventListResponse({}));
  }

  /**
   * Queries the information about the breach awareness events of a firewall.
   * 
   * @param request - DescribeInvadeEventListRequest
   * @returns DescribeInvadeEventListResponse
   */
  async describeInvadeEventList(request: DescribeInvadeEventListRequest): Promise<DescribeInvadeEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInvadeEventListWithOptions(request, runtime);
  }

  /**
   * Queries the pagination status of NAT firewalls.
   * 
   * @param request - DescribeNatAclPageStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNatAclPageStatusResponse
   */
  async describeNatAclPageStatusWithOptions(request: DescribeNatAclPageStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNatAclPageStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNatAclPageStatus",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNatAclPageStatusResponse>(await this.callApi(params, req, runtime), new DescribeNatAclPageStatusResponse({}));
  }

  /**
   * Queries the pagination status of NAT firewalls.
   * 
   * @param request - DescribeNatAclPageStatusRequest
   * @returns DescribeNatAclPageStatusResponse
   */
  async describeNatAclPageStatus(request: DescribeNatAclPageStatusRequest): Promise<DescribeNatAclPageStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNatAclPageStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about all access control policies that are created for NAT firewalls.
   * 
   * @remarks
   * You can use this operation to query the information about all access control policies that are created for NAT firewalls by page.
   * 
   * @param request - DescribeNatFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNatFirewallControlPolicyResponse
   */
  async describeNatFirewallControlPolicyWithOptions(request: DescribeNatFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNatFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!Util.isUnset(request.release)) {
      query["Release"] = request.release;
    }

    if (!Util.isUnset(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNatFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNatFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new DescribeNatFirewallControlPolicyResponse({}));
  }

  /**
   * Queries the information about all access control policies that are created for NAT firewalls.
   * 
   * @remarks
   * You can use this operation to query the information about all access control policies that are created for NAT firewalls by page.
   * 
   * @param request - DescribeNatFirewallControlPolicyRequest
   * @returns DescribeNatFirewallControlPolicyResponse
   */
  async describeNatFirewallControlPolicy(request: DescribeNatFirewallControlPolicyRequest): Promise<DescribeNatFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNatFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Queries details of NAT firewalls.
   * 
   * @param request - DescribeNatFirewallListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNatFirewallListResponse
   */
  async describeNatFirewallListWithOptions(request: DescribeNatFirewallListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNatFirewallListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.proxyId)) {
      query["ProxyId"] = request.proxyId;
    }

    if (!Util.isUnset(request.proxyName)) {
      query["ProxyName"] = request.proxyName;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNatFirewallList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNatFirewallListResponse>(await this.callApi(params, req, runtime), new DescribeNatFirewallListResponse({}));
  }

  /**
   * Queries details of NAT firewalls.
   * 
   * @param request - DescribeNatFirewallListRequest
   * @returns DescribeNatFirewallListResponse
   */
  async describeNatFirewallList(request: DescribeNatFirewallListRequest): Promise<DescribeNatFirewallListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNatFirewallListWithOptions(request, runtime);
  }

  /**
   * Queries the priority range of access control policies that are created for a NAT firewall.
   * 
   * @remarks
   * You can use this operation to query the priority range of access control policies that are created for a NAT firewall.
   * 
   * @param request - DescribeNatFirewallPolicyPriorUsedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNatFirewallPolicyPriorUsedResponse
   */
  async describeNatFirewallPolicyPriorUsedWithOptions(request: DescribeNatFirewallPolicyPriorUsedRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNatFirewallPolicyPriorUsedResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNatFirewallPolicyPriorUsed",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNatFirewallPolicyPriorUsedResponse>(await this.callApi(params, req, runtime), new DescribeNatFirewallPolicyPriorUsedResponse({}));
  }

  /**
   * Queries the priority range of access control policies that are created for a NAT firewall.
   * 
   * @remarks
   * You can use this operation to query the priority range of access control policies that are created for a NAT firewall.
   * 
   * @param request - DescribeNatFirewallPolicyPriorUsedRequest
   * @returns DescribeNatFirewallPolicyPriorUsedResponse
   */
  async describeNatFirewallPolicyPriorUsed(request: DescribeNatFirewallPolicyPriorUsedRequest): Promise<DescribeNatFirewallPolicyPriorUsedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNatFirewallPolicyPriorUsedWithOptions(request, runtime);
  }

  /**
   * Queries the information about the destination IP addresses in outbound connections.
   * 
   * @param request - DescribeOutgoingDestinationIPRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOutgoingDestinationIPResponse
   */
  async describeOutgoingDestinationIPWithOptions(request: DescribeOutgoingDestinationIPRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOutgoingDestinationIPResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dstIP)) {
      query["DstIP"] = request.dstIP;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.privateIP)) {
      query["PrivateIP"] = request.privateIP;
    }

    if (!Util.isUnset(request.publicIP)) {
      query["PublicIP"] = request.publicIP;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tagIdNew)) {
      query["TagIdNew"] = request.tagIdNew;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOutgoingDestinationIP",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOutgoingDestinationIPResponse>(await this.callApi(params, req, runtime), new DescribeOutgoingDestinationIPResponse({}));
  }

  /**
   * Queries the information about the destination IP addresses in outbound connections.
   * 
   * @param request - DescribeOutgoingDestinationIPRequest
   * @returns DescribeOutgoingDestinationIPResponse
   */
  async describeOutgoingDestinationIP(request: DescribeOutgoingDestinationIPRequest): Promise<DescribeOutgoingDestinationIPResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOutgoingDestinationIPWithOptions(request, runtime);
  }

  /**
   * Queries the information about the domain names in outbound connections.
   * 
   * @param request - DescribeOutgoingDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOutgoingDomainResponse
   */
  async describeOutgoingDomainWithOptions(request: DescribeOutgoingDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOutgoingDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.publicIP)) {
      query["PublicIP"] = request.publicIP;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tagIdNew)) {
      query["TagIdNew"] = request.tagIdNew;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOutgoingDomain",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOutgoingDomainResponse>(await this.callApi(params, req, runtime), new DescribeOutgoingDomainResponse({}));
  }

  /**
   * Queries the information about the domain names in outbound connections.
   * 
   * @param request - DescribeOutgoingDomainRequest
   * @returns DescribeOutgoingDomainResponse
   */
  async describeOutgoingDomain(request: DescribeOutgoingDomainRequest): Promise<DescribeOutgoingDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOutgoingDomainWithOptions(request, runtime);
  }

  /**
   * Queries whether the strict mode is enabled for an access control policy.
   * 
   * @remarks
   * You can call the DescribePolicyAdvancedConfig operation to query whether the strict mode is enabled for an access control policy.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePolicyAdvancedConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyAdvancedConfigResponse
   */
  async describePolicyAdvancedConfigWithOptions(request: DescribePolicyAdvancedConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolicyAdvancedConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePolicyAdvancedConfig",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePolicyAdvancedConfigResponse>(await this.callApi(params, req, runtime), new DescribePolicyAdvancedConfigResponse({}));
  }

  /**
   * Queries whether the strict mode is enabled for an access control policy.
   * 
   * @remarks
   * You can call the DescribePolicyAdvancedConfig operation to query whether the strict mode is enabled for an access control policy.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePolicyAdvancedConfigRequest
   * @returns DescribePolicyAdvancedConfigResponse
   */
  async describePolicyAdvancedConfig(request: DescribePolicyAdvancedConfigRequest): Promise<DescribePolicyAdvancedConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyAdvancedConfigWithOptions(request, runtime);
  }

  /**
   * Queries the priority range of the access control policies that match specific query conditions.
   * 
   * @remarks
   * You can call the DescribePolicyPriorUsed operation to query the priority range of the access control policies that match specific query conditions.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePolicyPriorUsedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyPriorUsedResponse
   */
  async describePolicyPriorUsedWithOptions(request: DescribePolicyPriorUsedRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolicyPriorUsedResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePolicyPriorUsed",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePolicyPriorUsedResponse>(await this.callApi(params, req, runtime), new DescribePolicyPriorUsedResponse({}));
  }

  /**
   * Queries the priority range of the access control policies that match specific query conditions.
   * 
   * @remarks
   * You can call the DescribePolicyPriorUsed operation to query the priority range of the access control policies that match specific query conditions.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePolicyPriorUsedRequest
   * @returns DescribePolicyPriorUsedResponse
   */
  async describePolicyPriorUsed(request: DescribePolicyPriorUsedRequest): Promise<DescribePolicyPriorUsedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyPriorUsedWithOptions(request, runtime);
  }

  /**
   * Queries the details of traffic billed based on the pay-as-you-go billing method.
   * 
   * @remarks
   * If you use Cloud Firewall that uses the pay-as-you-go billing method, you can call this operation to query traffic details accurate to the granularity of specific resource instances. If you use Cloud Firewall that uses the subscription billing method, you can call this operation to query the overall traffic details.
   * 
   * @param request - DescribePostpayTrafficDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePostpayTrafficDetailResponse
   */
  async describePostpayTrafficDetailWithOptions(request: DescribePostpayTrafficDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribePostpayTrafficDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchItem)) {
      query["SearchItem"] = request.searchItem;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.trafficType)) {
      query["TrafficType"] = request.trafficType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePostpayTrafficDetail",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePostpayTrafficDetailResponse>(await this.callApi(params, req, runtime), new DescribePostpayTrafficDetailResponse({}));
  }

  /**
   * Queries the details of traffic billed based on the pay-as-you-go billing method.
   * 
   * @remarks
   * If you use Cloud Firewall that uses the pay-as-you-go billing method, you can call this operation to query traffic details accurate to the granularity of specific resource instances. If you use Cloud Firewall that uses the subscription billing method, you can call this operation to query the overall traffic details.
   * 
   * @param request - DescribePostpayTrafficDetailRequest
   * @returns DescribePostpayTrafficDetailResponse
   */
  async describePostpayTrafficDetail(request: DescribePostpayTrafficDetailRequest): Promise<DescribePostpayTrafficDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePostpayTrafficDetailWithOptions(request, runtime);
  }

  /**
   * Queries the total volume of traffic that is billed based on the pay-as-you-go billing method, including all firewalls within the current account.
   * 
   * @remarks
   * You can call this operation to query statistics of the current Cloud Firewall from the date of purchase.
   * 
   * @param request - DescribePostpayTrafficTotalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePostpayTrafficTotalResponse
   */
  async describePostpayTrafficTotalWithOptions(request: DescribePostpayTrafficTotalRequest, runtime: $Util.RuntimeOptions): Promise<DescribePostpayTrafficTotalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePostpayTrafficTotal",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePostpayTrafficTotalResponse>(await this.callApi(params, req, runtime), new DescribePostpayTrafficTotalResponse({}));
  }

  /**
   * Queries the total volume of traffic that is billed based on the pay-as-you-go billing method, including all firewalls within the current account.
   * 
   * @remarks
   * You can call this operation to query statistics of the current Cloud Firewall from the date of purchase.
   * 
   * @param request - DescribePostpayTrafficTotalRequest
   * @returns DescribePostpayTrafficTotalResponse
   */
  async describePostpayTrafficTotal(request: DescribePostpayTrafficTotalRequest): Promise<DescribePostpayTrafficTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePostpayTrafficTotalWithOptions(request, runtime);
  }

  /**
   * Queries prefix lists.
   * 
   * @param request - DescribePrefixListsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePrefixListsResponse
   */
  async describePrefixListsWithOptions(request: DescribePrefixListsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePrefixListsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePrefixLists",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePrefixListsResponse>(await this.callApi(params, req, runtime), new DescribePrefixListsResponse({}));
  }

  /**
   * Queries prefix lists.
   * 
   * @param request - DescribePrefixListsRequest
   * @returns DescribePrefixListsResponse
   */
  async describePrefixLists(request: DescribePrefixListsRequest): Promise<DescribePrefixListsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePrefixListsWithOptions(request, runtime);
  }

  /**
   * Queries the details of intrusion events.
   * 
   * @remarks
   * You can call the DescribeRiskEventGroup operation to query and download the details of intrusion events. We recommend that you query the details of 5 to 10 intrusion events at a time. If you do not need to query the geographical information about IP addresses, you can set the NoLocation parameter to true to prevent query timeout.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeRiskEventGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRiskEventGroupResponse
   */
  async describeRiskEventGroupWithOptions(request: DescribeRiskEventGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskEventGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.attackApp)) {
      query["AttackApp"] = request.attackApp;
    }

    if (!Util.isUnset(request.attackType)) {
      query["AttackType"] = request.attackType;
    }

    if (!Util.isUnset(request.buyVersion)) {
      query["BuyVersion"] = request.buyVersion;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.dstIP)) {
      query["DstIP"] = request.dstIP;
    }

    if (!Util.isUnset(request.dstNetworkInstanceId)) {
      query["DstNetworkInstanceId"] = request.dstNetworkInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventName)) {
      query["EventName"] = request.eventName;
    }

    if (!Util.isUnset(request.firewallType)) {
      query["FirewallType"] = request.firewallType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.noLocation)) {
      query["NoLocation"] = request.noLocation;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.ruleResult)) {
      query["RuleResult"] = request.ruleResult;
    }

    if (!Util.isUnset(request.ruleSource)) {
      query["RuleSource"] = request.ruleSource;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.srcIP)) {
      query["SrcIP"] = request.srcIP;
    }

    if (!Util.isUnset(request.srcNetworkInstanceId)) {
      query["SrcNetworkInstanceId"] = request.srcNetworkInstanceId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.vulLevel)) {
      query["VulLevel"] = request.vulLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRiskEventGroup",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRiskEventGroupResponse>(await this.callApi(params, req, runtime), new DescribeRiskEventGroupResponse({}));
  }

  /**
   * Queries the details of intrusion events.
   * 
   * @remarks
   * You can call the DescribeRiskEventGroup operation to query and download the details of intrusion events. We recommend that you query the details of 5 to 10 intrusion events at a time. If you do not need to query the geographical information about IP addresses, you can set the NoLocation parameter to true to prevent query timeout.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeRiskEventGroupRequest
   * @returns DescribeRiskEventGroupResponse
   */
  async describeRiskEventGroup(request: DescribeRiskEventGroupRequest): Promise<DescribeRiskEventGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskEventGroupWithOptions(request, runtime);
  }

  /**
   * Queries the attack payloads of intrusion events.
   * 
   * @param request - DescribeRiskEventPayloadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRiskEventPayloadResponse
   */
  async describeRiskEventPayloadWithOptions(request: DescribeRiskEventPayloadRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskEventPayloadResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dstIP)) {
      query["DstIP"] = request.dstIP;
    }

    if (!Util.isUnset(request.dstVpcId)) {
      query["DstVpcId"] = request.dstVpcId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.firewallType)) {
      query["FirewallType"] = request.firewallType;
    }

    if (!Util.isUnset(request.publicIP)) {
      query["PublicIP"] = request.publicIP;
    }

    if (!Util.isUnset(request.srcIP)) {
      query["SrcIP"] = request.srcIP;
    }

    if (!Util.isUnset(request.srcVpcId)) {
      query["SrcVpcId"] = request.srcVpcId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.UUID)) {
      query["UUID"] = request.UUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRiskEventPayload",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRiskEventPayloadResponse>(await this.callApi(params, req, runtime), new DescribeRiskEventPayloadResponse({}));
  }

  /**
   * Queries the attack payloads of intrusion events.
   * 
   * @param request - DescribeRiskEventPayloadRequest
   * @returns DescribeRiskEventPayloadResponse
   */
  async describeRiskEventPayload(request: DescribeRiskEventPayloadRequest): Promise<DescribeRiskEventPayloadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskEventPayloadWithOptions(request, runtime);
  }

  /**
   * Queries the information about signature library versions.
   * 
   * @param request - DescribeSignatureLibVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSignatureLibVersionResponse
   */
  async describeSignatureLibVersionWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeSignatureLibVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeSignatureLibVersion",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSignatureLibVersionResponse>(await this.callApi(params, req, runtime), new DescribeSignatureLibVersionResponse({}));
  }

  /**
   * Queries the information about signature library versions.
   * @returns DescribeSignatureLibVersionResponse
   */
  async describeSignatureLibVersion(): Promise<DescribeSignatureLibVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSignatureLibVersionWithOptions(runtime);
  }

  /**
   * Queries information about the transit routers that are associated with a virtual private cloud (VPC) firewall created for a transit router.
   * 
   * @param tmpReq - DescribeTrFirewallPolicyBackUpAssociationListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTrFirewallPolicyBackUpAssociationListResponse
   */
  async describeTrFirewallPolicyBackUpAssociationListWithOptions(tmpReq: DescribeTrFirewallPolicyBackUpAssociationListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrFirewallPolicyBackUpAssociationListResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeTrFirewallPolicyBackUpAssociationListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.candidateList)) {
      request.candidateListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.candidateList, "CandidateList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.candidateListShrink)) {
      query["CandidateList"] = request.candidateListShrink;
    }

    if (!Util.isUnset(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.trFirewallRoutePolicyId)) {
      query["TrFirewallRoutePolicyId"] = request.trFirewallRoutePolicyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTrFirewallPolicyBackUpAssociationList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTrFirewallPolicyBackUpAssociationListResponse>(await this.callApi(params, req, runtime), new DescribeTrFirewallPolicyBackUpAssociationListResponse({}));
  }

  /**
   * Queries information about the transit routers that are associated with a virtual private cloud (VPC) firewall created for a transit router.
   * 
   * @param request - DescribeTrFirewallPolicyBackUpAssociationListRequest
   * @returns DescribeTrFirewallPolicyBackUpAssociationListResponse
   */
  async describeTrFirewallPolicyBackUpAssociationList(request: DescribeTrFirewallPolicyBackUpAssociationListRequest): Promise<DescribeTrFirewallPolicyBackUpAssociationListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrFirewallPolicyBackUpAssociationListWithOptions(request, runtime);
  }

  /**
   * Queries the routing policies of a virtual private cloud (VPC) firewall that is created for a transit router.
   * 
   * @param request - DescribeTrFirewallV2RoutePolicyListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTrFirewallV2RoutePolicyListResponse
   */
  async describeTrFirewallV2RoutePolicyListWithOptions(request: DescribeTrFirewallV2RoutePolicyListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrFirewallV2RoutePolicyListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTrFirewallV2RoutePolicyList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTrFirewallV2RoutePolicyListResponse>(await this.callApi(params, req, runtime), new DescribeTrFirewallV2RoutePolicyListResponse({}));
  }

  /**
   * Queries the routing policies of a virtual private cloud (VPC) firewall that is created for a transit router.
   * 
   * @param request - DescribeTrFirewallV2RoutePolicyListRequest
   * @returns DescribeTrFirewallV2RoutePolicyListResponse
   */
  async describeTrFirewallV2RoutePolicyList(request: DescribeTrFirewallV2RoutePolicyListRequest): Promise<DescribeTrFirewallV2RoutePolicyListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrFirewallV2RoutePolicyListWithOptions(request, runtime);
  }

  /**
   * Queries the details of the virtual private cloud (VPC) firewalls that are created for transit routers.
   * 
   * @param request - DescribeTrFirewallsV2DetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTrFirewallsV2DetailResponse
   */
  async describeTrFirewallsV2DetailWithOptions(request: DescribeTrFirewallsV2DetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrFirewallsV2DetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTrFirewallsV2Detail",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTrFirewallsV2DetailResponse>(await this.callApi(params, req, runtime), new DescribeTrFirewallsV2DetailResponse({}));
  }

  /**
   * Queries the details of the virtual private cloud (VPC) firewalls that are created for transit routers.
   * 
   * @param request - DescribeTrFirewallsV2DetailRequest
   * @returns DescribeTrFirewallsV2DetailResponse
   */
  async describeTrFirewallsV2Detail(request: DescribeTrFirewallsV2DetailRequest): Promise<DescribeTrFirewallsV2DetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrFirewallsV2DetailWithOptions(request, runtime);
  }

  /**
   * Queries the virtual private cloud (VPC) firewalls that are created for transit routers.
   * 
   * @param request - DescribeTrFirewallsV2ListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTrFirewallsV2ListResponse
   */
  async describeTrFirewallsV2ListWithOptions(request: DescribeTrFirewallsV2ListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrFirewallsV2ListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!Util.isUnset(request.firewallName)) {
      query["FirewallName"] = request.firewallName;
    }

    if (!Util.isUnset(request.firewallSwitchStatus)) {
      query["FirewallSwitchStatus"] = request.firewallSwitchStatus;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.routeMode)) {
      query["RouteMode"] = request.routeMode;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      query["TransitRouterId"] = request.transitRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTrFirewallsV2List",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTrFirewallsV2ListResponse>(await this.callApi(params, req, runtime), new DescribeTrFirewallsV2ListResponse({}));
  }

  /**
   * Queries the virtual private cloud (VPC) firewalls that are created for transit routers.
   * 
   * @param request - DescribeTrFirewallsV2ListRequest
   * @returns DescribeTrFirewallsV2ListResponse
   */
  async describeTrFirewallsV2List(request: DescribeTrFirewallsV2ListRequest): Promise<DescribeTrFirewallsV2ListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrFirewallsV2ListWithOptions(request, runtime);
  }

  /**
   * Queries the route tables of the VPC firewalls that are created for transit routers.
   * 
   * @param request - DescribeTrFirewallsV2RouteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTrFirewallsV2RouteListResponse
   */
  async describeTrFirewallsV2RouteListWithOptions(request: DescribeTrFirewallsV2RouteListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrFirewallsV2RouteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.trFirewallRoutePolicyId)) {
      query["TrFirewallRoutePolicyId"] = request.trFirewallRoutePolicyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTrFirewallsV2RouteList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTrFirewallsV2RouteListResponse>(await this.callApi(params, req, runtime), new DescribeTrFirewallsV2RouteListResponse({}));
  }

  /**
   * Queries the route tables of the VPC firewalls that are created for transit routers.
   * 
   * @param request - DescribeTrFirewallsV2RouteListRequest
   * @returns DescribeTrFirewallsV2RouteListResponse
   */
  async describeTrFirewallsV2RouteList(request: DescribeTrFirewallsV2RouteListRequest): Promise<DescribeTrFirewallsV2RouteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrFirewallsV2RouteListWithOptions(request, runtime);
  }

  /**
   * Queries the information about the traffic of a specified asset that belongs to your Alibaba Cloud account.
   * 
   * @param request - DescribeUserAssetIPTrafficInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserAssetIPTrafficInfoResponse
   */
  async describeUserAssetIPTrafficInfoWithOptions(request: DescribeUserAssetIPTrafficInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserAssetIPTrafficInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserAssetIPTrafficInfo",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserAssetIPTrafficInfoResponse>(await this.callApi(params, req, runtime), new DescribeUserAssetIPTrafficInfoResponse({}));
  }

  /**
   * Queries the information about the traffic of a specified asset that belongs to your Alibaba Cloud account.
   * 
   * @param request - DescribeUserAssetIPTrafficInfoRequest
   * @returns DescribeUserAssetIPTrafficInfoResponse
   */
  async describeUserAssetIPTrafficInfo(request: DescribeUserAssetIPTrafficInfoRequest): Promise<DescribeUserAssetIPTrafficInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserAssetIPTrafficInfoWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeUserIPSWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserIPSWhitelistResponse
   */
  async describeUserIPSWhitelistWithOptions(request: DescribeUserIPSWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserIPSWhitelistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserIPSWhitelist",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserIPSWhitelistResponse>(await this.callApi(params, req, runtime), new DescribeUserIPSWhitelistResponse({}));
  }

  /**
   * @param request - DescribeUserIPSWhitelistRequest
   * @returns DescribeUserIPSWhitelistResponse
   */
  async describeUserIPSWhitelist(request: DescribeUserIPSWhitelistRequest): Promise<DescribeUserIPSWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserIPSWhitelistWithOptions(request, runtime);
  }

  /**
   * Queries the information about all policy groups of access control policies that are created for virtual private cloud (VPC) firewalls.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallAclGroupList operation to query the information about all policy groups of access control policies that are created for VPC firewalls.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallAclGroupListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcFirewallAclGroupListResponse
   */
  async describeVpcFirewallAclGroupListWithOptions(request: DescribeVpcFirewallAclGroupListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallAclGroupListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.firewallConfigureStatus)) {
      query["FirewallConfigureStatus"] = request.firewallConfigureStatus;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcFirewallAclGroupList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcFirewallAclGroupListResponse>(await this.callApi(params, req, runtime), new DescribeVpcFirewallAclGroupListResponse({}));
  }

  /**
   * Queries the information about all policy groups of access control policies that are created for virtual private cloud (VPC) firewalls.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallAclGroupList operation to query the information about all policy groups of access control policies that are created for VPC firewalls.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallAclGroupListRequest
   * @returns DescribeVpcFirewallAclGroupListResponse
   */
  async describeVpcFirewallAclGroupList(request: DescribeVpcFirewallAclGroupListRequest): Promise<DescribeVpcFirewallAclGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallAclGroupListWithOptions(request, runtime);
  }

  /**
   * Queries the details about a virtual private cloud (VPC) firewall. The VPC firewall protects access traffic between a VPC and a network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallCenDetail operation to query the details about a VPC firewall. The VPC firewall protects access traffic between a specified VPC and a network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallCenDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcFirewallCenDetailResponse
   */
  async describeVpcFirewallCenDetailWithOptions(request: DescribeVpcFirewallCenDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallCenDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.networkInstanceId)) {
      query["NetworkInstanceId"] = request.networkInstanceId;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcFirewallCenDetail",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcFirewallCenDetailResponse>(await this.callApi(params, req, runtime), new DescribeVpcFirewallCenDetailResponse({}));
  }

  /**
   * Queries the details about a virtual private cloud (VPC) firewall. The VPC firewall protects access traffic between a VPC and a network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallCenDetail operation to query the details about a VPC firewall. The VPC firewall protects access traffic between a specified VPC and a network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallCenDetailRequest
   * @returns DescribeVpcFirewallCenDetailResponse
   */
  async describeVpcFirewallCenDetail(request: DescribeVpcFirewallCenDetailRequest): Promise<DescribeVpcFirewallCenDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallCenDetailWithOptions(request, runtime);
  }

  /**
   * Queries virtual private cloud (VPC) firewalls. Each VPC firewall protects mutual access traffic between a specified VPC and a network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallCenList operation to query VPC firewalls. A VPC firewall protects mutual access traffic between a specified VPC and a network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallCenListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcFirewallCenListResponse
   */
  async describeVpcFirewallCenListWithOptions(request: DescribeVpcFirewallCenListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallCenListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.firewallSwitchStatus)) {
      query["FirewallSwitchStatus"] = request.firewallSwitchStatus;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.networkInstanceId)) {
      query["NetworkInstanceId"] = request.networkInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.routeMode)) {
      query["RouteMode"] = request.routeMode;
    }

    if (!Util.isUnset(request.transitRouterType)) {
      query["TransitRouterType"] = request.transitRouterType;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    if (!Util.isUnset(request.vpcFirewallName)) {
      query["VpcFirewallName"] = request.vpcFirewallName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcFirewallCenList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcFirewallCenListResponse>(await this.callApi(params, req, runtime), new DescribeVpcFirewallCenListResponse({}));
  }

  /**
   * Queries virtual private cloud (VPC) firewalls. Each VPC firewall protects mutual access traffic between a specified VPC and a network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallCenList operation to query VPC firewalls. A VPC firewall protects mutual access traffic between a specified VPC and a network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallCenListRequest
   * @returns DescribeVpcFirewallCenListResponse
   */
  async describeVpcFirewallCenList(request: DescribeVpcFirewallCenListRequest): Promise<DescribeVpcFirewallCenListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallCenListWithOptions(request, runtime);
  }

  /**
   * Queries the information about the access control policies for a specified virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallControlPolicy operation to query the information about all access control policies that are created for a specified VPC firewall. Different access control policies are used when a VPC firewall is used to protect traffic between two VPCs that are connected by using a Cloud Enterprise Network (CEN) instance or an Express Connect circuit.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcFirewallControlPolicyResponse
   */
  async describeVpcFirewallControlPolicyWithOptions(request: DescribeVpcFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!Util.isUnset(request.release)) {
      query["Release"] = request.release;
    }

    if (!Util.isUnset(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new DescribeVpcFirewallControlPolicyResponse({}));
  }

  /**
   * Queries the information about the access control policies for a specified virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallControlPolicy operation to query the information about all access control policies that are created for a specified VPC firewall. Different access control policies are used when a VPC firewall is used to protect traffic between two VPCs that are connected by using a Cloud Enterprise Network (CEN) instance or an Express Connect circuit.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallControlPolicyRequest
   * @returns DescribeVpcFirewallControlPolicyResponse
   */
  async describeVpcFirewallControlPolicy(request: DescribeVpcFirewallControlPolicyRequest): Promise<DescribeVpcFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the intrusion prevention configurations of a virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallDefaultIPSConfig operation to query the intrusion prevention configurations of a VPC firewall.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallDefaultIPSConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcFirewallDefaultIPSConfigResponse
   */
  async describeVpcFirewallDefaultIPSConfigWithOptions(request: DescribeVpcFirewallDefaultIPSConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallDefaultIPSConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcFirewallDefaultIPSConfig",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcFirewallDefaultIPSConfigResponse>(await this.callApi(params, req, runtime), new DescribeVpcFirewallDefaultIPSConfigResponse({}));
  }

  /**
   * Queries the intrusion prevention configurations of a virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallDefaultIPSConfig operation to query the intrusion prevention configurations of a VPC firewall.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallDefaultIPSConfigRequest
   * @returns DescribeVpcFirewallDefaultIPSConfigResponse
   */
  async describeVpcFirewallDefaultIPSConfig(request: DescribeVpcFirewallDefaultIPSConfigRequest): Promise<DescribeVpcFirewallDefaultIPSConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallDefaultIPSConfigWithOptions(request, runtime);
  }

  /**
   * Queries the details about a virtual private cloud (VPC) firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallDetail operation to query the details about a VPC firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit.  
   * Before you call the operation, make sure that you created a VPC firewall by calling the [CreateVpcFirewallConfigure](https://www.alibabacloud.com/help/en/cloud-firewall/latest/createvpcfirewallconfigure) operation.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcFirewallDetailResponse
   */
  async describeVpcFirewallDetailWithOptions(request: DescribeVpcFirewallDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.localVpcId)) {
      query["LocalVpcId"] = request.localVpcId;
    }

    if (!Util.isUnset(request.peerVpcId)) {
      query["PeerVpcId"] = request.peerVpcId;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcFirewallDetail",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcFirewallDetailResponse>(await this.callApi(params, req, runtime), new DescribeVpcFirewallDetailResponse({}));
  }

  /**
   * Queries the details about a virtual private cloud (VPC) firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallDetail operation to query the details about a VPC firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit.  
   * Before you call the operation, make sure that you created a VPC firewall by calling the [CreateVpcFirewallConfigure](https://www.alibabacloud.com/help/en/cloud-firewall/latest/createvpcfirewallconfigure) operation.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallDetailRequest
   * @returns DescribeVpcFirewallDetailResponse
   */
  async describeVpcFirewallDetail(request: DescribeVpcFirewallDetailRequest): Promise<DescribeVpcFirewallDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallDetailWithOptions(request, runtime);
  }

  /**
   * Queries the IPS whitelist of a virtual private cloud (VPC) firewall.
   * 
   * @param request - DescribeVpcFirewallIPSWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcFirewallIPSWhitelistResponse
   */
  async describeVpcFirewallIPSWhitelistWithOptions(request: DescribeVpcFirewallIPSWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallIPSWhitelistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcFirewallIPSWhitelist",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcFirewallIPSWhitelistResponse>(await this.callApi(params, req, runtime), new DescribeVpcFirewallIPSWhitelistResponse({}));
  }

  /**
   * Queries the IPS whitelist of a virtual private cloud (VPC) firewall.
   * 
   * @param request - DescribeVpcFirewallIPSWhitelistRequest
   * @returns DescribeVpcFirewallIPSWhitelistResponse
   */
  async describeVpcFirewallIPSWhitelist(request: DescribeVpcFirewallIPSWhitelistRequest): Promise<DescribeVpcFirewallIPSWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallIPSWhitelistWithOptions(request, runtime);
  }

  /**
   * Queries the details about virtual private cloud (VPC) firewalls by page. Each VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallList operation to query the details about VPC firewalls by page. Each VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcFirewallListResponse
   */
  async describeVpcFirewallListWithOptions(request: DescribeVpcFirewallListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectSubType)) {
      query["ConnectSubType"] = request.connectSubType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.firewallSwitchStatus)) {
      query["FirewallSwitchStatus"] = request.firewallSwitchStatus;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.peerUid)) {
      query["PeerUid"] = request.peerUid;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    if (!Util.isUnset(request.vpcFirewallName)) {
      query["VpcFirewallName"] = request.vpcFirewallName;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcFirewallList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcFirewallListResponse>(await this.callApi(params, req, runtime), new DescribeVpcFirewallListResponse({}));
  }

  /**
   * Queries the details about virtual private cloud (VPC) firewalls by page. Each VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallList operation to query the details about VPC firewalls by page. Each VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallListRequest
   * @returns DescribeVpcFirewallListResponse
   */
  async describeVpcFirewallList(request: DescribeVpcFirewallListRequest): Promise<DescribeVpcFirewallListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallListWithOptions(request, runtime);
  }

  /**
   * Queries the priority range of access control policies that are created for a virtual private cloud (VPC) firewall in a specific policy group.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallPolicyPriorUsed operation to query the priority range of access control policies that are created for a VPC firewall in a specific policy group.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallPolicyPriorUsedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcFirewallPolicyPriorUsedResponse
   */
  async describeVpcFirewallPolicyPriorUsedWithOptions(request: DescribeVpcFirewallPolicyPriorUsedRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallPolicyPriorUsedResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcFirewallPolicyPriorUsed",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcFirewallPolicyPriorUsedResponse>(await this.callApi(params, req, runtime), new DescribeVpcFirewallPolicyPriorUsedResponse({}));
  }

  /**
   * Queries the priority range of access control policies that are created for a virtual private cloud (VPC) firewall in a specific policy group.
   * 
   * @remarks
   * You can call the DescribeVpcFirewallPolicyPriorUsed operation to query the priority range of access control policies that are created for a VPC firewall in a specific policy group.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVpcFirewallPolicyPriorUsedRequest
   * @returns DescribeVpcFirewallPolicyPriorUsedResponse
   */
  async describeVpcFirewallPolicyPriorUsed(request: DescribeVpcFirewallPolicyPriorUsedRequest): Promise<DescribeVpcFirewallPolicyPriorUsedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallPolicyPriorUsedWithOptions(request, runtime);
  }

  /**
   * Queries virtual private clouds (VPCs).
   * 
   * @param request - DescribeVpcListLiteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcListLiteResponse
   */
  async describeVpcListLiteWithOptions(request: DescribeVpcListLiteRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcListLiteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vpcName)) {
      query["VpcName"] = request.vpcName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcListLite",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcListLiteResponse>(await this.callApi(params, req, runtime), new DescribeVpcListLiteResponse({}));
  }

  /**
   * Queries virtual private clouds (VPCs).
   * 
   * @param request - DescribeVpcListLiteRequest
   * @returns DescribeVpcListLiteResponse
   */
  async describeVpcListLite(request: DescribeVpcListLiteRequest): Promise<DescribeVpcListLiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcListLiteWithOptions(request, runtime);
  }

  /**
   * Queries virtual private cloud (VPC) zones.
   * 
   * @param request - DescribeVpcZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcZoneResponse
   */
  async describeVpcZoneWithOptions(request: DescribeVpcZoneRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcZoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcZone",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcZoneResponse>(await this.callApi(params, req, runtime), new DescribeVpcZoneResponse({}));
  }

  /**
   * Queries virtual private cloud (VPC) zones.
   * 
   * @param request - DescribeVpcZoneRequest
   * @returns DescribeVpcZoneResponse
   */
  async describeVpcZone(request: DescribeVpcZoneRequest): Promise<DescribeVpcZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcZoneWithOptions(request, runtime);
  }

  /**
   * Queries the vulnerabilities that are supported by Cloud Firewall.
   * 
   * @param request - DescribeVulnerabilityProtectedListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVulnerabilityProtectedListResponse
   */
  async describeVulnerabilityProtectedListWithOptions(request: DescribeVulnerabilityProtectedListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVulnerabilityProtectedListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.attackType)) {
      query["AttackType"] = request.attackType;
    }

    if (!Util.isUnset(request.buyVersion)) {
      query["BuyVersion"] = request.buyVersion;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortKey)) {
      query["SortKey"] = request.sortKey;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    if (!Util.isUnset(request.vulnCveName)) {
      query["VulnCveName"] = request.vulnCveName;
    }

    if (!Util.isUnset(request.vulnLevel)) {
      query["VulnLevel"] = request.vulnLevel;
    }

    if (!Util.isUnset(request.vulnResource)) {
      query["VulnResource"] = request.vulnResource;
    }

    if (!Util.isUnset(request.vulnStatus)) {
      query["VulnStatus"] = request.vulnStatus;
    }

    if (!Util.isUnset(request.vulnType)) {
      query["VulnType"] = request.vulnType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVulnerabilityProtectedList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVulnerabilityProtectedListResponse>(await this.callApi(params, req, runtime), new DescribeVulnerabilityProtectedListResponse({}));
  }

  /**
   * Queries the vulnerabilities that are supported by Cloud Firewall.
   * 
   * @param request - DescribeVulnerabilityProtectedListRequest
   * @returns DescribeVulnerabilityProtectedListResponse
   */
  async describeVulnerabilityProtectedList(request: DescribeVulnerabilityProtectedListRequest): Promise<DescribeVulnerabilityProtectedListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVulnerabilityProtectedListWithOptions(request, runtime);
  }

  /**
   * Modifies the address book that is configured for access control.
   * 
   * @remarks
   * You can call the ModifyAddressBook operation to modify the address book that is configured for access control.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyAddressBookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAddressBookResponse
   */
  async modifyAddressBookWithOptions(request: ModifyAddressBookRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAddressBookResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressList)) {
      query["AddressList"] = request.addressList;
    }

    if (!Util.isUnset(request.autoAddTagEcs)) {
      query["AutoAddTagEcs"] = request.autoAddTagEcs;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupUuid)) {
      query["GroupUuid"] = request.groupUuid;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.tagList)) {
      query["TagList"] = request.tagList;
    }

    if (!Util.isUnset(request.tagRelation)) {
      query["TagRelation"] = request.tagRelation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAddressBook",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAddressBookResponse>(await this.callApi(params, req, runtime), new ModifyAddressBookResponse({}));
  }

  /**
   * Modifies the address book that is configured for access control.
   * 
   * @remarks
   * You can call the ModifyAddressBook operation to modify the address book that is configured for access control.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyAddressBookRequest
   * @returns ModifyAddressBookResponse
   */
  async modifyAddressBook(request: ModifyAddressBookRequest): Promise<ModifyAddressBookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAddressBookWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an access control policy.
   * 
   * @remarks
   * You can call this operation to modify the configurations of an access control policy. The policy allows Cloud Firewall to allow, deny, or monitor the traffic that passes through Cloud Firewall.
   * ## [](#qps)Limit
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyControlPolicyResponse
   */
  async modifyControlPolicyWithOptions(request: ModifyControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.applicationNameList)) {
      query["ApplicationNameList"] = request.applicationNameList;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destPort)) {
      query["DestPort"] = request.destPort;
    }

    if (!Util.isUnset(request.destPortGroup)) {
      query["DestPortGroup"] = request.destPortGroup;
    }

    if (!Util.isUnset(request.destPortType)) {
      query["DestPortType"] = request.destPortType;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.domainResolveType)) {
      query["DomainResolveType"] = request.domainResolveType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!Util.isUnset(request.release)) {
      query["Release"] = request.release;
    }

    if (!Util.isUnset(request.repeatDays)) {
      query["RepeatDays"] = request.repeatDays;
    }

    if (!Util.isUnset(request.repeatEndTime)) {
      query["RepeatEndTime"] = request.repeatEndTime;
    }

    if (!Util.isUnset(request.repeatStartTime)) {
      query["RepeatStartTime"] = request.repeatStartTime;
    }

    if (!Util.isUnset(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyControlPolicyResponse>(await this.callApi(params, req, runtime), new ModifyControlPolicyResponse({}));
  }

  /**
   * Modifies the configurations of an access control policy.
   * 
   * @remarks
   * You can call this operation to modify the configurations of an access control policy. The policy allows Cloud Firewall to allow, deny, or monitor the traffic that passes through Cloud Firewall.
   * ## [](#qps)Limit
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyControlPolicyRequest
   * @returns ModifyControlPolicyResponse
   */
  async modifyControlPolicy(request: ModifyControlPolicyRequest): Promise<ModifyControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyControlPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the priority of an IPv4 access control policy for the Internet firewall. An IPv4 access control policy refers to a policy whose source IP address and destination IP address are IPv4 addresses.
   * 
   * @remarks
   * You can use this operation to modify the priority of an IPv4 access control policy for the Internet firewall. No API operations are provided for you to modify the priority of an IPv6 access control policy for the Internet firewall.
   * ## [](#qps)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyControlPolicyPositionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyControlPolicyPositionResponse
   */
  async modifyControlPolicyPositionWithOptions(request: ModifyControlPolicyPositionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyControlPolicyPositionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.newOrder)) {
      query["NewOrder"] = request.newOrder;
    }

    if (!Util.isUnset(request.oldOrder)) {
      query["OldOrder"] = request.oldOrder;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyControlPolicyPosition",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyControlPolicyPositionResponse>(await this.callApi(params, req, runtime), new ModifyControlPolicyPositionResponse({}));
  }

  /**
   * Modifies the priority of an IPv4 access control policy for the Internet firewall. An IPv4 access control policy refers to a policy whose source IP address and destination IP address are IPv4 addresses.
   * 
   * @remarks
   * You can use this operation to modify the priority of an IPv4 access control policy for the Internet firewall. No API operations are provided for you to modify the priority of an IPv6 access control policy for the Internet firewall.
   * ## [](#qps)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyControlPolicyPositionRequest
   * @returns ModifyControlPolicyPositionResponse
   */
  async modifyControlPolicyPosition(request: ModifyControlPolicyPositionRequest): Promise<ModifyControlPolicyPositionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyControlPolicyPositionWithOptions(request, runtime);
  }

  /**
   * Modifies the default configuration of the intrusion prevention system (IPS).
   * 
   * @param request - ModifyDefaultIPSConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefaultIPSConfigResponse
   */
  async modifyDefaultIPSConfigWithOptions(request: ModifyDefaultIPSConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefaultIPSConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.basicRules)) {
      query["BasicRules"] = request.basicRules;
    }

    if (!Util.isUnset(request.ctiRules)) {
      query["CtiRules"] = request.ctiRules;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.patchRules)) {
      query["PatchRules"] = request.patchRules;
    }

    if (!Util.isUnset(request.ruleClass)) {
      query["RuleClass"] = request.ruleClass;
    }

    if (!Util.isUnset(request.runMode)) {
      query["RunMode"] = request.runMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefaultIPSConfig",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefaultIPSConfigResponse>(await this.callApi(params, req, runtime), new ModifyDefaultIPSConfigResponse({}));
  }

  /**
   * Modifies the default configuration of the intrusion prevention system (IPS).
   * 
   * @param request - ModifyDefaultIPSConfigRequest
   * @returns ModifyDefaultIPSConfigResponse
   */
  async modifyDefaultIPSConfig(request: ModifyDefaultIPSConfigRequest): Promise<ModifyDefaultIPSConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefaultIPSConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the status of a routing policy.
   * 
   * @param request - ModifyFirewallV2RoutePolicySwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFirewallV2RoutePolicySwitchResponse
   */
  async modifyFirewallV2RoutePolicySwitchWithOptions(request: ModifyFirewallV2RoutePolicySwitchRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFirewallV2RoutePolicySwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.shouldRecover)) {
      query["ShouldRecover"] = request.shouldRecover;
    }

    if (!Util.isUnset(request.trFirewallRoutePolicyId)) {
      query["TrFirewallRoutePolicyId"] = request.trFirewallRoutePolicyId;
    }

    if (!Util.isUnset(request.trFirewallRoutePolicySwitchStatus)) {
      query["TrFirewallRoutePolicySwitchStatus"] = request.trFirewallRoutePolicySwitchStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyFirewallV2RoutePolicySwitch",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyFirewallV2RoutePolicySwitchResponse>(await this.callApi(params, req, runtime), new ModifyFirewallV2RoutePolicySwitchResponse({}));
  }

  /**
   * Modifies the status of a routing policy.
   * 
   * @param request - ModifyFirewallV2RoutePolicySwitchRequest
   * @returns ModifyFirewallV2RoutePolicySwitchResponse
   */
  async modifyFirewallV2RoutePolicySwitch(request: ModifyFirewallV2RoutePolicySwitchRequest): Promise<ModifyFirewallV2RoutePolicySwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFirewallV2RoutePolicySwitchWithOptions(request, runtime);
  }

  /**
   * Updates the information about members in Cloud Firewall.
   * 
   * @remarks
   * You can call the ModifyInstanceMemberAttributes operation to update the information about members in Cloud Firewall.  
   * ## Limits
   * You can call this operation up to 10 times per second for each account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyInstanceMemberAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceMemberAttributesResponse
   */
  async modifyInstanceMemberAttributesWithOptions(request: ModifyInstanceMemberAttributesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceMemberAttributesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.members)) {
      query["Members"] = request.members;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceMemberAttributes",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceMemberAttributesResponse>(await this.callApi(params, req, runtime), new ModifyInstanceMemberAttributesResponse({}));
  }

  /**
   * Updates the information about members in Cloud Firewall.
   * 
   * @remarks
   * You can call the ModifyInstanceMemberAttributes operation to update the information about members in Cloud Firewall.  
   * ## Limits
   * You can call this operation up to 10 times per second for each account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyInstanceMemberAttributesRequest
   * @returns ModifyInstanceMemberAttributesResponse
   */
  async modifyInstanceMemberAttributes(request: ModifyInstanceMemberAttributesRequest): Promise<ModifyInstanceMemberAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceMemberAttributesWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an access control policy that is created for a NAT firewall.
   * 
   * @remarks
   * You can use this operation to modify the configurations of an access control policy. The policy is used to allow, deny, or monitor traffic that reaches a NAT firewall.
   * 
   * @param request - ModifyNatFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNatFirewallControlPolicyResponse
   */
  async modifyNatFirewallControlPolicyWithOptions(request: ModifyNatFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNatFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.applicationNameList)) {
      query["ApplicationNameList"] = request.applicationNameList;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destPort)) {
      query["DestPort"] = request.destPort;
    }

    if (!Util.isUnset(request.destPortGroup)) {
      query["DestPortGroup"] = request.destPortGroup;
    }

    if (!Util.isUnset(request.destPortType)) {
      query["DestPortType"] = request.destPortType;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.domainResolveType)) {
      query["DomainResolveType"] = request.domainResolveType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!Util.isUnset(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!Util.isUnset(request.release)) {
      query["Release"] = request.release;
    }

    if (!Util.isUnset(request.repeatDays)) {
      query["RepeatDays"] = request.repeatDays;
    }

    if (!Util.isUnset(request.repeatEndTime)) {
      query["RepeatEndTime"] = request.repeatEndTime;
    }

    if (!Util.isUnset(request.repeatStartTime)) {
      query["RepeatStartTime"] = request.repeatStartTime;
    }

    if (!Util.isUnset(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyNatFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyNatFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new ModifyNatFirewallControlPolicyResponse({}));
  }

  /**
   * Modifies the configurations of an access control policy that is created for a NAT firewall.
   * 
   * @remarks
   * You can use this operation to modify the configurations of an access control policy. The policy is used to allow, deny, or monitor traffic that reaches a NAT firewall.
   * 
   * @param request - ModifyNatFirewallControlPolicyRequest
   * @returns ModifyNatFirewallControlPolicyResponse
   */
  async modifyNatFirewallControlPolicy(request: ModifyNatFirewallControlPolicyRequest): Promise<ModifyNatFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNatFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the priority of an access control policy that is created for a NAT firewall.
   * 
   * @param request - ModifyNatFirewallControlPolicyPositionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNatFirewallControlPolicyPositionResponse
   */
  async modifyNatFirewallControlPolicyPositionWithOptions(request: ModifyNatFirewallControlPolicyPositionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNatFirewallControlPolicyPositionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!Util.isUnset(request.newOrder)) {
      query["NewOrder"] = request.newOrder;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyNatFirewallControlPolicyPosition",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyNatFirewallControlPolicyPositionResponse>(await this.callApi(params, req, runtime), new ModifyNatFirewallControlPolicyPositionResponse({}));
  }

  /**
   * Modifies the priority of an access control policy that is created for a NAT firewall.
   * 
   * @param request - ModifyNatFirewallControlPolicyPositionRequest
   * @returns ModifyNatFirewallControlPolicyPositionResponse
   */
  async modifyNatFirewallControlPolicyPosition(request: ModifyNatFirewallControlPolicyPositionRequest): Promise<ModifyNatFirewallControlPolicyPositionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNatFirewallControlPolicyPositionWithOptions(request, runtime);
  }

  /**
   * 修改对象组操作
   * 
   * @param request - ModifyObjectGroupOperationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyObjectGroupOperationResponse
   */
  async modifyObjectGroupOperationWithOptions(request: ModifyObjectGroupOperationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyObjectGroupOperationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.objectList)) {
      query["ObjectList"] = request.objectList;
    }

    if (!Util.isUnset(request.objectOperation)) {
      query["ObjectOperation"] = request.objectOperation;
    }

    if (!Util.isUnset(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyObjectGroupOperation",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyObjectGroupOperationResponse>(await this.callApi(params, req, runtime), new ModifyObjectGroupOperationResponse({}));
  }

  /**
   * 修改对象组操作
   * 
   * @param request - ModifyObjectGroupOperationRequest
   * @returns ModifyObjectGroupOperationResponse
   */
  async modifyObjectGroupOperation(request: ModifyObjectGroupOperationRequest): Promise<ModifyObjectGroupOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyObjectGroupOperationWithOptions(request, runtime);
  }

  /**
   * Enables or disables the strict mode for an access control policy.
   * 
   * @remarks
   * You can call the ModifyPolicyAdvancedConfig operation to enable or disable the strict mode for an access control policy.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyPolicyAdvancedConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPolicyAdvancedConfigResponse
   */
  async modifyPolicyAdvancedConfigWithOptions(request: ModifyPolicyAdvancedConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPolicyAdvancedConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.internetSwitch)) {
      query["InternetSwitch"] = request.internetSwitch;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPolicyAdvancedConfig",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPolicyAdvancedConfigResponse>(await this.callApi(params, req, runtime), new ModifyPolicyAdvancedConfigResponse({}));
  }

  /**
   * Enables or disables the strict mode for an access control policy.
   * 
   * @remarks
   * You can call the ModifyPolicyAdvancedConfig operation to enable or disable the strict mode for an access control policy.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyPolicyAdvancedConfigRequest
   * @returns ModifyPolicyAdvancedConfigResponse
   */
  async modifyPolicyAdvancedConfig(request: ModifyPolicyAdvancedConfigRequest): Promise<ModifyPolicyAdvancedConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPolicyAdvancedConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of a virtual private cloud (VPC) firewall that is created for a transit router.
   * 
   * @param request - ModifyTrFirewallV2ConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTrFirewallV2ConfigurationResponse
   */
  async modifyTrFirewallV2ConfigurationWithOptions(request: ModifyTrFirewallV2ConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTrFirewallV2ConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!Util.isUnset(request.firewallName)) {
      query["FirewallName"] = request.firewallName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTrFirewallV2Configuration",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTrFirewallV2ConfigurationResponse>(await this.callApi(params, req, runtime), new ModifyTrFirewallV2ConfigurationResponse({}));
  }

  /**
   * Modifies the configuration of a virtual private cloud (VPC) firewall that is created for a transit router.
   * 
   * @param request - ModifyTrFirewallV2ConfigurationRequest
   * @returns ModifyTrFirewallV2ConfigurationResponse
   */
  async modifyTrFirewallV2Configuration(request: ModifyTrFirewallV2ConfigurationRequest): Promise<ModifyTrFirewallV2ConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTrFirewallV2ConfigurationWithOptions(request, runtime);
  }

  /**
   * Modifies the effective scope of the routing policy created for the VPC firewall for a transit router.
   * 
   * @param tmpReq - ModifyTrFirewallV2RoutePolicyScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTrFirewallV2RoutePolicyScopeResponse
   */
  async modifyTrFirewallV2RoutePolicyScopeWithOptions(tmpReq: ModifyTrFirewallV2RoutePolicyScopeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTrFirewallV2RoutePolicyScopeResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyTrFirewallV2RoutePolicyScopeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.destCandidateList)) {
      request.destCandidateListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destCandidateList, "DestCandidateList", "json");
    }

    if (!Util.isUnset(tmpReq.srcCandidateList)) {
      request.srcCandidateListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.srcCandidateList, "SrcCandidateList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.destCandidateListShrink)) {
      query["DestCandidateList"] = request.destCandidateListShrink;
    }

    if (!Util.isUnset(request.firewallId)) {
      query["FirewallId"] = request.firewallId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.shouldRecover)) {
      query["ShouldRecover"] = request.shouldRecover;
    }

    if (!Util.isUnset(request.srcCandidateListShrink)) {
      query["SrcCandidateList"] = request.srcCandidateListShrink;
    }

    if (!Util.isUnset(request.trFirewallRoutePolicyId)) {
      query["TrFirewallRoutePolicyId"] = request.trFirewallRoutePolicyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTrFirewallV2RoutePolicyScope",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTrFirewallV2RoutePolicyScopeResponse>(await this.callApi(params, req, runtime), new ModifyTrFirewallV2RoutePolicyScopeResponse({}));
  }

  /**
   * Modifies the effective scope of the routing policy created for the VPC firewall for a transit router.
   * 
   * @param request - ModifyTrFirewallV2RoutePolicyScopeRequest
   * @returns ModifyTrFirewallV2RoutePolicyScopeResponse
   */
  async modifyTrFirewallV2RoutePolicyScope(request: ModifyTrFirewallV2RoutePolicyScopeRequest): Promise<ModifyTrFirewallV2RoutePolicyScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTrFirewallV2RoutePolicyScopeWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyUserIPSWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUserIPSWhitelistResponse
   */
  async modifyUserIPSWhitelistWithOptions(request: ModifyUserIPSWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserIPSWhitelistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.listType)) {
      query["ListType"] = request.listType;
    }

    if (!Util.isUnset(request.listValue)) {
      query["ListValue"] = request.listValue;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.whiteType)) {
      query["WhiteType"] = request.whiteType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyUserIPSWhitelist",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyUserIPSWhitelistResponse>(await this.callApi(params, req, runtime), new ModifyUserIPSWhitelistResponse({}));
  }

  /**
   * @param request - ModifyUserIPSWhitelistRequest
   * @returns ModifyUserIPSWhitelistResponse
   */
  async modifyUserIPSWhitelist(request: ModifyUserIPSWhitelistRequest): Promise<ModifyUserIPSWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserIPSWhitelistWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a virtual private cloud (VPC) firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallCenConfigure operation to modify the configurations of a VPC firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. Before you call this operation, make sure that you have created a VPC firewall by calling the [CreateVpcFirewallCenConfigure](https://help.aliyun.com/document_detail/345772.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallCenConfigureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcFirewallCenConfigureResponse
   */
  async modifyVpcFirewallCenConfigureWithOptions(request: ModifyVpcFirewallCenConfigureRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcFirewallCenConfigureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    if (!Util.isUnset(request.vpcFirewallName)) {
      query["VpcFirewallName"] = request.vpcFirewallName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVpcFirewallCenConfigure",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVpcFirewallCenConfigureResponse>(await this.callApi(params, req, runtime), new ModifyVpcFirewallCenConfigureResponse({}));
  }

  /**
   * Modifies the configurations of a virtual private cloud (VPC) firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallCenConfigure operation to modify the configurations of a VPC firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. Before you call this operation, make sure that you have created a VPC firewall by calling the [CreateVpcFirewallCenConfigure](https://help.aliyun.com/document_detail/345772.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallCenConfigureRequest
   * @returns ModifyVpcFirewallCenConfigureResponse
   */
  async modifyVpcFirewallCenConfigure(request: ModifyVpcFirewallCenConfigureRequest): Promise<ModifyVpcFirewallCenConfigureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcFirewallCenConfigureWithOptions(request, runtime);
  }

  /**
   * Enables or disables a virtual private cloud (VPC) firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallCenSwitchStatus operation to enable or disable a VPC firewall. A VPC firewall protects mutual access traffic between a specified VPC and a network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. After you enable the VPC firewall, the VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a CEN instance. After you disable the VPC firewall, the VPC firewall no longer protects mutual access traffic between a VPC and a specified network instance that is attached to a CEN instance.
   * Before you call this operation, make sure that you have created a VPC firewall by calling the [CreateVpcFirewallCenConfigure](https://help.aliyun.com/document_detail/345772.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallCenSwitchStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcFirewallCenSwitchStatusResponse
   */
  async modifyVpcFirewallCenSwitchStatusWithOptions(request: ModifyVpcFirewallCenSwitchStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcFirewallCenSwitchStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.firewallSwitch)) {
      query["FirewallSwitch"] = request.firewallSwitch;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVpcFirewallCenSwitchStatus",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVpcFirewallCenSwitchStatusResponse>(await this.callApi(params, req, runtime), new ModifyVpcFirewallCenSwitchStatusResponse({}));
  }

  /**
   * Enables or disables a virtual private cloud (VPC) firewall. The VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a Cloud Enterprise Network (CEN) instance.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallCenSwitchStatus operation to enable or disable a VPC firewall. A VPC firewall protects mutual access traffic between a specified VPC and a network instance that is attached to a CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. After you enable the VPC firewall, the VPC firewall protects mutual access traffic between a VPC and a specified network instance that is attached to a CEN instance. After you disable the VPC firewall, the VPC firewall no longer protects mutual access traffic between a VPC and a specified network instance that is attached to a CEN instance.
   * Before you call this operation, make sure that you have created a VPC firewall by calling the [CreateVpcFirewallCenConfigure](https://help.aliyun.com/document_detail/345772.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallCenSwitchStatusRequest
   * @returns ModifyVpcFirewallCenSwitchStatusResponse
   */
  async modifyVpcFirewallCenSwitchStatus(request: ModifyVpcFirewallCenSwitchStatusRequest): Promise<ModifyVpcFirewallCenSwitchStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcFirewallCenSwitchStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a virtual private cloud (VPC) firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallConfigure operation to modify the configurations of a VPC firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit. Before you call the operation, make sure that you created a VPC firewall by calling the [CreateVpcFirewallConfigure](https://help.aliyun.com/document_detail/342893.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallConfigureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcFirewallConfigureResponse
   */
  async modifyVpcFirewallConfigureWithOptions(request: ModifyVpcFirewallConfigureRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcFirewallConfigureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.localVpcCidrTableList)) {
      query["LocalVpcCidrTableList"] = request.localVpcCidrTableList;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.peerVpcCidrTableList)) {
      query["PeerVpcCidrTableList"] = request.peerVpcCidrTableList;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    if (!Util.isUnset(request.vpcFirewallName)) {
      query["VpcFirewallName"] = request.vpcFirewallName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVpcFirewallConfigure",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVpcFirewallConfigureResponse>(await this.callApi(params, req, runtime), new ModifyVpcFirewallConfigureResponse({}));
  }

  /**
   * Modifies the configurations of a virtual private cloud (VPC) firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallConfigure operation to modify the configurations of a VPC firewall. The VPC firewall controls traffic between two VPCs that are connected by using an Express Connect circuit. Before you call the operation, make sure that you created a VPC firewall by calling the [CreateVpcFirewallConfigure](https://help.aliyun.com/document_detail/342893.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallConfigureRequest
   * @returns ModifyVpcFirewallConfigureResponse
   */
  async modifyVpcFirewallConfigure(request: ModifyVpcFirewallConfigureRequest): Promise<ModifyVpcFirewallConfigureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcFirewallConfigureWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an access control policy that is created for a virtual private cloud (VPC) firewall in a specified policy group.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallControlPolicy operation to modify the configurations of an access control policy that is created for a VPC firewall in a specified policy group. Different access control policies are used for the VPC firewalls that are used to protect each Cloud Enterprise Network (CEN) instance and the VPC firewalls that are used to protect each Express Connect circuit.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcFirewallControlPolicyResponse
   */
  async modifyVpcFirewallControlPolicyWithOptions(request: ModifyVpcFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.applicationNameList)) {
      query["ApplicationNameList"] = request.applicationNameList;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destPort)) {
      query["DestPort"] = request.destPort;
    }

    if (!Util.isUnset(request.destPortGroup)) {
      query["DestPortGroup"] = request.destPortGroup;
    }

    if (!Util.isUnset(request.destPortType)) {
      query["DestPortType"] = request.destPortType;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.domainResolveType)) {
      query["DomainResolveType"] = request.domainResolveType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!Util.isUnset(request.release)) {
      query["Release"] = request.release;
    }

    if (!Util.isUnset(request.repeatDays)) {
      query["RepeatDays"] = request.repeatDays;
    }

    if (!Util.isUnset(request.repeatEndTime)) {
      query["RepeatEndTime"] = request.repeatEndTime;
    }

    if (!Util.isUnset(request.repeatStartTime)) {
      query["RepeatStartTime"] = request.repeatStartTime;
    }

    if (!Util.isUnset(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVpcFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVpcFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new ModifyVpcFirewallControlPolicyResponse({}));
  }

  /**
   * Modifies the configurations of an access control policy that is created for a virtual private cloud (VPC) firewall in a specified policy group.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallControlPolicy operation to modify the configurations of an access control policy that is created for a VPC firewall in a specified policy group. Different access control policies are used for the VPC firewalls that are used to protect each Cloud Enterprise Network (CEN) instance and the VPC firewalls that are used to protect each Express Connect circuit.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallControlPolicyRequest
   * @returns ModifyVpcFirewallControlPolicyResponse
   */
  async modifyVpcFirewallControlPolicy(request: ModifyVpcFirewallControlPolicyRequest): Promise<ModifyVpcFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the priority of an access control policy that is created for a virtual private cloud (VPC) firewall in a specific policy group.
   * 
   * @remarks
   * You can use this operation to modify the priority of an access control policy that is created for a VPC firewall in a specific policy group.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallControlPolicyPositionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcFirewallControlPolicyPositionResponse
   */
  async modifyVpcFirewallControlPolicyPositionWithOptions(request: ModifyVpcFirewallControlPolicyPositionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcFirewallControlPolicyPositionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.newOrder)) {
      query["NewOrder"] = request.newOrder;
    }

    if (!Util.isUnset(request.oldOrder)) {
      query["OldOrder"] = request.oldOrder;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVpcFirewallControlPolicyPosition",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVpcFirewallControlPolicyPositionResponse>(await this.callApi(params, req, runtime), new ModifyVpcFirewallControlPolicyPositionResponse({}));
  }

  /**
   * Modifies the priority of an access control policy that is created for a virtual private cloud (VPC) firewall in a specific policy group.
   * 
   * @remarks
   * You can use this operation to modify the priority of an access control policy that is created for a VPC firewall in a specific policy group.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallControlPolicyPositionRequest
   * @returns ModifyVpcFirewallControlPolicyPositionResponse
   */
  async modifyVpcFirewallControlPolicyPosition(request: ModifyVpcFirewallControlPolicyPositionRequest): Promise<ModifyVpcFirewallControlPolicyPositionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcFirewallControlPolicyPositionWithOptions(request, runtime);
  }

  /**
   * Modifies the intrusion prevention configurations of a virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallDefaultIPSConfig operation to modify the intrusion prevention configurations of a VPC firewall.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallDefaultIPSConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcFirewallDefaultIPSConfigResponse
   */
  async modifyVpcFirewallDefaultIPSConfigWithOptions(request: ModifyVpcFirewallDefaultIPSConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcFirewallDefaultIPSConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.basicRules)) {
      query["BasicRules"] = request.basicRules;
    }

    if (!Util.isUnset(request.enableAllPatch)) {
      query["EnableAllPatch"] = request.enableAllPatch;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.ruleClass)) {
      query["RuleClass"] = request.ruleClass;
    }

    if (!Util.isUnset(request.runMode)) {
      query["RunMode"] = request.runMode;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVpcFirewallDefaultIPSConfig",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVpcFirewallDefaultIPSConfigResponse>(await this.callApi(params, req, runtime), new ModifyVpcFirewallDefaultIPSConfigResponse({}));
  }

  /**
   * Modifies the intrusion prevention configurations of a virtual private cloud (VPC) firewall.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallDefaultIPSConfig operation to modify the intrusion prevention configurations of a VPC firewall.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallDefaultIPSConfigRequest
   * @returns ModifyVpcFirewallDefaultIPSConfigResponse
   */
  async modifyVpcFirewallDefaultIPSConfig(request: ModifyVpcFirewallDefaultIPSConfigRequest): Promise<ModifyVpcFirewallDefaultIPSConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcFirewallDefaultIPSConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the IPS whitelist of a virtual private cloud (VPC) firewall.
   * 
   * @param request - ModifyVpcFirewallIPSWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcFirewallIPSWhitelistResponse
   */
  async modifyVpcFirewallIPSWhitelistWithOptions(request: ModifyVpcFirewallIPSWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcFirewallIPSWhitelistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.listType)) {
      query["ListType"] = request.listType;
    }

    if (!Util.isUnset(request.listValue)) {
      query["ListValue"] = request.listValue;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    if (!Util.isUnset(request.whiteType)) {
      query["WhiteType"] = request.whiteType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVpcFirewallIPSWhitelist",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVpcFirewallIPSWhitelistResponse>(await this.callApi(params, req, runtime), new ModifyVpcFirewallIPSWhitelistResponse({}));
  }

  /**
   * Modifies the IPS whitelist of a virtual private cloud (VPC) firewall.
   * 
   * @param request - ModifyVpcFirewallIPSWhitelistRequest
   * @returns ModifyVpcFirewallIPSWhitelistResponse
   */
  async modifyVpcFirewallIPSWhitelist(request: ModifyVpcFirewallIPSWhitelistRequest): Promise<ModifyVpcFirewallIPSWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcFirewallIPSWhitelistWithOptions(request, runtime);
  }

  /**
   * Enables or disables a virtual private cloud (VPC) firewall. The VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallSwitchStatus operation to enable or disable a VPC firewall. The VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit. After you enable the VPC firewall, the VPC firewall protects access traffic between two VPCs that are connected by using an Express Connect circuit. After you disable the VPC firewall, the VPC firewall no longer protects access traffic between two VPCs that are connected by using an Express Connect circuit.
   * Before you call the operation, make sure that you created a VPC firewall by calling the [CreateVpcFirewallConfigure](https://help.aliyun.com/document_detail/342893.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallSwitchStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcFirewallSwitchStatusResponse
   */
  async modifyVpcFirewallSwitchStatusWithOptions(request: ModifyVpcFirewallSwitchStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcFirewallSwitchStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.firewallSwitch)) {
      query["FirewallSwitch"] = request.firewallSwitch;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVpcFirewallSwitchStatus",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVpcFirewallSwitchStatusResponse>(await this.callApi(params, req, runtime), new ModifyVpcFirewallSwitchStatusResponse({}));
  }

  /**
   * Enables or disables a virtual private cloud (VPC) firewall. The VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit.
   * 
   * @remarks
   * You can call the ModifyVpcFirewallSwitchStatus operation to enable or disable a VPC firewall. The VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit. After you enable the VPC firewall, the VPC firewall protects access traffic between two VPCs that are connected by using an Express Connect circuit. After you disable the VPC firewall, the VPC firewall no longer protects access traffic between two VPCs that are connected by using an Express Connect circuit.
   * Before you call the operation, make sure that you created a VPC firewall by calling the [CreateVpcFirewallConfigure](https://help.aliyun.com/document_detail/342893.html) operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyVpcFirewallSwitchStatusRequest
   * @returns ModifyVpcFirewallSwitchStatusResponse
   */
  async modifyVpcFirewallSwitchStatus(request: ModifyVpcFirewallSwitchStatusRequest): Promise<ModifyVpcFirewallSwitchStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcFirewallSwitchStatusWithOptions(request, runtime);
  }

  /**
   * Turns off all firewall switches.
   * 
   * @remarks
   * You can call the PutDisableAllFwSwitch operation to turn off all firewall switches.
   * ## [](#qps-)QPS limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PutDisableAllFwSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutDisableAllFwSwitchResponse
   */
  async putDisableAllFwSwitchWithOptions(request: PutDisableAllFwSwitchRequest, runtime: $Util.RuntimeOptions): Promise<PutDisableAllFwSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutDisableAllFwSwitch",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutDisableAllFwSwitchResponse>(await this.callApi(params, req, runtime), new PutDisableAllFwSwitchResponse({}));
  }

  /**
   * Turns off all firewall switches.
   * 
   * @remarks
   * You can call the PutDisableAllFwSwitch operation to turn off all firewall switches.
   * ## [](#qps-)QPS limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PutDisableAllFwSwitchRequest
   * @returns PutDisableAllFwSwitchResponse
   */
  async putDisableAllFwSwitch(request: PutDisableAllFwSwitchRequest): Promise<PutDisableAllFwSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putDisableAllFwSwitchWithOptions(request, runtime);
  }

  /**
   * Disable a firewall for specific assets.
   * 
   * @remarks
   * You can call the PutDisableFwSwitch operation to disable a firewall for specific assets. After you disable the firewall, traffic does not pass through Cloud Firewall.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PutDisableFwSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutDisableFwSwitchResponse
   */
  async putDisableFwSwitchWithOptions(request: PutDisableFwSwitchRequest, runtime: $Util.RuntimeOptions): Promise<PutDisableFwSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipaddrList)) {
      query["IpaddrList"] = request.ipaddrList;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.regionList)) {
      query["RegionList"] = request.regionList;
    }

    if (!Util.isUnset(request.resourceTypeList)) {
      query["ResourceTypeList"] = request.resourceTypeList;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutDisableFwSwitch",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutDisableFwSwitchResponse>(await this.callApi(params, req, runtime), new PutDisableFwSwitchResponse({}));
  }

  /**
   * Disable a firewall for specific assets.
   * 
   * @remarks
   * You can call the PutDisableFwSwitch operation to disable a firewall for specific assets. After you disable the firewall, traffic does not pass through Cloud Firewall.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PutDisableFwSwitchRequest
   * @returns PutDisableFwSwitchResponse
   */
  async putDisableFwSwitch(request: PutDisableFwSwitchRequest): Promise<PutDisableFwSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putDisableFwSwitchWithOptions(request, runtime);
  }

  /**
   * Enables a firewall for all public IP addresses within your Alibaba Cloud account.
   * 
   * @remarks
   * You can call the PutEnableAllFwSwitch operation to enable a firewall for all public IP addresses within your Alibaba Cloud account.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PutEnableAllFwSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutEnableAllFwSwitchResponse
   */
  async putEnableAllFwSwitchWithOptions(request: PutEnableAllFwSwitchRequest, runtime: $Util.RuntimeOptions): Promise<PutEnableAllFwSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutEnableAllFwSwitch",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutEnableAllFwSwitchResponse>(await this.callApi(params, req, runtime), new PutEnableAllFwSwitchResponse({}));
  }

  /**
   * Enables a firewall for all public IP addresses within your Alibaba Cloud account.
   * 
   * @remarks
   * You can call the PutEnableAllFwSwitch operation to enable a firewall for all public IP addresses within your Alibaba Cloud account.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PutEnableAllFwSwitchRequest
   * @returns PutEnableAllFwSwitchResponse
   */
  async putEnableAllFwSwitch(request: PutEnableAllFwSwitchRequest): Promise<PutEnableAllFwSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putEnableAllFwSwitchWithOptions(request, runtime);
  }

  /**
   * Enables firewalls for specific assets.
   * 
   * @remarks
   * You can call the PutEnableFwSwitch operation to enable a firewall. After you enable a firewall, traffic passes through Cloud Firewall.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds a limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limits when you call this operation.
   * 
   * @param request - PutEnableFwSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutEnableFwSwitchResponse
   */
  async putEnableFwSwitchWithOptions(request: PutEnableFwSwitchRequest, runtime: $Util.RuntimeOptions): Promise<PutEnableFwSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipaddrList)) {
      query["IpaddrList"] = request.ipaddrList;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.regionList)) {
      query["RegionList"] = request.regionList;
    }

    if (!Util.isUnset(request.resourceTypeList)) {
      query["ResourceTypeList"] = request.resourceTypeList;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutEnableFwSwitch",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutEnableFwSwitchResponse>(await this.callApi(params, req, runtime), new PutEnableFwSwitchResponse({}));
  }

  /**
   * Enables firewalls for specific assets.
   * 
   * @remarks
   * You can call the PutEnableFwSwitch operation to enable a firewall. After you enable a firewall, traffic passes through Cloud Firewall.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds a limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limits when you call this operation.
   * 
   * @param request - PutEnableFwSwitchRequest
   * @returns PutEnableFwSwitchResponse
   */
  async putEnableFwSwitch(request: PutEnableFwSwitchRequest): Promise<PutEnableFwSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putEnableFwSwitchWithOptions(request, runtime);
  }

  /**
   * Releases Cloud Firewall that uses the pay-as-you-go billing method.
   * 
   * @param request - ReleasePostInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleasePostInstanceResponse
   */
  async releasePostInstanceWithOptions(request: ReleasePostInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleasePostInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleasePostInstance",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleasePostInstanceResponse>(await this.callApi(params, req, runtime), new ReleasePostInstanceResponse({}));
  }

  /**
   * Releases Cloud Firewall that uses the pay-as-you-go billing method.
   * 
   * @param request - ReleasePostInstanceRequest
   * @returns ReleasePostInstanceResponse
   */
  async releasePostInstance(request: ReleasePostInstanceRequest): Promise<ReleasePostInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releasePostInstanceWithOptions(request, runtime);
  }

  /**
   * Resets the number of NAT firewall hits.
   * 
   * @param request - ResetNatFirewallRuleHitCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetNatFirewallRuleHitCountResponse
   */
  async resetNatFirewallRuleHitCountWithOptions(request: ResetNatFirewallRuleHitCountRequest, runtime: $Util.RuntimeOptions): Promise<ResetNatFirewallRuleHitCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetNatFirewallRuleHitCount",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetNatFirewallRuleHitCountResponse>(await this.callApi(params, req, runtime), new ResetNatFirewallRuleHitCountResponse({}));
  }

  /**
   * Resets the number of NAT firewall hits.
   * 
   * @param request - ResetNatFirewallRuleHitCountRequest
   * @returns ResetNatFirewallRuleHitCountResponse
   */
  async resetNatFirewallRuleHitCount(request: ResetNatFirewallRuleHitCountRequest): Promise<ResetNatFirewallRuleHitCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetNatFirewallRuleHitCountWithOptions(request, runtime);
  }

  /**
   * Clears the count on hits of an access control policy that is created for a virtual private cloud (VPC) firewall in a specific policy group.
   * 
   * @remarks
   * You can call the ResetVpcFirewallRuleHitCount operation to clear the count on hits of an access control policy that is created for a VPC firewall in a specific policy group.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ResetVpcFirewallRuleHitCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetVpcFirewallRuleHitCountResponse
   */
  async resetVpcFirewallRuleHitCountWithOptions(request: ResetVpcFirewallRuleHitCountRequest, runtime: $Util.RuntimeOptions): Promise<ResetVpcFirewallRuleHitCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetVpcFirewallRuleHitCount",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetVpcFirewallRuleHitCountResponse>(await this.callApi(params, req, runtime), new ResetVpcFirewallRuleHitCountResponse({}));
  }

  /**
   * Clears the count on hits of an access control policy that is created for a virtual private cloud (VPC) firewall in a specific policy group.
   * 
   * @remarks
   * You can call the ResetVpcFirewallRuleHitCount operation to clear the count on hits of an access control policy that is created for a VPC firewall in a specific policy group.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ResetVpcFirewallRuleHitCountRequest
   * @returns ResetVpcFirewallRuleHitCountResponse
   */
  async resetVpcFirewallRuleHitCount(request: ResetVpcFirewallRuleHitCountRequest): Promise<ResetVpcFirewallRuleHitCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetVpcFirewallRuleHitCountWithOptions(request, runtime);
  }

  /**
   * Enables or disables a NAT firewall.
   * 
   * @param request - SwitchSecurityProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchSecurityProxyResponse
   */
  async switchSecurityProxyWithOptions(request: SwitchSecurityProxyRequest, runtime: $Util.RuntimeOptions): Promise<SwitchSecurityProxyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.proxyId)) {
      query["ProxyId"] = request.proxyId;
    }

    if (!Util.isUnset(request.switch)) {
      query["Switch"] = request.switch;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchSecurityProxy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchSecurityProxyResponse>(await this.callApi(params, req, runtime), new SwitchSecurityProxyResponse({}));
  }

  /**
   * Enables or disables a NAT firewall.
   * 
   * @param request - SwitchSecurityProxyRequest
   * @returns SwitchSecurityProxyResponse
   */
  async switchSecurityProxy(request: SwitchSecurityProxyRequest): Promise<SwitchSecurityProxyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchSecurityProxyWithOptions(request, runtime);
  }

}
