// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosticMetricsResponseBodyMetrics extends $dara.Model {
  /**
   * @remarks
   * The description of the diagnostic metric.
   * 
   * @example
   * CPU diagnostic
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the diagnostic metric needs to be assessed by running a Cloud Assistant command in a guest operating system.
   * 
   * @example
   * true
   */
  guestMetric?: boolean;
  /**
   * @remarks
   * The category of the diagnostic metric.
   * 
   * @example
   * CPU
   */
  metricCategory?: string;
  /**
   * @remarks
   * The ID of the diagnostic metric.
   * 
   * @example
   * GuestOS.WinFirewall
   */
  metricId?: string;
  /**
   * @remarks
   * The name of the diagnostic metric.
   * 
   * @example
   * CPU diagnostic
   */
  metricName?: string;
  /**
   * @remarks
   * The resource type supported by the diagnostic metric.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The operating system type supported by the diagnostic metric. Valid values:
   * 
   * *   Windows
   * *   Linux
   * *   All: Windows and Linux
   * 
   * @example
   * ALL
   */
  supportedOperatingSystem?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      guestMetric: 'GuestMetric',
      metricCategory: 'MetricCategory',
      metricId: 'MetricId',
      metricName: 'MetricName',
      resourceType: 'ResourceType',
      supportedOperatingSystem: 'SupportedOperatingSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      guestMetric: 'boolean',
      metricCategory: 'string',
      metricId: 'string',
      metricName: 'string',
      resourceType: 'string',
      supportedOperatingSystem: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The diagnostic metrics.
   */
  metrics?: DescribeDiagnosticMetricsResponseBodyMetrics[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': DescribeDiagnosticMetricsResponseBodyMetrics },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

