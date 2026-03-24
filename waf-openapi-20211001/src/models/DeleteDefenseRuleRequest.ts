// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the protection rule. Valid values:
   * 
   * - **template** (default): a protection rule template.
   * 
   * - **resource**: a rule for a protected object.
   * 
   * - **global**: a global rule.
   * 
   * @example
   * template
   */
  defenseType?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of your WAF instance.
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
   * The protected object of the rule that you want to delete.
   * 
   * > This parameter is required only when you set **DefenseType** to **resource**.
   * 
   * @example
   * rencs***-waf
   */
  resource?: string;
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
   * The IDs of the protection rules that you want to delete. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 2223455,23354,465565
   */
  ruleIds?: string;
  /**
   * @remarks
   * The ID of the protection rule template that you want to delete.
   * 
   * > This parameter is required only when you set **DefenseType** to **template**.
   * 
   * @example
   * 2221
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseType: 'DefenseType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleIds: 'RuleIds',
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
      ruleIds: 'string',
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

