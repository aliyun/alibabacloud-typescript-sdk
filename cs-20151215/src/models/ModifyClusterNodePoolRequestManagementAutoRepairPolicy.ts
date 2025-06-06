// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClusterNodePoolRequestManagementAutoRepairPolicy extends $dara.Model {
  approvalRequired?: boolean;
  /**
   * @remarks
   * Specifies whether ACK is allowed to automatically restart nodes after repairing the nodes. Valid values:
   * 
   * *   `true`: yes.
   * *   `false`: no.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      approvalRequired: 'approval_required',
      restartNode: 'restart_node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRequired: 'boolean',
      restartNode: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

