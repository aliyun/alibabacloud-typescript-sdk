// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAxnExtensionBindFixedLineResponseBodyDataExtraaxx } from "./QueryAxnExtensionBindFixedLineResponseBodyDataExtraaxx";


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
   * 接入商自有字段
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

