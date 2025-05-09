// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSQLReviewCheckResultStatusResponseBodyCheckResultStatus } from "./GetSqlreviewCheckResultStatusResponseBodyCheckResultStatus";


export class GetSQLReviewCheckResultStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the SQL review.
   */
  checkResultStatus?: GetSQLReviewCheckResultStatusResponseBodyCheckResultStatus;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
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
      checkResultStatus: 'CheckResultStatus',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResultStatus: GetSQLReviewCheckResultStatusResponseBodyCheckResultStatus,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.checkResultStatus && typeof (this.checkResultStatus as any).validate === 'function') {
      (this.checkResultStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

