// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LibrarySchema } from "./LibrarySchema";


export class GetLibrarySchemaResponseBody extends $dara.Model {
  requestId?: string;
  result?: LibrarySchema;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: LibrarySchema,
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

