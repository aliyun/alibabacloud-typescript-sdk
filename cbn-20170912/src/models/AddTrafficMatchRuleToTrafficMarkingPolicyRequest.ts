// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddTrafficMatchRuleToTrafficMarkingPolicyRequestTrafficMatchRules extends $dara.Model {
  /**
   * @remarks
   * The address family. Valid values: IPv4, IPv6, or empty.
   * 
   * @example
   * IPv4
   */
  addressFamily?: string;
  /**
   * @remarks
   * The destination CIDR block of the traffic packet.
   * 
   * The traffic classification rule matches traffic whose destination IP address falls within the destination CIDR block. If you do not specify this parameter, the rule matches traffic with any destination IP address.
   * 
   * @example
   * 10.10.10.0/24
   */
  dstCidr?: string;
  /**
   * @remarks
   * The destination port of the traffic packet. Valid values: **-1** and **1** to **65535**.
   * 
   * The traffic classification rule matches traffic whose destination port number falls within the destination port range. If you do not specify this parameter, the rule matches traffic with any destination port number.
   * 
   * You can enter up to two port numbers for this parameter. The input format is described as follows:
   * 
   * - If you enter only one port number, such as 1, the system matches traffic whose destination port is 1 by default. If you enter -1, the system matches traffic with any destination port.
   * - If you enter two port numbers, such as 1 and 200, the system matches traffic whose destination port is in the range of 1 to 200 by default.
   * - If you enter two port numbers and one of them is -1, the other port number must also be -1, which indicates that traffic with any destination port is matched.
   */
  dstPortRange?: number[];
  /**
   * @remarks
   * The Differentiated Services Code Point (DSCP) value of the traffic packet. Valid values: **0** to **63**.
   * 
   * The traffic classification rule matches traffic that contains the specified DSCP value. If you do not specify this parameter, the rule matches traffic with any DSCP value.
   * 
   * > The DSCP value refers to the DSCP value carried by the traffic packet before it enters the inter-region connection.
   * 
   * @example
   * 5
   */
  matchDscp?: number;
  /**
   * @remarks
   * The protocol type of the traffic packet.
   * 
   * The traffic classification rule supports matching traffic of various protocol types, such as **HTTP**, **HTTPS**, **TCP**, **UDP**, **SSH**, and **Telnet**. For more protocol types, log on to the [Cloud Enterprise Network (CEN) console](https://cen.console.aliyun.com/cen/list).
   * 
   * <details>
   * <summary>Some protocols use fixed ports. Click to view port details.</summary>
   * 
   * - If the protocol type is **ICMP**, set the destination port number to **-1**.
   * - If the protocol type is **GRE**, set the destination port number to **-1**.
   * - If the protocol type is **SSH**, set the destination port number to **22**.
   * - If the protocol type is **Telnet**, set the destination port number to **23**.
   * - If the protocol type is **HTTP**, set the destination port number to **80**.
   * - If the protocol type is **HTTPS**, set the destination port number to **443**.
   * - If the protocol type is **MS SQL**, set the destination port number to **1443**.
   * - If the protocol type is **Oracle**, set the destination port number to **1521**.
   * - If the protocol type is **Mysql**, set the destination port number to **3306**.
   * - If the protocol type is **RDP**, set the destination port number to **3389**.
   * - If the protocol type is **Postgre SQL**, set the destination port number to **5432**.
   * - If the protocol type is **Redis**, set the destination port number to **6379**.
   * 
   * </details>
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of the traffic packet.
   * 
   * The traffic classification rule matches traffic whose source IP address falls within the source CIDR block. If you do not specify this parameter, the rule matches traffic with any source IP address.
   * 
   * @example
   * 192.168.10.0/24
   */
  srcCidr?: string;
  /**
   * @remarks
   * The source port of the traffic packet. Valid values: **-1** and **1** to **65535**.
   * 
   * The traffic classification rule matches traffic whose source port number falls within the source port range. If you do not specify this parameter, the rule matches traffic with any source port number.
   * 
   * You can enter up to two port numbers for this parameter. The input format is described as follows:
   * 
   * - If you enter only one port number, such as 1, the system matches traffic whose source port is 1 by default. If you enter -1, the system matches traffic with any source port.
   * - If you enter two port numbers, such as 1 and 200, the system matches traffic whose source port is in the range of 1 to 200 by default.
   * - If you enter two port numbers and one of them is -1, the other port number must also be -1, which indicates that traffic with any source port is matched.
   */
  srcPortRange?: number[];
  /**
   * @remarks
   * The description of the traffic classification rule.
   * 
   * The description can be empty or 1 to 256 characters in length. It cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  trafficMatchRuleDescription?: string;
  /**
   * @remarks
   * The name of the traffic classification rule.
   * 
   * The name can be empty or 1 to 128 characters in length. It cannot start with http:// or https://.
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

export class AddTrafficMatchRuleToTrafficMarkingPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: prechecks the request without adding the traffic classification rule to the traffic marking policy. The system checks whether required parameters are specified, the request format, and service limits. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the DryRunOperation error code is returned.
   * - **false** (default): sends the request. After the request passes the precheck, the traffic classification rule is added to the traffic marking policy.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the traffic marking policy.
   * 
   * This parameter is required.
   * 
   * @example
   * tm-u9nxup5kww5po8****
   */
  trafficMarkingPolicyId?: string;
  /**
   * @remarks
   * The list of traffic classification rules.
   * 
   * You can add up to 50 traffic classification rules at a time.
   */
  trafficMatchRules?: AddTrafficMatchRuleToTrafficMarkingPolicyRequestTrafficMatchRules[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
      trafficMatchRules: 'TrafficMatchRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficMarkingPolicyId: 'string',
      trafficMatchRules: { 'type': 'array', 'itemType': AddTrafficMatchRuleToTrafficMarkingPolicyRequestTrafficMatchRules },
    };
  }

  validate() {
    if(Array.isArray(this.trafficMatchRules)) {
      $dara.Model.validateArray(this.trafficMatchRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

