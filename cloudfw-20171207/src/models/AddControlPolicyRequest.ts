// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on traffic based on the access control policy. Valid values:
   * 
   * - **accept**: allows the traffic.
   * - **drop**: denies the traffic.
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
   * The application type supported by the access control policy. Valid values:
   * - **FTP**
   * - **HTTP**
   * - **HTTPS**
   * - **Memcache**
   * - **MongoDB**
   * - **MQTT**
   * - **MySQL**
   * - **RDP**
   * - **Redis**
   * - **SMTP**
   * - **SMTPS**
   * - **SSH**
   * - **SSL_No_Cert**
   * - **SSL**
   * - **VNC**
   * - **ANY** (all application types)
   * 
   * > The supported application types depend on the protocol type specified by the Proto parameter. If Proto is set to TCP, ApplicationName can be set to any of the preceding application types. If Proto is set to UDP, ICMP, or ANY, ApplicationName can only be set to ANY. You must specify either ApplicationNameList or ApplicationName. You cannot leave both parameters empty.
   * 
   * @example
   * ANY
   * 
   * @deprecated
   */
  applicationName?: string;
  /**
   * @remarks
   * The list of application types supported by the access control policy.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ddadxefexxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * Release flow
   */
  description?: string;
  /**
   * @remarks
   * The destination port for traffic in the access control policy. Valid values:
   * - If the protocol type is ICMP, leave DestPort empty.
   * > If the protocol type is ICMP, access control on destination ports is not supported.
   * - If the protocol type is TCP, UDP, or ANY, and the destination port type (DestPortType) is group, leave DestPort empty.
   * > If you set the destination port type to group (destination port address book), you do not need to specify a destination port number. All ports managed by the access control policy are included in the destination port address book.
   * - If the protocol type is TCP, UDP, or ANY, and the destination port type (DestPortType) is port, set DestPort to the destination port number.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book in the access control policy.
   * 
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
   * Valid values:
   * - If DestinationType is set to net, Destination specifies the destination CIDR block.
   *   
   *   Example: 1.2.XX.XX/24
   * 
   * - If DestinationType is set to group, Destination specifies the name of the destination address book.
   * 
   *   Example: db_group
   * 
   * - If DestinationType is set to domain, Destination specifies the destination domain name.
   * 
   *   Example: *.aliyuncs.com
   * 
   * - If DestinationType is set to location, Destination specifies the destination location.
   * 
   *   Example: ["BJ11", "ZB"\]
   * 
   * > If Destination specifies a destination location, for more information, see [Location codes](https://help.aliyun.com/document_detail/2854161.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  destination?: string;
  /**
   * @remarks
   * The destination address type in the access control policy. Valid values:
   * - **net**: destination CIDR block
   * - **group**: destination address book
   * - **domain**: destination domain name
   * - **location**: destination region
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @remarks
   * The traffic direction of the access control policy. Valid values:
   * 
   * - **in**: Inbound traffic.
   * - **out**: Outbound traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
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
   * Specifies whether to perform a dry run.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The end time of the Policy Validity Period for the access control policy. The time is expressed in the UNIX timestamp in seconds format. The time must be on the hour or half hour, and must be at least 30 minutes later than the start time.
   * > When RepeatType is set to `Permanent`, EndTime is empty. When RepeatType is set to `None`, `Daily`, `Weekly`, or `Monthly`, EndTime is required, and you must specify the end time.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The IP address version.
   * 
   * Valid values:
   * 
   * - **4**: IPv4
   * 
   * - **6**: IPv6
   * 
   * @example
   * 6
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The priority of the access control policy. The priority value starts from 1 and increases sequentially. A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  newOrder?: string;
  /**
   * @remarks
   * The protocol type of traffic in the access control policy. Valid values:
   * 
   * - **ANY**: all protocols
   * - **TCP**
   * - **UDP**
   * - **ICMP**
   * 
   * > If the traffic direction is outbound and the destination address is a domain name in a threat intelligence address book or a cloud service address book, you can only set Proto to TCP. In this case, you can set the application type to HTTP, HTTPS, SMTP, SMTPS, or SSL.
   * 
   * This parameter is required.
   * 
   * @example
   * ANY
   */
  proto?: string;
  /**
   * @remarks
   * Specifies whether to enable the access control policy. By default, the policy is enabled after it is created. Valid values:
   * - **true**: enables the access control policy.
   * 
   * - **false**: does not enable the access control policy.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The set of repeat days for the Policy Validity Period of the access control policy.
   * - When RepeatType is set to `Permanent`, `None`, or `Daily`, RepeatDays is an empty set. Example: []
   * - When RepeatType is set to `Weekly`, RepeatDays cannot be empty. Example: [0, 6]
   * > When RepeatType is set to Weekly, the values in RepeatDays must be unique.
   * - When RepeatType is set to `Monthly`, RepeatDays cannot be empty. Example: [1, 31]
   * > When RepeatType is set to Monthly, the values in RepeatDays must be unique.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The repeat end time for the Policy Validity Period of the access control policy. Example: 23:30. The time must be on the hour or half hour, and must be at least 30 minutes later than the repeat start time.
   * > When RepeatType is set to `Permanent` or `None`, RepeatEndTime is empty. When RepeatType is set to `Daily`, `Weekly`, or `Monthly`, RepeatEndTime is required, and you must specify the repeat end time.
   * > The time format is HH:mm (24-hour clock). Examples: 08:00 and 23:30.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The repeat start time for the Policy Validity Period of the access control policy. Example: 08:00. The time must be on the hour or half hour, and must be at least 30 minutes earlier than the repeat end time.
   * > When RepeatType is set to `Permanent` or `None`, RepeatStartTime is empty. When RepeatType is set to `Daily`, `Weekly`, or `Monthly`, RepeatStartTime is required, and you must specify the repeat start time.
   * > The time format is HH:mm (24-hour clock). Examples: 08:00 and 23:30.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The repeat type of the Policy Validity Period for the access control policy. Valid values:
   * - **Permanent** (default): always
   * - **None**: a single specified time
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
   * The source address in the access control policy. Valid values:
   * 
   * - If SourceType is set to net, set Source to the source CIDR block.
   * 
   *   Example: 1.1.XX.XX/24
   * 
   * - If SourceType is set to group, set Source to the name of the source address book.
   * 
   *   Example: db_group
   * 
   * - If SourceType is set to location, set Source to the source region.
   * 
   *   Example: ["BJ11", "ZB"\]
   * 
   * > For more information about source regions, see [Region codes](https://help.aliyun.com/document_detail/2854161.html).
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
   * - **net**: source CIDR block
   * - **group**: source address book
   * - **location**: source location
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the Policy Validity Period for the access control policy. The time is expressed in the UNIX timestamp in seconds format. The time must be on the hour or half hour, and must be at least 30 minutes earlier than the end time.
   * > When RepeatType is set to `Permanent`, StartTime is empty. When RepeatType is set to `None`, `Daily`, `Weekly`, or `Monthly`, StartTime is required, and you must specify the start time.
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
      clientToken: 'ClientToken',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationType: 'DestinationType',
      direction: 'Direction',
      domainResolveType: 'DomainResolveType',
      dryRun: 'DryRun',
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
      clientToken: 'string',
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortType: 'string',
      destination: 'string',
      destinationType: 'string',
      direction: 'string',
      domainResolveType: 'string',
      dryRun: 'boolean',
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

