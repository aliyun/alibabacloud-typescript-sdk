// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVulSummaryResponseBodyDataTrendList extends $dara.Model {
  /**
   * @remarks
   * Time point.
   * 
   * @example
   * 202407或者20240701
   */
  date?: string;
  /**
   * @remarks
   * Number of handled items.
   * 
   * @example
   * 10
   */
  dealCount?: number;
  /**
   * @remarks
   * Number of discovered items.
   * 
   * @example
   * 15
   */
  findCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dealCount: 'DealCount',
      findCount: 'FindCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dealCount: 'number',
      findCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Number of completed items.
   * 
   * @example
   * 10
   */
  completedCount?: number;
  /**
   * @remarks
   * Risk convergence rate.
   * 
   * @example
   * 50
   */
  dealRate?: string;
  /**
   * @remarks
   * Collection of vulnerability trend nodes.
   */
  trendList?: GetVulSummaryResponseBodyDataTrendList[];
  /**
   * @remarks
   * Number of unhandled items.
   * 
   * @example
   * 5
   */
  waitHandleCount?: number;
  static names(): { [key: string]: string } {
    return {
      completedCount: 'CompletedCount',
      dealRate: 'DealRate',
      trendList: 'TrendList',
      waitHandleCount: 'WaitHandleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedCount: 'number',
      dealRate: 'string',
      trendList: { 'type': 'array', 'itemType': GetVulSummaryResponseBodyDataTrendList },
      waitHandleCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.trendList)) {
      $dara.Model.validateArray(this.trendList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetVulSummaryResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message for the response result.
   * 
   * @example
   * system error
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * EF801DD1-D934-51B3-92D4-776CE17B184F
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetVulSummaryResponseBodyData,
      httpStatusCode: 'number',
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

