// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDisplayConfigResponseBody extends $dara.Model {
  /**
   * @example
   * A578AD3A-8E7C-54FE-A09F-B060941*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

