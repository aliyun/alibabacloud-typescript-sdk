// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiFallbackServiceConfig } from "./AiFallbackServiceConfig";


export class AiFallbackConfig extends $dara.Model {
  serviceConfigs?: AiFallbackServiceConfig[];
  static names(): { [key: string]: string } {
    return {
      serviceConfigs: 'serviceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceConfigs: { 'type': 'array', 'itemType': AiFallbackServiceConfig },
    };
  }

  validate() {
    if(Array.isArray(this.serviceConfigs)) {
      $dara.Model.validateArray(this.serviceConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

