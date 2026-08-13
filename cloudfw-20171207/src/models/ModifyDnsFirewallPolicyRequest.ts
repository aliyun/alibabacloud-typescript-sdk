// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDnsFirewallPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that the access control policy performs on traffic in Cloud Firewall. Valid values:
   * - **accept**: allows the traffic.
   * - **drop**: deny the traffic.
   * - **log**: monitors the traffic.
   * 
   * @example
   * log
   */
  aclAction?: string;
  /**
   * @remarks
   * The unique ID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df22****
   */
  aclUuid?: string;
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
   * The destination address in the access control policy.
   * 
   * - If **DestinationType** is set to net, **Destination** is a destination CIDR block. Example: 1.2.3.4/24.
   * - If **DestinationType** is set to group, **Destination** is the name of a destination address book. Example: db_group.
   * - If **DestinationType** is set to domain, **Destination** is a destination domain name. Example: *.aliyuncs.com.
   * - If **DestinationType** is set to location, **Destination** is a destination area. For more information about area positional encoding, see the following sections. Example: ["BJ11", "ZB"\\].
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
   * - **group**: destination address book
   * - **domain**: destination domain name
   * 
   * @example
   * net
   */
  destinationType?: string;
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
   * The policy priority of the access control policy before the modification.
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
   * - **false**: disables the access control policy.
   * 
   * @example
   * true
   */
  release?: string;
  source?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
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
   * @example
   * net
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      description: 'Description',
      destination: 'Destination',
      destinationType: 'DestinationType',
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
      aclUuid: 'string',
      description: 'string',
      destination: 'string',
      destinationType: 'string',
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

