// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterChecksRequest extends $dara.Model {
  /**
   * @remarks
   * The check target to filter.
   * 
   * @example
   * ngw-bp19ay6nnvd4cexxxx
   */
  target?: string;
  /**
   * @remarks
   * The check type. Valid values:
   * - ClusterMigrate: cluster migration.
   * 
   * - MasterUpgrade: cluster control plane upgrade.
   * 
   * - NodePoolUpgrade: node pool upgrade.
   * 
   * - ClusterUpgrade: cluster upgrade.
   * 
   * @example
   * ClusterUpgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      target: 'target',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

