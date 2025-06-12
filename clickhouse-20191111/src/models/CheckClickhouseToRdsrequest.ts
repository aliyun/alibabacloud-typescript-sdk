// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckClickhouseToRDSRequest extends $dara.Model {
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
   * cc-2zeyy362b5sbm****
   */
  dbClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp13v4bnwlu8j****
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
   * The ID of the VPC in which the ApsaraDB RDS for MySQL instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-wz9mm0qka0winfl47****
   */
  rdsVpcId?: string;
  /**
   * @remarks
   * The internal endpoint of the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp16t9h3999xb0a7****.mysql.rds.aliyuncs.com
   */
  rdsVpcUrl?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ckPassword: 'CkPassword',
      ckUserName: 'CkUserName',
      clickhousePort: 'ClickhousePort',
      dbClusterId: 'DbClusterId',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      ckPassword: 'string',
      ckUserName: 'string',
      clickhousePort: 'number',
      dbClusterId: 'string',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

