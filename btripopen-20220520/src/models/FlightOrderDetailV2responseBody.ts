// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderDetailV2ResponseBodyModuleContactInfoDTO extends $dara.Model {
  /**
   * @example
   * 178169630111@163.com
   */
  contactEmail?: string;
  /**
   * @example
   * 测试联系人
   */
  contactName?: string;
  /**
   * @example
   * 178169630111
   */
  contactPhone?: string;
  /**
   * @example
   * true
   */
  sendMsgToPassenger?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactEmail: 'contact_email',
      contactName: 'contact_name',
      contactPhone: 'contact_phone',
      sendMsgToPassenger: 'send_msg_to_passenger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactEmail: 'string',
      contactName: 'string',
      contactPhone: 'string',
      sendMsgToPassenger: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentListFlightChange extends $dara.Model {
  /**
   * @example
   * 由于测试原因，本航班计划起飞时间延误至03-15 07:30
   */
  changeDesc?: string;
  /**
   * @example
   * 出发时间延误
   */
  changeStatus?: string;
  /**
   * @example
   * DEP_TIME_DELAY
   */
  changeStatusCode?: string;
  /**
   * @example
   * 新航段信息
   */
  newSegment?: any;
  passengerNames?: string[];
  static names(): { [key: string]: string } {
    return {
      changeDesc: 'change_desc',
      changeStatus: 'change_status',
      changeStatusCode: 'change_status_code',
      newSegment: 'new_segment',
      passengerNames: 'passenger_names',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeDesc: 'string',
      changeStatus: 'string',
      changeStatusCode: 'string',
      newSegment: 'any',
      passengerNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.passengerNames)) {
      $dara.Model.validateArray(this.passengerNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentListSegmentPosition extends $dara.Model {
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  static names(): { [key: string]: string } {
    return {
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journeyIndex: 'number',
      segmentIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentList extends $dara.Model {
  /**
   * @example
   * CA
   */
  airLineCode?: string;
  /**
   * @example
   * Air China Limited
   */
  airLineEnglishName?: string;
  /**
   * @example
   * 中国国航
   */
  airLineName?: string;
  /**
   * @example
   * 95583
   */
  airLinePhone?: string;
  /**
   * @example
   * https://gw.alicdn.com/tfs/TB12fJAFHr1gK0jSZR0XXbP8XXa-450-450.png
   */
  airlineIconUrl?: string;
  /**
   * @example
   * 国航
   */
  airlineShortName?: string;
  /**
   * @example
   * XIL
   */
  arrAirportCode?: string;
  /**
   * @example
   * 锡林浩特机场
   */
  arrAirportName?: string;
  /**
   * @example
   * XIL
   */
  arrCityCode?: string;
  /**
   * @example
   * 锡林浩特
   */
  arrCityName?: string;
  /**
   * @example
   * 2023-07-20 08:25:00
   */
  arrTime?: string;
  /**
   * @example
   * 航班到达航站楼
   */
  arriveTerminal?: string;
  /**
   * @remarks
   * cabin
   * 
   * @example
   * 全价经济舱
   */
  cabin?: string;
  /**
   * @example
   * 全价经济舱0.4折
   */
  cabinAndDiscount?: string;
  /**
   * @remarks
   * cabin_class
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * cabin_class_name
   * 
   * @example
   * 全价经济舱
   */
  cabinClassName?: string;
  /**
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @example
   * 起飞前45分钟停止办理值机
   */
  deadlineText?: string;
  /**
   * @example
   * PEK
   */
  depAirportCode?: string;
  /**
   * @example
   * 首都国际机场
   */
  depAirportName?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @example
   * 北京
   */
  depCityName?: string;
  /**
   * @example
   * 2023-07-29
   */
  depDate?: string;
  /**
   * @example
   * 2023-07-20 07:00:00
   */
  depTime?: string;
  /**
   * @example
   * 航班到达航站楼
   */
  departTerminal?: string;
  /**
   * @example
   * 0.4
   */
  discount?: number;
  flightChange?: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentListFlightChange;
  /**
   * @example
   * CA1110
   */
  flightNo?: string;
  /**
   * @example
   * ARJ
   */
  flightType?: string;
  /**
   * @example
   * 时长
   */
  flyDuration?: number;
  /**
   * @example
   * 制造商，如"波音"
   */
  manufacturer?: string;
  /**
   * @example
   * 无餐食
   */
  mealDesc?: string;
  /**
   * @example
   * 准点率
   */
  onTimeRate?: string;
  /**
   * @example
   * 共享/承运航司简称
   */
  operatingAirShortName?: string;
  /**
   * @example
   * 共享/承运航司code
   */
  operatingAirlineCode?: string;
  /**
   * @example
   * 共享/承运航司英文名称
   */
  operatingAirlineEnglishName?: string;
  /**
   * @example
   * 共享/承运航司图标
   */
  operatingAirlineIconUrl?: string;
  /**
   * @example
   * 共享/承运航司名称
   */
  operatingAirlineName?: string;
  /**
   * @example
   * 共享/承运航司电话
   */
  operatingAirlinePhone?: string;
  /**
   * @example
   * 共享/承运航班号
   */
  operatingFlightNo?: string;
  /**
   * @example
   * 小
   */
  planeType?: string;
  /**
   * @example
   * 服务费
   */
  raisePrice?: number;
  /**
   * @example
   * 航段Id
   */
  segmentId?: string;
  /**
   * @remarks
   * segmentIndex
   * 
   * @example
   * 0
   */
  segmentIndex?: number;
  segmentPosition?: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentListSegmentPosition;
  /**
   * @example
   * 经停机场
   */
  stopAirport?: string;
  /**
   * @example
   * 经停到达时间
   */
  stopArrTime?: string;
  /**
   * @example
   * 经停城市
   */
  stopCity?: string;
  /**
   * @example
   * 经停城市
   */
  stopCityName?: string;
  /**
   * @example
   * 经停出发时间
   */
  stopDepTime?: string;
  /**
   * @example
   * 经停次数
   */
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      airLineCode: 'air_line_code',
      airLineEnglishName: 'air_line_english_name',
      airLineName: 'air_line_name',
      airLinePhone: 'air_line_phone',
      airlineIconUrl: 'airline_icon_url',
      airlineShortName: 'airline_short_name',
      arrAirportCode: 'arr_airport_code',
      arrAirportName: 'arr_airport_name',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      arriveTerminal: 'arrive_terminal',
      cabin: 'cabin',
      cabinAndDiscount: 'cabin_and_discount',
      cabinClass: 'cabin_class',
      cabinClassName: 'cabin_class_name',
      codeShare: 'code_share',
      deadlineText: 'deadline_text',
      depAirportCode: 'dep_airport_code',
      depAirportName: 'dep_airport_name',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depDate: 'dep_date',
      depTime: 'dep_time',
      departTerminal: 'depart_terminal',
      discount: 'discount',
      flightChange: 'flight_change',
      flightNo: 'flight_no',
      flightType: 'flight_type',
      flyDuration: 'fly_duration',
      manufacturer: 'manufacturer',
      mealDesc: 'meal_desc',
      onTimeRate: 'on_time_rate',
      operatingAirShortName: 'operating_air_short_name',
      operatingAirlineCode: 'operating_airline_code',
      operatingAirlineEnglishName: 'operating_airline_english_name',
      operatingAirlineIconUrl: 'operating_airline_icon_url',
      operatingAirlineName: 'operating_airline_name',
      operatingAirlinePhone: 'operating_airline_phone',
      operatingFlightNo: 'operating_flight_no',
      planeType: 'plane_type',
      raisePrice: 'raise_price',
      segmentId: 'segment_id',
      segmentIndex: 'segment_index',
      segmentPosition: 'segment_position',
      stopAirport: 'stop_airport',
      stopArrTime: 'stop_arr_time',
      stopCity: 'stop_city',
      stopCityName: 'stop_city_name',
      stopDepTime: 'stop_dep_time',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airLineCode: 'string',
      airLineEnglishName: 'string',
      airLineName: 'string',
      airLinePhone: 'string',
      airlineIconUrl: 'string',
      airlineShortName: 'string',
      arrAirportCode: 'string',
      arrAirportName: 'string',
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      arriveTerminal: 'string',
      cabin: 'string',
      cabinAndDiscount: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      codeShare: 'boolean',
      deadlineText: 'string',
      depAirportCode: 'string',
      depAirportName: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depDate: 'string',
      depTime: 'string',
      departTerminal: 'string',
      discount: 'number',
      flightChange: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentListFlightChange,
      flightNo: 'string',
      flightType: 'string',
      flyDuration: 'number',
      manufacturer: 'string',
      mealDesc: 'string',
      onTimeRate: 'string',
      operatingAirShortName: 'string',
      operatingAirlineCode: 'string',
      operatingAirlineEnglishName: 'string',
      operatingAirlineIconUrl: 'string',
      operatingAirlineName: 'string',
      operatingAirlinePhone: 'string',
      operatingFlightNo: 'string',
      planeType: 'string',
      raisePrice: 'number',
      segmentId: 'string',
      segmentIndex: 'number',
      segmentPosition: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentListSegmentPosition,
      stopAirport: 'string',
      stopArrTime: 'string',
      stopCity: 'string',
      stopCityName: 'string',
      stopDepTime: 'string',
      stopQuantity: 'number',
    };
  }

  validate() {
    if(this.flightChange && typeof (this.flightChange as any).validate === 'function') {
      (this.flightChange as any).validate();
    }
    if(this.segmentPosition && typeof (this.segmentPosition as any).validate === 'function') {
      (this.segmentPosition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneys extends $dara.Model {
  /**
   * @example
   * 85
   */
  allFlyDuration?: number;
  /**
   * @example
   * 85
   */
  allFlyDurationAfterChange?: number;
  /**
   * @example
   * 申请单Id
   */
  applyId?: number;
  /**
   * @example
   * XIL
   */
  arrCityCode?: string;
  /**
   * @example
   * 锡林浩特
   */
  arrCityName?: string;
  /**
   * @example
   * 2023-07-20 08:25:00
   */
  arrTime?: string;
  /**
   * @example
   * {\\"baggageDetails\\":[{\\"index\\":0,\\"title\\":\\"行李规定\\",\\"type\\":2,\\"baggageSubItems\\":[{\\"extraContentVisualizes\\":[],\\"baggageSubContentVisualizes\\":[{\\"baggageDesc\\":[\\"每人可携带 1件 登机\\",\\"至多 5公斤/件\\",\\"尺寸不超过 20*40*55cm\\"],\\"baggageSubContentType\\":0,\\"imageDO\\":{\\"image\\":\\"https://gw.alicdn.com/imgextra/i3/O1CN01kLt3m923XsUs6WVif_!!6000000007266-2-tps-280-300.png\\",\\"largest\\":\\"55\\",\\"middle\\":\\"40\\",\\"smallest\\":\\"20\\"},\\"subTitle\\":\\"免费手提行李\\",\\"isHighlight\\":false,\\"description\\":{\\"image\\":\\"https://gw.alicdn.com/imgextra/i1/O1CN01qe7wL21gJ0SmEXXL7_!!6000000004120-2-tps-1206-768.png\\",\\"icon\\":\\"https://gw.alicdn.com/imgextra/i4/O1CN01UynXG31pjsEtA3tMF_!!6000000005397-2-tps-36-36.png\\",\\"title\\":\\"手提行李说明\\",\\"desc\\":\\"您可以随身携带上飞机客舱内的行李物品，由旅客自行负责保管。具体尺寸、重量、类型等以各航空公司规定为准。\\"}},{\\"baggageDesc\\":[\\"尺寸不超过 40*60*100cm\\",\\"至多 20公斤/人\\"],\\"baggageSubContentType\\":1,\\"imageDO\\":{\\"image\\":\\"https://gw.alicdn.com/imgextra/i1/O1CN013fm4Hf1kc1NlbQ1dV_!!6000000004703-2-tps-280-400.png\\",\\"largest\\":\\"100\\",\\"middle\\":\\"60\\",\\"smallest\\":\\"40\\"},\\"subTitle\\":\\"免费托运行李\\",\\"isHighlight\\":false,\\"description\\":{\\"image\\":\\"https://gw.alicdn.com/imgextra/i1/O1CN01rX7s431t7ddQuCWjK_!!6000000005855-2-tps-1206-768.png\\",\\"icon\\":\\"https://gw.alicdn.com/imgextra/i4/O1CN01UynXG31pjsEtA3tMF_!!6000000005397-2-tps-36-36.png\\",\\"title\\":\\"托运行李说明\\",\\"desc\\":\\"您需要在登机前将行李在值机柜台办理托运，领取托运凭证，该行李在飞机货舱中随飞机到达目的地，抵达后您凭托运凭证在行李领取处领取。\\"}}],\\"title\\":\\"成人行李\\",\\"isStruct\\":true,\\"ptc\\":\\"ADT\\"}],\\"tableHead\\":\\"北京-锡林浩特\\",\\"tips\\":{\\"tipsDesc\\":\\"各个尺寸的行李箱有多大？\\",\\"logo\\":\\"https://gw.alicdn.com/imgextra/i1/O1CN019zl3WZ22fNLxzx2cR_!!6000000007147-2-tps-125-45.png\\",\\"tipsImage\\":\\"https://gw.alicdn.com/imgextra/i1/O1CN01X8dK671m3nC7MFAq7_!!6000000004899-2-tps-1050-675.png\\"}},{\\"index\\":0,\\"type\\":2,\\"baggageSubItems\\":[{\\"extraContentVisualizes\\":[],\\"baggageSubContentVisualizes\\":[{\\"baggageDesc\\":[\\"每人可携带 1件 登机\\",\\"至多 5公斤/件\\",\\"尺寸不超过 20*40*55cm\\"],\\"baggageSubContentType\\":0,\\"imageDO\\":{\\"image\\":\\"https://gw.alicdn.com/imgextra/i3/O1CN01kLt3m923XsUs6WVif_!!6000000007266-2-tps-280-300.png\\",\\"largest\\":\\"55\\",\\"middle\\":\\"40\\",\\"smallest\\":\\"20\\"},\\"subTitle\\":\\"免费手提行李\\",\\"isHighlight\\":false,\\"description\\":{\\"image\\":\\"https://gw.alicdn.com/imgextra/i1/O1CN01qe7wL21gJ0SmEXXL7_!!6000000004120-2-tps-1206-768.png\\",\\"icon\\":\\"https://gw.alicdn.com/imgextra/i4/O1CN01UynXG31pjsEtA3tMF_!!6000000005397-2-tps-36-36.png\\",\\"title\\":\\"手提行李说明\\",\\"desc\\":\\"您可以随身携带上飞机客舱内的行李物品，由旅客自行负责保管。具体尺寸、重量、类型等以各航空公司规定为准。\\"}},{\\"baggageDesc\\":[\\"尺寸不超过 40*60*100cm\\",\\"至多 20公斤/人\\"],\\"baggageSubContentType\\":1,\\"imageDO\\":{\\"image\\":\\"https://gw.alicdn.com/imgextra/i1/O1CN013fm4Hf1kc1NlbQ1dV_!!6000000004703-2-tps-280-400.png\\",\\"largest\\":\\"100\\",\\"middle\\":\\"60\\",\\"smallest\\":\\"40\\"},\\"subTitle\\":\\"免费托运行李\\",\\"isHighlight\\":false,\\"description\\":{\\"image\\":\\"https://gw.alicdn.com/imgextra/i1/O1CN01rX7s431t7ddQuCWjK_!!6000000005855-2-tps-1206-768.png\\",\\"icon\\":\\"https://gw.alicdn.com/imgextra/i4/O1CN01UynXG31pjsEtA3tMF_!!6000000005397-2-tps-36-36.png\\",\\"title\\":\\"托运行李说明\\",\\"desc\\":\\"您需要在登机前将行李在值机柜台办理托运，领取托运凭证，该行李在飞机货舱中随飞机到达目的地，抵达后您凭托运凭证在行李领取处领取。\\"}}],\\"title\\":\\"成人行李\\",\\"isStruct\\":true,\\"ptc\\":\\"ADT\\"}],\\"tableHead\\":\\"锡林浩特-北京\\",\\"tips\\":{\\"tipsDesc\\":\\"各个尺寸的行李箱有多大？\\",\\"logo\\":\\"https://gw.alicdn.com/imgextra/i1/O1CN019zl3WZ22fNLxzx2cR_!!6000000007147-2-tps-125-45.png\\",\\"tipsImage\\":\\"https://gw.alicdn.com/imgextra/i1/O1CN01X8dK671m3nC7MFAq7_!!6000000004899-2-tps-1050-675.png\\"}}]}
   */
  baggageDetails?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @example
   * 北京
   */
  depCityName?: string;
  /**
   * @example
   * 2023-07-20 07:00:00
   */
  depTime?: string;
  /**
   * @example
   * 标签
   */
  flightStatus?: string;
  /**
   * @remarks
   * iata_no
   * 
   * @example
   * iata_no
   */
  iataNo?: string;
  /**
   * @example
   * 是否重新行程
   */
  isReshopJourney?: boolean;
  /**
   * @example
   * 是否中转
   */
  isTransfer?: boolean;
  /**
   * @example
   * 去程
   */
  journeyTitle?: string;
  /**
   * @example
   * {\\"refundDetails\\":[{\\"refundSubItems\\":[{\\"title\\":\\"成人\\",\\"isStruct\\":true,\\"refundSubContents\\":[{\\"feeDesc\\":\\"￥0/人\\",\\"style\\":0,\\"feeRange\\":\\"7月6日 07:00 前\\"},{\\"feeDesc\\":\\"￥32/人\\",\\"style\\":0,\\"feeRange\\":\\"7月18日 07:00 前\\"},{\\"feeDesc\\":\\"￥45/人\\",\\"style\\":0,\\"feeRange\\":\\"7月20日 03:00 前\\"},{\\"feeDesc\\":\\"￥45/人\\",\\"style\\":1,\\"feeRange\\":\\"7月20日 03:00 后\\"}],\\"ptc\\":\\"ADT\\"}],\\"index\\":0,\\"title\\":\\"退票收费规则\\",\\"type\\":0,\\"tableHead\\":\\"北京-锡林浩特\\",\\"extraContents\\":[{\\"title\\":\\"特殊说明\\",\\"content\\":\\"改期如有差价需同时收取改期费和差价。来回程一体运价（指来回程票价低于单程票价的两倍）客票部分使用后退票，扣除票面价的1/2来回程一体运价，余额按相应舱位退规办理。来回程一体运价（指来回程票价低于单程票价的两倍）客票部分使用后变更，按1/2来回程一体运价计算变更手续费；如变更后舱位有来回程一体运价，则票价差为1/2来回程一体运价的差额；如变更后舱位没有来回程一体运价，则票价差为变更后舱位单程运价与变更前1/2来回程一体运价的差额。客票自填开之日起，一年内必须开始旅行，自首次旅行开始之日起，一年内运输有效。\\"}]},{\\"refundSubItems\\":[{\\"title\\":\\"成人\\",\\"isStruct\\":true,\\"refundSubContents\\":[{\\"feeDesc\\":\\"￥0/人\\",\\"style\\":0,\\"feeRange\\":\\"7月15日 09:30 前\\"},{\\"feeDesc\\":\\"￥32/人\\",\\"style\\":0,\\"feeRange\\":\\"7月27日 09:30 前\\"},{\\"feeDesc\\":\\"￥45/人\\",\\"style\\":0,\\"feeRange\\":\\"7月29日 05:30 前\\"},{\\"feeDesc\\":\\"￥45/人\\",\\"style\\":1,\\"feeRange\\":\\"7月29日 05:30 后\\"}],\\"ptc\\":\\"ADT\\"}],\\"index\\":1,\\"type\\":0,\\"tableHead\\":\\"锡林浩特-北京\\",\\"extraContents\\":[{\\"title\\":\\"特殊说明\\",\\"content\\":\\"改期如有差价需同时收取改期费和差价。来回程一体运价（指来回程票价低于单程票价的两倍）客票部分使用后退票，扣除票面价的1/2来回程一体运价，余额按相应舱位退规办理。来回程一体运价（指来回程票价低于单程票价的两倍）客票部分使用后变更，按1/2来回程一体运价计算变更手续费；如变更后舱位有来回程一体运价，则票价差为1/2来回程一体运价的差额；如变更后舱位没有来回程一体运价，则票价差为变更后舱位单程运价与变更前1/2来回程一体运价的差额。客票自填开之日起，一年内必须开始旅行，自首次旅行开始之日起，一年内运输有效。\\"}]}],\\"changeDetails\\":[{\\"refundSubItems\\":[{\\"title\\":\\"成人\\",\\"isStruct\\":true,\\"refundSubContents\\":[{\\"feeDesc\\":\\"￥0/人\\",\\"style\\":0,\\"feeRange\\":\\"7月6日 07:00 前\\"},{\\"feeDesc\\":\\"￥32/人\\",\\"style\\":0,\\"feeRange\\":\\"7月18日 07:00 前\\"},{\\"feeDesc\\":\\"￥32/人\\",\\"style\\":0,\\"feeRange\\":\\"7月20日 03:00 前\\"},{\\"feeDesc\\":\\"￥45/人\\",\\"style\\":1,\\"feeRange\\":\\"7月20日 03:00 后\\"}],\\"ptc\\":\\"ADT\\"}],\\"index\\":0,\\"title\\":\\"同舱改期规则\\",\\"type\\":1,\\"tableHead\\":\\"北京-锡林浩特\\",\\"extraContents\\":[{\\"title\\":\\"签转条件\\",\\"content\\":\\"可签转\\"}]},{\\"refundSubItems\\":[{\\"title\\":\\"成人\\",\\"isStruct\\":true,\\"refundSubContents\\":[{\\"feeDesc\\":\\"￥0/人\\",\\"style\\":0,\\"feeRange\\":\\"7月15日 09:30 前\\"},{\\"feeDesc\\":\\"￥32/人\\",\\"style\\":0,\\"feeRange\\":\\"7月27日 09:30 前\\"},{\\"feeDesc\\":\\"￥32/人\\",\\"style\\":0,\\"feeRange\\":\\"7月29日 05:30 前\\"},{\\"feeDesc\\":\\"￥45/人\\",\\"style\\":1,\\"feeRange\\":\\"7月29日 05:30 后\\"}],\\"ptc\\":\\"ADT\\"}],\\"index\\":1,\\"type\\":1,\\"tableHead\\":\\"锡林浩特-北京\\"},{\\"refundSubItems\\":[{\\"isStruct\\":false,\\"content\\":\\"可签转\\"}],\\"index\\":1,\\"type\\":2,\\"tableHead\\":\\"锡林浩特-北京\\"}]}
   */
  refundChangeDetails?: string;
  segmentList?: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentList[];
  static names(): { [key: string]: string } {
    return {
      allFlyDuration: 'all_fly_duration',
      allFlyDurationAfterChange: 'all_fly_duration_after_change',
      applyId: 'apply_id',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      baggageDetails: 'baggage_details',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      flightStatus: 'flight_status',
      iataNo: 'iata_no',
      isReshopJourney: 'is_reshop_journey',
      isTransfer: 'is_transfer',
      journeyTitle: 'journey_title',
      refundChangeDetails: 'refund_change_details',
      segmentList: 'segment_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allFlyDuration: 'number',
      allFlyDurationAfterChange: 'number',
      applyId: 'number',
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      baggageDetails: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      flightStatus: 'string',
      iataNo: 'string',
      isReshopJourney: 'boolean',
      isTransfer: 'boolean',
      journeyTitle: 'string',
      refundChangeDetails: 'string',
      segmentList: { 'type': 'array', 'itemType': FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentList },
    };
  }

  validate() {
    if(Array.isArray(this.segmentList)) {
      $dara.Model.validateArray(this.segmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTO extends $dara.Model {
  journeys?: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneys[];
  /**
   * @example
   * 提醒注意
   */
  noticeTips?: string;
  /**
   * @example
   * 往返
   */
  tripType?: string;
  /**
   * @example
   * 2
   */
  tripTypeCode?: number;
  static names(): { [key: string]: string } {
    return {
      journeys: 'journeys',
      noticeTips: 'notice_tips',
      tripType: 'trip_type',
      tripTypeCode: 'trip_type_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journeys: { 'type': 'array', 'itemType': FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneys },
      noticeTips: 'string',
      tripType: 'string',
      tripTypeCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.journeys)) {
      $dara.Model.validateArray(this.journeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBodyModulePassengerListCredential extends $dara.Model {
  /**
   * @example
   * 1991-06-21 00:00:00
   */
  birthDate?: string;
  /**
   * @example
   * 1991-06-21 00:00:00
   */
  certIssueDate?: string;
  /**
   * @example
   * 签发地
   */
  certIssuePlace?: string;
  /**
   * @example
   * 证件号
   */
  credentialNo?: string;
  /**
   * @example
   * 驾照首次获取的时间
   */
  driveLicenceFirst?: string;
  /**
   * @example
   * 驾照类型
   */
  driveLicenceType?: string;
  /**
   * @example
   * 1991-06-21 00:00:00
   */
  expireDate?: string;
  /**
   * @example
   * 持有人国籍
   */
  holderNationality?: string;
  /**
   * @example
   * 131332
   */
  id?: number;
  /**
   * @example
   * 身份证核验结果code
   */
  idCheckCode?: string;
  /**
   * @example
   * 发证国家
   */
  issueCountry?: string;
  /**
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      birthDate: 'birth_date',
      certIssueDate: 'cert_issue_date',
      certIssuePlace: 'cert_issue_place',
      credentialNo: 'credential_no',
      driveLicenceFirst: 'drive_licence_first',
      driveLicenceType: 'drive_licence_type',
      expireDate: 'expire_date',
      holderNationality: 'holder_nationality',
      id: 'id',
      idCheckCode: 'id_check_code',
      issueCountry: 'issue_country',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthDate: 'string',
      certIssueDate: 'string',
      certIssuePlace: 'string',
      credentialNo: 'string',
      driveLicenceFirst: 'string',
      driveLicenceType: 'string',
      expireDate: 'string',
      holderNationality: 'string',
      id: 'number',
      idCheckCode: 'string',
      issueCountry: 'string',
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

export class FlightOrderDetailV2ResponseBodyModulePassengerListCredentials extends $dara.Model {
  /**
   * @example
   * 生日
   */
  birthDate?: string;
  /**
   * @example
   * 签发日期
   */
  certIssueDate?: string;
  /**
   * @example
   * 签发地
   */
  certIssuePlace?: string;
  /**
   * @example
   * 证件号
   */
  credentialNo?: string;
  /**
   * @example
   * 驾照首次获取的时间
   */
  driveLicenceFirst?: string;
  /**
   * @example
   * 驾照类型
   */
  driveLicenceType?: string;
  /**
   * @example
   * 到期时间
   */
  expireDate?: string;
  /**
   * @example
   * 持有人国籍
   */
  holderNationality?: string;
  /**
   * @example
   * 131332
   */
  id?: number;
  /**
   * @example
   * 身份证核验结果code
   */
  idCheckCode?: string;
  /**
   * @example
   * 发证国家
   */
  issueCountry?: string;
  /**
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      birthDate: 'birth_date',
      certIssueDate: 'cert_issue_date',
      certIssuePlace: 'cert_issue_place',
      credentialNo: 'credential_no',
      driveLicenceFirst: 'drive_licence_first',
      driveLicenceType: 'drive_licence_type',
      expireDate: 'expire_date',
      holderNationality: 'holder_nationality',
      id: 'id',
      idCheckCode: 'id_check_code',
      issueCountry: 'issue_country',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthDate: 'string',
      certIssueDate: 'string',
      certIssuePlace: 'string',
      credentialNo: 'string',
      driveLicenceFirst: 'string',
      driveLicenceType: 'string',
      expireDate: 'string',
      holderNationality: 'string',
      id: 'number',
      idCheckCode: 'string',
      issueCountry: 'string',
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

export class FlightOrderDetailV2ResponseBodyModulePassengerListTicketsSegmentOpenTicketList extends $dara.Model {
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @example
   * 0
   */
  openTicketStatus?: number;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  static names(): { [key: string]: string } {
    return {
      journeyIndex: 'journey_index',
      openTicketStatus: 'open_ticket_status',
      segmentIndex: 'segment_index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journeyIndex: 'number',
      openTicketStatus: 'number',
      segmentIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBodyModulePassengerListTickets extends $dara.Model {
  /**
   * @example
   * 出票渠道
   */
  channel?: string;
  /**
   * @example
   * 行程 title
   */
  journeyTitle?: string;
  /**
   * @example
   * OPEN_FOR_USE
   */
  openTicketStatus?: string;
  /**
   * @remarks
   * pcc/office
   * 
   * @example
   * pcc/office
   */
  pcc?: string;
  segmentOpenTicketList?: FlightOrderDetailV2ResponseBodyModulePassengerListTicketsSegmentOpenTicketList[];
  /**
   * @example
   * 不需要验真.
   */
  ticketAuthMemo?: string;
  /**
   * @example
   * 2
   */
  ticketAuthStatus?: number;
  /**
   * @example
   * 444-2023062999
   */
  ticketNo?: string;
  /**
   * @example
   * 4500
   */
  ticketPrice?: number;
  /**
   * @example
   * 出票成功
   */
  ticketStatus?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      journeyTitle: 'journey_title',
      openTicketStatus: 'open_ticket_status',
      pcc: 'pcc',
      segmentOpenTicketList: 'segment_open_ticket_list',
      ticketAuthMemo: 'ticket_auth_memo',
      ticketAuthStatus: 'ticket_auth_status',
      ticketNo: 'ticket_no',
      ticketPrice: 'ticket_price',
      ticketStatus: 'ticket_status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      journeyTitle: 'string',
      openTicketStatus: 'string',
      pcc: 'string',
      segmentOpenTicketList: { 'type': 'array', 'itemType': FlightOrderDetailV2ResponseBodyModulePassengerListTicketsSegmentOpenTicketList },
      ticketAuthMemo: 'string',
      ticketAuthStatus: 'number',
      ticketNo: 'string',
      ticketPrice: 'number',
      ticketStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.segmentOpenTicketList)) {
      $dara.Model.validateArray(this.segmentOpenTicketList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBodyModulePassengerList extends $dara.Model {
  /**
   * @example
   * 1991-06-21 00:00:00
   */
  birthday?: string;
  /**
   * @example
   * 12172819047252004460056
   */
  btripUserId?: string;
  /**
   * @example
   * 记录对其进行校验不通过的code
   */
  code?: number;
  /**
   * @example
   * 中国大陆
   */
  country?: string;
  /**
   * @example
   * CN
   */
  countryCode?: string;
  credential?: FlightOrderDetailV2ResponseBodyModulePassengerListCredential;
  credentials?: FlightOrderDetailV2ResponseBodyModulePassengerListCredentials[];
  /**
   * @example
   * 17800000001@163.com
   */
  email?: string;
  /**
   * @example
   * san
   */
  enFirstName?: string;
  /**
   * @example
   * zhang
   */
  enLastName?: string;
  /**
   * @example
   * zhangsan
   */
  englishName?: string;
  /**
   * @example
   * 1
   */
  gender?: number;
  /**
   * @example
   * 3243028
   */
  id?: string;
  /**
   * @example
   * true
   */
  isComplete?: boolean;
  /**
   * @example
   * false
   */
  isFrequently?: boolean;
  /**
   * @example
   * 备注信息
   */
  memo?: string;
  /**
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @example
   * 17800000001
   */
  mobilePhoneNumber?: string;
  /**
   * @example
   * 测试乘机人
   */
  name?: string;
  /**
   * @example
   * true
   */
  oneself?: boolean;
  /**
   * @example
   * 测试乘机人
   */
  orderName?: string;
  /**
   * @example
   * 1111
   */
  outPassengerId?: string;
  /**
   * @example
   * 17800000001
   */
  phone?: string;
  /**
   * @example
   * 111
   */
  shengPiPinyin?: string;
  ticketNos?: string[];
  tickets?: FlightOrderDetailV2ResponseBodyModulePassengerListTickets[];
  /**
   * @example
   * 0
   */
  type?: number;
  /**
   * @example
   * 312312
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      btripUserId: 'btrip_user_id',
      code: 'code',
      country: 'country',
      countryCode: 'country_code',
      credential: 'credential',
      credentials: 'credentials',
      email: 'email',
      enFirstName: 'en_first_name',
      enLastName: 'en_last_name',
      englishName: 'english_name',
      gender: 'gender',
      id: 'id',
      isComplete: 'is_complete',
      isFrequently: 'is_frequently',
      memo: 'memo',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNumber: 'mobile_phone_number',
      name: 'name',
      oneself: 'oneself',
      orderName: 'order_name',
      outPassengerId: 'out_passenger_id',
      phone: 'phone',
      shengPiPinyin: 'sheng_pi_pinyin',
      ticketNos: 'ticket_nos',
      tickets: 'tickets',
      type: 'type',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      btripUserId: 'string',
      code: 'number',
      country: 'string',
      countryCode: 'string',
      credential: FlightOrderDetailV2ResponseBodyModulePassengerListCredential,
      credentials: { 'type': 'array', 'itemType': FlightOrderDetailV2ResponseBodyModulePassengerListCredentials },
      email: 'string',
      enFirstName: 'string',
      enLastName: 'string',
      englishName: 'string',
      gender: 'number',
      id: 'string',
      isComplete: 'boolean',
      isFrequently: 'boolean',
      memo: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNumber: 'string',
      name: 'string',
      oneself: 'boolean',
      orderName: 'string',
      outPassengerId: 'string',
      phone: 'string',
      shengPiPinyin: 'string',
      ticketNos: { 'type': 'array', 'itemType': 'string' },
      tickets: { 'type': 'array', 'itemType': FlightOrderDetailV2ResponseBodyModulePassengerListTickets },
      type: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(this.credential && typeof (this.credential as any).validate === 'function') {
      (this.credential as any).validate();
    }
    if(Array.isArray(this.credentials)) {
      $dara.Model.validateArray(this.credentials);
    }
    if(Array.isArray(this.ticketNos)) {
      $dara.Model.validateArray(this.ticketNos);
    }
    if(Array.isArray(this.tickets)) {
      $dara.Model.validateArray(this.tickets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 协议价编码
   */
  b2gVipCode?: string;
  /**
   * @example
   * 2023-06-29 15:28:44
   */
  bookSuccTime?: string;
  /**
   * @example
   * qingg1234
   */
  bookUserId?: string;
  /**
   * @example
   * 测试预定人
   */
  bookUserName?: string;
  /**
   * @example
   * 0
   */
  buildPrice?: number;
  contactInfoDTO?: FlightOrderDetailV2ResponseBodyModuleContactInfoDTO;
  /**
   * @example
   * 2023-06-29 15:03:11
   */
  createTime?: string;
  /**
   * @example
   * 126000
   */
  facevalue?: number;
  flightTaleInfoDTO?: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTO;
  /**
   * @example
   * false
   */
  isProtocol?: boolean;
  /**
   * @example
   * false
   */
  isemergency?: boolean;
  /**
   * @example
   * true
   */
  issendmessage?: boolean;
  /**
   * @example
   * 4000
   */
  oilPrice?: number;
  /**
   * @example
   * 1017002195370467200
   */
  orderId?: number;
  /**
   * @example
   * 8500
   */
  orderPrice?: number;
  /**
   * @example
   * 1017002195370467137
   */
  outOrderId?: string;
  passengerList?: FlightOrderDetailV2ResponseBodyModulePassengerList[];
  /**
   * @remarks
   * key :passengerId
   * 
   * value :segmentId
   */
  passengerSegmentMap?: { [key: string]: string };
  /**
   * @example
   * 2023-06-29 15:03:59
   */
  payTime?: string;
  /**
   * @example
   * 4500
   */
  saleprice?: number;
  /**
   * @example
   * true
   */
  sendcpsms?: boolean;
  /**
   * @example
   * 5
   */
  status?: number;
  /**
   * @example
   * 3
   */
  totalServiceFeePrice?: number;
  static names(): { [key: string]: string } {
    return {
      b2gVipCode: 'b2g_vip_code',
      bookSuccTime: 'book_succ_time',
      bookUserId: 'book_user_id',
      bookUserName: 'book_user_name',
      buildPrice: 'build_price',
      contactInfoDTO: 'contact_info_d_t_o',
      createTime: 'create_time',
      facevalue: 'facevalue',
      flightTaleInfoDTO: 'flight_tale_info_d_t_o',
      isProtocol: 'is_protocol',
      isemergency: 'isemergency',
      issendmessage: 'issendmessage',
      oilPrice: 'oil_price',
      orderId: 'order_id',
      orderPrice: 'order_price',
      outOrderId: 'out_order_id',
      passengerList: 'passenger_list',
      passengerSegmentMap: 'passenger_segment_map',
      payTime: 'pay_time',
      saleprice: 'saleprice',
      sendcpsms: 'sendcpsms',
      status: 'status',
      totalServiceFeePrice: 'total_service_fee_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b2gVipCode: 'string',
      bookSuccTime: 'string',
      bookUserId: 'string',
      bookUserName: 'string',
      buildPrice: 'number',
      contactInfoDTO: FlightOrderDetailV2ResponseBodyModuleContactInfoDTO,
      createTime: 'string',
      facevalue: 'number',
      flightTaleInfoDTO: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTO,
      isProtocol: 'boolean',
      isemergency: 'boolean',
      issendmessage: 'boolean',
      oilPrice: 'number',
      orderId: 'number',
      orderPrice: 'number',
      outOrderId: 'string',
      passengerList: { 'type': 'array', 'itemType': FlightOrderDetailV2ResponseBodyModulePassengerList },
      passengerSegmentMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      payTime: 'string',
      saleprice: 'number',
      sendcpsms: 'boolean',
      status: 'number',
      totalServiceFeePrice: 'number',
    };
  }

  validate() {
    if(this.contactInfoDTO && typeof (this.contactInfoDTO as any).validate === 'function') {
      (this.contactInfoDTO as any).validate();
    }
    if(this.flightTaleInfoDTO && typeof (this.flightTaleInfoDTO as any).validate === 'function') {
      (this.flightTaleInfoDTO as any).validate();
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    if(this.passengerSegmentMap) {
      $dara.Model.validateMap(this.passengerSegmentMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * module
   */
  module?: FlightOrderDetailV2ResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * E5F4ACF5-5677-1515-9999-ABBB5E668032
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
   * 210bc60a16917251281873772dac41
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
      module: FlightOrderDetailV2ResponseBodyModule,
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

