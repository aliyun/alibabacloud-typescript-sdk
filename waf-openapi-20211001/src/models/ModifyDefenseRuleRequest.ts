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
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the current WAF instance.
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
   * The protected object associated with the rule to modify.
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
   * The details of the protection rule. The value is a string that is converted from a JSON object constructed by a series of parameters. When you configure this parameter, you must specify the rule ID and the protection rule configuration to modify. The following parameters are included:
   * 
   * - **id**: Long | Required | The rule ID.
   * 
   * - Protection rule configuration: Same as the **Rules** parameter of the **CreateDefenseRule** operation. For more information, see the **protection rule parameter description** in [CreateDefenseRule](https://help.aliyun.com/document_detail/461421.html).
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
   * The ID of the protection rule template.
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

