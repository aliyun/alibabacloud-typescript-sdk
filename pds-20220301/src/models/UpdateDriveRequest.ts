// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDriveRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the drive. The description can be up to 1,024 characters in length.
   */
  description?: string;
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The name of the drive. The name can be up to 128 characters in length.
   * 
   * @example
   * my_drive
   */
  driveName?: string;
  /**
   * @remarks
   * The owner of the drive. Note: You can modify the owner of a personal drive only by using an AccessKey pair.
   * 
   * @example
   * user1
   */
  owner?: string;
  /**
   * @remarks
   * The state of the drive. Valid values:
   * 
   * enabled and disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The total size of the drive. Unit: bytes. A value of -1 specifies that the size is unlimited.
   * 
   * @example
   * 10240
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      driveId: 'drive_id',
      driveName: 'drive_name',
      owner: 'owner',
      status: 'status',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      driveId: 'string',
      driveName: 'string',
      owner: 'string',
      status: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

