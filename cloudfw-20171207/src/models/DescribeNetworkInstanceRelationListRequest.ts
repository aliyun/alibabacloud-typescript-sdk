// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInstanceRelationListRequest extends $dara.Model {
  /**
   * @example
   * cen
   */
  connectType?: string;
  /**
   * @example
   * notconfigured
   */
  firewallConfigureStatus?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  networkInstanceId?: string;
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

