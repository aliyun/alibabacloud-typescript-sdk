// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVerifyInvokeSatisticResponseBodyItemsData extends $dara.Model {
  /**
   * @remarks
   * The count of the statistical value.
   * 
   * @example
   * 3
   */
  statisticsCount?: string;
  /**
   * @remarks
   * The product code.
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
   * The list of statistics data.
   */
  data?: QueryVerifyInvokeSatisticResponseBodyItemsData[];
  /**
   * @remarks
   * The statistics date.
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
   * The response code. **200** indicates a successful response.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of returned data.
   */
  items?: QueryVerifyInvokeSatisticResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2FA2C773-47DB-4156-B1EE-5B047321A939
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the response is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
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

