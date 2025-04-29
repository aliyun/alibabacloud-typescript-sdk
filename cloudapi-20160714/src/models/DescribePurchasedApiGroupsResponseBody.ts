// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributes } from "./DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributes";


export class DescribePurchasedApiGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The attributes of the API group.
   */
  purchasedApiGroupAttributes?: DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributes;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 36BBBAD4-1CFB-489F-841A-8CA52EEA787E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      purchasedApiGroupAttributes: 'PurchasedApiGroupAttributes',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      purchasedApiGroupAttributes: DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributes,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.purchasedApiGroupAttributes && typeof (this.purchasedApiGroupAttributes as any).validate === 'function') {
      (this.purchasedApiGroupAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

