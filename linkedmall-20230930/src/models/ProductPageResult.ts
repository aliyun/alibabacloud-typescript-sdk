// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Product } from "./Product";


export class ProductPageResult extends $dara.Model {
  /**
   * @remarks
   * The cursor value for the next page.
   * 
   * @example
   * 7091510713
   */
  nextCursor?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product collection.
   */
  products?: Product[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @remarks
   * The total count.
   * 
   * This parameter is required.
   * 
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nextCursor: 'nextCursor',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      products: 'products',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextCursor: 'string',
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

