// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServerlessClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the HBase Serverless instance.
   * 
   * @example
   * sh-bp1a969y7681****
   */
  clusterId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 23232453233*****
   */
  orderId?: string;
  /**
   * @remarks
   * The password used to access the cluster.
   * 
   * @example
   * *********
   */
  passWord?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

