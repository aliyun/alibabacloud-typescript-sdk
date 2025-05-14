// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to ignore sources marked as deleted.
   * 
   * @example
   * true
   */
  filterState?: boolean;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The sorting order. By default, the query results are sorted by creation time in descending order. Valid values: asc and desc.
   * 
   * @example
   * asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The sorting order by modification time. Valid values: asc and desc.
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
  /**
   * @remarks
   * The name of the source.
   * 
   * @example
   * MyVodSource
   */
  sourceName?: string;
  /**
   * @remarks
   * The source type. Valid values: vodSource and liveSource.
   * 
   * @example
   * vodSource
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      filterState: 'FilterState',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortByModifiedTime: 'SortByModifiedTime',
      sourceLocationName: 'SourceLocationName',
      sourceName: 'SourceName',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterState: 'boolean',
      pageNo: 'string',
      pageSize: 'string',
      sortBy: 'string',
      sortByModifiedTime: 'string',
      sourceLocationName: 'string',
      sourceName: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

