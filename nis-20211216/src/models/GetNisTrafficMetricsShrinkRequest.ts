// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNisTrafficMetricsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The start timestamp, in milliseconds. If not specified, the most recent 1 hour is queried by default.
   * 
   * This parameter is required.
   * 
   * @example
   * 1638239092000
   */
  beginTime?: number;
  /**
   * @remarks
   * The network traffic direction based on Alibaba Cloud resources.
   * 
   * In: traffic flowing into the target resource.
   * Out: traffic flowing out of the target resource.
   * 
   * This parameter is required.
   * 
   * @example
   * In
   */
  direction?: string;
  /**
   * @remarks
   * The end timestamp, in milliseconds. If not specified, the most recent 1 hour is queried by default. If only BeginTime is specified, the 1 hour after BeginTime is queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684373700099
   */
  endTime?: number;
  /**
   * @remarks
   * Specifies additional filter conditions for the traffic to perform focused network traffic analysis.
   */
  filterShrink?: string;
  /**
   * @remarks
   * In VPC scenarios, this parameter specifies the paging size. In TR and Internet Shared Bandwidth scenarios, this parameter specifies the SQL query limit. If not specified, the backend defaults to 1440.
   * 
   * @example
   * 1440
   */
  maxResults?: number;
  /**
   * @remarks
   * The metric name.
   * Common parameters supported in network traffic analysis scenarios:
   *   bps: bits per second.
   *   pps: packets per second.
   * Parameters specific to the Internet scenario:
   *   rtt: round-trip time when establishing a TCP protocol connection.
   *   RetransmitRate: retransmission rate.
   * Parameters specific to the area-level bandwidth scenario:
   *   RatelimitDropPps: rate of packet loss due to rate limiting.
   *   BandwidthUtilization: bandwidth utilization.
   * Parameters specific to the NAT scenario:
   *   ActiveSessionCount: number of concurrent sessions.
   *   NewSessionPerSecond: number of new sessions per second.
   * 
   * This parameter is required.
   * 
   * @example
   * bps
   */
  metricName?: string;
  /**
   * @remarks
   * The token for the next query. You do not need to specify this parameter for the first query or when no more results exist. If a next page exists, set this parameter to the NextToken value returned by the previous API invoke. This parameter is valid only in VPC scenarios. TR and Internet Shared Bandwidth scenarios do not use this parameter.
   * 
   * @example
   * f7zUd3gArYj/xjPttJo5L5dK0R+gSbfHElLqi8C2IPWMQxtV8XckOg5lk7F2bhC+
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * TimestampAscending: sorts by time in ascending order.
   * TimestampDescending: sorts by time in descending order.
   * 
   * @example
   * TimestampAscending
   */
  scanBy?: string;
  /**
   * @remarks
   * The aggregation step for time series data, in minutes. The final query granularity is the larger value between StepMinutes and the underlying storage granularity. The number of data points calculated by (EndTime-BeginTime)/StepMinutes cannot exceed 1440.
   * 
   * @example
   * 10
   */
  stepMinutes?: number;
  /**
   * @remarks
   * The storage bucket precision property.
   * 
   * The storage bucket precision specifies the storage aggregation epoch to query. Two precision levels are supported: high precision (such as 1 minute) or long epoch (such as 1 day). The specific precision is determined by the network traffic analysis sampling interval configured for high-precision traffic statistics or long-epoch traffic statistics when creating or editing the network traffic analysis analyzer.
   * 
   * - The storage precisions active for the corresponding tuples of the network traffic analysis analyzer are:
   *   - `1`: in minutes (1 minute)
   *   - `10`: in minutes (10 minutes)
   *   - `60`: in minutes (60 minutes, i.e., 1 hour)
   *   - `1440`: in minutes (1440 minutes, i.e., 1 day)
   * 
   * - The storage bucket precision can be used for two typical purposes:
   *   - High-precision traffic statistics: such as 1-minute, 10-minute, or 60-minute aggregation
   *   - Long-epoch traffic statistics: such as 1440-minute (1-day) aggregation
   * 
   * - Specify a value for this field during the query to select the storage aggregation epoch. For example:
   *   - Pass `10`: queries short-epoch data with a 10-minute aggregation granularity
   *   - Pass `1440`: queries long-epoch data with a 1-day aggregation granularity
   * 
   * @example
   * 10
   */
  storageInterval?: number;
  /**
   * @remarks
   * The ID of the network traffic analysis analyzer.
   * 
   * This parameter is required.
   * 
   * @example
   * nta-e093cb80c7c047afbd1d
   */
  trafficAnalyzerId?: string;
  /**
   * @remarks
   * The supported analysis scenarios: 
   * 
   * - All VPC flow log analysis
   * - Internet VPC flow log analysis
   * - All TR flow log analysis
   * - Internet Shared Bandwidth metric analysis
   * 
   * This parameter is required.
   * 
   * @example
   * VpcFlowLogAll
   */
  trafficScenario?: string;
  /**
   * @remarks
   * The traffic storage aggregation dimension.
   * 
   * Based on the TrafficScenario:
   * 
   * - VpcFlowLogAll/VpcFlowLog: required. Specifies the storage aggregation view to query, which corresponds to the storage aggregation property configured in the network traffic analysis analyzer.
   * 
   * - TRFlowLog/CbwpMetric: optional. Automatically adapts based on the storage aggregation property of the network traffic analysis analyzer.
   * 
   * @example
   * Tuple2
   */
  tupleDimension?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      direction: 'Direction',
      endTime: 'EndTime',
      filterShrink: 'Filter',
      maxResults: 'MaxResults',
      metricName: 'MetricName',
      nextToken: 'NextToken',
      regionNo: 'RegionNo',
      scanBy: 'ScanBy',
      stepMinutes: 'StepMinutes',
      storageInterval: 'StorageInterval',
      trafficAnalyzerId: 'TrafficAnalyzerId',
      trafficScenario: 'TrafficScenario',
      tupleDimension: 'TupleDimension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      direction: 'string',
      endTime: 'number',
      filterShrink: 'string',
      maxResults: 'number',
      metricName: 'string',
      nextToken: 'string',
      regionNo: 'string',
      scanBy: 'string',
      stepMinutes: 'number',
      storageInterval: 'number',
      trafficAnalyzerId: 'string',
      trafficScenario: 'string',
      tupleDimension: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

