// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceTDERequest extends $dara.Model {
  certificate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  DBName?: string;
  encryptionKey?: string;
  isRotate?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  passWord?: string;
  privateKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  roleArn?: string;
  /**
   * @remarks
   * This parameter is required.
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

