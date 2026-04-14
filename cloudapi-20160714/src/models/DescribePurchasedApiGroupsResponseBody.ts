// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributesPurchasedApiGroupAttribute extends $dara.Model {
  billingType?: string;
  description?: string;
  expireTime?: string;
  groupId?: string;
  groupName?: string;
  invokeTimesMax?: number;
  invokeTimesNow?: number;
  purchasedTime?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      billingType: 'BillingType',
      description: 'Description',
      expireTime: 'ExpireTime',
      groupId: 'GroupId',
      groupName: 'GroupName',
      invokeTimesMax: 'InvokeTimesMax',
      invokeTimesNow: 'InvokeTimesNow',
      purchasedTime: 'PurchasedTime',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingType: 'string',
      description: 'string',
      expireTime: 'string',
      groupId: 'string',
      groupName: 'string',
      invokeTimesMax: 'number',
      invokeTimesNow: 'number',
      purchasedTime: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributes extends $dara.Model {
  purchasedApiGroupAttribute?: DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributesPurchasedApiGroupAttribute[];
  static names(): { [key: string]: string } {
    return {
      purchasedApiGroupAttribute: 'PurchasedApiGroupAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      purchasedApiGroupAttribute: { 'type': 'array', 'itemType': DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributesPurchasedApiGroupAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.purchasedApiGroupAttribute)) {
      $dara.Model.validateArray(this.purchasedApiGroupAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

