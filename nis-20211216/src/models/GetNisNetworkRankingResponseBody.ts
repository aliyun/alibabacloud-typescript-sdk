// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNisNetworkRankingResponseBodyData extends $dara.Model {
  /**
   * @example
   * 66
   */
  activeSessionCount?: number;
  /**
   * @example
   * 129103
   */
  asn?: string;
  /**
   * @example
   * tr-sample*
   */
  attachmentId?: string;
  /**
   * @example
   * cbwp-sample*
   */
  bandwidthPackageId?: string;
  /**
   * @example
   * 1024
   */
  byteCount?: number;
  city?: string;
  country?: string;
  /**
   * @example
   * 2.2.XX.XX
   */
  destinationIp?: string;
  destinationIsp?: string;
  /**
   * @example
   * 80
   */
  destinationPort?: string;
  /**
   * @example
   * cn-hangzhou
   */
  destinationRegionNo?: string;
  /**
   * @example
   * cn-hangzhou-b
   */
  destinationZone?: string;
  /**
   * @example
   * 120.238.XX.XX
   */
  IP?: string;
  /**
   * @example
   * 10
   */
  inBps?: number;
  /**
   * @example
   * 3
   */
  inPps?: number;
  /**
   * @example
   * eip-sample*
   */
  instanceId?: string;
  isp?: string;
  /**
   * @example
   * 18
   */
  newSessionPerSecond?: number;
  /**
   * @example
   * 88
   */
  outBps?: number;
  /**
   * @example
   * 8
   */
  outPps?: number;
  /**
   * @example
   * 66
   */
  packetCount?: number;
  /**
   * @example
   * 6
   */
  protocol?: string;
  province?: string;
  /**
   * @example
   * 23
   */
  RTT?: number;
  /**
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @example
   * 0.1
   */
  retransmitRate?: number;
  /**
   * @example
   * 42.120.XX.XX
   */
  sourceIp?: string;
  sourceIsp?: string;
  /**
   * @example
   * 443
   */
  sourcePort?: string;
  /**
   * @example
   * cn-hangzhou-a
   */
  sourceZone?: string;
  /**
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
      IP: 'IP',
      inBps: 'InBps',
      inPps: 'InPps',
      instanceId: 'InstanceId',
      isp: 'Isp',
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
      IP: 'string',
      inBps: 'number',
      inPps: 'number',
      instanceId: 'string',
      isp: 'string',
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
  data?: GetNisNetworkRankingResponseBodyData[];
  /**
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

