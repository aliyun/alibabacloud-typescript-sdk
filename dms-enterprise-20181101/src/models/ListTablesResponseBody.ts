// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTablesResponseBodyTableList } from "./ListTablesResponseBodyTableList";


export class ListTablesResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * B16FB618-5E96-4FFD-BB0D-490C890A4030
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
  /**
   * @remarks
   * The details of the tables.
   */
  tableList?: ListTablesResponseBodyTableList;
  /**
   * @remarks
   * The total number of tables that meet the query conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tableList: 'TableList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tableList: ListTablesResponseBodyTableList,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.tableList && typeof (this.tableList as any).validate === 'function') {
      (this.tableList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

