// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateToolInputV2 } from "./UpdateToolInputV2";


export class UpdateToolRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: UpdateToolInputV2;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateToolInputV2,
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

