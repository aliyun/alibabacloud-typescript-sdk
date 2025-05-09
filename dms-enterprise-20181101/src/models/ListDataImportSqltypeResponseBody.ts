// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataImportSQLTypeResponseBody extends $dara.Model {
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
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * E5EE2B9E-2F95-57FA-B284-CB441CEE49D6
   */
  requestId?: string;
  /**
   * @remarks
   * The types of SQL statements.
   */
  sqlTypeResult?: string[];
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
      requestId: 'RequestId',
      sqlTypeResult: 'SqlTypeResult',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      sqlTypeResult: { 'type': 'array', 'itemType': 'string' },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.sqlTypeResult)) {
      $dara.Model.validateArray(this.sqlTypeResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

