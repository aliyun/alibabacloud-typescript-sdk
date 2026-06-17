// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInstanceRelationListRequest extends $dara.Model {
  /**
   * @remarks
   * The connection type.
   * 
   * @example
   * cen
   */
  connectType?: string;
  /**
   * @remarks
   * The configuration status of Cloud Firewall.
   * 
   * @example
   * notconfigured
   */
  firewallConfigureStatus?: string;
  /**
   * @remarks
   * The language of the response.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the local network instance.
   * 
   * @example
   * vpc-2vcwkr****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The ID of the peer network instance.
   * 
   * @example
   * vpc-dsf232d****
   */
  peerNetworkInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectType: 'ConnectType',
      firewallConfigureStatus: 'FirewallConfigureStatus',
      lang: 'Lang',
      networkInstanceId: 'NetworkInstanceId',
      peerNetworkInstanceId: 'PeerNetworkInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectType: 'string',
      firewallConfigureStatus: 'string',
      lang: 'string',
      networkInstanceId: 'string',
      peerNetworkInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

