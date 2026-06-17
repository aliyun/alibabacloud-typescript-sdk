// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic. Valid values:
   * 
   * - **accept**: Allows the traffic.
   * 
   * - **drop**: Denies the traffic.
   * 
   * - **log**: Monitors the traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The application type that the access control policy supports. Valid values:
   * 
   * - **FTP**
   * 
   * - **HTTP**
   * 
   * - **HTTPS**
   * 
   * - **MySQL**
   * 
   * - **SMTP**
   * 
   * - **SMTPS**
   * 
   * - **RDP**
   * 
   * - **VNC**
   * 
   * - **SSH**
   * 
   * - **Redis**
   * 
   * - **MQTT**
   * 
   * - **MongoDB**
   * 
   * - **Memcache**
   * 
   * - **SSL**
   * 
   * - **ANY** (all application types)
   * 
   * @example
   * HTTP
   * 
   * @deprecated
   */
  applicationName?: string;
  /**
   * @remarks
   * The list of application types that the access control policy supports.
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
   * > Set this parameter when **DestPortType** is set to `port`.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book in the access control policy.
   * 
   * > Set this parameter when **DestPortType** is set to `group`.
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
   * 
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
   * - If **DestinationType** is `net`, set this parameter to a destination CIDR block.
   * 
   * - If **DestinationType** is `group`, set this parameter to the name of a destination address book.
   * 
   * - If **DestinationType** is `domain`, set this parameter to a destination domain name.
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
   * 
   * - **group**: address book
   * 
   * - **domain**: domain name
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The domain name resolution method for the access control policy. Valid values:
   * 
   * - **FQDN**: FQDN-based
   * 
   * - **DNS**: DNS-based dynamic resolution
   * 
   * - **FQDN_AND_DNS**: FQDN-based and DNS-based dynamic resolution
   * 
   * @example
   * FQDN
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The end time of the policy validity period. This value is a UNIX timestamp. The time must be on the hour or half-hour and must be at least 30 minutes later than the start time.
   * 
   * > If RepeatType is \\`Permanent\\`, leave this parameter empty. If RepeatType is \\`None\\`, \\`Daily\\`, \\`Weekly\\`, or \\`Monthly\\`, set this parameter.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The priority of the access control policy.
   * 
   * The priority starts from 1. A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  newOrder?: string;
  /**
   * @remarks
   * The protocol type in the access control policy. Valid values:
   * 
   * - **ANY** (Set this value if you are unsure of the protocol type.)
   * 
   * - **TCP**
   * 
   * - **UDP**
   * 
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
   * The status of the access control policy. The policy is enabled by default after it is created. Valid values:
   * 
   * - **true**: Enables the access control policy.
   * 
   * - **false**: Disables the access control policy.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of the week or month on which the policy is recurrently active.
   * 
   * - If RepeatType is `Permanent`, `None`, or `Daily`, leave this parameter empty. Example: \\`[]\\`
   * 
   * - If RepeatType is \\`Weekly\\`, set this parameter. Example: \\`[0, 6]\\`
   * 
   * > If RepeatType is set to \\`Weekly\\`, the values in RepeatDays cannot be duplicates.
   * 
   * - If **RepeatType** is \\`Monthly\\`, set this parameter. Example: \\`[1, 31]\\`
   * 
   * > If RepeatType is set to \\`Monthly\\`, the values in RepeatDays cannot be duplicates.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The recurring end time of the policy validity period. For example: \\`23:30\\`. The time must be on the hour or half-hour and must be at least 30 minutes later than the recurring start time.
   * 
   * > If RepeatType is \\`Permanent\\` or \\`None\\`, leave this parameter empty. If RepeatType is \\`Daily\\`, \\`Weekly\\`, or \\`Monthly\\`, set this parameter.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurring start time of the policy validity period. For example: \\`08:00\\`. The time must be on the hour or half-hour and must be at least 30 minutes earlier than the recurring end time.
   * 
   * > If RepeatType is \\`Permanent\\` or \\`None\\`, leave this parameter empty. If RepeatType is \\`Daily\\`, \\`Weekly\\`, or \\`Monthly\\`, set this parameter.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the policy validity period. Valid values:
   * 
   * - **Permanent** (default): always
   * 
   * - **None**: one-time
   * 
   * - **Daily**: daily
   * 
   * - **Weekly**: weekly
   * 
   * - **Monthly**: monthly
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy.
   * 
   * - If SourceType is `net`, set this parameter to a source CIDR block.
   * 
   * - If SourceType is `group`, set this parameter to the name of a source address book.
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
   * 
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
   * The start time of the policy validity period. This value is a UNIX timestamp. The time must be on the hour or half-hour and must be at least 30 minutes earlier than the end time.
   * 
   * > If RepeatType is \\`Permanent\\`, leave this parameter empty. If RepeatType is \\`None\\`, \\`Daily\\`, \\`Weekly\\`, or \\`Monthly\\`, set this parameter.
   * 
   * @example
   * 1694761200
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the policy group for the VPC border firewall.
   * 
   * - If the VPC border firewall protects traffic between two VPCs that are connected using a CEN instance, set this parameter to the ID of the CEN instance.
   * 
   * - If the VPC border firewall protects traffic between two VPCs that are connected using an Express Connect circuit, set this parameter to the ID of the VPC border firewall instance.
   * 
   * > Call the [DescribeVpcFirewallAclGroupList](https://help.aliyun.com/document_detail/159760.html) operation to get this ID.
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

  validate() {
    if(Array.isArray(this.applicationNameList)) {
      $dara.Model.validateArray(this.applicationNameList);
    }
    if(Array.isArray(this.repeatDays)) {
      $dara.Model.validateArray(this.repeatDays);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

