// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeNodeCountResponseBody extends $dara.Model {
  /**
   * @example
   * 20470860005****
   */
  orderId?: string;
  /**
   * @example
   * B288B41F-6681-42A6-8905-47C3C42B19B0
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

