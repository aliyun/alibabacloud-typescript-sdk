// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSavingsPlansCoverageDetailResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The coverage.
   * 
   * @example
   * 0.9
   */
  coveragePercentage?: number;
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
   * The deducted amount.
   * 
   * @example
   * 100
   */
  deductAmount?: number;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2021-05-05 15:00:00
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
   * The specifications.
   * 
   * @example
   * 7th_generation_X86_group
   */
  instanceSpec?: string;
  /**
   * @example
   * 1906589291020438
   */
  ownerId?: number;
  /**
   * @remarks
   * The pay-as-you-go cost.
   * 
   * @example
   * 200
   */
  postpaidCost?: number;
  /**
   * @remarks
   * The region.
   */
  region?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2021-05-05 14:00:00
   */
  startPeriod?: string;
  /**
   * @remarks
   * The total expenditure.
   * 
   * @example
   * 100
   */
  totalAmount?: number;
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 2831685687844416
   */
  userId?: number;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * tester1@test.aliyun.com
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      coveragePercentage: 'CoveragePercentage',
      currency: 'Currency',
      deductAmount: 'DeductAmount',
      endPeriod: 'EndPeriod',
      instanceId: 'InstanceId',
      instanceSpec: 'InstanceSpec',
      ownerId: 'OwnerId',
      postpaidCost: 'PostpaidCost',
      region: 'Region',
      startPeriod: 'StartPeriod',
      totalAmount: 'TotalAmount',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coveragePercentage: 'number',
      currency: 'string',
      deductAmount: 'number',
      endPeriod: 'string',
      instanceId: 'string',
      instanceSpec: 'string',
      ownerId: 'number',
      postpaidCost: 'number',
      region: 'string',
      startPeriod: 'string',
      totalAmount: 'number',
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

export class DescribeSavingsPlansCoverageDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data entries.
   */
  items?: DescribeSavingsPlansCoverageDetailResponseBodyDataItems[];
  /**
   * @remarks
   * The token of the next page.
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6MTB9
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 400
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
      items: { 'type': 'array', 'itemType': DescribeSavingsPlansCoverageDetailResponseBodyDataItems },
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

export class DescribeSavingsPlansCoverageDetailResponseBody extends $dara.Model {
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
  data?: DescribeSavingsPlansCoverageDetailResponseBodyData;
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
      data: DescribeSavingsPlansCoverageDetailResponseBodyData,
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

