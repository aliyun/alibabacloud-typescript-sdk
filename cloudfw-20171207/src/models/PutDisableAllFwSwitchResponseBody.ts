// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutDisableAllFwSwitchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B2841452-CB8D-4F7D-B247-38E1CF7334F8
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

