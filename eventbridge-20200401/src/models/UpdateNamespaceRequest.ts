// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * Data catalog
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * Idempotence token
   * 
   * @example
   * 1e9b8f60-3a2c-4d7e-9f1b-8c3d5e7a2b4f
   */
  clientToken?: string;
  /**
   * @remarks
   * Remark description
   * 
   * @example
   * 更新后的备注
   */
  comment?: string;
  /**
   * @remarks
   * Namespace name
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
      comment: 'Comment',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      clientToken: 'string',
      comment: 'string',
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

