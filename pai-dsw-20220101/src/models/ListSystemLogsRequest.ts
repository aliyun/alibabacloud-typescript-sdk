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
  lifecycleId?: string;
  /**
   * @example
   * Error
   */
  logLevel?: string;
  logRepository?: string;
  offset?: string;
  /**
   * @example
   * ASC
   */
  order?: string;
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
  static names(): { [key: string]: string } {
    return {
      gmtEndTime: 'GmtEndTime',
      gmtStartTime: 'GmtStartTime',
      instanceId: 'InstanceId',
      lifecycleId: 'LifecycleId',
      logLevel: 'LogLevel',
      logRepository: 'LogRepository',
      offset: 'Offset',
      order: 'Order',
      problemCategory: 'ProblemCategory',
      sortBy: 'SortBy',
      sourceRequestId: 'SourceRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtEndTime: 'string',
      gmtStartTime: 'string',
      instanceId: 'string',
      lifecycleId: 'string',
      logLevel: 'string',
      logRepository: 'string',
      offset: 'string',
      order: 'string',
      problemCategory: 'string',
      sortBy: 'string',
      sourceRequestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

