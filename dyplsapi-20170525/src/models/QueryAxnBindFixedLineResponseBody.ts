// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAxnBindFixedLineResponseBodyDataExtra extends $dara.Model {
  /**
   * @remarks
   * A通过X呼叫，即A主叫X，仅下列值有效。默认是0。 0：不能外呼 1：接续最近的N号码 2：回拨固定号码：telB
   * 
   * @example
   * 1
   */
  callback?: string;
  /**
   * @remarks
   * 录音控制，仅下列值有效。默认是0（不开通录音功能）。 0：不录音 1：录音
   * 
   * @example
   * 1
   */
  callrecording?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      callrecording: 'Callrecording',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'string',
      callrecording: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAxnBindFixedLineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 接通前放音啊编码
   * 
   * @example
   * 10001,10002,10003
   */
  anucode?: string;
  /**
   * @remarks
   * 被叫侧放音编码
   * 
   * @example
   * 10001,10002
   */
  anucodecalled?: string;
  /**
   * @remarks
   * 隐私号码区号
   * 
   * @example
   * 010
   */
  areacode?: string;
  /**
   * @remarks
   * 过期时间
   * 
   * @example
   * 60
   */
  expiration?: string;
  /**
   * @remarks
   * 额外字段
   */
  extra?: QueryAxnBindFixedLineResponseBodyDataExtra;
  /**
   * @remarks
   * 接入商自有字段，最大250字符长度
   * 
   * @example
   * 12444
   */
  remark?: string;
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
   * 格式为yyyyMMddHHmmss。时间采用北京时间，24小时制。
   * 
   * @example
   * 20250421141723
   */
  subts?: string;
  /**
   * @remarks
   * 接通后主叫侧放音编码
   * 
   * @example
   * 10001,10002
   */
  TAnucodeConnect?: string;
  /**
   * @remarks
   * A号码
   * 
   * @example
   * 15500001111
   */
  telA?: string;
  /**
   * @remarks
   * N号码
   * 
   * @example
   * 15500002222
   */
  telB?: string;
  /**
   * @remarks
   * 隐私号码
   * 
   * @example
   * 057112345678
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      anucode: 'Anucode',
      anucodecalled: 'Anucodecalled',
      areacode: 'Areacode',
      expiration: 'Expiration',
      extra: 'Extra',
      remark: 'Remark',
      subid: 'Subid',
      subts: 'Subts',
      TAnucodeConnect: 'TAnucodeConnect',
      telA: 'TelA',
      telB: 'TelB',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anucode: 'string',
      anucodecalled: 'string',
      areacode: 'string',
      expiration: 'string',
      extra: QueryAxnBindFixedLineResponseBodyDataExtra,
      remark: 'string',
      subid: 'string',
      subts: 'string',
      TAnucodeConnect: 'string',
      telA: 'string',
      telB: 'string',
      telX: 'string',
    };
  }

  validate() {
    if(this.extra && typeof (this.extra as any).validate === 'function') {
      (this.extra as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAxnBindFixedLineResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 响应码
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * 绑定对象
   */
  data?: QueryAxnBindFixedLineResponseBodyData[];
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
   * E8B9C3ED-D9BD-5E27-9588-6D84D3070160
   */
  requestId?: string;
  /**
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
      data: { 'type': 'array', 'itemType': QueryAxnBindFixedLineResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

