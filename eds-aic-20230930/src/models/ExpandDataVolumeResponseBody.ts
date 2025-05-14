// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExpandDataVolumeResponseBody extends $dara.Model {
  /**
   * @example
   * 22326560487****
   */
  orderId?: string;
  /**
   * @example
   * 5C5CEF0A-D6E1-58D3-8750-67DB4F82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
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

