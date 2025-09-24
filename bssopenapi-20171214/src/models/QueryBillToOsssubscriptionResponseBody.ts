// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBillToOSSSubscriptionResponseBodyDataItemsItem extends $dara.Model {
  /**
   * @remarks
   * The owner ID of the Object Storage Service (OSS) bucket.
   * 
   * @example
   * 1369168081849304
   */
  bucketOwnerId?: number;
  /**
   * @remarks
   * The path in the OSS bucket.
   * 
   * @example
   * Billing/BillingItemDetailMonthly/
   */
  bucketPath?: string;
  /**
   * @remarks
   * The maximum number of data rows in a single file. If the number of data rows in a bill exceeds the upper limit, the bill is split into multiple files. Then, multiple files are merged and compressed into a package.
   * 
   * @example
   * 300000
   */
  rowLimitPerFile?: number;
  /**
   * @remarks
   * The ID of the OSS bucket that stores the subscribed bill.
   * 
   * @example
   * billingtestbucket
   */
  subscribeBucket?: string;
  /**
   * @remarks
   * The code of the language.
   * 
   * Valid values:
   * 
   * *   en: English
   * *   zh: Chinese
   * 
   * @example
   * zh
   */
  subscribeLanguage?: string;
  /**
   * @remarks
   * The time when the subscribed bill was stored in the OSS bucket. The time is displayed in the YYYY-MM-DD hh:mm:ss format.
   * 
   * @example
   * 2019-10-30 15:40:11
   */
  subscribeTime?: string;
  /**
   * @remarks
   * The type of the subscribed bill. Valid values:
   * 
   * *   BillingItemDetailForBillingPeriod: the bill of a billable item.
   * *   InstanceDetailForBillingPeriod: the bill of an instance.
   * 
   * @example
   * BillingItemDetailForBillingPeriod
   */
  subscribeType?: string;
  static names(): { [key: string]: string } {
    return {
      bucketOwnerId: 'BucketOwnerId',
      bucketPath: 'BucketPath',
      rowLimitPerFile: 'RowLimitPerFile',
      subscribeBucket: 'SubscribeBucket',
      subscribeLanguage: 'SubscribeLanguage',
      subscribeTime: 'SubscribeTime',
      subscribeType: 'SubscribeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketOwnerId: 'number',
      bucketPath: 'string',
      rowLimitPerFile: 'number',
      subscribeBucket: 'string',
      subscribeLanguage: 'string',
      subscribeTime: 'string',
      subscribeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillToOSSSubscriptionResponseBodyDataItems extends $dara.Model {
  item?: QueryBillToOSSSubscriptionResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryBillToOSSSubscriptionResponseBodyDataItemsItem },
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillToOSSSubscriptionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the account used to perform the query.
   * 
   * @example
   * 185xxxxx03489
   */
  accountID?: string;
  /**
   * @remarks
   * The name of the account used to perform the query.
   * 
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @remarks
   * The details of the subscribed bill.
   */
  items?: QueryBillToOSSSubscriptionResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      items: QueryBillToOSSSubscriptionResponseBodyDataItems,
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillToOSSSubscriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryBillToOSSSubscriptionResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9EEAE43F-1E4D-4734-AE93-5049878AC103
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryBillToOSSSubscriptionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

