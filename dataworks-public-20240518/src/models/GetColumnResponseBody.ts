// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Column } from "./Column";


export class GetColumnResponseBody extends $dara.Model {
  /**
   * @remarks
   * The columns in the table.
   */
  column?: Column;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D1E2E5BC-xxxx-xxxx-xxxx-xxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: Column,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.column && typeof (this.column as any).validate === 'function') {
      (this.column as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

