// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateInstancePublicConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The Tabular Data Stream (TDS) port of the instance for which Babelfish is enabled.
   * 
   * > This parameter applies only to ApsaraDB RDS for PostgreSQL instances. For more information about Babelfish for ApsaraDB RDS for PostgreSQL, see [Introduction to Babelfish](https://help.aliyun.com/document_detail/428613.html).
   * 
   * @example
   * 1433
   */
  babelfishPort?: string;
  /**
   * @remarks
   * The prefix of the public endpoint. A valid public endpoint is in the following format: `Prefix.Database engine.rds.aliyuncs.com`. Example: `test1234.mysql.rds.aliyuncs.com`.
   * 
   * > The value can be 5 to 40 characters in length and can contain letters, digits, and hyphens (-). The value cannot contain any of the following characters: ~ ! # % ^ & \\* = + | {} ; : \\" " , <> / ?
   * 
   * This parameter is required.
   * 
   * @example
   * test1234
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the dedicated cluster to which the instance belongs. This parameter is available only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
   * 
   * @example
   * rgc-bp1tkv8*****
   */
  generalGroupName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The PgBouncer port.
   * 
   * > This parameter is available only for instances that run PostgreSQL.
   * 
   * @example
   * 6432
   */
  PGBouncerPort?: string;
  /**
   * @remarks
   * The public port of the instance. Valid values: **1000 to 5999**.
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

