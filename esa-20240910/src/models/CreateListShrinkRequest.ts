// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateListShrinkRequest extends $dara.Model {
  /**
   * @example
   * a custom list
   */
  description?: string;
  itemsShrink?: string;
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

