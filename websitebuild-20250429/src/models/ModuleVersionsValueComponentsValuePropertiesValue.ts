// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleVersionsValueComponentsValuePropertiesValueValues extends $dara.Model {
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

export class ModuleVersionsValueComponentsValuePropertiesValue extends $dara.Model {
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

