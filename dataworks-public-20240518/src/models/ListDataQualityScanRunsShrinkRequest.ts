// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityScanRunsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The earliest time when the data quality monitor starts to run.
   * 
   * @example
   * 1710239005403
   */
  createTimeFrom?: number;
  /**
   * @remarks
   * The latest time when the data quality monitor starts to run.
   * 
   * @example
   * 1710239005403
   */
  createTimeTo?: number;
  /**
   * @remarks
   * The ID of the data quality monitor.
   * 
   * @example
   * 10001
   */
  dataQualityScanId?: number;
  /**
   * @remarks
   * The extended query filter. Supported parameters:
   * 
   * *   TaskInstanceId
   * 
   * @example
   * {
   *     "TaskInstanceId": 111L
   * }
   */
  filterShrink?: string;
  /**
   * @remarks
   * The page number of the results. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
   * The list of sorting fields. Supports fields such as last modified time and creation time. Format: "SortField+SortOrder (Desc/Asc)", where Asc is the default. Valid values:
   * 
   * *   CreateTime (Desc/Asc)
   * *   Id (Desc/Asc)
   * 
   * @example
   * CreateTime Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The status of the data quality check result.
   * 
   * *   Pass
   * *   Running
   * *   Error
   * *   Fail
   * *   Warn
   * 
   * @example
   * Fail
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeFrom: 'CreateTimeFrom',
      createTimeTo: 'CreateTimeTo',
      dataQualityScanId: 'DataQualityScanId',
      filterShrink: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeFrom: 'number',
      createTimeTo: 'number',
      dataQualityScanId: 'number',
      filterShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

