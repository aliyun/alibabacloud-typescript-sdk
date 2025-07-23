// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup.
   * 
   * This parameter is required.
   * 
   * @example
   * backup-fdb897sdf****
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
   * The image generation mode. Valid values:
   * 
   * *   PERIODIC: It is automatically generated.
   * *   MANUAL: It is manually generated.
   * 
   * @example
   * MANUAL
   */
  mode?: string;
  /**
   * @remarks
   * The number of images per page. Valid values: 1 to 1000.
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
      mode: 'Mode',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      currentPage: 'number',
      mode: 'string',
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

