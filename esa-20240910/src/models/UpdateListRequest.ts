// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a custom list
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 40000001
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  items?: string[];
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
      id: 'Id',
      items: 'Items',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      items: { 'type': 'array', 'itemType': 'string' },
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

