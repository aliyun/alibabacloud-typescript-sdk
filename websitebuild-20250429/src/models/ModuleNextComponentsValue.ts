// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleNextComponentsValuePropertiesValue } from "./ModuleNextComponentsValuePropertiesValue";


export class ModuleNextComponentsValueInstancePropertyValues extends $dara.Model {
  /**
   * @remarks
   * Property encoding (system internal identity)
   * 
   * @example
   * placeholder
   */
  code?: string;
  /**
   * @remarks
   * Attribute Value encoding (internal System value)
   * 
   * @example
   * placeholder
   */
  value?: string;
  /**
   * @remarks
   * Property display name (User-visible Name)
   * 
   * @example
   * placeholder
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

export class ModuleNextComponentsValueInstanceProperty extends $dara.Model {
  /**
   * @remarks
   * Property encoding (system internal identity)
   * 
   * @example
   * placeholder
   */
  code?: string;
  /**
   * @remarks
   * Property display name (User-visible Name)
   * 
   * @example
   * placeholder
   */
  name?: string;
  /**
   * @remarks
   * Attribute Value encoding (internal System value)
   * 
   * @example
   * placeholder
   */
  value?: string;
  /**
   * @remarks
   * List of module Attribute Values
   */
  values?: ModuleNextComponentsValueInstancePropertyValues[];
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
      values: { 'type': 'array', 'itemType': ModuleNextComponentsValueInstancePropertyValues },
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

export class ModuleNextComponentsValue extends $dara.Model {
  /**
   * @remarks
   * Unique widget encoding (system internal identity)
   * 
   * @example
   * placeholder
   */
  code?: string;
  /**
   * @remarks
   * Widget display name (User-visible name)
   * 
   * @example
   * placeholder
   */
  name?: string;
  /**
   * @remarks
   * Widget instance property configuration
   */
  instanceProperty?: ModuleNextComponentsValueInstanceProperty[];
  /**
   * @remarks
   * widget instance attribute configuration
   */
  properties?: { [key: string]: ModuleNextComponentsValuePropertiesValue };
  /**
   * @remarks
   * Module attribute status
   * 
   * @example
   * placeholder
   */
  moduleAttrStatus?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      instanceProperty: 'InstanceProperty',
      properties: 'Properties',
      moduleAttrStatus: 'ModuleAttrStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      instanceProperty: { 'type': 'array', 'itemType': ModuleNextComponentsValueInstanceProperty },
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleNextComponentsValuePropertiesValue },
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

