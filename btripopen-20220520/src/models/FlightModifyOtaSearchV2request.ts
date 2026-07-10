// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyOtaSearchV2RequestPassengerSegmentRelations extends $dara.Model {
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

export class FlightModifyOtaSearchV2RequestSelectedSegments extends $dara.Model {
  arrCityCode?: string;
  depCityCode?: string;
  depDateTime?: string;
  journeySeq?: number;
  marketingFlightNo?: string;
  operatingFlightNo?: string;
  segmentSeq?: number;
  static names(): { [key: string]: string } {
    return {
      arrCityCode: 'arr_city_code',
      depCityCode: 'dep_city_code',
      depDateTime: 'dep_date_time',
      journeySeq: 'journey_seq',
      marketingFlightNo: 'marketing_flight_no',
      operatingFlightNo: 'operating_flight_no',
      segmentSeq: 'segment_seq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCityCode: 'string',
      depCityCode: 'string',
      depDateTime: 'string',
      journeySeq: 'number',
      marketingFlightNo: 'string',
      operatingFlightNo: 'string',
      segmentSeq: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyOtaSearchV2Request extends $dara.Model {
  cabinClass?: number[];
  depDate?: string[];
  isvName?: string;
  orderId?: number;
  outOrderId?: string;
  passengerSegmentRelations?: FlightModifyOtaSearchV2RequestPassengerSegmentRelations[];
  selectedSegments?: FlightModifyOtaSearchV2RequestSelectedSegments[];
  sessionId?: string;
  voluntary?: boolean;
  static names(): { [key: string]: string } {
    return {
      cabinClass: 'cabin_class',
      depDate: 'dep_date',
      isvName: 'isv_name',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      passengerSegmentRelations: 'passenger_segment_relations',
      selectedSegments: 'selected_segments',
      sessionId: 'session_id',
      voluntary: 'voluntary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinClass: { 'type': 'array', 'itemType': 'number' },
      depDate: { 'type': 'array', 'itemType': 'string' },
      isvName: 'string',
      orderId: 'number',
      outOrderId: 'string',
      passengerSegmentRelations: { 'type': 'array', 'itemType': FlightModifyOtaSearchV2RequestPassengerSegmentRelations },
      selectedSegments: { 'type': 'array', 'itemType': FlightModifyOtaSearchV2RequestSelectedSegments },
      sessionId: 'string',
      voluntary: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.cabinClass)) {
      $dara.Model.validateArray(this.cabinClass);
    }
    if(Array.isArray(this.depDate)) {
      $dara.Model.validateArray(this.depDate);
    }
    if(Array.isArray(this.passengerSegmentRelations)) {
      $dara.Model.validateArray(this.passengerSegmentRelations);
    }
    if(Array.isArray(this.selectedSegments)) {
      $dara.Model.validateArray(this.selectedSegments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

