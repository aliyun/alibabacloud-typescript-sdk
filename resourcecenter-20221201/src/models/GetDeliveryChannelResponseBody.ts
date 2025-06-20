// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDeliveryChannelResponseBodyDeliveryChannelFilter } from "./GetDeliveryChannelResponseBodyDeliveryChannelFilter";
import { GetDeliveryChannelResponseBodyResourceChangeDelivery } from "./GetDeliveryChannelResponseBodyResourceChangeDelivery";
import { GetDeliveryChannelResponseBodyResourceSnapshotDelivery } from "./GetDeliveryChannelResponseBodyResourceSnapshotDelivery";


export class GetDeliveryChannelResponseBody extends $dara.Model {
  deliveryChannelDescription?: string;
  deliveryChannelFilter?: GetDeliveryChannelResponseBodyDeliveryChannelFilter;
  /**
   * @example
   * dc-6q79dm4o9***
   */
  deliveryChannelId?: string;
  /**
   * @example
   * test-delivery-channel
   */
  deliveryChannelName?: string;
  /**
   * @example
   * 17502A1B-7026-5551-8E1C-CCABD0CBC***
   */
  requestId?: string;
  resourceChangeDelivery?: GetDeliveryChannelResponseBodyResourceChangeDelivery;
  resourceSnapshotDelivery?: GetDeliveryChannelResponseBodyResourceSnapshotDelivery;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelDescription: 'DeliveryChannelDescription',
      deliveryChannelFilter: 'DeliveryChannelFilter',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
      requestId: 'RequestId',
      resourceChangeDelivery: 'ResourceChangeDelivery',
      resourceSnapshotDelivery: 'ResourceSnapshotDelivery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelDescription: 'string',
      deliveryChannelFilter: GetDeliveryChannelResponseBodyDeliveryChannelFilter,
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      requestId: 'string',
      resourceChangeDelivery: GetDeliveryChannelResponseBodyResourceChangeDelivery,
      resourceSnapshotDelivery: GetDeliveryChannelResponseBodyResourceSnapshotDelivery,
    };
  }

  validate() {
    if(this.deliveryChannelFilter && typeof (this.deliveryChannelFilter as any).validate === 'function') {
      (this.deliveryChannelFilter as any).validate();
    }
    if(this.resourceChangeDelivery && typeof (this.resourceChangeDelivery as any).validate === 'function') {
      (this.resourceChangeDelivery as any).validate();
    }
    if(this.resourceSnapshotDelivery && typeof (this.resourceSnapshotDelivery as any).validate === 'function') {
      (this.resourceSnapshotDelivery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

