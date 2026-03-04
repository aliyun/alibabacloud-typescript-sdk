// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleVersionsValueComponentsValuePropertiesValue } from "./ModuleVersionsValueComponentsValuePropertiesValue";


export class ModuleVersionsValueComponentsValueInstancePropertyValues extends $dara.Model {
  /**
   * @example
   * code
   */
  code?: string;
  /**
   * @example
   * value
   */
  value?: string;
  /**
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
   * @example
   * code
   */
  code?: string;
  /**
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * value
   */
  value?: string;
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
   * @example
   * ComponentCode
   */
  componentCode?: string;
  /**
   * @example
   * ComponentName
   */
  componentName?: string;
  instanceProperty?: ModuleVersionsValueComponentsValueInstanceProperty[];
  properties?: { [key: string]: ModuleVersionsValueComponentsValuePropertiesValue };
  /**
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

