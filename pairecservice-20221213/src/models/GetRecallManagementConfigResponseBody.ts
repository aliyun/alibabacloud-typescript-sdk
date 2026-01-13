// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecallManagementConfigResponseBodyNetworkConfigs extends $dara.Model {
  /**
   * @example
   * http://xxx
   */
  privateLinkAddress?: string;
  /**
   * @example
   * Connecting
   */
  status?: string;
  /**
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  vswitchIds?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      privateLinkAddress: 'PrivateLinkAddress',
      status: 'Status',
      vpcId: 'VpcId',
      vswitchIds: 'VswitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateLinkAddress: 'string',
      status: 'string',
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

