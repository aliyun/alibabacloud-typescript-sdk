// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySrvNetworkAddressResponseBody extends $dara.Model {
  /**
   * @example
   * 45D2B592-DEBA-4347-BBF3-xxxxxC97DBBC
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

