// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClusterCnnfStatusUserConfirmRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster IDs.
   */
  clusterIds?: string[];
  /**
   * @remarks
   * Specifies whether to fix the blocking status of the cluster. Valid values:
   * 
   * *   true: yes
   * *   false: no
   * 
   * @example
   * true
   */
  userConfirm?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      userConfirm: 'UserConfirm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: { 'type': 'array', 'itemType': 'string' },
      userConfirm: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.clusterIds)) {
      $dara.Model.validateArray(this.clusterIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

