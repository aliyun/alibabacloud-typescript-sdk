// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action to perform on traffic that matches the access control policy. Valid values:
   * 
   * - **accept**: allows the traffic.
   * 
   * - **drop**: denies the traffic.
   * 
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
   * The application type that the access control policy supports. Valid values:
   * 
   * - **FTP**
   * 
   * - **HTTP**
   * 
   * - **HTTPS**
   * 
   * - **Memcache**
   * 
   * - **MongoDB**
   * 
   * - **MQTT**
   * 
   * - **MySQL**
   * 
   * - **RDP**
   * 
   * - **Redis**
   * 
   * - **SMTP**
   * 
   * - **SMTPS**
   * 
   * - **SSH**
   * 
   * - **SSL_No_Cert**
   * 
   * - **SSL**
   * 
   * - **VNC**
   * 
   * - **ANY** (all application types)
   * 
   * > The available application types depend on the protocol type (\\`Proto\\`). If you set \\`Proto\\` to \\`TCP\\`, you can set \\`ApplicationName\\` to any of the listed application types. If you set \\`Proto\\` to \\`UDP\\`, \\`ICMP\\`, or \\`ANY\\`, you can set \\`ApplicationName\\` only to \\`ANY\\`. Specify either \\`ApplicationNameList\\` or \\`ApplicationName\\`.
   * 
   * @example
   * ANY
   * 
   * @deprecated
   */
  applicationName?: string;
  /**
   * @remarks
   * The application types that the access control policy supports.
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
   * - If \\`Proto\\` is \\`ICMP\\`, leave this parameter empty.
   * 
   * > If the protocol type is ICMP, you cannot control access based on the destination port.
   * 
   * - If \\`Proto\\` is \\`TCP\\`, \\`UDP\\`, or \\`ANY\\`, and \\`DestPortType\\` is \\`group\\`, leave this parameter empty.
   * 
   * > If you set \\`DestPortType\\` to \\`group\\` (port address book), you do not need to specify a destination port number. The port address book contains all the destination ports that the policy manages.
   * 
   * - If \\`Proto\\` is \\`TCP\\`, \\`UDP\\`, or \\`ANY\\`, and \\`DestPortType\\` is \\`port\\`, set this parameter to the destination port number.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book for the traffic in the access control policy.
   * 
   * > If you set \\`DestPortType\\` to \\`group\\`, you must specify this parameter.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The type of the destination port for the traffic in the access control policy.
   * 
   * Valid values:
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
   * Valid values:
   * 
   * - If \\`DestinationType\\` is \\`net\\`, set this parameter to the destination CIDR block.
   * 
   *   Example: 1.2.XX.XX/24
   * 
   * - If \\`DestinationType\\` is \\`group\\`, set this parameter to the name of the destination address book.
   * 
   *   Example: db_group
   * 
   * - If \\`DestinationType\\` is \\`domain\\`, set this parameter to the destination domain name.
   * 
   *   Example: \\*.aliyuncs.com
   * 
   * - If \\`DestinationType\\` is \\`location\\`, set this parameter to the destination region.
   * 
   *   Example: ["BJ11", "ZB"]
   * 
   * > For more information about region codes, see [Region codes](https://help.aliyun.com/document_detail/2854161.html).
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
   * 
   * - **group**: destination address book
   * 
   * - **domain**: destination domain name
   * 
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
   * The direction of the traffic to which the access control policy applies. Valid values:
   * 
   * - **in**: inbound traffic
   * 
   * - **out**: outbound traffic
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The domain name resolution method for the access control policy. Valid values:
   * 
   * - **FQDN**: based on FQDN
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
   * The time when the policy becomes ineffective. This is a UNIX timestamp. The time must be on the hour or half-hour, and at least 30 minutes after the start time.
   * 
   * > If \\`RepeatType\\` is \\`Permanent\\`, leave this parameter empty. This parameter is required if \\`RepeatType\\` is \\`None\\`, \\`Daily\\`, \\`Weekly\\`, or \\`Monthly\\`.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The IP version supported.
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
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The priority of the access control policy. The priority starts from 1. A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  newOrder?: string;
  /**
   * @remarks
   * The protocol type of the traffic in the access control policy. Valid values:
   * 
   * - **ANY** (any protocol)
   * 
   * - **TCP**
   * 
   * - **UDP**
   * 
   * - **ICMP**
   * 
   * > If the traffic direction is \\`out\\` and the destination is a domain-based threat intelligence or cloud service address book, you can set the protocol only to \\`TCP\\`. The supported applications are HTTP, HTTPS, SMTP, SMTPS, and SSL.
   * 
   * This parameter is required.
   * 
   * @example
   * ANY
   */
  proto?: string;
  /**
   * @remarks
   * The status of the access control policy. By default, the policy is enabled after it is created. Valid values:
   * 
   * - **true**: enables the access control policy
   * 
   * - **false**: disables the access control policy
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of the week or month when the policy is active.
   * 
   * - If \\`RepeatType\\` is \\`Permanent\\`, \\`None\\`, or \\`Daily\\`, leave this parameter empty.
   *   Example: []
   * 
   * - This parameter is required if \\`RepeatType\\` is \\`Weekly\\`.
   *   Example: [0, 6]
   * 
   * > If you set \\`RepeatType\\` to \\`Weekly\\`, the values in \\`RepeatDays\\` cannot be duplicates.
   * 
   * - This parameter is required if \\`RepeatType\\` is \\`Monthly\\`.
   *   Example: [1, 31]
   * 
   * > If you set \\`RepeatType\\` to \\`Monthly\\`, the values in \\`RepeatDays\\` cannot be duplicates.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The end time of the recurrence. Example: 23:30. The time must be on the hour or half-hour, and at least 30 minutes after the start time.
   * 
   * > If \\`RepeatType\\` is \\`Permanent\\` or \\`None\\`, leave this parameter empty. This parameter is required if \\`RepeatType\\` is \\`Daily\\`, \\`Weekly\\`, or \\`Monthly\\`.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The start time of the recurrence. Example: 08:00. The time must be on the hour or half-hour, and at least 30 minutes before the end time.
   * 
   * > If \\`RepeatType\\` is \\`Permanent\\` or \\`None\\`, leave this parameter empty. This parameter is required if \\`RepeatType\\` is \\`Daily\\`, \\`Weekly\\`, or \\`Monthly\\`.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the policy\\"s effective period. Valid values:
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
   * The source address in the access control policy. Valid values:
   * 
   * - If \\`SourceType\\` is \\`net\\`, set this parameter to the source CIDR block.
   * 
   *   Example: 1.1.XX.XX/24
   * 
   * - If \\`SourceType\\` is \\`group\\`, set this parameter to the name of the source address book.
   * 
   *   Example: db_group
   * 
   * - If \\`SourceType\\` is \\`location\\`, set this parameter to the source region.
   * 
   *   Example: ["BJ11", "ZB"]
   * 
   * > For more information about region codes, see [Region codes](https://help.aliyun.com/document_detail/2854161.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
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
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * - **net**: source CIDR block
   * 
   * - **group**: source address book
   * 
   * - **location**: source region
   * 
   * This parameter is required.
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The time when the policy becomes effective. This is a UNIX timestamp. The time must be on the hour or half-hour, and at least 30 minutes before the end time.
   * 
   * > If \\`RepeatType\\` is \\`Permanent\\`, leave this parameter empty. This parameter is required if \\`RepeatType\\` is \\`None\\`, \\`Daily\\`, \\`Weekly\\`, or \\`Monthly\\`.
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

