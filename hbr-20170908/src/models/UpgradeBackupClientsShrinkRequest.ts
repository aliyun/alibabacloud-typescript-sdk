// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeBackupClientsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of Cloud Backup clients. The total number of Cloud Backup client IDs and ECS instance IDs cannot exceed 100.
   * 
   * @example
   * ["i-0xi5wj******3j3bh2gj5"]
   */
  clientIdsShrink?: string;
  /**
   * @remarks
   * The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * hbrcrossrole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 1283948272xxxxx
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The IDs of Elastic Compute Service (ECS) instances. The total number of ECS instance IDs and Cloud Backup client IDs cannot exceed 100.
   * 
   * @example
   * ["c-*********************"]
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

