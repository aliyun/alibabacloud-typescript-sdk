// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomTemplateResponseBodyCustomTemplate extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2022-04-19T02:04:31Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the template is the default template.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The time when the template was last modified.
   * 
   * @example
   * 2022-04-19T02:04:31Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The template state.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The subtype name of the template.
   * 
   * @example
   * Remux
   */
  subtype?: string;
  /**
   * @remarks
   * The template configurations.
   * 
   * @example
   * {"Container":{"Format":"flv"},"Video":{},"Audio":{}}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * test-template
   */
  templateName?: string;
  /**
   * @remarks
   * The type ID of the template.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The type name of the template.
   * 
   * @example
   * TranscodeTemplate
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      isDefault: 'IsDefault',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
      subtype: 'Subtype',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      isDefault: 'boolean',
      modifiedTime: 'string',
      status: 'string',
      subtype: 'string',
      templateConfig: 'string',
      templateId: 'string',
      templateName: 'string',
      type: 'number',
      typeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The template information.
   */
  customTemplate?: CreateCustomTemplateResponseBodyCustomTemplate;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customTemplate: 'CustomTemplate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTemplate: CreateCustomTemplateResponseBodyCustomTemplate,
      requestId: 'string',
    };
  }

  validate() {
    if(this.customTemplate && typeof (this.customTemplate as any).validate === 'function') {
      (this.customTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

