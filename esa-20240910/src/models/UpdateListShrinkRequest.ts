// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The updated description of the list.
   * 
   * This parameter is required.
   * 
   * @example
   * a custom list
   */
  description?: string;
  /**
   * @remarks
   * The ID of the custom list. You can obtain the ID by calling the [ListLists](https://help.aliyun.com/document_detail/2850217.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 40000001
   */
  id?: number;
  /**
   * @remarks
   * The updated items in the list. The value is a JSON array string, such as `["1.1.1.1","2.2.2.2"]`.
   * 
   * **Full overwrite semantics**: The specified Items completely overwrite the existing list items instead of being appended to them.
   * 
   * > ⚠️ **If you do not specify this parameter or specify an empty value, the existing list items are cleared**. To retain the existing items and append new ones, call the GetList operation to retrieve the existing Items, concatenate the new items, and then submit them all at once.
   * 
   * **Item format**: The format depends on the Kind specified when the list was created. The UpdateList operation does not support modifying the Kind.
   * - If Kind is set to ip: Each item must be a valid IP address or CIDR block. If an item is invalid, the WrongValueMatched error is returned.
   * - For other Kind values: The item format follows the specified conventions. The number of items is limited by the tenant quota NumberItemsPerList. This limit does not apply to the ip kind.
   * 
   * This parameter is required.
   * 
   * @example
   * a custom list
   */
  itemsShrink?: string;
  /**
   * @remarks
   * The updated name of the custom list. This parameter is required if you want to update the name. If you do not specify this parameter, the original name is retained.
   * 
   * **Naming rules**: The name can contain only letters, digits, and underscores (`^\\w{1,64}$`) and must be 1 to 64 characters in length.
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

