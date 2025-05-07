// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAxbBindFixedLineResponseBodyDataExtra } from "./QueryAxbBindFixedLineResponseBodyDataExtra";


export class QueryAxbBindFixedLineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 接通前放音编码，放音编码必须包含3个场景的编码。按照“B->X,A->X,其他号码->X”的顺序填写编码，编码之间以逗号分隔。  比如：“1,2,3”表示B->X放音编号为1，A->X放音编号为2， 其他号码->X放音编号为3
   * 
   * @example
   * 10001,10002,10003
   */
  anucode?: string;
  /**
   * @remarks
   * 接通后被叫侧放音编码
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
   * 绑定过期时间
   * 
   * @example
   * 60
   */
  expiration?: string;
  /**
   * @remarks
   * 额外字段
   */
  extra?: QueryAxbBindFixedLineResponseBodyDataExtra;
  /**
   * @remarks
   * 接入商自有字段，最大100字符长度
   * 
   * @example
   * 19394
   */
  remark?: string;
  /**
   * @remarks
   * 绑定id
   * 
   * @example
   * GHX0534X202504221531579290029-2-1-aliaxb
   */
  subid?: string;
  /**
   * @remarks
   * 绑定时间，格式为yyyyMMddHHmmss。时间采用北京时间，24小时制。
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
   * 示例值示例值
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
   * B号码
   * 
   * @example
   * 15500002222
   */
  telB?: string;
  /**
   * @remarks
   * 小号号码
   * 
   * @example
   * 19700002222
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
      extra: QueryAxbBindFixedLineResponseBodyDataExtra,
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

