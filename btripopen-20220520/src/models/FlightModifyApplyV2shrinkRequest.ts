// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyApplyV2ShrinkRequest extends $dara.Model {
  cacheKey?: string;
  contactPhone?: string;
  isvName?: string;
  itemId?: string;
  orderId?: number;
  outOrderId?: string;
  outSubOrderId?: string;
  passengerSegmentRelationsShrink?: string;
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
      passengerSegmentRelationsShrink: 'passenger_segment_relations',
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
      passengerSegmentRelationsShrink: 'string',
      reason: 'string',
      sessionId: 'string',
      voluntary: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

