// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * test-template
   */
  name?: string;
  /**
   * @remarks
   * The sort order of the results. Valid values:
   * 
   * - `CreationTime:Desc`: Sorts the results by Creation Time in descending order.
   * 
   * - `CreationTime:Asc`: Sorts the results by Creation Time in ascending order.
   * 
   * @example
   * CreateTimeDesc
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number of the results to return.
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
   * The subtype of the template. This parameter applies only when `Type` is set to 1, 2, 7, or 9.
   * 
   * - Transcoding Template subtypes:
   * 
   *   - 1: Normal (`Normal`)
   * 
   *   - 2: Audio-only (`AudioTranscode`)
   * 
   *   - 3: Remuxing (`Remux`)
   * 
   *   - 4: Narrowband HD 1.0 (`NarrowBandV1`)
   * 
   *   - 5: Narrowband HD 2.0 (`NarrowBandV2`)
   * 
   * - Screenshot Template subtypes:
   * 
   *   - 1: Normal (`Normal`)
   * 
   *   - 2: Sprite Image (`Sprite`)
   * 
   *   - 3: WebVTT (`WebVtt`)
   * 
   * - AI Content Moderation subtypes:
   * 
   *   - 1: Video moderation (`Video`)
   * 
   *   - 2: Audio moderation (`Audio`)
   * 
   *   - 3: Image moderation (`Image`)
   * 
   * - AI-powered Object Removal subtypes:
   * 
   *   - 1: Logo Removal (`VideoDelogo`)
   * 
   *   - 2: Text Removal (`VideoDetext`)
   * 
   * @example
   * 2
   */
  subtype?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  /**
   * @remarks
   * The type of the template. Valid values:
   * 
   * - 1: Transcoding Template
   * 
   * - 2: Screenshot Template
   * 
   * - 3: Animated GIF Template
   * 
   * - 4: Image Watermark Template
   * 
   * - 5: Text Watermark Template
   * 
   * - 6: Subtitle Template
   * 
   * - 7: AI Content Moderation
   * 
   * - 8: AI-powered Smart Cover
   * 
   * - 9: AI-powered Object Removal
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

