// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListColumnsResponseBodyColumnList } from "./ListColumnsResponseBodyColumnList";


export class ListColumnsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about columns.
   */
  columnList?: ListColumnsResponseBodyColumnList;
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
   * 0AD9AC55-5873-474A-9F33-4285806A3619
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
      columnList: 'ColumnList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: ListColumnsResponseBodyColumnList,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.columnList && typeof (this.columnList as any).validate === 'function') {
      (this.columnList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

