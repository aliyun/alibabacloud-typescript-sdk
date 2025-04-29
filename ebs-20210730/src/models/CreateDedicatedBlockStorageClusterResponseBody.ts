// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDedicatedBlockStorageClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the dedicated block storage cluster.
   * 
   * @example
   * dbsc-f8z4d3k4nsgg9okb****
   */
  dbscId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 50155660025****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dbscId: 'DbscId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbscId: 'string',
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

