// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CursorShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The end timestamp.
   * 
   * Unit: milliseconds.
   * 
   * > - UNIX timestamp: the number of milliseconds that have elapsed since January 1, 1970. The format YYYY-MM-DDThh:mm:ssZ is supported. Example: 2023-01-01T00:00:00Z, which specifies 00:00:00 on January 1, 2023 (GMT).
   * - If you do not specify the end time, the end time is considered infinite. In real-time export scenarios, you can leave this parameter empty.
   * - The TTL of monitoring data in CloudMonitor varies with the time granularity. Refer to the data TTL corresponding to the Period request parameter to set a reasonable time interval.
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
   * The name of the metric for the cloud service.
   * 
   * For more information about how to obtain the metric name of a cloud service, see [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * For more information about how to obtain the data namespace of a cloud service, see [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The time interval of the metric.
   * 
   * Unit: seconds.
   * 
   * > The time interval of a metric is typically 60 seconds. For special values, see the Period parameter in [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The start timestamp.
   * 
   * The format YYYY-MM-DDThh:mm:ssZ is supported. Example: 2023-01-01T00:00:00Z, which specifies 00:00:00 on January 1, 2023 (GMT).
   * 
   * > The time-to-live (TTL) of monitoring data in CloudMonitor varies with the time granularity. Refer to the data TTL corresponding to the Period request parameter to set a reasonable time interval.
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

