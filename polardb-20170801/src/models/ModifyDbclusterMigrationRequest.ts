// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterMigrationRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoints to be switched. The endpoints are in the JSON format.
   * 
   * > This parameter is valid when the SwapConnectionString parameter is set to true.
   * 
   * @example
   * {"rm-2ze73el581cs*****.mysql.pre.rds.aliyuncs.com":"pc-2ze8200s298e*****.mysql.polardb.pre.rds.aliyuncs.com","rm-2ze73el581cs86*****.mysql.pre.rds.aliyuncs.com":"test-p*****.mysql.polardb.pre.rds.aliyuncs.com"}
   */
  connectionStrings?: string;
  /**
   * @remarks
   * The ID of cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the new instance or new cluster. Valid values:
   * 
   * *   To perform a data migration, enter the ID of the PolarDB cluster.
   * *   To perform a migration rollback, enter the ID of the ApsaraDB for RDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  newMasterInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The ID of the source ApsaraDB RDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-************
   */
  sourceRDSDBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to switch the endpoints. Valid values:
   * 
   * *   **true**: switches the endpoints. If you select this option, you do not need the change the endpoint in your applications.
   * *   **false**: does not switch the endpoints. If you select this option, you must specify the endpoint of the PolarDB cluster in your applications.
   * 
   * Default value: **false**.
   * 
   * @example
   * false
   */
  swapConnectionString?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStrings: 'ConnectionStrings',
      DBClusterId: 'DBClusterId',
      newMasterInstanceId: 'NewMasterInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      sourceRDSDBInstanceId: 'SourceRDSDBInstanceId',
      swapConnectionString: 'SwapConnectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStrings: 'string',
      DBClusterId: 'string',
      newMasterInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      sourceRDSDBInstanceId: 'string',
      swapConnectionString: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

