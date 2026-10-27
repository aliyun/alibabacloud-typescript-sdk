// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CleanUserPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cluster IDs. If you specify this list, only the KubeConfig credentials and RBAC permissions of the specified user in the listed clusters are cleared.
   */
  clusterIds?: string[];
  /**
   * @remarks
   * Specifies whether to force delete the specified KubeConfig. Valid values:
   * - false (default): Checks whether there are cluster access records within the last seven days before deleting the KubeConfig. If such records exist or cannot be found, the deletion is not allowed.
   * - true: Force deletes the KubeConfig without checking cluster access records.
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

