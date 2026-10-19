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
   * Specifies whether to force Secure Sockets Layer (SSL) encryption for connections. Valid values:
   * 
   * - **1**: Forces Secure Sockets Layer (SSL) encryption.
   * - **0**: Does not force Secure Sockets Layer (SSL) encryption.
   * 
   * > 
   * > - Forced Secure Sockets Layer (SSL) encryption applies only to MongoDB 7.0 and 8.0 instances that use cloud disks and meet the following minor engine version requirements:
   * >   - MongoDB 7.0: The minor engine version must be 8.0.13 or later.
   * >   - MongoDB 8.0: The minor engine version must be 9.0.5 or later.
   * 
   * >Warning: After you enable forced Secure Sockets Layer (SSL) encryption, you cannot connect to the instance by using non-SSL connections.</warning>
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
   * - **Open**: Enables Secure Sockets Layer (SSL) encryption.
   * - **Close**: Disables Secure Sockets Layer (SSL) encryption.
   * - **Update**: Updates the SSL certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * Open
   */
  SSLAction?: string;
  /**
   * @remarks
   * The time when the SSL configuration of the MongoDB instance is modified. Valid values:
   * 
   * - 0: Modifies the configuration immediately.
   * 
   * - 1: Modifies the configuration within the O&M window.
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

