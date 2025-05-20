// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkAclsResponseBodyNetworkAclsIngressAclEntries extends $dara.Model {
  /**
   * @remarks
   * The source CIDR block.
   * 
   * @example
   * 10.0.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The description of the inbound rule.
   * 
   * @example
   * This is IngressAclEntries.
   */
  description?: string;
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the inbound rule.
   * 
   * @example
   * nae-5dk86arlydmezasw****
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
   * The action that is performed on network traffic that matches the rule. Valid values:
   * 
   * *   **accept**: allows the network traffic.
   * *   **drop**: blocks the network traffic.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The destination port range of the inbound rule.
   * 
   * *   If **Protocol** of the inbound rule is set to **all** or **icmp**, the port range is **-1/-1**, which indicates all ports.
   * *   If **Protocol** of the inbound rule is set to **tcp** or **udp**, the port range is in the following format: **1/200** or **80/80**. 1/200 indicates port 1 to port 200. 80/80 indicates port 80. Valid values for a port: **1 to 65535**.
   * 
   * @example
   * -1/-1
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the rule. Valid values: **1 to 100**. Default value: **1**.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   **icmp**: ICMP.
   * *   **tcp**: TCP.
   * *   **udp**: UDP.
   * *   **all**: all protocols.
   * 
   * @example
   * all
   */
  protocol?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **system**: The rule is created by the system.
   * *   **custom**: The rule is created by a user.
   * 
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      networkAclEntryId: 'NetworkAclEntryId',
      networkAclEntryName: 'NetworkAclEntryName',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      protocol: 'Protocol',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      destinationCidrBlock: 'string',
      networkAclEntryId: 'string',
      networkAclEntryName: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'number',
      protocol: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

