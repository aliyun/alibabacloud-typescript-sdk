// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCatalogRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to share the catalog.
   * 
   * @example
   * false
   */
  isShared?: boolean;
  /**
   * @remarks
   * The catalog name.
   * 
   * @example
   * catalog_demo
   */
  name?: string;
  /**
   * @remarks
   * The configuration options for the catalog.
   */
  options?: { [key: string]: string };
  /**
   * @remarks
   * The share ID.
   * 
   * @example
   * share-xxxx
   */
  shareId?: string;
  /**
   * @remarks
   * The catalog type.
   * 
   * @example
   * PAIMON
   */
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

