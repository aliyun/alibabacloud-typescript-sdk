// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SLSCollectConfig } from "./SlscollectConfig";


export class SLSCollectConfigs extends $dara.Model {
  collectConfigs?: SLSCollectConfig[];
  static names(): { [key: string]: string } {
    return {
      collectConfigs: 'CollectConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectConfigs: { 'type': 'array', 'itemType': SLSCollectConfig },
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

