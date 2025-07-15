// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateResponseBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * The creator of the template.
   * 
   * @example
   * ACS
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * "{\\"en\\": \\"Creates an ECS image\\", \\"zh-cn\\": \\"创建一个ECS镜像\\", \\"name-en\\": \\"Create Image\\", \\"name-zh-cn\\": \\"创建镜像\\", \\"categories\\": [\\"image_manage\\", \\"application_manage\\"]}"
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the template was configured with a trigger.
   * 
   * @example
   * false
   */
  hasTrigger?: boolean;
  /**
   * @remarks
   * The SHA-256 value of the template content.
   * 
   * @example
   * 40fb5e3e08ef6c8a499ff7cd8441194f518028ad08338a84cb70c023a64576f1
   */
  hash?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the template. The share type of a user-created template is **Private**.
   * 
   * @example
   * Public
   */
  shareType?: string;
  /**
   * @remarks
   * The tag keys and values. The number of key-value pairs ranges from 1 to 20.
   * 
   * @example
   * {"k1":"k2","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The format of the template. The system automatically determines whether the format is JSON or YAML.
   * 
   * @example
   * YAML
   */
  templateFormat?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * t-4bdb1745c171401883a2
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * ACS-ECS-CreateImage
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the template.
   * 
   * @example
   * Automation
   */
  templateType?: string;
  /**
   * @remarks
   * The version of the template. The name of the version consists of the letter v and a number. The number starts from 1.
   * 
   * @example
   * v15
   */
  templateVersion?: string;
  /**
   * @remarks
   * The user who last updated the template.
   * 
   * @example
   * ACS
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the template was last updated.
   * 
   * @example
   * 2022-04-26T08:37:07Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The name of the version of the template.
   * 
   * @example
   * version15
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hasTrigger: 'HasTrigger',
      hash: 'Hash',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hasTrigger: 'boolean',
      hash: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the template.
   * 
   * @example
   * "FormatVersion: OOS-2019-06-01\\nDescription:\\n  en:  Creates an ECS image\\n  zh-cn: 创建一个ECS镜像\\n  name-en: Create Image\\n  name-zh-cn: 创建镜像\\n  categories:\\n    - image_manage\\n    - application_manage\\nParameters:\\n  regionId:\\n    Type: String\\n    Label:\\n      en: RegionId\\n      zh-cn: 地域ID\\n    AssociationProperty: RegionId\\n    Default: \\"{{ ACS::RegionId }}\\"\\n  instanceId:\\n    Label:\\n      en: InstanceId\\n      zh-cn: ECS实例ID\\n    Type: String\\n    AssociationProperty: ALIYUN::ECS::Instance::InstanceId\\n    AssociationPropertyMetadata:\\n      RegionId: regionId\\n  imageName:\\n    Label:\\n      en: ImageName\\n      zh-cn: 新镜像的名称\\n    Type: String\\n    Description:\\n      en: <p class=\\"p\\">Note:</p> <ul class=\\"ul\\"> <li class=\\"li\\">Length is 2~128 English or Chinese characters</li> <li class=\\"li\\"><font color=\\"red\\">must start with big or small letters or Chinese, not http:// and https://. </font></li> <li class=\\"li\\">Can contain numbers, colons (:), underscores (_), or dashes (-). </li> </ul>\\n      zh-cn: <p class=\\"p\\">注意：</p> <ul class=\\"ul\\"> <li class=\\"li\\">长度为2~128个英文或中文字符</li> <li class=\\"li\\"><font color=\\"red\\">必须以大小字母或中文开头，不能以http://和https://开头。</font></li> <li class=\\"li\\">可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。</li> </ul>\\n  tags:\\n    Label:\\n      en: Tags\\n      zh-cn: 镜像标签\\n    Type: Json\\n    AssociationProperty: Tags\\n    AssociationPropertyMetadata:\\n      ShowSystem: false\\n    Default: []\\n  OOSAssumeRole:\\n    Label:\\n      en: OOSAssumeRole\\n      zh-cn: OOS扮演的RAM角色\\n    Type: String\\n    Default: OOSServiceRole\\nRamRole: \\"{{ OOSAssumeRole }}\\"\\nTasks:\\n- Name: createImage\\n  Action: ACS::ECS::CreateImage\\n  Description:\\n    en: Create new image with the specified image name and instance ID\\n    zh-cn: 通过指定实例ID和镜像名称创建新的镜像\\n  Properties:\\n    regionId: \\"{{ regionId }}\\"\\n    imageName: \\"{{ imageName }}__on_{{ ACS::ExecutionId }}_at_{{ Acs::CurrentDate }}\\"\\n    instanceId: \\"{{ instanceId }}\\"\\n    tags: \\"{{tags}}\\"\\n  Outputs:\\n    imageId:\\n      ValueSelector: imageId\\n      Type: String\\nOutputs:\\n  imageId:\\n    Type: String\\n    Value: \\"{{ createImage.imageId }}\\"\\nMetadata:\\n  ALIYUN::OOS::Interface:\\n    ParameterGroups:\\n      - Parameters:\\n          - regionId\\n          - instanceId\\n        Label:\\n          default:\\n            zh-cn: 选择实例\\n            en: Select Ecs Instances\\n      - Parameters:\\n          - imageName\\n          - tags\\n        Label:\\n          default:\\n            zh-cn: 镜像设置\\n            en: Image Configure\\n      - Parameters:\\n          - OOSAssumeRole\\n        Label:\\n          default:\\n            zh-cn: 高级选项\\n            en: Control Options"
   */
  content?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5BBE2663-A18E-5261-9BBB-F4832F5294D9
   */
  requestId?: string;
  /**
   * @remarks
   * The metadata of the template.
   */
  template?: GetTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
      template: GetTemplateResponseBodyTemplate,
    };
  }

  validate() {
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

