// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceSSLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authentication method of the ApsaraDB RDS for PostgreSQL instance with cloud disks. Valid values:
   * - **cert**
   * - **prefer**
   * - **verify-ca**
   * - **verify-full** (supported by ApsaraDB RDS for PostgreSQL 12 and later)
   * 
   * @example
   * cert
   */
  ACL?: string;
  /**
   * @remarks
   * The server certificate type of the ApsaraDB RDS for PostgreSQL instance with cloud disks. Valid values:
   * - **aliyun**: The cloud certificate is used.
   * - **custom**: A custom certificate is used.
   * 
   * @example
   * aliyun
   */
  CAType?: string;
  /**
   * @remarks
   * The public key of the client certificate authority (CA) for the ApsaraDB RDS for PostgreSQL instance with cloud disks.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----MIID*****viXk=-----END CERTIFICATE-----
   */
  clientCACert?: string;
  /**
   * @remarks
   * The expiration time of the public key of the client certificate authorization authority (CA) for the ApsaraDB RDS for PostgreSQL instance with cloud disks. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * This parameter is not supported. You can ignore this parameter.
   * 
   * @example
   * -
   */
  clientCACertExpireTime?: string;
  /**
   * @remarks
   * The client certificate revocation certificate file of the ApsaraDB RDS for PostgreSQL instance with cloud disks.
   * 
   * @example
   * -----BEGIN X509 CRL-----MIIB****19mg==-----END X509 CRL-----
   */
  clientCertRevocationList?: string;
  /**
   * @remarks
   * The endpoint that is protected by SSL.
   * 
   * @example
   * rm-bp162dfr55g47****.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * Indicates whether the [forced Secure Sockets Layer (SSL) encryption feature](https://help.aliyun.com/document_detail/95715.html) is enabled for the ApsaraDB RDS for SQL Server instance. Valid values:
   * 
   * - **1**: Enabled.
   * - **0**: Disabled.
   * 
   * @example
   * 1
   */
  forceEncryption?: string;
  /**
   * @remarks
   * The current SSL link configuration status of the ApsaraDB RDS for PostgreSQL instance with cloud disks. Valid values:
   * 
   * - **success**: Successful.
   * - **setting**: Being configured.
   * - **failed**: Failed.
   * 
   * @example
   * setting
   */
  lastModifyStatus?: string;
  /**
   * @remarks
   * The reason for the current SSL link configuration status of the ApsaraDB RDS for PostgreSQL instance with cloud disks.
   * 
   * @example
   * Modify DB Instance SSL Config.
   */
  modifyStatusReason?: string;
  /**
   * @remarks
   * The authentication method for replication permissions of the ApsaraDB RDS for PostgreSQL instance with cloud disks. Valid values:
   * - **cert**
   * - **prefer**
   * - **verify-ca**
   * - **verify-full** (supported by ApsaraDB RDS for PostgreSQL 12 and later)
   * 
   * @example
   * cert
   */
  replicationACL?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7705151C-E242-55AF-9929-2A3C39D979D2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the SSL certificate needs to be updated. Valid values:
   * 
   * > The SSL certificate is valid for one year. If the certificate is not renewed after it expires, client programs that use encrypted connections cannot connect to the instance.
   * <details>
   * <summary>MySQL and SQL Server</summary>
   * 
   * - **No**: No update is required.
   * - **Yes**: An update is required.
   * </details>
   * 
   * <details>
   * <summary>PostgreSQL</summary>
   * 
   * - **0**: No update is required.
   * - **1**: An update is required.
   * 
   * </details>
   * 
   * @example
   * Yes
   */
  requireUpdate?: string;
  /**
   * @remarks
   * The list of server certificates that need to be updated for the ApsaraDB RDS for PostgreSQL instance with cloud disks.
   * 
   * @example
   * -
   */
  requireUpdateItem?: string;
  /**
   * @remarks
   * The reason why the certificates need to be updated for the ApsaraDB RDS for PostgreSQL instance with cloud disks.
   * 
   * @example
   * -
   */
  requireUpdateReason?: string;
  /**
   * @remarks
   * The creation time of the server certificate for the ApsaraDB RDS for PostgreSQL instance with cloud disks. This parameter is valid only when CAType is set to aliyun.
   * 
   * @example
   * -
   */
  SSLCreateTime?: string;
  /**
   * @remarks
   * The SSL encryption status. Valid values:
   * <details>
   * <summary>MySQL and SQL Server</summary>
   * 
   * - **Yes**: Enabled.
   * - **No**: Disabled.
   * </details>
   * 
   * <details>
   * <summary>PostgreSQL</summary>
   * 
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * </details>
   * 
   * @example
   * Yes
   */
  SSLEnabled?: string;
  /**
   * @remarks
   * The expiration time of the SSL certificate. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2025-06-16T08:16:43Z
   */
  SSLExpireTime?: string;
  /**
   * @remarks
   * The URL of the CA certificate that is used to issue the server certificate for the ApsaraDB RDS for PostgreSQL instance with cloud disks.
   * 
   * @example
   * -
   */
  serverCAUrl?: string;
  /**
   * @remarks
   * The content of the server certificate for the ApsaraDB RDS for PostgreSQL instance with cloud disks.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----MIID*****QqEP-----END CERTIFICATE-----
   */
  serverCert?: string;
  /**
   * @remarks
   * The private key of the server certificate for the ApsaraDB RDS for PostgreSQL instance with cloud disks.
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----MIIE****ihfg==-----END PRIVATE KEY-----
   */
  serverKey?: string;
  /**
   * @remarks
   * The specified [minimum TLS version](https://help.aliyun.com/document_detail/95715.html) for the ApsaraDB RDS for SQL Server instance. Valid values: 1.0, 1.1, and 1.2.
   * 
   * @example
   * 1.1
   */
  tlsVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ACL: 'ACL',
      CAType: 'CAType',
      clientCACert: 'ClientCACert',
      clientCACertExpireTime: 'ClientCACertExpireTime',
      clientCertRevocationList: 'ClientCertRevocationList',
      connectionString: 'ConnectionString',
      forceEncryption: 'ForceEncryption',
      lastModifyStatus: 'LastModifyStatus',
      modifyStatusReason: 'ModifyStatusReason',
      replicationACL: 'ReplicationACL',
      requestId: 'RequestId',
      requireUpdate: 'RequireUpdate',
      requireUpdateItem: 'RequireUpdateItem',
      requireUpdateReason: 'RequireUpdateReason',
      SSLCreateTime: 'SSLCreateTime',
      SSLEnabled: 'SSLEnabled',
      SSLExpireTime: 'SSLExpireTime',
      serverCAUrl: 'ServerCAUrl',
      serverCert: 'ServerCert',
      serverKey: 'ServerKey',
      tlsVersion: 'TlsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ACL: 'string',
      CAType: 'string',
      clientCACert: 'string',
      clientCACertExpireTime: 'string',
      clientCertRevocationList: 'string',
      connectionString: 'string',
      forceEncryption: 'string',
      lastModifyStatus: 'string',
      modifyStatusReason: 'string',
      replicationACL: 'string',
      requestId: 'string',
      requireUpdate: 'string',
      requireUpdateItem: 'string',
      requireUpdateReason: 'string',
      SSLCreateTime: 'string',
      SSLEnabled: 'string',
      SSLExpireTime: 'string',
      serverCAUrl: 'string',
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

