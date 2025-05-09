// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddressBookRequest extends $dara.Model {
  /**
   * @remarks
   * The port that is included in the address book. This parameter takes effect only when the **GroupType** parameter is set to **port**.
   * 
   * @example
   * 80
   */
  containPort?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The type of the address book. Valid values:
   * 
   * *   **ip**: IP address book
   * *   **domain**: domain address book
   * *   **port**: port address book
   * *   **tag**: Elastic Compute Service (ECS) tag-based address book
   * *   **allCloud**: cloud service address book
   * *   **threat**: threat intelligence address book
   * *   **ipv6**: IPv6 address book
   * >  If you do not specify a type, the domain address books and ECS tag-based address books are queried.
   * 
   * @example
   * ip
   */
  groupType?: string;
  /**
   * @remarks
   * The language of the content within the request. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The query condition that is used to search for the address book.
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

