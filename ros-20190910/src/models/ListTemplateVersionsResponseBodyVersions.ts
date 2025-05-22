// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateVersionsResponseBodyVersions extends $dara.Model {
  /**
   * @remarks
   * The time when the version was created.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the version.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The template ID. This parameter applies to shared and private templates. For a shared template, the template ID is the same as the Alibaba Cloud Resource Name (ARN) of the template.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The template name that corresponds to the specified version.
   * 
   * @example
   * test
   */
  templateName?: string;
  /**
   * @remarks
   * The version number.
   * 
   * For a shared template, this parameter is returned only if VersionOption is set to AllVersions.
   * 
   * Valid values: v1 to v100.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The time when the version was last updated.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

