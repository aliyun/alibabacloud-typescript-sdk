// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddTrafficMatchRuleToTrafficMarkingPolicyRequestTrafficMatchRules extends $dara.Model {
  /**
   * @remarks
   * The address type. Valid values: IPv4, IPv6, or empty.
   * 
   * @example
   * IPv4
   */
  addressFamily?: string;
  /**
   * @remarks
   * The destination CIDR block of the traffic packet.
   * 
   * The traffic classification rule matches traffic whose destination IP address falls within the destination CIDR block. If you do not specify this parameter, the traffic classification rule matches traffic with any destination IP address.
   * 
   * @example
   * 10.10.10.0/24
   */
  dstCidr?: string;
  /**
   * @remarks
   * The destination port of the traffic packet. Valid values: **-1** and **1** to **65535**.
   * 
   * The traffic classification rule matches traffic whose destination port falls within the destination port range. If you do not specify this parameter, the traffic classification rule matches traffic with any destination port.
   * 
   * You can specify up to 2 port numbers for this parameter. The input format is described as follows:
   * 
   * - If you specify only one port number, for example, 1, the system matches traffic whose destination port is 1. If the value is -1, the system matches traffic with any destination port.
   * - If you specify two port numbers, for example, 1 and 200, the system matches traffic whose destination port is in the range of 1 to 200.
   * - If you specify two port numbers and one of them is -1, the other port number must also be -1, which indicates that traffic with any destination port is matched.
   */
  dstPortRange?: number[];
  /**
   * @remarks
   * The Differentiated Services Code Point (DSCP) value of the traffic packet. Valid values: **0** to **63**.
   * 
   * The traffic classification rule matches traffic that contains the specified DSCP value. If you do not specify this parameter, the traffic classification rule matches traffic with any DSCP value.
   * 
   * > The DSCP value refers to the DSCP value that the traffic packet already carries before it enters the inter-region connection.
   * 
   * @example
   * 5
   */
  matchDscp?: number;
  /**
   * @remarks
   * The protocol type of the traffic packet.
   * 
   * The traffic classification rule supports matching traffic of multiple protocol types, such as **HTTP**, **HTTPS**, **TCP**, **UDP**, **SSH**, and **Telnet**. For more protocol types, log on to the [Cloud Enterprise Network (CEN) console](https://cen.console.aliyun.com/cen/list).
   * 
   * <details>
   * <summary>Some protocols have fixed ports. Click to view port details.</summary>
   * 
   * - If the protocol type is **ICMP**, the destination port must be set to **-1**.
   * - If the protocol type is **GRE**, the destination port must be set to **-1**.
   * - If the protocol type is **SSH**, the destination port must be set to **22**.
   * - If the protocol type is **Telnet**, the destination port must be set to **23**.
   * - If the protocol type is **HTTP**, the destination port must be set to **80**.
   * - If the protocol type is **HTTPS**, the destination port must be set to **443**.
   * - If the protocol type is **MS SQL**, the destination port must be set to **1443**.
   * - If the protocol type is **Oracle**, the destination port must be set to **1521**.
   * - If the protocol type is **Mysql**, the destination port must be set to **3306**.
   * - If the protocol type is **RDP**, the destination port must be set to **3389**.
   * - If the protocol type is **Postgre SQL**, the destination port must be set to **5432**.
   * - If the protocol type is **Redis**, the destination port must be set to **6379**.
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
   * The traffic classification rule matches traffic whose source IP address falls within the source CIDR block. If you do not specify this parameter, the traffic classification rule matches traffic with any source IP address.
   * 
   * @example
   * 192.168.10.0/24
   */
  srcCidr?: string;
  /**
   * @remarks
   * The source port of the traffic packet. Valid values: **-1** and **1** to **65535**.
   * 
   * The traffic classification rule matches traffic whose source port falls within the source port range. If you do not specify this parameter, the traffic classification rule matches traffic with any source port.
   * 
   * You can specify up to two port numbers for this parameter. The input format is described as follows:
   * 
   * - If you specify only one port number, for example, 1, the system matches traffic whose source port is 1. If the value is -1, the system matches traffic with any source port.
   * - If you specify two port numbers, for example, 1 and 200, the system matches traffic whose source port is in the range of 1 to 200.
   * - If you specify two port numbers and one of them is -1, the other port number must also be -1, which indicates that traffic with any source port is matched.
   */
  srcPortRange?: number[];
  /**
   * @remarks
   * The description of the traffic classification rule.
   * 
   * The description can be empty or 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  trafficMatchRuleDescription?: string;
  /**
   * @remarks
   * The name of the traffic classification rule.
   * 
   * The name can be empty or 1 to 128 characters in length and cannot start with http:// or https://.
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, traffic classification rules are added to the traffic marking policy.
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

