// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceConnectionStringRequest extends $dara.Model {
  /**
   * @remarks
   * The TDS port number for Babelfish for RDS PostgreSQL.
   * > This parameter is applicable only to ApsaraDB RDS for PostgreSQL instances. For more information about Babelfish for RDS PostgreSQL, see [Introduction to Babelfish](https://help.aliyun.com/document_detail/428613.html).
   * 
   * @example
   * 1433
   */
  babelfishPort?: string;
  /**
   * @remarks
   * The prefix of the endpoint. You can modify only the prefix of the value specified by the **CurrentConnectionString** parameter.
   * >The prefix must be 8 to 64 characters in length and cannot contain Chinese characters or special characters (~!#%^&*=+\\|{};:\\"",<>/?). The prefix can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * rm-****
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The current endpoint of the instance. The endpoint can be a public endpoint or internal endpoint, or a classic network connectivity endpoint in hybrid access mode.
   * >Modification of read/write splitting connection endpoints is not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5x****.mysql.rds.aliyuncs.com
   */
  currentConnectionString?: string;
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the group to which the dedicated cluster MySQL general-purpose instance belongs.
   * 
   * @example
   * rgc-bp1tkv8****
   */
  generalGroupName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The PgBouncer port number.
   * > This parameter is applicable only to ApsaraDB RDS for PostgreSQL instances. If PgBouncer is enabled, you can modify the PgBouncer port number.
   * 
   * @example
   * 6432
   */
  PGBouncerPort?: string;
  /**
   * @remarks
   * The target port.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to retain the virtual IP address (VIP) when swapping the endpoint.
   * 
   * - **true**: The VIP is retained.
   * - **false** (default): The VIP is not retained.
   * 
   * > This parameter is applicable only to ApsaraDB RDS for PostgreSQL instances.
   * 
   * @example
   * false
   */
  retainVip?: boolean;
  /**
   * @remarks
   * The instance ID of the target ApsaraDB RDS for PostgreSQL instance with which you want to swap the endpoint.
   * 
   * > This parameter is applicable only to ApsaraDB RDS for PostgreSQL instances.
   * 
   * @example
   * pgm-bp1206s14p3o****
   */
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

