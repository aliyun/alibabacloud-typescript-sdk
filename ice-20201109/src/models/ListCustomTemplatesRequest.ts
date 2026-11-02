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
   * The sort order. Valid values:
   * - CreateTimeDesc: Sorts by creation time in descending order.
   * - CreateTimeAsc: Sorts by creation time in ascending order.
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
   * The template subtype ID. Valid values:
   * - Subtypes for transcode templates:
   *     - 1: Normal transcode template (Normal).
   *     - 2: Audio transcode template (AudioTranscode).
   *     - 3: Remux (Remux).
   *     - 4: Narrowband HD 1.0 (NarrowBandV1).
   *     - 5: Narrowband HD 2.0 (NarrowBandV2).
   * - Subtypes for snapshot templates:
   *     - 1: Normal snapshot or static snapshot (Normal).
   *     - 2: Sprite snapshot (Sprite).
   *     - 3: WebVTT snapshot (WebVtt).
   * - Subtypes for AI content moderation templates:
   *     - 1: Video moderation (Video).
   *     - 2: Audio moderation (Audio).
   *     - 3: Image moderation (Image).
   * - Subtypes for AI intelligent erasure templates:
   *     - 1: Logo erasure (VideoDelogo).
   *     - 2: Subtitle erasure (VideoDetext).
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
   * The templatetype. Separate multiple values with commas. Valid values:
   * - 1: Transcode template.
   * - 2: Snapshot template.
   * - 3: Animated image template.
   * - 4: Image watermark template.
   * - 5: Text watermark template.
   * - 6: Subtitle template.
   * - 7: AI content moderation.
   * - 8: AI intelligent cover.
   * - 9: AI intelligent erasure.
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

