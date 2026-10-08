// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceTDERequest extends $dara.Model {
  /**
   * @remarks
   * The certificate file.
   * 
   * Format:
   * - Public endpoint: `oss-<RegionId>.aliyuncs.com:<BucketName>:<CertificateFileName (with file extension)>`
   * - Internal network endpoint: `oss-<RegionId>-internal.aliyuncs.com:<BucketName>:<CertificateFileName (with file extension)>`
   * 
   * > - This parameter is active only for SQL Server 2019 Standard Edition, 2022 Standard Edition, 2025 Standard Edition, and SQL Server Enterprise instance instances.
   * > - You can call [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) to query active region IDs.
   * 
   * @example
   * oss-ap-southeast-1.aliyuncs.com:****:key.cer
   */
  certificate?: string;
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
   * The name of the database for which you want to enable TDE. You can specify multiple database names separated by commas (,). You can specify up to 50 database names.
   * > This parameter is active and required only for SQL Server 2019 Standard Edition, 2022 Standard Edition, 2025 Standard Edition, and SQL Server Enterprise instance instances.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * The custom key ID.
   * > This parameter is available only for ApsaraDB RDS for MySQL and ApsaraDB RDS for PostgreSQL instances.
   * 
   * @example
   * 749c1df7-****-****-****-****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * Specifies whether to rotate the key. Valid values:
   * - **true**: Rotate the key.
   * - **false** (default): Do not rotate the key.
   * 
   * > This parameter is available only for ApsaraDB RDS for PostgreSQL instances.
   * 
   * @example
   * false
   */
  isRotate?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The certificate password.
   * > This parameter is active only for SQL Server 2019 Standard Edition, 2022 Standard Edition, 2025 Standard Edition, and SQL Server Enterprise instance instances.
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
   * - Public endpoint: `oss-<RegionId>.aliyuncs.com:<BucketName>:<PrivateKeyFileName (with file extension)>`
   * - Internal network endpoint: `oss-<RegionId>-internal.aliyuncs.com:<BucketName>:<PrivateKeyFileName (with file extension)>`
   * 
   * > - This parameter is active only for SQL Server 2019 Standard Edition, 2022 Standard Edition, 2025 Standard Edition, and SQL Server Enterprise instance instances.
   * > - You can call [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) to query active region IDs.
   * 
   * @example
   * oss-ap-southeast-1.aliyuncs.com:****:key.pvk
   */
  privateKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The global resource descriptor of the RAM role. The resource descriptor is used to specify a RAM role. For details, see [RAM role overview](https://help.aliyun.com/document_detail/93689.html).
   * > This parameter is available only for ApsaraDB RDS for MySQL and ApsaraDB RDS for PostgreSQL instances.
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

