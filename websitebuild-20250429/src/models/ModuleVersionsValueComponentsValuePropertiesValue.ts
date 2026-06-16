// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleVersionsValueComponentsValuePropertiesValueValues extends $dara.Model {
  /**
   * @remarks
   * 属性编码（系统内部标识）
   * 
   * @example
   * code
   */
  code?: string;
  /**
   * @remarks
   * 属性值编码（系统内部值）
   * 
   * @example
   * value
   */
  value?: string;
  /**
   * @remarks
   * 属性显示名称（用户可见名称）
   * 
   * @example
   * name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      value: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModuleVersionsValueComponentsValuePropertiesValue extends $dara.Model {
  /**
   * @remarks
   * 属性编码（系统内部标识）
   * 
   * @example
   * code
   */
  code?: string;
  /**
   * @remarks
   * 属性显示名称（用户可见名称）
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * 属性值编码（系统内部值）
   * 
   * @example
   * value
   */
  value?: string;
  /**
   * @remarks
   * 模块属性值列表
   */
  values?: ModuleVersionsValueComponentsValuePropertiesValueValues[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      value: 'Value',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      value: 'string',
      values: { 'type': 'array', 'itemType': ModuleVersionsValueComponentsValuePropertiesValueValues },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

