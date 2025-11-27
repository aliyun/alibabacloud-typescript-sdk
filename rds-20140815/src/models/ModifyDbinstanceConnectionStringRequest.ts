// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceConnectionStringRequest extends $dara.Model {
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
   * The prefix of the endpoint after the change. Only the prefix of the value of **CurrentConnectionString** can be changed.
   * 
   * > The value must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-). The value cannot contain any of the following special characters: ! # % ^ & \\* = + | {} ; : \\" " ,<> / ?
   * 
   * This parameter is required.
   * 
   * @example
   * rm-****
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The endpoint of the instance. It can be an internal endpoint, a public endpoint, or a classic network endpoint in hybrid access mode.
   * 
   * > The read/write splitting endpoint cannot be changed.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5x****.mysql.rds.aliyuncs.com
   */
  currentConnectionString?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the dedicated cluster to which the instance belongs. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
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
   * 
   * > This parameter is suitable only for ApsaraDB RDS for PostgreSQL instances. If you enable PgBouncer for your instance, you can change the PgBouncer port of the instance.
   * 
   * @example
   * 6432
   */
  PGBouncerPort?: string;
  /**
   * @remarks
   * The port number after the change.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  retainVip?: boolean;
  targetDBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      babelfishPort: 'BabelfishPort',
      connectionStringPrefix: 'ConnectionStringPrefix',
      currentConnectionString: 'CurrentConnectionString',
      DBInstanceId: 'DBInstanceId',
      generalGroupName: 'GeneralGroupName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      PGBouncerPort: 'PGBouncerPort',
      port: 'Port',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retainVip: 'RetainVip',
      targetDBInstanceId: 'TargetDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      babelfishPort: 'string',
      connectionStringPrefix: 'string',
      currentConnectionString: 'string',
      DBInstanceId: 'string',
      generalGroupName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      PGBouncerPort: 'string',
      port: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retainVip: 'boolean',
      targetDBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

