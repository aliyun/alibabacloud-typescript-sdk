// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MerchandisePlacementDetectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the ID of a custom API. Pass this parameter if you need to specify a custom version of the API. If you created a custom API during the trial phase, you can query the ApiId of the corresponding feature in the product console by choosing Intelligent Inspection > API Management > My APIs.
   * 
   * @example
   * api_xxx
   */
  apiId?: string;
  /**
   * @remarks
   * The URL of the original shelf or floor display image to be recognized. The URL must be accessible over the Internet or from OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/shelf.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The ID of the customer-specific SKU vector database. This parameter determines which database is used for retrieval. The database must be created through the database creation process in advance.
   * 
   * @example
   * rag_xxx
   */
  ragId?: string;
  /**
   * @remarks
   * The custom rule. You can enter a detection prompt, which is passed as the rule input parameter to the workflow. If this parameter is specified, the type parameter is not required, and the independent rule branch is used. If this parameter is left empty, you must specify the type parameter to start detection.
   * 
   * @example
   * Recognize all visible beverage products in the image and return only a JSON array. Output format example: [{"bbox_2d":[100,200,250,600],"sku_name":"Coca-Cola"}]
   */
  rule?: string;
  /**
   * @remarks
   * The business type. This parameter is reserved for future routing based on business lines. Currently, only skincare products are supported.
   * 
   * @example
   * Skincare products
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

