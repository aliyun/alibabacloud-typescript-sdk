// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateListRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the custom list. This parameter provides detailed information about the custom list.
   * 
   * @example
   * a custom list
   */
  description?: string;
  /**
   * @remarks
   * The list items. This parameter provides the specific item data for the list.
   * 
   * @example
   * a custom list
   */
  items?: string[];
  /**
   * @remarks
   * The kind of the custom list. This parameter specifies the type of the custom list.
   * 
   * @example
   * ip
   */
  kind?: string;
  /**
   * @remarks
   * The name of the custom list.
   * 
   * **Naming rules**: Only letters, digits, and underscores are supported (`^\\w{1,64}$`). The name must be 1 to 64 characters in length.
   * 
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

