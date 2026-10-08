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
   * - **MySQL**
   * - **SQLServer**
   * - **PostgreSQL**
   * 
   * @example
   * PostgreSQL
   */
  engine?: string;
  /**
   * @remarks
   * The purpose of the key. Valid values:
   * 
   * - **DiskEncryption**: cloud disk data encryption.
   * - **TDE**: transparent data encryption.
   * 
   * @example
   * DiskEncryption
   */
  keyUsedBy?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - **CREATING**: The instance is being created.
   * - **ACTIVATION**: The instance is running.
   * - **DELETING**: The instance is being deleted.
   * - **RESTARTING**: The instance is being restarted.
   * - **CLASS_CHANGING**: The instance specifications are being changed.
   * - **INS_MAINTAINING**: The instance is being maintained.
   * - **BACKUP_RECOVERING**: A backup is being restored.
   * - **NET_MODIFYING**: The network is being changed.
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

export class DescribeKmsAssociateResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of associated ApsaraDB RDS instances.
   */
  associateDBInstances?: DescribeKmsAssociateResourcesResponseBodyAssociateDBInstances[];
  /**
   * @remarks
   * Indicates whether associated ApsaraDB RDS instances exist.
   * 
   * - **true**: Associated instances exist.
   * - **false**: No associated instances exist.
   * 
   * @example
   * true
   */
  associateStatus?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 38F6B598-A6D7-508A-8401-12BB9936****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      associateDBInstances: 'AssociateDBInstances',
      associateStatus: 'AssociateStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateDBInstances: { 'type': 'array', 'itemType': DescribeKmsAssociateResourcesResponseBodyAssociateDBInstances },
      associateStatus: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.associateDBInstances)) {
      $dara.Model.validateArray(this.associateDBInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

