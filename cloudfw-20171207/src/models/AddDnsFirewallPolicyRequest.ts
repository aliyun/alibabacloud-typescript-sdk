// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDnsFirewallPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the action to take on traffic that matches the access control policy. Valid values:
   * 
   * - **accept**: Allows the traffic.
   * 
   * - **drop**: Denies the traffic.
   * 
   * - **log**: Monitors the traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * log
   */
  aclAction?: string;
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination address in the access control policy.
   * 
   * - When **DestinationType** is `net`, this parameter specifies the destination CIDR block. Example: `1.2.3.4/24`.
   * 
   * - When **DestinationType** is `group`, this parameter specifies the name of the destination address book. Example: `db_group`.
   * 
   * - When **DestinationType** is `domain`, this parameter specifies the destination domain name. Example: `*.aliyuncs.com`.
   * 
   * - When **DestinationType** is `location`, this parameter specifies the destination region. For more information about location codes, see the documentation. Example: `["BJ11", "ZB"]`.
   * 
   * This parameter is required.
   * 
   * @example
   * db_group
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
   * This parameter is required.
   * 
   * @example
   * domain
   */
  destinationType?: string;
  /**
   * @remarks
   * The traffic direction for the access control policy. Valid values:
   * 
   * - **in**: inbound traffic
   * 
   * - **out**: outbound traffic
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The IP version supported by the policy.
   * 
   * Valid values:
   * 
   * - **4**: IPv4
   * 
   * - **6**: IPv6
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:<br>-**zh**: Chinese<br>-**en**: English<br><br>
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The priority of the access control policy. A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * Specifies whether to enable the access control policy. Valid values:
   * 
   * - **true**: Enables the access control policy.
   * 
   * - **false**: Disables the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The source address in the access control policy.
   * 
   * - When **SourceType** is `net`, this parameter specifies the source CIDR block. Example: `10.2.XX.XX/24`.
   * 
   * - When **SourceType** is `group`, this parameter specifies the name of the source address book. Example: `db_group`.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.223/32
   */
  source?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 140.205.118.97
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
   * This parameter is required.
   * 
   * @example
   * net
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      description: 'Description',
      destination: 'Destination',
      destinationType: 'DestinationType',
      direction: 'Direction',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      priority: 'Priority',
      release: 'Release',
      source: 'Source',
      sourceIp: 'SourceIp',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      description: 'string',
      destination: 'string',
      destinationType: 'string',
      direction: 'string',
      ipVersion: 'string',
      lang: 'string',
      priority: 'string',
      release: 'string',
      source: 'string',
      sourceIp: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

