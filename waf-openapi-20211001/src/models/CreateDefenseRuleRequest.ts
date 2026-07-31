// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The WAF protection scenario to create.
   * 
   * This parameter is required.
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
   * The WAF instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protection object associated with the rule to create.
   * 
   * @example
   * sec****-waf
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
   * The rule configuration content, which is a string converted from a JSON object constructed with a series of parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_group
   */
  rules?: string;
  /**
   * @remarks
   * The ID of the protection template for the protection rule to create.
   * 
   * @example
   * 1122
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

