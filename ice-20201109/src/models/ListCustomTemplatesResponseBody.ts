// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomTemplatesResponseBodyCustomTemplateListFrontendHintTranscodeTemplateHint extends $dara.Model {
  bitrateControlType?: string;
  static names(): { [key: string]: string } {
    return {
      bitrateControlType: 'BitrateControlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrateControlType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomTemplatesResponseBodyCustomTemplateListFrontendHint extends $dara.Model {
  transcodeTemplateHint?: ListCustomTemplatesResponseBodyCustomTemplateListFrontendHintTranscodeTemplateHint;
  static names(): { [key: string]: string } {
    return {
      transcodeTemplateHint: 'TranscodeTemplateHint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeTemplateHint: ListCustomTemplatesResponseBodyCustomTemplateListFrontendHintTranscodeTemplateHint,
    };
  }

  validate() {
    if(this.transcodeTemplateHint && typeof (this.transcodeTemplateHint as any).validate === 'function') {
      (this.transcodeTemplateHint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomTemplatesResponseBodyCustomTemplateList extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created, in UTC and formatted as YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  createTime?: string;
  frontendHint?: ListCustomTemplatesResponseBodyCustomTemplateListFrontendHint;
  /**
   * @remarks
   * Whether the template is a default template.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The time when the template was last modified, in UTC and formatted as YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The template status.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The template subtype ID.
   * 
   * @example
   * 2
   */
  subtype?: number;
  /**
   * @remarks
   * The template subtype name.
   * 
   * @example
   * AudioTranscode
   */
  subtypeName?: string;
  /**
   * @remarks
   * The template configuration, as a JSON string.
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
   * The template type ID.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The template type name.
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

export class ListCustomTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of custom template objects.
   */
  customTemplateList?: ListCustomTemplatesResponseBodyCustomTemplateList[];
  /**
   * @remarks
   * The unique identifier for the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of templates.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      customTemplateList: 'CustomTemplateList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTemplateList: { 'type': 'array', 'itemType': ListCustomTemplatesResponseBodyCustomTemplateList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customTemplateList)) {
      $dara.Model.validateArray(this.customTemplateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

