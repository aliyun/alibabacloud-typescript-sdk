// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EstimatedPriceQueryResponseBodyModuleHotelFeeDetail extends $dara.Model {
  city?: string;
  /**
   * @example
   * 6
   */
  criterion?: number;
  /**
   * @example
   * 1245
   */
  itineraryId?: string;
  /**
   * @example
   * 6
   */
  total?: number;
  /**
   * @example
   * 1
   */
  tripDays?: number;
  static names(): { [key: string]: string } {
    return {
      city: 'city',
      criterion: 'criterion',
      itineraryId: 'itinerary_id',
      total: 'total',
      tripDays: 'trip_days',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      criterion: 'number',
      itineraryId: 'string',
      total: 'number',
      tripDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesCheapest extends $dara.Model {
  /**
   * @example
   * 00:40
   */
  arrTime?: string;
  /**
   * @example
   * 22:20
   */
  depTime?: string;
  /**
   * @example
   * 30100
   */
  fee?: number;
  seatGrade?: string;
  /**
   * @example
   * MU9668
   */
  vehicleNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrTime: 'arr_time',
      depTime: 'dep_time',
      fee: 'fee',
      seatGrade: 'seat_grade',
      vehicleNo: 'vehicle_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrTime: 'string',
      depTime: 'string',
      fee: 'number',
      seatGrade: 'string',
      vehicleNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesMostExpensive extends $dara.Model {
  /**
   * @example
   * 19:20
   */
  arrTime?: string;
  /**
   * @example
   * 17:00
   */
  depTime?: string;
  /**
   * @example
   * 265000
   */
  fee?: number;
  seatGrade?: string;
  /**
   * @example
   * CA1721
   */
  vehicleNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrTime: 'arr_time',
      depTime: 'dep_time',
      fee: 'fee',
      seatGrade: 'seat_grade',
      vehicleNo: 'vehicle_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrTime: 'string',
      depTime: 'string',
      fee: 'number',
      seatGrade: 'string',
      vehicleNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutes extends $dara.Model {
  arrCity?: string;
  arrDate?: number;
  cheapest?: EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesCheapest;
  depCity?: string;
  depDate?: number;
  /**
   * @example
   * demo
   */
  errMsg?: string;
  /**
   * @example
   * 1245
   */
  itineraryId?: string;
  mostExpensive?: EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesMostExpensive;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrDate: 'arr_date',
      cheapest: 'cheapest',
      depCity: 'dep_city',
      depDate: 'dep_date',
      errMsg: 'err_msg',
      itineraryId: 'itinerary_id',
      mostExpensive: 'most_expensive',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrDate: 'number',
      cheapest: EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesCheapest,
      depCity: 'string',
      depDate: 'number',
      errMsg: 'string',
      itineraryId: 'string',
      mostExpensive: EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesMostExpensive,
      success: 'boolean',
    };
  }

  validate() {
    if(this.cheapest && typeof (this.cheapest as any).validate === 'function') {
      (this.cheapest as any).validate();
    }
    if(this.mostExpensive && typeof (this.mostExpensive as any).validate === 'function') {
      (this.mostExpensive as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedPriceQueryResponseBodyModuleTrafficFee extends $dara.Model {
  btripRoutes?: EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutes[];
  /**
   * @example
   * demo
   */
  errMsg?: string;
  /**
   * @example
   * 265000
   */
  maxFee?: number;
  /**
   * @example
   * 30100
   */
  minFee?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      btripRoutes: 'btrip_routes',
      errMsg: 'err_msg',
      maxFee: 'max_fee',
      minFee: 'min_fee',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripRoutes: { 'type': 'array', 'itemType': EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutes },
      errMsg: 'string',
      maxFee: 'number',
      minFee: 'number',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.btripRoutes)) {
      $dara.Model.validateArray(this.btripRoutes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedPriceQueryResponseBodyModule extends $dara.Model {
  hotelFeeDetail?: EstimatedPriceQueryResponseBodyModuleHotelFeeDetail[];
  /**
   * @remarks
   * 酒店费用总额，单位为元
   * 
   * @example
   * 500
   */
  totalHotelFee?: number;
  trafficFee?: EstimatedPriceQueryResponseBodyModuleTrafficFee;
  static names(): { [key: string]: string } {
    return {
      hotelFeeDetail: 'hotel_fee_detail',
      totalHotelFee: 'total_hotel_fee',
      trafficFee: 'traffic_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelFeeDetail: { 'type': 'array', 'itemType': EstimatedPriceQueryResponseBodyModuleHotelFeeDetail },
      totalHotelFee: 'number',
      trafficFee: EstimatedPriceQueryResponseBodyModuleTrafficFee,
    };
  }

  validate() {
    if(Array.isArray(this.hotelFeeDetail)) {
      $dara.Model.validateArray(this.hotelFeeDetail);
    }
    if(this.trafficFee && typeof (this.trafficFee as any).validate === 'function') {
      (this.trafficFee as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedPriceQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * demo
   */
  message?: string;
  module?: EstimatedPriceQueryResponseBodyModule;
  /**
   * @example
   * A5009956-1077-52FB-B520-EA8C7E91D722
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 21041ce316577904808056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      module: EstimatedPriceQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

