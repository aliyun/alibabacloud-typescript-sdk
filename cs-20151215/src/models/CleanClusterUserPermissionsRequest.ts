// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CleanClusterUserPermissionsRequest extends $dara.Model {
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
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

