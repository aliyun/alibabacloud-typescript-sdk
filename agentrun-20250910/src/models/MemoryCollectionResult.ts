// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MemoryCollection } from "./MemoryCollection";


export class MemoryCollectionResult extends $dara.Model {
  code?: string;
  data?: MemoryCollection;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: MemoryCollection,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

