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

