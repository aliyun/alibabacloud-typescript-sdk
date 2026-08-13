// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that the access control policy performs on the traffic that passes through the firewall. Valid values:
   * - **accept**: allows access.
   * - **drop**: deny access.
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
   * > To modify an access control policy, you must provide the unique ID of the policy. You can call the [DescribeControlPolicy](https://help.aliyun.com/document_detail/138866.html) operation to obtain the ID.
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
   * > **ANY** indicates that the policy applies to all types of applications.
   * 
   * > You must specify either ApplicationNameList or ApplicationName. You cannot leave both parameters empty. If you specify both parameters, the value of ApplicationNameList takes precedence.
   * 
   * @example
   * HTTP
   * 
   * @deprecated
   */
  applicationName?: string;
  /**
   * @remarks
   * The application name list.
   * 
   * > You must specify either ApplicationNameList or ApplicationName. You cannot leave both parameters empty. If you specify both parameters, the value of ApplicationNameList takes precedence.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The idempotence token.
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
   * - If **DestinationType** is set to net, **Destination** is a destination CIDR block. Example: 1.2.XX.XX/24.
   * - If **DestinationType** is set to group, **Destination** is a destination address book name. Example: db_group.
   * - If **DestinationType** is set to domain, **Destination** is a destination domain name. Example: *.aliyuncs.com.
   * - If **DestinationType** is set to location, **Destination** is a destination area. For specific area positional encoding, see the subsequent sections. Example: ["BJ11", "ZB"\\].
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
   * - **in**: inbound traffic access control
   * - **out**: outbound traffic access control
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The domain name resolution method of the access control policy. Valid values:
   * 
   * * **FQDN**: FQDN-based
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
   * The end time of the Policy Validity Period for the access control policy. The value is a UNIX timestamp in seconds format. The time must be on the hour or half hour and must be at least 30 minutes later than the start time. Settings for the access control policy validity period.
   * > If RepeatType is set to Permanent, this parameter is left empty. If RepeatType is set to None, Daily, Weekly, or Monthly, this parameter is required.
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
   * The security protocol type in the access control policy. Valid values:
   * 
   * - **ANY**
   * - **TCP**
   * - **UDP**
   * - **ICMP**
   * 
   * > **ANY** indicates that the policy applies to all protocol types.
   * 
   * > If the traffic direction is outbound and the destination address is a threat intelligence address book or cloud service address book of the domain type, you can configure only the TCP or ANY protocol. If you select TCP, the application can be HTTP, HTTPS, SMTP, SMTPS, or SSL. If you select ANY, the application can only be ANY.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The enabling status of the access control policy. Valid values:
   * 
   * - true: The policy is enabled.
   * - false: The policy is in shutdown state.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of a week or of a month on which the access control policy takes effect. Settings for the Policy Validity Period recurrence days.
   * - If RepeatType is set to `Permanent`, `None`, or `Daily`, RepeatDays is an empty collection.
   *   Example: []
   * - If RepeatType is set to Weekly, RepeatDays cannot be empty.
   *   Example: [0, 6]
   * > If RepeatType is set to Weekly, the values in RepeatDays cannot be repeated.
   * - If RepeatType is set to `Monthly`, RepeatDays cannot be empty.
   *   Example: [1, 31]
   * > If RepeatType is set to Monthly, the values in RepeatDays cannot be repeated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The recurrence end time of the policy validity period. The time is in the HH:mm format and uses a 24-hour clock. Example: 23:00.
   * > If RepeatType is set to Permanent or None, this parameter is left empty. If RepeatType is set to Daily, Weekly, or Monthly, this parameter is required.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The recurrence start time of the policy validity period. The time is in the HH:mm format and uses a 24-hour clock. Example: 08:00.
   * > If RepeatType is set to Permanent or None, this parameter is left empty. If RepeatType is set to Daily, Weekly, or Monthly, this parameter is required.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the policy validity period of the access control policy. Valid values:
   * - **Permanent** (default): always
   * - **None**: one-time
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
   * - If **SourceType** is set to net, **Source** is a source CIDR block. Example: 1.2.XX.XX/24.
   * - If **SourceType** is set to group, **Source** is a source address book name. Example: db_group.
   * - If **SourceType** is set to location, **Source** is a source area. For specific area positional encoding, see the subsequent sections. Example: ["BJ11", "ZB"\\].
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
   * The start time of the Policy Validity Period for the access control policy. The value is a UNIX timestamp in seconds format. The time must be on the hour or half hour and must be at least 30 minutes earlier than the end time. Settings for the access control policy validity period.
   * > If RepeatType is set to Permanent, this parameter is left empty. If RepeatType is set to None, Daily, Weekly, or Monthly, this parameter is required.
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

