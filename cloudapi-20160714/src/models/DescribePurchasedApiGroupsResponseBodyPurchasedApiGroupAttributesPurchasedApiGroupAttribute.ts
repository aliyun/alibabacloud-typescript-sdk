// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributesPurchasedApiGroupAttribute extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * POSTPAID
   */
  billingType?: string;
  /**
   * @remarks
   * The description of the API group.
   * 
   * @example
   * 1
   */
  description?: string;
  /**
   * @remarks
   * The time when the API group expires.
   * 
   * @example
   * 2021-12-19T00:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 8e91f23f88f94348855b82c9a73209f3
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the API group.
   * 
   * @example
   * group1
   */
  groupName?: string;
  /**
   * @remarks
   * The maximum number of calls.
   * 
   * @example
   * 10
   */
  invokeTimesMax?: number;
  /**
   * @remarks
   * The current number of calls.
   * 
   * @example
   * 10
   */
  invokeTimesNow?: number;
  /**
   * @remarks
   * The time when the API group was purchased.
   * 
   * @example
   * 2021-12-19T00:00:00
   */
  purchasedTime?: string;
  /**
   * @remarks
   * The ID of the region where the API group is located.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the API group.
   * 
   * *   **NORMAL**: The API group is normal.
   * *   **DELETE**: The API group is deleted.
   * 
   * @example
   * NORMAL
   */
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

