// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDriveRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the drive is the default drive. Default value: false.
   * 
   * @example
   * true
   */
  default?: boolean;
  /**
   * @remarks
   * The description of the drive. The description can be up to 1,024 characters in length.
   * 
   * @example
   * drive for test
   */
  description?: string;
  /**
   * @remarks
   * The name of the drive. The name can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test_drive
   */
  driveName?: string;
  /**
   * @remarks
   * The type of the drive. Set the value to normal.
   * 
   * @example
   * normal
   */
  driveType?: string;
  /**
   * @remarks
   * The owner of the drive.
   * 
   * This parameter is required.
   * 
   * @example
   * 3b3d7245c159488da17d081ad6c64687
   */
  owner?: string;
  /**
   * @remarks
   * The type of the owner. Valid values:
   * 
   * user and group.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  ownerType?: string;
  /**
   * @remarks
   * The state of the drive. Valid values:
   * 
   * enabled and disabled.
   * 
   * Default value: enabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The total size of the drive. Unit: bytes. By default, the size is unlimited.
   * 
   * @example
   * 1024
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      default: 'default',
      description: 'description',
      driveName: 'drive_name',
      driveType: 'drive_type',
      owner: 'owner',
      ownerType: 'owner_type',
      status: 'status',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'boolean',
      description: 'string',
      driveName: 'string',
      driveType: 'string',
      owner: 'string',
      ownerType: 'string',
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

