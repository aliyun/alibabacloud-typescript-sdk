// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateListenerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The listener ID.
   * 
   * @example
   * lsn-wi3c0v30ivysrg****
   */
  listenerId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A045E652-D298-5E70-A978-7247135336FB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
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

