// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyControlPolicyRequest extends $dara.Model {
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
   * 
   * @deprecated
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

