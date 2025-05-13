// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelLabelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F81D9EC0-1872-50F5-A96C-A0647D****1D
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

