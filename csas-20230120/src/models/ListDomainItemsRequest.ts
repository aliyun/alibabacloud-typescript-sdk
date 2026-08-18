// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number in paging.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The domain name value filter. Fuzzy match is supported.
   * 
   * @example
   * example.com
   */
  itemValue?: string;
  /**
   * @remarks
   * The list ID. This is a unique business identifier used for policy references and CRUD operations.
   * 
   * This parameter is required.
   * 
   * @example
   * ladl-6f1exxxxx6ab59
   */
  listId?: string;
  /**
   * @remarks
   * The list type (Blacklist/Whitelist).
   * 
   * This parameter is required.
   * 
   * @example
   * la_domain_white_list
   */
  listType?: string;
  /**
   * @remarks
   * The number of entries per page in paging. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      itemValue: 'ItemValue',
      listId: 'ListId',
      listType: 'ListType',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      itemValue: 'string',
      listId: 'string',
      listType: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

