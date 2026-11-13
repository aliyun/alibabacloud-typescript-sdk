// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPortalPublicationsResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time is in ISO 8601 (RFC 3339) format in the UTC time zone, such as 2026-05-15T10:00:00Z.
   * 
   * @example
   * 2026-05-15T10:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The description of the API product.
   * 
   * @example
   * A model service API product available to internal developers
   */
  description?: string;
  /**
   * @remarks
   * The API product ID. This is the primary ID of the API product resource and identifies the API product corresponding to this publication record.
   * 
   * @example
   * product-xxxxxxxx
   */
  productId?: string;
  /**
   * @remarks
   * The API product name. This is the Name property of the API product resource.
   * 
   * @example
   * model-service
   */
  productName?: string;
  /**
   * @remarks
   * The API product type. The valid values are not declared in the API definition. Refer to the types displayed in the console.
   * 
   * @example
   * HTTP_API
   */
  productType?: string;
  /**
   * @remarks
   * The publication record ID of the API product. This ID is returned when you use PublishProduct to publish an API product to a portal. You can use this ID in the /himarket/v1/products/{productId}/publications/{publicationId} path to locate the publication record for the UnpublishProduct operation.
   * 
   * @example
   * publication-xxxxxxxx
   */
  publicationId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      productId: 'productId',
      productName: 'productName',
      productType: 'productType',
      publicationId: 'publicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      productId: 'string',
      productName: 'string',
      productType: 'string',
      publicationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalPublicationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of published API products on the portal. The list elements are named portalConfig, and each element represents a publication record of an API product.
   */
  content?: ListPortalPublicationsResponseBodyDataContent[];
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
   * The total number of items.
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
      content: { 'type': 'array', 'itemType': ListPortalPublicationsResponseBodyDataContent },
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

export class ListPortalPublicationsResponseBody extends $dara.Model {
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
  data?: ListPortalPublicationsResponseBodyData;
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
      data: ListPortalPublicationsResponseBodyData,
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

