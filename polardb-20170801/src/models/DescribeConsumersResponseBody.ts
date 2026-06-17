// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConsumersResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The models that the consumer is allowed to access, specified as a JSON array in string format.
   * 
   * @example
   * "[]"
   */
  allowedModels?: string;
  /**
   * @remarks
   * The full API key. This value is returned only by this operation.
   * 
   * @example
   * xxxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * cg-xxxxxx
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The consumer group name.
   * 
   * @example
   * test
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The consumer ID.
   * 
   * @example
   * c-mqveroemc***
   */
  consumerId?: string;
  /**
   * @remarks
   * The time when the consumer was created.
   * 
   * @example
   * 2026-01-28T09:56:03+08:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the consumer was last modified.
   * 
   * @example
   * 2026-01-04T16:09:29+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The total usage.
   * 
   * @example
   * 1000
   */
  lifetimeCostCount?: number;
  /**
   * @remarks
   * The total number of tokens consumed.
   * 
   * @example
   * 100
   */
  lifetimeTokenCount?: number;
  /**
   * @remarks
   * The month-to-date usage.
   * 
   * @example
   * 10
   */
  mtdCostCount?: number;
  /**
   * @remarks
   * The number of tokens consumed month-to-date.
   * 
   * @example
   * 10000
   */
  mtdTokenCount?: number;
  /**
   * @remarks
   * The consumer name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The consumer nickname.
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
   * A list of consumers.
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The page size. Valid values: 30, 50, and 100. The default value is 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 24A1990B-4F6E-482B-B8CB-75C612******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
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

