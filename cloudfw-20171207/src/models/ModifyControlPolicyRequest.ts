// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on traffic in the access control policy. Valid values:
   * - **accept**: Allows the traffic.
   * - **drop**: Denies the traffic.
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
   * > To modify an access control policy, you must provide its UUID. You can call the [DescribeControlPolicy](https://help.aliyun.com/document_detail/138866.html) operation to obtain the UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221ad84c
   */
  aclUuid?: string;
  /**
   * @remarks
   * The application type supported by the access control policy. Valid values:
   * 
   * - **ANY**
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
   * 
   * > **ANY** indicates that the policy applies to all application types.
   * 
   * > You must specify either ApplicationNameList or ApplicationName. They cannot be both empty. If both are specified, ApplicationNameList takes precedence.
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
   * 
   * > You must specify either ApplicationNameList or ApplicationName. They cannot be both empty. If both are specified, ApplicationNameList takes precedence.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * ddadxefexxxx
   */
  clientToken?: string;
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
   * The destination port for traffic in the access control policy.
   * 
   * @example
   * 80
   */
  destPort?: string;
  /**
   * @remarks
   * The name of the destination port address book for traffic in the access control policy.
   * 
   * @example
   * my_port_group
   */
  destPortGroup?: string;
  /**
   * @remarks
   * The type of the destination port for traffic in the access control policy. Valid values:
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
   * - If **DestinationType** is set to net, **Destination** is the destination CIDR block. Example: 1.2.XX.XX/24.
   * - If **DestinationType** is set to group, **Destination** is the name of the destination address book. Example: db_group.
   * - If **DestinationType** is set to domain, **Destination** is the destination domain name. Example: *.aliyuncs.com.
   * - If **DestinationType** is set to location, **Destination** is the destination area (for the positional encoding of specific areas, see below). Example: ["BJ11", "ZB"\].
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
   * - **location**: destination region
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
   * - **out**: outbound traffic
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The domain name resolution mode of the access control policy. Valid values:
   * 
   * * **FQDN**: FQDN
   * * **DNS**: DNS-based dynamic resolution
   * * **FQDN_AND_DNS**: FQDN and DNS-based dynamic resolution
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
   * The end time of the Policy Validity Period for the access control policy. The value is expressed in the format of a UNIX timestamp in seconds. The time must be on the hour or half-hour, and must be at least 30 minutes later than the start time.
   * > When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, or Monthly, EndTime must have a value, and you need to configure the end time Settings.
   * 
   * @example
   * 1694764800
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The protocol type of traffic in the access control policy. Valid values:
   * 
   * - **ANY**
   * - **TCP**
   * - **UDP**
   * - **ICMP**
   * 
   * > **ANY** indicates that the policy applies to all protocol types.
   * 
   * > If the traffic direction is outbound and the destination address is a threat intelligence address book or cloud service address book of the domain name type, you can set this parameter to TCP or ANY. If you select TCP, you can set the application to HTTP, HTTPS, SMTP, SMTPS, or SSL. If you select ANY, you can set the application to ANY.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The status of the access control policy. Valid values:
   * 
   * - true: enabling status.
   * - false: shutdown.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The collection of recurrence days for the Policy Validity Period of the access control policy.
   * - If RepeatType is set to `Permanent`, `None`, or `Daily`, RepeatDays is an empty set. Example: [].
   * - If RepeatType is set to Weekly, RepeatDays cannot be empty. Example: [0, 6].
   * > When the RepeatType Settings is Weekly, the values in RepeatDays cannot be duplicate.
   * - If RepeatType is set to `Monthly`, RepeatDays cannot be empty. Example: [1, 31].
   * > When the RepeatType Settings is Monthly, the values in RepeatDays cannot be duplicate.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The recurrence end time when the policy takes effect. Use the 24-hour time format HH:mm, such as 23:00.
   * > If RepeatType is set to Permanent or None, RepeatEndTime is empty. If RepeatType is set to Daily, Weekly, or Monthly, RepeatEndTime must be specified.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurrence start time when the policy takes effect. Use the 24-hour time format HH:mm, such as 08:00.
   * > If RepeatType is set to Permanent or None, RepeatStartTime is empty. If RepeatType is set to Daily, Weekly, or Monthly, RepeatStartTime must be specified.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type of the Policy Validity Period for the access control policy. Valid values:
   * - **Permanent** (default): always
   * - **None**: single occurrence
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
   * - If **SourceType** is set to net, **Source** is the source CIDR block. Example: 1.2.XX.XX/24.
   * - If **SourceType** is set to group, **Source** is the name of the source address book. Example: db_group.
   * - If **SourceType** is set to location, **Source** is the source area (for the positional encoding of specific areas, see below). Example: ["BJ11", "ZB"\].
   * 
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * - **net**: source CIDR block
   * - **group**: source address book
   * - **location**: source region
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the Policy Validity Period for the access control policy. The value is expressed in the format of a UNIX timestamp in seconds. The time must be on the hour or half-hour, and must be at least 30 minutes earlier than the end time.
   * > When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, or Monthly, StartTime must have a value, and you need to configure the start time Settings.
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

