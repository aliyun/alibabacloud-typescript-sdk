// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The protection scenario to be modified. For more information, see the **DefenseScene** parameter in [CreateDefenseRule](https://help.aliyun.com/document_detail/461421.html).
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
   * Specifies whether to enable the dry run mode. If you do not specify this parameter, a normal request is initiated. Valid values:
   * - **true**: initiates a dry run request. The system only checks whether the request meets the execution conditions and does not perform the operations specified in the request. If the dry run fails, the corresponding error code is returned. If the dry run succeeds, the error code Defense.Control.DryRunOperation is returned.
   * - **false**: initiates a normal request. The system performs the operations specified in the request after the check succeeds.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
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
   * The protected object to which the modified rule applies.
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
   * The protection target type. This applies to rules where **DefenseType** is set to **resource**. Valid values:
   * 
   * - **single** (default): Single protected object.
   * - **group**: Protected object group.
   * 
   * @example
   * single
   */
  resourceType?: string;
  /**
   * @remarks
   * The details of the protection rule. The value is a JSON string that consists of multiple parameters. When you configure this parameter, you must specify the rule ID and set the configuration of the protection rule to be modified. The details include:
   * 
   * - **id**: Long | Required | The rule ID.
   * 
   * - Protection rule configuration: Same as the **Rules** parameter of the **CreateDefenseRule** operation. For more information, see the **Protection rule parameter description** in [CreateDefenseRule](https://help.aliyun.com/document_detail/461421.html).
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
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceType: 'ResourceType',
      rules: 'Rules',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      defenseType: 'string',
      dryRun: 'boolean',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceType: 'string',
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

