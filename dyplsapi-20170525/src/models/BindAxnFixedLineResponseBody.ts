// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAxnFixedLineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 绑定id
   * 
   * @example
   * GHX0534X202504221531579290029-2-1-aliaxn
   */
  subid?: string;
  /**
   * @remarks
   * 隐私号码
   * 
   * @example
   * 0571409312
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      subid: 'Subid',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subid: 'string',
      telX: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnFixedLineResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 响应码 0：成功，其它失败，具体见文档
   * 
   * @example
   * 0
   */
  code?: string;
  data?: BindAxnFixedLineResponseBodyData;
  /**
   * @remarks
   * 描述信息
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 4D690962-08CE-5D38-A65A-AB247D7DF7A2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: BindAxnFixedLineResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

