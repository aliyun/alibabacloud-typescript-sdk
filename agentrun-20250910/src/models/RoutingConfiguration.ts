// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VersionWeight } from "./VersionWeight";


export class RoutingConfiguration extends $dara.Model {
  /**
   * @remarks
   * 不同版本的流量权重配置
   */
  versionWeights?: VersionWeight[];
  static names(): { [key: string]: string } {
    return {
      versionWeights: 'versionWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionWeights: { 'type': 'array', 'itemType': VersionWeight },
    };
  }

  validate() {
    if(Array.isArray(this.versionWeights)) {
      $dara.Model.validateArray(this.versionWeights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

