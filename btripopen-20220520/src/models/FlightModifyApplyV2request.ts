// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyApplyV2RequestPassengerSegmentRelations extends $dara.Model {
  passengerId?: string;
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      passengerId: 'passenger_id',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'string',
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.segmentIdList)) {
      $dara.Model.validateArray(this.segmentIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyApplyV2Request extends $dara.Model {
  cacheKey?: string;
  contactPhone?: string;
  isvName?: string;
  itemId?: string;
  orderId?: number;
  outOrderId?: string;
  outSubOrderId?: string;
  passengerSegmentRelations?: FlightModifyApplyV2RequestPassengerSegmentRelations[];
  reason?: string;
  sessionId?: string;
  voluntary?: boolean;
  static names(): { [key: string]: string } {
    return {
      cacheKey: 'cache_key',
      contactPhone: 'contact_phone',
      isvName: 'isv_name',
      itemId: 'item_id',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outSubOrderId: 'out_sub_order_id',
      passengerSegmentRelations: 'passenger_segment_relations',
      reason: 'reason',
      sessionId: 'session_id',
      voluntary: 'voluntary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheKey: 'string',
      contactPhone: 'string',
      isvName: 'string',
      itemId: 'string',
      orderId: 'number',
      outOrderId: 'string',
      outSubOrderId: 'string',
      passengerSegmentRelations: { 'type': 'array', 'itemType': FlightModifyApplyV2RequestPassengerSegmentRelations },
      reason: 'string',
      sessionId: 'string',
      voluntary: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.passengerSegmentRelations)) {
      $dara.Model.validateArray(this.passengerSegmentRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

