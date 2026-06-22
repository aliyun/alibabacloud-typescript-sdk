// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyPortItemResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page in a paged query.
   * 
   * @example
   * 5
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
   * The maximum number of entries to display on each page in a paged query.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 163
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

export class DescribePropertyPortItemResponseBodyPropertyItems extends $dara.Model {
  /**
   * @remarks
   * The number of servers associated with the port.
   * 
   * @example
   * 495
   */
  count?: number;
  /**
   * @remarks
   * The listening port number.
   * 
   * @example
   * 22
   */
  port?: string;
  /**
   * @remarks
   * The network protocol associated with the port.
   * 
   * @example
   * tcp
   */
  proto?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      port: 'Port',
      proto: 'Proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      port: 'string',
      proto: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyPortItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribePropertyPortItemResponseBodyPageInfo;
  /**
   * @remarks
   * The port information.
   */
  propertyItems?: DescribePropertyPortItemResponseBodyPropertyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
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
      pageInfo: DescribePropertyPortItemResponseBodyPageInfo,
      propertyItems: { 'type': 'array', 'itemType': DescribePropertyPortItemResponseBodyPropertyItems },
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

