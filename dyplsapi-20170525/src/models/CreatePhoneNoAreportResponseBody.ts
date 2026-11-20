// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePhoneNoAReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Creation result. Valid values:
   * 
   * - true: Succeeded.
   * 
   * - false: Failed.
   * 
   * @example
   * true
   */
  createResult?: boolean;
  /**
   * @remarks
   * Enumeration of creation types. A value of 1 indicates success, and negative values indicate creation failure. Valid values:
   * 
   * - 1: Succeeded.
   * 
   * - -1: The mobile phone number has already been submitted for filing; no need to submit again.
   * 
   * - -2: The mobile phone number has already been successfully filed; no need to file again.
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

export class CreatePhoneNoAReportResponseBody extends $dara.Model {
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
   * The struct of the A-number filing result.
   */
  data?: CreatePhoneNoAReportResponseBodyData;
  /**
   * @remarks
   * Error message for failure.
   * 
   * @example
   * 手机号码***已存在
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
      data: CreatePhoneNoAReportResponseBodyData,
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

