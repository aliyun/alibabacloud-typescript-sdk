// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMemoryCollectionInput } from "./CreateMemoryCollectionInput";


export class CreateMemoryCollectionRequest extends $dara.Model {
  body?: CreateMemoryCollectionInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateMemoryCollectionInput,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

