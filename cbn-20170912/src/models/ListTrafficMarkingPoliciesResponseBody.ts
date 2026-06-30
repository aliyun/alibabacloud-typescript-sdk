// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPoliciesTrafficMatchRules extends $dara.Model {
  /**
   * @remarks
   * The address type. Valid values are IPv4, IPv6, or empty.
   * 
   * @example
   * IPv4
   */
  addressFamily?: string;
  /**
   * @remarks
   * The destination CIDR block of the traffic message. IPv4 and IPv6 addresses are supported.
   * 
   * @example
   * 192.168.120.0/24
   */
  dstCidr?: string;
  /**
   * @remarks
   * The destination port range to be matched by the traffic classification rule.
   */
  dstPortRange?: number[];
  /**
   * @remarks
   * The DSCP value of the traffic message.
   * 
   * > If **MatchDscp** returns -1, it indicates that all DSCP values are matched.
   * 
   * @example
   * 6
   */
  matchDscp?: number;
  /**
   * @remarks
   * The protocol type of the traffic message.
   * 
   * > A traffic marking policy supports matching multiple protocol types. For more information about the protocol types, see the relevant documentation.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of the traffic message. IPv6 and IPv4 addresses are supported.
   * 
   * @example
   * 192.168.10.0/24
   */
  srcCidr?: string;
  /**
   * @remarks
   * The source port range to be matched by the traffic classification rule.
   */
  srcPortRange?: number[];
  /**
   * @remarks
   * The description of the traffic classification rule.
   * 
   * @example
   * desctest
   */
  trafficMatchRuleDescription?: string;
  /**
   * @remarks
   * The ID of the traffic classification rule.
   * 
   * @example
   * tm-rule-fa9kgq1e90rmhc****
   */
  trafficMatchRuleId?: string;
  /**
   * @remarks
   * The name of the traffic classification rule.
   * 
   * @example
   * nametest
   */
  trafficMatchRuleName?: string;
  /**
   * @remarks
   * The status of the traffic classification rule.
   * 
   * - **Creating**: The rule is being created.
   * 
   * - **Active**: The rule is available.
   * 
   * - **Deleting**: The rule is being deleted.
   * 
   * @example
   * Creating
   */
  trafficMatchRuleStatus?: string;
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
      trafficMatchRuleId: 'TrafficMatchRuleId',
      trafficMatchRuleName: 'TrafficMatchRuleName',
      trafficMatchRuleStatus: 'TrafficMatchRuleStatus',
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
      trafficMatchRuleId: 'string',
      trafficMatchRuleName: 'string',
      trafficMatchRuleStatus: 'string',
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

export class ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPolicies extends $dara.Model {
  /**
   * @remarks
   * The Differentiated Services Code Point (DSCP) value of the traffic marking policy.
   * 
   * @example
   * 5
   */
  markingDscp?: number;
  /**
   * @remarks
   * The priority of the traffic marking policy.
   * 
   * A smaller value indicates a higher priority.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The description of the traffic marking policy.
   * 
   * @example
   * desctest
   */
  trafficMarkingPolicyDescription?: string;
  /**
   * @remarks
   * The ID of the traffic marking policy.
   * 
   * @example
   * tm-iz5egnyitxiroq****
   */
  trafficMarkingPolicyId?: string;
  /**
   * @remarks
   * The name of the traffic marking policy.
   * 
   * @example
   * nametest
   */
  trafficMarkingPolicyName?: string;
  /**
   * @remarks
   * The status of the traffic marking policy.
   * 
   * - **Creating**: The policy is being created.
   * 
   * - **Active**: The policy is available.
   * 
   * - **Modifying**: The policy is being modified.
   * 
   * - **Deleting**: The policy is being deleted.
   * 
   * @example
   * Creating
   */
  trafficMarkingPolicyStatus?: string;
  /**
   * @remarks
   * The list of traffic classification rules.
   */
  trafficMatchRules?: ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPoliciesTrafficMatchRules[];
  /**
   * @remarks
   * The ID of the TransitRouter instance.
   * 
   * @example
   * tr-ccni***
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      markingDscp: 'MarkingDscp',
      priority: 'Priority',
      trafficMarkingPolicyDescription: 'TrafficMarkingPolicyDescription',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
      trafficMarkingPolicyName: 'TrafficMarkingPolicyName',
      trafficMarkingPolicyStatus: 'TrafficMarkingPolicyStatus',
      trafficMatchRules: 'TrafficMatchRules',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markingDscp: 'number',
      priority: 'number',
      trafficMarkingPolicyDescription: 'string',
      trafficMarkingPolicyId: 'string',
      trafficMarkingPolicyName: 'string',
      trafficMarkingPolicyStatus: 'string',
      trafficMatchRules: { 'type': 'array', 'itemType': ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPoliciesTrafficMatchRules },
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

export class ListTrafficMarkingPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query.
   * 
   * - If **NextToken** is empty, no next query is to be sent.
   * 
   * - If a value is returned for **NextToken**, the value is the token that is used for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 699989E4-64A0-5F78-8B93-CDB32D98971F
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of traffic marking policies.
   */
  trafficMarkingPolicies?: ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPolicies[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficMarkingPolicies: 'TrafficMarkingPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      trafficMarkingPolicies: { 'type': 'array', 'itemType': ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPolicies },
    };
  }

  validate() {
    if(Array.isArray(this.trafficMarkingPolicies)) {
      $dara.Model.validateArray(this.trafficMarkingPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

