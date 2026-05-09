// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JuiceFsMountConfig } from "./JuiceFsMountConfig";


export class JuiceFsConfig extends $dara.Model {
  envs?: { [key: string]: string };
  mountPoints?: JuiceFsMountConfig[];
  static names(): { [key: string]: string } {
    return {
      envs: 'envs',
      mountPoints: 'mountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      mountPoints: { 'type': 'array', 'itemType': JuiceFsMountConfig },
    };
  }

  validate() {
    if(this.envs) {
      $dara.Model.validateMap(this.envs);
    }
    if(Array.isArray(this.mountPoints)) {
      $dara.Model.validateArray(this.mountPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

