// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudAgentSetUserDataRequest extends $dara.Model {
  /**
   * @remarks
   * 座席工号；取值3-10位正整数
   * 
   * This parameter is required.
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 随路数据方向；取值说明：1： 座席侧，2： 非座席侧
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  direction?: number;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * json格式字符串,传入的值会打入通道变量,格式：json字符串{"key":"value"} 随路数据数据格式：key=value,不支持数组，嵌套。
   * 
   * This parameter is required.
   * 
   * @example
   * {"key":"value"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      cno: 'Cno',
      direction: 'Direction',
      enterpriseId: 'EnterpriseId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cno: 'string',
      direction: 'number',
      enterpriseId: 'number',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

