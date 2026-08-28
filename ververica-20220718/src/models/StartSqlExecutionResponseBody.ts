// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartSqlExecutionResult } from "./StartSqlExecutionResult";


export class StartSqlExecutionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The complete SQL script information returned upon success. This parameter is valid when success is true.
   * 
   * @example
   * See the response example
   */
  data?: StartSqlExecutionResult;
  /**
   * @remarks
   * The business error code. This parameter is not empty when success is false, and is empty when success is true.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * The business error message. This parameter is not empty when success is false, and is empty when success is true.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The business status code, which is always 200. Use success to determine whether the business request is successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the business request is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: StartSqlExecutionResult,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
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

