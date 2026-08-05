// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The template name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-template
   */
  name?: string;
  /**
   * @remarks
   * The template subtype.
   * 
   * Transcoding template subtypes:
   * - 1: normal transcoding template (Normal)
   * - 2: audio transcoding template (AudioTranscode)
   * - 3: container format conversion (Remux)
   * - 4: Narrowband HD 1.0 (NarrowBandV1)
   * - 5: Narrowband HD 2.0 (NarrowBandV2)
   * 
   * Snapshot template subtypes:
   * - 1: normal snapshot/static snapshot (Normal)
   * - 2: sprite snapshot (Sprite)
   * - 3: WebVTT snapshot (WebVtt)
   * 
   * AI review template subtypes:
   * - 1: video review (Video) 
   * - 2: audio review (Audio)
   * - 3: image review (Image)
   * 
   * AI intelligent erasure template subtypes:
   * - 1: logo erasure (VideoDelogo)
   * - 2: subtitle erasure (VideoDetext)
   * 
   * @example
   * 1
   */
  subtype?: number;
  /**
   * @remarks
   * The template configuration. For detailed metric description, see [Template parameters](https://help.aliyun.com/document_detail/448291.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"Container":{"Format":"flv"},"Video":{},"Audio":{}}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The templatetype. Valid values:
   * - 1: transcoding template
   * - 2: snapshot template
   * - 3: animated image template
   * - 4: image watermark template
   * - 5: text watermark template
   * - 6: subtitle template
   * - 7: AI intelligent review
   * - 8: AI intelligent cover
   * - 9: AI intelligent erasure
   * - 10: AI intelligent DNA template
   * - 11: AI intelligent label template
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      subtype: 'Subtype',
      templateConfig: 'TemplateConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      subtype: 'number',
      templateConfig: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

