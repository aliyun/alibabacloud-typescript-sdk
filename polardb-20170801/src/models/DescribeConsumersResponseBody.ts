// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConsumersResponseBodyItems extends $dara.Model {
  /**
   * @example
   * "[]"
   */
  allowedModels?: string;
  /**
   * @example
   * xxxxxxxx
   */
  apiKey?: string;
  /**
   * @example
   * cg-xxxxxx
   */
  consumerGroupId?: string;
  /**
   * @example
   * test
   */
  consumerGroupName?: string;
  /**
   * @example
   * c-mqveroemc***
   */
  consumerId?: string;
  /**
   * @example
   * 2026-01-28T09:56:03+08:00
   */
  gmtCreated?: string;
  /**
   * @example
   * 2026-01-04T16:09:29+08:00
   */
  gmtModified?: string;
  lifetimeCostCount?: number;
  lifetimeTokenCount?: number;
  mtdCostCount?: number;
  mtdTokenCount?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
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
  items?: DescribeConsumersResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
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

