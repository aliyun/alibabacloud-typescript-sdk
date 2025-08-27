// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainNoInfoSearchResponseBodyModuleTrainStationSearchVOSeatInfos extends $dara.Model {
  /**
   * @example
   * 10000
   */
  price?: number;
  seatName?: string;
  /**
   * @example
   * 14
   */
  seatType?: string;
  stock?: string;
  static names(): { [key: string]: string } {
    return {
      price: 'price',
      seatName: 'seat_name',
      seatType: 'seat_type',
      stock: 'stock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: 'number',
      seatName: 'string',
      seatType: 'string',
      stock: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainNoInfoSearchResponseBodyModuleTrainStationSearchVO extends $dara.Model {
  /**
   * @example
   * 0
   */
  arrDayTag?: string;
  /**
   * @example
   * BDC
   */
  arrStationCode?: string;
  arrStationName?: string;
  /**
   * @example
   * 2024-05-07 15:19:01
   */
  arrTime?: string;
  /**
   * @example
   * 31
   */
  costTime?: string;
  /**
   * @example
   * BTC
   */
  depStationCode?: string;
  depStationName?: string;
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  depTime?: string;
  /**
   * @example
   * 1
   */
  isEndStation?: number;
  /**
   * @example
   * 0
   */
  isStartStation?: number;
  /**
   * @example
   * 54000
   */
  price?: string;
  /**
   * @example
   * 0
   */
  saleFlag?: string;
  seatInfos?: TrainNoInfoSearchResponseBodyModuleTrainStationSearchVOSeatInfos[];
  /**
   * @example
   * k2345
   */
  trainNo?: string;
  /**
   * @example
   * 1
   */
  trainType?: string;
  static names(): { [key: string]: string } {
    return {
      arrDayTag: 'arr_day_tag',
      arrStationCode: 'arr_station_code',
      arrStationName: 'arr_station_name',
      arrTime: 'arr_time',
      costTime: 'cost_time',
      depStationCode: 'dep_station_code',
      depStationName: 'dep_station_name',
      depTime: 'dep_time',
      isEndStation: 'is_end_station',
      isStartStation: 'is_start_station',
      price: 'price',
      saleFlag: 'sale_flag',
      seatInfos: 'seat_infos',
      trainNo: 'train_no',
      trainType: 'train_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrDayTag: 'string',
      arrStationCode: 'string',
      arrStationName: 'string',
      arrTime: 'string',
      costTime: 'string',
      depStationCode: 'string',
      depStationName: 'string',
      depTime: 'string',
      isEndStation: 'number',
      isStartStation: 'number',
      price: 'string',
      saleFlag: 'string',
      seatInfos: { 'type': 'array', 'itemType': TrainNoInfoSearchResponseBodyModuleTrainStationSearchVOSeatInfos },
      trainNo: 'string',
      trainType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.seatInfos)) {
      $dara.Model.validateArray(this.seatInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainNoInfoSearchResponseBodyModuleTrainTransferStationSearchVOTransferDetailListSeatInfos extends $dara.Model {
  /**
   * @example
   * 67000
   */
  price?: number;
  seatName?: string;
  /**
   * @example
   * 14
   */
  seatType?: string;
  stock?: string;
  static names(): { [key: string]: string } {
    return {
      price: 'price',
      seatName: 'seat_name',
      seatType: 'seat_type',
      stock: 'stock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: 'number',
      seatName: 'string',
      seatType: 'string',
      stock: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainNoInfoSearchResponseBodyModuleTrainTransferStationSearchVOTransferDetailList extends $dara.Model {
  /**
   * @example
   * 1
   */
  arrDayTag?: string;
  /**
   * @example
   * BDC
   */
  arrStationCode?: string;
  arrStationName?: string;
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  arrTime?: string;
  /**
   * @example
   * 111
   */
  costTime?: string;
  /**
   * @example
   * BTC
   */
  depStationCode?: string;
  depStationName?: string;
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  depTime?: string;
  /**
   * @example
   * 1
   */
  isEndStation?: number;
  /**
   * @example
   * 1
   */
  isStartStation?: number;
  /**
   * @example
   * 54000
   */
  price?: string;
  /**
   * @example
   * 1
   */
  saleFlag?: string;
  seatInfos?: TrainNoInfoSearchResponseBodyModuleTrainTransferStationSearchVOTransferDetailListSeatInfos[];
  /**
   * @example
   * D1234
   */
  trainNo?: string;
  /**
   * @example
   * 1
   */
  trainType?: string;
  static names(): { [key: string]: string } {
    return {
      arrDayTag: 'arr_day_tag',
      arrStationCode: 'arr_station_code',
      arrStationName: 'arr_station_name',
      arrTime: 'arr_time',
      costTime: 'cost_time',
      depStationCode: 'dep_station_code',
      depStationName: 'dep_station_name',
      depTime: 'dep_time',
      isEndStation: 'is_end_station',
      isStartStation: 'is_start_station',
      price: 'price',
      saleFlag: 'sale_flag',
      seatInfos: 'seat_infos',
      trainNo: 'train_no',
      trainType: 'train_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrDayTag: 'string',
      arrStationCode: 'string',
      arrStationName: 'string',
      arrTime: 'string',
      costTime: 'string',
      depStationCode: 'string',
      depStationName: 'string',
      depTime: 'string',
      isEndStation: 'number',
      isStartStation: 'number',
      price: 'string',
      saleFlag: 'string',
      seatInfos: { 'type': 'array', 'itemType': TrainNoInfoSearchResponseBodyModuleTrainTransferStationSearchVOTransferDetailListSeatInfos },
      trainNo: 'string',
      trainType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.seatInfos)) {
      $dara.Model.validateArray(this.seatInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainNoInfoSearchResponseBodyModuleTrainTransferStationSearchVO extends $dara.Model {
  transferDetailList?: TrainNoInfoSearchResponseBodyModuleTrainTransferStationSearchVOTransferDetailList[];
  /**
   * @example
   * 1
   */
  transferType?: string;
  static names(): { [key: string]: string } {
    return {
      transferDetailList: 'transfer_detail_list',
      transferType: 'transfer_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transferDetailList: { 'type': 'array', 'itemType': TrainNoInfoSearchResponseBodyModuleTrainTransferStationSearchVOTransferDetailList },
      transferType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.transferDetailList)) {
      $dara.Model.validateArray(this.transferDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainNoInfoSearchResponseBodyModule extends $dara.Model {
  trainStationSearchVO?: TrainNoInfoSearchResponseBodyModuleTrainStationSearchVO;
  trainTransferStationSearchVO?: TrainNoInfoSearchResponseBodyModuleTrainTransferStationSearchVO;
  static names(): { [key: string]: string } {
    return {
      trainStationSearchVO: 'train_station_search_v_o',
      trainTransferStationSearchVO: 'train_transfer_station_search_v_o',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trainStationSearchVO: TrainNoInfoSearchResponseBodyModuleTrainStationSearchVO,
      trainTransferStationSearchVO: TrainNoInfoSearchResponseBodyModuleTrainTransferStationSearchVO,
    };
  }

  validate() {
    if(this.trainStationSearchVO && typeof (this.trainStationSearchVO as any).validate === 'function') {
      (this.trainStationSearchVO as any).validate();
    }
    if(this.trainTransferStationSearchVO && typeof (this.trainTransferStationSearchVO as any).validate === 'function') {
      (this.trainTransferStationSearchVO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainNoInfoSearchResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * module
   */
  module?: TrainNoInfoSearchResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
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
   * requestId
   * 
   * @example
   * 2136019116915615924561621e06ee
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
      code: 'string',
      message: 'string',
      module: TrainNoInfoSearchResponseBodyModule,
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

