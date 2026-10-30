// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTraficMatchRuleToTrafficMarkingPolicyRequestTrafficMatchRules extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the traffic packet.
   * 
   * The traffic classification rule matches traffic whose destination IP address falls within the destination CIDR block. If you do not specify this parameter, the traffic classification rule matches traffic with any destination IP address.
   * 
   * You can add up to 50 traffic classification rules at a time.
   * 
   * @example
   * 10.10.10.0/24
   */
  dstCidr?: string;
  /**
   * @remarks
   * The destination port of the traffic packet. Valid values: **-1** and **1** to **65535**.
   * 
   * The traffic classification rule matches traffic whose destination port number falls within the destination port range. If you do not specify this parameter, the traffic classification rule matches traffic with any destination port number.
   * 
   * You can enter up to two port numbers for this parameter. The input format is described as follows:
   * 
   * - If you enter only one port number, such as 1, the system matches traffic whose destination port is 1 by default.
   * - If you enter two port numbers, such as 1 and 200, the system matches traffic whose destination port is in the range of 1 to 200 by default.
   * - If you enter two port numbers and one of them is -1, the other port number must also be -1, which indicates that traffic with any destination port is matched.
   * 
   * You can add up to 50 traffic classification rules at a time.
   */
  dstPortRange?: number[];
  /**
   * @remarks
   * The Differentiated Services Code Point (DSCP) value of the traffic packet. Valid values: **0** to **63**.
   * 
   * The traffic classification rule matches traffic that contains the specified DSCP value. If you do not specify this parameter, the traffic classification rule matches traffic with any DSCP value.
   * 
   * > The DSCP value refers to the DSCP value carried by the traffic packet before it enters the inter-region connection.
   * 
   * You can add up to 50 traffic classification rules at a time.
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
   * You can add up to 50 traffic classification rules at a time.
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
   * You can add up to 50 traffic classification rules at a time.
   * 
   * @example
   * 192.168.10.0/24
   */
  srcCidr?: string;
  /**
   * @remarks
   * The source port of the traffic packet. Valid values: **-1** and **1** to **65535**.
   * 
   * The traffic classification rule matches traffic whose source port number falls within the source port range. If you do not specify this parameter, the traffic classification rule matches traffic with any source port number.
   * 
   * You can enter up to two port numbers for this parameter. The input format is described as follows:
   * 
   * - If you enter only one port number, such as 1, the system matches traffic whose source port is 1 by default.
   * - If you enter two port numbers, such as 1 and 200, the system matches traffic whose source port is in the range of 1 to 200 by default.
   * - If you enter two port numbers and one of them is -1, the other port number must also be -1, which indicates that traffic with any source port is matched.
   * 
   * You can add up to 50 traffic classification rules at a time.
   */
  srcPortRange?: number[];
  /**
   * @remarks
   * The description of the traffic classification rule.
   * 
   * You can add up to 50 traffic classification rules at a time.
   * 
   * @example
   * desctest
   */
  trafficMatchRuleDescription?: string;
  /**
   * @remarks
   * The name of the traffic classification rule.
   * 
   * You can add up to 50 traffic classification rules at a time.
   * 
   * @example
   * nametest
   */
  trafficMatchRuleName?: string;
  static names(): { [key: string]: string } {
    return {
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

export class AddTraficMatchRuleToTrafficMarkingPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate a parameter value on your client to ensure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: prechecks the request without adding the traffic classification rule to the traffic marking policy. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): sends the request. If the request passes the precheck, the traffic classification rule is added to the traffic marking policy.
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
  trafficMatchRules?: AddTraficMatchRuleToTrafficMarkingPolicyRequestTrafficMatchRules[];
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
      trafficMatchRules: { 'type': 'array', 'itemType': AddTraficMatchRuleToTrafficMarkingPolicyRequestTrafficMatchRules },
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

