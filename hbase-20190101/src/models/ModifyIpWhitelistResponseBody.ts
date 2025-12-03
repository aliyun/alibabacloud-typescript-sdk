// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIpWhitelistResponseBody extends $dara.Model {
  /**
   * @example
   * 101CFA8A-FB88-5014-A10C-3A0DA9AD8B0B
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

