// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOnlineEvalTasksRequest extends $dara.Model {
  appName?: string;
  /**
   * @remarks
   * Search keyword. It will match on fields such as task name, application name (appName), task description, and evaluation metric name.
   * 
   * @example
   * foo
   */
  keyword?: string;
  /**
   * @remarks
   * The UTC end time of the search time range
   * 
   * @example
   * 2025-04-07 13:24:25
   * 2025-04-07
   */
  maxTime?: string;
  /**
   * @remarks
   * The UTC start time of the search time range
   * 
   * @example
   * 2025-04-05 13:24:25
   * 2025-04-05
   */
  minTime?: string;
  /**
   * @remarks
   * The current page number. Value range: integers greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, default is 10.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  samplingMethod?: string;
  sortBy?: string;
  sortOrder?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      keyword: 'Keyword',
      maxTime: 'MaxTime',
      minTime: 'MinTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      samplingMethod: 'SamplingMethod',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      keyword: 'string',
      maxTime: 'string',
      minTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      samplingMethod: 'string',
      sortBy: 'string',
      sortOrder: 'string',
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

