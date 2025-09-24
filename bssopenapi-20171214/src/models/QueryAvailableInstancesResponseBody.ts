// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAvailableInstancesResponseBodyDataInstanceList extends $dara.Model {
  /**
   * @remarks
   * The time when the specified instance was created.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the instance was expired.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the specified instance was expected to be released.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  expectedReleaseTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 1049056
   */
  instanceID?: string;
  /**
   * @remarks
   * The ID of the instance owner.
   * 
   * @example
   * 325352345
   */
  ownerId?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The time when the instance was released.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  releaseTime?: string;
  /**
   * @remarks
   * The renewal status of the specified instance. Valid values:
   * 
   * *   AutoRenewal: The instance is automatically renewed.
   * *   ManualRenewal: The instance is manually renewed.
   * *   NotRenewal: The instance is not renewed.
   * 
   * @example
   * ManualRenewal
   */
  renewStatus?: string;
  /**
   * @remarks
   * The number of auto-renewal cycles.
   * 
   * @example
   * 1
   */
  renewalDuration?: number;
  /**
   * @remarks
   * The unit of the auto-renewal cycle. Valid values:
   * 
   * *   M: month
   * *   Y: year
   * 
   * @example
   * M
   */
  renewalDurationUnit?: string;
  /**
   * @remarks
   * The seller.
   * 
   * @example
   * 123123123
   */
  seller?: string;
  /**
   * @remarks
   * The ID of the seller.
   * 
   * @example
   * 123123123
   */
  sellerId?: number;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * Creating: The instance is being created. WaitForExpire: The instance is about to expire. Normal: The instance can properly run. Expired: The instance is expired.
   */
  status?: string;
  /**
   * @remarks
   * The time when the specified instance was suspended.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  stopTime?: string;
  /**
   * @remarks
   * The sub-status of the specified instance.
   * 
   * @example
   * Normal: The pay-as-you-go module can properly run. WaitForLimit: The pay-as-you-go module is about to be limited due to overdue payments. BandwidthLimited: The pay-as-you-go module is limited due to overdue payments.
   */
  subStatus?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay-as-you-go
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      expectedReleaseTime: 'ExpectedReleaseTime',
      instanceID: 'InstanceID',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      region: 'Region',
      releaseTime: 'ReleaseTime',
      renewStatus: 'RenewStatus',
      renewalDuration: 'RenewalDuration',
      renewalDurationUnit: 'RenewalDurationUnit',
      seller: 'Seller',
      sellerId: 'SellerId',
      status: 'Status',
      stopTime: 'StopTime',
      subStatus: 'SubStatus',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endTime: 'string',
      expectedReleaseTime: 'string',
      instanceID: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      region: 'string',
      releaseTime: 'string',
      renewStatus: 'string',
      renewalDuration: 'number',
      renewalDurationUnit: 'string',
      seller: 'string',
      sellerId: 'number',
      status: 'string',
      stopTime: 'string',
      subStatus: 'string',
      subscriptionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailableInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instances returned.
   */
  instanceList?: QueryAvailableInstancesResponseBodyDataInstanceList[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 11
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: { 'type': 'array', 'itemType': QueryAvailableInstancesResponseBodyDataInstanceList },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailableInstancesResponseBody extends $dara.Model {
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
   * The data returned.
   */
  data?: QueryAvailableInstancesResponseBodyData;
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
   * C7C15585-8349-4C62-BEE4-5A391841B9BE
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
      data: QueryAvailableInstancesResponseBodyData,
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

