// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckSaleResponseBodyCheckSale extends $dara.Model {
  /**
   * @remarks
   * The consumed quota.
   * 
   * @example
   * 500
   */
  consumeCount?: number;
  /**
   * @remarks
   * Indicates whether the user is an existing user and whether the user uses the configuration assessment feature before the feature is released for sale on July 07, 2023. Valid values:
   * 
   * *   **true**: existing user
   * *   **false**: new user
   * 
   * @example
   * true
   */
  loyalUser?: boolean;
  /**
   * @remarks
   * The purchased quota.
   * 
   * @example
   * 1000
   */
  purchaseCount?: number;
  /**
   * @remarks
   * The type of the user. Valid values:
   * 
   * *   **1**: a user who can use all check items.
   * *   **2**: an user who can only use the check items before the release of the feature on July 07, 2023. This type of users must upgrade Security Center before the users can use all check items.
   * *   **3**: a new user who cannot use the configuration assessment feature. This type of users must make a purchase before the users can use the feature.
   * 
   * @example
   * 1
   */
  saleUserType?: number;
  static names(): { [key: string]: string } {
    return {
      consumeCount: 'ConsumeCount',
      loyalUser: 'LoyalUser',
      purchaseCount: 'PurchaseCount',
      saleUserType: 'SaleUserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeCount: 'number',
      loyalUser: 'boolean',
      purchaseCount: 'number',
      saleUserType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckSaleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The sales information about the configuration assessment quota.
   */
  checkSale?: GetCheckSaleResponseBodyCheckSale;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5CF78A7-30AA-59DB-847F-13EE3AE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkSale: 'CheckSale',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkSale: GetCheckSaleResponseBodyCheckSale,
      requestId: 'string',
    };
  }

  validate() {
    if(this.checkSale && typeof (this.checkSale as any).validate === 'function') {
      (this.checkSale as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

