// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLogBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable log backup. Valid values:
   * 
   * *   **Enable**
   * *   **Disable**
   * 
   * This parameter is required.
   * 
   * @example
   * Enable
   */
  enableBackupLog?: string;
  /**
   * @remarks
   * The number of days for which to retain log backup files. Valid values: 7 to 730.
   * 
   * >  If you do not specify this parameter, the default value 7 is used.
   * 
   * @example
   * 30
   */
  logBackupRetentionPeriod?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm4f7oger****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      enableBackupLog: 'EnableBackupLog',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      enableBackupLog: 'string',
      logBackupRetentionPeriod: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

