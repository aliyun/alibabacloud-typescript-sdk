// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CursorShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Unit: milliseconds.
   * 
   * > 
   * 
   * *   This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For example, 2023-01-01T00:00:00Z indicates January 1, 2023, 00:00:00 UTC.
   * 
   * *   If you do not set the end time, the end time is infinite. You can leave this parameter empty in real-time export scenarios.
   * *   In CloudMonitor, the TTL of monitoring data varies with the time granularity. Specify a proper time interval based on the TTL corresponding to the value of the `Period` parameter.
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
   * The metric that is used to monitor the cloud service.
   * 
   * For more information about the metrics of cloud services, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_idle
   */
  metric?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * For more information about the namespaces of cloud services, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The time interval based on which the metric value is measured.
   * 
   * Unit: seconds.
   * 
   * >  Generally, the time interval is 60 seconds. For more information about specific values, see the `Period` parameter in [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For example, 2023-01-01T00:00:00Z indicates January 1, 2023, 00:00:00 UTC.
   * 
   * >  In CloudMonitor, the TTL of monitoring data varies with the time granularity. Specify a proper time interval based on the TTL corresponding to the value of the `Period` parameter.
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

