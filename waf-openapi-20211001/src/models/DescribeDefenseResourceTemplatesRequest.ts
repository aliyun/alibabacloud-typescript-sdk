// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseResourceTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-9lb36****0e
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
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
   * The name of the protected object or protected object group that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxxhemicals.cn-waf
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-aek2ax2y5****pi
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of the protected resource. Valid values:
   * 
   * *   **single**: protected object. This is the default value.
   * *   **group**: protected object group.
   * 
   * @example
   * single
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the protection rule.
   * 
   * @example
   * 20111098
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * demoRuleName
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the protection rule. Valid values:
   * 
   * *   **defense**: defense rule. This is the default value.
   * *   **whitelist**: whitelist rule.
   * 
   * @example
   * whitelist
   */
  ruleType?: string;
  /**
   * @remarks
   * The name of the protection rule template.
   * 
   * @example
   * test221
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceType: 'ResourceType',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceType: 'string',
      ruleId: 'number',
      ruleName: 'string',
      ruleType: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

