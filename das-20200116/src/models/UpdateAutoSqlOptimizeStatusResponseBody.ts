// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutoSqlOptimizeStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * *   **-1001**: indicates that the specified parameter is invalid.
   * *   **-91029**: indicates that a system error occurred.
   * 
   * @example
   * -1001
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * invalid param
   */
  errorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request initiated to configure the automatic SQL optimization feature was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoSqlOptimizeStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdateAutoSqlOptimizeStatusResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A52AD37C-35ED-581A-AC23-2232BE54****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
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
      data: UpdateAutoSqlOptimizeStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

