// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddressBookShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of member accounts for the asset address book.
   */
  assetMemberUidsShrink?: string;
  /**
   * @remarks
   * Queries address books that contain the specified port. This parameter takes effect only when the **GroupType** parameter is set to **port**.
   * 
   * @example
   * 80
   */
  containPort?: string;
  /**
   * @remarks
   * The page number in a paged query.
   * 
   * Default value: 1, which indicates that the first page of data is returned.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The type of the address book.
   * 
   * > If you do not set this parameter, IP address books and ECS tag-based address books are queried.
   * 
   * @example
   * ip
   */
  groupType?: string;
  /**
   * @remarks
   * The unique ID of the address book.
   * 
   * @example
   * f04ac7ce-628b-4cb7-be61-310222b7****
   */
  groupUuid?: string;
  /**
   * @remarks
   * The language type for the address book description. Valid values:
   * - **en**: English.
   * - **zh**: Chinese (default).
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of address books on each page in a paged query.
   * 
   * Default value: 10, which indicates that each page contains 10 results. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The search condition. Enter the address book information that you want to query.
   * 
   * @example
   * 192.0.XX.XX
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      assetMemberUidsShrink: 'AssetMemberUids',
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
      assetMemberUidsShrink: 'string',
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

