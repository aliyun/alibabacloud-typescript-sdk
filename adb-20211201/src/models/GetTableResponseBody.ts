// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TableModel } from "./TableModel";


export class GetTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the query succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The information about the table.
   */
  table?: TableModel;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      table: TableModel,
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

