// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DiscoveryEndpoint } from "./DiscoveryEndpoint";


export class GetDiscoveryEndpointsOutput extends $dara.Model {
  discoveryEndpoints?: DiscoveryEndpoint[];
  static names(): { [key: string]: string } {
    return {
      discoveryEndpoints: 'discoveryEndpoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

