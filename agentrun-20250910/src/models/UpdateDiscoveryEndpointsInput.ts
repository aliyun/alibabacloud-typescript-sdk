// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DiscoveryEndpoint } from "./DiscoveryEndpoint";


export class UpdateDiscoveryEndpointsInput extends $dara.Model {
  credentialName?: string;
  discoveryEndpoints?: DiscoveryEndpoint[];
  static names(): { [key: string]: string } {
    return {
      credentialName: 'credentialName',
      discoveryEndpoints: 'discoveryEndpoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialName: 'string',
      discoveryEndpoints: { 'type': 'array', 'itemType': DiscoveryEndpoint },
    };
  }

  validate() {
    if(Array.isArray(this.discoveryEndpoints)) {
      $dara.Model.validateArray(this.discoveryEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

