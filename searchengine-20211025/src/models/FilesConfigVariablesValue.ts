// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilesConfigVariablesValue extends $dara.Model {
  /**
   * @remarks
   * 变量描述
   * 
   * @example
   * 自定义变量
   */
  description?: string;
  /**
   * @remarks
   * 是否可被用户修改
   * 
   * @example
   * true
   */
  disableModify?: boolean;
  /**
   * @remarks
   * 变量是否被修改过
   * 
   * @example
   * true
   */
  isModify?: boolean;
  /**
   * @remarks
   * 类型：普通变量-NORMAL； function变量-FUNCTION
   * 
   * @example
   * NORMAL
   */
  type?: string;
  /**
   * @remarks
   * 变量值
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      disableModify: 'disableModify',
      isModify: 'isModify',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      disableModify: 'boolean',
      isModify: 'boolean',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

