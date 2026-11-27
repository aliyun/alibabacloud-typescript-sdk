// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to aggregate data by instance scope. This parameter takes effect only when neither BranchId nor EndpointId is specified.
   * 
   * @example
   * false
   */
  aggregate?: boolean;
  /**
   * @remarks
   * The anchor branch ID. If you do not specify this parameter, the main branch of the project is used by default.
   * 
   * @example
   * br-7g8h9i0j1k2l
   */
  branchId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-01-15T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * ep-3m4n5o6p7q8r
   */
  endpointId?: string;
  /**
   * @remarks
   * The granularity of performance data. Valid values:
   * 
   * - 5
   * - 30
   * - 60
   * - 600
   * - 1800
   * - 3600
   * - 86400
   * 
   * @example
   * 5
   */
  interval?: string;
  /**
   * @remarks
   * The performance metrics to query. Separate multiple values with commas (,).
   * Note
   * You can specify up to 5 performance metrics.
   * 
   * This parameter is required.
   * 
   * @example
   * PolarDBCPUForPCU,PolarDBPCU,PolarDBMemoryForPCU,PolarDBQPSTPS,PolarDBConnections
   */
  key?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-05-01T00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'Aggregate',
      branchId: 'BranchId',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      endpointId: 'EndpointId',
      interval: 'Interval',
      key: 'Key',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'boolean',
      branchId: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      endpointId: 'string',
      interval: 'string',
      key: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

