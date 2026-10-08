// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableBackupEncryptionRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-wz951f7f******
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The backup encryption key.
   * 
   * @example
   * 564cf6c4-d2ee-495b-b265-5724******
   */
  encryptionKey?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      encryptionKey: 'EncryptionKey',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      encryptionKey: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

