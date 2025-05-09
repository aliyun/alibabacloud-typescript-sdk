// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic. Valid values:
   * 
   * *   **accept**: allows the traffic.
   * *   **drop**: denies the traffic.
   * *   **log**: monitors the traffic.
   * 
   * >  If you do not specify this parameter, access control policies of all action types are queried.
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The unique ID of the access control policy.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221a****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The description of the access control policy. Fuzzy match is supported.
   * 
   * >  If you do not specify this parameter, access control policies that have descriptions are queried.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Fuzzy match is supported. The value of this parameter varies based on the value of the DestinationType parameter.
   * 
   * *   If you set DestinationType to `net`, the value of Destination is a CIDR block. Example: 10.0.3.0/24.
   * *   If you set DestinationType to `domain`, the value of Destination is a domain name. Example: aliyun.
   * *   If you set DestinationType to `group`, the value of Destination is the name of an address book. Example: db_group.
   * *   If you set DestinationType to `location`, the value of Destination is the name of a location. For more information about location codes, see AddControlPolicy. Example: ["BJ11", "ZB"].
   * 
   * >  If you do not specify this parameter, access control policies of all destination address types are queried.
   * 
   * @example
   * 192.0.XX.XX
   */
  destination?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policies apply. Valid values:
   * 
   * *   **in**: inbound.
   * *   **out**: outbound.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The IP version of the address in the access control policy. Valid values:
   * 
   * *   **4**: IPv4 (default)
   * *   **6**: IPv6
   * 
   * @example
   * 6
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
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
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The type of the protocol in the access control policy. Valid values:
   * 
   * * **TCP**
   * * **UDP**
   * * **ICMP**
   * * **ANY**: all types of protocols
   * 
   * >  If you do not specify this parameter, access control policies of all protocol types are queried.
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * Specifies whether the access control policy is enabled. By default, an access control policy is enabled after it is created. Valid values:
   * 
   * *   **true**: The access control policy is enabled.
   * *   **false**: The access control policy is disabled.
   * 
   * @example
   * true
   */
  release?: string;
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
   * The source address in the access control policy. Fuzzy match is supported. The value of this parameter depends on the value of the SourceType parameter.
   * 
   * *   If SourceType is set to `net`, the value of Source must be a CIDR block. Example: 192.0.XX.XX/24.
   * *   If SourceType is set to `group`, the value of Source must be the name of an address book. Example: db_group. If the db_group address book does not contain addresses, all source addresses are queried.
   * *   If SourceType is set to `location`, the value of Source must be a location. Example: beijing.
   * 
   * >  If you do not specify this parameter, access control policies of all source address types are queried.
   * 
   * @example
   * 192.0.XX.XX
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      currentPage: 'CurrentPage',
      description: 'Description',
      destination: 'Destination',
      direction: 'Direction',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      pageSize: 'PageSize',
      proto: 'Proto',
      release: 'Release',
      repeatType: 'RepeatType',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      currentPage: 'string',
      description: 'string',
      destination: 'string',
      direction: 'string',
      ipVersion: 'string',
      lang: 'string',
      pageSize: 'string',
      proto: 'string',
      release: 'string',
      repeatType: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

