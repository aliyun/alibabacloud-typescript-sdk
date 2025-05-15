// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs } from "./GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs";


export class GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections extends $dara.Model {
  /**
   * @remarks
   * The network configurations, which are mainly used for private connections.
   */
  connectionConfigs?: GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs[];
  /**
   * @remarks
   * The endpoint ID of the private connection.
   * 
   * @example
   * ep-m5ei37240541816b****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the private zone of the custom private domain name.
   * 
   * @example
   * cb7f214f80ac348d87daaeac1f35****
   */
  privateZoneId?: string;
  /**
   * @remarks
   * The custom domain name.
   * 
   * @example
   * test.computenest.aliyuncs.com
   */
  privateZoneName?: string;
  /**
   * @remarks
   * The region ID of the endpoint of the PrivateLink connection.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionConfigs: 'ConnectionConfigs',
      endpointId: 'EndpointId',
      privateZoneId: 'PrivateZoneId',
      privateZoneName: 'PrivateZoneName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionConfigs: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs },
      endpointId: 'string',
      privateZoneId: 'string',
      privateZoneName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connectionConfigs)) {
      $dara.Model.validateArray(this.connectionConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

