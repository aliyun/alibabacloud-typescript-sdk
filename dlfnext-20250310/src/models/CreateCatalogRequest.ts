// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCatalogRequest extends $dara.Model {
  isShared?: boolean;
  /**
   * @example
   * catalog_demo
   */
  name?: string;
  options?: { [key: string]: string };
  shareId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      isShared: 'isShared',
      name: 'name',
      options: 'options',
      shareId: 'shareId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isShared: 'boolean',
      name: 'string',
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      shareId: 'string',
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

