// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNisNetworkRankingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of concurrent connections.
   * 
   * @example
   * 66
   */
  activeSessionCount?: number;
  /**
   * @remarks
   * The autonomous system number (ASN) of the client ISP.
   * 
   * @example
   * 129103
   */
  asn?: string;
  /**
   * @remarks
   * The transit router attachment ID.
   * 
   * @example
   * tr-sample*
   */
  attachmentId?: string;
  /**
   * @remarks
   * The bandwidth package instance ID.
   * 
   * @example
   * cbwp-sample*
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The traffic volume in bytes.
   * 
   * @example
   * 1024
   */
  byteCount?: number;
  /**
   * @remarks
   * The city where the client is located.
   * 
   * @example
   * Chengdu.
   */
  city?: string;
  /**
   * @remarks
   * The country where the client is located.
   * 
   * @example
   * China.
   */
  country?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 2.2.XX.XX
   */
  destinationIp?: string;
  /**
   * @remarks
   * The destination ISP.
   * 
   * @example
   * Alibaba Cloud.
   */
  destinationIsp?: string;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 80
   */
  destinationPort?: string;
  /**
   * @remarks
   * The destination region ID.
   * 
   * @example
   * cn-hangzhou
   */
  destinationRegionNo?: string;
  /**
   * @remarks
   * The destination zone for probing.
   * 
   * @example
   * cn-hangzhou-b
   */
  destinationZone?: string;
  globalCountryCode?: string;
  globalProvinceCode?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 120.238.XX.XX
   */
  IP?: string;
  /**
   * @remarks
   * The inbound bandwidth. Unit: bit/s.
   * 
   * @example
   * 10
   */
  inBps?: number;
  /**
   * @remarks
   * The inbound packet rate. Unit: packets per second.
   * 
   * @example
   * 3
   */
  inPps?: number;
  /**
   * @remarks
   * The cloud resource instance ID corresponding to each scenario. For example, in the cross-region network traffic analysis scenario, this represents the CEN ID. In the public network scenario, this represents the EIP ID, ECS instance ID, or CLB ID.
   * 
   * @example
   * eip-sample*
   */
  instanceId?: string;
  /**
   * @remarks
   * The ISP of the client.
   * 
   * @example
   * China Mobile.
   */
  isp?: string;
  lineType?: string;
  /**
   * @remarks
   * The number of new connections per second.
   * 
   * @example
   * 18
   */
  newSessionPerSecond?: number;
  /**
   * @remarks
   * The outbound bandwidth. Unit: bit/s.
   * 
   * @example
   * 88
   */
  outBps?: number;
  /**
   * @remarks
   * The outbound packet rate. Unit: packets per second.
   * 
   * @example
   * 8
   */
  outPps?: number;
  /**
   * @remarks
   * The number of traffic packets.
   * 
   * @example
   * 66
   */
  packetCount?: number;
  /**
   * @remarks
   * The network protocol.
   * 
   * @example
   * 6
   */
  protocol?: string;
  /**
   * @remarks
   * The province or state where the client is located.
   * 
   * @example
   * Sichuan.
   */
  province?: string;
  /**
   * @remarks
   * The latency. Unit: ms.
   * 
   * @example
   * 23
   */
  RTT?: number;
  /**
   * @remarks
   * The Alibaba Cloud region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @remarks
   * The retransmission rate of TCP packets.
   * 
   * @example
   * 0.1
   */
  retransmitRate?: number;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 42.120.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The source Internet Service Provider (ISP).
   * 
   * @example
   * China Mobile.
   */
  sourceIsp?: string;
  /**
   * @remarks
   * The source port.
   * 
   * @example
   * 443
   */
  sourcePort?: string;
  sourceRegion?: string;
  /**
   * @remarks
   * The source zone for probing.
   * 
   * @example
   * cn-hangzhou-a
   */
  sourceZone?: string;
  /**
   * @remarks
   * The instance ID of the virtual border router (VBR).
   * 
   * @example
   * vbr-sample*
   */
  vbrId?: string;
  static names(): { [key: string]: string } {
    return {
      activeSessionCount: 'ActiveSessionCount',
      asn: 'Asn',
      attachmentId: 'AttachmentId',
      bandwidthPackageId: 'BandwidthPackageId',
      byteCount: 'ByteCount',
      city: 'City',
      country: 'Country',
      destinationIp: 'DestinationIp',
      destinationIsp: 'DestinationIsp',
      destinationPort: 'DestinationPort',
      destinationRegionNo: 'DestinationRegionNo',
      destinationZone: 'DestinationZone',
      globalCountryCode: 'GlobalCountryCode',
      globalProvinceCode: 'GlobalProvinceCode',
      IP: 'IP',
      inBps: 'InBps',
      inPps: 'InPps',
      instanceId: 'InstanceId',
      isp: 'Isp',
      lineType: 'LineType',
      newSessionPerSecond: 'NewSessionPerSecond',
      outBps: 'OutBps',
      outPps: 'OutPps',
      packetCount: 'PacketCount',
      protocol: 'Protocol',
      province: 'Province',
      RTT: 'RTT',
      regionNo: 'RegionNo',
      retransmitRate: 'RetransmitRate',
      sourceIp: 'SourceIp',
      sourceIsp: 'SourceIsp',
      sourcePort: 'SourcePort',
      sourceRegion: 'SourceRegion',
      sourceZone: 'SourceZone',
      vbrId: 'VbrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeSessionCount: 'number',
      asn: 'string',
      attachmentId: 'string',
      bandwidthPackageId: 'string',
      byteCount: 'number',
      city: 'string',
      country: 'string',
      destinationIp: 'string',
      destinationIsp: 'string',
      destinationPort: 'string',
      destinationRegionNo: 'string',
      destinationZone: 'string',
      globalCountryCode: 'string',
      globalProvinceCode: 'string',
      IP: 'string',
      inBps: 'number',
      inPps: 'number',
      instanceId: 'string',
      isp: 'string',
      lineType: 'string',
      newSessionPerSecond: 'number',
      outBps: 'number',
      outPps: 'number',
      packetCount: 'number',
      protocol: 'string',
      province: 'string',
      RTT: 'number',
      regionNo: 'string',
      retransmitRate: 'number',
      sourceIp: 'string',
      sourceIsp: 'string',
      sourcePort: 'string',
      sourceRegion: 'string',
      sourceZone: 'string',
      vbrId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkRankingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of cloud network metric ranking data.
   */
  data?: GetNisNetworkRankingResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetNisNetworkRankingResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

