// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTableColumnsResponseBodyColumnList } from "./ListTableColumnsResponseBodyColumnList";


export class ListTableColumnsResponseBody extends $dara.Model {
  columnList?: ListTableColumnsResponseBodyColumnList;
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
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
      columnList: ListTableColumnsResponseBodyColumnList,
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

