// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleVersionsValueComponentsValuePropertiesValue } from "./ModuleVersionsValueComponentsValuePropertiesValue";


export class ModuleVersionsValueComponentsValueInstancePropertyValues extends $dara.Model {
  /**
   * @remarks
   * Property encoding (system internal identity)
   * 
   * @example
   * code
   */
  code?: string;
  /**
   * @remarks
   * Attribute Value encoding (internal System value)
   * 
   * @example
   * value
   */
  value?: string;
  /**
   * @remarks
   * Property display name (User-visible name)
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
   * Property encoding (system internal identity)
   * 
   * @example
   * code
   */
  code?: string;
  /**
   * @remarks
   * Attribute display name (user-visible name)
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * Attribute Value encoding (internal System value)
   * 
   * @example
   * value
   */
  value?: string;
  /**
   * @remarks
   * List of module Attribute Values
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
   * Unique component code (system internal identity)
   * 
   * @example
   * ComponentCode
   */
  componentCode?: string;
  /**
   * @remarks
   * Widget display name (user-visible name)
   * 
   * @example
   * ComponentName
   */
  componentName?: string;
  /**
   * @remarks
   * Component instance attribute configuration
   */
  instanceProperty?: ModuleVersionsValueComponentsValueInstanceProperty[];
  /**
   * @remarks
   * Widget instance attribute configuration
   */
  properties?: { [key: string]: ModuleVersionsValueComponentsValuePropertiesValue };
  /**
   * @remarks
   * Module property status
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

