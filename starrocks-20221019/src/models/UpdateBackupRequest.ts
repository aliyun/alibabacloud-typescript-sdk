// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBackupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the cluster is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the backup job.
   * 
   * @example
   * bk-t1232839
   */
  backupTaskId?: string;
  /**
   * @remarks
   * The description of the backup.
   * 
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

