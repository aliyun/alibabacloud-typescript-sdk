// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleVersionsValueComponentsValuePropertiesValue } from "./ModuleVersionsValueComponentsValuePropertiesValue";


export class ModuleVersionsValueComponentsValueInstancePropertyValues extends $dara.Model {
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

export class ModuleVersionsValueComponentsValueInstanceProperty extends $dara.Model {
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
  values?: ModuleVersionsValueComponentsValueInstancePropertyValues[];
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
      values: { 'type': 'array', 'itemType': ModuleVersionsValueComponentsValueInstancePropertyValues },
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

export class ModuleVersionsValueComponentsValue extends $dara.Model {
  /**
   * @remarks
   * 组件唯一编码（系统内部标识）
   * 
   * @example
   * ComponentCode
   */
  componentCode?: string;
  /**
   * @remarks
   * 组件显示名称（用户可见名称）
   * 
   * @example
   * ComponentName
   */
  componentName?: string;
  /**
   * @remarks
   * 组件实例属性配置
   */
  instanceProperty?: ModuleVersionsValueComponentsValueInstanceProperty[];
  /**
   * @remarks
   * 组件实例属性配置
   */
  properties?: { [key: string]: ModuleVersionsValueComponentsValuePropertiesValue };
  /**
   * @remarks
   * 模块属性状态
   * 
   * @example
   * attr
   */
  moduleAttrStatus?: number;
  static names(): { [key: string]: string } {
    return {
      componentCode: 'ComponentCode',
      componentName: 'ComponentName',
      instanceProperty: 'InstanceProperty',
      properties: 'Properties',
      moduleAttrStatus: 'ModuleAttrStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      componentName: 'string',
      instanceProperty: { 'type': 'array', 'itemType': ModuleVersionsValueComponentsValueInstanceProperty },
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleVersionsValueComponentsValuePropertiesValue },
      moduleAttrStatus: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceProperty)) {
      $dara.Model.validateArray(this.instanceProperty);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

