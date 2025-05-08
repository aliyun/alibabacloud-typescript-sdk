// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 21969183547****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The IDs of the snapshots.
   * 
   * @example
   * s-bp17441ohwka0yuh****
   */
  snapShotId?: string[];
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      snapShotId: 'SnapShotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
      snapShotId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.snapShotId)) {
      $dara.Model.validateArray(this.snapShotId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

