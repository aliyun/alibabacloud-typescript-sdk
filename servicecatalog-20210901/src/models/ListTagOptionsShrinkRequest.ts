// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagOptionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition.
   */
  filtersShrink?: string;
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
      filtersShrink: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filtersShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

