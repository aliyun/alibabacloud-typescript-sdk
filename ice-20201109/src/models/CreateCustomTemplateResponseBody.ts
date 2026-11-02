// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomTemplateResponseBodyCustomTemplate extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created. The time follows the ISO 8601 standard in UTC (ending with Z).
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
   * The time when the template was modified. The time follows the ISO 8601 standard in UTC (ending with Z).
   * 
   * @example
   * 2022-04-19T02:04:31Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The status of the template.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The name of the template subtype.
   * 
   * @example
   * Remux
   */
  subtype?: string;
  /**
   * @remarks
   * The template configuration.
   * 
   * @example
   * {"Container":{"Format":"flv"},"Video":{},"Audio":{}}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * test-template
   */
  templateName?: string;
  /**
   * @remarks
   * The templatetype ID.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The templatetype name.
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
   * The ID of the request.
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

