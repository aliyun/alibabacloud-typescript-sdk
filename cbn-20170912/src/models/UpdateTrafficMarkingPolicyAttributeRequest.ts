// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrafficMarkingPolicyAttributeRequestAddTrafficMatchRules extends $dara.Model {
  /**
   * @remarks
   * The address family. Valid values: You can set the value to IPv4 or IPv6, or leave the value empty.
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
   * You can create up to 50 traffic classification rules in each call. You can specify a destination CIDR block for each traffic classification rule.
   * 
   * @example
   * 172.30.0.0/24
   */
  dstCidr?: string;
  /**
   * @remarks
   * The destination port range that is used to match packets. Valid values: **-1** and **1** to **65535**.
   * 
   * Packets whose destination ports fall within the specified destination port range are considered a match. If you do not specify a destination port range, packets are considered a match regardless of the destination port.
   * 
   * You can enter up to two port numbers. Take note of the following rules:
   * 
   * *   If you enter only one port number, such as 1, packets whose destination port is 1 match the traffic classification rule. A value of -1 specifies all destination ports.
   * *   If you enter two port numbers, such as 1 and 200, packets whose destination ports fall into 1 and 200 are considered a match.
   * *   If you enter two port numbers and one of them is -1, the other port number must also be -1. In this case, all packets meet the traffic classification rule.
   * 
   * You can create up to 50 traffic classification rules in each call. You can specify a destination port range for each traffic classification rule.
   */
  dstPortRange?: number[];
  /**
   * @remarks
   * The Differentiated Service Code Point (DSCP) value that is used to match packets. Valid values: **0** to **63**.
   * 
   * Requests that carry the specified DSCP value are considered a match. If you do not specify a DSCP value, packets are considered a match regardless of the DSCP value.
   * 
   * >  The DSCP value that you specify for this parameter is the DSCP value that packets carry before they are transmitted over the inter-region connection.
   * 
   * You can create up to 50 traffic classification rules in each call. You can specify a DSCP value for each traffic classification rule.
   * 
   * @example
   * 1
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
   * *   If the protocol is **ICMP**, set the destination port to **-1**.
   * *   If the protocol is **GRE**, set the destination port to **-1**.
   * *   If the protocol is **SSH**, set the destination port to **22**.
   * *   If the protocol is **Telnet**, set the destination port to **23**.
   * *   If the protocol is **HTTP**, set the destination port to **80**.
   * *   If the protocol is **HTTPS**, set the destination port to **443**.
   * *   If the protocol is **MS SQL**, set the destination port to **1443**.
   * *   If the protocol is **Oracle**, set the destination port to **1521**.
   * *   If the protocol is **Mysql**, set the destination port to **3306**.
   * *   If the protocol is **RDP**, set the destination port to **3389**.
   * *   If the protocol is **Postgre SQL**, set the destination port to **5432**.
   * *   If the protocol is **Redis**, the destination port must be **6379**.
   * 
   * You can create up to 50 traffic classification rules in each call. You can specify a protocol for each traffic classification rule.
   * 
   * @example
   * UDP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of packets. IPv4 and IPv6 addresses are supported.
   * 
   * Packets whose source IP addresses fall into the specified source CIDR block meet the traffic classification rule. If you do not specify a source CIDR block, all packets meet the traffic classification rule.
   * 
   * You can create up to 50 traffic classification rules in each call. You can specify a source CIDR block for each traffic classification rule.
   * 
   * @example
   * 10.128.32.0/19
   */
  srcCidr?: string;
  /**
   * @remarks
   * The source port range that is used to match packets. Valid values: **-1** and **1** to **65535**.
   * 
   * The traffic classification rule matches the packets whose source ports fall within the source port range. If you do not specify this parameter, packets are considered a match regardless of the source port.
   * 
   * You can enter up to two port numbers. Take note of the following rules:
   * 
   * *   If you enter only one port number, such as 1, packets whose source port is 1 are considered a match. A value of -1 specifies all source ports.
   * *   If you enter two port numbers, such as 1 and 200, packets whose source ports fall into 1 and 200 are considered a match.
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
   * test1
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
   * Guangzhou Testing
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

export class UpdateTrafficMarkingPolicyAttributeRequestDeleteTrafficMatchRules extends $dara.Model {
  /**
   * @remarks
   * The address family. Valid values: You can set the value to IPv4 or IPv6, or leave the value empty.
   * 
   * @example
   * IPv6
   */
  addressFamily?: string;
  /**
   * @remarks
   * The destination CIDR block of packets. IPv4 and IPv6 addresses are supported.
   * 
   * @example
   * 192.168.200.3/32
   */
  dstCidr?: string;
  /**
   * @remarks
   * The destination port range that is used to match packets.
   */
  dstPortRange?: number[];
  /**
   * @remarks
   * The DSCP value that is used to match packets.
   * 
   * @example
   * 3
   */
  matchDscp?: number;
  /**
   * @remarks
   * The protocol that is used to match packets.
   * 
   * You can call the [ListTrafficMarkingPolicies](https://help.aliyun.com/document_detail/468322.html) operation to query the details about a traffic classification rule.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of packets. IPv4 and IPv6 addresses are supported.
   * 
   * @example
   * 10.72.0.0/16
   */
  srcCidr?: string;
  /**
   * @remarks
   * The source port range that is used to match packets.
   */
  srcPortRange?: number[];
  /**
   * @remarks
   * The description of the traffic classification rule.
   * 
   * This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * Hangzhou-to-Qingdao CAT
   */
  trafficMatchRuleDescription?: string;
  /**
   * @remarks
   * The name of the traffic classification rule.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * test
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

export class UpdateTrafficMarkingPolicyAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The traffic classification rules to be added to the traffic marking policy.
   * 
   * You can add at most 50 traffic classification rules in each call.
   */
  addTrafficMatchRules?: UpdateTrafficMarkingPolicyAttributeRequestAddTrafficMatchRules[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426****
   */
  clientToken?: string;
  /**
   * @remarks
   * The traffic classification rules to be deleted from the traffic marking policy.
   * 
   * >  Specify detailed information about the traffic classification rule, such as the source CIDR block, destination CIDR block, source port, destination port, and DSCP value. If you do not specify sufficient information, the system may fail to match the traffic classification rule that you want to delete.
   */
  deleteTrafficMatchRules?: UpdateTrafficMarkingPolicyAttributeRequestDeleteTrafficMatchRules[];
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: preforms a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and sends the request.
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
   * The new description of the traffic marking policy.
   * 
   * The description must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The description must start with a letter.
   * 
   * @example
   * desctest
   */
  trafficMarkingPolicyDescription?: string;
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
   * The new name of the traffic marking policy.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * nametest
   */
  trafficMarkingPolicyName?: string;
  static names(): { [key: string]: string } {
    return {
      addTrafficMatchRules: 'AddTrafficMatchRules',
      clientToken: 'ClientToken',
      deleteTrafficMatchRules: 'DeleteTrafficMatchRules',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMarkingPolicyDescription: 'TrafficMarkingPolicyDescription',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
      trafficMarkingPolicyName: 'TrafficMarkingPolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTrafficMatchRules: { 'type': 'array', 'itemType': UpdateTrafficMarkingPolicyAttributeRequestAddTrafficMatchRules },
      clientToken: 'string',
      deleteTrafficMatchRules: { 'type': 'array', 'itemType': UpdateTrafficMarkingPolicyAttributeRequestDeleteTrafficMatchRules },
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficMarkingPolicyDescription: 'string',
      trafficMarkingPolicyId: 'string',
      trafficMarkingPolicyName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addTrafficMatchRules)) {
      $dara.Model.validateArray(this.addTrafficMatchRules);
    }
    if(Array.isArray(this.deleteTrafficMatchRules)) {
      $dara.Model.validateArray(this.deleteTrafficMatchRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

