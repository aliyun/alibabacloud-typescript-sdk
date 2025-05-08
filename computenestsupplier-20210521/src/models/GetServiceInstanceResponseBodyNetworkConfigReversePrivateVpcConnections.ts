// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint for the reverse private connection.
   * 
   * @example
   * ep-m5ei42370541816b****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the endpoint service for the reverse private connection.
   * 
   * @example
   * epsrv-5ei07324541816bxxxx
   */
  endpointServiceId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      endpointServiceId: 'EndpointServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      endpointServiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

