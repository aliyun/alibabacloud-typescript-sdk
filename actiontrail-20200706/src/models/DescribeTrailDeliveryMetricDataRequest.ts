// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrailDeliveryMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2026-04-10T01:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * delivery_sls_success_count
   */
  metricName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3600
   */
  period?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2026-04-09T01:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
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

