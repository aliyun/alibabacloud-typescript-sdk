// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateListRequest extends $dara.Model {
  /**
   * @example
   * a custom list
   */
  description?: string;
  items?: string[];
  /**
   * @example
   * ip
   */
  kind?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      items: 'Items',
      kind: 'Kind',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      items: { 'type': 'array', 'itemType': 'string' },
      kind: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

