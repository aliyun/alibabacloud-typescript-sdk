// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceCoverageDetailResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The unit that is used to measure the resources deducted from deduction plans.
   */
  capacityUnit?: string;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * ecs
   */
  commodityCode?: string;
  /**
   * @remarks
   * The name and billing method of the service.
   */
  commodityName?: string;
  /**
   * @remarks
   * The coverage rate of a deduction plan.
   * 
   * @example
   * 1
   */
  coveragePercentage?: number;
  /**
   * @remarks
   * The currency in which deduction plans were priced.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The amount of the resources deducted from a deduction plan.
   * 
   * @example
   * 1
   */
  deductQuantity?: number;
  /**
   * @remarks
   * The end of the time range in which the coverage details were queried.
   * 
   * @example
   * 2021-04-01 01:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of a pay-as-you-go instance.
   * 
   * @example
   * i-bp1d9x623987rlj0dx4xx
   */
  instanceId?: string;
  /**
   * @remarks
   * The specifications of a deduction plan.
   * 
   * @example
   * ecs.t5-lc2m1.nano
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The amount of the bill.
   * 
   * @example
   * 0
   */
  paymentAmount?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The name of the service.
   */
  productName?: string;
  /**
   * @remarks
   * The region.
   */
  region?: string;
  /**
   * @remarks
   * The code of the region.
   * 
   * @example
   * cn-hangzhou-dg-a01
   */
  regionNo?: string;
  /**
   * @remarks
   * The beginning of the time range in which the coverage details were queried.
   * 
   * @example
   * 2021-04-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The total amount of resources consumed.
   * 
   * @example
   * 1
   */
  totalQuantity?: number;
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 123745698925000
   */
  userId?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * test13@test.aliyun.com
   */
  userName?: string;
  /**
   * @remarks
   * The code of the zone.
   * 
   * @example
   * cn-hangzhou-i
   */
  zone?: string;
  /**
   * @remarks
   * The zone.
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      capacityUnit: 'CapacityUnit',
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      coveragePercentage: 'CoveragePercentage',
      currency: 'Currency',
      deductQuantity: 'DeductQuantity',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceSpec: 'InstanceSpec',
      paymentAmount: 'PaymentAmount',
      productCode: 'ProductCode',
      productName: 'ProductName',
      region: 'Region',
      regionNo: 'RegionNo',
      startTime: 'StartTime',
      totalQuantity: 'TotalQuantity',
      userId: 'UserId',
      userName: 'UserName',
      zone: 'Zone',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: 'string',
      commodityCode: 'string',
      commodityName: 'string',
      coveragePercentage: 'number',
      currency: 'string',
      deductQuantity: 'number',
      endTime: 'string',
      instanceId: 'string',
      instanceSpec: 'string',
      paymentAmount: 'number',
      productCode: 'string',
      productName: 'string',
      region: 'string',
      regionNo: 'string',
      startTime: 'string',
      totalQuantity: 'number',
      userId: 'string',
      userName: 'string',
      zone: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data entries.
   */
  items?: DescribeResourceCoverageDetailResponseBodyDataItems[];
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 200
   */
  maxResults?: number;
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
   * The total number of entries returned.
   * 
   * @example
   * 10000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeResourceCoverageDetailResponseBodyDataItems },
      maxResults: 'number',
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

export class DescribeResourceCoverageDetailResponseBody extends $dara.Model {
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
   * The returned data.
   */
  data?: DescribeResourceCoverageDetailResponseBodyData;
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
      data: DescribeResourceCoverageDetailResponseBodyData,
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

