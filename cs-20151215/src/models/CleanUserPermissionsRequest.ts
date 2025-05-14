// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CleanUserPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster IDs. If you specify a list of cluster IDs, only the kubeconfig files and RBAC permissions of the clusters that belong to the current user in the list are revoked.
   */
  clusterIds?: string[];
  /**
   * @remarks
   * Specifies whether to forcefully delete the specified kubeconfig files. Valid values:
   * 
   * *   false (default): checks the cluster access records within the previous seven days before deleting the kubeconfig files. The kubeconfig files are not deleted if cluster access records are found or fail to be retrieved.
   * *   true: forcefully deletes the kubeconfig files without checking the cluster access records.
   * 
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: { 'type': 'array', 'itemType': 'string' },
      force: 'boolean',
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

