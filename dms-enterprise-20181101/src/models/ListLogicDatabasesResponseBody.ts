// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLogicDatabasesResponseBodyLogicDatabaseList } from "./ListLogicDatabasesResponseBodyLogicDatabaseList";


export class ListLogicDatabasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The details of logical databases.
   */
  logicDatabaseList?: ListLogicDatabasesResponseBodyLogicDatabaseList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8068AF82-8A1A-592C-AC2E-6B75338BAB87
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of logical databases.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      logicDatabaseList: 'LogicDatabaseList',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      logicDatabaseList: ListLogicDatabasesResponseBodyLogicDatabaseList,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.logicDatabaseList && typeof (this.logicDatabaseList as any).validate === 'function') {
      (this.logicDatabaseList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

