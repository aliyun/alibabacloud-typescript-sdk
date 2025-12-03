// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchServiceResponseBody extends $dara.Model {
  /**
   * @example
   * F1005DE4-D981-559F-9E37-5172DXXXXXX
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

