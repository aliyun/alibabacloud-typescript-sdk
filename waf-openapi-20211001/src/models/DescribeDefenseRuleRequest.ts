// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the protection rule.
   * 
   * @example
   * template
   */
  defenseType?: string;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of your current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
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
   * The protected object associated with the rule to query.
   * > This parameter is required only when **DefenseType** is set to **resource**.
   * 
   * @example
   * rencs***-waf
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the protection rule to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 20026192
   */
  ruleId?: number;
  /**
   * @remarks
   * The ID of the protection template to query.
   * > This parameter is required only when **DefenseType** is set to **template**.
   * 
   * @example
   * 10318
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseType: 'DefenseType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseType: 'string',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

