// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Drive extends $dara.Model {
  /**
   * @remarks
   * The time when the drive was created.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The user who created the drive.
   * 
   * @example
   * c9b7a5aa04d14ae3867fdc886fa01da4
   */
  creator?: string;
  /**
   * @remarks
   * The description of the drive.
   * 
   * @example
   * vipdrive
   */
  description?: string;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * bj1
   */
  domainId?: string;
  /**
   * @remarks
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The drive name.
   * 
   * @example
   * drv1
   */
  driveName?: string;
  /**
   * @remarks
   * The type of the drive.
   * 
   * @example
   * normal
   */
  driveType?: string;
  /**
   * @remarks
   * The owner of the drive.
   * 
   * @example
   * c9b7a5aa04d14ae3867fdc886fa01da4
   */
  owner?: string;
  /**
   * @remarks
   * The type of the owner.
   * 
   * @example
   * user
   */
  ownerType?: string;
  /**
   * @remarks
   * The status of the driver.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The total storage space of the drive.
   * 
   * @example
   * 204800
   */
  totalSize?: number;
  /**
   * @remarks
   * The occupied storage space of the drive.
   * 
   * @example
   * 20480
   */
  usedSize?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      domainId: 'domain_id',
      driveId: 'drive_id',
      driveName: 'drive_name',
      driveType: 'drive_type',
      owner: 'owner',
      ownerType: 'owner_type',
      status: 'status',
      totalSize: 'total_size',
      usedSize: 'used_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      creator: 'string',
      description: 'string',
      domainId: 'string',
      driveId: 'string',
      driveName: 'string',
      driveType: 'string',
      owner: 'string',
      ownerType: 'string',
      status: 'string',
      totalSize: 'number',
      usedSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

