// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficMarkingPolicyRequestTrafficMatchRules extends $dara.Model {
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
   * The destination CIDR block of traffic packets. IPv4 and IPv6 addresses are supported.
   * 
   * The traffic classification rule matches traffic whose destination IP address falls within the destination CIDR block. If you do not set this parameter, the traffic classification rule matches traffic with any destination IP address.
   * 
   * You can create up to 50 traffic classification rules at a time, and each traffic classification rule can specify one destination CIDR block.
   * 
   * @example
   * 10.10.10.0/24
   */
  dstCidr?: string;
  /**
   * @remarks
   * The destination port of traffic packets. Valid values: **-1** and **1** to **65535**.
   * 
   * The traffic classification rule matches traffic whose destination port falls within the destination port range. If you do not set this parameter, the traffic classification rule matches traffic with any destination port.
   * 
   * This parameter supports up to two port numbers. The input format is described as follows:
   * 
   * - If you enter only one port number, such as 1, the system matches traffic whose destination port is 1 by default. If the value is -1, the system matches traffic with any destination port.
   * - If you enter two port numbers, such as 1 and 200, the system matches traffic whose destination port is in the range of 1 to 200 by default.
   * - If you enter two port numbers and one of them is -1, the other port number must also be -1, which indicates matching traffic with any destination port.
   * 
   * You can create up to 50 traffic classification rules at a time, and each traffic classification rule can specify one destination port range.
   */
  dstPortRange?: number[];
  /**
   * @remarks
   * The DSCP value of traffic packets. Valid values: **0** to **63**.
   * 
   * The traffic classification rule matches traffic that contains the specified DSCP value. If you do not set this parameter, the traffic classification rule matches traffic with any DSCP value.
   * 
   * > The DSCP value refers to the DSCP value that the traffic packets already carry before entering the inter-region connection.
   * 
   * You can create up to 50 traffic classification rules at a time, and each traffic classification rule can match one DSCP value.
   * 
   * @example
   * 6
   */
  matchDscp?: number;
  /**
   * @remarks
   * The protocol type of traffic packets.
   * 
   * The traffic marking policy supports matching traffic of multiple protocol types such as **HTTP**, **HTTPS**, **TCP**, **UDP**, **SSH**, and **Telnet**. For more protocol types, log on to the [Cloud Enterprise Network (CEN) console](https://cen.console.aliyun.com/cen/list).
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
   * You can create up to 50 traffic classification rules at a time, and each traffic classification rule can match one protocol type.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of traffic packets. IPv6 and IPv4 addresses are supported.
   * 
   * The traffic classification rule matches traffic whose source IP address falls within the source CIDR block. If you do not set this parameter, the traffic classification rule matches traffic with any source IP address.
   * 
   * You can create up to 50 traffic classification rules at a time, and each traffic classification rule can match one source CIDR block.
   * 
   * @example
   * 192.168.10.0/24
   */
  srcCidr?: string;
  /**
   * @remarks
   * The source port of traffic packets. Valid values: **-1** and **1** to **65535**.
   * 
   * The traffic classification rule matches traffic whose source port falls within the source port range. If you do not set this parameter, the traffic classification rule matches traffic with any source port.
   * 
   * This parameter supports up to two port numbers. The input format is described as follows:
   * 
   * - If you enter only one port number, such as 1, the system matches traffic whose source port is 1 by default. If the value is -1, the system matches traffic with any source port.
   * - If you enter two port numbers, such as 1 and 200, the system matches traffic whose source port is in the range of 1 to 200 by default.
   * - If you enter two port numbers and one of them is -1, the other port number must also be -1, which indicates matching traffic with any source port.
   * 
   * You can create up to 50 traffic classification rules at a time, and each traffic classification rule can specify one source port range.
   */
  srcPortRange?: number[];
  /**
   * @remarks
   * The description of the traffic classification rule.
   * 
   * You can create up to 50 traffic classification rules at a time, and each traffic classification rule can have one description.
   * 
   * The description can be empty or 1 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  trafficMatchRuleDescription?: string;
  /**
   * @remarks
   * The name of the traffic classification rule.
   * 
   * You can create up to 50 traffic classification rules at a time, and each traffic classification rule can have one name.
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

export class CreateTrafficMarkingPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and business restrictions. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, the traffic marking policy is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The DSCP value to be added to traffic packets that match the traffic classification rules. Valid values: **0** to **63**.
   * 
   * The DSCP value of each traffic marking policy under a transit router instance must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  markingDscp?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The priority of the traffic marking policy. Valid values: **1** to **100**.
   * 
   * The priority of each traffic marking policy under a transit router instance must be unique. A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  priority?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The description of the traffic marking policy.
   * 
   * The description can be empty or 1 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  trafficMarkingPolicyDescription?: string;
  /**
   * @remarks
   * The name of the traffic marking policy.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  trafficMarkingPolicyName?: string;
  /**
   * @remarks
   * The list of traffic classification rules for the traffic marking policy.
   * 
   * Traffic packets that match the traffic classification rules are marked with the DSCP value of the traffic marking policy.
   * 
   * You can create up to 50 traffic classification rules at a time.
   */
  trafficMatchRules?: CreateTrafficMarkingPolicyRequestTrafficMatchRules[];
  /**
   * @remarks
   * The instance ID of the forward routing transit router.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-8vbuqeo5h5pu3m01d****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      markingDscp: 'MarkingDscp',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      priority: 'Priority',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMarkingPolicyDescription: 'TrafficMarkingPolicyDescription',
      trafficMarkingPolicyName: 'TrafficMarkingPolicyName',
      trafficMatchRules: 'TrafficMatchRules',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      markingDscp: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      priority: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficMarkingPolicyDescription: 'string',
      trafficMarkingPolicyName: 'string',
      trafficMatchRules: { 'type': 'array', 'itemType': CreateTrafficMarkingPolicyRequestTrafficMatchRules },
      transitRouterId: 'string',
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

