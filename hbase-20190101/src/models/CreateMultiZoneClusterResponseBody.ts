// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultiZoneClusterResponseBody extends $dara.Model {
  /**
   * @example
   * ld-t4nn71xa0yn56****
   */
  clusterId?: string;
  /**
   * @example
   * 23232453****
   */
  orderId?: string;
  /**
   * @example
   * 7F68E8F5-0377-4CF8-8B1D-FFFD6F5804D5
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

