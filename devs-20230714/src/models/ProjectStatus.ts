// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ServiceMeta } from "./ServiceMeta";


export class ProjectStatus extends $dara.Model {
  services?: ServiceMeta[];
  static names(): { [key: string]: string } {
    return {
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'array', 'itemType': ServiceMeta },
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

