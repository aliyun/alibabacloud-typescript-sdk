// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterTaskMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pm-2zejpr***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-01-15T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The metric type. Valid values:
   * 
   * - `all`
   * 
   * - `train`
   * 
   * - `eval`
   * 
   * > The default value is *all*.
   * 
   * @example
   * all
   */
  metricType?: string;
  /**
   * @remarks
   * The page number of the query result.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records to return on each page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * The default value is 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the associated PolarDB instance.
   * 
   * @example
   * pc-2zejpr***
   */
  relativeDBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to sort the results in reverse order. The default value is *false*.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  /**
   * @remarks
   * The start time of the query. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-01-15T14:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      metricType: 'MetricType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      relativeDBClusterId: 'RelativeDBClusterId',
      reverse: 'Reverse',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      metricType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      relativeDBClusterId: 'string',
      reverse: 'boolean',
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

