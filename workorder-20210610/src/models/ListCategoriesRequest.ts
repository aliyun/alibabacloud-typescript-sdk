// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCategoriesRequest extends $dara.Model {
  /**
   * @remarks
   * Multi-language, support, Chinese, English. Value definition: zh: Chinese, en: English.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The name of the classification question. Fuzzy search is supported.
   * 
   * @example
   * ecs
   */
  name?: string;
  /**
   * @remarks
   * The ID of the product. You can call the ListProducts operation to obtain the product ID. The ProductId parameter is the ID of an Alibaba Cloud product. Multiple Categories are displayed for each product.
   * 
   * This parameter is required.
   * 
   * @example
   * 18550
   */
  productId?: number;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      name: 'Name',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      name: 'string',
      productId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

