// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDnsFirewallPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The method that is used by the access control policy to control traffic that passes through Cloud Firewall. Valid values:
   * - **accept**: allows the traffic.
   * - **drop**: deny the traffic.
   * - **log**: monitors the traffic.
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
   * - If **DestinationType** is set to net, **Destination** is a destination CIDR block. Example: 1.2.3.4/24.
   * - If **DestinationType** is set to group, **Destination** is the name of a destination address book. Example: db_group.
   * - If **DestinationType** is set to domain, **Destination** is a destination domain name. Example: *.aliyuncs.com.
   * - If **DestinationType** is set to location, **Destination** is a destination area (for specific area positional encoding, see the following sections). Example: ["BJ11", "ZB"\\].
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
   * - **group**: destination address book
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
   * The direction of the DNS firewall policy. The backend fixes this value to out (internal-to-external). Set Direction to out.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The IP address version supported.
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
   * The priority of the policy. A smaller value indicates a higher priority. Valid values: 1 to 20000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * Specifies whether to enable the access control policy. The policy is enabled by default after it is created. Valid values:
   * 
   * - **true**: enables the access control policy.
   * - **false**: does not enable the access control policy.
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
   * - If **SourceType** is set to `net`, Source is a source CIDR block. Example: 10.2.XX.XX/24.
   * 
   * - If **SourceType** is set to `group`, Source is the name of a source address book. Example: db_group.
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

