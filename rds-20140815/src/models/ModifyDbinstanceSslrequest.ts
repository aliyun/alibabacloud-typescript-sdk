// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceSSLRequest extends $dara.Model {
  ACL?: string;
  CAType?: string;
  certificate?: string;
  clientCACert?: string;
  clientCAEnabled?: number;
  clientCertRevocationList?: string;
  clientCrlEnabled?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  connectionString?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  forceEncryption?: string;
  ownerAccount?: string;
  ownerId?: number;
  passWord?: string;
  replicationACL?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  SSLEnabled?: number;
  serverCert?: string;
  serverKey?: string;
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

