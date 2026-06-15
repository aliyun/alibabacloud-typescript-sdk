// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasourceFeatureViewsRequest extends $dara.Model {
  /**
   * @remarks
   * Return all data (no paging).
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * End time for query read/write volume. Format: yyyy-mm-dd.
   * 
   * @example
   * 2025-03-19
   */
  endDate?: string;
  /**
   * @remarks
   * Fuzzy filter for feature view names.
   * 
   * @example
   * fv
   */
  name?: string;
  /**
   * @remarks
   * Sort order.
   * 
   * @example
   * Desc
   */
  order?: string;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Project ID. Get this ID using the ListProjects API.
   * 
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @remarks
   * Filter by project name.
   * 
   * @example
   * fs_project
   */
  projectName?: string;
  /**
   * @remarks
   * Show storage usage. Default is true.
   * 
   * @example
   * true
   */
  showStorageUsage?: boolean;
  /**
   * @remarks
   * Sort by.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Start time for query read/write volume. Format: yyyy-mm-dd.
   * 
   * @example
   * 2025-03-14
   */
  startDate?: string;
  /**
   * @remarks
   * Feature view type.
   * 
   * - Batch - offline feature
   * 
   * - Stream - real-time feature
   * 
   * - Sequence - sequence feature
   * 
   * @example
   * Stream
   */
  type?: string;
  /**
   * @remarks
   * Show detailed information. If set to false, do not show UsageStatistics for each view; show only the total. Default is true.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      endDate: 'EndDate',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      showStorageUsage: 'ShowStorageUsage',
      sortBy: 'SortBy',
      startDate: 'StartDate',
      type: 'Type',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      endDate: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      projectName: 'string',
      showStorageUsage: 'boolean',
      sortBy: 'string',
      startDate: 'string',
      type: 'string',
      verbose: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

