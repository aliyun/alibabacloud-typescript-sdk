// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFixedNoAReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Creation result.
   * 
   * @example
   * true
   */
  createResult?: boolean;
  /**
   * @remarks
   * Enumeration of creation types. The value 1 indicates success, and negative numbers indicate creation failure. Valid values:
   * 
   * - 1: Succeeded.
   * 
   * - -1: The phone number has already been submitted for reporting; no need to submit again.
   * 
   * - -2: The phone number has already been successfully reported; no need to report again.
   * 
   * @example
   * 1
   */
  failType?: number;
  static names(): { [key: string]: string } {
    return {
      createResult: 'CreateResult',
      failType: 'FailType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createResult: 'boolean',
      failType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFixedNoAReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of denied access.
   * 
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Request status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The struct of the reporting result for number A.
   */
  data?: CreateFixedNoAReportResponseBodyData;
  /**
   * @remarks
   * Error message for failure.
   * 
   * @example
   * 固话号码***已存在
   */
  message?: string;
  /**
   * @remarks
   * The returned ID.
   * 
   * @example
   * 1D73E648-0978-18A5-B089-3BB2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Valid values:
   * 
   * - true: Succeeded.
   * 
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CreateFixedNoAReportResponseBodyData,
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

