// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Namespace extends $dara.Model {
  /**
   * @remarks
   * The name of the data catalog to which the namespace belongs
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The description information of the namespace
   * 
   * @example
   * 测试命名空间
   */
  comment?: string;
  /**
   * @remarks
   * The unique identifier name of the namespace
   * 
   * @example
   * my_namespace
   */
  name?: string;
  /**
   * @remarks
   * The extended properties of the namespace
   * 
   * @example
   * {"key":"value"}
   */
  properties?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      comment: 'Comment',
      name: 'Name',
      properties: 'properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      comment: 'string',
      name: 'string',
      properties: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

