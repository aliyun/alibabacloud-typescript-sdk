// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the list.
   * 
   * This parameter is required.
   * 
   * @example
   * a custom list
   */
  description?: string;
  /**
   * @remarks
   * The ID of the custom list, which can be obtained by calling the [ListLists](https://help.aliyun.com/document_detail/2850217.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 40000001
   */
  id?: number;
  /**
   * @remarks
   * The items in the updated list. The value is a JSON array.
   * 
   * This parameter is required.
   * 
   * @example
   * a custom list
   */
  itemsShrink?: string;
  /**
   * @remarks
   * The new name of the list.
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

