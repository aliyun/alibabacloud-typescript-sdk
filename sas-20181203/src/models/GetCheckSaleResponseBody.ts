// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckSaleResponseBodyCheckSale extends $dara.Model {
  /**
   * @remarks
   * The number of consumed authorized quotas.
   * 
   * @example
   * 500
   */
  consumeCount?: number;
  instanceConsumeCount?: number;
  instanceHybridPostLatestCycledResourceCount?: number;
  instancePostConsumeCount?: number;
  instancePurchaseCount?: number;
  /**
   * @remarks
   * Indicates whether the user is an existing user who used the cloud service configuration check feature before the sales feature was released (July 7, 2023). Valid values:
   * - **true**: The user is an existing user.
   * - **false**: The user is not an existing user.
   * 
   * @example
   * true
   */
  loyalUser?: boolean;
  /**
   * @remarks
   * The number of purchased authorized quotas.
   * 
   * @example
   * 1000
   */
  purchaseCount?: number;
  /**
   * @remarks
   * The sales user type. Valid values:
   * - **1**: Full-feature user. The user can use all check items.
   * - **2**: Upgrade-required user. The user can use only the check items that were available before the sales feature was released (July 7, 2023).
   * - **3**: Purchase-required user. The user cannot use the cloud service configuration check feature.
   * 
   * @example
   * 1
   */
  saleUserType?: number;
  static names(): { [key: string]: string } {
    return {
      consumeCount: 'ConsumeCount',
      instanceConsumeCount: 'InstanceConsumeCount',
      instanceHybridPostLatestCycledResourceCount: 'InstanceHybridPostLatestCycledResourceCount',
      instancePostConsumeCount: 'InstancePostConsumeCount',
      instancePurchaseCount: 'InstancePurchaseCount',
      loyalUser: 'LoyalUser',
      purchaseCount: 'PurchaseCount',
      saleUserType: 'SaleUserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeCount: 'number',
      instanceConsumeCount: 'number',
      instanceHybridPostLatestCycledResourceCount: 'number',
      instancePostConsumeCount: 'number',
      instancePurchaseCount: 'number',
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
   * The sales information of cloud service configuration check.
   */
  checkSale?: GetCheckSaleResponseBodyCheckSale;
  /**
   * @remarks
   * The ID of the request. The China Cloud generates a unique identifier for the request, which can be used for troubleshooting and diagnostics.
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

