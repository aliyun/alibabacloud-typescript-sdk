// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceApiCallSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of API calls.
   * 
   * @example
   * 1021
   */
  callCount?: number;
  /**
   * @remarks
   * The number of APIs with call errors.
   * 
   * @example
   * 8
   */
  errorApiCount?: number;
  /**
   * @remarks
   * The number of applications affected by errors.
   * 
   * @example
   * 2
   */
  errorAppCount?: number;
  /**
   * @remarks
   * The number of failed calls.
   * 
   * @example
   * 102
   */
  errorCount?: number;
  /**
   * @remarks
   * The error rate.
   * 
   * @example
   * 10.01
   */
  errorRate?: number;
  /**
   * @remarks
   * The offline percentage.
   * 
   * @example
   * 2.03
   */
  offlineRate?: number;
  static names(): { [key: string]: string } {
    return {
      callCount: 'CallCount',
      errorApiCount: 'ErrorApiCount',
      errorAppCount: 'ErrorAppCount',
      errorCount: 'ErrorCount',
      errorRate: 'ErrorRate',
      offlineRate: 'OfflineRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callCount: 'number',
      errorApiCount: 'number',
      errorAppCount: 'number',
      errorCount: 'number',
      errorRate: 'number',
      offlineRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApiCallSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The aggregate statistics of API calls.
   */
  data?: GetDataServiceApiCallSummaryResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: GetDataServiceApiCallSummaryResponseBodyData,
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

