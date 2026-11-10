// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateListRequest extends $dara.Model {
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
   * **Full overwrite semantics**: The specified `Items` completely overwrites the original list content instead of appending to it.
   * 
   * > ⚠️ **If this parameter is not specified or is left empty, the original list content is cleared**. To retain the original items and append new ones, call `GetList` to retrieve the existing `Items`, concatenate them, and submit them at once.
   * 
   * **Element format**: The format depends on the `Kind` specified when the list was created. UpdateList does not support modifying the kind.
   * - Kind = `ip`: Each element must be a valid IP address or CIDR block. If an element is invalid, `WrongValueMatched` is returned.
   * - Other kinds: The element format is subject to conventions, and the number of elements is limited by the tenant quota `NumberItemsPerList`. Only the `ip` kind is not subject to this limit.
   * 
   * This parameter is required.
   * 
   * @example
   * a custom list
   */
  items?: string[];
  /**
   * @remarks
   * The updated name of the custom list. If this parameter is not specified, the original name is retained.
   * 
   * **Naming rules**: Only letters, digits, and underscores are supported. The regular expression is `^\\w{1,64}$`, and the length is 1 to 64 characters.
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

