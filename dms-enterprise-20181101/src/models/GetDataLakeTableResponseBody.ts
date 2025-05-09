// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLTable } from "./Dltable";


export class GetDataLakeTableResponseBody extends $dara.Model {
  /**
   * @example
   * 400
   */
  errorCode?: string;
  /**
   * @example
   * Unknown server error
   */
  errorMessage?: string;
  /**
   * @example
   * 4E1D2B4D-3E53-4ABC-999D-1D2520B3471A
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  table?: DLTable;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'string',
      table: DLTable,
    };
  }

  validate() {
    if(this.table && typeof (this.table as any).validate === 'function') {
      (this.table as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

