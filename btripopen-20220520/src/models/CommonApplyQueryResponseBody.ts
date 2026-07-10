// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommonApplyQueryResponseBodyModule extends $dara.Model {
  applyId?: number;
  bizCategory?: number;
  cause?: string;
  corpId?: string;
  extendValue?: string;
  gmtCreate?: string;
  orderId?: number;
  status?: number;
  thirdpartCorpId?: string;
  thirdpartId?: string;
  tripCause?: string;
  userId?: string;
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
  code?: string;
  message?: string;
  module?: CommonApplyQueryResponseBodyModule;
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

