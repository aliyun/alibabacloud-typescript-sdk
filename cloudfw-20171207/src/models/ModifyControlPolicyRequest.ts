// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic. Valid values:
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
   * > To modify an access control policy, provide the unique ID of the policy. Call the [DescribeControlPolicy](https://help.aliyun.com/document_detail/138866.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221ad84c
   */
  aclUuid?: string;
  /**
   * @remarks
   * The application type supported by the access control policy. The following application types are supported:
   * 
   * - **ANY**
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
   * > **ANY** indicates that the policy applies to all application types.
   * 
   * > Specify either ApplicationNameList or ApplicationName. You cannot leave both empty. If you specify both, ApplicationNameList takes precedence.
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
   * > Specify either ApplicationNameList or ApplicationName. You cannot leave both empty. If you specify both, ApplicationNameList takes precedence.
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
   * The destination address in the access control policy.
   * 
   * - If **DestinationType** is set to net, set **Destination** to a destination CIDR block. Example: 1.2.XX.XX/24
   * 
   * - If **DestinationType** is set to group, set **Destination** to the name of a destination address book. Example: db_group
   * 
   * - If **DestinationType** is set to domain, set **Destination** to a destination domain name. Example: \\*.aliyuncs.com
   * 
   * - If **DestinationType** is set to location, set **Destination** to a destination location code. Example: ["BJ11", "ZB"]
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
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The domain name resolution method for the access control policy. Valid values:
   * 
   * - **FQDN**: FQDN-based resolution
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
   * The end time of the policy validity period. The value is a UNIX timestamp. The time must be on the hour or half hour, and at least 30 minutes later than the start time.
   * 
   * > If RepeatType is set to Permanent, leave this parameter empty. If RepeatType is set to None, Daily, Weekly, or Monthly, you must specify this parameter.
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
   * The protocol type of the traffic in the access control policy. Valid values:
   * 
   * - **ANY**
   * 
   * - **TCP**
   * 
   * - **UDP**
   * 
   * - **ICMP**
   * 
   * > **ANY** indicates that the policy applies to all protocol types.
   * 
   * > If the traffic direction is outbound and the destination is a domain name that belongs to a threat intelligence address book or a cloud service address book, you can set this parameter to TCP or ANY. If you set this parameter to TCP, you can set the application to HTTP, HTTPS, SMTP, SMTPS, or SSL. If you set this parameter to ANY, you must set the application to ANY.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The status of the access control policy. Valid values:
   * 
   * - true: The policy is enabled.
   * 
   * - false: The policy is disabled.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The days of the week or month on which the policy is recurrent.
   * 
   * - If RepeatType is set to `Permanent`, `None`, or `Daily`, leave this parameter empty.
   *   Example: []
   * 
   * - If RepeatType is set to Weekly, you must specify this parameter.
   *   Example: [0, 6]
   * 
   * > If RepeatType is set to Weekly, the values in the array cannot be repeated.
   * 
   * - If RepeatType is set to `Monthly`, you must specify this parameter.
   *   Example: [1, 31]
   * 
   * > If RepeatType is set to Monthly, the values in the array cannot be repeated.
   */
  repeatDays?: number[];
  /**
   * @remarks
   * The end time of the recurrence. The time is in the HH:mm format and in 24-hour format. Example: 23:00.
   * 
   * > If RepeatType is set to Permanent or None, leave this parameter empty. If RepeatType is set to Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 23:30
   */
  repeatEndTime?: string;
  /**
   * @remarks
   * The start time of the recurrence. The time is in the HH:mm format and in 24-hour format. Example: 08:00.
   * 
   * > If RepeatType is set to Permanent or None, leave this parameter empty. If RepeatType is set to Daily, Weekly, or Monthly, you must specify this parameter.
   * 
   * @example
   * 08:00
   */
  repeatStartTime?: string;
  /**
   * @remarks
   * The recurrence type for the policy validity period. Valid values:
   * 
   * - **Permanent** (default): The policy is always valid.
   * 
   * - **None**: The policy is valid only once.
   * 
   * - **Daily**: The policy is valid daily.
   * 
   * - **Weekly**: The policy is valid weekly.
   * 
   * - **Monthly**: The policy is valid monthly.
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy.
   * 
   * - If **SourceType** is set to net, set **Source** to a source CIDR block. Example: 1.2.XX.XX/24
   * 
   * - If **SourceType** is set to group, set **Source** to the name of a source address book. Example: db_group
   * 
   * - If **SourceType** is set to location, set **Source** to a source location code. Example: ["BJ11", "ZB"]
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
   * 
   * - **group**: source address book
   * 
   * - **location**: source region
   * 
   * @example
   * net
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time of the policy validity period. The value is a UNIX timestamp. The time must be on the hour or half hour, and at least 30 minutes earlier than the end time.
   * 
   * > If RepeatType is set to Permanent, leave this parameter empty. If RepeatType is set to None, Daily, Weekly, or Monthly, you must specify this parameter.
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

