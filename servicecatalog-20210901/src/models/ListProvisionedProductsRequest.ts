// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProvisionedProductsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter condition. Valid values:
   * 
   * *   ProvisionedProductName: performs exact matches by product instance name. Product instance names are not case-sensitive.
   * *   FullTextSearch: performs full-text searches by product instance name. Fuzzy match is supported.
   * 
   * @example
   * ProvisionedProductName
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter condition.
   * 
   * @example
   * DEMO-ECS instance
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

export class ListProvisionedProductsRequest extends $dara.Model {
  /**
   * @remarks
   * The access filter. Valid values:
   * 
   * *   User: queries the product instances that are created by the current requester. This is the default value.
   * *   Account: queries the product instances that belong to the current Alibaba Cloud account.
   * 
   * @example
   * User
   */
  accessLevelFilter?: string;
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: ListProvisionedProductsRequestFilters[];
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
   * The field that is used to sort the queried data.
   * 
   * Set the value to CreateTime, which specifies the time when the product instance was created.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The sorting method. Valid values:
   * 
   * *   Asc: the ascending order.
   * *   Desc (default): the descending order.
   * 
   * @example
   * Desc
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevelFilter: 'AccessLevelFilter',
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevelFilter: 'string',
      filters: { 'type': 'array', 'itemType': ListProvisionedProductsRequestFilters },
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

