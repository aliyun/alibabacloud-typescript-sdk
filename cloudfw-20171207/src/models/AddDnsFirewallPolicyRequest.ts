// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDnsFirewallPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on traffic in the access control policy. Valid values:
   * - **accept**: Allows the traffic.
   * - **drop**: Denies the traffic.
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
   * Allow a specified domain name
   */
  description?: string;
  /**
   * @remarks
   * The destination address in the access control policy.
   * 
   * - If **DestinationType** is set to net, **Destination** is the destination CIDR block. Example: 1.2.3.4/24.
   * - If **DestinationType** is set to group, **Destination** is the name of the destination address book. Example: db_group.
   * - If **DestinationType** is set to domain, **Destination** is the destination domain name. Example: *.aliyuncs.com.
   * - If **DestinationType** is set to location, **Destination** is the destination area (for specific area positional encoding, see the following sections). Example: ["BJ11", "ZB"].
   * 
   * This parameter is required.
   * 
   * @example
   * db_group
   */
  destination?: string;
  /**
   * @remarks
   * The type of the destination address in the DNS firewall access control policy. Only group (destination address book) and domain (destination domain name) are supported. net and CIDR blocks are not supported by this operation.
   * 
   * This parameter is required.
   * 
   * @example
   * domain
   */
  destinationType?: string;
  /**
   * @remarks
   * The traffic direction of the DNS firewall access control policy.
   * 
   * > This parameter is not verified by the backend. When you create or modify a DNS firewall policy, the direction is always stored as **out** (outbound). Passing **in** neither returns an error nor takes effect. DNS firewalls only support outbound policies.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The IP version. Valid values:
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
   * The language of the request and response. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The policy priority of the new DNS firewall policy. Valid values: 1 to 20000. A smaller value indicates a higher policy priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * Specifies whether to enable the access control policy. By default, the policy is enabled after it is created. Valid values:
   * 
   * - **true**: Enables the access control policy.
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
   * The source address in the access control policy. Valid values:
   * 
   * - If **SourceType** is set to `net`, Source is the source CIDR block. Example: 10.2.XX.XX/24.
   * 
   * - If **SourceType** is set to `group`, Source is the name of the source address book. Example: db_group.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.223/32
   */
  source?: string;
  /**
   * @remarks
   * The source IP address of the requester.
   * 
   * @example
   * 140.205.118.97
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of the source address in the access control policy. Valid values:
   * 
   * - **net**: Source CIDR block
   * 
   * - **group**: Source address book
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

