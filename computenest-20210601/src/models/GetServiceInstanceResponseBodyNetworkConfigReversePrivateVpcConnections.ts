// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections extends $dara.Model {
  /**
   * @remarks
   * The endpoint ID of the reverse private connection.
   * 
   * @example
   * ep-m5ei42370541816b****
   */
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

