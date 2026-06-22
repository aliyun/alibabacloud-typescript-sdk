// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PeekMessageRequest extends $dara.Model {
  peekonly?: boolean;
  static names(): { [key: string]: string } {
    return {
      peekonly: 'peekonly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peekonly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

