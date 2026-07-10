// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyModifyResponseBodyModule extends $dara.Model {
  applyId?: number;
  thirdpartApplyId?: string;
  thirdpartBusinessId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyModifyResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: ApplyModifyResponseBodyModule;
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
      module: ApplyModifyResponseBodyModule,
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

