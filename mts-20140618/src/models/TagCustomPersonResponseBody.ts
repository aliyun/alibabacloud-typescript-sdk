// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagCustomPersonResponseBody extends $dara.Model {
  /**
   * @example
   * FD8B5B8C-0C3D-5776-B3B1-EE6AD11F905A
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

