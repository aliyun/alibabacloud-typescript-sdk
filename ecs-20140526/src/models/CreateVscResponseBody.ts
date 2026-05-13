// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVscResponseBody extends $dara.Model {
  /**
   * @example
   * DD38F-12VBW2-**EKX
   */
  requestId?: string;
  /**
   * @example
   * vsc-b*d31dq
   */
  vscId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vscId: 'VscId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vscId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

