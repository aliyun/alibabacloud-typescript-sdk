// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitProductMatchRequest extends $dara.Model {
  /**
   * @remarks
   * The product brand. If missing, the service attempts to extract it from the shop name.
   * 
   * @example
   * FILA
   */
  brandName?: string;
  /**
   * @remarks
   * The Miaojie product category, which is currently used for extension and auditing.
   * 
   * @example
   * Children\\"s shoes
   */
  category?: string;
  /**
   * @remarks
   * The HTTP/HTTPS URL of the product main image.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/items/228516909/main.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The Miaojie product ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 228516909
   */
  itemId?: string;
  /**
   * @remarks
   * The HTTP/HTTPS URL of the product detail page.
   * 
   * @example
   * https://example.com/items/228516909
   */
  productUrl?: string;
  /**
   * @remarks
   * The shop name, which is also used as the extraction source when the brand is missing.
   * 
   * This parameter is required.
   * 
   * @example
   * FILA Official Flagship Store
   */
  shopName?: string;
  /**
   * @remarks
   * The product title.
   * 
   * This parameter is required.
   * 
   * @example
   * FILA children\\"s training shoes
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      brandName: 'BrandName',
      category: 'Category',
      imageUrl: 'ImageUrl',
      itemId: 'ItemId',
      productUrl: 'ProductUrl',
      shopName: 'ShopName',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandName: 'string',
      category: 'string',
      imageUrl: 'string',
      itemId: 'string',
      productUrl: 'string',
      shopName: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

