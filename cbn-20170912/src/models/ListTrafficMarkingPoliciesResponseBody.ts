// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPoliciesTrafficMatchRules extends $dara.Model {
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
   * @example
   * 192.168.120.0/24
   */
  dstCidr?: string;
  /**
   * @remarks
   * The destination port range used to match data packets.
   */
  dstPortRange?: number[];
  /**
   * @remarks
   * The DSCP value used to match data packets.
   * 
   * >  If the value of the **MatchDscp** parameter is -1, data packets are considered a match regardless of the DSCP value.
   * 
   * @example
   * 6
   */
  matchDscp?: number;
  /**
   * @remarks
   * The protocol that is used to match packets.
   * 
   * >  Traffic marking policies support multiple protocols. For more information, see the documentation of CEN.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of packets. IPv6 and IPv4 addresses are supported.
   * 
   * @example
   * 192.168.10.0/24
   */
  srcCidr?: string;
  /**
   * @remarks
   * The source port range used to match data packets.
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
   * The status of the traffic classification rule. Valid values:
   * 
   * *   **Creating**: The rule is being created.
   * *   **Active**: The rule is available.
   * *   **Deleting**: The rule is being deleted.
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
   * The Differentiated Service Code Point (DSCP) value of the traffic marking policy.
   * 
   * @example
   * 5
   */
  markingDscp?: number;
  /**
   * @remarks
   * The priority of the traffic marking policy.
   * 
   * A lower value indicates a higher priority.
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
   * The status of the traffic marking policy. Valid values:
   * 
   * *   **Creating**: The policy is being created.
   * *   **Active**: The policy is available.
   * *   **Modifying**: The policy is being modified.
   * *   **Deleting**: The policy is being deleted.
   * 
   * @example
   * Creating
   */
  trafficMarkingPolicyStatus?: string;
  /**
   * @remarks
   * The traffic classification rules.
   */
  trafficMatchRules?: ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPoliciesTrafficMatchRules[];
  /**
   * @remarks
   * The ID of the transit router.
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
   * The number of entries returned on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the query.
   * 
   * *   If **NextToken** was not returned in the previous query, it indicates that no additional results exist.
   * *   If **NextToken** was returned in the previous query, specify the value to obtain the next set of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
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
   * The information about the traffic marking policy.
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

