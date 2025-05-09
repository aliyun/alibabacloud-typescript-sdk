// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDBTaskSQLJobLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * MissingJobId
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * JobId is mandatory for this action.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The log that records the scheduling details.
   * 
   * @example
   * log_****
   */
  log?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4AC23904-55DE-550B-9676-E8946F07****
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
      log: 'Log',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      log: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

