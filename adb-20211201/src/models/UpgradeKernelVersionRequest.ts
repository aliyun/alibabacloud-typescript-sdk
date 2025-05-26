// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeKernelVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL Data Warehouse Edition clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6g8w25jacm7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The minor version to which you want to update.
   * 
   * >  You can call the **DescribeKernelVersion** operation to query the supported minor versions.
   * 
   * @example
   * 3.1.9
   */
  DBVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The time when to perform the update. Valid values:
   * 
   * *   **0** (default): immediately performs the update.
   * *   **1**: performs the update during the maintenance window.
   * 
   * >  You can call the [ModifyDBClusterMaintainTime](https://help.aliyun.com/document_detail/612236.html) operation to modify the maintenance window of an AnalyticDB for MySQL cluster.
   * 
   * @example
   * 0
   */
  switchMode?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBVersion: 'DBVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchMode: 'SwitchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

