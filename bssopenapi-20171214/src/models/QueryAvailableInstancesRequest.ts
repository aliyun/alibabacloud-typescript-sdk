// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAvailableInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The end time when the specified instance is created. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2016-05-23T12:00:00Z
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The start time when the specified instance is created. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2016-05-23T12:00:00Z
   */
  createTimeStart?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Example: 2016-05-23T12:00:00Z.
   * 
   * @example
   * 2016-05-23T12:00:00Z
   */
  endTimeEnd?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Example: 2016-05-23T12:00:00Z.
   * 
   * @example
   * 2016-05-23T12:00:00Z
   */
  endTimeStart?: string;
  /**
   * @remarks
   * The ID of the instance. Separate multiple IDs with commas (,). You can specify a maximum of 100 IDs.
   * 
   * @example
   * rm-xxxxxxxxxxxx
   */
  instanceIDs?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The code of the service. You can query the service code by calling the **QueryProductList** operation or viewing **Codes of Alibaba Cloud services**.
   * 
   * >This parameter cannot be left empty if the region is specified.
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
   * The renewal status of the specified instance. Valid values:
   * 
   * *   AutoRenewal: The instance is automatically renewed.
   * *   ManualRenewal: The instance is manually renewed.
   * *   NotRenewal: The instance is not renewed.
   * 
   * @example
   * AutoRenewal
   */
  renewStatus?: string;
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
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      endTimeEnd: 'EndTimeEnd',
      endTimeStart: 'EndTimeStart',
      instanceIDs: 'InstanceIDs',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productType: 'ProductType',
      region: 'Region',
      renewStatus: 'RenewStatus',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'string',
      createTimeStart: 'string',
      endTimeEnd: 'string',
      endTimeStart: 'string',
      instanceIDs: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
      productType: 'string',
      region: 'string',
      renewStatus: 'string',
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

