// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteDomainItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the domain name list entries.
   */
  itemIds?: number[];
  /**
   * @remarks
   * The ID of the list, which is a unique business identifier used for policy references and add, delete, and modify operations.
   * 
   * @example
   * ladl-61aae0c0ba715e3b
   */
  listId?: string;
  /**
   * @remarks
   * The type of the list (Blacklist/Whitelist).
   * 
   * @example
   * la_domain_white_list
   */
  listType?: string;
  static names(): { [key: string]: string } {
    return {
      itemIds: 'ItemIds',
      listId: 'ListId',
      listType: 'ListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemIds: { 'type': 'array', 'itemType': 'number' },
      listId: 'string',
      listType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.itemIds)) {
      $dara.Model.validateArray(this.itemIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

