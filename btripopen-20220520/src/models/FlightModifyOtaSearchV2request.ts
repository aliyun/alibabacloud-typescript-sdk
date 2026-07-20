// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyOtaSearchV2RequestPassengerSegmentRelations extends $dara.Model {
  /**
   * @example
   * 3243028
   */
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
  /**
   * @example
   * BJS
   */
  arrCityCode?: string;
  /**
   * @example
   * XIL
   */
  depCityCode?: string;
  /**
   * @example
   * 2023-09-18 09:10:00
   */
  depDateTime?: string;
  /**
   * @example
   * 0
   */
  journeySeq?: number;
  /**
   * @example
   * CA1110
   */
  marketingFlightNo?: string;
  /**
   * @example
   * MU8625
   */
  operatingFlightNo?: string;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * name
   */
  isvName?: string;
  /**
   * @example
   * 1017002195370467200
   */
  orderId?: number;
  /**
   * @example
   * 1017002195370467200
   */
  outOrderId?: string;
  passengerSegmentRelations?: FlightModifyOtaSearchV2RequestPassengerSegmentRelations[];
  selectedSegments?: FlightModifyOtaSearchV2RequestSelectedSegments[];
  /**
   * @example
   * 590f17eca9374f20ac7e8ed8a7db2f35
   */
  sessionId?: string;
  /**
   * @example
   * true
   */
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

