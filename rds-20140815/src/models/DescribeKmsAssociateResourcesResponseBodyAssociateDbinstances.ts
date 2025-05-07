// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKmsAssociateResourcesResponseBodyAssociateDBInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pgm-bp16p6f68130****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * *   **MySQL**
   * *   **SQLServer**
   * *   **PostgreSQL**
   * 
   * @example
   * PostgreSQL
   */
  engine?: string;
  /**
   * @remarks
   * The purpose of the key. Valid values:
   * 
   * *   **DiskEncryption**: cloud disk encryption
   * *   **TDE**: transparent data encryption
   * 
   * @example
   * DiskEncryption
   */
  keyUsedBy?: string;
  /**
   * @remarks
   * The state of the instance. Valid values:
   * 
   * *   **CREATING**: The instance is being created.
   * *   **ACTIVATION**: The instance is running.
   * *   **DELETING**: The instance is being deleted.
   * *   **RESTARTING**: The instance is being restarted.
   * *   **INS_MAINTAINING**: The configuration of the instance is being changed.
   * *   **INS_MAINTAINING**: The instance is being maintained.
   * *   **BACKUP_RECOVERING**: The instance is being restored.
   * *   **NET_MODIFYING**: The network type of the instance is being changed.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      engine: 'Engine',
      keyUsedBy: 'KeyUsedBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      engine: 'string',
      keyUsedBy: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

