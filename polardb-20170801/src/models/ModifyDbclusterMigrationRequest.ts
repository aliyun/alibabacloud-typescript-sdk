// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterMigrationRequest extends $dara.Model {
  /**
   * @remarks
   * The specific endpoints to be switched. The value is a JSON string that specifies the endpoints to be swapped.
   * 
   * > This parameter is valid only when SwapConnectionString is set to true.
   * 
   * @example
   * {"rm-2ze73el581cs*****.mysql.pre.rds.aliyuncs.com":"pc-2ze8200s298e*****.mysql.polardb.pre.rds.aliyuncs.com","rm-2ze73el581cs86*****.mysql.pre.rds.aliyuncs.com":"test-p*****.mysql.polardb.pre.rds.aliyuncs.com"}
   */
  connectionStrings?: string;
  /**
   * @remarks
   * The ID of the PolarDB cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the new instance or cluster. Valid values:
   * 
   * - Before the switch, enter the PolarDB cluster ID to perform a switch.
   * 
   * - After the switch, enter the RDS instance ID to perform a rollback.
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
   * The ID of the source RDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-************
   */
  sourceRDSDBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to switch the endpoint. Valid values:
   * 
   * - **true**: Switches the endpoint. The application can connect to the database without changing its connection configuration.
   * 
   * - **false**: Does not switch the endpoint. The application must be changed to use the new PolarDB endpoint.
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

