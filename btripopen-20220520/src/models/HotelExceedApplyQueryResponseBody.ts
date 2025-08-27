// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo extends $dara.Model {
  /**
   * @example
   * 2021-07-08
   */
  checkIn?: string;
  /**
   * @example
   * 2021-07-08
   */
  checkOut?: string;
  /**
   * @example
   * SHA
   */
  cityCode?: string;
  cityName?: string;
  /**
   * @example
   * 10000
   */
  price?: number;
  /**
   * @example
   * true
   */
  together?: boolean;
  /**
   * @example
   * 16
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      checkIn: 'check_in',
      checkOut: 'check_out',
      cityCode: 'city_code',
      cityName: 'city_name',
      price: 'price',
      together: 'together',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIn: 'string',
      checkOut: 'string',
      cityCode: 'string',
      cityName: 'string',
      price: 'number',
      together: 'boolean',
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

export class HotelExceedApplyQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 27238197
   */
  applyId?: number;
  applyIntentionInfoDo?: HotelExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo;
  btripCause?: string;
  /**
   * @example
   * corp1
   */
  corpId?: string;
  exceedReason?: string;
  /**
   * @example
   * 16
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
   * 2022-02-11T16:25Z
   */
  submitTime?: string;
  /**
   * @example
   * 0001A1100000007EX08O
   */
  thirdpartApplyId?: string;
  /**
   * @example
   * test_corp
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
      applyIntentionInfoDo: 'apply_intention_info_do',
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
      applyIntentionInfoDo: HotelExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo,
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
    if(this.applyIntentionInfoDo && typeof (this.applyIntentionInfoDo as any).validate === 'function') {
      (this.applyIntentionInfoDo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelExceedApplyQueryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: HotelExceedApplyQueryResponseBodyModule;
  /**
   * @example
   * E03779E6-71C2-5082-ABE3-6315B8247EE8
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
      module: HotelExceedApplyQueryResponseBodyModule,
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

