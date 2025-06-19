// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCatalogRequest extends $dara.Model {
  /**
   * @example
   * catalog_demo
   */
  name?: string;
  optimizationConfig?: { [key: string]: string };
  options?: { [key: string]: string };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      optimizationConfig: 'optimizationConfig',
      options: 'options',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      optimizationConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(this.optimizationConfig) {
      $dara.Model.validateMap(this.optimizationConfig);
    }
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

