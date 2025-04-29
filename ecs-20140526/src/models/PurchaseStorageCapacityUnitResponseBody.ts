// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PurchaseStorageCapacityUnitResponseBodyStorageCapacityUnitIds } from "./PurchaseStorageCapacityUnitResponseBodyStorageCapacityUnitIds";


export class PurchaseStorageCapacityUnitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 204135153880****
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
   * The IDs of the SCUs.
   */
  storageCapacityUnitIds?: PurchaseStorageCapacityUnitResponseBodyStorageCapacityUnitIds;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      storageCapacityUnitIds: 'StorageCapacityUnitIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
      storageCapacityUnitIds: PurchaseStorageCapacityUnitResponseBodyStorageCapacityUnitIds,
    };
  }

  validate() {
    if(this.storageCapacityUnitIds && typeof (this.storageCapacityUnitIds as any).validate === 'function') {
      (this.storageCapacityUnitIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

