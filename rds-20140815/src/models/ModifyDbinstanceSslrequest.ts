// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceSSLRequest extends $dara.Model {
  /**
   * @remarks
   * The method that is used to verify the identities of clients. This parameter is supported only when the instance runs PostgreSQL with cloud disks. In addition, this parameter is available only when the public key of the CA that issues client certificates is enabled. Valid values:
   * 
   * *   **cert**
   * *   **prefer**
   * *   **verify-ca**
   * *   **verify-full** (supported only when the instance runs PostgreSQL 12 or later)
   * 
   * @example
   * cert
   */
  ACL?: string;
  /**
   * @remarks
   * The type of the server certificate. This parameter is supported only when the instance runs MySQL or PostgreSQL with cloud disks. If you set SSLEnabled to **1**, the default value of this parameter is **aliyun**. Valid values:
   * 
   * *   **aliyun**: a cloud certificate
   * *   **custom**: a custom certificate
   * 
   * @example
   * aliyun
   */
  CAType?: string;
  /**
   * @remarks
   * The custom certificate. The custom certificate is in the `PFX` format.
   * 
   * *   Public endpoint: `oss-<The ID of the region>.aliyuncs.com:<The name of the bucket>:<The name of the certificate file (The file name contains the extension.)>`
   * *   Internal endpoint: `oss-<The ID of the region>-internal.aliyuncs.com:<The name of the bucket>:<The name of the certificate file (The file name contains the extension.)>`
   * 
   * @example
   * oss-cn-beijing-internal.aliyuncs.com:zhttest:test.pfx
   */
  certificate?: string;
  /**
   * @remarks
   * The public key of the CA that issues client certificates. This parameter is supported only when the instance runs PostgreSQL with cloud disks. This parameter must be specified when ClientCAEbabled is set to **1**.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----MIID*****viXk=-----END CERTIFICATE-----
   */
  clientCACert?: string;
  /**
   * @remarks
   * Specifies whether to enable the public key of the CA that issues client certificates. This parameter is supported only when the instance runs PostgreSQL with cloud disks. Valid values:
   * 
   * *   **1**: enables the public key.
   * *   **0**: disables the public key.
   * 
   * @example
   * 1
   */
  clientCAEnabled?: number;
  /**
   * @remarks
   * The CRL that contains revoked client certificates. This parameter is supported only when the instance runs PostgreSQL with cloud disks. This parameter must be specified when ClientCrlEnabled is set to **1**.
   * 
   * @example
   * -----BEGIN X509 CRL-----MIIB****19mg==-----END X509 CRL-----
   */
  clientCertRevocationList?: string;
  /**
   * @remarks
   * Specifies whether to enable a certificate revocation list (CRL) that contains revoked client certificates. This parameter is supported only when the instance runs PostgreSQL with cloud disks. In addition, this parameter is available only when the public key of the CA that issues client certificates is enabled. Valid values:
   * 
   * *   **1**: enables the CRL.
   * *   **0**: disables the CRL.
   * 
   * @example
   * 1
   */
  clientCrlEnabled?: number;
  /**
   * @remarks
   * The internal or public endpoint for which the server certificate needs to be created or updated.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxx.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable the forceful SSL encryption feature. This parameter is supported only for ApsaraDB RDS for SQL Server instances. For more information, see [Configure the SSL encryption feature](https://help.aliyun.com/document_detail/95715.html). Valid values:
   * 
   * *   **1**: enables the feature.
   * *   **0**: disables the feature.
   * 
   * @example
   * 1
   */
  forceEncryption?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the certificate.
   * 
   * @example
   * zht123456
   */
  passWord?: string;
  /**
   * @remarks
   * The method that is used to verify the replication permission. This parameter is supported only when the instance runs PostgreSQL with cloud disks. In addition, this parameter is available only when the public key of the CA that issues client certificates is enabled. Valid values:
   * 
   * *   **cert**
   * *   **prefer**
   * *   **verify-ca**
   * *   **verify-full** (supported only when the instance runs PostgreSQL 12 or later)
   * 
   * @example
   * cert
   */
  replicationACL?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable or disable the SSL encryption feature. Valid values:
   * 
   * *   **1**: enables the feature.
   * *   **0**: disables the feature.
   * 
   * @example
   * 1
   */
  SSLEnabled?: number;
  /**
   * @remarks
   * The content of the server certificate. This parameter is supported only when the instance runs PostgreSQL with cloud disks. This parameter must be specified when CAType is set to **custom**.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----MIID*****QqEP-----END CERTIFICATE-----
   */
  serverCert?: string;
  /**
   * @remarks
   * The private key of the server certificate. This parameter is supported only when the instance runs PostgreSQL with cloud disks. This parameter must be specified when CAType is set to **custom**.
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----MIIE****ihfg==-----END PRIVATE KEY-----
   */
  serverKey?: string;
  /**
   * @remarks
   * The minimum Transport Layer Security (TLS) version. Valid values: 1.0, 1.1, and 1.2. This parameter is supported only for ApsaraDB RDS for SQL Server instances. For more information, see [Configure the SSL encryption feature](https://help.aliyun.com/document_detail/95715.html).
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

