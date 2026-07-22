// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  categoryId?: number;
  /**
   * @example
   * BaseMedia
   */
  entityId?: string;
  /**
   * @example
   * title = \\"中国\\" and utcCreate = [\\"1693367158561\\",\\"1693367158562\\"]
   */
  match?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * F8C4F642184DBDA5D93907A70AAE****
   */
  scrollToken?: string;
  /**
   * @example
   * test-1
   */
  searchLibName?: string;
  /**
   * @example
   * utcCreate:Desc
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      entityId: 'EntityId',
      match: 'Match',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      scrollToken: 'ScrollToken',
      searchLibName: 'SearchLibName',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      entityId: 'string',
      match: 'string',
      pageNo: 'number',
      pageSize: 'number',
      scrollToken: 'string',
      searchLibName: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

