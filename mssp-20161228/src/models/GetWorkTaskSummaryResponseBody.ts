// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkTaskSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Average response time (in minutes).
   * 
   * @example
   * 60
   */
  dealAverageDuration?: number;
  /**
   * @remarks
   * Year-over-year growth rate of average response time.
   * 
   * @example
   * 20
   */
  dealAverageDurationGrowthRate?: string;
  /**
   * @remarks
   * Number of work orders responded to.
   * 
   * @example
   * 100
   */
  dealWorkTaskCount?: number;
  /**
   * @remarks
   * Year-over-year growth rate of the number of work orders responded to.
   * 
   * @example
   * 20
   */
  dealWorkTaskCountRate?: string;
  /**
   * @remarks
   * Number of service responses.
   * 
   * @example
   * 10
   */
  workTaskCount?: number;
  /**
   * @remarks
   * Problem closure rate.
   * 
   * @example
   * 90
   */
  workTaskDealRate?: string;
  /**
   * @remarks
   * Year-over-year growth rate of problem closure rate.
   * 
   * @example
   * 20
   */
  workTaskDealRateGrowthRate?: string;
  /**
   * @remarks
   * Year-over-year growth rate of service responses.
   * 
   * @example
   * 20
   */
  workTaskGrowthRate?: string;
  static names(): { [key: string]: string } {
    return {
      dealAverageDuration: 'DealAverageDuration',
      dealAverageDurationGrowthRate: 'DealAverageDurationGrowthRate',
      dealWorkTaskCount: 'DealWorkTaskCount',
      dealWorkTaskCountRate: 'DealWorkTaskCountRate',
      workTaskCount: 'WorkTaskCount',
      workTaskDealRate: 'WorkTaskDealRate',
      workTaskDealRateGrowthRate: 'WorkTaskDealRateGrowthRate',
      workTaskGrowthRate: 'WorkTaskGrowthRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dealAverageDuration: 'number',
      dealAverageDurationGrowthRate: 'string',
      dealWorkTaskCount: 'number',
      dealWorkTaskCountRate: 'string',
      workTaskCount: 'number',
      workTaskDealRate: 'string',
      workTaskDealRateGrowthRate: 'string',
      workTaskGrowthRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkTaskSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetWorkTaskSummaryResponseBodyData;
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
   * Successful!
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
      data: GetWorkTaskSummaryResponseBodyData,
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

