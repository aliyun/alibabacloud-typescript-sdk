// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCustomTemplateResponseBodyCustomTemplateFrontendHint } from "./GetCustomTemplateResponseBodyCustomTemplateFrontendHint";


export class GetCustomTemplateResponseBodyCustomTemplate extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2022-01-01T10:00:00Z
   */
  createTime?: string;
  frontendHint?: GetCustomTemplateResponseBodyCustomTemplateFrontendHint;
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
   * 2022-01-01T11:00:00Z
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
   * The subtype ID of the template.
   * 
   * @example
   * 1
   */
  subtype?: number;
  /**
   * @remarks
   * The subtype name of the template.
   * 
   * @example
   * Normal
   */
  subtypeName?: string;
  /**
   * @remarks
   * The template parameters.
   * 
   * @example
   * {"Type":"Normal","FrameType":"normal","Time":0,"Count":10}
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
   * 测试转码模板
   */
  templateName?: string;
  /**
   * @remarks
   * The type ID of the template.
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * The type name of the template.
   * 
   * @example
   * SnapshotTemplate
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      frontendHint: 'FrontendHint',
      isDefault: 'IsDefault',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
      subtype: 'Subtype',
      subtypeName: 'SubtypeName',
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
      frontendHint: GetCustomTemplateResponseBodyCustomTemplateFrontendHint,
      isDefault: 'boolean',
      modifiedTime: 'string',
      status: 'string',
      subtype: 'number',
      subtypeName: 'string',
      templateConfig: 'string',
      templateId: 'string',
      templateName: 'string',
      type: 'number',
      typeName: 'string',
    };
  }

  validate() {
    if(this.frontendHint && typeof (this.frontendHint as any).validate === 'function') {
      (this.frontendHint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

