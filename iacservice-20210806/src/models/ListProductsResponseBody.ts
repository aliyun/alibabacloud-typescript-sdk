// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsResponseBodyProducts extends $dara.Model {
  /**
   * @remarks
   * The first-level category name.
   * 
   * @example
   * 企业应用
   */
  firstCategoryName?: string;
  /**
   * @remarks
   * The first-level category name in English.
   * 
   * @example
   * Enterprise application
   */
  firstCategoryNameEn?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * MSE
   */
  product?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * 微服务引擎
   */
  productName?: string;
  /**
   * @remarks
   * The product name in English.
   * 
   * @example
   * Microservices Engine
   */
  productNameEn?: string;
  /**
   * @remarks
   * The second-level category name.
   * 
   * @example
   * 应用服务
   */
  secondCategoryName?: string;
  /**
   * @remarks
   * The second-level category name in English.
   * 
   * @example
   * Application service
   */
  secondCategoryNameEn?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The product category in Terraform.
   * 
   * @example
   * Microservice_Engine(MSE)
   */
  subcategory?: string;
  /**
   * @remarks
   * Specifies whether Terraformer is supported.
   * 
   * @example
   * true
   */
  supportTerraformer?: boolean;
  /**
   * @remarks
   * The Terraform Provider version.
   * 
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
   * @remarks
   * The pagination token.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The maximum number of results per page. Valid values: 0 to 200. Default value: 100.
   * 
   * @example
   * 30BaZ9ekYWXJdqshYecA++coNg7qT1Zbm3RfLyFIZeY=
   */
  nextToken?: string;
  /**
   * @remarks
   * The product list.
   */
  products?: ListProductsResponseBodyProducts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9bcaac3c-420d-4303-87ab-7638c07b0a0b
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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

