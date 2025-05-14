// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSourceLocationsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to ignore source locations marked as deleted. A value of true means ignoring source locations marked as deleted.
   * 
   * @example
   * true
   */
  filterState?: boolean;
  /**
   * @remarks
   * *   The page number.
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting order. By default, the query results are sorted by creation time in descending order.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The sorting order of the source locations based on the time when they were last modified.
   * 
   * @example
   * desc
   */
  sortByModifiedTime?: string;
  /**
   * @remarks
   * The name of the source location.
   * 
   * @example
   * MySourceLocation
   */
  sourceLocationName?: string;
  static names(): { [key: string]: string } {
    return {
      filterState: 'FilterState',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortByModifiedTime: 'SortByModifiedTime',
      sourceLocationName: 'SourceLocationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterState: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortByModifiedTime: 'string',
      sourceLocationName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

