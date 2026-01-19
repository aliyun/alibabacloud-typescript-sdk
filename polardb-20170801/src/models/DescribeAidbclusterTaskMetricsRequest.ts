// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterTaskMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pm-2zejpr***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2026-01-15T15:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * all
   */
  metricType?: string;
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
   * pc-2zejpr***
   */
  relativeDBClusterId?: string;
  /**
   * @example
   * false
   */
  reverse?: boolean;
  /**
   * @remarks
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

