// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JuiceFsMountConfig } from "./JuiceFsMountConfig";


export class JuiceFsConfig extends $dara.Model {
  /**
   * @remarks
   * A map of environment variables (key-value pairs) to set for the JuiceFS client.
   */
  envs?: { [key: string]: string };
  /**
   * @remarks
   * An array of JuiceFsMountConfig objects, each specifying the configuration for a mount point.
   */
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

