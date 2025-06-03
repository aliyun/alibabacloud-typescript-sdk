// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventSubscribeResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  /**
   * @example
   * ad53276431c****
   */
  subscribeId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subscribeId: 'SubscribeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subscribeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

