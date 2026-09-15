// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The data catalog to which the namespace belongs.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * 1e9b8f60-3a2c-4d7e-9f1b-8c3d5e7a2b4f
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * my_namespace
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      clientToken: 'ClientToken',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
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

