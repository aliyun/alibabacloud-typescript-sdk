// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 2656FA19-6059-40C8-A157-3FFBEAEC2369
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

