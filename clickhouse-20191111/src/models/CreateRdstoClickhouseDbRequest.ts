// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRDSToClickhouseDbRequest extends $dara.Model {
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
   * cc-2ze5zeyl72188****
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
   * rm-8vb989qj9roh0****
   */
  rdsId?: string;
  /**
   * @remarks
   * The password of the account that is used to log on to the ApsaraDB RDS for MySQL instance.
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
   * vpc-2zen93xryil99jsfy****
   */
  rdsVpcId?: string;
  /**
   * @remarks
   * The private endpoint of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * rm-bp16t9h3999xb0a7****.mysql.rds.aliyuncs.com
   */
  rdsVpcUrl?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to ignore the table schemas that do not support synchronization. Valid values:
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
  /**
   * @remarks
   * The tables whose data you want to synchronize.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"Schema":"recommend","Tables":["mr_platform_cpm","mr_platform_ecpm","p_monitor_record"]}]
   */
  synDbTables?: string;
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
      rdsUserName: 'RdsUserName',
      rdsVpcId: 'RdsVpcId',
      rdsVpcUrl: 'RdsVpcUrl',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      skipUnsupported: 'SkipUnsupported',
      synDbTables: 'SynDbTables',
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
      rdsUserName: 'string',
      rdsVpcId: 'string',
      rdsVpcUrl: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      skipUnsupported: 'boolean',
      synDbTables: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

