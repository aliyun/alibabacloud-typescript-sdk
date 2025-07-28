// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DeliveryItemDetailSynRequestDeliveryItemDetailDTOS extends $dara.Model {
  actualSupplyTime?: string;
  amount?: number;
  comment?: string;
  deliveredAmount?: number;
  deliveryItemId?: string;
  deliveryPlanId?: string;
  lastSupplyTime?: string;
  status?: string;
  subDemandSupplyPerformerName?: string;
  subDemandSupplyPerformerUid?: string;
  subDemandSupplyPmName?: string;
  subDemandSupplyPmUid?: string;
  subOrderId?: number;
  supplyStatus?: string;
  totalOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      actualSupplyTime: 'actualSupplyTime',
      amount: 'amount',
      comment: 'comment',
      deliveredAmount: 'deliveredAmount',
      deliveryItemId: 'deliveryItemId',
      deliveryPlanId: 'deliveryPlanId',
      lastSupplyTime: 'lastSupplyTime',
      status: 'status',
      subDemandSupplyPerformerName: 'subDemandSupplyPerformerName',
      subDemandSupplyPerformerUid: 'subDemandSupplyPerformerUid',
      subDemandSupplyPmName: 'subDemandSupplyPmName',
      subDemandSupplyPmUid: 'subDemandSupplyPmUid',
      subOrderId: 'subOrderId',
      supplyStatus: 'supplyStatus',
      totalOrderId: 'totalOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualSupplyTime: 'string',
      amount: 'number',
      comment: 'string',
      deliveredAmount: 'number',
      deliveryItemId: 'string',
      deliveryPlanId: 'string',
      lastSupplyTime: 'string',
      status: 'string',
      subDemandSupplyPerformerName: 'string',
      subDemandSupplyPerformerUid: 'string',
      subDemandSupplyPmName: 'string',
      subDemandSupplyPmUid: 'string',
      subOrderId: 'number',
      supplyStatus: 'string',
      totalOrderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

