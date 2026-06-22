// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that is set in the access control policy. Settings the method in which traffic passes through Cloud Firewall. Valid values:
   * 
   * - **accept**: allows the access.
   * - **drop**: deny the access.
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
   * - **ANY**: all application types
   * 
   * > The valid values of ApplicationName depend on the value of the protocol type (Proto). If Proto is set to TCP, ApplicationName can be set to any of the preceding application types. If Proto is set to UDP, ICMP, or ANY, ApplicationName can be set only to ANY. You must specify either ApplicationNameList or ApplicationName. You cannot leave both of them empty.
   * 
   * @example
   * ANY
   * 
   * @deprecated
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
   * Release flow
   */
  description?: string;
  /**
   * @remarks
   * The destination port in the access control policy. Valid values:
   * 
   * - If the protocol type is ICMP, the value of DestPort is empty.
   *    
   * > If the protocol type is ICMP, access control on the destination port is not supported.
   * 
   * - If the protocol type is TCP, UDP, or ANY, and the destination port type (DestPortType) is group, the value of DestPort is empty.
   * 
   * > If the destination port type of the access control policy is set to group (port address book), you do not need to specify a destination port number. All ports that the access control policy manages are included in the port address book.
   * 
   * - If the protocol type is TCP, UDP, or ANY, and the destination port type (DestPortType) is port, the value of DestPort is the destination port number.
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
   * > If DestPortType is set to group, you must specify the destination port address book name.
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
   * - **group**: port address book.
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
   * - If DestinationType is set to net, the value of Destination is a destination CIDR block.
   *   
   *   Example: 1.2.XX.XX/24
   * 
   * - If DestinationType is set to group, the value of Destination is a destination address book name.
   * 
   *   Example: db_group
   * 
   * - If DestinationType is set to domain, the value of Destination is a destination domain name.
   * 
   *   Example: *.aliyuncs.com
   * 
   * - If DestinationType is set to location, the value of Destination is a destination region.
   * 
   *   Example: ["BJ11", "ZB"\\]
   * 
   * > If Destination is set to a destination region, for more information, see [Region codes](https://help.aliyun.com/document_detail/2854161.html).
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
   * - **net**: destination CIDR block
   * - **group**: destination address book
   * - **domain**: destination domain name
   * - **location**: destination region.
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
   * - **in**: inbound traffic
   * - **out**: outbound traffic.
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
   * * **FQDN**: FQDN-based resolution
   * * **DNS**: DNS-based dynamic resolution
   * * **FQDN_AND_DNS**: FQDN-based and DNS-based dynamic resolution.
   * 
   * @example
   * FQDN
   */
  domainResolveType?: string;
  /**
   * @remarks
   * The end time of the policy validity period for the access control policy. The value is a UNIX timestamp in seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the start time.
   * > If RepeatType is set to Permanent, this parameter is left empty. If RepeatType is set to None, Daily, Weekly, or Monthly, this parameter is required.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The IP address version supported.
   * 
   * Valid values:
   * 
   * - **4**: IPv4
   * 
   * - **6**: IPv6.
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
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The priority of the access control policy. The priority value starts from 1. A smaller value indicates a higher priority.
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
   * - **ANY**: any protocol
   * - **TCP**
   * - **UDP**
   * - **ICMP**
   * 
   * > If the traffic direction is outbound and the destination address is a threat intelligence address book or cloud service address book of the domain name type, only TCP is supported. The application type can be set to HTTP, HTTPS, SMTP, SMTPS, or SSL.
   * 
   * This parameter is required.
   * 
   * @example
   * ANY
   */
  proto?: string;
  /**
   * @remarks
   * Specifies whether to enable the access control policy. The policy is enabled by default after it is created. Valid values:
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
   * The days of the recurrence for the policy validity period of the access control policy.
   * - If RepeatType is set to `Permanent`, `None`, or `Daily`, the value of RepeatDays is an empty array.
   *   Example: []
   * - If RepeatType is set to Weekly, the value of RepeatDays must not be empty.
   *   Example: [0, 6]
   * > If RepeatType is set to Weekly, the values in RepeatDays cannot be repeated.
   * - If RepeatType is set to `Monthly`, the value of RepeatDays must not be empty.
   *   Example: [1, 31]
   * > If RepeatType is set to Monthly, the values in RepeatDays cannot be repeated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The recurrence end time of the policy validity period for the access control policy. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the recurrence start time.
   * > If RepeatType is set to Permanent or None, this parameter is left empty. If RepeatType is set to Daily, Weekly, or Monthly, this parameter is required.
   * > The time is in the HH:mm format (24-hour clock). Example: 08:00 or 23:30.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurrence start time of the policy validity period for the access control policy. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the recurrence end time.
   * > If RepeatType is set to Permanent or None, this parameter is left empty. If RepeatType is set to Daily, Weekly, or Monthly, this parameter is required.
   * > The time is in the HH:mm format (24-hour clock). Example: 08:00 or 23:30.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type of the policy validity period for the access control policy. Valid values:
   * - **Permanent** (default): The policy is always valid.
   * - **None**: The policy is valid for a specified single time period.
   * - **Daily**: The policy is valid on a daily basis.
   * - **Weekly**: The policy is valid on a weekly basis.
   * - **Monthly**: The policy is valid on a monthly basis.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Valid values:
   * 
   * - If SourceType is set to net, the value of Source is a source CIDR block.
   * 
   *   Example: 1.1.XX.XX/24
   * 
   * - If SourceType is set to group, the value of Source is a source address book name.
   * 
   *   Example: db_group
   * 
   * - If SourceType is set to location, the value of Source is a source region.
   * 
   *   Example: ["BJ11", "ZB"\\]
   * 
   * > If Source is set to a source region, for more information, see [Region codes](https://help.aliyun.com/document_detail/2854161.html).
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
   * - **location**: source region.
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the policy validity period for the access control policy. The value is a UNIX timestamp in seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the end time.
   * > If RepeatType is set to Permanent, this parameter is left empty. If RepeatType is set to None, Daily, Weekly, or Monthly, this parameter is required.
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

