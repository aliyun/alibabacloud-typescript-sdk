// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSuspPageSummaryResponseBodyData extends $dara.Model {
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
   * Number of items being processed.
   * 
   * @example
   * 10
   */
  handingCount?: number;
  /**
   * @remarks
   * Number of high-risk items.
   * 
   * @example
   * 10
   */
  highCount?: number;
  /**
   * @remarks
   * Number of low-risk items.
   * 
   * @example
   * 10
   */
  lowCount?: number;
  /**
   * @remarks
   * Number of medium-risk items.
   * 
   * @example
   * 10
   */
  mediumCount?: number;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  /**
   * @remarks
   * Number of unhandled items.
   * 
   * @example
   * 10
   */
  waitHandleCount?: number;
  static names(): { [key: string]: string } {
    return {
      completedCount: 'CompletedCount',
      handingCount: 'HandingCount',
      highCount: 'HighCount',
      lowCount: 'LowCount',
      mediumCount: 'MediumCount',
      totalCount: 'TotalCount',
      waitHandleCount: 'WaitHandleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedCount: 'number',
      handingCount: 'number',
      highCount: 'number',
      lowCount: 'number',
      mediumCount: 'number',
      totalCount: 'number',
      waitHandleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspPageSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetSuspPageSummaryResponseBodyData;
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
   * Prompt message for the result returned.
   * 
   * @example
   * SUCCESS
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
   * Indicates whether the call was successful.
   * - **true**: Call succeeded.
   * - **false**: Call failed.
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
      data: GetSuspPageSummaryResponseBodyData,
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

