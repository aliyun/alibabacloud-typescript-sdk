// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiRoutePoliciesFallbackDestinations } from "./HttpApiRoutePoliciesFallbackDestinations";


export class HttpApiRoutePoliciesFallback extends $dara.Model {
  destinations?: HttpApiRoutePoliciesFallbackDestinations[];
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      destinations: 'Destinations',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinations: { 'type': 'array', 'itemType': HttpApiRoutePoliciesFallbackDestinations },
      enable: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.destinations)) {
      $dara.Model.validateArray(this.destinations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

