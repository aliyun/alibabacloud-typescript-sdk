// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterResponseBody extends $dara.Model {
  /**
   * @example
   * hb-bp1hy2sjf8gd****
   */
  clusterId?: string;
  /**
   * @example
   * 23232069786****
   */
  orderId?: string;
  /**
   * @example
   * 3E19E345-101D-4014-946C-A205
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
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

