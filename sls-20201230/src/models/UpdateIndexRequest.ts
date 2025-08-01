// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Index } from "./Index";


export class UpdateIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: Index;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Index,
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

