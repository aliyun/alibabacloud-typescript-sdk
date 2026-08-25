// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallBackupClientsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM role that is created in the source account for cross-account backup.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * The type of cross-account backup. Valid values:
   * 
   * - SELF_ACCOUNT: Backs up data within the current account.
   * 
   * - CROSS_ACCOUNT: Backs up data across accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source account that is used for cross-account backup.
   * 
   * @example
   * 16392782xxxxxx
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The IDs of the ECS instances. You can specify a maximum of 20 instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["i-0xi5wj5*****v3j3bh2gj5"]
   */
  instanceIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      instanceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.instanceIds) {
      $dara.Model.validateMap(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

