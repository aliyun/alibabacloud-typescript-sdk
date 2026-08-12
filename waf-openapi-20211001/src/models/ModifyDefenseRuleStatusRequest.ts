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
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the protection rule to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * 20002615
   */
  ruleId?: number;
  /**
   * @remarks
   * The status of the protection rule to set. Valid values: 
   * - **0**: Disabled.  
   * - **1**: Enabled.
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
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
      ruleStatus: 'RuleStatus',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseType: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
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

