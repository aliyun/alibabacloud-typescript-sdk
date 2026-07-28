// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisTrafficRankingResponseBodyFlowRankingList extends $dara.Model {
  /**
   * @remarks
   * The instance resource to which the EIP is bound.
   *    - This field is returned only when Internet Shared Bandwidth metric analysis is queried.
   * 
   * @example
   * ngw-ufwerthgvc*****
   */
  bindingResourceId?: string;
  /**
   * @remarks
   * The type of the instance resource to which the EIP is attached.
   *    - This field is returned only when Internet Shared Bandwidth metric analysis is queried.
   *    - Valid values:
   *       - EIP_ECS: Elastic Compute Service (ECS) instance type.
   *       - EIP_ENI: Server Load Balancer (SLB) instance type.
   *       - EIP_NAT: NAT gateway instance type.
   *       - EIP_SLB: elastic network interface (ENI) instance type.
   *       - HAVIP_ECS: high availability (HA) virtual IP address type.
   *       - TARGET_IP: IP address type.
   * 
   * @example
   * EIP_NAT
   */
  bindingResourceType?: string;
  /**
   * @remarks
   * The bandwidth.
   *    - This field is returned for VPC, TR, or Internet Shared Bandwidth analysis.
   * 
   * @example
   * 100
   */
  bytes?: number;
  /**
   * @remarks
   * The bandwidth increase.
   *    - This field is returned only when TrafficScenario is set to TRFlowlog and the Order by field is BytesIncrease or BytesIncreaseRatio.
   * 
   * @example
   * 12345
   */
  bytesIncrease?: number;
  /**
   * @remarks
   * The bandwidth increase ratio.
   *    - This field is returned only when TrafficScenario is set to TRFlowlog and the Order by field is BytesIncrease or BytesIncreaseRatio.
   * 
   * @example
   * 0.5
   */
  bytesIncreaseRatio?: number;
  /**
   * @remarks
   * The traffic proportion.
   *    - This field is returned only when TR or VPC flow log analysis is performed.
   * 
   * @example
   * 0.2
   */
  bytesRate?: number;
  /**
   * @remarks
   * The CEN instance ID.
   */
  cenId?: string;
  /**
   * @remarks
   * The autonomous system number.
   *   - This field is returned only when VPC flow log analysis is performed for the VPC Internet scenario.
   * 
   * @example
   * 45102
   */
  clientAsn?: string;
  /**
   * @remarks
   * The city where the client is located.
   *   - This field is returned only when VPC flow log analysis is performed for the VPC Internet scenario.
   * 
   * @example
   * Kowloon.
   */
  clientCity?: string;
  /**
   * @remarks
   * The country where the client is located.
   *   - This field is returned only when VPC flow log analysis is performed for the VPC Internet scenario.
   * 
   * @example
   * China.
   */
  clientCountry?: string;
  /**
   * @remarks
   * The network service provider.
   *   - This field is returned only when VPC flow log analysis is performed for the VPC Internet scenario.
   * 
   * @example
   * Alibaba Cloud.
   */
  clientIsp?: string;
  /**
   * @remarks
   * The province where the client is located.
   *   - This field is returned only when VPC flow log analysis is performed for the VPC Internet scenario.
   * 
   * @example
   * Hong Kong Special Administrative Region.
   */
  clientProvince?: string;
  /**
   * @remarks
   * The destination IP address.
   *    - This field is returned only when 2-tuple analysis is performed for TR or VPC flow log analysis.
   * 
   * @example
   * 192.168.***.0
   */
  destinationIp?: string;
  /**
   * @remarks
   * The destination port.
   *    - This field is returned only when 5-tuple analysis is performed for TR or VPC flow log analysis.
   * 
   * @example
   * 23
   */
  destinationPort?: string;
  /**
   * @remarks
   * The destination region ID.
   *    - This field is returned only when TR flow log analysis is performed.
   * 
   * @example
   * cn-hangzhou
   */
  destinationRegionNo?: string;
  /**
   * @remarks
   * The traffic direction based on the Alibaba Cloud network resource instance. Valid values:
   * - **in**: inbound traffic.
   * - **out**: outbound traffic.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The Differentiated Services Code Point (DSCP) value.
   *    - This field is returned only when TR flow log analysis is performed.
   * 
   * @example
   * 0
   */
  dscp?: string;
  /**
   * @remarks
   * The ECS instance ID of the management node.
   *    - This field is returned only when VPC flow log analysis is performed.
   * 
   * @example
   * i-uf6i1zi6yhq7h***
   */
  ecsId?: string;
  /**
   * @remarks
   * The EIP ID associated with the Internet Shared Bandwidth instance.
   *    - This field is returned only when Internet Shared Bandwidth metric analysis is queried.
   * 
   * @example
   * eip-fb6wzjl9hm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The elastic network interface (ENI) ID.
   *    - This field is returned only when VPC flow log analysis is performed.
   * 
   * @example
   * eni-8vbf2jxul***
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The number of packets.
   *    - This field is returned for VPC, TR, or CBWP flow log analysis.
   * 
   * @example
   * 100
   */
  packets?: number;
  packetsIncrease?: number;
  packetsIncreaseRatio?: number;
  /**
   * @remarks
   * The number of packets dropped due to blackhole routing.
   *    - This field is returned only when TR flow log analysis is performed.
   * 
   * @example
   * 4
   */
  packetsLostBlackhole?: number;
  /**
   * @remarks
   * The number of packets dropped due to no route.
   *    - This field is returned only when TR flow log analysis is performed.
   * 
   * @example
   * 2
   */
  packetsLostNoRoute?: number;
  /**
   * @remarks
   * The number of packets dropped due to TTL expiration.
   *    - This field is returned only when TR flow log analysis is performed.
   * 
   * @example
   * 7
   */
  packetsLostTTLExpired?: number;
  /**
   * @remarks
   * The network protocol.
   *    - This field is returned only when 5-tuple analysis is performed for TR or VPC flow log analysis.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The public IP address of the associated EIP.
   *    - This field is returned only when Internet Shared Bandwidth metric analysis is queried.
   * 
   * @example
   * 118.31.***.86
   */
  publicIpAddress?: string;
  /**
   * @remarks
   * The region where the flow log resides.
   *   - This field is returned only when VPC flow log analysis is performed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The TCP RTT.
   *    - This field is returned only when VPC flow log analysis is performed.
   * 
   * @example
   * 2
   */
  roundTripTime?: number;
  roundTripTimeIncrease?: number;
  /**
   * @remarks
   * The source IP address.
   *    - This field is returned only when 2-tuple analysis is performed for TR or VPC flow log analysis.
   * 
   * @example
   * 47.92.245.***
   */
  sourceIp?: string;
  /**
   * @remarks
   * The source port.
   *    - This field is returned only when 5-tuple analysis is performed for TR or VPC flow log analysis.
   * 
   * @example
   * 5432
   */
  sourcePort?: string;
  /**
   * @remarks
   * The source region ID.
   *    - This field is returned only when TR flow log analysis is performed.
   * 
   * @example
   * cn-hangzhou
   */
  sourceRegionNo?: string;
  /**
   * @remarks
   * The traffic path.
   *    - This field is returned only when 2-tuple or 5-tuple analysis is performed for VPC flow log analysis.
   * 
   * @example
   * all
   */
  trafficPath?: string;
  /**
   * @remarks
   * The network instance connection ID.
   *    - This field is returned only when TR flow log analysis is performed.
   * 
   * @example
   * tr-attach-bfde1cd4cj***
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The account ID of the destination cloud resource instance connected to the transit router.
   *    - This field is returned only when TR flow log analysis is performed.
   * 
   * @example
   * 1906814138****
   */
  transitRouterDestinationAccountId?: string;
  /**
   * @remarks
   * The zone of the destination resource connected to the transit router.
   *    - This field is returned only for the VPC connection traffic scenario under TR flow log analysis.
   * 
   * @example
   * cn-hangzhou-j
   */
  transitRouterDestinationAvailableZone?: string;
  /**
   * @remarks
   * The ENI ID of the destination resource connected to the transit router.
   *    - This field is returned only for the VPC connection traffic scenario under TR flow log analysis.
   * 
   * @example
   * eni-fdbf2jxulm***
   */
  transitRouterDestinationNetworkInterface?: string;
  /**
   * @remarks
   * The ID of the destination cloud resource instance connected to the transit router.
   *    - This field is returned only when TR flow log analysis is performed.
   * 
   * @example
   * tr-attach-bfve1cd4cjp****
   */
  transitRouterDestinationResourceId?: string;
  /**
   * @remarks
   * The vSwitch ID of the destination resource connected to the transit router.
   *    - This field is returned only for the VPC connection traffic scenario under TR flow log analysis.
   * 
   * @example
   * vsw-2zeekevlhxpqxu****
   */
  transitRouterDestinationVSwitchId?: string;
  /**
   * @remarks
   * The transit router instance ID.
   *    - This field is returned only when TR flow log analysis is performed.
   * 
   * @example
   * tr-2zefvwy2fz3444***
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The transit router peering connection instance ID.
   *    - This field is returned only when TR flow log analysis is performed.
   * 
   * @example
   * tr-attach-okvj1cd4cjp***
   */
  transitRouterPairAttachmentId?: string;
  /**
   * @remarks
   * The account ID of the source cloud resource instance connected to the transit router.
   *    - This field is returned only when TR flow log analysis is performed.
   * 
   * @example
   * 1906814138***
   */
  transitRouterSourceAccountId?: string;
  /**
   * @remarks
   * The zone of the source resource connected to the transit router.
   *    - This field is returned only for the VPC connection traffic scenario under TR flow log analysis.
   * 
   * @example
   * cn-hangzhou-j
   */
  transitRouterSourceAvailableZone?: string;
  /**
   * @remarks
   * The ENI ID of the source resource connected to the transit router.
   *    - This field is returned only for the VPC connection traffic scenario under TR flow log analysis.
   * 
   * @example
   * eni-8vbf2jxulma***
   */
  transitRouterSourceNetworkInterface?: string;
  /**
   * @remarks
   * The ID of the source cloud resource instance connected to the transit router.
   *    - This field is returned only when TR flow log analysis is performed.
   * 
   * @example
   * tr-attach-hvve1cd4cjpj***
   */
  transitRouterSourceResourceId?: string;
  /**
   * @remarks
   * The vSwitch ID of the source resource connected to the transit router.
   *    - This field is returned only for the VPC connection traffic scenario under TR flow log analysis.
   * 
   * @example
   * vsw-ikfdkevlhxpqxuz****
   */
  transitRouterSourceVSwitchId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   *    - This field is returned only when VPC flow log analysis is performed.
   * 
   * @example
   * vsw-2zeekevlh****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   *    - This field is returned only when VPC flow log analysis is performed.
   * 
   * @example
   * vpc-m5ec6i0h5xss***
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      bindingResourceId: 'BindingResourceId',
      bindingResourceType: 'BindingResourceType',
      bytes: 'Bytes',
      bytesIncrease: 'BytesIncrease',
      bytesIncreaseRatio: 'BytesIncreaseRatio',
      bytesRate: 'BytesRate',
      cenId: 'CenId',
      clientAsn: 'ClientAsn',
      clientCity: 'ClientCity',
      clientCountry: 'ClientCountry',
      clientIsp: 'ClientIsp',
      clientProvince: 'ClientProvince',
      destinationIp: 'DestinationIp',
      destinationPort: 'DestinationPort',
      destinationRegionNo: 'DestinationRegionNo',
      direction: 'Direction',
      dscp: 'Dscp',
      ecsId: 'EcsId',
      instanceId: 'InstanceId',
      networkInterfaceId: 'NetworkInterfaceId',
      packets: 'Packets',
      packetsIncrease: 'PacketsIncrease',
      packetsIncreaseRatio: 'PacketsIncreaseRatio',
      packetsLostBlackhole: 'PacketsLostBlackhole',
      packetsLostNoRoute: 'PacketsLostNoRoute',
      packetsLostTTLExpired: 'PacketsLostTTLExpired',
      protocol: 'Protocol',
      publicIpAddress: 'PublicIpAddress',
      regionId: 'RegionId',
      roundTripTime: 'RoundTripTime',
      roundTripTimeIncrease: 'RoundTripTimeIncrease',
      sourceIp: 'SourceIp',
      sourcePort: 'SourcePort',
      sourceRegionNo: 'SourceRegionNo',
      trafficPath: 'TrafficPath',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterDestinationAccountId: 'TransitRouterDestinationAccountId',
      transitRouterDestinationAvailableZone: 'TransitRouterDestinationAvailableZone',
      transitRouterDestinationNetworkInterface: 'TransitRouterDestinationNetworkInterface',
      transitRouterDestinationResourceId: 'TransitRouterDestinationResourceId',
      transitRouterDestinationVSwitchId: 'TransitRouterDestinationVSwitchId',
      transitRouterId: 'TransitRouterId',
      transitRouterPairAttachmentId: 'TransitRouterPairAttachmentId',
      transitRouterSourceAccountId: 'TransitRouterSourceAccountId',
      transitRouterSourceAvailableZone: 'TransitRouterSourceAvailableZone',
      transitRouterSourceNetworkInterface: 'TransitRouterSourceNetworkInterface',
      transitRouterSourceResourceId: 'TransitRouterSourceResourceId',
      transitRouterSourceVSwitchId: 'TransitRouterSourceVSwitchId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingResourceId: 'string',
      bindingResourceType: 'string',
      bytes: 'number',
      bytesIncrease: 'number',
      bytesIncreaseRatio: 'number',
      bytesRate: 'number',
      cenId: 'string',
      clientAsn: 'string',
      clientCity: 'string',
      clientCountry: 'string',
      clientIsp: 'string',
      clientProvince: 'string',
      destinationIp: 'string',
      destinationPort: 'string',
      destinationRegionNo: 'string',
      direction: 'string',
      dscp: 'string',
      ecsId: 'string',
      instanceId: 'string',
      networkInterfaceId: 'string',
      packets: 'number',
      packetsIncrease: 'number',
      packetsIncreaseRatio: 'number',
      packetsLostBlackhole: 'number',
      packetsLostNoRoute: 'number',
      packetsLostTTLExpired: 'number',
      protocol: 'string',
      publicIpAddress: 'string',
      regionId: 'string',
      roundTripTime: 'number',
      roundTripTimeIncrease: 'number',
      sourceIp: 'string',
      sourcePort: 'string',
      sourceRegionNo: 'string',
      trafficPath: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterDestinationAccountId: 'string',
      transitRouterDestinationAvailableZone: 'string',
      transitRouterDestinationNetworkInterface: 'string',
      transitRouterDestinationResourceId: 'string',
      transitRouterDestinationVSwitchId: 'string',
      transitRouterId: 'string',
      transitRouterPairAttachmentId: 'string',
      transitRouterSourceAccountId: 'string',
      transitRouterSourceAvailableZone: 'string',
      transitRouterSourceNetworkInterface: 'string',
      transitRouterSourceResourceId: 'string',
      transitRouterSourceVSwitchId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNisTrafficRankingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of traffic ranking analysis results.
   */
  flowRankingList?: DescribeNisTrafficRankingResponseBodyFlowRankingList[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * LoeJLhK0fsDqYoXkXieZUqB2vWnccJtVnsyKu9KxFFOMQxtV8XckOg5lk7F2bhC+
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the traffic ranking analysis result.
   * 
   * @example
   * task-7619ecb1db9148bab9f4
   */
  nisTrafficRankingId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DAC4BE1-BEEA-5D84-BE06-E1B796F3B941
   */
  requestId?: string;
  /**
   * @remarks
   * The task running status.
   * 
   * @example
   * Complete
   */
  status?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 72
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      flowRankingList: 'FlowRankingList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nisTrafficRankingId: 'NisTrafficRankingId',
      requestId: 'RequestId',
      status: 'Status',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowRankingList: { 'type': 'array', 'itemType': DescribeNisTrafficRankingResponseBodyFlowRankingList },
      maxResults: 'number',
      nextToken: 'string',
      nisTrafficRankingId: 'string',
      requestId: 'string',
      status: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flowRankingList)) {
      $dara.Model.validateArray(this.flowRankingList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

