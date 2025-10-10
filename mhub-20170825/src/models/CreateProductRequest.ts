// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProductRequest extends $dara.Model {
  /**
   * @example
   * AAA
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

