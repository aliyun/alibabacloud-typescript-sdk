// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDefenseTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The protection scenario. For more information, see the **DefenseScene** parameter in [CreateDefenseRule](https://help.aliyun.com/document_detail/461421.html).
   * 
   * This parameter is required.
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @remarks
   * The sub-scenario of the protection template. This parameter is supported only for advanced bot management scenarios.
   * 
   * @example
   * web
   */
  defenseSubScene?: string;
  /**
   * @remarks
   * The description of the protection template to create.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the WAF instance.
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
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The name of the protection template to create. The name must be 1 to 255 characters in length and can contain Chinese characters, letters, digits, underscores (_), periods (.), or hyphens (-).
   * 
   * > Template names must be unique within the same protection scenario (**DefenseScene**).
   * 
   * This parameter is required.
   * 
   * @example
   * test221
   */
  templateName?: string;
  /**
   * @remarks
   * The source of the protection template to create. Set the value to **custom**, which indicates user-defined.
   * 
   * This parameter is required.
   * 
   * @example
   * custom
   */
  templateOrigin?: string;
  /**
   * @remarks
   * The status of the protection template to create. Valid values:
   * - **0**: Disabled.
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
   * The templatetype of the protection template to create. Valid values:
   * - **user_default**: default protection.
   * - **user_custom**: custom protection.
   * 
   * This parameter is required.
   * 
   * @example
   * user_default
   */
  templateType?: string;
  /**
   * @remarks
   * The protected object groups to unbind when creating a default protection template. Use the format [**"group1","group2",……**].
   * > This parameter takes effect only when you create a **default template** (the value of **TemplateType** is **user_default**).
   */
  unbindResourceGroups?: string[];
  /**
   * @remarks
   * The protected objects to unbind when creating a default protection template. Use the format [**"XX1","XX2",……**].
   * > This parameter takes effect only when you create a **default template** (the value of **TemplateType** is **user_default**).
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

