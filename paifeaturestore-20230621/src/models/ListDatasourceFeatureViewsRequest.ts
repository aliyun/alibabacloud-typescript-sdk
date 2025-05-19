// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasourceFeatureViewsRequest extends $dara.Model {
  all?: boolean;
  /**
   * @example
   * 2025-03-19
   */
  endDate?: string;
  /**
   * @example
   * fv
   */
  name?: string;
  /**
   * @example
   * Desc
   */
  order?: string;
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
   * 3
   */
  projectId?: string;
  /**
   * @example
   * fs_project
   */
  projectName?: string;
  showStorageUsage?: boolean;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * 2025-03-14
   */
  startDate?: string;
  /**
   * @example
   * Stream
   */
  type?: string;
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

