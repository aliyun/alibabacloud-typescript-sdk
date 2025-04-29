// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePurchasedApisResponseBodyPurchasedApis } from "./DescribePurchasedApisResponseBodyPurchasedApis";


export class DescribePurchasedApisResponseBody extends $dara.Model {
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The monitoring information about API call delays. The returned information is an array consisting of purchased APIs.
   */
  purchasedApis?: DescribePurchasedApisResponseBodyPurchasedApis;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CE5722A6-AE78-4741-A9B0-6C817D360510
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      purchasedApis: 'PurchasedApis',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      purchasedApis: DescribePurchasedApisResponseBodyPurchasedApis,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.purchasedApis && typeof (this.purchasedApis as any).validate === 'function') {
      (this.purchasedApis as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

