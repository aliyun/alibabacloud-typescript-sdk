// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficMirrorFilterRulesRequestIngressRules extends $dara.Model {
  /**
   * @remarks
   * The action of the inbound rule. Valid values:
   * 
   * *   **accept**: accepts network traffic.
   * *   **drop**: drops network traffic.
   * 
   * @example
   * accept
   */
  action?: string;
  /**
   * @remarks
   * The destination CIDR block of the inbound traffic.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The destination port range of the inbound traffic. Valid values for a port: **1** to **65535**. Separate the first port and the last port with a forward slash (/). Examples: **1/200** and **80/80**.
   * 
   * >  If you set **IngressRules.N.Protocol** to **ALL** or **ICMP**, you do not need to set this parameter. In this case, all ports are available.
   * 
   * @example
   * 80/120
   */
  destinationPortRange?: string;
  ipVersion?: string;
  /**
   * @remarks
   * The priority of the inbound rule. A smaller value indicates a higher priority. The maximum value of **N** is **10**. You can configure up to 10 inbound rules for a filter.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The protocol that is used by the inbound traffic to be mirrored. Valid values:
   * 
   * *   **ALL**: all protocols
   * *   **ICMP**: Internet Control Message Protocol (ICMP)
   * *   **TCP**: TCP
   * *   **UDP**: User Datagram Protocol (UDP)
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of the inbound traffic.
   * 
   * @example
   * 10.0.0.0/24
   */
  sourceCidrBlock?: string;
  /**
   * @remarks
   * The source port range of the inbound traffic. Valid values for a port: **1** to **65535**. Separate the first port and the last port with a forward slash (/). Examples: **1/200** and **80/80**. You cannot set this parameter to only **-1/-1**, which specifies all ports.
   * 
   * >  If you set **IngressRules.N.Protocol** to **ALL** or **ICMP**, you do not need to set this parameter. In this case, all ports are available.
   * 
   * @example
   * 80/120
   */
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      destinationCidrBlock: 'DestinationCidrBlock',
      destinationPortRange: 'DestinationPortRange',
      ipVersion: 'IpVersion',
      priority: 'Priority',
      protocol: 'Protocol',
      sourceCidrBlock: 'SourceCidrBlock',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      destinationCidrBlock: 'string',
      destinationPortRange: 'string',
      ipVersion: 'string',
      priority: 'number',
      protocol: 'string',
      sourceCidrBlock: 'string',
      sourcePortRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

