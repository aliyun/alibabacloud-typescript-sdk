// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishableProductsResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The description of the API product, which is the Description property of the Product resource.
   * 
   * @example
   * An API product that provides weather query capabilities
   */
  description?: string;
  /**
   * @remarks
   * The name of the API product, which is the Name property of the Product resource.
   * 
   * @example
   * weather-query-api
   */
  name?: string;
  /**
   * @remarks
   * The ID of the API product, which is the primary ID of the Product resource. You can use this ID in the PublishProduct operation at /himarket/v1/products/{productId}/publications to publish the product to the portal. You can also use it to locate the product in operations such as GetProduct and ListProductPublications.
   * 
   * @example
   * product-xxxxxxxx
   */
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      productId: 'productId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      productId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishableProductsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of API products that can be published to the portal. The list element is named productInfo, and each element contains the information about an API product.
   */
  content?: ListPublishableProductsResponseBodyDataContent[];
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
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListPublishableProductsResponseBodyDataContent },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishableProductsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListPublishableProductsResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListPublishableProductsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

