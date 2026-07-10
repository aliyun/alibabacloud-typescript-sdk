// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderListQueryResponseBodyModuleCostCenter extends $dara.Model {
  corpId?: string;
  id?: number;
  name?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corp_id',
      id: 'id',
      name: 'name',
      number: 'number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      id: 'number',
      name: 'string',
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderListQueryResponseBodyModuleInvoice extends $dara.Model {
  id?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderListQueryResponseBodyModulePriceInfoList extends $dara.Model {
  categoryCode?: number;
  categoryType?: number;
  endCity?: string;
  endTime?: string;
  gmtCreate?: string;
  originalTrainNo?: string;
  passengerName?: string;
  payType?: number;
  price?: number;
  seatType?: string;
  startCity?: string;
  startTime?: string;
  tradeId?: string;
  trainNo?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'category_code',
      categoryType: 'category_type',
      endCity: 'end_city',
      endTime: 'end_time',
      gmtCreate: 'gmt_create',
      originalTrainNo: 'original_train_no',
      passengerName: 'passenger_name',
      payType: 'pay_type',
      price: 'price',
      seatType: 'seat_type',
      startCity: 'start_city',
      startTime: 'start_time',
      tradeId: 'trade_id',
      trainNo: 'train_no',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      categoryType: 'number',
      endCity: 'string',
      endTime: 'string',
      gmtCreate: 'string',
      originalTrainNo: 'string',
      passengerName: 'string',
      payType: 'number',
      price: 'number',
      seatType: 'string',
      startCity: 'string',
      startTime: 'string',
      tradeId: 'string',
      trainNo: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderListQueryResponseBodyModuleUserAffiliateList extends $dara.Model {
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderListQueryResponseBodyModule extends $dara.Model {
  applyId?: number;
  arrCity?: string;
  arrCityAdCode?: string;
  arrStation?: string;
  arrTime?: string;
  btripTitle?: string;
  contactName?: string;
  corpId?: string;
  corpName?: string;
  costCenter?: TrainOrderListQueryResponseBodyModuleCostCenter;
  depCity?: string;
  depCityAdCode?: string;
  depStation?: string;
  depTime?: string;
  departId?: string;
  departName?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  invoice?: TrainOrderListQueryResponseBodyModuleInvoice;
  priceInfoList?: TrainOrderListQueryResponseBodyModulePriceInfoList[];
  projectCode?: string;
  projectId?: number;
  projectTitle?: string;
  riderName?: string;
  runTime?: string;
  seatType?: string;
  status?: number;
  thirdPartBusinessId?: string;
  thirdPartProjectId?: string;
  thirdpartApplyId?: string;
  thirdpartItineraryId?: string;
  ticketCount?: number;
  ticketNo12306?: string;
  trainNumber?: string;
  trainType?: string;
  userAffiliateList?: TrainOrderListQueryResponseBodyModuleUserAffiliateList[];
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      arrCity: 'arr_city',
      arrCityAdCode: 'arr_city_ad_code',
      arrStation: 'arr_station',
      arrTime: 'arr_time',
      btripTitle: 'btrip_title',
      contactName: 'contact_name',
      corpId: 'corp_id',
      corpName: 'corp_name',
      costCenter: 'cost_center',
      depCity: 'dep_city',
      depCityAdCode: 'dep_city_ad_code',
      depStation: 'dep_station',
      depTime: 'dep_time',
      departId: 'depart_id',
      departName: 'depart_name',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      id: 'id',
      invoice: 'invoice',
      priceInfoList: 'price_info_list',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      riderName: 'rider_name',
      runTime: 'run_time',
      seatType: 'seat_type',
      status: 'status',
      thirdPartBusinessId: 'thirdPart_business_id',
      thirdPartProjectId: 'third_part_project_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      ticketCount: 'ticket_count',
      ticketNo12306: 'ticket_no12306',
      trainNumber: 'train_number',
      trainType: 'train_type',
      userAffiliateList: 'user_affiliate_list',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      arrCity: 'string',
      arrCityAdCode: 'string',
      arrStation: 'string',
      arrTime: 'string',
      btripTitle: 'string',
      contactName: 'string',
      corpId: 'string',
      corpName: 'string',
      costCenter: TrainOrderListQueryResponseBodyModuleCostCenter,
      depCity: 'string',
      depCityAdCode: 'string',
      depStation: 'string',
      depTime: 'string',
      departId: 'string',
      departName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      invoice: TrainOrderListQueryResponseBodyModuleInvoice,
      priceInfoList: { 'type': 'array', 'itemType': TrainOrderListQueryResponseBodyModulePriceInfoList },
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      riderName: 'string',
      runTime: 'string',
      seatType: 'string',
      status: 'number',
      thirdPartBusinessId: 'string',
      thirdPartProjectId: 'string',
      thirdpartApplyId: 'string',
      thirdpartItineraryId: 'string',
      ticketCount: 'number',
      ticketNo12306: 'string',
      trainNumber: 'string',
      trainType: 'string',
      userAffiliateList: { 'type': 'array', 'itemType': TrainOrderListQueryResponseBodyModuleUserAffiliateList },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.costCenter && typeof (this.costCenter as any).validate === 'function') {
      (this.costCenter as any).validate();
    }
    if(this.invoice && typeof (this.invoice as any).validate === 'function') {
      (this.invoice as any).validate();
    }
    if(Array.isArray(this.priceInfoList)) {
      $dara.Model.validateArray(this.priceInfoList);
    }
    if(Array.isArray(this.userAffiliateList)) {
      $dara.Model.validateArray(this.userAffiliateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderListQueryResponseBodyPageInfo extends $dara.Model {
  page?: number;
  pageSize?: number;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      pageSize: 'page_size',
      totalNumber: 'total_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      totalNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderListQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: TrainOrderListQueryResponseBodyModule[];
  pageInfo?: TrainOrderListQueryResponseBodyPageInfo;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      pageInfo: 'page_info',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': TrainOrderListQueryResponseBodyModule },
      pageInfo: TrainOrderListQueryResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

