// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshNodeGroupNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum disruptive action level allowed for the refresh operation. The system independently evaluates the action level required to refresh each drifted property of a node and performs the refresh within the specified action level constraint. If the action level required for a property exceeds the specified level, that property is skipped. Action levels in increasing order of disruption: Refresh < Reboot < Reimage.
   * - Refresh (default): refreshes the configuration in place without restarting or reimaging. Currently applicable only to the RamRoleName property.
   * - Reboot (not currently supported): allows restarting the node for the configuration to take effect. Supported properties include system cloud disk type and all properties supported by Refresh.
   * - Reimage (not currently supported): allows reimaging the node for the configuration to take effect. Supported properties include image ID and all properties supported by Reboot.
   * 
   * @example
   * Refresh
   */
  maxDisruptiveAction?: string;
  /**
   * @remarks
   * The node group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ng-3525
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The filter scope for node refresh. If not specified, all nodes in the node group are included. <warning>If the instance type is a hypernode, pass the TrayNode ID, not the HyperNodeId.</warning>
   */
  nodeIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxDisruptiveAction: 'MaxDisruptiveAction',
      nodeGroupId: 'NodeGroupId',
      nodeIdsShrink: 'NodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxDisruptiveAction: 'string',
      nodeGroupId: 'string',
      nodeIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

