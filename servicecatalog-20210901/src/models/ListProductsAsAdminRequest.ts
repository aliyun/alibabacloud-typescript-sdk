// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsAsAdminRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter condition. Valid values:
   * 
   * *   ProductName: performs exact matches by product name. Product names are not case-sensitive.
   * *   FullTextSearch: performs full-text searches by product name, product provider, or product description. Fuzzy match is supported.
   * 
   * @example
   * ProductName
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter condition.
   * 
   * @example
   * DEMO-Create an ECS instance
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsAsAdminRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: ListProductsAsAdminRequestFilters[];
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the product portfolio.
   * 
   * @example
   * port-bp1yt7582g****
   */
  portfolioId?: string;
  /**
   * @remarks
   * The query scope. Valid values:
   * 
   * *   Local: the products that are created by using the current account. This is the default value.
   * *   Import: the products that are imported from other accounts.
   * *   All: all available products.
   * 
   * @example
   * Local
   */
  scope?: string;
  /**
   * @remarks
   * The field that is used to sort the queried data.
   * 
   * Set the value to CreateTime, which specifies the time when the product was created.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The order in which you want to sort the queried data. Valid values:
   * 
   * *   Asc: the ascending order
   * *   Desc: the descending order
   * 
   * @example
   * Desc
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      portfolioId: 'PortfolioId',
      scope: 'Scope',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': ListProductsAsAdminRequestFilters },
      pageNumber: 'number',
      pageSize: 'number',
      portfolioId: 'string',
      scope: 'string',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

