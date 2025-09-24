// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSavingsPlansUsageDetailResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The used amount of the savings plan.
   * 
   * @example
   * 3.94
   */
  deductValue?: number;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2021-08-09 00:00:00
   */
  endPeriod?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * spn-a1fhs54c243hP22
   */
  instanceId?: string;
  /**
   * @remarks
   * The total amount of the savings plan.
   * 
   * @example
   * 29.84
   */
  poolValue?: number;
  /**
   * @remarks
   * The pay-as-you-go cost.
   * 
   * @example
   * 4.2
   */
  postpaidCost?: number;
  /**
   * @remarks
   * The amount that is saved.
   * 
   * @example
   * 0.08
   */
  savedCost?: number;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2021-08-01 00:00:00
   */
  startPeriod?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * A value of -1 indicates that the payment is overdue. A value of 1 indicates that the instance is active.
   * 
   * @example
   * -1
   */
  status?: string;
  /**
   * @remarks
   * The type of the savings plan. Valid values: universal and ECS compute.
   */
  type?: string;
  /**
   * @remarks
   * The usage.
   * 
   * @example
   * 0.9
   */
  usagePercentage?: number;
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 123745698925000
   */
  userId?: number;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * test13@test.aliyun.com
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      deductValue: 'DeductValue',
      endPeriod: 'EndPeriod',
      instanceId: 'InstanceId',
      poolValue: 'PoolValue',
      postpaidCost: 'PostpaidCost',
      savedCost: 'SavedCost',
      startPeriod: 'StartPeriod',
      status: 'Status',
      type: 'Type',
      usagePercentage: 'UsagePercentage',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      deductValue: 'number',
      endPeriod: 'string',
      instanceId: 'string',
      poolValue: 'number',
      postpaidCost: 'number',
      savedCost: 'number',
      startPeriod: 'string',
      status: 'string',
      type: 'string',
      usagePercentage: 'number',
      userId: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data entries.
   */
  items?: DescribeSavingsPlansUsageDetailResponseBodyDataItems[];
  /**
   * @remarks
   * The token of the next page.
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2ldhsSI6MTB9
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeSavingsPlansUsageDetailResponseBodyDataItems },
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The return data.
   */
  data?: DescribeSavingsPlansUsageDetailResponseBodyData;
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
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
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
      data: DescribeSavingsPlansUsageDetailResponseBodyData,
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

