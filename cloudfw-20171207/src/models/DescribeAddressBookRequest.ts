// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddressBookRequest extends $dara.Model {
  /**
   * @remarks
   * Filters the query to return only address books that contain the specified port. This parameter is valid only when **GroupType** is set to **port**.
   * 
   * @example
   * 80
   */
  containPort?: string;
  /**
   * @remarks
   * The page number for a paginated query.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The type of the address book.
   * 
   * > If this parameter is not specified, the query returns both IPv4 and ECS tag address books.
   * 
   * @example
   * ip
   */
  groupType?: string;
  /**
   * @remarks
   * The unique identifier of the address book.
   * 
   * @example
   * f04ac7ce-628b-4cb7-be61-310222b7****
   */
  groupUuid?: string;
  /**
   * @remarks
   * The language of the content in the response.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of address books per page.
   * 
   * Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The search keyword for address books.
   * 
   * @example
   * 192.0.XX.XX
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      containPort: 'ContainPort',
      currentPage: 'CurrentPage',
      groupType: 'GroupType',
      groupUuid: 'GroupUuid',
      lang: 'Lang',
      pageSize: 'PageSize',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containPort: 'string',
      currentPage: 'string',
      groupType: 'string',
      groupUuid: 'string',
      lang: 'string',
      pageSize: 'string',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

