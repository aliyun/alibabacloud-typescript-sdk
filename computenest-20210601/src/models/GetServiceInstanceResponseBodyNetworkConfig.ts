// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections } from "./GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections";
import { GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections } from "./GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections";


export class GetServiceInstanceResponseBodyNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint for the private connection.
   * 
   * >  This parameter is discontinued.
   * 
   * @example
   * ep-m5ei37240541816b****
   */
  endpointId?: string;
  /**
   * @remarks
   * The information about private connections.
   */
  privateVpcConnections?: GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections[];
  /**
   * @remarks
   * The PrivateZone ID.
   * 
   * @example
   * cb7f214f80ac348d87daaeac1f35****
   */
  privateZoneId?: string;
  /**
   * @remarks
   * The information about the reverse private connection.
   */
  reversePrivateVpcConnections?: GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections[];
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      privateVpcConnections: 'PrivateVpcConnections',
      privateZoneId: 'PrivateZoneId',
      reversePrivateVpcConnections: 'ReversePrivateVpcConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      privateVpcConnections: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections },
      privateZoneId: 'string',
      reversePrivateVpcConnections: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections },
    };
  }

  validate() {
    if(Array.isArray(this.privateVpcConnections)) {
      $dara.Model.validateArray(this.privateVpcConnections);
    }
    if(Array.isArray(this.reversePrivateVpcConnections)) {
      $dara.Model.validateArray(this.reversePrivateVpcConnections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

