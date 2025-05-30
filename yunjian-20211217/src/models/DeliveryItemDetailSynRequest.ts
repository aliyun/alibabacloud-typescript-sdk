// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeliveryItemDetailSynRequestDeliveryItemDetailDTOS } from "./DeliveryItemDetailSynRequestDeliveryItemDetailDtos";


export class DeliveryItemDetailSynRequest extends $dara.Model {
  channel?: string;
  deliveryItemDetailDTOS?: DeliveryItemDetailSynRequestDeliveryItemDetailDTOS[];
  deliveryItemId?: string;
  deliveryPlanId?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      deliveryItemDetailDTOS: 'deliveryItemDetailDTOS',
      deliveryItemId: 'deliveryItemId',
      deliveryPlanId: 'deliveryPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      deliveryItemDetailDTOS: { 'type': 'array', 'itemType': DeliveryItemDetailSynRequestDeliveryItemDetailDTOS },
      deliveryItemId: 'string',
      deliveryPlanId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deliveryItemDetailDTOS)) {
      $dara.Model.validateArray(this.deliveryItemDetailDTOS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

