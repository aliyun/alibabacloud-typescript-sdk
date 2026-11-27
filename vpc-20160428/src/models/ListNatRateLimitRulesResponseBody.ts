// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNatRateLimitRulesResponseBodyRuleInfos extends $dara.Model {
  /**
   * @remarks
   * The bandwidth limit. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  bandwidthLimit?: string;
  /**
   * @remarks
   * The source match type of the rate limiting rule. Valid values:
   * 
   * - **CIDR**: CIDR block match. This is the default value.
   * - **TUNNEL**: tunnel match. If this value is specified, a corresponding SNAT rule of the TUNNEL type must exist.
   * 
   * @example
   * CIDR
   */
  matchType?: string;
  /**
   * @remarks
   * The description of the rate limiting rule.
   * 
   * @example
   * test
   */
  ruleDescription?: string;
  /**
   * @remarks
   * The ID of the rate limiting rule.
   * 
   * @example
   * limit-rule-****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the rate limiting rule.
   * 
   * @example
   * test-rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The source CIDR blocks of the rate limiting rule.
   */
  sourceCIDRs?: string[];
  /**
   * @remarks
   * The status of the rate limiting rule. Valid values:
   * - **Created**: The rule is available.
   * - **Deleting**: The rule is being deleted.
   * - **Modifying**: The rule is being modified.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tunnel index. If the MatchType parameter is set to TUNNEL, a corresponding SNAT rule must exist.
   * 
   * @example
   * 1
   */
  tunnelIndex?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthLimit: 'BandwidthLimit',
      matchType: 'MatchType',
      ruleDescription: 'RuleDescription',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sourceCIDRs: 'SourceCIDRs',
      status: 'Status',
      tunnelIndex: 'TunnelIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthLimit: 'string',
      matchType: 'string',
      ruleDescription: 'string',
      ruleId: 'string',
      ruleName: 'string',
      sourceCIDRs: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tunnelIndex: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceCIDRs)) {
      $dara.Model.validateArray(this.sourceCIDRs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNatRateLimitRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The NAT gateway instance ID.
   * 
   * @example
   * ngw-bp1b0lic8uz4r6vf2****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * - If **NextToken** is empty, no next query is to be sent.
   * - If **NextToken** is returned, the value indicates the token that is used for the next query.
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
   * 2315DEB7-5E92-423A-91F7-4C1EC9AD97C3
   */
  requestId?: string;
  /**
   * @remarks
   * The list of rate limiting rules.
   */
  ruleInfos?: ListNatRateLimitRulesResponseBodyRuleInfos[];
  /**
   * @remarks
   * The total number of rate limiting rules returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      natGatewayId: 'NatGatewayId',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      ruleInfos: 'RuleInfos',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      natGatewayId: 'string',
      nextToken: 'string',
      requestId: 'string',
      ruleInfos: { 'type': 'array', 'itemType': ListNatRateLimitRulesResponseBodyRuleInfos },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleInfos)) {
      $dara.Model.validateArray(this.ruleInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

