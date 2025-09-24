// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceUsageDetailResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The unit that is used to measure the resources that are deducted.
   */
  capacityUnit?: string;
  /**
   * @remarks
   * The type of the currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The amount of the deducted resources.
   * 
   * @example
   * 1
   */
  deductQuantity?: number;
  /**
   * @remarks
   * The end of the time range in which the usage details were queried.
   * 
   * @example
   * 2021-04-01 01:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The operating system.
   * 
   * @example
   * linux
   */
  imageType?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.t5-lc2m1.nano
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The equivalent of pay-as-you-go costs.
   * 
   * @example
   * 0.06
   */
  postpaidCost?: string;
  /**
   * @remarks
   * The potential net savings.
   * 
   * @example
   * 0.13
   */
  potentialSavedCost?: string;
  /**
   * @remarks
   * The number of deduction plans.
   * 
   * @example
   * 2
   */
  quantity?: number;
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
   * The fee of the deduction plan.
   * 
   * @example
   * 0
   */
  reservationCost?: string;
  /**
   * @remarks
   * The ID of the deduction plan.
   * 
   * @example
   * ecsri-bp147nnfz21225k9mpix00
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The net savings.
   * 
   * @example
   * 0.06
   */
  savedCost?: string;
  /**
   * @remarks
   * The beginning of the time range in which the usage details were queried.
   * 
   * @example
   * 2021-04-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the deduction plan.
   * 
   * @example
   * Valid
   */
  status?: string;
  /**
   * @remarks
   * The name of the status.
   */
  statusName?: string;
  /**
   * @remarks
   * The total capacity of the deduction plan.
   * 
   * @example
   * 2
   */
  totalQuantity?: number;
  /**
   * @remarks
   * The usage rate of the deduction plan.
   * 
   * @example
   * 0.5
   */
  usagePercentage?: number;
  /**
   * @remarks
   * The account ID.
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
   * test@aliyun.com
   */
  userName?: string;
  /**
   * @remarks
   * The zone.
   * 
   * @example
   * cn-hangzhou-i
   */
  zone?: string;
  /**
   * @remarks
   * The code of the zone.
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      capacityUnit: 'CapacityUnit',
      currency: 'Currency',
      deductQuantity: 'DeductQuantity',
      endTime: 'EndTime',
      imageType: 'ImageType',
      instanceSpec: 'InstanceSpec',
      postpaidCost: 'PostpaidCost',
      potentialSavedCost: 'PotentialSavedCost',
      quantity: 'Quantity',
      region: 'Region',
      regionNo: 'RegionNo',
      reservationCost: 'ReservationCost',
      resourceInstanceId: 'ResourceInstanceId',
      savedCost: 'SavedCost',
      startTime: 'StartTime',
      status: 'Status',
      statusName: 'StatusName',
      totalQuantity: 'TotalQuantity',
      usagePercentage: 'UsagePercentage',
      userId: 'UserId',
      userName: 'UserName',
      zone: 'Zone',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: 'string',
      currency: 'string',
      deductQuantity: 'number',
      endTime: 'string',
      imageType: 'string',
      instanceSpec: 'string',
      postpaidCost: 'string',
      potentialSavedCost: 'string',
      quantity: 'number',
      region: 'string',
      regionNo: 'string',
      reservationCost: 'string',
      resourceInstanceId: 'string',
      savedCost: 'string',
      startTime: 'string',
      status: 'string',
      statusName: 'string',
      totalQuantity: 'number',
      usagePercentage: 'number',
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

export class DescribeResourceUsageDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data entries.
   */
  items?: DescribeResourceUsageDetailResponseBodyDataItems[];
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
   * A pagination token. It can be used in the next request to retrieve a new page of results.
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
      items: { 'type': 'array', 'itemType': DescribeResourceUsageDetailResponseBodyDataItems },
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

export class DescribeResourceUsageDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeResourceUsageDetailResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: DescribeResourceUsageDetailResponseBodyData,
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

