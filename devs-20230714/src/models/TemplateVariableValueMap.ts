// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TemplateVariableValueMap extends $dara.Model {
  services?: { [key: string]: {[key: string]: any} };
  /**
   * @example
   * {"TEST_KEY":"new_value"}
   */
  shared?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      services: 'services',
      shared: 'shared',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      shared: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.services) {
      $dara.Model.validateMap(this.services);
    }
    if(this.shared) {
      $dara.Model.validateMap(this.shared);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

