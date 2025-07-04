// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDeliveryChannelRequestDeliveryChannelFilter } from "./CreateDeliveryChannelRequestDeliveryChannelFilter";
import { CreateDeliveryChannelRequestResourceChangeDelivery } from "./CreateDeliveryChannelRequestResourceChangeDelivery";
import { CreateDeliveryChannelRequestResourceSnapshotDelivery } from "./CreateDeliveryChannelRequestResourceSnapshotDelivery";


export class CreateDeliveryChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the delivery channel.
   */
  deliveryChannelDescription?: string;
  /**
   * @remarks
   * The effective scope of the delivery channel.
   * 
   * This parameter is required.
   */
  deliveryChannelFilter?: CreateDeliveryChannelRequestDeliveryChannelFilter;
  /**
   * @remarks
   * The name of the delivery channel.
   * 
   * This parameter is required.
   * 
   * @example
   * test-delivery
   */
  deliveryChannelName?: string;
  /**
   * @remarks
   * The configurations for delivery of resource configuration change events.
   */
  resourceChangeDelivery?: CreateDeliveryChannelRequestResourceChangeDelivery;
  /**
   * @remarks
   * The configurations for delivery of scheduled resource snapshots.
   */
  resourceSnapshotDelivery?: CreateDeliveryChannelRequestResourceSnapshotDelivery;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelDescription: 'DeliveryChannelDescription',
      deliveryChannelFilter: 'DeliveryChannelFilter',
      deliveryChannelName: 'DeliveryChannelName',
      resourceChangeDelivery: 'ResourceChangeDelivery',
      resourceSnapshotDelivery: 'ResourceSnapshotDelivery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelDescription: 'string',
      deliveryChannelFilter: CreateDeliveryChannelRequestDeliveryChannelFilter,
      deliveryChannelName: 'string',
      resourceChangeDelivery: CreateDeliveryChannelRequestResourceChangeDelivery,
      resourceSnapshotDelivery: CreateDeliveryChannelRequestResourceSnapshotDelivery,
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

