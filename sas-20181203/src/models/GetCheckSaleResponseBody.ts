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
   * Indicates whether the user is an existing user who used the cloud service configuration check feature before the sales feature was released on July 7, 2023. Valid values:
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
   * The type of the sales user. Valid values:
   * - **1**: full-feature user who can use all check items.
   * - **2**: user who needs to upgrade and can only use check items that were available before the sales feature was released on July 7, 2023.
   * - **3**: user who needs to purchase the feature and cannot use the cloud service configuration check feature.
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
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request and can be used to troubleshoot issues.
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

