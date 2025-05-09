// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataCorrectPreCheckSQLResponseBodyPreCheckSQLList } from "./ListDataCorrectPreCheckSqlresponseBodyPreCheckSqllist";


export class ListDataCorrectPreCheckSQLResponseBody extends $dara.Model {
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
   * The precheck information about SQL statements.
   */
  preCheckSQLList?: ListDataCorrectPreCheckSQLResponseBodyPreCheckSQLList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 31853A2B-DC9D-5B39-8492-D2AC8BCF550E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      preCheckSQLList: 'PreCheckSQLList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      preCheckSQLList: { 'type': 'array', 'itemType': ListDataCorrectPreCheckSQLResponseBodyPreCheckSQLList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.preCheckSQLList)) {
      $dara.Model.validateArray(this.preCheckSQLList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

