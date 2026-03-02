// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Variable } from "./Variable";


export class UpdateVariableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial. This parameter is returned in scenarios where the account is not authorized to perform operations.
   * 
   * @example
   * “”
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The variable structure after the update.
   */
  data?: Variable;
  /**
   * @remarks
   * If the value of success was false, an error code was returned. If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * If the value of success was false, an error message was returned. If the value of success was true, a null value was returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status code returned. The value was fixed to 200. The status code 200 indicates that the request was successful.
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
   * 1EF03B0C-F44F-47AD-BB48-D002D0F7B8C9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      data: Variable,
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

