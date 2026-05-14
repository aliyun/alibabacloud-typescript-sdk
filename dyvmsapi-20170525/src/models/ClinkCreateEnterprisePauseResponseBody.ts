// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkCreateEnterprisePauseResponseBodyDataEnterprisePause extends $dara.Model {
  /**
   * @remarks
   * 默认状态，0：不是；1：是
   * 
   * @example
   * 1
   */
  isDefault?: number;
  /**
   * @remarks
   * 休息状态，0：不是；1：是
   * 
   * @example
   * 1
   */
  isRest?: string;
  /**
   * @remarks
   * 置忙状态描述（不超4个字符）
   * 
   * @example
   * xxx
   */
  pauseStatus?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      isRest: 'IsRest',
      pauseStatus: 'PauseStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'number',
      isRest: 'string',
      pauseStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkCreateEnterprisePauseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 请求标识
   * 
   * @example
   * 示例值
   */
  clinkRequestId?: string;
  /**
   * @remarks
   * 企业置忙状态
   */
  enterprisePause?: ClinkCreateEnterprisePauseResponseBodyDataEnterprisePause;
  static names(): { [key: string]: string } {
    return {
      clinkRequestId: 'ClinkRequestId',
      enterprisePause: 'EnterprisePause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clinkRequestId: 'string',
      enterprisePause: ClinkCreateEnterprisePauseResponseBodyDataEnterprisePause,
    };
  }

  validate() {
    if(this.enterprisePause && typeof (this.enterprisePause as any).validate === 'function') {
      (this.enterprisePause as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkCreateEnterprisePauseResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkCreateEnterprisePauseResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 6086693B-2250-17CE-A41F-06259AB6DB1B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: ClinkCreateEnterprisePauseResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

