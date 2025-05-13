// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpgradeEngineVersionResponseBodyResult } from "./UpgradeEngineVersionResponseBodyResult";


export class UpgradeEngineVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The verification information.
   * 
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DC*****
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the error. Valid values:
   * 
   * *   clusterStatus: the health status of the cluster.
   * *   clusterConfigYml: Cluster YML File
   * *   clusterConfigPlugins: Cluster Configuration File
   * *   clusterResource: cluster resources
   * *   clusterSnapshot: cluster snapshot
   */
  result?: UpgradeEngineVersionResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': UpgradeEngineVersionResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

