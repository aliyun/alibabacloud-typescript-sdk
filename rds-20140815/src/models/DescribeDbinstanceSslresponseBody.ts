// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceSSLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The method that is used to verify the instance. This parameter is supported only when the instance runs PostgreSQL with cloud disks.
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
   * The type of the server certificate. This parameter is supported only when the instance runs PostgreSQL with cloud disks. Valid values:
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
   * The public key of the CA that issues client certificates. This parameter is supported only when the instance runs PostgreSQL with cloud disks.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----MIID*****viXk=-----END CERTIFICATE-----
   */
  clientCACert?: string;
  /**
   * @remarks
   * The time when the public key of the CA that issues client certificates expires. This parameter is supported only when the instance runs PostgreSQL with cloud disks. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format and must be in UTC.
   * 
   * This parameter is not supported.
   * 
   * @example
   * -
   */
  clientCACertExpireTime?: string;
  /**
   * @remarks
   * The certificate revocation list (CRL) that contains revoked client certificates. This parameter is supported only when the instance runs PostgreSQL with cloud disks.
   * 
   * @example
   * -----BEGIN X509 CRL-----MIIB****19mg==-----END X509 CRL-----
   */
  clientCertRevocationList?: string;
  /**
   * @remarks
   * The endpoint that is protected by SSL encryption.
   * 
   * @example
   * rm-bp162dfr55g47****.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * Indicates whether the [forceful SSL encryption](https://help.aliyun.com/document_detail/95715.html) feature is enabled. This parameter is supported only for RDS for SQL Server instances.
   * 
   * *   **1**: The feature is enabled.
   * *   **0**: The feature is disabled.
   * 
   * @example
   * 1
   */
  forceEncryption?: string;
  /**
   * @remarks
   * The status of the SSL link. This parameter is supported only when the instance runs PostgreSQL with cloud disks.
   * 
   * *   **success**: The SSL link is successfully configured.
   * *   **setting**: The SSL link is being configured.
   * *   **failed**: The SSL link failed to be configured.
   * 
   * @example
   * setting
   */
  lastModifyStatus?: string;
  /**
   * @remarks
   * The reason why the SSL link stays in the current state. This parameter is supported only when the instance runs PostgreSQL with cloud disks.
   * 
   * @example
   * Modify DB Instance SSL Config.
   */
  modifyStatusReason?: string;
  /**
   * @remarks
   * The method that is used to verify the replication permission. This parameter is supported only when the instance runs PostgreSQL with cloud disks. Valid values:
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7705151C-E242-55AF-9929-2A3C39D979D2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the SSL certificate needs to be updated. Valid values:
   * 
   * >  An SSL certificate remains valid for one year. Before the used SSL certificate expires, you must update the validity period of the SSL certificate. If you do not update the validity period of the SSL certificate, your application or client that uses encrypted network connections cannot connect to your RDS instance.
   * 
   * **RDS instances that run MySQL and SQL Server**
   * 
   * *   **No**: The SSL certificate does not need to be updated.
   * *   **Yes**: The SSL certificate needs to be updated.
   * 
   * **RDS instances that run PostgreSQL**
   * 
   * *   **0**: The SSL certificate does not need to be updated.
   * *   **1**: The SSL certificate needs to be updated.
   * 
   * @example
   * Yes
   */
  requireUpdate?: string;
  /**
   * @remarks
   * The server certificate that needs to be updated. This parameter is supported only when the instance runs PostgreSQL with cloud disk.
   * 
   * @example
   * -
   */
  requireUpdateItem?: string;
  /**
   * @remarks
   * The reason why the server certificate needs to be updated. This parameter is supported only when the instance runs PostgreSQL with cloud disks.
   * 
   * @example
   * -
   */
  requireUpdateReason?: string;
  /**
   * @remarks
   * The time when the server certificate was created. This parameter is supported only when the instance runs PostgreSQL with cloud disks. In addition, this parameter is valid only when the CAType parameter value is aliyun.
   * 
   * @example
   * -
   */
  SSLCreateTime?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * **RDS instances that run MySQL and SQL Server**
   * 
   * *   **Yes**: SSL encryption is enabled.
   * *   **No**: SSL encryption is disabled.
   * 
   * **RDS instances that run PostgreSQL**
   * 
   * *   **on**: SSL encryption is enabled.
   * *   **off**: SSL encryption is disabled.
   * 
   * @example
   * Yes
   */
  SSLEnabled?: string;
  /**
   * @remarks
   * The time when the SSL certificate expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format and must be in UTC.
   * 
   * @example
   * 2022-10-11T08:16:43Z
   */
  SSLExpireTime?: string;
  /**
   * @remarks
   * The URL of the certificate that is used to issue the server certificate. This parameter is supported only when the instance runs PostgreSQL with cloud disk.
   * 
   * @example
   * -
   */
  serverCAUrl?: string;
  /**
   * @remarks
   * The content of the server certificate. This parameter is supported only when the instance runs PostgreSQL with cloud disks.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----MIID*****QqEP-----END CERTIFICATE-----
   */
  serverCert?: string;
  /**
   * @remarks
   * The private key of the server certificate. This parameter is supported only when the instance runs PostgreSQL with cloud disks.
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----MIIE****ihfg==-----END PRIVATE KEY-----
   */
  serverKey?: string;
  /**
   * @remarks
   * The [minimum Transport Layer Security (TLS) version](https://help.aliyun.com/document_detail/95715.html). Valid values: 1.0, 1.1, and 1.2. This parameter is supported only for ApsaraDB RDS for SQL Server instances.
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

