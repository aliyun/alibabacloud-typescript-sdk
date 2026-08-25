// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugModelRequestBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hello
   */
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      prompt: 'prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugModelRequest extends $dara.Model {
  body?: DebugModelRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: DebugModelRequestBody,
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

