// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskCheckItemResultResponseBodyPageContentResource extends $dara.Model {
  /**
   * @remarks
   * The data of the affected assets on each page in a dynamic table.
   */
  contentResource?: { [key: string]: any };
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 3
   */
  pageCount?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      contentResource: 'ContentResource',
      count: 'Count',
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentResource: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      count: 'number',
      currentPage: 'number',
      pageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.contentResource) {
      $dara.Model.validateMap(this.contentResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckItemResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageContentResource?: DescribeRiskCheckItemResultResponseBodyPageContentResource;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3BFB4989-A108-46A4-954E-FF7EF02D1078
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageContentResource: 'PageContentResource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageContentResource: DescribeRiskCheckItemResultResponseBodyPageContentResource,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageContentResource && typeof (this.pageContentResource as any).validate === 'function') {
      (this.pageContentResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

