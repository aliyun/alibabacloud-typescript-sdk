// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MealApplyModifyResponseBodyModule extends $dara.Model {
  thirdPartyApplyId?: string;
  static names(): { [key: string]: string } {
    return {
      thirdPartyApplyId: 'third_party_apply_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thirdPartyApplyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MealApplyModifyResponseBody extends $dara.Model {
  code?: number;
  message?: string;
  module?: MealApplyModifyResponseBodyModule;
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
      code: 'number',
      message: 'string',
      module: MealApplyModifyResponseBodyModule,
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

