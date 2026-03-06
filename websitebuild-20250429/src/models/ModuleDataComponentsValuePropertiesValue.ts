// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleDataComponentsValuePropertiesValueValues extends $dara.Model {
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

export class ModuleDataComponentsValuePropertiesValue extends $dara.Model {
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

