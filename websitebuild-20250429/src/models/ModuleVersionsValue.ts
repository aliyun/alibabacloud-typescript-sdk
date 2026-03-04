// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleVersionsValueComponentsValue } from "./ModuleVersionsValueComponentsValue";


export class ModuleVersionsValue extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * code
   */
  code?: string;
  /**
   * @remarks
   * name
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * components
   */
  components?: { [key: string]: ModuleVersionsValueComponentsValue };
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      components: 'Components',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      components: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleVersionsValueComponentsValue },
    };
  }

  validate() {
    if(this.components) {
      $dara.Model.validateMap(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

