// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServerlessClusterResponseBody extends $dara.Model {
  /**
   * @example
   * sh-bp1a969y7681****
   */
  clusterId?: string;
  /**
   * @example
   * 23232453233*****
   */
  orderId?: string;
  /**
   * @example
   * *********
   */
  passWord?: string;
  /**
   * @example
   * 3E19E345-101D-4014-946C-************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      orderId: 'OrderId',
      passWord: 'PassWord',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      orderId: 'string',
      passWord: 'string',
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

