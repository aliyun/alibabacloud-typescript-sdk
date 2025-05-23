// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClusterNodePoolRequestManagementUpgradeConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use the preceding `auto_upgrade` parameter instead.
   * 
   * Specifies whether to enable auto upgrade. Valid values:
   * 
   * *   true: enables auto upgrade.
   * *   false: disables auto upgrade.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The maximum number of nodes that can be in the Unavailable state.
   * 
   * Valid values: 1 to 1000.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @remarks
   * The number of additional nodes that are temporarily added to the node pool during an auto upgrade. Specify this parameter or `surge_percentage`.
   * 
   * A node is unavailable during an upgrade. Additional nodes are used to temporarily host the workloads of nodes that are being upgraded.
   * 
   * >  We recommend that you specify a value that does not exceed the current number of nodes in the node pool.
   * 
   * @example
   * 5
   */
  surge?: number;
  /**
   * @remarks
   * The percentage of additional nodes in the node pool. Specify this parameter or the `surge` parameter is specified.
   * 
   * The number of additional nodes = The percentage of additional nodes × The number of nodes in the node pool. For example, if the percentage of additional nodes is 50% and the number of nodes in the node pool is 6, the number of additional nodes is 3.
   * 
   * @example
   * 0
   */
  surgePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      autoUpgrade: 'auto_upgrade',
      maxUnavailable: 'max_unavailable',
      surge: 'surge',
      surgePercentage: 'surge_percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgrade: 'boolean',
      maxUnavailable: 'number',
      surge: 'number',
      surgePercentage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

