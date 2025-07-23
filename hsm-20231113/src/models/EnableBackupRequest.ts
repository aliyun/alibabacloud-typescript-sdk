// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableBackupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup.
   * 
   * This parameter is required.
   * 
   * @example
   * backup-1736207****
   */
  backupId?: string;
  /**
   * @remarks
   * The ID of the HSM.
   * 
   * This parameter is required.
   * 
   * @example
   * hsm-cn-mp90fxef****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

