// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRunResponseBodyMessages } from "./CreateRunResponseBodyMessages";
import { CreateRunResponseBodyRun } from "./CreateRunResponseBodyRun";


export class CreateRunResponseBody extends $dara.Model {
  messages?: CreateRunResponseBodyMessages[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  run?: CreateRunResponseBodyRun;
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
      requestId: 'requestId',
      run: 'run',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': CreateRunResponseBodyMessages },
      requestId: 'string',
      run: CreateRunResponseBodyRun,
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.run && typeof (this.run as any).validate === 'function') {
      (this.run as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

