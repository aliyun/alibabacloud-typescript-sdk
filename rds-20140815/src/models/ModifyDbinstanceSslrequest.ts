// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceSSLRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication method for ApsaraDB RDS for PostgreSQL instances that use cloud disks. Valid values:
   * - **cert**
   * - **prefer**
   * - **verify-ca**
   * - **verify-full**: supported by ApsaraDB RDS for PostgreSQL 12 and later
   * 
   * > This parameter can be configured only when ClientCAEnabled is set to **1**.
   * 
   * @example
   * cert
   */
  ACL?: string;
  /**
   * @remarks
   * The type of the certificate for ApsaraDB RDS for MySQL and ApsaraDB RDS for PostgreSQL instances that use cloud disks. Valid values:
   * - **aliyun**: Alibaba Cloud certificate. This is the default value.
   * - **custom**: custom certificate
   * > This parameter is required when SSLEnabled is set to **1**.
   * 
   * @example
   * aliyun
   */
  CAType?: string;
  /**
   * @remarks
   * The content of the custom certificate for ApsaraDB RDS for SQL Server instances. Only the pfx format is supported.
   * - Public endpoint: `oss-<Region ID>.aliyuncs.com:<Bucket name>:<Certificate file name (with extension)>`
   * - Internal endpoint: `oss-<Region ID>-internal.aliyuncs.com:<Bucket name>:<Certificate file name (with extension)>`
   * 
   * @example
   * oss-cn-beijing-internal.aliyuncs.com:zhttest:test.pfx
   */
  certificate?: string;
  /**
   * @remarks
   * The client certificate authority (CA) public key for ApsaraDB RDS for PostgreSQL instances that use cloud disks.
   * 
   * > This parameter is required when ClientCAEnabled is set to **1**.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----MIID*****viXk=-----END CERTIFICATE-----
   */
  clientCACert?: string;
  /**
   * @remarks
   * Specifies whether to enable the client certificate authority (CA) public key for ApsaraDB RDS for PostgreSQL instances that use cloud disks. Valid values:
   * - **1**: enabled
   * - **0**: disabled
   * 
   * @example
   * 1
   */
  clientCAEnabled?: number;
  /**
   * @remarks
   * The client revocation certificate file for ApsaraDB RDS for PostgreSQL instances that use cloud disks.
   * 
   * > This parameter is required when ClientCrlEnabled is set to **1**.
   * 
   * @example
   * -----BEGIN X509 CRL-----MIIB****19mg==-----END X509 CRL-----
   */
  clientCertRevocationList?: string;
  /**
   * @remarks
   * Specifies whether to enable the client certificate revocation list (CRL) for ApsaraDB RDS for PostgreSQL instances that use cloud disks. Valid values:
   * - **1**: enabled
   * - **0**: disabled
   * 
   * > This parameter can be configured only when ClientCAEnabled is set to **1**.
   * 
   * @example
   * 1
   */
  clientCrlEnabled?: number;
  /**
   * @remarks
   * The internal or public endpoint for which you want to create or update the server certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The [SSL forced encryption switch](https://help.aliyun.com/document_detail/95715.html) for ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and ApsaraDB RDS for SQL Server instances. Valid values:
   * 
   * - **1**: enabled
   * - **0**: disabled
   * 
   * @example
   * 1
   */
  forceEncryption?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the custom certificate for ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * zht123456
   */
  passWord?: string;
  /**
   * @remarks
   * The authentication method for the replication permission of ApsaraDB RDS for PostgreSQL instances that use cloud disks. Valid values:
   * - **cert**
   * - **prefer**
   * - **verify-ca**
   * - **verify-full**: supported by ApsaraDB RDS for PostgreSQL 12 and later
   * > This parameter can be configured only when ClientCAEnabled is set to **1**.
   * 
   * @example
   * cert
   */
  replicationACL?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable SSL encryption. Valid values:
   * * **1**: enabled
   * * **0**: disabled
   * 
   * @example
   * 1
   */
  SSLEnabled?: number;
  /**
   * @remarks
   * The content of the custom server certificate for ApsaraDB RDS for MySQL and ApsaraDB RDS for PostgreSQL instances that use cloud disks.
   * 
   * > This parameter is required when CAType is set to **custom**.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----MIID*****QqEP-----END CERTIFICATE-----
   */
  serverCert?: string;
  /**
   * @remarks
   * The private key of the server certificate for ApsaraDB RDS for MySQL and ApsaraDB RDS for PostgreSQL instances that use cloud disks.
   * 
   * > This parameter is required when CAType is set to **custom**.
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----MIIE****ihfg==-----END PRIVATE KEY-----
   */
  serverKey?: string;
  /**
   * @remarks
   * The [minimum TLS version](https://help.aliyun.com/document_detail/95715.html) for ApsaraDB RDS for SQL Server instances. Client connections that use a TLS version lower than the specified version are rejected. Valid values: 1.0, 1.1, and 1.2.
   * 
   * For example, if you set this parameter to 1.1, the server accepts only client connection requests that use TLS 1.1 or TLS 1.2. Clients that attempt to establish connections by using TLS 1.0 are rejected.
   * 
   * @example
   * 1.1
   */
  tlsVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ACL: 'ACL',
      CAType: 'CAType',
      certificate: 'Certificate',
      clientCACert: 'ClientCACert',
      clientCAEnabled: 'ClientCAEnabled',
      clientCertRevocationList: 'ClientCertRevocationList',
      clientCrlEnabled: 'ClientCrlEnabled',
      connectionString: 'ConnectionString',
      DBInstanceId: 'DBInstanceId',
      forceEncryption: 'ForceEncryption',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      passWord: 'PassWord',
      replicationACL: 'ReplicationACL',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      SSLEnabled: 'SSLEnabled',
      serverCert: 'ServerCert',
      serverKey: 'ServerKey',
      tlsVersion: 'TlsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ACL: 'string',
      CAType: 'string',
      certificate: 'string',
      clientCACert: 'string',
      clientCAEnabled: 'number',
      clientCertRevocationList: 'string',
      clientCrlEnabled: 'number',
      connectionString: 'string',
      DBInstanceId: 'string',
      forceEncryption: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      passWord: 'string',
      replicationACL: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      SSLEnabled: 'number',
      serverCert: 'string',
      serverKey: 'string',
      tlsVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

