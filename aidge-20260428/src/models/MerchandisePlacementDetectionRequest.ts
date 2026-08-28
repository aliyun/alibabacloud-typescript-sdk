// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MerchandisePlacementDetectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies a custom API version. If you created a "My API" during the trial phase, you can find the corresponding ApiId in the product console under "Intelligent Inspection > API Management > My API".
   * 
   * @example
   * api_xxx
   */
  apiId?: string;
  /**
   * @remarks
   * The URL of the shelf or floor-stack image to be recognized (accessible over the public network or from OSS).
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/shelf.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The ID of the customer\\"s dedicated SKU vector library, which determines which library is used for retrieval. The library must be created in advance through the library creation process.
   * 
   * @example
   * rag_xxx
   */
  ragId?: string;
  /**
   * @remarks
   * The business type (reserved for future routing by business line). The current phase supports skincare & lotion.
   * 
   * @example
   * 水乳
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      imageUrl: 'ImageUrl',
      ragId: 'RagId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      imageUrl: 'string',
      ragId: 'string',
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

