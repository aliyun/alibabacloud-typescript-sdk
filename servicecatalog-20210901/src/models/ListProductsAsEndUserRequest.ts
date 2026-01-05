// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsAsEndUserRequestFilters extends $dara.Model {
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

export class ListProductsAsEndUserRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: ListProductsAsEndUserRequestFilters[];
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
   * The field that is used to sort data.
   * 
   * The default value is CreateTime, which specifies the time when the product was created.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The method that is used to sort the returned entries. Valid values:
   * 
   * *   Asc: sorts the entries in ascending order.
   * *   Desc (default): sorts the entries in descending order.
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
      filters: { 'type': 'array', 'itemType': ListProductsAsEndUserRequestFilters },
      pageNumber: 'number',
      pageSize: 'number',
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

