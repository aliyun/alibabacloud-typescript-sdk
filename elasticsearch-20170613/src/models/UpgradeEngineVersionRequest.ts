// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpgradeEngineVersionRequestPlugins } from "./UpgradeEngineVersionRequestPlugins";


export class UpgradeEngineVersionRequest extends $dara.Model {
  plugins?: UpgradeEngineVersionRequestPlugins[];
  /**
   * @example
   * engineVersion
   */
  type?: string;
  /**
   * @example
   * 6.7
   */
  version?: string;
  /**
   * @remarks
   * The moderation results.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The monitoring type. Valid values:
   * 
   * *   checkClusterHealth: Cluster Health Status
   * *   checkConfigCompatible: Configuration Compatibility Status
   * *   checkClusterResource: resource space status
   * *   checkClusterSnapshot: Whether a snapshot exists
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  updateStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      plugins: 'plugins',
      type: 'type',
      version: 'version',
      clientToken: 'clientToken',
      dryRun: 'dryRun',
      updateStrategy: 'updateStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plugins: { 'type': 'array', 'itemType': UpgradeEngineVersionRequestPlugins },
      type: 'string',
      version: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      updateStrategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.plugins)) {
      $dara.Model.validateArray(this.plugins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

