// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyClusterRequestOperationPolicyClusterAutoUpgrade } from "./ModifyClusterRequestOperationPolicyClusterAutoUpgrade";


export class ModifyClusterRequestOperationPolicy extends $dara.Model {
  /**
   * @remarks
   * The configurations of automatic update.
   */
  clusterAutoUpgrade?: ModifyClusterRequestOperationPolicyClusterAutoUpgrade;
  static names(): { [key: string]: string } {
    return {
      clusterAutoUpgrade: 'cluster_auto_upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterAutoUpgrade: ModifyClusterRequestOperationPolicyClusterAutoUpgrade,
    };
  }

  validate() {
    if(this.clusterAutoUpgrade && typeof (this.clusterAutoUpgrade as any).validate === 'function') {
      (this.clusterAutoUpgrade as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

