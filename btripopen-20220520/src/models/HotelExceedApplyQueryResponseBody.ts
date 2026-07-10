// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo extends $dara.Model {
  checkIn?: string;
  checkOut?: string;
  cityCode?: string;
  cityName?: string;
  price?: number;
  together?: boolean;
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
  applyId?: number;
  applyIntentionInfoDo?: HotelExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo;
  btripCause?: string;
  corpId?: string;
  exceedReason?: string;
  exceedType?: number;
  originStandard?: string;
  status?: number;
  submitTime?: string;
  thirdpartApplyId?: string;
  thirdpartCorpId?: string;
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
  code?: string;
  message?: string;
  module?: HotelExceedApplyQueryResponseBodyModule;
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

