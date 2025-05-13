// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProductsResponseBodyProducts } from "./ListProductsResponseBodyProducts";
import { ListProductsResponseBodyServices } from "./ListProductsResponseBodyServices";


export class ListProductsResponseBody extends $dara.Model {
  products?: ListProductsResponseBodyProducts[];
  /**
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  services?: ListProductsResponseBodyServices[];
  static names(): { [key: string]: string } {
    return {
      products: 'Products',
      requestId: 'RequestId',
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      products: { 'type': 'array', 'itemType': ListProductsResponseBodyProducts },
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListProductsResponseBodyServices },
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

