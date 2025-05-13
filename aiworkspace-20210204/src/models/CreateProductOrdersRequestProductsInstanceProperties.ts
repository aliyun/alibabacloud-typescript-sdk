// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProductOrdersRequestProductsInstanceProperties extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * @example
   * commodity_type
   */
  code?: string;
  /**
   * @remarks
   * The property name.
   */
  name?: string;
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * oss
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

