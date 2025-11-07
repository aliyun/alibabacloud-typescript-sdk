// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInternetTupleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The access point of Alibaba Cloud.
   * 
   * >  This parameter is valid only if you set **InstanceId** to the instance ID of an Anycast elastic IP address (EIP).
   * 
   * @example
   * cn-hongkong-pop
   */
  accessRegion?: string;
  /**
   * @remarks
   * The beginning of the time range that you queried. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1684373600099
   */
  beginTime?: string;
  /**
   * @remarks
   * The traffic volume. Unit: bytes.
   * 
   * @example
   * 88
   */
  byteCount?: number;
  /**
   * @remarks
   * The local city.
   * 
   * @example
   * Nanjing
   */
  cloudCity?: string;
  /**
   * @remarks
   * The local country or region.
   * 
   * @example
   * China
   */
  cloudCountry?: string;
  /**
   * @remarks
   * The local IP address.
   * 
   * @example
   * 112.74.XX.XX
   */
  cloudIp?: string;
  /**
   * @remarks
   * The local ISP.
   * 
   * @example
   * China Mobile
   */
  cloudIsp?: string;
  /**
   * @remarks
   * The local port.
   * 
   * @example
   * 443
   */
  cloudPort?: string;
  /**
   * @remarks
   * The service code of the instance to which the local IP address belongs.
   * 
   * @example
   * EIP
   */
  cloudProduct?: string;
  /**
   * @remarks
   * The local province.
   * 
   * @example
   * Jiangsu
   */
  cloudProvince?: string;
  /**
   * @remarks
   * The direction of Internet traffic. Valid values:
   * 
   * *   **in**: inbound
   * *   **out**: outbound
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The inbound traffic volume. Unit: bytes.
   * 
   * @example
   * 88
   */
  inByteCount?: number;
  /**
   * @remarks
   * The number of inbound disordered packets.
   * 
   * @example
   * 2
   */
  inOutOrderCount?: number;
  /**
   * @remarks
   * The number of inbound packets.
   * 
   * @example
   * 33
   */
  inPacketCount?: number;
  /**
   * @remarks
   * The number of inbound repeated packets.
   * 
   * @example
   * 0
   */
  inRetranCount?: number;
  /**
   * @remarks
   * The ID of the instance to which the local IP address belongs.
   * 
   * @example
   * eip-sample*
   */
  instanceId?: string;
  /**
   * @remarks
   * The remote city. In most cases, this parameter is empty if you set **OtherCountry** to a country except China.
   * 
   * @example
   * Austin
   */
  otherCity?: string;
  /**
   * @remarks
   * The remote country or region.
   * 
   * @example
   * United States
   */
  otherCountry?: string;
  /**
   * @remarks
   * The remote IP address.
   * 
   * @example
   * 122.112.XX.XX
   */
  otherIp?: string;
  /**
   * @remarks
   * The remote ISP.
   * 
   * @example
   * amazon.com
   */
  otherIsp?: string;
  /**
   * @remarks
   * The remote port.
   * 
   * @example
   * 40002
   */
  otherPort?: string;
  /**
   * @remarks
   * The service code of the instance to which the remote IP address belongs. If the IP address is not on the cloud, this parameter is empty.
   * 
   * @example
   * ECS
   */
  otherProduct?: string;
  /**
   * @remarks
   * The remote province. In most cases, this parameter is empty if you set **OtherCountry** to a country except China.
   * 
   * @example
   * Texas
   */
  otherProvince?: string;
  /**
   * @remarks
   * The outbound traffic volume. Unit: bytes.
   * 
   * @example
   * 66
   */
  outByteCount?: number;
  /**
   * @remarks
   * The number of disordered packets.
   * 
   * @example
   * 1
   */
  outOrderCount?: number;
  /**
   * @remarks
   * The number of outbound disordered packets.
   * 
   * @example
   * 1
   */
  outOutOrderCount?: number;
  /**
   * @remarks
   * The number of outbound packets.
   * 
   * @example
   * 22
   */
  outPacketCount?: number;
  /**
   * @remarks
   * The number of outbound repeated packets.
   * 
   * @example
   * 1
   */
  outRetranCount?: number;
  /**
   * @remarks
   * The number of packets.
   * 
   * @example
   * 66
   */
  packetCount?: number;
  /**
   * @remarks
   * The protocol number.
   * 
   * @example
   * 6
   */
  protocol?: string;
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
   * The round-trip time (RTT). Unit: milliseconds.
   * 
   * @example
   * 10000
   */
  rtt?: number;
  static names(): { [key: string]: string } {
    return {
      accessRegion: 'AccessRegion',
      beginTime: 'BeginTime',
      byteCount: 'ByteCount',
      cloudCity: 'CloudCity',
      cloudCountry: 'CloudCountry',
      cloudIp: 'CloudIp',
      cloudIsp: 'CloudIsp',
      cloudPort: 'CloudPort',
      cloudProduct: 'CloudProduct',
      cloudProvince: 'CloudProvince',
      direction: 'Direction',
      inByteCount: 'InByteCount',
      inOutOrderCount: 'InOutOrderCount',
      inPacketCount: 'InPacketCount',
      inRetranCount: 'InRetranCount',
      instanceId: 'InstanceId',
      otherCity: 'OtherCity',
      otherCountry: 'OtherCountry',
      otherIp: 'OtherIp',
      otherIsp: 'OtherIsp',
      otherPort: 'OtherPort',
      otherProduct: 'OtherProduct',
      otherProvince: 'OtherProvince',
      outByteCount: 'OutByteCount',
      outOrderCount: 'OutOrderCount',
      outOutOrderCount: 'OutOutOrderCount',
      outPacketCount: 'OutPacketCount',
      outRetranCount: 'OutRetranCount',
      packetCount: 'PacketCount',
      protocol: 'Protocol',
      retransmitRate: 'RetransmitRate',
      rtt: 'Rtt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegion: 'string',
      beginTime: 'string',
      byteCount: 'number',
      cloudCity: 'string',
      cloudCountry: 'string',
      cloudIp: 'string',
      cloudIsp: 'string',
      cloudPort: 'string',
      cloudProduct: 'string',
      cloudProvince: 'string',
      direction: 'string',
      inByteCount: 'number',
      inOutOrderCount: 'number',
      inPacketCount: 'number',
      inRetranCount: 'number',
      instanceId: 'string',
      otherCity: 'string',
      otherCountry: 'string',
      otherIp: 'string',
      otherIsp: 'string',
      otherPort: 'string',
      otherProduct: 'string',
      otherProvince: 'string',
      outByteCount: 'number',
      outOrderCount: 'number',
      outOutOrderCount: 'number',
      outPacketCount: 'number',
      outRetranCount: 'number',
      packetCount: 'number',
      protocol: 'string',
      retransmitRate: 'number',
      rtt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInternetTupleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ranking result of Internet traffic data.
   */
  data?: GetInternetTupleResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
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
      data: { 'type': 'array', 'itemType': GetInternetTupleResponseBodyData },
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

