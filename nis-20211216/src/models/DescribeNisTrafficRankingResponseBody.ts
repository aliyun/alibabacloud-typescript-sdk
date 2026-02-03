// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisTrafficRankingResponseBodyFlowRankingList extends $dara.Model {
  /**
   * @example
   * ngw-ufwerthgvc*****
   */
  bindingResourceId?: string;
  /**
   * @example
   * EIP_NAT
   */
  bindingResourceType?: string;
  /**
   * @example
   * 100
   */
  bytes?: number;
  /**
   * @example
   * 0.2
   */
  bytesRate?: number;
  /**
   * @example
   * 45102
   */
  clientAsn?: string;
  clientCity?: string;
  clientCountry?: string;
  clientIsp?: string;
  clientProvince?: string;
  /**
   * @example
   * 192.168.***.0
   */
  destinationIp?: string;
  /**
   * @example
   * 23
   */
  destinationPort?: string;
  /**
   * @example
   * cn-hangzhou
   */
  destinationRegionNo?: string;
  /**
   * @example
   * in
   */
  direction?: string;
  /**
   * @example
   * 0
   */
  dscp?: string;
  /**
   * @example
   * i-uf6i1zi6yhq7h***
   */
  ecsId?: string;
  /**
   * @example
   * eip-fb6wzjl9hm****
   */
  instanceId?: string;
  /**
   * @example
   * eni-8vbf2jxul***
   */
  networkInterfaceId?: string;
  /**
   * @example
   * 100
   */
  packets?: number;
  /**
   * @example
   * 4
   */
  packetsLostBlackhole?: number;
  /**
   * @example
   * 2
   */
  packetsLostNoRoute?: number;
  /**
   * @example
   * 7
   */
  packetsLostTTLExpired?: number;
  /**
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @example
   * 118.31.***.86
   */
  publicIpAddress?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 2
   */
  roundTripTime?: number;
  /**
   * @example
   * 47.92.245.***
   */
  sourceIp?: string;
  /**
   * @example
   * 5432
   */
  sourcePort?: string;
  /**
   * @example
   * cn-hangzhou
   */
  sourceRegionNo?: string;
  /**
   * @example
   * all
   */
  trafficPath?: string;
  /**
   * @example
   * tr-attach-bfde1cd4cj***
   */
  transitRouterAttachmentId?: string;
  /**
   * @example
   * 1906814138****
   */
  transitRouterDestinationAccountId?: string;
  /**
   * @example
   * cn-hangzhou-j
   */
  transitRouterDestinationAvailableZone?: string;
  /**
   * @example
   * eni-fdbf2jxulm***
   */
  transitRouterDestinationNetworkInterface?: string;
  /**
   * @example
   * tr-attach-bfve1cd4cjp****
   */
  transitRouterDestinationResourceId?: string;
  /**
   * @example
   * vsw-2zeekevlhxpqxu****
   */
  transitRouterDestinationVSwitchId?: string;
  /**
   * @example
   * tr-2zefvwy2fz3444***
   */
  transitRouterId?: string;
  /**
   * @example
   * tr-attach-okvj1cd4cjp***
   */
  transitRouterPairAttachmentId?: string;
  /**
   * @example
   * 1906814138***
   */
  transitRouterSourceAccountId?: string;
  /**
   * @example
   * cn-hangzhou-j
   */
  transitRouterSourceAvailableZone?: string;
  /**
   * @example
   * eni-8vbf2jxulma***
   */
  transitRouterSourceNetworkInterface?: string;
  /**
   * @example
   * tr-attach-hvve1cd4cjpj***
   */
  transitRouterSourceResourceId?: string;
  /**
   * @example
   * vsw-ikfdkevlhxpqxuz****
   */
  transitRouterSourceVSwitchId?: string;
  /**
   * @example
   * vsw-2zeekevlh****
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-m5ec6i0h5xss***
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      bindingResourceId: 'BindingResourceId',
      bindingResourceType: 'BindingResourceType',
      bytes: 'Bytes',
      bytesRate: 'BytesRate',
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
      packetsLostBlackhole: 'PacketsLostBlackhole',
      packetsLostNoRoute: 'PacketsLostNoRoute',
      packetsLostTTLExpired: 'PacketsLostTTLExpired',
      protocol: 'Protocol',
      publicIpAddress: 'PublicIpAddress',
      regionId: 'RegionId',
      roundTripTime: 'RoundTripTime',
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
      bytesRate: 'number',
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
      packetsLostBlackhole: 'number',
      packetsLostNoRoute: 'number',
      packetsLostTTLExpired: 'number',
      protocol: 'string',
      publicIpAddress: 'string',
      regionId: 'string',
      roundTripTime: 'number',
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
  flowRankingList?: DescribeNisTrafficRankingResponseBodyFlowRankingList[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * LoeJLhK0fsDqYoXkXieZUqB2vWnccJtVnsyKu9KxFFOMQxtV8XckOg5lk7F2bhC+
   */
  nextToken?: string;
  /**
   * @example
   * task-7619ecb1db9148bab9f4
   */
  nisTrafficRankingId?: string;
  /**
   * @example
   * 4DAC4BE1-BEEA-5D84-BE06-E1B796F3B941
   */
  requestId?: string;
  /**
   * @example
   * Complete
   */
  status?: string;
  /**
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

