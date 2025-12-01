// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVulPageSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Number of completed items.
   * 
   * @example
   * 1990
   */
  completedCount?: number;
  /**
   * @remarks
   * Number of items being handled.
   * 
   * @example
   * 6
   */
  handingCount?: number;
  /**
   * @remarks
   * Number of high-risk items.
   * 
   * @example
   * 500
   */
  highCount?: number;
  /**
   * @remarks
   * Number of low-risk items.
   * 
   * @example
   * 1000
   */
  lowCount?: number;
  /**
   * @remarks
   * Number of medium-risk items.
   * 
   * @example
   * 500
   */
  mediumCount?: number;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 2000
   */
  totalCount?: number;
  /**
   * @remarks
   * Number of unhandled items.
   * 
   * @example
   * 4
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

export class GetVulPageSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data query result.
   */
  data?: GetVulPageSummaryResponseBodyData;
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
   * Return message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * A3A575C8-80F9-5F04-AA24-CCAC246884A3
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
      data: GetVulPageSummaryResponseBodyData,
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

