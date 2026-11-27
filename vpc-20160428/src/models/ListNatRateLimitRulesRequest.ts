// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNatRateLimitRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, and you must ensure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * - If this is your first query or no next query is to be sent, ignore this parameter.
   * 
   * - If a next query is to be sent, set the value to the **NextToken** value returned from the last call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the NAT gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the rate limiting rules.
   */
  ruleIds?: string[];
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
   * The source IP address CIDR block of the rate limiting rule.
   * 
   * @example
   * 10.1.1.0/24
   */
  sourceCIDR?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      maxResults: 'MaxResults',
      natGatewayId: 'NatGatewayId',
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      ruleIds: 'RuleIds',
      ruleName: 'RuleName',
      sourceCIDR: 'SourceCIDR',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      maxResults: 'number',
      natGatewayId: 'string',
      nextToken: 'string',
      ownerId: 'number',
      regionId: 'string',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
      ruleName: 'string',
      sourceCIDR: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

