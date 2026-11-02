// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNatRateLimitRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The new bandwidth limit. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  bandwidthLimit?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run and does not query the resource status. The system checks whether your AccessKey pair is valid, the authorization of Resource Access Management (RAM) users, and whether required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends a normal request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The ID of the NAT gateway to which the rate limit rule belongs.
   * 
   * @example
   * ngw-bp1b0lic8uz4r6vf2****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The region ID of the NAT gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The new description of the rate limit rule.
   * 
   * @example
   * test
   */
  ruleDescription?: string;
  /**
   * @remarks
   * The ID of the rate limit rule.
   * 
   * @example
   * limit-rule-****
   */
  ruleId?: string;
  /**
   * @remarks
   * The new name of the rate limit rule.
   * 
   * @example
   * test-rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The new list of source CIDR blocks for the rate limit rule.
   */
  sourceCIDRs?: string[];
  static names(): { [key: string]: string } {
    return {
      bandwidthLimit: 'BandwidthLimit',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      natGatewayId: 'NatGatewayId',
      regionId: 'RegionId',
      ruleDescription: 'RuleDescription',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sourceCIDRs: 'SourceCIDRs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthLimit: 'string',
      clientToken: 'string',
      dryRun: 'string',
      natGatewayId: 'string',
      regionId: 'string',
      ruleDescription: 'string',
      ruleId: 'string',
      ruleName: 'string',
      sourceCIDRs: { 'type': 'array', 'itemType': 'string' },
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

