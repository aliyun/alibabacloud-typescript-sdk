// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficMarkingPolicyRequestTrafficMatchRules extends $dara.Model {
  /**
   * @remarks
   * The address family. You can set the value to IPv4 or IPv6, or leave the value empty.
   * 
   * @example
   * IPv4
   */
  addressFamily?: string;
  /**
   * @remarks
   * The destination CIDR block of packets. IPv4 and IPv6 addresses are supported.
   * 
   * Packets whose destination IP addresses fall into the specified destination CIDR block meet the traffic classification rule. If you do not specify a destination CIDR block, all packets meet the traffic classification rule.
   * 
   * You can create up to 50 traffic classification rules in each call You can specify a destination CIDR block for each traffic classification rule.
   * 
   * @example
   * 10.10.10.0/24
   */
  dstCidr?: string;
  /**
   * @remarks
   * The destination port range that is used to match packets. Valid values: **-1** and **1** to **65535**.
   * 
   * Packets whose destination ports fall within the destination port range meet the traffic classification rule. If you do not specify destination port range, all packets meet the traffic classification rule.
   * 
   * You can enter up to two port numbers. Take note of the following rules:
   * 
   * *   If you enter only one port number, such as 1, packets whose destination port is 1 meet the traffic classification rule. A value of -1 specifies all destination ports.
   * *   If you enter two port numbers, such as 1 and 200, packets whose destination ports fall into 1 and 200 meet the traffic classification rule.
   * *   If you enter two port numbers and one of them is -1, the other port number must also be -1. In this case, all packets meet the traffic classification rule.
   * 
   * You can create up to 50 traffic classification rules in each call. You can specify a destination port range for each traffic classification rule.
   */
  dstPortRange?: number[];
  /**
   * @remarks
   * The Differentiated Service Code Point (DSCP) value that is used to match packets. Valid values: **0** to **63**.
   * 
   * Packets that carry the specified DSCP value meet the traffic classification rule. If you do not specify a DSCP value, all packets meet the traffic classification rule.
   * 
   * >  The DSCP value that you specify for this parameter is the DSCP value that packets carry before they are transmitted over the inter-region connection.
   * 
   * You can create up to 50 traffic classification rules in each call. You can specify a DSCP value for each traffic classification rule.
   * 
   * @example
   * 6
   */
  matchDscp?: number;
  /**
   * @remarks
   * The protocol that is used to match packets.
   * 
   * Traffic classification rules support the following protocols: **HTTP**, **HTTPS**, **TCP**, **UDP**, **SSH**, and **Telnet**. For more information, log on to the [CEN console](https://cen.console.aliyun.com/cen/list).
   * 
   * **Some protocols use a fixed port. Click to view the protocols and ports.**
   * 
   * *   If the protocol is **ICMP**, the destination port must be **-1**.
   * *   If the protocol is **GRE**, the destination port must be **1**.
   * *   If the protocol is **SSH**, the destination port must be **22**.
   * *   If the protocol is **Telnet**, the destination port must be **23**.
   * *   If the protocol is **HTTP**, the destination port must be **80**.
   * *   If the protocol is **HTTPS**, the destination port must be **443**.
   * *   If the protocol is **MS SQL**, the destination port must be **1443**.
   * *   If the protocol is **Oracle**, the destination port must be **1521**.
   * *   If the protocol is **Mysql**, the destination port must be **3306**.
   * *   If the protocol is **RDP**, the destination port must be **3389**.
   * *   If the protocol is **Postgre SQL**, the destination port must be **5432**.
   * *   If the protocol is **Redis**, the destination port must be **6379**.
   * 
   * You can create up to 50 traffic classification rules in each call. You can specify a protocol for each traffic classification rule.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of packets. IPv6 and IPv4 addresses are supported.
   * 
   * Packets whose source IP addresses fall into the specified source CIDR block meet the traffic classification rule. If you do not specify a source CIDR block, all packets meet the traffic classification rule.
   * 
   * You can create up to 50 traffic classification rules in each call. You can specify a source CIDR block for each traffic classification rule.
   * 
   * @example
   * 192.168.10.0/24
   */
  srcCidr?: string;
  /**
   * @remarks
   * The source port range that is used to match packets. Valid values: **-1** and **1** to **65535**.
   * 
   * Packets whose source ports fall within the source port range meet the traffic classification rule. If you do not specify a source port range, all packets meet the traffic classification rule.
   * 
   * You can enter up to two port numbers. Take note of the following rules:
   * 
   * *   If you enter only one port number, such as 1, packets whose source port is 1 meet the traffic classification rule. A value of -1 specifies all source ports.
   * *   If you enter two port numbers, such as 1 and 200, packets whose source ports fall into 1 and 200 meet the traffic classification rule.
   * *   If you enter two port numbers and one of them is -1, the other port number must also be -1. In this case, all packets meet the traffic classification rule.
   * 
   * You can create up to 50 traffic classification rules in each call. You can specify a source port range for each traffic classification rule.
   */
  srcPortRange?: number[];
  /**
   * @remarks
   * The description of the traffic classification rule.
   * 
   * You can create up to 50 traffic classification rules in each call. You can specify a description for each traffic classification rule.
   * 
   * This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  trafficMatchRuleDescription?: string;
  /**
   * @remarks
   * The name of the traffic classification rule.
   * 
   * You can create up to 50 traffic classification rules in each call. You can specify a name for each traffic classification rule.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  trafficMatchRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      addressFamily: 'AddressFamily',
      dstCidr: 'DstCidr',
      dstPortRange: 'DstPortRange',
      matchDscp: 'MatchDscp',
      protocol: 'Protocol',
      srcCidr: 'SrcCidr',
      srcPortRange: 'SrcPortRange',
      trafficMatchRuleDescription: 'TrafficMatchRuleDescription',
      trafficMatchRuleName: 'TrafficMatchRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressFamily: 'string',
      dstCidr: 'string',
      dstPortRange: { 'type': 'array', 'itemType': 'number' },
      matchDscp: 'number',
      protocol: 'string',
      srcCidr: 'string',
      srcPortRange: { 'type': 'array', 'itemType': 'number' },
      trafficMatchRuleDescription: 'string',
      trafficMatchRuleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dstPortRange)) {
      $dara.Model.validateArray(this.dstPortRange);
    }
    if(Array.isArray(this.srcPortRange)) {
      $dara.Model.validateArray(this.srcPortRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

