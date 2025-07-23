// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup.
   * 
   * @example
   * backup-1648438****
   */
  backupId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the hardware security module (HSM).
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the backup.
   * 
   * @example
   * hsm-te****
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      name: 'Name',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      currentPage: 'number',
      instanceId: 'string',
      name: 'string',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

