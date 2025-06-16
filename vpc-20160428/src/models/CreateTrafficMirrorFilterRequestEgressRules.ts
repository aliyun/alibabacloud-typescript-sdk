// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficMirrorFilterRequestEgressRules extends $dara.Model {
  /**
   * @remarks
   * The collection policy of the outbound rule. Valid value:
   * 
   * *   **accept**: collects network traffic.
   * *   **drop**: does not collect network traffic.
   * 
   * @example
   * accept
   */
  action?: string;
  /**
   * @remarks
   * The destination CIDR block of the outbound traffic.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The destination port range of the outbound traffic. Valid values for a port: **1** to **65535**. Separate the first port and the last port with a forward slash (/). Examples: **1/200** and **80/80**. You cannot set this parameter to only -1/-1, which specifies all ports.
   * 
   * >  If **EgressRules.N.Protocol** is set to **ALL** or **ICMP**, you do not need to specify this parameter. This indicates that all ports are available.
   * 
   * @example
   * 22/40
   */
  destinationPortRange?: string;
  ipVersion?: string;
  /**
   * @remarks
   * The priority of the outbound rule. A smaller value indicates a higher priority. The maximum value of **N** is **10**. You can configure up to 10 outbound rules for a filter.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The type of the protocol that is used by the outbound traffic that you want to mirror. Valid value:
   * 
   * *   **ALL**: all protocols
   * *   **ICMP**: Internet Control Message Protocol.
   * *   **TCP**: Transmission Control Protocol.
   * *   **UDP**: User Datagram Protocol.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of the outbound traffic.
   * 
   * @example
   * 10.0.0.0/24
   */
  sourceCidrBlock?: string;
  /**
   * @remarks
   * The source port range of the outbound traffic. Valid values: **1** to **65535**. Separate the first port and the last port with a forward slash (/). Examples: **1/200** and **80/80**. You cannot set this parameter to only -1/-1, which specifies all ports.
   * 
   * >  If **EgressRules.N.Protocol** is set to **ALL** or **ICMP**, you do not need to specify this parameter. This indicates that all ports are available.
   * 
   * @example
   * 22/40
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

