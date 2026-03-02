// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LibraryListResult } from "./LibraryListResult";


export class ListLibrarysResponseBody extends $dara.Model {
  requestId?: string;
  result?: LibraryListResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: LibraryListResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

