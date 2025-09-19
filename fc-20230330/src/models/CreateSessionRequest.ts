// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSessionInput } from "./CreateSessionInput";


export class CreateSessionRequest extends $dara.Model {
  body?: CreateSessionInput;
  /**
   * @example
   * aliasName1
   */
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateSessionInput,
      qualifier: 'string',
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

