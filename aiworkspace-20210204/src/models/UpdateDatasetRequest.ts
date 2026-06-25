// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetShareRelationship } from "./DatasetShareRelationship";


export class UpdateDatasetRequestSharingConfig extends $dara.Model {
  /**
   * @remarks
   * The sharing relationships of the dataset.
   */
  sharedTo?: DatasetShareRelationship[];
  static names(): { [key: string]: string } {
    return {
      sharedTo: 'SharedTo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sharedTo: { 'type': 'array', 'itemType': DatasetShareRelationship },
    };
  }

  validate() {
    if(Array.isArray(this.sharedTo)) {
      $dara.Model.validateArray(this.sharedTo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the dataset in the workspace. Valid values:
   * 
   * - `PRIVATE` (default): The dataset is visible only to its owner and administrators.
   * 
   * - `PUBLIC`: The dataset is visible to all users in the workspace.
   * 
   * - `ROLE_PUBLIC`: The dataset is visible to users in specific workspace roles. You must specify the roles in the `AccessibleRoleIdList` parameter. The dataset owner and administrators can always view the dataset.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * This parameter takes effect only when `Accessibility` is set to `ROLE_PUBLIC`. It specifies the list of workspace roles that can view the dataset. Role IDs that start with `PAI` are basic role IDs, and role IDs that start with `role-` are custom role IDs.
   */
  accessibleRoleIdList?: string[];
  /**
   * @remarks
   * The description of the dataset.
   * 
   * @example
   * This is a description of the dataset.
   */
  description?: string;
  /**
   * @remarks
   * The dataset edition. You can upgrade a dataset from `BASIC` to `ADVANCED`.
   * 
   * @example
   * ADVANCED
   */
  edition?: string;
  /**
   * @remarks
   * A list of workspace roles that have read and write permissions on the mounted dataset. Role IDs that start with `PAI` are basic role IDs, and role IDs that start with `role-` are custom role IDs. If the list contains an asterisk (`*`), all roles are granted read and write permissions.
   * 
   * - To specify roles: ["PAI.AlgoOperator", "role-hiuwpd01ncrokkgp21"]
   * 
   * - To specify all roles: ["\\*"]
   * 
   * - To specify only the dataset creator: []
   */
  mountAccessReadWriteRoleIdList?: string[];
  /**
   * @remarks
   * The dataset name. For information about how to obtain the dataset name, see [ListDatasets](https://help.aliyun.com/document_detail/457222.html).
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * An extended field in a JSON string format. When you use the dataset with Data Lake Compute (DLC), you can configure the `mountPath` field to specify the default mount path.
   * 
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The sharing configuration of the dataset.
   * 
   * **if can be null:**
   * true
   */
  sharingConfig?: UpdateDatasetRequestSharingConfig;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      accessibleRoleIdList: 'AccessibleRoleIdList',
      description: 'Description',
      edition: 'Edition',
      mountAccessReadWriteRoleIdList: 'MountAccessReadWriteRoleIdList',
      name: 'Name',
      options: 'Options',
      sharingConfig: 'SharingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      accessibleRoleIdList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      edition: 'string',
      mountAccessReadWriteRoleIdList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      options: 'string',
      sharingConfig: UpdateDatasetRequestSharingConfig,
    };
  }

  validate() {
    if(Array.isArray(this.accessibleRoleIdList)) {
      $dara.Model.validateArray(this.accessibleRoleIdList);
    }
    if(Array.isArray(this.mountAccessReadWriteRoleIdList)) {
      $dara.Model.validateArray(this.mountAccessReadWriteRoleIdList);
    }
    if(this.sharingConfig && typeof (this.sharingConfig as any).validate === 'function') {
      (this.sharingConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

