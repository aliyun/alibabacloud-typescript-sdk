// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleDataComponentsValuePropertiesValue } from "./ModuleDataComponentsValuePropertiesValue";


export class ModuleDataComponentsValueInstancePropertyValues extends $dara.Model {
  /**
   * @example
   * placeholder
   */
  code?: string;
  /**
   * @example
   * placeholder
   */
  value?: string;
  /**
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

export class ModuleDataComponentsValueInstanceProperty extends $dara.Model {
  /**
   * @example
   * placeholder
   */
  code?: string;
  /**
   * @example
   * placeholder
   */
  name?: string;
  /**
   * @example
   * placeholder
   */
  value?: string;
  values?: ModuleDataComponentsValueInstancePropertyValues[];
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
      values: { 'type': 'array', 'itemType': ModuleDataComponentsValueInstancePropertyValues },
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

export class ModuleDataComponentsValue extends $dara.Model {
  /**
   * @example
   * placeholder
   */
  code?: string;
  /**
   * @example
   * placeholder
   */
  name?: string;
  instanceProperty?: ModuleDataComponentsValueInstanceProperty[];
  properties?: { [key: string]: ModuleDataComponentsValuePropertiesValue };
  /**
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
      instanceProperty: { 'type': 'array', 'itemType': ModuleDataComponentsValueInstanceProperty },
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleDataComponentsValuePropertiesValue },
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

