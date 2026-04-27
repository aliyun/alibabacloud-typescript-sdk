// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudInterruptIvrRequest extends $dara.Model {
  /**
   * @remarks
   * 根据变量名去通道变量中取对应的变量值
   * 
   * @example
   * name1
   */
  checkName?: string;
  /**
   * @remarks
   * 当checkName代表的变量值与checkValue一致，才打断
   * 
   * @example
   * value1
   */
  checkValue?: string;
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
   * 通话唯一标识；从通道唯一标识
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789
   */
  uniqueId?: string;
  /**
   * @remarks
   * 自定义字段；json字符串
   * 
   * @example
   * {}
   */
  userField?: string;
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkValue: 'CheckValue',
      enterpriseId: 'EnterpriseId',
      uniqueId: 'UniqueId',
      userField: 'UserField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkValue: 'string',
      enterpriseId: 'number',
      uniqueId: 'string',
      userField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

