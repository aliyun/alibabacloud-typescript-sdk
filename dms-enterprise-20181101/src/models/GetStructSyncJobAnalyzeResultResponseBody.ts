// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResult } from "./GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResult";


export class GetStructSyncJobAnalyzeResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
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
   * 1810E635-A2D7-428B-BAA9-85DAEB9B1A77
   */
  requestId?: string;
  /**
   * @remarks
   * The analysis result of the schema synchronization task.
   */
  structSyncJobAnalyzeResult?: GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResult;
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
      requestId: 'RequestId',
      structSyncJobAnalyzeResult: 'StructSyncJobAnalyzeResult',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      structSyncJobAnalyzeResult: GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.structSyncJobAnalyzeResult && typeof (this.structSyncJobAnalyzeResult as any).validate === 'function') {
      (this.structSyncJobAnalyzeResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

