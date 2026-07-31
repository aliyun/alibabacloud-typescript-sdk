// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRelatedDefenseRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The WAF protection scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * address_book
   */
  defenseScene?: string;
  /**
   * @remarks
   * The type of the protection rule. Only the following value is supported:
   * - **global**: a global-level rule.
   * 
   * This parameter is required.
   * 
   * @example
   * global
   */
  defenseType?: string;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-zz11sr5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token (**Token**) for the next page. If a next page exists, this field has a return value.
   * 
   * > If this parameter has a return value, a next page exists. Use the returned **NextToken** as a request parameter to obtain the data on the next page. Repeat this process until no value is returned, which indicates that all data has been retrieved.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the rule to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      defenseType: 'DefenseType',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      defenseType: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

