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
   * The URL of the shelf or floor-stack image to be recognized (accessible via the public network or OSS).
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/shelf.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The customer-specific SKU vector library ID that determines which library to retrieve from. The library must be created in advance through the library creation process.
   * 
   * @example
   * rag_xxx
   */
  ragId?: string;
  /**
   * @remarks
   * The business type (reserved for future routing by business line). The current release supports skincare & lotion.
   * 
   * @example
   * Lotion.
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

