// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * test-template
   */
  name?: string;
  /**
   * @remarks
   * The subtype of the template.
   * 
   * Subtypes of transcoding templates:
   * - 1: normal transcoding template (Normal)
   * - 2: audio transcoding template (AudioTranscode)
   * - 3: remuxing (Remux)
   * - 4: Narrow Band HD 1.0 (NarrowBandV1)
   * - 5: Narrow Band HD 2.0 (NarrowBandV2)
   * 
   * Subtypes of snapshot templates:
   * - 1: normal snapshot or static snapshot (Normal)
   * - 2: sprite snapshot (Sprite)
   * - 3: WebVTT snapshot (WebVtt)
   * 
   * Subtypes of AI-based content moderation templates:
   * - 1: video moderation (Video) 
   * - 2: audio moderation (Audio)
   * - 3: image moderation (Image)
   * 
   * Subtypes of AI-based smart erasure templates:
   * - 1: icon erasure (VideoDelogo)
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
   * - 7: AI-based content moderation
   * - 8: AI-based smart thumbnail
   * - 9: AI-based smart erasure
   * - 10: AI-based DNA template
   * - 11: AI-based label template
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

