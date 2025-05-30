// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterNodePoolRequestManagementAutoRepairPolicy extends $dara.Model {
  approvalRequired?: boolean;
  /**
   * @remarks
   * Specifies whether to allow node restart. This parameter takes effect only when `auto_repair` is set to true. Valid values:
   * 
   * *   `true`: allows node restart.
   * *   `false`: does not allow node restart.
   * 
   * If `auto_repair` is set to true, the default value of this parameter is `true`. If `auto_repair` is set to false, the default value of this parameter is `false`.
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

