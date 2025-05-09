// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCatalogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dlf-catalog:123456XXX:test_catalog
   * starrocks-catalog:c-abc123xxx:default_catalog
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

