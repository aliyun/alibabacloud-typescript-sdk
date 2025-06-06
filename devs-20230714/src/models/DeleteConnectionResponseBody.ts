// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConnectionResponseBody extends $dara.Model {
  /**
   * @example
   * A5152937-1C8A-5260-90FA-520CEF028D2D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

