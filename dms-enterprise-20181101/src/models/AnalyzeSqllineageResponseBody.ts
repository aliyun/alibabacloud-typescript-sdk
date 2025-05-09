// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AnalyzeSQLLineageResponseBodyLineageResult } from "./AnalyzeSqllineageResponseBodyLineageResult";


export class AnalyzeSQLLineageResponseBody extends $dara.Model {
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
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * Returned data set of SQL lineage.
   */
  lineageResult?: AnalyzeSQLLineageResponseBodyLineageResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4B07137-F6AE-4756-8474-7F92BB6C4E04
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
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      lineageResult: 'LineageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      lineageResult: AnalyzeSQLLineageResponseBodyLineageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.lineageResult && typeof (this.lineageResult as any).validate === 'function') {
      (this.lineageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

