// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartNisTrafficRankingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The start timestamp of the query, in milliseconds.
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
   * In: Traffic flowing into the target resource.
   * Out: Traffic flowing out of the target resource.
   * 
   * - VPC flow log scenario (`TraffficScenario = VpcFlowLogAll` / `VpcFlowLogInternet`):
   *   - In: Traffic flowing into the ENI.
   *   - Out: Traffic flowing out of the ENI.
   * 
   * - TR flow log scenario (`TraffficScenario = TRFlowlog`):
   *   - In: Traffic flowing into the TR.
   *   - Out: Traffic flowing out of the TR.
   * 
   * - Internet Shared Bandwidth metric analysis scenario (`TraffficScenario = CbwpMetric`):
   *   - In: Traffic flowing into the EIP.
   *   - Out: Traffic flowing out of the EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * Out
   */
  direction?: string;
  /**
   * @remarks
   * The end timestamp of the query, in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684373700099
   */
  endTime?: number;
  /**
   * @remarks
   * Specifies additional filter conditions for focused network traffic analysis.
   */
  filterShrink?: string;
  /**
   * @remarks
   * Specifies multiple traffic dimensions for aggregation and sorting.
   */
  groupByShrink?: string;
  /**
   * @remarks
   * The language. Valid values: zh-CN, en-US.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The page size. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. Leave this parameter empty for the first query or when no more results are available. If a next query exists, set this value to the NextToken value returned by the previous API call.
   * 
   * @example
   * 2A07PfBPlzmmNi/75Qca9SK73UfY48/+WBiREjfVfXqMQxtV8XckOg5lk7F2bhC+
   */
  nextToken?: string;
  /**
   * @remarks
   * Based on the `TrafficScenario` field, the following metrics are supported for ranking traffic:
   * 
   * - `TrafficScenario = VpcFlowLogAll` / `VpcFlowLogInternet` (VPC flow log scenario):
   *   - `Bytes`: Bandwidth
   *   - `Packets`: Packets
   *   - `RoundTripTime`: TCP RTT
   * 
   * - `TrafficScenario = TRFlowlog` (TR flow log scenario):
   *   - `Bytes`: Bandwidth
   *   - `Packets`: Packets
   *   - `PacketsLostNoRoute`: Packet loss due to no routing
   *   - `PacketsLostBlackhole`: Packet loss due to blackhole routing
   *   - `PacketsLostTTLExpired`: Packet loss due to TTL timeout
   *   - `BytesIncrease`: Bandwidth increase
   *   - `BytesIncreaseRatio`: Bandwidth increase ratio
   * 
   * - `TrafficScenario = CbwpMetric` (Internet Shared Bandwidth metric analysis scenario):
   *   - `Bytes`: Bandwidth
   *   - `Packets`: Packets
   * 
   * This parameter is required.
   * 
   * @example
   * Bytes
   */
  orderBy?: string;
  /**
   * @remarks
   * The region where the resource resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @remarks
   * The sorting method for network traffic analysis. Valid values:
   * - ASC: Sorts in ascending order.
   * - DESC: Sorts in descending order.
   * 
   * @example
   * Desc
   */
  sort?: string;
  /**
   * @remarks
   * The storage bucket precision property.
   * 
   * The storage bucket precision specifies the storage aggregation epoch to query. Two precision levels are supported: high precision (such as 1 minute) and long epoch (such as 1 day). The specific precision is determined by the network traffic analysis sampling interval configured for high-precision traffic statistics or long-epoch traffic statistics when creating or editing the network traffic analysis instance.
   * 
   * - The storage precision supported by the corresponding tuple of the network traffic analysis instance:
   *   - `1`: In minutes (1 minute)
   *   - `10`: In minutes (10 minutes)
   *   - `60`: In minutes (60 minutes, or 1 hour)
   *   - `1440`: In minutes (1440 minutes, or 1 day)
   * 
   * - The storage bucket precision can be used for two typical purposes:
   *   - High-precision traffic statistics: Aggregation at 1-minute, 10-minute, or 60-minute intervals.
   *   - Long-epoch traffic statistics: Aggregation at 1440-minute (1-day) intervals.
   * 
   * - Pass a value for this field during the query to specify the storage aggregation epoch. For example:
   *   - Pass `10`: Queries short-epoch data aggregated at 10-minute granularity.
   *   - Pass `1440`: Queries long-epoch data aggregated at 1-day granularity.
   * 
   * Note: The active storage precision values depend on the configuration of the network traffic analysis instance.
   * 
   * @example
   * 10
   */
  storageInterval?: number;
  /**
   * @remarks
   * The number of entries for the network traffic analysis sorting query.
   * 
   * You can specify a custom number. If this field is not specified, all traffic data that meets the specified conditions is sorted and analyzed within the performance capacity of the network traffic analysis feature.
   * 
   * @example
   * 10
   */
  topN?: number;
  /**
   * @remarks
   * The ID of the network traffic analysis instance.
   * 
   * This parameter is required.
   * 
   * @example
   * nta-262****ca07f
   */
  trafficAnalyzerId?: string;
  /**
   * @remarks
   * Supported analysis scenarios: 
   * 
   * - All VPC flow log analysis
   * - Public VPC flow log analysis
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
   * The storage aggregation dimension of the network traffic analysis instance.
   * 
   * Based on the TraffficScenario:
   * 
   * - VpcFlowLogAll/VpcFlowLog: Required. Specifies the storage aggregation view to query, which corresponds to the storage aggregation property configured in the network traffic analysis instance.
   * 
   * - TRFlowLog/CbwpMetric: Optional. Automatically adapts based on the storage aggregation property of the network traffic analysis instance.
   * 
   * @example
   * Tuple1
   */
  tupleDimension?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      direction: 'Direction',
      endTime: 'EndTime',
      filterShrink: 'Filter',
      groupByShrink: 'GroupBy',
      language: 'Language',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      regionNo: 'RegionNo',
      sort: 'Sort',
      storageInterval: 'StorageInterval',
      topN: 'TopN',
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
      groupByShrink: 'string',
      language: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      regionNo: 'string',
      sort: 'string',
      storageInterval: 'number',
      topN: 'number',
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

