// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSupportedProductsResponseBodyProducts } from "./ListSupportedProductsResponseBodyProducts";


export class ListSupportedProductsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return for a single request. Valid values: 1 to 500.
   * 
   * @example
   * 100
   */
  maxResults?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * D3AjqMNSy0ls7zBNCf3a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The cloud services that are supported by Cloud Config.
   */
  products?: ListSupportedProductsResponseBodyProducts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 610B0276-ABEE-57DF-9C13-C2324FADA9D7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      products: 'Products',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      products: { 'type': 'array', 'itemType': ListSupportedProductsResponseBodyProducts },
      requestId: 'string',
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

