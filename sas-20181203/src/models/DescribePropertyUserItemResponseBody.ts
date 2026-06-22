// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyUserItemResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page in a paged query.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page to display in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries displayed on each page in a paged query.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 114
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserItemResponseBodyPropertyItems extends $dara.Model {
  /**
   * @remarks
   * The number of servers associated with the account.
   * 
   * @example
   * 384
   */
  count?: number;
  /**
   * @remarks
   * The account name.
   * 
   * @example
   * adm
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribePropertyUserItemResponseBodyPageInfo;
  /**
   * @remarks
   * The account information.
   */
  propertyItems?: DescribePropertyUserItemResponseBodyPropertyItems[];
  /**
   * @remarks
   * The unique identifier that Alibaba Cloud generated for the request.
   * 
   * @example
   * 76068BE2-F9C4-4EDD-967B-F503B8CCDD3D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      propertyItems: 'PropertyItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribePropertyUserItemResponseBodyPageInfo,
      propertyItems: { 'type': 'array', 'itemType': DescribePropertyUserItemResponseBodyPropertyItems },
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.propertyItems)) {
      $dara.Model.validateArray(this.propertyItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

