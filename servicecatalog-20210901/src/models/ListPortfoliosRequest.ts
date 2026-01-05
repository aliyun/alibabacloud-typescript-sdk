// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPortfoliosRequestFilters extends $dara.Model {
  /**
   * @example
   * PortfolioName
   */
  key?: string;
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

export class ListPortfoliosRequest extends $dara.Model {
  filters?: ListPortfoliosRequestFilters[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * prod-bp18r7q127****
   */
  productId?: string;
  /**
   * @example
   * Local
   */
  scope?: string;
  /**
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @example
   * Desc
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productId: 'ProductId',
      scope: 'Scope',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': ListPortfoliosRequestFilters },
      pageNumber: 'number',
      pageSize: 'number',
      productId: 'string',
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

