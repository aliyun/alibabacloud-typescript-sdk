// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on traffic that matches the access control policy.
   * 
   * Valid values:
   * 
   * - **accept**: Allows the traffic.
   * - **drop**: Blocks the traffic.
   * - **log**: Monitors the traffic.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * You must provide the UUID when you modify the access control policy. You can call the [DescribeVpcFirewallControlPolicy](https://help.aliyun.com/document_detail/159758.html) operation to query the UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221a****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The application type supported by the access control policy.
   * 
   * Valid values:
   * 
   * - ANY: all application types
   * - FTP
   * - HTTP
   * - HTTPS
   * - MySQL
   * - SMTP
   * - SMTPS
   * - RDP
   * - VNC
   * - SSH
   * - Redis
   * - MQTT
   * - MongoDB
   * - Memcache
   * - SSL
   * 
   * @example
   * HTTP
   * 
   * @deprecated
   */
  applicationName?: string;
  /**
   * @remarks
   * The list of application names.
   */
  applicationNameList?: string[];
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
   * The type of the destination port in the access control policy.
   * 
   * Valid values:
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
   * The destination address in the access control policy.
   * 
   * - If **DestinationType** is set to `net`, Destination is the destination CIDR block.
   *   
   *   Example: 10.2.3.0/24
   * 
   * - If **DestinationType** is set to `group`, Destination is the name of the destination address book.
   * 
   *   Example: db_group
   * 
   * - If **DestinationType** is set to `domain`, Destination is the destination domain name.
   * 
   *   Example: *.aliyuncs.com
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
   * - **net**: destination CIDR block
   * - **group**: destination address book
   * - **domain**: destination domain name
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The domain name resolution mode of the access control policy. Valid values:
   * 
   * * **FQDN**: FQDN-based resolution
   * * **DNS**: DNS-based dynamic resolution
   * * **FQDN_AND_DNS**: FQDN- and DNS-based dynamic resolution
   * 
   * @example
   * FQDN
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The end time of the Policy Validity Period for the access control policy. The value is expressed in the format of a UNIX timestamp in seconds. The time must be on the hour or half hour, and must be at least half an hour later than the start time.
   * > When RepeatType is set to Permanent, EndTime is empty. When RepeatType is set to None, Daily, Weekly, or Monthly, EndTime must be specified, and you must configure the Settings for the end time.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the response message.
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
   * The type of the security protocol in the access control policy.
   * 
   * Valid values:
   * 
   * - ANY: all protocol types
   * - TCP
   * - UDP
   * - ICMP
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * Specifies whether the access control policy is enabled. By default, the policy is enabled after it is created. Valid values:
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
   * The set of recurrence days for the Policy Validity Period of the access control policy.
   * - If RepeatType is set to `Permanent`, `None`, or `Daily`, RepeatDays is an empty set.
   *   Example: []
   * - When the Settings for RepeatType are Weekly, RepeatDays cannot be empty.
   *   Example: [0, 6]
   * > When the Settings for RepeatType are Weekly, duplicate values are not allowed in RepeatDays.
   * - If RepeatType is set to `Monthly`, RepeatDays cannot be empty.
   *   Example: [1, 31]
   * > When the Settings for RepeatType are Monthly, duplicate values are not allowed in RepeatDays.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The recurrence end time when the policy takes effect. Use the 24-hour time format HH:mm, such as 23:30. The time must be on the hour or half hour, and must be at least half an hour later than the recurrence start time.
   * > When RepeatType is set to Permanent or None, RepeatEndTime is empty. When RepeatType is set to Daily, Weekly, or Monthly, RepeatEndTime must be specified.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurrence start time when the policy takes effect. Use the 24-hour time format HH:mm, such as 08:00. The time must be on the hour or half hour, and must be at least half an hour earlier than the recurrence end time.
   * > When RepeatType is set to Permanent or None, RepeatStartTime is empty. When RepeatType is set to Daily, Weekly, or Monthly, RepeatStartTime must be specified.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type of the Policy Validity Period for the access control policy. Valid values:
   * - **Permanent**: always (default)
   * - **None**: specified single time
   * - **Daily**: daily
   * - **Weekly**: weekly
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
   * Valid values:
   * 
   * - If **SourceType** is set to `net`, Source is the source CIDR block.
   * 
   *   Example: 10.2.4.0/24
   * 
   * - If **SourceType** is set to `group`, Source is the name of the source address book.
   * 
   *   Example: db_group
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
   * - **net**: source CIDR block
   * - **group**: source address book
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the Policy Validity Period for the access control policy. The value is expressed in the format of a UNIX timestamp in seconds. The time must be on the hour or half hour, and must be at least half an hour earlier than the end time.
   * > When RepeatType is set to Permanent, StartTime is empty. When RepeatType is set to None, Daily, Weekly, or Monthly, StartTime must be specified, and you must configure the Settings for the start time.
   * 
   * @example
   * 1694761200
   */
  startTime?: number;
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewalls at the border. You can invoke the [DescribeVpcFirewallAclGroupList](https://help.aliyun.com/document_detail/159760.html) operation to obtain the ID.
   * 
   * - When the virtual private cloud (VPC) firewalls protect a CEN instance, set this parameter to the instance ID of the CEN instance.
   * 
   *   Example: cen-ervw0g12b5jbw*\\*\\*\\*
   * 
   * - When the virtual private cloud (VPC) firewalls protect an Express Connect circuit, set this parameter to the instance ID of the virtual private cloud (VPC) firewalls.
   *   
   *   Example: vfw-a42bbb7b887148c9*\\*\\*\\*
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

