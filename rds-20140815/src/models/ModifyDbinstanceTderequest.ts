// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceTDERequest extends $dara.Model {
  /**
   * @remarks
   * The file that contains the certificate.\\
   * Format:
   * 
   * *   Public endpoint: `oss-<The ID of the region>.aliyuncs.com:<The name of the bucket>:<The name of the certificate file>` (The file name contains the extension.)
   * *   Internal endpoint: `oss-<The ID of the region>-internal.aliyuncs.com:<The name of the bucket>:<The name of the certificate file>` (The file name contains the extension.)
   * 
   * > *   This parameter is available when the instance runs SQL Server 2019 SE or an Enterprise Edition of SQL Server.
   * > *   You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query the most recent region list.
   * 
   * @example
   * oss-ap-southeast-1.aliyuncs.com:****:key.cer
   */
  certificate?: string;
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
   * The name of the database for which you want to enable TDE. You can specify up to 50 database names in a single request. If you specify multiple database names, separate the database names with commas (,).
   * 
   * > This parameter is available and must be specified only when the instance runs SQL Server 2019 SE or an Enterprise Edition of SQL Server.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * The ID of the custom key.
   * 
   * > This parameter is available when the instance runs MySQL or PostgreSQL.
   * 
   * @example
   * 749c1df7-****-****-****-****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * Specifies whether to replace the key. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  This parameter is available for only ApsaraDB RDS for PostgreSQL instances.
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
   * 
   * > This parameter is available when the instance runs SQL Server 2019 SE or an Enterprise Edition of SQL Server.
   * 
   * @example
   * 1qaz@WSX
   */
  passWord?: string;
  /**
   * @remarks
   * The file that contains the private key of the certificate.\\
   * Format:
   * 
   * *   Public endpoint: `oss-<The ID of the region>.aliyuncs.com:<The name of the bucket>:<The name of the file that contains the private key>` (The file name contains the extension.)
   * *   Internal endpoint: `oss-<The ID of the region>-internal.aliyuncs.com:<The name of the bucket>:<The name of the file that contains the private key>` (The file name contains the extension.)
   * 
   * > *   This parameter is available when the instance runs SQL Server 2019 SE or an Enterprise Edition of SQL Server.
   * > *   You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query the most recent region list.
   * 
   * @example
   * oss-ap-southeast-1.aliyuncs.com:****:key.pvk
   */
  privateKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role. A RAM role is a virtual identity that you can create within your Alibaba Cloud account. For more information, see [RAM role overview](https://help.aliyun.com/document_detail/93689.html).
   * 
   * > This parameter is available when the instance runs MySQL or PostgreSQL.
   * 
   * @example
   * acs:ram::1406926****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleArn?: string;
  /**
   * @remarks
   * The status of TDE. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
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

