// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDefenseRuleStatusRequest extends $dara.Model {
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
   * 
   * - **true**: initiates a dry run request. The system only checks whether the request meets the execution conditions and does not perform the operations specified in the request. If the dry run fails, the corresponding error code is returned. If the dry run succeeds, the error code Defense.Control.DryRunOperation is returned.
   * 
   * - **false**: initiates a normal request. If the check succeeds, the operations specified in the request are performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
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
   * The protection object or protection group. This parameter is used for protection rules whose **DefenseType** is **resource**. Specify the name of the protection object or protection group based on **ResourceType**.
   * 
   * @example
   * resource-api-example
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
   * The type of the protection target. This parameter is applicable to rules whose **DefenseType** is **resource**. Valid values:
   * 
   * - **single (default)**: single protection object.
   * - **group**: protection group.
   * 
   * @example
   * single
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the protection rule to be modified.
   * 
   * > You can call the [DescribeDefenseRules](https://help.aliyun.com/document_detail/461426.html) operation to query the ID of the protection rule. You can create a protection rule by calling the [CreateDefenseRule](https://help.aliyun.com/document_detail/461421.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 20002615
   */
  ruleId?: number;
  /**
   * @remarks
   * The status of the protection rule to be modified. Valid values: 
   * - **0**: disabled  
   * - **1**: enabled
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ruleStatus?: number;
  /**
   * @remarks
   * The ID of the protection rule template.
   * 
   * @example
   * 7239
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseType: 'DefenseType',
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceType: 'ResourceType',
      ruleId: 'RuleId',
      ruleStatus: 'RuleStatus',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseType: 'string',
      dryRun: 'boolean',
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceType: 'string',
      ruleId: 'number',
      ruleStatus: 'number',
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

