// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsProtectedResource extends $dara.Model {
  /**
   * @remarks
   * The number of protected resources.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The protected express connect routers.
   */
  ecrList?: string[];
  /**
   * @remarks
   * The protected peer transit routers.
   */
  peerTrList?: string[];
  /**
   * @remarks
   * The protected virtual border routers (VBRs).
   */
  vbrList?: string[];
  /**
   * @remarks
   * The protected VPCs.
   */
  vpcList?: string[];
  /**
   * @remarks
   * The protected VPN gateways.
   */
  vpnList?: string[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ecrList: 'EcrList',
      peerTrList: 'PeerTrList',
      vbrList: 'VbrList',
      vpcList: 'VpcList',
      vpnList: 'VpnList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ecrList: { 'type': 'array', 'itemType': 'string' },
      peerTrList: { 'type': 'array', 'itemType': 'string' },
      vbrList: { 'type': 'array', 'itemType': 'string' },
      vpcList: { 'type': 'array', 'itemType': 'string' },
      vpnList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ecrList)) {
      $dara.Model.validateArray(this.ecrList);
    }
    if(Array.isArray(this.peerTrList)) {
      $dara.Model.validateArray(this.peerTrList);
    }
    if(Array.isArray(this.vbrList)) {
      $dara.Model.validateArray(this.vbrList);
    }
    if(Array.isArray(this.vpcList)) {
      $dara.Model.validateArray(this.vpcList);
    }
    if(Array.isArray(this.vpnList)) {
      $dara.Model.validateArray(this.vpnList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

