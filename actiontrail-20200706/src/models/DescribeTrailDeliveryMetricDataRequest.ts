// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrailDeliveryMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time window for the query. Specify the time in ISO 8601 format: \\"YYYY-MM-DDThh:mm:ssZ\\". The \\"Z\\" indicates UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-04-10T01:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the delivery monitoring metric. Valid values:
   * 
   * - `delivery_sls_success_count`: The number of logs successfully delivered to SLS.
   * 
   * - `delivery_sls_fail_count`: The number of logs that failed to be delivered to SLS.
   * 
   * - `delivery_oss_success_count`: The number of logs successfully delivered to OSS.
   * 
   * - `delivery_oss_fail_count`: The number of logs that failed to be delivered to OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * delivery_sls_success_count
   */
  metricName?: string;
  /**
   * @remarks
   * The statistical period for the metric data, in seconds. The value must be 60 or a multiple of 60.
   * 
   * Recommended values: 60, 900, and 3600.
   * 
   * This parameter is required.
   * 
   * @example
   * 3600
   */
  period?: number;
  /**
   * @remarks
   * The start of the time window for the query. Specify the time in ISO 8601 format: \\"YYYY-MM-DDThh:mm:ssZ\\". The \\"Z\\" indicates UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-04-09T01:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the trail.
   * 
   * This parameter is required.
   * 
   * @example
   * trail-name
   */
  trailName?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      metricName: 'MetricName',
      period: 'Period',
      startTime: 'StartTime',
      trailName: 'TrailName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      metricName: 'string',
      period: 'number',
      startTime: 'string',
      trailName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

