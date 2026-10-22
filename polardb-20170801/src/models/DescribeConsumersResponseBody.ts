// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConsumersResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The list of supported models.
   * 
   * @example
   * "[]"
   */
  allowedModels?: string;
  /**
   * @remarks
   * The complete API key. This value is returned only in the current response.
   * 
   * @example
   * xxxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * cg-xxxxxx
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The name of the consumer group.
   * 
   * @example
   * test
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The ID of the consumer.
   * 
   * @example
   * c-mqveroemc***
   */
  consumerId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-01-28T09:56:03+08:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-01-04T16:09:29+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The cumulative usage.
   * 
   * @example
   * 1000
   */
  lifetimeCostCount?: number;
  /**
   * @remarks
   * The total cost for the current month.
   * 
   * @example
   * 100
   */
  lifetimeTokenCount?: number;
  /**
   * @remarks
   * The usage for the current month.
   * 
   * @example
   * 10
   */
  mtdCostCount?: number;
  /**
   * @remarks
   * The cumulative total cost.
   * 
   * @example
   * 10000
   */
  mtdTokenCount?: number;
  /**
   * @remarks
   * The name of the consumer.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The nickname of the consumer.
   * 
   * @example
   * yonghu
   */
  nickName?: string;
  static names(): { [key: string]: string } {
    return {
      allowedModels: 'AllowedModels',
      apiKey: 'ApiKey',
      consumerGroupId: 'ConsumerGroupId',
      consumerGroupName: 'ConsumerGroupName',
      consumerId: 'ConsumerId',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      lifetimeCostCount: 'LifetimeCostCount',
      lifetimeTokenCount: 'LifetimeTokenCount',
      mtdCostCount: 'MtdCostCount',
      mtdTokenCount: 'MtdTokenCount',
      name: 'Name',
      nickName: 'NickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedModels: 'string',
      apiKey: 'string',
      consumerGroupId: 'string',
      consumerGroupName: 'string',
      consumerId: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      lifetimeCostCount: 'number',
      lifetimeTokenCount: 'number',
      mtdCostCount: 'number',
      mtdTokenCount: 'number',
      name: 'string',
      nickName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of consumers.
   */
  items?: DescribeConsumersResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 30, 50, and 100. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 24A1990B-4F6E-482B-B8CB-75C612******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeConsumersResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
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

