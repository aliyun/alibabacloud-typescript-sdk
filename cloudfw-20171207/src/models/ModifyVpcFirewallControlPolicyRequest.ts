// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that is performed on traffic that hits the access control policy.
   * 
   * Valid values:
   * 
   * - **accept**: allows the traffic.
   * 
   * - **drop**: denies the traffic.
   * 
   * - **log**: monitors the traffic.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The unique ID of the access control policy.
   * 
   * To modify an access control policy, you must provide the unique ID of the policy. You can call the [DescribeVpcFirewallControlPolicy](https://help.aliyun.com/document_detail/159758.html) operation to query the ID.
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
   * - ANY (all application types)
   * 
   * - FTP
   * 
   * - HTTP
   * 
   * - HTTPS
   * 
   * - MySQL
   * 
   * - SMTP
   * 
   * - SMTPS
   * 
   * - RDP
   * 
   * - VNC
   * 
   * - SSH
   * 
   * - Redis
   * 
   * - MQTT
   * 
   * - MongoDB
   * 
   * - Memcache
   * 
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
   * The name of the destination port address book for the traffic to which the access control policy applies.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The type of the destination port for the traffic to which the access control policy applies.
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
   * The destination address in the access control policy.
   * 
   * - If **DestinationType** is set to `net`, specify a destination CIDR block.
   * 
   *   Example: 10.2.3.0/24
   * 
   * - If **DestinationType** is set to `group`, specify the name of a destination address book.
   * 
   *   Example: db_group
   * 
   * - If **DestinationType** is set to `domain`, specify a destination domain name.
   * 
   *   Example: \\*.aliyuncs.com
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
   * 
   * - **group**: destination address book
   * 
   * - **domain**: destination domain name
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The domain name resolution method for the access control policy. Valid values:
   * 
   * - **FQDN**: based on Fully Qualified Domain Name (FQDN)
   * 
   * - **DNS**: based on dynamic DNS resolution
   * 
   * - **FQDN_AND_DNS**: based on FQDN and dynamic DNS resolution
   * 
   * @example
   * FQDN
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The end time of the policy validity period. The value is a UNIX timestamp. The time is on the hour or on the half hour, and is at least 30 minutes later than the start time.
   * 
   * > If RepeatType is set to \\`Permanent\\`, this parameter is empty. If RepeatType is set to \\`None\\`, \\`Daily\\`, \\`Weekly\\`, or \\`Monthly\\`, you must specify this parameter.
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
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The protocol type for the traffic to which the access control policy applies.
   * 
   * Valid values:
   * 
   * - ANY (all protocol types)
   * 
   * - TCP
   * 
   * - UDP
   * 
   * - ICMP
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The status of the access control policy. By default, an access control policy is enabled after it is created. Valid values:
   * 
   * - **true**: enables the access control policy.
   * 
   * - **false**: disables the access control policy.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of a week or month on which the policy takes effect.
   * 
   * - If RepeatType is set to \\`Permanent\\`, \\`None\\`, or \\`Daily\\`, this parameter is empty.
   *   Example: []
   * 
   * - If RepeatType is set to \\`Weekly\\`, this parameter cannot be empty.
   *   Example: [0, 6]
   * 
   * > If RepeatType is set to \\`Weekly\\`, the elements in the array cannot be repeated.
   * 
   * - If RepeatType is set to \\`Monthly\\`, this parameter cannot be empty.
   *   Example: [1, 31]
   * 
   * > If RepeatType is set to \\`Monthly\\`, the elements in the array cannot be repeated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The end time of the recurrence. The time is in the HH:mm format. The time is on the hour or on the half hour, and is at least 30 minutes later than the start time. Example: 23:30.
   * 
   * > If RepeatType is set to \\`Permanent\\` or \\`None\\`, this parameter is empty. If RepeatType is set to \\`Daily\\`, \\`Weekly\\`, or \\`Monthly\\`, you must specify this parameter.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The start time of the recurrence. The time is in the HH:mm format. The time is on the hour or on the half hour, and is at least 30 minutes earlier than the end time. Example: 08:00.
   * 
   * > If RepeatType is set to \\`Permanent\\` or \\`None\\`, this parameter is empty. If RepeatType is set to \\`Daily\\`, \\`Weekly\\`, or \\`Monthly\\`, you must specify this parameter.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the policy to take effect. Valid values:
   * 
   * - **Permanent** (default): The policy is always in effect.
   * 
   * - **None**: The policy takes effect for a specific period of time.
   * 
   * - **Daily**: The policy takes effect daily.
   * 
   * - **Weekly**: The policy takes effect weekly.
   * 
   * - **Monthly**: The policy takes effect monthly.
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
   * - If **SourceType** is set to `net`, specify a source CIDR block.
   * 
   *   Example: 10.2.4.0/24
   * 
   * - If **SourceType** is set to `group`, specify the name of a source address book.
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
   * 
   * - **group**: source address book
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the policy validity period. The value is a UNIX timestamp. The time is on the hour or on the half hour, and is at least 30 minutes earlier than the end time.
   * 
   * > If RepeatType is set to \\`Permanent\\`, this parameter is empty. If RepeatType is set to \\`None\\`, \\`Daily\\`, \\`Weekly\\`, or \\`Monthly\\`, you must specify this parameter.
   * 
   * @example
   * 1694761200
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the VPC firewall instance. You can call the [DescribeVpcFirewallAclGroupList](https://help.aliyun.com/document_detail/159760.html) operation to query the ID.
   * 
   * - If the VPC firewall protects a CEN instance, the value of this parameter is the ID of the CEN instance.
   * 
   *   Example: cen-ervw0g12b5jbw\\*\\*\\*\\*
   * 
   * - If the VPC firewall protects an Express Connect circuit, the value of this parameter is the ID of the VPC firewall instance.
   * 
   *   Example: vfw-a42bbb7b887148c9\\*\\*\\*\\*
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

