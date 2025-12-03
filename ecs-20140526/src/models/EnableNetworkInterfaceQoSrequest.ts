// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableNetworkInterfaceQoSRequestQoS extends $dara.Model {
  /**
   * @example
   * 50000
   */
  bandwidthRx?: number;
  /**
   * @example
   * 50000
   */
  bandwidthTx?: number;
  /**
   * @example
   * 50000
   */
  concurrentConnections?: number;
  /**
   * @example
   * 50000
   */
  ppsRx?: number;
  /**
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
   * This parameter is required.
   * 
   * @example
   * eni-2zeh9atclduxvf1z****
   */
  networkInterfaceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  qoS?: EnableNetworkInterfaceQoSRequestQoS;
  /**
   * @remarks
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

