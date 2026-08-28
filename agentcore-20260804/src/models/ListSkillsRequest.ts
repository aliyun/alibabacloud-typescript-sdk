// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * next-page-token
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort field. The value download_count is supported. Default value: gmt_modified.
   * 
   * @example
   * download_count
   */
  orderBy?: string;
  /**
   * @remarks
   * Filters results by owner.
   * 
   * @example
   * user123
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters results by visibility. Valid values:
   * - PUBLIC
   * - PRIVATE
   * 
   * @example
   * PUBLIC
   */
  scope?: string;
  /**
   * @remarks
   * The search mode. Valid values:
   * - accurate: exact match.
   * - blur: fuzzy match.
   * 
   * @example
   * blur
   */
  search?: string;
  /**
   * @remarks
   * The filter keyword.
   * 
   * @example
   * customer
   */
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      orderBy: 'orderBy',
      owner: 'owner',
      pageNo: 'pageNo',
      pageSize: 'pageSize',
      scope: 'scope',
      search: 'search',
      skillName: 'skillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      owner: 'string',
      pageNo: 'number',
      pageSize: 'number',
      scope: 'string',
      search: 'string',
      skillName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

