// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MealApplyAddResponseBodyModule extends $dara.Model {
  thirdPartApplyId?: string;
  static names(): { [key: string]: string } {
    return {
      thirdPartApplyId: 'third_part_apply_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thirdPartApplyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MealApplyAddResponseBody extends $dara.Model {
  code?: number;
  message?: string;
  module?: MealApplyAddResponseBodyModule;
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
      module: MealApplyAddResponseBodyModule,
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

