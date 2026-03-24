// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The protection scenario to modify. For more information, see the **DefenseScene** parameter in [CreateDefenseRule](https://help.aliyun.com/document_detail/461421.html).
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @remarks
   * The type of the protection rule. Valid values:
   * 
   * - **template** (default): a template protection rule.
   * 
   * - **resource**: a rule for a specific protected object.
   * 
   * - **global**: a global rule.
   * 
   * @example
   * template
   */
  defenseType?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of your WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region of the WAF instance. Valid values:
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
   * The protected object for which you want to modify the rule.
   * 
   * > This parameter is required only when **DefenseType** is set to **resource**.
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
   * The details of the protection rule, in a JSON string format. Specify the rule ID and the configuration of the protection rule to modify. The details include the following:
   * 
   * - **id**: The ID of the rule. This parameter is required. Data type: Long.
   * 
   * - Configuration of the protection rule: The parameters are the same as the **Rules** parameter of the [CreateDefenseRule](https://help.aliyun.com/document_detail/461421.html) operation. For more information, see the description of the protection rule parameters in [CreateDefenseRule](https://help.aliyun.com/document_detail/461421.html).
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *       {
   *             "id": 2344,
   *             "policyId": 1012,
   *             "action": "block"
   *       }
   * ]
   */
  rules?: string;
  /**
   * @remarks
   * The ID of the protection template.
   * 
   * > This parameter is required only when **DefenseType** is set to **template**.
   * 
   * @example
   * 5325
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      defenseType: 'DefenseType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      rules: 'Rules',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      defenseType: 'string',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      rules: 'string',
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

