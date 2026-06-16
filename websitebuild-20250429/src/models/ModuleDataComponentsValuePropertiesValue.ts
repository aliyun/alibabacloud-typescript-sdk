// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleDataComponentsValuePropertiesValueValues extends $dara.Model {
  /**
   * @remarks
   * Property code (internal system identifier)
   * 
   * @example
   * placeholder
   */
  code?: string;
  /**
   * @remarks
   * Property value code (internal system value)
   * 
   * @example
   * placeholder
   */
  value?: string;
  /**
   * @remarks
   * Property display name (user-visible name)
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

export class ModuleDataComponentsValuePropertiesValue extends $dara.Model {
  /**
   * @remarks
   * Property code (internal system identifier)
   * 
   * @example
   * placeholder
   */
  code?: string;
  /**
   * @remarks
   * Property display name (user-visible name)
   * 
   * @example
   * placeholder
   */
  name?: string;
  /**
   * @remarks
   * Property value code (internal system value)
   * 
   * @example
   * placeholder
   */
  value?: string;
  /**
   * @remarks
   * Module property value list
   */
  values?: ModuleDataComponentsValuePropertiesValueValues[];
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
      values: { 'type': 'array', 'itemType': ModuleDataComponentsValuePropertiesValueValues },
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

