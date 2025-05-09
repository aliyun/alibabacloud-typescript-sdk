// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLogicDatabaseResponseBodyLogicDatabase } from "./GetLogicDatabaseResponseBodyLogicDatabase";


export class GetLogicDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
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
   * The details of the logical database.
   */
  logicDatabase?: GetLogicDatabaseResponseBodyLogicDatabase;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90260530-565C-42B9-A6E8-893481FE6AB6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      logicDatabase: 'LogicDatabase',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      logicDatabase: GetLogicDatabaseResponseBodyLogicDatabase,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.logicDatabase && typeof (this.logicDatabase as any).validate === 'function') {
      (this.logicDatabase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

