// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the list, which provides details about the custom list.
   * 
   * @example
   * a custom list
   */
  description?: string;
  /**
   * @remarks
   * The content of the list, which provides specific data for the list items.
   * 
   * @example
   * a custom list
   */
  itemsShrink?: string;
  /**
   * @remarks
   * The kind of the list, which specifies the type of the custom list.
   * 
   * @example
   * ip
   */
  kind?: string;
  /**
   * @remarks
   * The name of the custom list.
   * 
   * **Naming rules**: Only letters, digits, and underscores are supported. The value must match the regular expression `^\\w{1,64}$` and be 1 to 64 characters in length.
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
      itemsShrink: 'Items',
      kind: 'Kind',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      itemsShrink: 'string',
      kind: 'string',
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

