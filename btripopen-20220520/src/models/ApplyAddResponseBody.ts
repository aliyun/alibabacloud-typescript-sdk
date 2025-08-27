// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyAddResponseBodyModule extends $dara.Model {
  /**
   * @example
   * thirdpart12132
   */
  applyId?: number;
  /**
   * @example
   * thirdpart12132
   */
  thirdpartApplyId?: string;
  /**
   * @example
   * 20220702001
   */
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

export class ApplyAddResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * module。
   */
  module?: ApplyAddResponseBodyModule;
  /**
   * @example
   * C61ECFF6-606B-5F66-B81D-D77369043A5F
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
      module: ApplyAddResponseBodyModule,
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

