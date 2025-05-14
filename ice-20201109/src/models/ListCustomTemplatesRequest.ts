// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * test-template
   */
  name?: string;
  /**
   * @remarks
   * The order in which the entries are sorted. Valid values:
   * 
   * *   CreateTimeDesc: sorted by creation time in descending order.
   * *   CreateTimeAsc: sorted by creation time in ascending order.
   * 
   * @example
   * CreateTimeDesc
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The subtype ID of the template.
   * 
   * *   Valid values for transcoding templates:
   * 
   *     *   1 (Normal): regular template.
   *     *   2 (AudioTranscode): audio transcoding template.
   *     *   3 (Remux): container format conversion template.
   *     *   4 (NarrowBandV1): Narrowband HD 1.0 template.
   *     *   5 (NarrowBandV2): Narrowband HD 2.0 template.
   * 
   * *   Valid values for snapshot templates:
   * 
   *     *   1 (Normal): regular template.
   *     *   2 (Sprite): sprite template.
   *     *   3 (WebVtt): WebVTT template.
   * 
   * *   Valid values for AI-assisted content moderation templates:
   * 
   *     *   1 (Video): video moderation template.
   *     *   2 (Audio): audio moderation template.
   *     *   3 (Image): image moderation template.
   * 
   * *   Valid values for AI-assisted intelligent erasure templates:
   * 
   *     *   1 (VideoDelogo): logo erasure template.
   *     *   2 (VideoDetext): subtitle erasure template.
   * 
   * @example
   * 2
   */
  subtype?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
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
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      subtype: 'Subtype',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      subtype: 'string',
      templateId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

