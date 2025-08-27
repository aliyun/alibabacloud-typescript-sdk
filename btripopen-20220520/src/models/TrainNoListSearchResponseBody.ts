// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainNoListSearchResponseBodyModuleTrainStationSearchVOSSeatInfos extends $dara.Model {
  /**
   * @example
   * 40900
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

export class TrainNoListSearchResponseBodyModuleTrainStationSearchVOS extends $dara.Model {
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
   * 2024-05-07 14:46:06
   */
  arrTime?: string;
  /**
   * @example
   * 30
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
   * 2024-05-06 14:46:06
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
  saleFlagMsg?: string;
  /**
   * @example
   * 0
   */
  seagmentIndex?: string;
  seatInfos?: TrainNoListSearchResponseBodyModuleTrainStationSearchVOSSeatInfos[];
  /**
   * @example
   * D2345
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
      saleFlagMsg: 'sale_flag_msg',
      seagmentIndex: 'seagment_index',
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
      saleFlagMsg: 'string',
      seagmentIndex: 'string',
      seatInfos: { 'type': 'array', 'itemType': TrainNoListSearchResponseBodyModuleTrainStationSearchVOSSeatInfos },
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

export class TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOsTransferDetailListSeatInfos extends $dara.Model {
  /**
   * @example
   * 40900
   */
  price?: number;
  seatName?: string;
  /**
   * @example
   * 14
   */
  seatType?: string;
  /**
   * @example
   * 33
   */
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

export class TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOsTransferDetailList extends $dara.Model {
  /**
   * @example
   * 1
   */
  arrDayTag?: string;
  /**
   * @example
   * 123344
   */
  arrStationCode?: string;
  arrStationName?: string;
  /**
   * @example
   * 2024-05-07 14:46:06
   */
  arrTime?: string;
  /**
   * @example
   * 234567
   */
  costTime?: string;
  /**
   * @example
   * 12334
   */
  depStationCode?: string;
  depStationName?: string;
  /**
   * @example
   * 2024-05-06 14:46:06
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
   * 105000
   */
  price?: string;
  /**
   * @example
   * 1
   */
  saleFlag?: string;
  saleFlagMsg?: string;
  seatInfos?: TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOsTransferDetailListSeatInfos[];
  /**
   * @example
   * 0
   */
  segmentIndex?: string;
  /**
   * @example
   * K2345
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
      saleFlagMsg: 'sale_flag_msg',
      seatInfos: 'seat_infos',
      segmentIndex: 'segment_index',
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
      saleFlagMsg: 'string',
      seatInfos: { 'type': 'array', 'itemType': TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOsTransferDetailListSeatInfos },
      segmentIndex: 'string',
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

export class TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOs extends $dara.Model {
  arrStation?: string;
  depStation?: string;
  lineKey?: string;
  middleStation?: string;
  transferDetailList?: TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOsTransferDetailList[];
  /**
   * @example
   * 1
   */
  transferType?: string;
  static names(): { [key: string]: string } {
    return {
      arrStation: 'arr_station',
      depStation: 'dep_station',
      lineKey: 'line_key',
      middleStation: 'middle_station',
      transferDetailList: 'transfer_detail_list',
      transferType: 'transfer_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrStation: 'string',
      depStation: 'string',
      lineKey: 'string',
      middleStation: 'string',
      transferDetailList: { 'type': 'array', 'itemType': TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOsTransferDetailList },
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

export class TrainNoListSearchResponseBodyModule extends $dara.Model {
  trainStationSearchVOS?: TrainNoListSearchResponseBodyModuleTrainStationSearchVOS[];
  trainTransferStationSearchVOs?: TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOs[];
  static names(): { [key: string]: string } {
    return {
      trainStationSearchVOS: 'train_station_search_v_o_s',
      trainTransferStationSearchVOs: 'train_transfer_station_search_v_os',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trainStationSearchVOS: { 'type': 'array', 'itemType': TrainNoListSearchResponseBodyModuleTrainStationSearchVOS },
      trainTransferStationSearchVOs: { 'type': 'array', 'itemType': TrainNoListSearchResponseBodyModuleTrainTransferStationSearchVOs },
    };
  }

  validate() {
    if(Array.isArray(this.trainStationSearchVOS)) {
      $dara.Model.validateArray(this.trainStationSearchVOS);
    }
    if(Array.isArray(this.trainTransferStationSearchVOs)) {
      $dara.Model.validateArray(this.trainTransferStationSearchVOs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainNoListSearchResponseBody extends $dara.Model {
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
  module?: TrainNoListSearchResponseBodyModule;
  /**
   * @example
   * 210bc81a17090871660176894d008c
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
      code: 'string',
      message: 'string',
      module: TrainNoListSearchResponseBodyModule,
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

