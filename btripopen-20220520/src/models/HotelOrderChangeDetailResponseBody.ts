// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderChangeDetailResponseBodyModuleRoomInfoListRoomDailyRefundInfos extends $dara.Model {
  /**
   * @example
   * 2024-02-10
   */
  checkInDate?: string;
  /**
   * @example
   * 71000
   */
  penaltyPrice?: number;
  /**
   * @example
   * 71000
   */
  price?: number;
  /**
   * @example
   * 71000
   */
  refundPrice?: number;
  static names(): { [key: string]: string } {
    return {
      checkInDate: 'check_in_date',
      penaltyPrice: 'penalty_price',
      price: 'price',
      refundPrice: 'refund_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkInDate: 'string',
      penaltyPrice: 'number',
      price: 'number',
      refundPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderChangeDetailResponseBodyModuleRoomInfoList extends $dara.Model {
  cancelDate?: string[];
  roomDailyRefundInfos?: HotelOrderChangeDetailResponseBodyModuleRoomInfoListRoomDailyRefundInfos[];
  /**
   * @example
   * 1
   */
  roomNo?: number;
  static names(): { [key: string]: string } {
    return {
      cancelDate: 'cancel_date',
      roomDailyRefundInfos: 'room_daily_refund_infos',
      roomNo: 'room_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelDate: { 'type': 'array', 'itemType': 'string' },
      roomDailyRefundInfos: { 'type': 'array', 'itemType': HotelOrderChangeDetailResponseBodyModuleRoomInfoListRoomDailyRefundInfos },
      roomNo: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cancelDate)) {
      $dara.Model.validateArray(this.cancelDate);
    }
    if(Array.isArray(this.roomDailyRefundInfos)) {
      $dara.Model.validateArray(this.roomDailyRefundInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderChangeDetailResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1234
   */
  changeOrderId?: string;
  /**
   * @example
   * 0
   */
  changeType?: number;
  /**
   * @example
   * open12ih3c8jb8o47v10B4r4josN00
   */
  corpId?: string;
  /**
   * @example
   * dis1234
   */
  disOrderId?: string;
  /**
   * @example
   * 2024-07-07 13:42:49
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-07-07 13:42:49
   */
  gmtModified?: string;
  reason?: string;
  remarks?: string;
  roomInfoList?: HotelOrderChangeDetailResponseBodyModuleRoomInfoList[];
  /**
   * @example
   * 1402002197440511306
   */
  saleOrderId?: string;
  /**
   * @example
   * 0
   */
  source?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 2505048378320666
   */
  workOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'change_order_id',
      changeType: 'change_type',
      corpId: 'corp_id',
      disOrderId: 'dis_order_id',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      reason: 'reason',
      remarks: 'remarks',
      roomInfoList: 'room_info_list',
      saleOrderId: 'sale_order_id',
      source: 'source',
      status: 'status',
      workOrderId: 'work_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      changeType: 'number',
      corpId: 'string',
      disOrderId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      reason: 'string',
      remarks: 'string',
      roomInfoList: { 'type': 'array', 'itemType': HotelOrderChangeDetailResponseBodyModuleRoomInfoList },
      saleOrderId: 'string',
      source: 'number',
      status: 'number',
      workOrderId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roomInfoList)) {
      $dara.Model.validateArray(this.roomInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderChangeDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  /**
   * @example
   * operation success
   */
  message?: string;
  module?: HotelOrderChangeDetailResponseBodyModule;
  /**
   * @example
   * C61ECFF6-606B-5F66-B81D-D77369043A5F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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
      module: HotelOrderChangeDetailResponseBodyModule,
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

