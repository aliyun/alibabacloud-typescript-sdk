// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteDomainItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of domain name list entries.
   */
  itemIds?: number[];
  /**
   * @remarks
   * The list ID. This is the unique business identifier used for policy references and CRUD operations.
   * 
   * @example
   * ladl-61aae0c0ba715e3b
   */
  listId?: string;
  /**
   * @remarks
   * The list type (Blacklist/Whitelist).
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

