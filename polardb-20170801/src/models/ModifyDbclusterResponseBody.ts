// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The generated order ID.
   * 
   * @example
   * 2148126708*****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CD3FA5F3-FAF3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
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

