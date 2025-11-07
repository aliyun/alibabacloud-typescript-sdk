// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVerifyInvokeSatisticResponseBodyItemsData extends $dara.Model {
  /**
   * @remarks
   * Number of occurrences of the statistic.
   * 
   * @example
   * 3
   */
  statisticsCount?: string;
  /**
   * @remarks
   * ProductCode。
   * 
   * @example
   * ID_PRO
   */
  statisticsType?: string;
  static names(): { [key: string]: string } {
    return {
      statisticsCount: 'StatisticsCount',
      statisticsType: 'StatisticsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statisticsCount: 'string',
      statisticsType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVerifyInvokeSatisticResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * List of statistical data.
   */
  data?: QueryVerifyInvokeSatisticResponseBodyItemsData[];
  /**
   * @remarks
   * Statistics date.
   * 
   * @example
   * 2025-10-16
   */
  statisticsDate?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      statisticsDate: 'StatisticsDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryVerifyInvokeSatisticResponseBodyItemsData },
      statisticsDate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVerifyInvokeSatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code, **200** indicates a successful response.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * List of returned data.
   */
  items?: QueryVerifyInvokeSatisticResponseBodyItems[];
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 2FA2C773-47DB-4156-B1EE-5B047321A939
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the response was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': QueryVerifyInvokeSatisticResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
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

