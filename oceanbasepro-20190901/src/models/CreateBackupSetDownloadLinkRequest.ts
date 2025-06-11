// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupSetDownloadLinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bak-6f****
   */
  backupSetId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
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

