// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyVerifySchemeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 方案Code
   * 
   * @example
   * FC100********212
   */
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      sceneCode: 'SceneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyVerifySchemeResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 错误码
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 结果数据
   */
  data?: CopyVerifySchemeResponseBodyData;
  /**
   * @remarks
   * 错误消息
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @example
   * 2E7CA885-8D97-C497-A02C-2D31214D3285
   */
  requestId?: string;
  /**
   * @remarks
   * 是否成功
   * 
   * @example
   * false
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
      data: CopyVerifySchemeResponseBodyData,
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

