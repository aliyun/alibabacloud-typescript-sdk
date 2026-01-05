// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagOptionsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the tag option. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The full-text search method.
   * 
   * @example
   * k1
   */
  fullTextSearch?: string;
  /**
   * @remarks
   * The key of the tag option.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag option.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      fullTextSearch: 'FullTextSearch',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      fullTextSearch: 'string',
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

export class ListTagOptionsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition.
   */
  filters?: ListTagOptionsRequestFilters;
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
   * Valid values: 1 to 100. Minimum value: 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The information based on which you want to sort the query results.
   * 
   * Set the value to CreateTime, which specifies the creation time of tag options.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The order in which you want to sort the query results. Valid values:
   * 
   * *   Asc: the ascending order
   * *   Desc (default): the descending order
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
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: ListTagOptionsRequestFilters,
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    if(this.filters && typeof (this.filters as any).validate === 'function') {
      (this.filters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

