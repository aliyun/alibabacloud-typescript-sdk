// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAxnExtensionBindFixedLineResponseBodyDataExtraaxx extends $dara.Model {
  /**
   * @remarks
   * 回拨控制
   * 
   * @example
   * 示例值示例值
   */
  callback?: string;
  /**
   * @remarks
   * 录音控制
   * 
   * @example
   * 示例值示例值
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

export class QueryAxnExtensionBindFixedLineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 放音编码
   * 
   * @example
   * 10001,10002,10003
   */
  anucode?: string;
  /**
   * @remarks
   * 被叫侧放音
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
   * 10
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
  extraaxx?: QueryAxnExtensionBindFixedLineResponseBodyDataExtraaxx;
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
   * 绑定ID
   * 
   * @example
   * 可参考绑定响应
   */
  subid?: string;
  /**
   * @remarks
   * 绑定时间
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
   * 小号号码
   * 
   * @example
   * 19700002222
   */
  telX?: string;
  /**
   * @remarks
   * 分机号
   * 
   * @example
   * 1009
   */
  telXext?: string;
  static names(): { [key: string]: string } {
    return {
      anucode: 'Anucode',
      anucodecalled: 'Anucodecalled',
      areacode: 'Areacode',
      expiration: 'Expiration',
      extraaxx: 'Extraaxx',
      remark: 'Remark',
      subid: 'Subid',
      subts: 'Subts',
      TAnucodeConnect: 'TAnucodeConnect',
      telA: 'TelA',
      telX: 'TelX',
      telXext: 'TelXext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anucode: 'string',
      anucodecalled: 'string',
      areacode: 'string',
      expiration: 'string',
      extraaxx: QueryAxnExtensionBindFixedLineResponseBodyDataExtraaxx,
      remark: 'string',
      subid: 'string',
      subts: 'string',
      TAnucodeConnect: 'string',
      telA: 'string',
      telX: 'string',
      telXext: 'string',
    };
  }

  validate() {
    if(this.extraaxx && typeof (this.extraaxx as any).validate === 'function') {
      (this.extraaxx as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAxnExtensionBindFixedLineResponseBody extends $dara.Model {
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
   * 查询绑定对象集合，具体对象字段见绑定请求
   */
  data?: QueryAxnExtensionBindFixedLineResponseBodyData[];
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
   * 74EFA0E8-CFCA-54D9-BFE5-904F9FA88DBD
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
      data: { 'type': 'array', 'itemType': QueryAxnExtensionBindFixedLineResponseBodyData },
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

