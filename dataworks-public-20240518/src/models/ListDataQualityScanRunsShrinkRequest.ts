// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityScanRunsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The earliest start time of the data quality monitoring run.
   * 
   * @example
   * 1710239005403
   */
  createTimeFrom?: number;
  /**
   * @remarks
   * The latest start time of the data quality monitoring run.
   * 
   * @example
   * 1710239005403
   */
  createTimeTo?: number;
  /**
   * @remarks
   * The data quality monitoring ID.
   * 
   * @example
   * 10001
   */
  dataQualityScanId?: number;
  /**
   * @remarks
   * The extension query filter. The following filter parameters are supported:
   * - TaskInstanceId: the scheduled task instance ID.
   * - RunNumber: the number of times the instance has run.
   * 
   * @example
   * {
   *     "TaskInstanceId": "111",
   *     "RunNumber": "1"
   * }
   */
  filterShrink?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
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
   * The list of sort fields. Fields such as modification time and creation time are supported. The format is "SortField+SortOrder(Desc/Asc)". The default value is Asc, which can be omitted. Valid values for the sort field:
   * - CreateTime (Desc/Asc)
   * - Id (Desc/Asc)
   * 
   * @example
   * CreateTime Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The status of the data quality check result. Valid values:
   * - Pass
   * - Running
   * - Error
   * - Fail
   * - Warn
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

