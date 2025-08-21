// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindAliasResponseBody extends $dara.Model {
  /**
   * @example
   * 159E4422-6624-4750-8943-DFD98D34858C
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

