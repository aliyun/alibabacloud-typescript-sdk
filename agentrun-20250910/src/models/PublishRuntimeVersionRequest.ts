// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublishRuntimeVersionInput } from "./PublishRuntimeVersionInput";


export class PublishRuntimeVersionRequest extends $dara.Model {
  body?: PublishRuntimeVersionInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PublishRuntimeVersionInput,
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

