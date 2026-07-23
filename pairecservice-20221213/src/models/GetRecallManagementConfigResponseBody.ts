// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecallManagementConfigResponseBodyNetworkConfigs extends $dara.Model {
  /**
   * @remarks
   * The private endpoint.
   * 
   * @example
   * http://xxx
   */
  privateLinkAddress?: string;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * ""
   */
  publicEndpoint?: string;
  /**
   * @remarks
   * The network connectivity status. Valid values:
   * 
   * - Connecting: connecting.
   * 
   * - Connected: connected.
   * 
   * - ConnectionFailed: connection failed.
   * 
   * - Updating: updating.
   * 
   * - UpdateFailed: update failed.
   * 
   * @example
   * Connecting
   */
  status?: string;
  /**
   * @remarks
   * The public network connection token.
   * 
   * @example
   * ""
   */
  token?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The zones.
   */
  vswitchIds?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      privateLinkAddress: 'PrivateLinkAddress',
      publicEndpoint: 'PublicEndpoint',
      status: 'Status',
      token: 'Token',
      vpcId: 'VpcId',
      vswitchIds: 'VswitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateLinkAddress: 'string',
      publicEndpoint: 'string',
      status: 'string',
      token: 'string',
      vpcId: 'string',
      vswitchIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.vswitchIds) {
      $dara.Model.validateMap(this.vswitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecallManagementConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The network configuration information.
   */
  networkConfigs?: GetRecallManagementConfigResponseBodyNetworkConfigs[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * scene_test
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      networkConfigs: 'NetworkConfigs',
      requestId: 'RequestId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkConfigs: { 'type': 'array', 'itemType': GetRecallManagementConfigResponseBodyNetworkConfigs },
      requestId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkConfigs)) {
      $dara.Model.validateArray(this.networkConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

