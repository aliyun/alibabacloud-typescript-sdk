// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs } from "./GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs";


export class GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections extends $dara.Model {
  /**
   * @remarks
   * The network configurations, which are mainly used for the private connection.
   */
  connectionConfigs?: GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs[];
  /**
   * @remarks
   * The ID of the endpoint for the private connection.
   * 
   * @example
   * ep-m5ei37240541816b****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the endpoint service for the private connection.
   * 
   * @example
   * epsrv-5ei07324541816bxxxx
   */
  endpointServiceId?: string;
  /**
   * @remarks
   * The custom domain name.
   * 
   * @example
   * test.computenest.aliyuncs.com
   */
  privateZoneName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionConfigs: 'ConnectionConfigs',
      endpointId: 'EndpointId',
      endpointServiceId: 'EndpointServiceId',
      privateZoneName: 'PrivateZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionConfigs: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs },
      endpointId: 'string',
      endpointServiceId: 'string',
      privateZoneName: 'string',
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

