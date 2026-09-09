// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDefenseTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the protection template that you want to modify.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The details of the template. For more information, see the Detail parameter in [CreateDefenseTemplate](https://help.aliyun.com/document_detail/461613.html).
   * 
   * @example
   * {"trafficFeature":"{\\"global\\":0,\\"excludeStatus\\":1,\\"conditions\\":[{\\"key\\":\\"URL\\",\\"opValue\\":\\"not-contain\\",\\"values\\":\\"test\\"}]}"}
   */
  detail?: string;
  /**
   * @remarks
   * Specifies whether to enable the dry run mode. If you do not specify this parameter, a normal request is sent. Valid values:
   * - **true**: A dry run request is sent. The system checks whether the request meets the execution conditions without performing the specified operation. If the dry run fails, the corresponding error code is returned. If the dry run succeeds, the error code Defense.Control.DryRunOperation is returned.
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
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
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
   * The ID of the protection template that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * 7392
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the protection template that you want to modify. The name must be 1 to 255 characters in length and can contain Chinese characters, letters, digits, underscores (_), periods (.), and hyphens (-).
   * 
   * > Template names within the same protection scenario (**DefenseScene**) must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      detail: 'Detail',
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      detail: 'string',
      dryRun: 'boolean',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      templateId: 'number',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

