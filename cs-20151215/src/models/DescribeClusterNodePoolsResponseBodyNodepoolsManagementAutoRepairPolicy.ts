// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoRepairPolicy extends $dara.Model {
  approvalRequired?: boolean;
  /**
   * @remarks
   * Specifies whether to allow node restart. This parameter takes effect only when `auto_repair=true` is specified.
   * 
   * *   `true`: allows node restart.
   * *   `false`: does not allow node restart.
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

