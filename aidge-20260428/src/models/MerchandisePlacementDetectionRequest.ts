// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MerchandisePlacementDetectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specify this parameter to use a custom API version. If you created a custom API during the trial phase, you can find the corresponding ApiId in the product console under Intelligent Inspection > API Management > My API.
   * 
   * @example
   * api_xxx
   */
  apiId?: string;
  /**
   * @remarks
   * The URL of the original shelf or floor stack image to be recognized (accessible over the Internet or through OSS).
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/shelf.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The ID of the customer-specific SKU vector library, which determines which library is used for retrieval. The library must be created in advance through the library creation process.
   * 
   * @example
   * rag_xxx
   */
  ragId?: string;
  /**
   * @remarks
   * The custom rule. Enter a detection prompt as the workflow input parameter rule. When this parameter is specified, the type parameter is not required (a dedicated rule branch is used). If Rule is empty, you must specify Type to start detection.
   * 
   * @example
   * Please identify all visible beverage products in the image and return only a JSON array. Output format example: [{"bbox_2d":[100,200,250,600],"sku_name":"Coca-Cola"}]
   */
  rule?: string;
  /**
   * @remarks
   * The business type (reserved for future routing by business line). The current release supports skincare & lotion.
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
      rule: 'Rule',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      imageUrl: 'string',
      ragId: 'string',
      rule: 'string',
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

