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
   * The sub-scenario of the protection template. This parameter is supported only for the advanced bot management scenario.
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
   * The detailed template information, which is a JSON-formatted string. Different key-value pairs represent different attributes of the protected object. For more information, see the Detail description.
   * 
   * > This parameter applies only to the new version of basic protection (**waf_base**) and the new version of bot management (**bot_manager**) protection scenarios. This parameter is required for the new version of bot management (**bot_manager**) protection scenario.
   * 
   * @example
   * {"trafficFeature":"{\\"global\\":0,\\"excludeStatus\\":1,\\"conditions\\":[{\\"key\\":\\"URL\\",\\"opValue\\":\\"not-contain\\",\\"values\\":\\"test\\"}]}"}
   */
  detail?: string;
  /**
   * @remarks
   * Specifies whether to enable the dry run mode. If you do not specify this parameter, a normal request is sent. Valid values:
   * 
   * - **true**: A dry run request is sent. The system checks whether the request meets the execution conditions without performing the specified operation. If the dry run fails, the corresponding error code is returned. If the dry run succeeds, the error code Defense.Control.DryRunOperation is returned.
   * 
   * - **false**: A normal request is sent. The specified operation is performed after the request passes the check.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to obtain the ID of the current WAF instance.
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
   * The name of the protection template to create. The name must be 1 to 255 characters in length and can contain Chinese characters, letters, digits, underscores (_), periods (.), and hyphens (-).
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
   * > This parameter takes effect only when creating a **default template** (when **TemplateType** is set to **user_default**).
   */
  unbindResourceGroups?: string[];
  /**
   * @remarks
   * The protected objects to unbind when creating a default protection template. Use the format [**"XX1","XX2",……**].
   * > This parameter takes effect only when creating a **default template** (when **TemplateType** is set to **user_default**).
   */
  unbindResources?: string[];
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      defenseSubScene: 'DefenseSubScene',
      description: 'Description',
      detail: 'Detail',
      dryRun: 'DryRun',
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
      detail: 'string',
      dryRun: 'boolean',
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

