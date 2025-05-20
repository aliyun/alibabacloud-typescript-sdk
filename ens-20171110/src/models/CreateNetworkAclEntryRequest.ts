// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkAclEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The source CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The description of the network ACL.
   * 
   * The description must be 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * This is my NetworkAcl.
   */
  description?: string;
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The direction in which the rule is applied. Valid values:
   * 
   * *   **ingress**
   * *   **egress**
   * 
   * This parameter is required.
   * 
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * The name must be 1 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * acl-1
   */
  networkAclEntryName?: string;
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * This parameter is required.
   * 
   * @example
   * nacl-bp1lhl0taikrbgnh****
   */
  networkAclId?: string;
  /**
   * @remarks
   * The action that is performed on network traffic that matches the rule. Valid values:
   * 
   * *   **accept**: allows network traffic.
   * *   **drop**: blocks network traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The port range.
   * 
   * *   If you set **Protocol** to **all** or **icmp**, set this parameter to -1/-1, which specifies all ports.
   * *   If you set **Protocol** to **tcp** or **udp**, the port can be **1 to 65535**. You can set this parameter to **1/200** or **80/80**, which specifies ports 1 to 200 or port 80.
   * 
   * This parameter is required.
   * 
   * @example
   * -1/-1
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the rule. Valid values: **1 to 100**. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * *   **icmp**: ICMP
   * *   **tcp**: TCP
   * *   **udp**: UDP
   * *   **all**: all protocols
   * 
   * This parameter is required.
   * 
   * @example
   * all
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      direction: 'Direction',
      networkAclEntryName: 'NetworkAclEntryName',
      networkAclId: 'NetworkAclId',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      destinationCidrBlock: 'string',
      direction: 'string',
      networkAclEntryName: 'string',
      networkAclId: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'number',
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

