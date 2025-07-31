// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceApiCallSummaryResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1021
   */
  callCount?: number;
  /**
   * @example
   * 8
   */
  errorApiCount?: number;
  /**
   * @example
   * 2
   */
  errorAppCount?: number;
  /**
   * @example
   * 102
   */
  errorCount?: number;
  /**
   * @example
   * 10.01
   */
  errorRate?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: GetDataServiceApiCallSummaryResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
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

