// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMultiAccountDeliveryChannelRequestDeliveryChannelFilter } from "./CreateMultiAccountDeliveryChannelRequestDeliveryChannelFilter";
import { CreateMultiAccountDeliveryChannelRequestResourceChangeDelivery } from "./CreateMultiAccountDeliveryChannelRequestResourceChangeDelivery";
import { CreateMultiAccountDeliveryChannelRequestResourceSnapshotDelivery } from "./CreateMultiAccountDeliveryChannelRequestResourceSnapshotDelivery";


export class CreateMultiAccountDeliveryChannelRequest extends $dara.Model {
  deliveryChannelDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deliveryChannelFilter?: CreateMultiAccountDeliveryChannelRequestDeliveryChannelFilter;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-multi-account-delivery
   */
  deliveryChannelName?: string;
  resourceChangeDelivery?: CreateMultiAccountDeliveryChannelRequestResourceChangeDelivery;
  resourceSnapshotDelivery?: CreateMultiAccountDeliveryChannelRequestResourceSnapshotDelivery;
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
      deliveryChannelFilter: CreateMultiAccountDeliveryChannelRequestDeliveryChannelFilter,
      deliveryChannelName: 'string',
      resourceChangeDelivery: CreateMultiAccountDeliveryChannelRequestResourceChangeDelivery,
      resourceSnapshotDelivery: CreateMultiAccountDeliveryChannelRequestResourceSnapshotDelivery,
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

