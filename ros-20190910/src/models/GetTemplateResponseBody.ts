// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateResponseBodyPermissions extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account with which the template is shared.
   * 
   * @example
   * 142437958638****
   */
  accountId?: string;
  /**
   * @remarks
   * The sharing option.
   * 
   * The value ShareToAccounts indicates that the template is shared with one or more Alibaba Cloud accounts.
   * 
   * @example
   * ShareToAccounts
   */
  shareOption?: string;
  /**
   * @remarks
   * The service that is used for resource sharing. Valid values:
   * 
   * - ROS: Resources are shared from ROS by using the ROS console or calling the ROS API.
   * - ResourceDirectory: Resources are shared with accounts in a resource directory from Resource Management by using the resource sharing feature.
   * > -  The number of accounts with which resources are shared from ROS is independent of the number of accounts with which resources are shared from the resource directory.
   * > -  The shared resources from ROS cannot override or overwrite the shared resources from the resource directory.
   * > -  The shared resources from the resource directory can overwrite the shared resources from ROS.
   * 
   * @example
   * ROS
   */
  shareSource?: string;
  /**
   * @remarks
   * The version of the shared template. This parameter is returned only if you set ShareOption to ShareToAccounts and set VersionOption to Specified or Current.
   * 
   * Valid values: v1 to v100.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The version option for the shared template. This parameter is returned only if you set ShareOption to ShareToAccounts.
   * 
   * Valid values:
   * 
   * *   AllVersions: All template versions are shared.
   * *   Latest: Only the latest template version is shared. When the version of the template is updated, Resource Orchestration Service (ROS) updates the shared version to the latest version.
   * *   Current: Only the latest template version is shared. When the version of the template is updated, ROS does not update the shared version.
   * *   Specified: Only the specified template version is shared.
   * 
   * @example
   * AllVersions
   */
  versionOption?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      shareOption: 'ShareOption',
      shareSource: 'ShareSource',
      templateVersion: 'TemplateVersion',
      versionOption: 'VersionOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      shareOption: 'string',
      shareSource: 'string',
      templateVersion: 'string',
      versionOption: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the template.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the template.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Supplementary information for the public template.
   * 
   * @example
   * {"DeploymentDuration":null,"Title":"Self-Built_ElasticSearch_Snapshot_Saved_To_OSS","Labels":{"ResourceTypes":["ALIYUN::ECS::Instance","ALIYUN::ECS::SecurityGroup","ALIYUN::ECS::VPC","ALIYUN::ECS::VSwitch","ALIYUN::OSS::Bucket","ALIYUN::ROS::WaitCondition","ALIYUN::ROS::WaitConditionHandle"],"DeployTypes":["ROS"],"ApplicationScenes":["其他"]},"Provider":"ROS","Categories":["Solution"]}
   */
  additionalInfo?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the change set. This parameter is returned only if you specify ChangeSetId.
   * 
   * @example
   * e85abe0c-6528-43fb-ae93-fdf8de22****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The time when the template was created. This parameter is returned only if you specify TemplateId.
   * 
   * > - If you specify TemplateVersion, the creation time of the template whose version is specified by TemplateVersion is returned.
   * > - If you do not specify TemplateVersion, the creation time of the template whose version is the default version is returned.
   * 
   * @example
   * 2020-11-18T08:49:26
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the template. This parameter is returned only if you specify TemplateId.
   * 
   * @example
   * ROS template for create ECS instance.
   */
  description?: string;
  /**
   * @remarks
   * The description of the web UI in the ROS console.
   * 
   * @example
   * {}
   */
  interface?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the template belongs. This parameter is returned only if you specify TemplateId.
   * 
   * @example
   * 151266687691****
   */
  ownerId?: string;
  /**
   * @remarks
   * Details of the sharing status of the template. This parameter is returned only if you specify TemplateId and set IncludePermission to Enabled.
   * 
   * > - If TemplateVersion is not specified or does not take effect, the details of the sharing status of the template whose version is the default version is returned.
   * > - If TemplateVersion is specified and takes effect, the details of the sharing status of the template whose version is specified by TemplateVersion is returned.
   */
  permissions?: GetTemplateResponseBodyPermissions[];
  /**
   * @remarks
   * The region ID of the stack or stack group that uses the template. This parameter is returned only if you specify StackId, ChangeSetId, or StackGroupName.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The sharing type of the template. This parameter is returned only if you specify TemplateId.
   * 
   * Valid values:
   * 
   * *   Private: The template belongs to the template owner.
   * *   Shared: The template is shared by other users.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The name of the stack group. This parameter is returned only if you specify StackGroupName.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The ID of the stack. This parameter is returned only if you specify StackId.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The tags of the template.
   */
  tags?: GetTemplateResponseBodyTags[];
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the template. This parameter is returned only if you specify TemplateId.
   * 
   * @example
   * acs:ros:*:151266687691****:template/a52f81be-496f-4e1c-a286-8852ab54****
   */
  templateARN?: string;
  /**
   * @remarks
   * The content of the template.
   * 
   * @example
   * {"ROSTemplateFormatVersion": "2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The ID of the template. This parameter is returned only if you specify TemplateId.
   * 
   * If the template is a shared template, the value of this parameter is the same as the value of TemplateARN.
   * 
   * @example
   * a52f81be-496f-4e1c-a286-8852ab54****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template. This parameter is returned only if you specify TemplateId.
   * 
   * > -   If you specify TemplateVersion, the name of the template whose version is specified by TemplateVersion is returned.
   * > -  If you not specify TemplateVersion, the name of the template whose version is the default version is returned.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The version of the template. This parameter is returned only if you specify TemplateId.\\
   * If TemplateVersion is not specified or does not take effect, the default version is used.
   * 
   * If the template is a shared template, this parameter is returned only if you set VersionOption to AllVersions.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The time when the template was last updated. This parameter is returned only if you specify TemplateId.
   * 
   * > - If you specify TemplateVersion, the last update time of the template whose version is specified by TemplateVersion is returned.
   * > - If you do not specify TemplateVersion, the last update time of the template whose version is the default version is returned.
   * 
   * @example
   * 2020-12-07T06:11:48
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      additionalInfo: 'AdditionalInfo',
      changeSetId: 'ChangeSetId',
      createTime: 'CreateTime',
      description: 'Description',
      interface: 'Interface',
      ownerId: 'OwnerId',
      permissions: 'Permissions',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      stackGroupName: 'StackGroupName',
      stackId: 'StackId',
      tags: 'Tags',
      templateARN: 'TemplateARN',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      changeSetId: 'string',
      createTime: 'string',
      description: 'string',
      interface: 'string',
      ownerId: 'string',
      permissions: { 'type': 'array', 'itemType': GetTemplateResponseBodyPermissions },
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      stackGroupName: 'string',
      stackId: 'string',
      tags: { 'type': 'array', 'itemType': GetTemplateResponseBodyTags },
      templateARN: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.additionalInfo) {
      $dara.Model.validateMap(this.additionalInfo);
    }
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

