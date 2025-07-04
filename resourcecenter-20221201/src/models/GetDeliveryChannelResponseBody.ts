// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDeliveryChannelResponseBodyDeliveryChannelFilter } from "./GetDeliveryChannelResponseBodyDeliveryChannelFilter";
import { GetDeliveryChannelResponseBodyResourceChangeDelivery } from "./GetDeliveryChannelResponseBodyResourceChangeDelivery";
import { GetDeliveryChannelResponseBodyResourceSnapshotDelivery } from "./GetDeliveryChannelResponseBodyResourceSnapshotDelivery";


export class GetDeliveryChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the delivery channel.
   */
  deliveryChannelDescription?: string;
  /**
   * @remarks
   * The effective scope of the delivery channel.
   */
  deliveryChannelFilter?: GetDeliveryChannelResponseBodyDeliveryChannelFilter;
  /**
   * @remarks
   * The ID of the delivery channel.
   * 
   * @example
   * dc-6q79dm4o9***
   */
  deliveryChannelId?: string;
  /**
   * @remarks
   * The name of the delivery channel.
   * 
   * @example
   * test-delivery-channel
   */
  deliveryChannelName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17502A1B-7026-5551-8E1C-CCABD0CBC***
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations for delivery of resource configuration change events.
   */
  resourceChangeDelivery?: GetDeliveryChannelResponseBodyResourceChangeDelivery;
  /**
   * @remarks
   * The configurations for delivery of scheduled resource snapshots.
   */
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

