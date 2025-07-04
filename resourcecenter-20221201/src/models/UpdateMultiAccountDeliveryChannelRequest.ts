// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateMultiAccountDeliveryChannelRequestDeliveryChannelFilter } from "./UpdateMultiAccountDeliveryChannelRequestDeliveryChannelFilter";
import { UpdateMultiAccountDeliveryChannelRequestResourceChangeDelivery } from "./UpdateMultiAccountDeliveryChannelRequestResourceChangeDelivery";
import { UpdateMultiAccountDeliveryChannelRequestResourceSnapshotDelivery } from "./UpdateMultiAccountDeliveryChannelRequestResourceSnapshotDelivery";


export class UpdateMultiAccountDeliveryChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the delivery channel.
   */
  deliveryChannelDescription?: string;
  /**
   * @remarks
   * The effective scope of the delivery channel.
   */
  deliveryChannelFilter?: UpdateMultiAccountDeliveryChannelRequestDeliveryChannelFilter;
  /**
   * @remarks
   * The ID of the delivery channel.
   * 
   * This parameter is required.
   * 
   * @example
   * dc-4m6ffpkgu***
   */
  deliveryChannelId?: string;
  /**
   * @remarks
   * The name of the delivery channel.
   * 
   * @example
   * test-multi-account-delivery-channel
   */
  deliveryChannelName?: string;
  /**
   * @remarks
   * The configurations for delivery of resource configuration change events.
   */
  resourceChangeDelivery?: UpdateMultiAccountDeliveryChannelRequestResourceChangeDelivery;
  /**
   * @remarks
   * The configurations for delivery of scheduled resource snapshots.
   */
  resourceSnapshotDelivery?: UpdateMultiAccountDeliveryChannelRequestResourceSnapshotDelivery;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelDescription: 'DeliveryChannelDescription',
      deliveryChannelFilter: 'DeliveryChannelFilter',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
      resourceChangeDelivery: 'ResourceChangeDelivery',
      resourceSnapshotDelivery: 'ResourceSnapshotDelivery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelDescription: 'string',
      deliveryChannelFilter: UpdateMultiAccountDeliveryChannelRequestDeliveryChannelFilter,
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      resourceChangeDelivery: UpdateMultiAccountDeliveryChannelRequestResourceChangeDelivery,
      resourceSnapshotDelivery: UpdateMultiAccountDeliveryChannelRequestResourceSnapshotDelivery,
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

