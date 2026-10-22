// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPenetrationTestListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The application time.
   * 
   * @example
   * 1788873796000
   */
  applyTime?: number;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * - **EIP**: Public IP address of a VPC.
   * - **SLB**: Server Load Balancer (SLB) instance for load balancing.
   * - **ECS**: Public IP address of an ECS instance in the classic network.
   * 
   * @example
   * EIP
   */
  assetType?: string;
  /**
   * @remarks
   * The unique identity ID of the alerting event record.
   * 
   * > The data type of this field is Long. Precision loss may occur during the procedure to serialize or deserialize the numeric sequence. Make sure that the value does not exceed 9007199254740991.
   * 
   * @example
   * 710864062
   */
  id?: number;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 10.0.158.58
   */
  ip?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **early_end**: The user applied for early termination.
   * - **expired**: The authorization expired.
   * - **auditing**: Under review.
   * - **approved**: Approved.
   * - **rejected**: Rejected.
   * 
   * @example
   * early_end
   */
  status?: string;
  /**
   * @remarks
   * The end time of the test.
   * 
   * @example
   * 1788873796000
   */
  testEndDate?: number;
  /**
   * @remarks
   * The start date of the test.
   * 
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
   * @remarks
   * The page number of the returned page.
   * 
   * > Default value: 1, which indicates the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 24
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of events.
   * 
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
  /**
   * @remarks
   * The event data.
   */
  list?: QueryPenetrationTestListResponseBodyDataList[];
  /**
   * @remarks
   * The pagination information.
   */
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
   * @remarks
   * The status code.
   * 
   * - **200**: Successful.
   * - **Other values (such as 400 and 500)**: Failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The query results.
   */
  data?: QueryPenetrationTestListResponseBodyData;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 99D93ED4-D462-5FC5-8518-9BC1C49C7B6C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - **true**: The call was successful.                               
   * - **false**: The call failed.
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

