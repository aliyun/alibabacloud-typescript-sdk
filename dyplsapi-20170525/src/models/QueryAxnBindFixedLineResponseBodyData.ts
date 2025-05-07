// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAxnBindFixedLineResponseBodyDataExtra } from "./QueryAxnBindFixedLineResponseBodyDataExtra";


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
   * 接入商自有字段，最大100字符长度
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

