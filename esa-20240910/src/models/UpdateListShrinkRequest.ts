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
   * The new list content. The value is a JSON array string, for example, `["1.1.1.1","2.2.2.2"]`.
   * 
   * **Full overwrite semantics**: The specified `Items` value completely overwrites the existing list content instead of appending to it.
   * 
   * > ⚠️ **If this parameter is not specified or is set to an empty value, the existing list content is cleared**. To retain existing items and append new ones, call `GetList` to retrieve the current `Items`, merge them, and then submit the combined list.
   * 
   * **Element format**: The format depends on the `Kind` value specified when the list was created. UpdateList does not support modifying Kind.
   * - Kind = `ip`: Each element must be a valid IP address or CIDR block. If an element is invalid, `WrongValueMatched` is returned.
   * - Other Kind values: The element format is subject to the relevant specifications. The number of elements is limited by the tenant quota `NumberItemsPerList`. This limit does not apply to the `ip` Kind.
   * 
   * This parameter is required.
   * 
   * @example
   * a custom list
   */
  itemsShrink?: string;
  /**
   * @remarks
   * The new name of the custom list. If this parameter is not specified, the original name is retained.
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

