// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLogicTablesResponseBodyLogicTableList } from "./ListLogicTablesResponseBodyLogicTableList";


export class ListLogicTablesResponseBody extends $dara.Model {
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
   * The details of the logical tables.
   */
  logicTableList?: ListLogicTablesResponseBodyLogicTableList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F1E6484F-9DF1-4406-9BDE-0861C4629B69
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
  /**
   * @remarks
   * The total number of logical tables that meet the query conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      logicTableList: 'LogicTableList',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      logicTableList: ListLogicTablesResponseBodyLogicTableList,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.logicTableList && typeof (this.logicTableList as any).validate === 'function') {
      (this.logicTableList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

