// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackupFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  backupFileIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      backupFileIdList: 'BackupFileIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupFileIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.backupFileIdList)) {
      $dara.Model.validateArray(this.backupFileIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

