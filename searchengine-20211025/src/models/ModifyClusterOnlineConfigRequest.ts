// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClusterOnlineConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster information.
   */
  clusters?: string[];
  /**
   * @remarks
   * The configuration information.
   */
  config?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      clusters: 'clusters',
      config: 'config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': 'string' },
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

