// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEmbodiedAIPlatformResponseBody extends $dara.Model {
  /**
   * @example
   * 19E994DC-A816-56DB-9F90-5F8E403DD19D
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

