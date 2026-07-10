// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderChangeDetailResponseBodyModuleRoomInfoListRoomDailyRefundInfos extends $dara.Model {
  checkInDate?: string;
  penaltyPrice?: number;
  price?: number;
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
  changeOrderId?: string;
  changeType?: number;
  corpId?: string;
  disOrderId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  reason?: string;
  remarks?: string;
  roomInfoList?: HotelOrderChangeDetailResponseBodyModuleRoomInfoList[];
  saleOrderId?: string;
  source?: number;
  status?: number;
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
  code?: string;
  message?: string;
  module?: HotelOrderChangeDetailResponseBodyModule;
  requestId?: string;
  success?: boolean;
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

