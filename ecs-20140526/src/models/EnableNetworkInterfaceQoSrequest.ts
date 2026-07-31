// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableNetworkInterfaceQoSRequestQoS extends $dara.Model {
  /**
   * @remarks
   * The maximum inbound internal bandwidth limit.
   * 
   * Unit: kbit/s. Increment: 1000 (1 Mbit/s). Value range: [50000, +∞).
   * 
   * @example
   * 50000
   */
  bandwidthRx?: number;
  /**
   * @remarks
   * The maximum outbound internal bandwidth limit.
   * 
   * Unit: kbit/s. Increment: 1000 (1 Mbit/s). Value range: [50000, +∞).
   * 
   * @example
   * 50000
   */
  bandwidthTx?: number;
  /**
   * @remarks
   * The maximum number of sessions.
   * 
   * Increment: 10000. Value range: [10000, +∞).
   * 
   * @example
   * 50000
   */
  concurrentConnections?: number;
  /**
   * @remarks
   * The inbound internal packet forwarding rate.
   * 
   * Unit: pps. Increment: 10000. Value range: [10000, +∞).
   * 
   * @example
   * 50000
   */
  ppsRx?: number;
  /**
   * @remarks
   * The outbound internal packet forwarding rate.
   * 
   * Unit: pps. Increment: 10000. Value range: [10000, +∞).
   * 
   * @example
   * 50000
   */
  ppsTx?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthRx: 'BandwidthRx',
      bandwidthTx: 'BandwidthTx',
      concurrentConnections: 'ConcurrentConnections',
      ppsRx: 'PpsRx',
      ppsTx: 'PpsTx',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthRx: 'number',
      bandwidthTx: 'number',
      concurrentConnections: 'number',
      ppsRx: 'number',
      ppsTx: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableNetworkInterfaceQoSRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the network interface controller (NIC).
   * 
   * This parameter is required.
   * 
   * @example
   * eni-2zeh9atclduxvf1z****
   */
  networkInterfaceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The QoS rate limiting settings.
   */
  qoS?: EnableNetworkInterfaceQoSRequestQoS;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceId: 'NetworkInterfaceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qoS: 'QoS',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      qoS: EnableNetworkInterfaceQoSRequestQoS,
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.qoS && typeof (this.qoS as any).validate === 'function') {
      (this.qoS as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

