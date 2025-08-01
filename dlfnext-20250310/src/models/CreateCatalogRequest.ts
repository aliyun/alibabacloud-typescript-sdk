// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCatalogRequest extends $dara.Model {
  /**
   * @example
   * catalog_demo
   */
  name?: string;
  options?: { [key: string]: string };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      options: 'options',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

