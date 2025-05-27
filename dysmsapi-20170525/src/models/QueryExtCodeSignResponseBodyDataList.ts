// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryExtCodeSignResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 是否可回收
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * 扩展码A3
   * 
   * @example
   * 01
   */
  extCode?: string;
  /**
   * @remarks
   * 近1个月发送成功条数（只读）
   * 
   * @example
   * 69
   */
  sendCount?: number;
  /**
   * @remarks
   * 签名
   * 
   * @example
   * 示例值示例值
   */
  signName?: string;
  /**
   * @remarks
   * 来源
   * 
   * @example
   * 示例值示例值示例值
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      extCode: 'ExtCode',
      sendCount: 'SendCount',
      signName: 'SignName',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      extCode: 'string',
      sendCount: 'number',
      signName: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

