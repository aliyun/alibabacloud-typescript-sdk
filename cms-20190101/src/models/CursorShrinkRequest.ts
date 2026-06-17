// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CursorShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Unit: milliseconds.
   * 
   * > - Unix timestamp: the number of milliseconds that have elapsed since 00:00:00 on January 1, 1970. The value is in the YYYY-MM-DDThh:mm:ssZ format. For example, 2023-01-01T00:00:00Z indicates 00:00:00 on January 1, 2023 (GMT).
   * - If you do not specify an end time, the end time is unlimited. You do not need to specify this parameter when you export data in real time.
   * - The time to live (TTL) of monitoring data varies based on the statistical granularity in CloudMonitor. Configure a proper time range based on the TTL of the data that corresponds to the `Period` parameter.
   * 
   * @example
   * 1641645000000
   */
  endTime?: string;
  /**
   * @remarks
   * The dimension information of the metric.
   */
  matchersShrink?: string;
  /**
   * @remarks
   * The metric name of the cloud service.
   * 
   * For information about how to obtain the metric name of a cloud service, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_idle
   */
  metric?: string;
  /**
   * @remarks
   * The data namespace of the cloud service.
   * 
   * For information about how to obtain the data namespace of a cloud service, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The statistical period of the metric.
   * 
   * Unit: seconds.
   * 
   * > The statistical period of a metric is typically 60 seconds. For special values, see the `Period` parameter in [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * The value is in the YYYY-MM-DDThh:mm:ssZ format. For example, 2023-01-01T00:00:00Z indicates 00:00:00 on January 1, 2023 (GMT).
   * 
   * > The time to live (TTL) of monitoring data varies based on the statistical granularity in CloudMonitor. Configure a proper time range based on the TTL of the data that corresponds to the `Period` parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1641627000000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      matchersShrink: 'Matchers',
      metric: 'Metric',
      namespace: 'Namespace',
      period: 'Period',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      matchersShrink: 'string',
      metric: 'string',
      namespace: 'string',
      period: 'number',
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

