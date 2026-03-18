// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBackupRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * bk-t1232839
   */
  backupTaskId?: string;
  /**
   * @example
   * backupTask-desc1
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      backupTaskId: 'backupTaskId',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      backupTaskId: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

