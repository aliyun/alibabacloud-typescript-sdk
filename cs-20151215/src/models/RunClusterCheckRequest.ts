// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunClusterCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster check parameters.
   */
  options?: { [key: string]: string };
  /**
   * @remarks
   * The check target.
   * 
   * If you set `type=NodePoolUpgrade`, you must set this parameter to the node pool ID. Otherwise, this parameter is optional.
   * 
   * @example
   * np1f6779297c4444a3a1cdd29be8e5****
   */
  target?: string;
  /**
   * @remarks
   * The check type.
   * 
   * Valid values:
   * 
   * *   ClusterMigrate: cluster migration.
   * *   MasterUpgrade: control plane upgrade.
   * *   NodePoolUpgrade: node pool upgrade.
   * *   ClusterUpgrade: cluster upgrade.
   * 
   * This parameter is required.
   * 
   * @example
   * ClusterUpgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      options: 'options',
      target: 'target',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      target: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

