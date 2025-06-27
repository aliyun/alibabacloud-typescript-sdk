// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDefenseTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The scenario in which you want to use the protection rule template. For more information, see the description of the **DefenseScene** parameter in the [CreateDefenseRule](~~CreateDefenseRule~~) topic.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @remarks
   * The description of the protection rule template.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
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
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
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
   * The name of the protection rule template.
   * 
   * This parameter is required.
   * 
   * @example
   * test221
   */
  templateName?: string;
  /**
   * @remarks
   * The origin of the protection rule template that you want to create. Set the value to **custom**. The value specifies that the protection rule template is a custom template.
   * 
   * This parameter is required.
   * 
   * @example
   * custom
   */
  templateOrigin?: string;
  /**
   * @remarks
   * The status of the protection rule template. Valid values:
   * 
   * *   **0:** disabled.
   * *   **1:** enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  templateStatus?: number;
  /**
   * @remarks
   * The type of the protection rule template. Valid values:
   * 
   * *   **user_default:** default template.
   * *   **user_custom:** custom template.
   * 
   * This parameter is required.
   * 
   * @example
   * user_default
   */
  templateType?: string;
  unbindResourceGroups?: string[];
  unbindResources?: string[];
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
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

