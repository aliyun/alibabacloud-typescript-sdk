// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceSSLRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2235****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to forcibly enable SSL encryption for connections. Valid values:
   * 
   * - **1**: Forcibly enable SSL encryption.
   * 
   * - **0**: Do not forcibly enable SSL encryption.
   * 
   * > * Forced SSL encryption is supported only for MongoDB 7.0 and 8.0 instances that use cloud disks and meet the following minor engine version requirements:
   * >
   * > * - For version 7.0, the minor engine version must be 8.0.13 or later.
   * >
   * > * - For version 8.0, the minor engine version must be 9.0.5 or later.
   * 
   * >Warning: 
   * 
   * After you enable forced SSL encryption, only SSL connections to the instance are allowed.
   * 
   * @example
   * 0
   */
  forceEncryption?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The operation to perform on the SSL feature. Valid values:
   * 
   * - **Open**: Enable SSL encryption.
   * 
   * - **Close**: Disable SSL encryption.
   * 
   * - **Update**: Update the SSL certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * Open
   */
  SSLAction?: string;
  /**
   * @remarks
   * The time to modify the SSL configuration of the MongoDB instance. Valid values:
   * 
   * - 0: Modify immediately.
   * 
   * - 1: Modify within the maintenance window.
   * 
   * @example
   * 0
   */
  switchMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      forceEncryption: 'ForceEncryption',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      SSLAction: 'SSLAction',
      switchMode: 'SwitchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      forceEncryption: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      SSLAction: 'string',
      switchMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

