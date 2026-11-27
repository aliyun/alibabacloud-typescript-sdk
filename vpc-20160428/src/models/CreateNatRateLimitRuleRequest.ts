// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatRateLimitRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth limit. Unit: Mbit/s.
   * 
   * @example
   * 500
   */
  bandwidthLimit?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: The system prechecks the request without creating the rate limiting rule. The system checks whether the required parameters are specified, and validates the request format and limits. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * 
   * 
   * - **false** (default): The system sends a normal request. If the request passes the precheck, the rate limiting rule is created.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The source match type for rate limiting. Valid values:
   * 
   * CIDR: CIDR block match. This is the default value.
   * TUNNEL: tunnel match. If you set the value to TUNNEL, a corresponding SNAT rule of the TUNNEL type must exist.
   * 
   * @example
   * CIDR
   */
  matchType?: string;
  /**
   * @remarks
   * The ID of the NAT gateway to which the rate limiting rule belongs.
   * 
   * @example
   * ngw-****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The region ID of the NAT gateway.
   * 
   * You can call the DescribeRegions operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the rate limiting rule.
   * 
   * @example
   * test rule description
   */
  ruleDescription?: string;
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
   * The list of source CIDR blocks to which the rate limiting rule applies.
   */
  sourceCIDRs?: string[];
  /**
   * @remarks
   * The tunnel index. If MatchType is set to TUNNEL, a corresponding SNAT rule must exist.
   * 
   * @example
   * 1
   */
  tunnelIndex?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthLimit: 'BandwidthLimit',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      matchType: 'MatchType',
      natGatewayId: 'NatGatewayId',
      regionId: 'RegionId',
      ruleDescription: 'RuleDescription',
      ruleName: 'RuleName',
      sourceCIDRs: 'SourceCIDRs',
      tunnelIndex: 'TunnelIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthLimit: 'string',
      clientToken: 'string',
      dryRun: 'string',
      matchType: 'string',
      natGatewayId: 'string',
      regionId: 'string',
      ruleDescription: 'string',
      ruleName: 'string',
      sourceCIDRs: { 'type': 'array', 'itemType': 'string' },
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

