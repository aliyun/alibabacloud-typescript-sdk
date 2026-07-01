// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AsyncDraftValidateResult } from "./AsyncDraftValidateResult";


export class GetValidateDeploymentDraftResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result object of the in-depth check for the job draft.
   */
  data?: AsyncDraftValidateResult;
  /**
   * @remarks
   * If success is false, this parameter is not empty and indicates the business error code. If success is true, this parameter is empty.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * If success is false, this parameter is not empty and indicates the business error message. If success is true, this parameter is empty.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The business status code. This is always 200. The success parameter indicates whether the business request was successful.
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
   * Indicates whether the business request was successful.
   * 
   * @example
   * true
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
      data: AsyncDraftValidateResult,
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

