// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCatalogRequest extends $dara.Model {
  /**
   * @remarks
   * Idempotency token
   * 
   * @example
   * 1e9b8f60-3a2c-4d7e-9f1b-8c3d5e7a2b4f
   */
  clientToken?: string;
  /**
   * @remarks
   * Data catalog name
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

