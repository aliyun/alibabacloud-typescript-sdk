// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainExceedApplyQueryResponseBodyModuleApplyIntentionInfoDO extends $dara.Model {
  /**
   * @example
   * BJS
   */
  arrCity?: string;
  arrCityName?: string;
  arrStation?: string;
  /**
   * @example
   * 2022-02-24T09:55Z
   */
  arrTime?: string;
  /**
   * @example
   * SHA
   */
  depCity?: string;
  depCityName?: string;
  depStation?: string;
  /**
   * @example
   * 2022-02-24T09:55Z
   */
  depTime?: string;
  /**
   * @example
   * 1000
   */
  price?: number;
  seatName?: string;
  /**
   * @example
   * G39
   */
  trainNo?: string;
  trainTypeDesc?: string;
  /**
   * @example
   * 32
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrCityName: 'arr_city_name',
      arrStation: 'arr_station',
      arrTime: 'arr_time',
      depCity: 'dep_city',
      depCityName: 'dep_city_name',
      depStation: 'dep_station',
      depTime: 'dep_time',
      price: 'price',
      seatName: 'seat_name',
      trainNo: 'train_no',
      trainTypeDesc: 'train_type_desc',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrCityName: 'string',
      arrStation: 'string',
      arrTime: 'string',
      depCity: 'string',
      depCityName: 'string',
      depStation: 'string',
      depTime: 'string',
      price: 'number',
      seatName: 'string',
      trainNo: 'string',
      trainTypeDesc: 'string',
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

export class TrainExceedApplyQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * apply1
   */
  applyId?: number;
  applyIntentionInfoDO?: TrainExceedApplyQueryResponseBodyModuleApplyIntentionInfoDO;
  btripCause?: string;
  /**
   * @example
   * corp1
   */
  corpId?: string;
  exceedReason?: string;
  /**
   * @example
   * 32
   */
  exceedType?: number;
  /**
   * @example
   * 10000
   */
  originStandard?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 2022-02-24T09:55Z
   */
  submitTime?: string;
  /**
   * @example
   * 0001A1100000007EX08O
   */
  thirdpartApplyId?: string;
  /**
   * @example
   * testcorp1
   */
  thirdpartCorpId?: string;
  /**
   * @example
   * user1
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      applyIntentionInfoDO: 'apply_intention_info_d_o',
      btripCause: 'btrip_cause',
      corpId: 'corp_id',
      exceedReason: 'exceed_reason',
      exceedType: 'exceed_type',
      originStandard: 'origin_standard',
      status: 'status',
      submitTime: 'submit_time',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartCorpId: 'thirdpart_corp_id',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      applyIntentionInfoDO: TrainExceedApplyQueryResponseBodyModuleApplyIntentionInfoDO,
      btripCause: 'string',
      corpId: 'string',
      exceedReason: 'string',
      exceedType: 'number',
      originStandard: 'string',
      status: 'number',
      submitTime: 'string',
      thirdpartApplyId: 'string',
      thirdpartCorpId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.applyIntentionInfoDO && typeof (this.applyIntentionInfoDO as any).validate === 'function') {
      (this.applyIntentionInfoDO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainExceedApplyQueryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: TrainExceedApplyQueryResponseBodyModule;
  /**
   * @example
   * BE3FBA15-C5E1-5B99-8120-9FB84A04FB81
   */
  requestId?: string;
  /**
   * @example
   * True
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
      module: TrainExceedApplyQueryResponseBodyModule,
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

