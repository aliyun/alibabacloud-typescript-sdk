// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the change set.
   * 
   * > You must specify one of the following parameters: StackId, ChangeSetId, StackGroupName, and TemplateId.
   * 
   * @example
   * 1f6521a4-05af-4975-afe9-bc4b45ad****
   */
  changeSetId?: string;
  /**
   * @remarks
   * Specifies whether to query the shared information about the template. Valid values:
   * 
   * *   Enabled
   * *   Disabled (default)
   * 
   * > Only the template owner can query the shared information of a template.
   * 
   * @example
   * Enabled
   */
  includePermission?: string;
  /**
   * @remarks
   * Specifies whether to query the information about tags. Valid values:
   * 
   * *   Enabled
   * *   Disabled (default)
   * 
   * > This parameter takes effect only if you specify TemplateId.
   * 
   * @example
   * Enabled
   */
  includeTags?: string;
  /**
   * @remarks
   * The region ID of the stack or stack group that uses the template. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the stack group.
   * 
   * > You must specify one of the following parameters: StackId, ChangeSetId, StackGroupName, and TemplateId.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * > You must specify one of the following parameters: StackId, ChangeSetId, StackGroupName, and TemplateId.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * This parameter applies to shared and private templates. If the template is a shared template, the value of TemplateId is the same as the value of TemplateARN. You can use the template ID to query a shared template.
   * 
   * > You must specify one of the following parameters: StackId, ChangeSetId, StackGroupName, and TemplateId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The stage of the template. This parameter takes effect only if you specify StackId, ChangeSetId, or StackGroupName.
   * 
   * Valid values:
   * 
   * *   Processed (default): returns the processed template.
   * *   Original: returns the original template.
   * 
   * @example
   * Processed
   */
  templateStage?: string;
  /**
   * @remarks
   * The version of the template. This parameter takes effect only if you specify TemplateId.\\
   * If the template is a shared template, you can specify this parameter only if VersionOption is set to AllVersions. For more information, see [SetTemplatePermission](https://help.aliyun.com/document_detail/194768.html).
   * 
   * Valid values: v1 to v100.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      includePermission: 'IncludePermission',
      includeTags: 'IncludeTags',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      stackId: 'StackId',
      templateId: 'TemplateId',
      templateStage: 'TemplateStage',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      includePermission: 'string',
      includeTags: 'string',
      regionId: 'string',
      stackGroupName: 'string',
      stackId: 'string',
      templateId: 'string',
      templateStage: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

