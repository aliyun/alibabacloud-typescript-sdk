// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReactivateDBClusterBackupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 2035629******
   */
  orderId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F2A9EFA7-915F-4572-8299-85A307******
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

