// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNisTrafficMetricsResponseBodyMetricStatics extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the data point, in milliseconds.
   * 
   * @example
   * 1785219000000
   */
  timeStamp?: number;
  /**
   * @remarks
   * The metric value at the current time point. The specific meaning and unit are determined by the MetricName in the request.
   * 
   * @example
   * 102400.25
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisTrafficMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned per page or per query. In VPC scenarios, this represents the paging size. In TR and Internet Shared Bandwidth scenarios, this represents the SQL query limit.
   * 
   * @example
   * 1440
   */
  maxResults?: number;
  /**
   * @remarks
   * The list of time series metric data points. Each element represents an aggregated time point and its corresponding metric value.
   */
  metricStatics?: GetNisTrafficMetricsResponseBodyMetricStatics[];
  /**
   * @remarks
   * The paging token for the next page. Paging is supported only in VPC scenarios. An empty value indicates that no more pages exist. This field is typically not returned in TR and Internet Shared Bandwidth scenarios.
   * 
   * @example
   * qqt9NJ3/AWeMXCntK4Kyhrt0QclAmfbtYB4899hEUzVNEo/F148UPCh2itDku111
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FA764-BA47-56F8-88E1-7AB503A62112
   */
  requestId?: string;
  /**
   * @remarks
   * The number of data points in the query result.
   * 
   * @example
   * 1440
   */
  totalCount?: number;
  /**
   * @remarks
   * **Unit and MetricName mapping**
   * 
   * - Bandwidth  
   *   - Unit: Bits/Second  
   *   - Description: bits per second.
   * 
   * - PacketsRate  
   *   - Unit: Packets/Second  
   *   - Description: packets per second.
   * 
   * - RoundTripTime  
   *   - Unit: MicroSecond  
   *   - Description: TCP round-trip time.
   * 
   * - BandwidthUtilization  
   *   - Unit: Percent  
   *   - Description: bandwidth utilization.
   * 
   * - PacketsLostNoRouteRate  
   *   - Unit: PacketsLostNoRouteRate  
   *   - Description: rate of packets dropped due to no route.
   * 
   * - PacketsLostBlackholeRate  
   *   - Unit: PacketsLostBlackholeRate  
   *   - Description: rate of packets dropped due to blackhole routing.
   * 
   * - PacketsLostTTLExpiredRate  
   *   - Unit: PacketsLostTTLExpiredRate  
   *   - Description: rate of packets dropped due to TTL expiration.
   * 
   * @example
   * Bits/Second
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      metricStatics: 'MetricStatics',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      metricStatics: { 'type': 'array', 'itemType': GetNisTrafficMetricsResponseBodyMetricStatics },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metricStatics)) {
      $dara.Model.validateArray(this.metricStatics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

