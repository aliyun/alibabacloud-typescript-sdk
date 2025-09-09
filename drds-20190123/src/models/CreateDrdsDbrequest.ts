// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDrdsDBRequestInstDbName extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraDB RDS for MySQL instance on which the databases need to be vertically partitioned. This parameter is required only when the Type parameter is set to VERTICAL.
   * 
   * @example
   * drds_sample_rds_id
   */
  dbInstanceId?: string;
  /**
   * @example
   * ["drds_sample_db1", "drds_sample_db2"]
   */
  shardDbName?: string[];
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      shardDbName: 'ShardDbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      shardDbName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.shardDbName)) {
      $dara.Model.validateArray(this.shardDbName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBRequestRdsSuperAccount extends $dara.Model {
  /**
   * @remarks
   * The account name of the super administrator that is used to connect to the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * drds_sample_rds_super_account
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of ApsaraDB RDS instance.
   * 
   * @example
   * drds_sample_rds_id
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The password of the super administrator account that is used to connect to the ApsaraDB RDS instance.
   * 
   * @example
   * drds_sample_rds_super_password
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbInstanceId: 'DbInstanceId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbInstanceId: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the account that has permissions to access all databases on the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required only when the Type parameter is set to VERTICAL.
   * 
   * @example
   * drds_sample_account
   */
  accountName?: string;
  /**
   * @remarks
   * The type of the storage instances that are used by the PolarDB-X 1.0 database. Set the value to RDS.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * Specifies whether the required ApsaraDB RDS for MySQL instance is being created.
   * 
   * @example
   * false
   */
  dbInstanceIsCreating?: boolean;
  /**
   * @remarks
   * The name of the PolarDB-X 1.0 database you want to create.
   * 
   * @example
   * testdb
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance on which you want to create the database.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbgal154****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The encoding method that is used by the database.
   * 
   * @example
   * utf8
   */
  encode?: string;
  instDbName?: CreateDrdsDBRequestInstDbName[];
  /**
   * @remarks
   * The password that is used to log on to the database.
   * 
   * @example
   * drds_sample_password
   */
  password?: string;
  /**
   * @example
   * ["drds_sample_rds_id1", "drds_sample_rds_id2"]
   */
  rdsInstance?: string[];
  rdsSuperAccount?: CreateDrdsDBRequestRdsSuperAccount[];
  /**
   * @remarks
   * The partitioning mode of the database. Valid values:
   * 
   * *   **HORIZONTAL**: The database is horizontally partitioned (sharded).
   * *   **VERTICAL**: The database is vertically partitioned.
   * 
   * @example
   * HORIZONTAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbInstType: 'DbInstType',
      dbInstanceIsCreating: 'DbInstanceIsCreating',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      encode: 'Encode',
      instDbName: 'InstDbName',
      password: 'Password',
      rdsInstance: 'RdsInstance',
      rdsSuperAccount: 'RdsSuperAccount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbInstType: 'string',
      dbInstanceIsCreating: 'boolean',
      dbName: 'string',
      drdsInstanceId: 'string',
      encode: 'string',
      instDbName: { 'type': 'array', 'itemType': CreateDrdsDBRequestInstDbName },
      password: 'string',
      rdsInstance: { 'type': 'array', 'itemType': 'string' },
      rdsSuperAccount: { 'type': 'array', 'itemType': CreateDrdsDBRequestRdsSuperAccount },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instDbName)) {
      $dara.Model.validateArray(this.instDbName);
    }
    if(Array.isArray(this.rdsInstance)) {
      $dara.Model.validateArray(this.rdsInstance);
    }
    if(Array.isArray(this.rdsSuperAccount)) {
      $dara.Model.validateArray(this.rdsSuperAccount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

