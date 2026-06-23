// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityScanRunsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The earliest start time of a data quality scan run to include in the results. Specify the time as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1710239005403
   */
  createTimeFrom?: number;
  /**
   * @remarks
   * The latest start time of a data quality scan run to include in the results. Specify the time as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1710239005403
   */
  createTimeTo?: number;
  /**
   * @remarks
   * The ID of the data quality scan.
   * 
   * @example
   * 10001
   */
  dataQualityScanId?: number;
  /**
   * @remarks
   * An object with advanced filter conditions. The following parameters are supported:
   * 
   * - `TaskInstanceId`: The ID of the task instance.
   * 
   * - `RunNumber`: The run number of the instance.
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
   * The page number to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
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
   * The sort field and order for the results. The format is `FieldName Order`. The default order is ascending (Asc). Supported fields:
   * 
   * - CreateTime (Desc/Asc)
   * 
   * - Id (Desc/Asc)
   * 
   * @example
   * CreateTime Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The status of the data quality scan run. Valid values:
   * 
   * - Pass
   * 
   * - Running
   * 
   * - Error
   * 
   * - Fail
   * 
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

