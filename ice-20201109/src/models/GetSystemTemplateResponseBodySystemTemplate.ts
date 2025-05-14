// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSystemTemplateResponseBodySystemTemplate extends $dara.Model {
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
   * {"Container":{"Format":"m3u8"},"TransConfig":{"TransMode":"onepass"},"Video":{"Codec":"H.264","Maxrate":8000,"Preset":"medium","PixFmt":"yuv420p","Width":2048,"Bitrate":3500},"Audio":{"Codec":"aac","Bitrate":160,"Samplerate":44100,"Channels":2}}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * S00000001-100060
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * M3U8-2K
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

