// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPenetrationTestListResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 1788873796000
   */
  applyTime?: number;
  /**
   * @example
   * EIP
   */
  assetType?: string;
  /**
   * @example
   * 710864062
   */
  id?: number;
  /**
   * @example
   * 10.0.158.58
   */
  ip?: string;
  /**
   * @example
   * early_end
   */
  status?: string;
  /**
   * @example
   * 1788873796000
   */
  testEndDate?: number;
  /**
   * @example
   * 1788873796000
   */
  testStartDate?: number;
  static names(): { [key: string]: string } {
    return {
      applyTime: 'ApplyTime',
      assetType: 'AssetType',
      id: 'Id',
      ip: 'Ip',
      status: 'Status',
      testEndDate: 'TestEndDate',
      testStartDate: 'TestStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyTime: 'number',
      assetType: 'string',
      id: 'number',
      ip: 'string',
      status: 'string',
      testEndDate: 'number',
      testStartDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPenetrationTestListResponseBodyDataPageInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 24
   */
  pageSize?: number;
  /**
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPenetrationTestListResponseBodyData extends $dara.Model {
  list?: QueryPenetrationTestListResponseBodyDataList[];
  pageInfo?: QueryPenetrationTestListResponseBodyDataPageInfo;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryPenetrationTestListResponseBodyDataList },
      pageInfo: QueryPenetrationTestListResponseBodyDataPageInfo,
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPenetrationTestListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: QueryPenetrationTestListResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 99D93ED4-D462-5FC5-8518-9BC1C49C7B6C
   */
  requestId?: string;
  /**
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
      data: QueryPenetrationTestListResponseBodyData,
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

