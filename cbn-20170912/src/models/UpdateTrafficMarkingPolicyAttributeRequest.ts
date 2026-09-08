// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrafficMarkingPolicyAttributeRequestAddTrafficMatchRules extends $dara.Model {
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
   * The destination CIDR block of the traffic packet. IPv4 and IPv6 addresses are supported.
   * 
   * The traffic classification rule matches traffic whose destination IP address falls within the destination CIDR block. If you do not set this parameter, the traffic classification rule matches traffic with any destination IP address.
   * 
   * You can add up to 50 traffic classification rules at a time. Each traffic classification rule can specify one destination CIDR block.
   * 
   * @example
   * 172.30.0.0/24
   */
  dstCidr?: string;
  /**
   * @remarks
   * The destination port of the traffic packet. Valid values: **-1** and **1** to **65535**.
   * 
   * The traffic classification rule matches traffic whose destination port falls within the destination port range. If you do not set this parameter, the traffic classification rule matches traffic with any destination port.
   * 
   * This parameter supports up to two port numbers. The input format is described as follows:
   * 
   * - If you enter only one port number, such as 1, the system matches traffic whose destination port is 1 by default. If the value is -1, the system matches traffic with any destination port.
   * - If you enter two port numbers, such as 1 and 200, the system matches traffic whose destination port is in the range of 1 to 200 by default.
   * - If you enter two port numbers and one of them is -1, the other port number must also be -1, which indicates that traffic with any destination port is matched.
   * 
   * You can add up to 50 traffic classification rules at a time. Each traffic classification rule can specify one destination port range.
   */
  dstPortRange?: number[];
  /**
   * @remarks
   * The Differentiated Services Code Point (DSCP) value of the traffic packet. Valid values: **0** to **63**.
   * 
   * The traffic classification rule matches traffic that contains the specified DSCP value. If you do not set this parameter, the traffic classification rule matches traffic with any DSCP value.
   * 
   * > The DSCP value refers to the DSCP value that the traffic packet already carries before entering the inter-region connection.
   * 
   * You can add up to 50 traffic classification rules at a time. Each traffic classification rule can match one DSCP value.
   * 
   * @example
   * 1
   */
  matchDscp?: number;
  /**
   * @remarks
   * The protocol type of the traffic packet.
   * 
   * The traffic marking policy supports matching traffic of multiple protocol types, such as **HTTP**, **HTTPS**, **TCP**, **UDP**, **SSH**, and **Telnet**. For more protocol types, log on to the [Cloud Enterprise Network (CEN) console](https://cen.console.aliyun.com/cen/list).
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
   * You can add up to 50 traffic classification rules at a time. Each traffic classification rule can match one protocol type.
   * 
   * @example
   * UDP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of the traffic packet. IPv4 and IPv6 addresses are supported.
   * 
   * The traffic classification rule matches traffic whose source IP address falls within the source CIDR block. If you do not set this parameter, the traffic classification rule matches traffic with any source IP address.
   * 
   * You can add up to 50 traffic classification rules at a time. Each traffic classification rule can match one source CIDR block.
   * 
   * @example
   * 10.128.32.0/19
   */
  srcCidr?: string;
  /**
   * @remarks
   * The source port of the traffic packet. Valid values: **-1** and **1** to **65535**.
   * 
   * The traffic classification rule matches traffic whose source port falls within the source port range. If you do not set this parameter, the traffic classification rule matches traffic with any source port.
   * 
   * This parameter supports up to two port numbers. The input format is described as follows:
   * 
   * - If you enter only one port number, such as 1, the system matches traffic whose source port is 1 by default. If the value is -1, the system matches traffic with any source port.
   * - If you enter two port numbers, such as 1 and 200, the system matches traffic whose source port is in the range of 1 to 200 by default.
   * - If you enter two port numbers and one of them is -1, the other port number must also be -1, which indicates that traffic with any source port is matched.
   * 
   * You can add up to 50 traffic classification rules at a time. Each traffic classification rule can specify one source port range.
   */
  srcPortRange?: number[];
  /**
   * @remarks
   * The description of the traffic classification rule.
   * 
   * You can add up to 50 traffic classification rules at a time. Each traffic classification rule can have one description.
   * 
   * The description can be empty or 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * test1
   */
  trafficMatchRuleDescription?: string;
  /**
   * @remarks
   * The name of the traffic classification rule.
   * 
   * You can add up to 50 traffic classification rules at a time. Each traffic classification rule can have one name.
   * 
   * The name can be empty or 1 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * Guangzhou test
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
   * The address family. Valid values: IPv4, IPv6, or empty.
   * 
   * @example
   * IPv6
   */
  addressFamily?: string;
  /**
   * @remarks
   * The destination CIDR block of the traffic packet. IPv4 and IPv6 addresses are supported.
   * 
   * @example
   * 192.168.200.3/32
   */
  dstCidr?: string;
  /**
   * @remarks
   * The destination port of the traffic packet.
   */
  dstPortRange?: number[];
  /**
   * @remarks
   * The DSCP value of the traffic packet.
   * 
   * @example
   * 3
   */
  matchDscp?: number;
  /**
   * @remarks
   * The protocol type of the traffic packet.
   * 
   * You can call the [ListTrafficMarkingPolicies](https://help.aliyun.com/document_detail/468322.html) operation to query the details of the traffic classification rules that you want to delete.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of the traffic packet. IPv4 and IPv6 addresses are supported.
   * 
   * @example
   * 10.72.0.0/16
   */
  srcCidr?: string;
  /**
   * @remarks
   * The source port of the traffic packet.
   */
  srcPortRange?: number[];
  /**
   * @remarks
   * The description of the traffic classification rule.
   * 
   * The description can be empty or 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * Hangzhou-Qingdao CAT
   */
  trafficMatchRuleDescription?: string;
  /**
   * @remarks
   * The name of the traffic classification rule.
   * 
   * The name can be empty or 1 to 128 characters in length and cannot start with http:// or https://.
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
   * The list of traffic classification rules to add.
   * 
   * You can add up to 50 traffic classification rules at a time.
   */
  addTrafficMatchRules?: UpdateTrafficMarkingPolicyAttributeRequestAddTrafficMatchRules[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * The client generates the value of this parameter. Ensure that the value is unique among different requests. The token can be up to 64 ASCII characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426****
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of traffic classification rules to delete.
   * >Provide as much information as possible for the traffic classification rules, such as the source CIDR block, destination CIDR block, source port, destination port, and DSCP value. Otherwise, the system may fail to locate the target traffic classification rules and will not delete them.
   */
  deleteTrafficMatchRules?: UpdateTrafficMarkingPolicyAttributeRequestDeleteTrafficMatchRules[];
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and business restrictions without modifying the name, description, or traffic classification rules of the traffic marking policy. If the request fails the dry run, the corresponding error message is returned. If the request passes the dry run, the error code `DryRunOperation` is returned.
   * - **false** (default): performs a dry run and sends the request. After the request passes the dry run, the name, description, and traffic classification rules of the traffic marking policy are directly modified.
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
   * The description can be empty or 1 to 256 characters in length and cannot start with http:// or https://.
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
   * The name can be empty or 1 to 128 characters in length and cannot start with http:// or https://.
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

