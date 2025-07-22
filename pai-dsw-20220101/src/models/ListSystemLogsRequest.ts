// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemLogsRequest extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2020-12-08T16:00:00Z
   */
  gmtEndTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  gmtStartTime?: string;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * Error
   */
  logLevel?: string;
  /**
   * @example
   * ASC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * InstanceStartFailed
   */
  problemCategory?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * 473469C7-******5-B3DB-A3DC0DE3C83E
   */
  sourceRequestId?: string;
  /**
   * @example
   * NotebookMainContainerLogs
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      gmtEndTime: 'GmtEndTime',
      gmtStartTime: 'GmtStartTime',
      instanceId: 'InstanceId',
      logLevel: 'LogLevel',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      problemCategory: 'ProblemCategory',
      sortBy: 'SortBy',
      sourceRequestId: 'SourceRequestId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtEndTime: 'string',
      gmtStartTime: 'string',
      instanceId: 'string',
      logLevel: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      problemCategory: 'string',
      sortBy: 'string',
      sourceRequestId: 'string',
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

