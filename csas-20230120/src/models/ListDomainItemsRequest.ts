// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query.
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
   * The list ID. This is a unique business identifier used for policy references and create, delete, and update operations.
   * 
   * This parameter is required.
   * 
   * @example
   * ladl-6f1exxxxx6ab59
   */
  listId?: string;
  /**
   * @remarks
   * The list type (Blacklist/Whitelist). Valid values:
   * - la_domain_white_list: domain name whitelist.
   * - la_domain_black_list: domain name blacklist.
   * 
   * This parameter is required.
   * 
   * @example
   * la_domain_white_list
   */
  listType?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Valid values: 1 to 1000.
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

