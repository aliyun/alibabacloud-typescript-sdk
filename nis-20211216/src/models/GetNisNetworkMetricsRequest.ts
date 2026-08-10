// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNisNetworkMetricsRequestDimensions extends $dara.Model {
  /**
   * @remarks
   * The name of the filter condition.
   * 
   * @example
   * instanceId
   */
  name?: string;
  /**
   * @remarks
   * The value of the filter condition.
   * 
   * @example
   * eip-sample*
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * Explicitly passes member account IDs.
   */
  accountIds?: string[];
  /**
   * @remarks
   * The start time, in **ms**, in **UNIX** timestamp format. If not specified, the most recent 1 hour is queried by default. The earliest start time can be 7 days ago.
   * 
   * @example
   * 1638239092000
   */
  beginTime?: number;
  /**
   * @remarks
   * The collection of metric query parameters for specific business scenarios. For metric description of each scenario, see [GetNisNetworkMetrics](https://help.aliyun.com/document_detail/2833348.html).
   * 
   * This parameter is required.
   * 
   * @example
   * bps
   */
  dimensions?: GetNisNetworkMetricsRequestDimensions[];
  /**
   * @remarks
   * The end time, in **ms**, in **UNIX** timestamp format. If not specified, the most recent 1 hour is queried by default. If only BeginTime is specified, the 1 hour after BeginTime is queried. The maximum time span between the end time and start time is 24 hours.
   * 
   * @example
   * 1684373700099
   */
  endTime?: number;
  /**
   * @remarks
   * The metric name. Valid values:
   * 
   * -   bps: bits per second.
   * -   pps: packets per second.
   * -   rtt: round-trip time when establishing a TCP connection.
   * -   RetransmitRate: retransmission rate.
   * -   RatelimitDropPps: rate of packets dropped due to throttling.
   * -   ActiveSessionCount: concurrent session count.
   * -   NewSessionPerSecond: new sessions per second.
   * -   BandwidthUtilization: bandwidth utilization.
   * -   passRate: inspection pass rate.
   * > If no RTT data is available within the selected time range, the connection is a persistent connection and no initial connection was established during that period.
   * 
   * This parameter is required.
   * 
   * @example
   * bps
   */
  metricName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @remarks
   * Analyzes traffic by the Alibaba Cloud network resource type used for traffic forwarding. Valid values:
   * 
   * - AccessInternetIpV4: all Alibaba Cloud public IPv4 addresses.
   * - AccessInternetIpV4Limited: all region-throttled Alibaba Cloud public IPv4 addresses.
   * - ElasticIP: Elastic IP Address (EIP) (IPv4).
   * - PublicIpEcs: static public IP address bound to an ECS instance (IPv4).
   * - PublicIpClb: static public IP address bound to a CLB instance (IPv4).
   * - NAT: public network traffic through SNAT.
   * - TR: traffic through Cloud Enterprise Network (CEN) transit routers.
   * - TRAttachment: traffic through CEN connection instances, including intra-region and inter-region connections. Intra-region connections have inbound and outbound directions. Inter-region connections have only the outbound direction.
   * - VBR: traffic through virtual border routers.
   * - GA: traffic through Global Accelerator.
   * - IntranetProbing: internal network quality probing data.
   * - NisInspectionHistoryReportScore: inspection history scores.
   * 
   * This parameter is required.
   * 
   * @example
   * AccessInternetIPV4
   */
  resourceType?: string;
  /**
   * @remarks
   * The sort order. Default value: TimestampAscending. Valid values:
   * 
   * - TimestampAscending: sorts by time in ascending order.
   * - TimestampDescending: sorts by time in descending order.
   * 
   * @example
   * TimestampAscending
   */
  scanBy?: string;
  stepMinutes?: number;
  /**
   * @remarks
   * Specifies whether to use multi-account access mode. This is a reserved parameter and is not currently supported.
   * 
   * @example
   * false
   */
  useCrossAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      beginTime: 'BeginTime',
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      metricName: 'MetricName',
      regionNo: 'RegionNo',
      resourceType: 'ResourceType',
      scanBy: 'ScanBy',
      stepMinutes: 'StepMinutes',
      useCrossAccount: 'UseCrossAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      beginTime: 'number',
      dimensions: { 'type': 'array', 'itemType': GetNisNetworkMetricsRequestDimensions },
      endTime: 'number',
      metricName: 'string',
      regionNo: 'string',
      resourceType: 'string',
      scanBy: 'string',
      stepMinutes: 'number',
      useCrossAccount: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

