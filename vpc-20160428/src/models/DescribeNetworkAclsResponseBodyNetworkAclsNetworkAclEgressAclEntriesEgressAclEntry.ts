// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclEgressAclEntriesEgressAclEntry extends $dara.Model {
  /**
   * @remarks
   * The description of the outbound rule.
   * 
   * @example
   * This is EgressAclEntries.
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrIp?: string;
  /**
   * @remarks
   * The type of the inbound rule.
   * 
   * - **custom**
   * 
   * - **system**
   * 
   * @example
   * custom
   */
  entryType?: string;
  /**
   * @remarks
   * The IP version. 
   * 
   * *   **IPv4**
   * *   **IPv6**
   * 
   * @example
   * IPV4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The ID of the outbound rule.
   * 
   * @example
   * nae-a2d447uw4tillfvgb****
   */
  networkAclEntryId?: string;
  /**
   * @remarks
   * The name of the outbound rule.
   * 
   * @example
   * acl-2
   */
  networkAclEntryName?: string;
  /**
   * @remarks
   * The action to be performed on network traffic that matches the rule. Valid values:
   * 
   * *   **accept**
   * *   **drop**
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The destination port range of the outbound traffic.
   * 
   * *   If the **protocol** of the outbound rule is set to **all**, **icmp**, or **gre**, the port range is -1/-1, which specified all ports.
   * *   If the **protocol** of the outbound rule is set to **tcp** or **udp**, set the port range in the following format: **1/200** or **80/80**, which specifies port 1 to port 200 or port 80. Valid values for a port: **1** to **65535**.
   * 
   * @example
   * -1/-1
   */
  port?: string;
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * *   **icmp**
   * *   **gre**
   * *   **tcp**
   * *   **udp**
   * *   **all**
   * 
   * @example
   * all
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationCidrIp: 'DestinationCidrIp',
      entryType: 'EntryType',
      ipVersion: 'IpVersion',
      networkAclEntryId: 'NetworkAclEntryId',
      networkAclEntryName: 'NetworkAclEntryName',
      policy: 'Policy',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationCidrIp: 'string',
      entryType: 'string',
      ipVersion: 'string',
      networkAclEntryId: 'string',
      networkAclEntryName: 'string',
      policy: 'string',
      port: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

