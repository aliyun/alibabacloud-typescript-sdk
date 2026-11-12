// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterTaskMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. Usage note: This parameter accepts only the ID of a training AIDB cluster created by calling CreateAIDBClusterTask. MaaS clusters with RunType set to maas are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * pm-2zejpr***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. Format: `yyyy-MM-ddTHH:mm:ssZ` (UTC time).
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
   * - `all`
   * - `train`
   * - `eval`
   * 
   * > Default value: *all*.
   * 
   * @example
   * all
   */
  metricType?: string;
  /**
   * @remarks
   * The page number of the query results.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * * **30**
   * * **50**
   * * **100**
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The instance ID of the associated PolarDB.
   * 
   * @example
   * pc-2zejpr***
   */
  relativeDBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to sort the results in descending order. Default value: *false*.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  /**
   * @remarks
   * The start time of the query. Format: `yyyy-MM-ddTHH:mm:ssZ` (UTC time).
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

