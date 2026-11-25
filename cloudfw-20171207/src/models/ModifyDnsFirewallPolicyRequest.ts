// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDnsFirewallPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on traffic that matches the access control policy. Valid values:
   * - **accept**: Allows the traffic.
   * - **drop**: Denies the traffic.
   * - **log**: Monitors the traffic.
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
   * - If **DestinationType** is set to net, **Destination** specifies the destination CIDR block. Example: 1.2.3.4/24.
   * - If **DestinationType** is set to group, **Destination** specifies the name of the destination address book. Example: db_group.
   * - If **DestinationType** is set to domain, **Destination** specifies the destination domain name. Example: *.aliyuncs.com.
   * - If **DestinationType** is set to location, **Destination** specifies the destination area (for specific area positional encoding, see below). Example: ["BJ11", "ZB"\].
   * 
   * @example
   * db_group
   */
  destination?: string;
  /**
   * @remarks
   * The type of the destination address in the access control policy. Valid values:
   * 
   * - **net**: a destination CIDR block.
   * - **group**: a destination address book.
   * - **domain**: a destination domain name.
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
   * Policy priority of the access control policy before policy priority is modified.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * Specifies whether the access control policy is enabled. By default, the policy is enabled after it is created. Valid values:
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
   * The type of the source address in the access control policy. Valid values:
   * 
   * - **net**: a source CIDR block.
   * 
   * - **group**: a source address book.
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

