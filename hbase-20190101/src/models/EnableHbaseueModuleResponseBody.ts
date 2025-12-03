// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableHBaseueModuleResponseBody extends $dara.Model {
  /**
   * @example
   * ld-bp150tns0sjxs****-m1-ps
   */
  clusterId?: string;
  /**
   * @example
   * 21474915573****
   */
  orderId?: string;
  /**
   * @example
   * 407075EA-47F5-5A2D-888F-C1F90B8F3FCA
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

