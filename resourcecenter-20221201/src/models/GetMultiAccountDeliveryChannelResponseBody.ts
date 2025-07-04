// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMultiAccountDeliveryChannelResponseBodyDeliveryChannelFilter } from "./GetMultiAccountDeliveryChannelResponseBodyDeliveryChannelFilter";
import { GetMultiAccountDeliveryChannelResponseBodyResourceChangeDelivery } from "./GetMultiAccountDeliveryChannelResponseBodyResourceChangeDelivery";
import { GetMultiAccountDeliveryChannelResponseBodyResourceSnapshotDelivery } from "./GetMultiAccountDeliveryChannelResponseBodyResourceSnapshotDelivery";


export class GetMultiAccountDeliveryChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the delivery channel.
   */
  deliveryChannelDescription?: string;
  /**
   * @remarks
   * The effective scope of the delivery channel.
   */
  deliveryChannelFilter?: GetMultiAccountDeliveryChannelResponseBodyDeliveryChannelFilter;
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
   * FE3EAB47-D3A6-5FEA-8353-31C8C0D36***
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations for delivery of resource configuration change events.
   */
  resourceChangeDelivery?: GetMultiAccountDeliveryChannelResponseBodyResourceChangeDelivery;
  /**
   * @remarks
   * The configurations for delivery of scheduled resource snapshots.
   */
  resourceSnapshotDelivery?: GetMultiAccountDeliveryChannelResponseBodyResourceSnapshotDelivery;
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
      deliveryChannelFilter: GetMultiAccountDeliveryChannelResponseBodyDeliveryChannelFilter,
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      requestId: 'string',
      resourceChangeDelivery: GetMultiAccountDeliveryChannelResponseBodyResourceChangeDelivery,
      resourceSnapshotDelivery: GetMultiAccountDeliveryChannelResponseBodyResourceSnapshotDelivery,
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

