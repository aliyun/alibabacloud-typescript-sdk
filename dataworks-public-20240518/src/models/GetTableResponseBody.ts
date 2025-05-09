// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Table } from "./Table";


export class GetTableResponseBody extends $dara.Model {
  /**
   * @example
   * 7B3435F4-2D91-XXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  table?: Table;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      table: Table,
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

