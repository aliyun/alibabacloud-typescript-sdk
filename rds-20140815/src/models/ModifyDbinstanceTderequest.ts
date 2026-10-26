// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceTDERequest extends $dara.Model {
  /**
   * @remarks
   * The certificate file.
   * 
   * Format:
   * - Public endpoint: `oss-<region ID>.aliyuncs.com:<bucket name>:<certificate file name with extension>`
   * - Internal network address: `oss-<region ID>-internal.aliyuncs.com:<bucket name>:<certificate file name with extension>`
   * 
   * > - This parameter is active only for SQL Server 2019 Standard Edition, SQL Server 2022 Standard Edition, SQL Server 2025 Standard Edition, and SQL Server Enterprise instance.
   * > - You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query active region IDs.
   * 
   * @example
   * oss-ap-southeast-1.aliyuncs.com:****:key.cer
   */
  certificate?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The names of the databases for which you want to enable TDE. You can specify multiple database names separated by commas (,). A maximum of 50 database names can be specified.
   * > This parameter is required and active only for SQL Server 2019 Standard Edition, SQL Server 2022 Standard Edition, SQL Server 2025 Standard Edition, and SQL Server Enterprise instance.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * The ID of the custom key.
   * > This parameter is available only for RDS MySQL or RDS PostgreSQL instances.
   * 
   * @example
   * 749c1df7-****-****-****-****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * Specifies whether to rotate the key. Valid values:
   * - **true**: Rotates the key.
   * - **false**: Does not rotate the key. This is the default value.
   * 
   * > This parameter is applicable only to RDS PostgreSQL instances.
   * 
   * @example
   * false
   */
  isRotate?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the certificate.
   * > This parameter is active only for SQL Server 2019 Standard Edition, SQL Server 2022 Standard Edition, SQL Server 2025 Standard Edition, and SQL Server Enterprise instance.
   * 
   * @example
   * 1qaz@WSX
   */
  passWord?: string;
  /**
   * @remarks
   * The private key file.
   * 
   * Format:
   * - Public endpoint: `oss-<region ID>.aliyuncs.com:<bucket name>:<private key file name with extension>`
   * - Internal network address: `oss-<region ID>-internal.aliyuncs.com:<bucket name>:<private key file name with extension>`
   * 
   * > - This parameter is active only for SQL Server 2019 Standard Edition, SQL Server 2022 Standard Edition, SQL Server 2025 Standard Edition, and SQL Server Enterprise instance.
   * > - You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query active region IDs.
   * 
   * @example
   * oss-ap-southeast-1.aliyuncs.com:****:key.pvk
   */
  privateKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The global resource descriptor of the role, which is used to specify the role. For details, see [RAM role overview](https://help.aliyun.com/document_detail/93689.html).
   * > This parameter is active only for ApsaraDB RDS for MySQL and ApsaraDB RDS for PostgreSQL instances.
   * 
   * @example
   * acs:ram::1406926****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleArn?: string;
  /**
   * @remarks
   * The TDE status. Valid values:
   * - **Enabled** 
   * - **Disabled**
   * 
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  TDEStatus?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      encryptionKey: 'EncryptionKey',
      isRotate: 'IsRotate',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      passWord: 'PassWord',
      privateKey: 'PrivateKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleArn: 'RoleArn',
      TDEStatus: 'TDEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
      encryptionKey: 'string',
      isRotate: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      passWord: 'string',
      privateKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleArn: 'string',
      TDEStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

