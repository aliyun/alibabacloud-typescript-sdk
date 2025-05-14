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
   * Valid values for transcoding templates:
   * 
   * *   1 (Normal): regular template.
   * *   2 (AudioTranscode): audio transcoding template.
   * *   3 (Remux): container format conversion template.
   * *   4 (NarrowBandV1): Narrowband HD 1.0 template.
   * *   5 (NarrowBandV2): Narrowband HD 2.0 template.
   * 
   * Valid values for snapshot templates:
   * 
   * *   1 (Normal): regular template.
   * *   2 (Sprite): sprite template.
   * *   3 (WebVtt): WebVTT template.
   * 
   * Valid values for AI-assisted content moderation templates:
   * 
   * *   1 (Video): video moderation template.
   * *   2 (Audio): audio moderation template.
   * *   3 (Image): image moderation template.
   * 
   * Valid values for AI-assisted intelligent erasure templates.
   * 
   * *   1 (VideoDelogo): logo erasure template.
   * *   2 (VideoDetext): subtitle erasure template.
   * 
   * @example
   * 1
   */
  subtype?: number;
  /**
   * @remarks
   * The template configurations. For more information, see [Template parameters](https://help.aliyun.com/document_detail/448291.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"Container":{"Format":"flv"},"Video":{},"Audio":{}}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The template type. Valid values:
   * 
   * *   1: transcoding template.
   * *   2: snapshot template.
   * *   3: animated image template.
   * *   4\\. image watermark template.
   * *   5: text watermark template.
   * *   6: subtitle template.
   * *   7: AI-assisted content moderation template.
   * *   8: AI-assisted intelligent thumbnail template.
   * *   9: AI-assisted intelligent erasure template.
   * *   10: AI-assisted media fingerprint analysis template.
   * *   11: AI-assisted smart tagging template.
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

