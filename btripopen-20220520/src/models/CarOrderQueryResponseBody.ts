// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarOrderQueryResponseBodyModuleCarInfoWayPoints extends $dara.Model {
  /**
   * @example
   * 南宁市总部路3号中国-东盟科技企业孵化基地二期7号厂房第四、五层
   */
  address?: string;
  /**
   * @example
   * 1
   */
  index?: string;
  /**
   * @example
   * 34.26900287757989
   */
  latitude?: string;
  /**
   * @example
   * 114.058959
   */
  longitude?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      index: 'index',
      latitude: 'latitude',
      longitude: 'longitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      index: 'string',
      latitude: 'string',
      longitude: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderQueryResponseBodyModuleCarInfo extends $dara.Model {
  /**
   * @example
   * TRAVEL
   */
  businessCategory?: string;
  /**
   * @example
   * 1669274251000
   */
  cancelTime?: number;
  /**
   * @example
   * 长安 白色
   */
  carInfo?: string;
  /**
   * @example
   * 601
   */
  carLevel?: number;
  /**
   * @example
   * 浙AB8888
   */
  driverCard?: string;
  /**
   * @example
   * 1669274251000
   */
  driverConfirmTime?: number;
  /**
   * @example
   * 林师傅
   */
  driverName?: string;
  /**
   * @example
   * 2900
   */
  estimatePrice?: number;
  /**
   * @example
   * 海宁西站
   */
  fromAddress?: string;
  /**
   * @example
   * 330100
   */
  fromCityAdCode?: string;
  /**
   * @example
   * 嘉兴市
   */
  fromCityName?: string;
  /**
   * @example
   * true
   */
  isSpecial?: boolean;
  /**
   * @example
   * 拜访客户
   */
  memo?: string;
  /**
   * @example
   * 1669274251000
   */
  payTime?: number;
  /**
   * @example
   * 1669274251000
   */
  publishTime?: number;
  /**
   * @example
   * 海宁西站
   */
  realFromAddress?: string;
  /**
   * @example
   * 330100
   */
  realFromCityAdCode?: string;
  /**
   * @example
   * 嘉兴市
   */
  realFromCityName?: string;
  /**
   * @example
   * 杭州东站
   */
  realToAddress?: string;
  /**
   * @example
   * 330100
   */
  realToCityAdCode?: string;
  /**
   * @example
   * 杭州市
   */
  realToCityName?: string;
  /**
   * @example
   * 3
   */
  serviceType?: number;
  /**
   * @example
   * v_sp_t_1,v_sp_t_2,v_sp_t_3,v_sp_t_4,v_sp_t_5
   */
  specialTypes?: string;
  /**
   * @example
   * 1669274251000
   */
  takenTime?: number;
  /**
   * @example
   * 杭州东站
   */
  toAddress?: string;
  /**
   * @example
   * 330100
   */
  toCityAdCode?: string;
  /**
   * @example
   * 杭州市
   */
  toCityName?: string;
  /**
   * @example
   * 12
   */
  travelDistance?: string;
  wayPoints?: CarOrderQueryResponseBodyModuleCarInfoWayPoints[];
  static names(): { [key: string]: string } {
    return {
      businessCategory: 'business_category',
      cancelTime: 'cancel_time',
      carInfo: 'car_info',
      carLevel: 'car_level',
      driverCard: 'driver_card',
      driverConfirmTime: 'driver_confirm_time',
      driverName: 'driver_name',
      estimatePrice: 'estimate_price',
      fromAddress: 'from_address',
      fromCityAdCode: 'from_city_ad_code',
      fromCityName: 'from_city_name',
      isSpecial: 'is_special',
      memo: 'memo',
      payTime: 'pay_time',
      publishTime: 'publish_time',
      realFromAddress: 'real_from_address',
      realFromCityAdCode: 'real_from_city_ad_code',
      realFromCityName: 'real_from_city_name',
      realToAddress: 'real_to_address',
      realToCityAdCode: 'real_to_city_ad_code',
      realToCityName: 'real_to_city_name',
      serviceType: 'service_type',
      specialTypes: 'special_types',
      takenTime: 'taken_time',
      toAddress: 'to_address',
      toCityAdCode: 'to_city_ad_code',
      toCityName: 'to_city_name',
      travelDistance: 'travel_distance',
      wayPoints: 'way_points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategory: 'string',
      cancelTime: 'number',
      carInfo: 'string',
      carLevel: 'number',
      driverCard: 'string',
      driverConfirmTime: 'number',
      driverName: 'string',
      estimatePrice: 'number',
      fromAddress: 'string',
      fromCityAdCode: 'string',
      fromCityName: 'string',
      isSpecial: 'boolean',
      memo: 'string',
      payTime: 'number',
      publishTime: 'number',
      realFromAddress: 'string',
      realFromCityAdCode: 'string',
      realFromCityName: 'string',
      realToAddress: 'string',
      realToCityAdCode: 'string',
      realToCityName: 'string',
      serviceType: 'number',
      specialTypes: 'string',
      takenTime: 'number',
      toAddress: 'string',
      toCityAdCode: 'string',
      toCityName: 'string',
      travelDistance: 'string',
      wayPoints: { 'type': 'array', 'itemType': CarOrderQueryResponseBodyModuleCarInfoWayPoints },
    };
  }

  validate() {
    if(Array.isArray(this.wayPoints)) {
      $dara.Model.validateArray(this.wayPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderQueryResponseBodyModuleInvoiceInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * xxxx
   */
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

export class CarOrderQueryResponseBodyModuleOrderBaseInfo extends $dara.Model {
  /**
   * @example
   * xxxxx
   */
  applyId?: string;
  /**
   * @example
   * 拜访客户
   */
  btripCause?: string;
  /**
   * @example
   * 杭州出差
   */
  btripTitle?: string;
  /**
   * @example
   * 0
   */
  carOrderSourceType?: number;
  /**
   * @example
   * xxxxxxxx
   */
  corpId?: string;
  /**
   * @example
   * XX公司
   */
  corpName?: string;
  /**
   * @example
   * 10101010
   */
  departId?: string;
  /**
   * @example
   * 部门A
   */
  departName?: string;
  /**
   * @example
   * 1669274251000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1669274251000
   */
  gmtModified?: number;
  /**
   * @example
   * xxxxx
   */
  itineraryId?: string;
  /**
   * @example
   * 1012000000000000
   */
  orderId?: number;
  /**
   * @example
   * 5
   */
  orderStatus?: number;
  /**
   * @example
   * 100000
   */
  subOrderId?: number;
  /**
   * @example
   * thirdpart_1010101010
   */
  thirdDepartId?: string;
  /**
   * @example
   * xxxxx
   */
  thirdpartApplyId?: string;
  /**
   * @example
   * 00021230711000001Test-2
   */
  thirdpartBusinessId?: string;
  /**
   * @example
   * xxxxx
   */
  thirdpartItineraryId?: string;
  /**
   * @example
   * xxxxxxxx
   */
  userId?: string;
  /**
   * @example
   * 李四
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      btripCause: 'btrip_cause',
      btripTitle: 'btrip_title',
      carOrderSourceType: 'car_order_source_type',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      itineraryId: 'itinerary_id',
      orderId: 'order_id',
      orderStatus: 'order_status',
      subOrderId: 'sub_order_id',
      thirdDepartId: 'third_depart_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      btripCause: 'string',
      btripTitle: 'string',
      carOrderSourceType: 'number',
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      itineraryId: 'string',
      orderId: 'number',
      orderStatus: 'number',
      subOrderId: 'number',
      thirdDepartId: 'string',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
      thirdpartItineraryId: 'string',
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

export class CarOrderQueryResponseBodyModulePassengerList extends $dara.Model {
  /**
   * @example
   * costId
   */
  costCenterId?: number;
  /**
   * @example
   * costName
   */
  costCenterName?: string;
  /**
   * @example
   * costNumber
   */
  costCenterNumber?: string;
  /**
   * @example
   * projectCode1
   */
  projectCode?: string;
  /**
   * @example
   * projectId
   */
  projectId?: number;
  /**
   * @example
   * 项目A
   */
  projectTitle?: string;
  /**
   * @example
   * thirdpartCostId
   */
  thirdpartCostCenterId?: string;
  /**
   * @example
   * thirdpartProjectId
   */
  thirdpartProjectId?: string;
  /**
   * @example
   * userId
   */
  userId?: string;
  /**
   * @example
   * 李四
   */
  userName?: string;
  /**
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      costCenterNumber: 'cost_center_number',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      thirdpartProjectId: 'thirdpart_project_id',
      userId: 'user_id',
      userName: 'user_name',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      costCenterName: 'string',
      costCenterNumber: 'string',
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      thirdpartCostCenterId: 'string',
      thirdpartProjectId: 'string',
      userId: 'string',
      userName: 'string',
      userType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderQueryResponseBodyModulePriceInfoList extends $dara.Model {
  /**
   * @example
   * 1
   */
  categoryCode?: number;
  /**
   * @example
   * 1669274251000
   */
  gmtCreate?: number;
  /**
   * @example
   * 4
   */
  payType?: number;
  /**
   * @example
   * 1000
   */
  personPrice?: number;
  /**
   * @example
   * 2000
   */
  price?: number;
  /**
   * @example
   * 1012000000001
   */
  tradeId?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'category_code',
      gmtCreate: 'gmt_create',
      payType: 'pay_type',
      personPrice: 'person_price',
      price: 'price',
      tradeId: 'trade_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      gmtCreate: 'number',
      payType: 'number',
      personPrice: 'number',
      price: 'number',
      tradeId: 'string',
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

export class CarOrderQueryResponseBodyModule extends $dara.Model {
  carInfo?: CarOrderQueryResponseBodyModuleCarInfo;
  invoiceInfo?: CarOrderQueryResponseBodyModuleInvoiceInfo;
  orderBaseInfo?: CarOrderQueryResponseBodyModuleOrderBaseInfo;
  passengerList?: CarOrderQueryResponseBodyModulePassengerList[];
  priceInfoList?: CarOrderQueryResponseBodyModulePriceInfoList[];
  static names(): { [key: string]: string } {
    return {
      carInfo: 'car_info',
      invoiceInfo: 'invoice_info',
      orderBaseInfo: 'order_base_info',
      passengerList: 'passenger_list',
      priceInfoList: 'price_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carInfo: CarOrderQueryResponseBodyModuleCarInfo,
      invoiceInfo: CarOrderQueryResponseBodyModuleInvoiceInfo,
      orderBaseInfo: CarOrderQueryResponseBodyModuleOrderBaseInfo,
      passengerList: { 'type': 'array', 'itemType': CarOrderQueryResponseBodyModulePassengerList },
      priceInfoList: { 'type': 'array', 'itemType': CarOrderQueryResponseBodyModulePriceInfoList },
    };
  }

  validate() {
    if(this.carInfo && typeof (this.carInfo as any).validate === 'function') {
      (this.carInfo as any).validate();
    }
    if(this.invoiceInfo && typeof (this.invoiceInfo as any).validate === 'function') {
      (this.invoiceInfo as any).validate();
    }
    if(this.orderBaseInfo && typeof (this.orderBaseInfo as any).validate === 'function') {
      (this.orderBaseInfo as any).validate();
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    if(Array.isArray(this.priceInfoList)) {
      $dara.Model.validateArray(this.priceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarOrderQueryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @example
   * 成功
   */
  message?: string;
  module?: CarOrderQueryResponseBodyModule;
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
      module: CarOrderQueryResponseBodyModule,
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

