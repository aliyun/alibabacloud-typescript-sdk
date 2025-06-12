// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRDSToClickhouseDbRequest extends $dara.Model {
  /**
   * @remarks
   * The password of the account that is used to log on to the database in the ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456Aa
   */
  ckPassword?: string;
  /**
   * @remarks
   * The account that is used to log on to the database in the ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * user1
   */
  ckUserName?: string;
  /**
   * @remarks
   * The port number of the ApsaraDB for ClickHouse cluster.
   * 
   * @example
   * 8123
   */
  clickhousePort?: number;
  /**
   * @remarks
   * The ID of the ApsaraDB for ClickHouse cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp158i5wvj436****
   */
  dbClusterId?: string;
  /**
   * @remarks
   * The maximum number of rows that can be synchronized per second.
   * 
   * @example
   * 50000
   */
  limitUpper?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6x3qq4t90ok****
   */
  rdsId?: string;
  /**
   * @remarks
   * The password of the account that is used to log on to the database in the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456Rr
   */
  rdsPassword?: string;
  /**
   * @remarks
   * The port number of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * 3306
   */
  rdsPort?: number;
  /**
   * @remarks
   * The database in the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * database
   */
  rdsSynDb?: string;
  /**
   * @remarks
   * The table in the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * table
   */
  rdsSynTables?: string;
  /**
   * @remarks
   * The account that is used to log on to the database in the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * user2
   */
  rdsUserName?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the ApsaraDB RDS for MySQL instance belongs.
   * 
   * @example
   * vpc-bp1v9dtwmqqjhwwg****
   */
  rdsVpcId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to ignore databases that do not support synchronization. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  skipUnsupported?: boolean;
  static names(): { [key: string]: string } {
    return {
      ckPassword: 'CkPassword',
      ckUserName: 'CkUserName',
      clickhousePort: 'ClickhousePort',
      dbClusterId: 'DbClusterId',
      limitUpper: 'LimitUpper',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      rdsId: 'RdsId',
      rdsPassword: 'RdsPassword',
      rdsPort: 'RdsPort',
      rdsSynDb: 'RdsSynDb',
      rdsSynTables: 'RdsSynTables',
      rdsUserName: 'RdsUserName',
      rdsVpcId: 'RdsVpcId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      skipUnsupported: 'SkipUnsupported',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ckPassword: 'string',
      ckUserName: 'string',
      clickhousePort: 'number',
      dbClusterId: 'string',
      limitUpper: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      rdsId: 'string',
      rdsPassword: 'string',
      rdsPort: 'number',
      rdsSynDb: 'string',
      rdsSynTables: 'string',
      rdsUserName: 'string',
      rdsVpcId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      skipUnsupported: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

