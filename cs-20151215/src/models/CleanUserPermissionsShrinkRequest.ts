// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CleanUserPermissionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cluster IDs. If you specify this list, only the KubeConfig credentials and RBAC permissions of the user in the specified clusters are cleared.
   */
  clusterIdsShrink?: string;
  /**
   * @remarks
   * Specifies whether to force delete the specified KubeConfig. Valid values:
   * - false (default): Before deleting the KubeConfig, the system checks whether there are cluster access records within the last seven days. If such records exist or cannot be found, the deletion is not allowed.
   * - true: Force deletes the KubeConfig without checking cluster access records.
   * 
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterIdsShrink: 'ClusterIds',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIdsShrink: 'string',
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

