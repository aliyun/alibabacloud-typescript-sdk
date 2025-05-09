// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataExportPreCheckDetailResponseBodyPreCheckResult } from "./GetDataExportPreCheckDetailResponseBodyPreCheckResult";


export class GetDataExportPreCheckDetailResponseBody extends $dara.Model {
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
   * Indicates the result of the precheck task.
   */
  preCheckResult?: GetDataExportPreCheckDetailResponseBodyPreCheckResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C1D39814-9808-47F8-AFE0-AF167239AC9B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      preCheckResult: 'PreCheckResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      preCheckResult: GetDataExportPreCheckDetailResponseBodyPreCheckResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.preCheckResult && typeof (this.preCheckResult as any).validate === 'function') {
      (this.preCheckResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

