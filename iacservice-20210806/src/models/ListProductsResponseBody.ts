// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsResponseBodyProducts extends $dara.Model {
  firstCategoryName?: string;
  /**
   * @example
   * Enterprise application
   */
  firstCategoryNameEn?: string;
  /**
   * @example
   * MSE
   */
  product?: string;
  productName?: string;
  /**
   * @example
   * Microservices Engine
   */
  productNameEn?: string;
  secondCategoryName?: string;
  /**
   * @example
   * Application service
   */
  secondCategoryNameEn?: string;
  /**
   * @example
   * Available
   */
  status?: string;
  /**
   * @example
   * Microservice_Engine(MSE)
   */
  subcategory?: string;
  /**
   * @example
   * true
   */
  supportTerraformer?: boolean;
  /**
   * @example
   * 1.229.0
   */
  terraformProviderVersion?: string;
  static names(): { [key: string]: string } {
    return {
      firstCategoryName: 'firstCategoryName',
      firstCategoryNameEn: 'firstCategoryNameEn',
      product: 'product',
      productName: 'productName',
      productNameEn: 'productNameEn',
      secondCategoryName: 'secondCategoryName',
      secondCategoryNameEn: 'secondCategoryNameEn',
      status: 'status',
      subcategory: 'subcategory',
      supportTerraformer: 'supportTerraformer',
      terraformProviderVersion: 'terraformProviderVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstCategoryName: 'string',
      firstCategoryNameEn: 'string',
      product: 'string',
      productName: 'string',
      productNameEn: 'string',
      secondCategoryName: 'string',
      secondCategoryNameEn: 'string',
      status: 'string',
      subcategory: 'string',
      supportTerraformer: 'boolean',
      terraformProviderVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBody extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 30BaZ9ekYWXJdqshYecA++coNg7qT1Zbm3RfLyFIZeY=
   */
  nextToken?: string;
  products?: ListProductsResponseBodyProducts[];
  /**
   * @example
   * 9bcaac3c-420d-4303-87ab-7638c07b0a0b
   */
  requestId?: string;
  /**
   * @example
   * 134
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      products: 'products',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      products: { 'type': 'array', 'itemType': ListProductsResponseBodyProducts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

