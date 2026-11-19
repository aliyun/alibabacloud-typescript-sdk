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
   * Specifies whether to force SSL encryption for connections. Valid values:
   * 
   * - **1**: forces SSL encryption.
   * - **0**: does not force SSL encryption.
   * 
   * > 
   * > - Forced SSL encryption applies only to cloud disk instances running MongoDB 7.0 and 8.0, and the following minor engine version requirements must be met:
   * > - - MongoDB 7.0: The minor engine version must be 8.0.13 or later.
   * > - - MongoDB 8.0: The minor engine version must be 9.0.5 or later.
   * 
   * >Warning: After forced SSL encryption is enabled, you cannot connect to the instance without SSL encryption.</warning>
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
   * Specifies the operation to perform on the SSL feature. Valid values:
   * - **Open**: enables Secure Sockets Layer (SSL) encryption.
   * - **Close**: disables Secure Sockets Layer (SSL) encryption.
   * - **Update**: updates the SSL certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * Open
   */
  SSLAction?: string;
  /**
   * @remarks
   * Specifies the time when the SSL configuration of the MongoDB instance is modified. Valid values:
   * 
   * - 0: modifies the configuration immediately.
   * 
   * - 1: modifies the configuration within the maintenance window.
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

