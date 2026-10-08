// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateInstancePublicConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The TDS port number of Babelfish for RDS PostgreSQL.
   * > This parameter is applicable only to ApsaraDB RDS for PostgreSQL instances. For more information about Babelfish for RDS PostgreSQL, see [Introduction to Babelfish](https://help.aliyun.com/document_detail/428613.html).
   * 
   * @example
   * 1433
   */
  babelfishPort?: string;
  /**
   * @remarks
   * The prefix of the public endpoint. The complete public endpoint is in the format of `Prefix.DPI engine.rds.aliyuncs.com`. Example: `test1234.mysql.rds.aliyuncs.com`.
   * 
   * > The prefix must be 5 to 40 characters in length and cannot contain Chinese characters or invalid characters (\\~!#%^&*=+|{}\\":",<>/?). The prefix can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * test1234
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the group to which the general-purpose ApsaraDB RDS for MySQL instance in a dedicated cluster belongs.
   * 
   * @example
   * rgc-bp1tkv8****
   */
  generalGroupName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The PgBouncer port.
   * > This parameter is applicable only to ApsaraDB RDS for PostgreSQL instances.
   * 
   * @example
   * 6432
   */
  PGBouncerPort?: string;
  /**
   * @remarks
   * The public port. Valid values: **1000 to 5999**.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      babelfishPort: 'BabelfishPort',
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceId: 'DBInstanceId',
      generalGroupName: 'GeneralGroupName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      PGBouncerPort: 'PGBouncerPort',
      port: 'Port',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      babelfishPort: 'string',
      connectionStringPrefix: 'string',
      DBInstanceId: 'string',
      generalGroupName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      PGBouncerPort: 'string',
      port: 'string',
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

