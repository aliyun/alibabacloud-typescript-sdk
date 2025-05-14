// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCustomTemplatesResponseBodyCustomTemplateListFrontendHint } from "./ListCustomTemplatesResponseBodyCustomTemplateListFrontendHint";


export class ListCustomTemplatesResponseBodyCustomTemplateList extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  createTime?: string;
  frontendHint?: ListCustomTemplatesResponseBodyCustomTemplateListFrontendHint;
  /**
   * @remarks
   * Indicates whether the template is the default template.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
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
   * 2022-07-12T16:17:54Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The template state.
   * 
   * Valid values:
   * 
   * *   Normal
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
   * 2
   */
  subtype?: number;
  /**
   * @remarks
   * The subtype name of the template.
   * 
   * @example
   * AudioTranscode
   */
  subtypeName?: string;
  /**
   * @remarks
   * The template parameters.
   * 
   * @example
   * {"Container":{"Format":"mp3"},"Audio":{"Codec":"mp3","Bitrate":"64","Samplerate":"22050","Channels":"2"}}
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
      frontendHint: ListCustomTemplatesResponseBodyCustomTemplateListFrontendHint,
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

