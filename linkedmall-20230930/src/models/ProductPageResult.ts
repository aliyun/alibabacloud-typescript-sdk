// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Product } from "./Product";


export class ProductPageResult extends $dara.Model {
  /**
   * @remarks
   * Current page number
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Collection of products
   */
  products?: Product[];
  /**
   * @remarks
   * Request ID for the API call
   * 
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @remarks
   * Total count
   * 
   * This parameter is required.
   * 
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      products: 'products',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      products: { 'type': 'array', 'itemType': Product },
      requestId: 'string',
      total: 'number',
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

