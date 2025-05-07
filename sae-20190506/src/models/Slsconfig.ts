// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SLSConfigCollectConfigs } from "./SlsconfigCollectConfigs";


export class SLSConfig extends $dara.Model {
  collectConfigs?: SLSConfigCollectConfigs[];
  static names(): { [key: string]: string } {
    return {
      collectConfigs: 'collectConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectConfigs: { 'type': 'array', 'itemType': SLSConfigCollectConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.collectConfigs)) {
      $dara.Model.validateArray(this.collectConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

