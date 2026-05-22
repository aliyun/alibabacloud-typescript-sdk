// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateListShrinkRequest extends $dara.Model {
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
  itemsShrink?: string;
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
      itemsShrink: 'Items',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      itemsShrink: 'string',
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

