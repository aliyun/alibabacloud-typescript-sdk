// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleVersionsValueComponentsValuePropertiesValue } from "./ModuleVersionsValueComponentsValuePropertiesValue";


export class ModuleVersionsValueComponentsValueInstancePropertyValues extends $dara.Model {
  /**
   * @remarks
   * The code of the property, which is an internal system identifier.
   * 
   * @example
   * code
   */
  code?: string;
  /**
   * @remarks
   * The code of the property value, which is an internal system value.
   * 
   * @example
   * value
   */
  value?: string;
  /**
   * @remarks
   * The display name of the property, which is visible to users.
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
   * The code of the property, which is an internal system identifier.
   * 
   * @example
   * code
   */
  code?: string;
  /**
   * @remarks
   * The display name of the property, which is visible to users.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The code of the property value, which is an internal system value.
   * 
   * @example
   * value
   */
  value?: string;
  /**
   * @remarks
   * The list of module property values.
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
   * The unique code of the component, which is an internal system identifier.
   * 
   * @example
   * ComponentCode
   */
  componentCode?: string;
  /**
   * @remarks
   * The display name of the component, which is visible to users.
   * 
   * @example
   * ComponentName
   */
  componentName?: string;
  /**
   * @remarks
   * The instance property configuration of the component.
   */
  instanceProperty?: ModuleVersionsValueComponentsValueInstanceProperty[];
  /**
   * @remarks
   * The instance property configuration of the component.
   * 
   * @example
   * {}
   */
  properties?: { [key: string]: ModuleVersionsValueComponentsValuePropertiesValue };
  /**
   * @remarks
   * The status of the module property.
   * 
   * @example
   * 1
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

