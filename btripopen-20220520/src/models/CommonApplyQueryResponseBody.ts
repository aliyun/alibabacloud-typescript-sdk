// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommonApplyQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 123
   */
  applyId?: number;
  /**
   * @example
   * 5
   */
  bizCategory?: number;
  /**
   * @example
   * 改签
   */
  cause?: string;
  /**
   * @example
   * 0001A1100000007EX08O
   */
  corpId?: string;
  /**
   * @example
   * 改签：
   * {
   *     "changeFee": 100,
   *     "itineraryId": "fc2824e458a140b5b950001bc51bcc54-8",
   *     "changeReason": "机票改签测试11302052",
   *     "changeFlightOrders": [
   *         {
   *             "arrTime": 1639008600000,
   *             "depTime": 1639000200000,
   *             "flightNo": "GJ8988",
   *             "arrCityName": "杭州",
   *             "depCityName": "北京",
   *             "passengerInfos": [
   *                 {
   *                     "id": 993146468,
   *                     "cabin": "Y",
   *                     "discount": 10,
   *                     "changeFee": 100,
   *                     "cabinClass": "2",
   *                     "cabinClassStr": "经济舱",
   *                     "passengerName": "商旅"
   *                 }
   *             ]
   *         }
   *     ],
   *     "originFlightOrders": [
   *         {
   *             "arrTime": 1638923400000,
   *             "depTime": 1638915600000,
   *             "flightNo": "MU8477",
   *             "arrCityName": "杭州",
   *             "depCityName": "北京",
   *             "passengerInfos": [
   *                 {
   *                     "id": 993146468,
   *                     "cabin": "Y",
   *                     "discount": 0.1,
   *                     "changeFee": 100,
   *                     "cabinClass": "2",
   *                     "cabinClassStr": "经济舱",
   *                     "passengerName": "商旅"
   *                 }
   *             ]
   *         }
   *     ],
   *     "cabinAndDiscountDesc": "可订经济舱2.0折及以下"
   * }，
   * 
   * 退票：
   * {
   *     "refundFee": 7000,
   *     "itineraryId": "fc2824e458a140b5b950001bc51bcc54-8",
   *     "refundReason": "行程取消",
   *     "originFlightOrders": [
   *         {
   *             "arrTime": 1638374400000,
   *             "depTime": 1638397200000,
   *             "flightNo": "MU8477",
   *             "arrCityName": "杭州",
   *             "depCityName": "北京",
   *             "passengerInfos": [
   *                 {
   *                     "id": 281825548,
   *                     "cabin": "Y",
   *                     "discount": 0,
   *                     "refundFee": 500,
   *                     "cabinClass": 2,
   *                     "cabinClassStr": "全价经济舱",
   *                     "passengerName": "商旅"
   *                 }
   *             ]
   *         }
   *     ]
   * }
   */
  extendValue?: string;
  /**
   * @example
   * 2021-03-18T20:26Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 1017124195788186048
   */
  orderId?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 1233
   */
  thirdpartCorpId?: string;
  /**
   * @example
   * 12344
   */
  thirdpartId?: string;
  /**
   * @example
   * 杭州出差
   */
  tripCause?: string;
  /**
   * @example
   * user1
   */
  userId?: string;
  /**
   * @example
   * 张三
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      bizCategory: 'biz_category',
      cause: 'cause',
      corpId: 'corp_id',
      extendValue: 'extend_value',
      gmtCreate: 'gmt_create',
      orderId: 'order_id',
      status: 'status',
      thirdpartCorpId: 'thirdpart_corp_id',
      thirdpartId: 'thirdpart_id',
      tripCause: 'trip_cause',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      bizCategory: 'number',
      cause: 'string',
      corpId: 'string',
      extendValue: 'string',
      gmtCreate: 'string',
      orderId: 'number',
      status: 'number',
      thirdpartCorpId: 'string',
      thirdpartId: 'string',
      tripCause: 'string',
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

export class CommonApplyQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  /**
   * @example
   * 成功
   */
  message?: string;
  module?: CommonApplyQueryResponseBodyModule;
  /**
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
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
      module: CommonApplyQueryResponseBodyModule,
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

