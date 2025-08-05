// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallBackupClientsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of Cloud Backup clients. The sum of the number of Cloud Backup client IDs and the number of ECS instance IDs cannot exceed 20. Otherwise, an error occurs.
   * 
   * @example
   * ["c-*********************"]
   */
  clientIdsShrink?: string;
  /**
   * @remarks
   * The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up and restore data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Specifies whether data is backed up and restored within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up and restored within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up and restored across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up and restore data across Alibaba Cloud accounts.
   * 
   * @example
   * 129349237xxxxx
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The IDs of Elastic Compute Service (ECS) instances. You can specify a maximum of 20 ECS instances.
   * 
   * @example
   * ["i-0xi5wj5*****v3j3bh2gj5"]
   */
  instanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientIdsShrink: 'ClientIds',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      instanceIdsShrink: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdsShrink: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      instanceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

