// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyOtaSearchV2ShrinkRequest extends $dara.Model {
  cabinClassShrink?: string;
  depDateShrink?: string;
  isvName?: string;
  orderId?: number;
  outOrderId?: string;
  passengerSegmentRelationsShrink?: string;
  selectedSegmentsShrink?: string;
  sessionId?: string;
  voluntary?: boolean;
  static names(): { [key: string]: string } {
    return {
      cabinClassShrink: 'cabin_class',
      depDateShrink: 'dep_date',
      isvName: 'isv_name',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      passengerSegmentRelationsShrink: 'passenger_segment_relations',
      selectedSegmentsShrink: 'selected_segments',
      sessionId: 'session_id',
      voluntary: 'voluntary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinClassShrink: 'string',
      depDateShrink: 'string',
      isvName: 'string',
      orderId: 'number',
      outOrderId: 'string',
      passengerSegmentRelationsShrink: 'string',
      selectedSegmentsShrink: 'string',
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

