// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReadPageBody } from "./ReadPageBody";


export class ReadPageBasicRequest extends $dara.Model {
  /**
   * @remarks
   * post body
   */
  body?: ReadPageBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ReadPageBody,
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

