// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTemplateResponseBodyTemplate } from "./GetTemplateResponseBodyTemplate";


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

