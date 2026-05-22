// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the list that you want to create.
   * 
   * @example
   * a custom list
   */
  description?: string;
  /**
   * @remarks
   * The items in the list that you want to create.
   * 
   * @example
   * a custom list
   */
  itemsShrink?: string;
  /**
   * @remarks
   * The type of the list that you want to create.
   * 
   * @example
   * ip
   */
  kind?: string;
  /**
   * @remarks
   * The name of the list that you want to create.
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

