// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclIngressAclEntriesIngressAclEntry extends $dara.Model {
  /**
   * @remarks
   * The description of the inbound rule.
   * 
   * @example
   * This is IngressAclEntries.
   */
  description?: string;
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
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The ID of the inbound rule.
   * 
   * @example
   * nae-a2dk86arlydmezasw****
   */
  networkAclEntryId?: string;
  /**
   * @remarks
   * The name of the inbound rule.
   * 
   * @example
   * acl-3
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
   * The destination port range of the inbound traffic.
   * 
   * *   If the **protocol** of the inbound rule is set to **all**, **icmp**, or **gre**, the port range is -1/-1, which specifies all ports.
   * *   If the **protocol** of the inbound rule is set to **tcp** or **udp**, set the port range in the following format: **1/200** or **80/80**, which specifies port 1 to port 200 or port 80. Valid ports: **1** to **65535**.
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
  /**
   * @remarks
   * The source CIDR block.
   * 
   * @example
   * 10.0.0.0/24
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      entryType: 'EntryType',
      ipVersion: 'IpVersion',
      networkAclEntryId: 'NetworkAclEntryId',
      networkAclEntryName: 'NetworkAclEntryName',
      policy: 'Policy',
      port: 'Port',
      protocol: 'Protocol',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      entryType: 'string',
      ipVersion: 'string',
      networkAclEntryId: 'string',
      networkAclEntryName: 'string',
      policy: 'string',
      port: 'string',
      protocol: 'string',
      sourceCidrIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

