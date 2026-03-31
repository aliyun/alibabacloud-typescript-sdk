// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseRulesRequest extends $dara.Model {
  defenseType?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query conditions. Specify a string that contains multiple parameters in the JSON format.
   * 
   * >  The results vary based on the query conditions. For more information, see the "**Query parameters**" section in this topic.
   * 
   * @example
   * {\\\\"name\\\\":\\\\"IP address blocking_20220822_10\\\\",\\\\"scene\\\\":\\\\"custom_acl\\\\",\\\\"templateId\\\\":5327}
   */
  query?: string;
  /**
   * @remarks
   * The region ID of the WAF instance. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of protection rule that you want to query. Valid values:
   * 
   * *   **whitelist:** whitelist rule.
   * *   **defense:** defense rule. This is the default value.
   * 
   * @example
   * whitelist
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      defenseType: 'DefenseType',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseType: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

