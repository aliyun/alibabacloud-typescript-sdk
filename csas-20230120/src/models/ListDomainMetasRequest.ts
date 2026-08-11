// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainMetasRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether to include system default template lists.
   * 
   * @example
   * false
   */
  defaultTemplate?: boolean;
  /**
   * @remarks
   * The list type (blacklist/whitelist).
   * 
   * This parameter is required.
   * 
   * @example
   * la_domain_white_list
   */
  listType?: string;
  /**
   * @remarks
   * The list name. Fuzzy match is supported.
   * 
   * @example
   * OfficeDomains
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Settings: 1 to 1000. Paging is used to return results.
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
      defaultTemplate: 'DefaultTemplate',
      listType: 'ListType',
      name: 'Name',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      defaultTemplate: 'boolean',
      listType: 'string',
      name: 'string',
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

