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
   * - **EIP**: The public IP address of a VPC.
   * - **SLB**: Server Load Balancer.
   * - **ECS**: The public IP address of an ECS instance in the classic network.
   * 
   * @example
   * EIP
   */
  assetType?: string;
  /**
   * @remarks
   * The unique identifier of the alert event record.
   * 
   * > The data type of this field is Long. Precision loss may occur during the serialization or deserialization process. Make sure that the value does not exceed 9007199254740991.
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
   * The status of the task. Valid values:
   * 
   * - **early_end**: The user applied for early termination.
   * - **expired**: The authorization expired.
   * - **auditing**: The application is being reviewed.
   * - **approved**: The application is approved.
   * - **rejected**: The application is rejected.
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
   * The page number from which the query results are displayed.
   * 
   * > Default value: 1, which indicates that the query results are displayed starting from the first page.
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
   * - **200**: Success.
   * - **Other values (such as 400 and 500)**: Failure.
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
   * Indicates whether the call is successful. Valid values:
   * 
   * - **true**: The call is successful.                               
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

