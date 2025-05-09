// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Column } from "./Column";


export class GetColumnResponseBody extends $dara.Model {
  column?: Column;
  /**
   * @example
   * D1E2E5BC-xxxx-xxxx-xxxx-xxxxxx
   */
  requestId?: string;
  /**
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

