// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDefenseTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The protection scenario. For more information, see the **DefenseScene** parameter of the [CreateDefenseRule](https://help.aliyun.com/document_detail/461421.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @example
   * bot_custom_acl
   */
  defenseSubScene?: string;
  /**
   * @remarks
   * The description of the protection template.
   * 
   * - **bot_custom_acl**: Represents the protection template for advanced custom rules in bot management.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to get the ID of the WAF instance.
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
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * - **cn-hangzhou**: Represents the Chinese mainland.
   * 
   * - **ap-southeast-1**: Represents regions outside the Chinese mainland.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The name of the protection template. The name must be 1 to 255 characters long and can contain letters, digits, Chinese characters, underscores (_), periods (.), and hyphens (-).
   * 
   * > The names of templates for the same protection scenario (**DefenseScene**) must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * test221
   */
  templateName?: string;
  /**
   * @remarks
   * The origin of the protection template. The value must be **custom**.
   * 
   * This parameter is required.
   * 
   * @example
   * custom
   */
  templateOrigin?: string;
  /**
   * @remarks
   * Indicates whether the protection template is enabled. Valid values:
   * 
   * - **0**: Disabled.
   * 
   * - **1**: Enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  templateStatus?: number;
  /**
   * @remarks
   * The type of the protection template. Valid values:
   * 
   * - **user_default**: The user\\"s default template.
   * 
   * - **user_custom**: A user-defined template.
   * 
   * This parameter is required.
   * 
   * @example
   * user_default
   */
  templateType?: string;
  /**
   * @remarks
   * The protected objects to unbind when you create a default template. Use the [**"XX1","XX2",...**] format.
   * 
   * > This parameter takes effect only when you create a **default template** (**TemplateType** is set to **user_default**).
   */
  unbindResourceGroups?: string[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   */
  unbindResources?: string[];
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      defenseSubScene: 'DefenseSubScene',
      description: 'Description',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateName: 'TemplateName',
      templateOrigin: 'TemplateOrigin',
      templateStatus: 'TemplateStatus',
      templateType: 'TemplateType',
      unbindResourceGroups: 'UnbindResourceGroups',
      unbindResources: 'UnbindResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      defenseSubScene: 'string',
      description: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateName: 'string',
      templateOrigin: 'string',
      templateStatus: 'number',
      templateType: 'string',
      unbindResourceGroups: { 'type': 'array', 'itemType': 'string' },
      unbindResources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.unbindResourceGroups)) {
      $dara.Model.validateArray(this.unbindResourceGroups);
    }
    if(Array.isArray(this.unbindResources)) {
      $dara.Model.validateArray(this.unbindResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

