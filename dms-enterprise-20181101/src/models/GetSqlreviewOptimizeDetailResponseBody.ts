// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSQLReviewOptimizeDetailResponseBodyOptimizeDetail } from "./GetSqlreviewOptimizeDetailResponseBodyOptimizeDetail";


export class GetSQLReviewOptimizeDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The details of optimization suggestions for SQL statements.
   */
  optimizeDetail?: GetSQLReviewOptimizeDetailResponseBodyOptimizeDetail;
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
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      optimizeDetail: 'OptimizeDetail',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      optimizeDetail: GetSQLReviewOptimizeDetailResponseBodyOptimizeDetail,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.optimizeDetail && typeof (this.optimizeDetail as any).validate === 'function') {
      (this.optimizeDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

