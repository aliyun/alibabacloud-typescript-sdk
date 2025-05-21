// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BackendServices } from "./BackendServices";


export class Backend extends $dara.Model {
  /**
   * @example
   * Single
   */
  scene?: string;
  services?: BackendServices[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      services: { 'type': 'array', 'itemType': BackendServices },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

