// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundPreCalV2RequestPassengerSegmentRelations extends $dara.Model {
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

export class FlightRefundPreCalV2Request extends $dara.Model {
  isvName?: string;
  orderId?: string;
  outOrderId?: string;
  passengerSegmentRelations?: FlightRefundPreCalV2RequestPassengerSegmentRelations[];
  preCalType?: number;
  ticketNos?: string[];
  voluntary?: boolean;
  static names(): { [key: string]: string } {
    return {
      isvName: 'isv_name',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      passengerSegmentRelations: 'passenger_segment_relations',
      preCalType: 'pre_cal_type',
      ticketNos: 'ticket_nos',
      voluntary: 'voluntary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvName: 'string',
      orderId: 'string',
      outOrderId: 'string',
      passengerSegmentRelations: { 'type': 'array', 'itemType': FlightRefundPreCalV2RequestPassengerSegmentRelations },
      preCalType: 'number',
      ticketNos: { 'type': 'array', 'itemType': 'string' },
      voluntary: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.passengerSegmentRelations)) {
      $dara.Model.validateArray(this.passengerSegmentRelations);
    }
    if(Array.isArray(this.ticketNos)) {
      $dara.Model.validateArray(this.ticketNos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

